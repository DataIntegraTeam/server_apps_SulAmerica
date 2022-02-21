import { Professional } from '../../model/Professional';
import { IProfessionalsRepository } from '../IProfessionalsRepository';
import knex from '../../../../database/db';

export class ProfessionalsRepository implements IProfessionalsRepository {

  private static INSTANCE: IProfessionalsRepository;

  private constructor() {
  }
  public static getInstance(): ProfessionalsRepository {
    if (!ProfessionalsRepository.INSTANCE) {
      ProfessionalsRepository.INSTANCE = new ProfessionalsRepository();
    }
    return ProfessionalsRepository.INSTANCE;
  }

  async list(): Promise<Professional[]> {

    const allProfessional: any[] = await knex.raw(`
      SELECT DISTINCT (agenda_central.cd_prestador),
        agenda_central.cd_unidade_atendimento,
        prestador.nm_prestador, 
        conselho.ds_conselho, 
        conselho.cd_uf, 
        prestador.nr_documento
      FROM dbamv.agenda_central 
      LEFT JOIN dbamv.prestador ON prestador.CD_PRESTADOR = agenda_central.CD_PRESTADOR
      LEFT JOIN dbamv.conselho ON conselho.CD_CONSELHO = prestador.CD_CONSELHO
      WHERE agenda_central.cd_prestador IS NOT NULL    
    `)

    const professionals: Professional[] = allProfessional.map(professional => ({
      id: professional.CD_PRESTADOR,
      unitId: professional.CD_UNIDADE_ATENDIMENTO,
      name: professional.NM_PRESTADOR,
      gender: professional.TIPO,
      document: {
        type: professional.DS_CONSELHO,
        state: professional.CD_UF,
        number: professional.NR_DOCUMENTO
      },
      photo: professional.HTTPS,
    }))

    return professionals
  }
}