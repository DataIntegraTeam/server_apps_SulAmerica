import { Professional } from '../../model/Professional';
import { IProfessionalsRepository } from '../IProfessionalsRepository';
import knex from '../../../../database/db';

export class ProfessionalsRepository implements IProfessionalsRepository {
  private static INSTANCE: IProfessionalsRepository;

  private constructor() { }
  public static getInstance(): ProfessionalsRepository {
    if (!ProfessionalsRepository.INSTANCE) {
      ProfessionalsRepository.INSTANCE = new ProfessionalsRepository();
    }
    return ProfessionalsRepository.INSTANCE;
  }

  async list(): Promise<Professional[]> {
    const allProfessional: any[] = await knex.raw(`
      SELECT DISTINCT
          (CASE WHEN AGENDA_CENTRAL.cd_prestador IS NULL THEN AGENDA_CENTRAL.cd_recurso_central ELSE AGENDA_CENTRAL.cd_prestador END) cd_prestador,
          (CASE WHEN PRESTADOR.nm_prestador IS NULL THEN (SELECT ds_recurso_central 
                                                            FROM recurso_central 
                                                          WHERE cd_recurso_central = AGENDA_CENTRAL.cd_recurso_central)
                                                  ELSE nm_prestador END) nm_prestador,
          agenda_central.cd_unidade_atendimento,

          conselho.ds_conselho, 
          conselho.cd_uf, 
          prestador.nr_documento
      FROM dbamv.agenda_central 
      LEFT JOIN dbamv.prestador ON prestador.CD_PRESTADOR = agenda_central.CD_PRESTADOR
      LEFT JOIN dbamv.conselho ON conselho.CD_CONSELHO = prestador.CD_CONSELHO    
    `);

    const professionals: Professional[] = allProfessional.map(professional => ({
      id: professional.CD_PRESTADOR,
      unitId: professional.CD_UNIDADE_ATENDIMENTO,
      name: professional.NM_PRESTADOR,
      gender: professional.TIPO,
      document: {
        type: professional.DS_CONSELHO,
        state: professional.CD_UF,
        number: professional.NR_DOCUMENTO,
      },
      photo: `https://${professional.HTTPS}`,

      createAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    return professionals;
  }
}
