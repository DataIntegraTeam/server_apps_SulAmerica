import { Unit } from '../../model/Unit';
import { IUnitsRepository } from '../IUnitsRepository';
import knex from '../../../../database/db';

export class UnitsRepository implements IUnitsRepository {
  private static INSTANCE: UnitsRepository;

  private constructor() {}
  public static getInstance(): UnitsRepository {
    if (!UnitsRepository.INSTANCE) {
      UnitsRepository.INSTANCE = new UnitsRepository();
    }
    return UnitsRepository.INSTANCE;
  }

  async list(): Promise<Unit[]> {
    const allUnits: any[] = await knex.raw(`
        SELECT DISTINCT(agenda_central.cd_unidade_atendimento),
          unidade_atendimento.ds_unidade_atendimento,
          multi_empresas.nr_cep,
          multi_empresas.nm_bairro,
          cidade.nm_cidade,
          multi_empresas.ds_endereco,
          multi_empresas.cd_uf,
          multi_empresas.nr_telefone_empresa,
          'PHYSICAL' Tipo 
        FROM dbamv.agenda_central
        LEFT JOIN dbamv.multi_empresas ON multi_empresas.cd_multi_empresa = agenda_central.cd_multi_empresa
        LEFT JOIN dbamv.unidade_atendimento ON unidade_atendimento.cd_unidade_atendimento = agenda_central.cd_unidade_atendimento
        LEFT JOIN dbamv.cidade ON cidade.cd_cidade = multi_empresas.cd_cidade        
        `);

    const units: Unit[] = allUnits.map(unit => ({
      id: unit.CD_UNIDADE_ATENDIMENTO,
      name: unit.DS_UNIDADE_ATENDIMENTO,
      shortName: 'aa',
      address: {
        postalCode: unit.NR_CEP,
        neighborhood: unit.NM_BAIRRO,
        city: unit.NM_CIDADE,
        state: unit.CD_UF,
        street: unit.DS_ENDERECO,
      },
      phone: unit.NR_TELEFONE_EMPRESA,
      descriptionOperation: '2ª a sábado das 6:55 às 19h',
      latitude: -23.199437,
      longitude: -46.200313,
      type: unit.TIPO,

      createAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    return units;
  }
}
