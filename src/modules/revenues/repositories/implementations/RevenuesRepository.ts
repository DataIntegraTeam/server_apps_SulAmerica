import { Revenue } from '../../model/Revenue';
import { IRevenuesRepository } from '../IRevenuesRepository';
import knex from '../../../../database/db';

export class RevenuesRepository implements IRevenuesRepository {
  private static INSTANCE: RevenuesRepository;

  private constructor() { }
  public static getInstance(): RevenuesRepository {
    if (!RevenuesRepository.INSTANCE) {
      RevenuesRepository.INSTANCE = new RevenuesRepository();
    }
    return RevenuesRepository.INSTANCE;
  }

  async create(data: Revenue): Promise<void | Error> {
    console.log(data);
    try {
      let [result] = await knex.raw(
        `SELECT cd_dti_beneficiario FROM dbahsi.hsi_beneficiario WHERE cd_beneficiario = ${data.codigo_beneficiario}`,
      );
      console.log(result);
      if (!result) {
        throw new Error('RegisteredAlreadyExists!');
      }

      const seq_agenda = await knex.raw(
        `SELECT dataintegra.seq_dti_beneficiario.nextval seq_dti from dual`,
      );

      console.log(seq_agenda[0].SEQ_DTI);
      const sql = `INSERT INTO dbahsi.hsi_beneficiario(
        cd_dti_beneficiario, 
        ds_erro, 
        dt_gerado, 
        cd_produto, 
        cd_beneficiario, 
        cd_digito_verificador, 
        cd_pref_empresa, 
        cd_empresa, 
        cd_familiar_benef, 
        cd_prestador, 
        cd_procedimento, 
        mes_referencia, 
        vl_captation, 
        percentual_guia_gaptation, 
        cd_contrato)        
        VALUES 
        ('${seq_agenda[0].SEQ_DTI}',
        '${(data.ds_erro = 'null')}',        
        to_Date('${new Date().toISOString().split('T')[0]}','YYYY-MM-DD'),
        '${data.codigo_produto}',
        '${data.codigo_beneficiario}',
        '${data.codigo_digito_verificador}',
        '${data.codigo_pref_empresa}',
        '${data.codigo_empresa}',
        '${data.codigo_familiar_benef}', 
        '${data.codigo_prestador}', 
        '${data.codigo_procedimento}', 
        '${data.mes_referencia}',
        '${data.valor_captation}',
        '${data.percentual_guia_gaptation}', 
        '${data.codigo_contrato}')
        `;

      await knex.raw(sql);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
