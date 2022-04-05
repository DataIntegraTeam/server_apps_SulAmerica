import { Specialtie } from '../../model/Specialtie';
import { ISpecialtiesRepository } from '../ISpecialtiesRepository';
import knex from '../../../../database/db';

export class SpecialtiesRepository implements ISpecialtiesRepository {
  private static INSTANCE: ISpecialtiesRepository;

  private constructor() {}
  public static getInstance(): SpecialtiesRepository {
    if (!SpecialtiesRepository.INSTANCE) {
      SpecialtiesRepository.INSTANCE = new SpecialtiesRepository();
    }
    return SpecialtiesRepository.INSTANCE;
  }

  async list(): Promise<Specialtie[]> {
    const allSpecialtie: any[] = await knex.raw(`
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
    `);

    const specialties: Specialtie[] = allSpecialtie.map(specialtie => ({
      id: specialtie.CD_PRESTADOR,
      unitId: specialtie.CD_UNIDADE_ATENDIMENTO,
      name: specialtie.NM_PRESTADOR,
      gender: specialtie.TIPO,
      document: {
        type: specialtie.DS_CONSELHO,
        state: specialtie.CD_UF,
        number: specialtie.NR_DOCUMENTO,
      },
      photo: `https://${specialtie.HTTPS}`,

      createAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    return specialties;
  }
}
