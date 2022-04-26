import { Slot } from '../../model/Slot';
import { ISlotsRepository } from '../ISlotsRepository';
import knex from '../../../../database/db';

export class SlotsRepository implements ISlotsRepository {
  private static INSTANCE: SlotsRepository;

  private constructor() { }
  public static getInstance(): SlotsRepository {
    if (!SlotsRepository.INSTANCE) {
      SlotsRepository.INSTANCE = new SlotsRepository();
    }
    return SlotsRepository.INSTANCE;
  }

  async list(date?: string): Promise<Slot[]> {
    let whereDate = '';
    if (date) {
      const dateParts = date.split('-').map(date => Number(date))
      let fifteenDaysAfterTheDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
      fifteenDaysAfterTheDate.setDate(fifteenDaysAfterTheDate.getDate() + 3);
      const onlyDate = fifteenDaysAfterTheDate.toISOString().split('T')[0];

      console.log(onlyDate);
      whereDate = `AND To_Char(it_agenda_central.hr_agenda, 'DD/MM/YYYY') >= To_Date('${date}','DD/MM/YYYY') AND To_Char(it_agenda_central.hr_agenda, 'DD/MM/YYYY') <= To_Date('${onlyDate}','YYYY/MM/DD')`;
    }
    const allSlots: any[] = await knex.raw(`
      SELECT it_agenda_central.cd_it_agenda_central,
        agenda_central.cd_prestador,
        agenda_central.cd_unidade_atendimento,
        it_agenda_central.hr_agenda,
        'ALL' Genero 
      FROM agenda_central    
      LEFT JOIN dbamv.it_agenda_central ON it_agenda_central.cd_agenda_central= agenda_central.cd_agenda_central      
      WHERE sn_ativo = 'S'
      AND nm_paciente IS NULL 
     ${whereDate}
     ORDER BY hr_agenda ASC
    `);

    const slots: Slot[] = allSlots.map(slot => ({
      id: slot.id,
      slotId: slot.CD_IT_AGENDA_CENTRAL,
      professionalId: slot.CD_PRESTADOR,
      unitId: slot.CD_UNIDADE_ATENDIMENTO,
      productId: 'Identificador do produto, esse padrão SulAmérica.',
      healthPlan: 'DiretoSP - Plano de saúde. Definido pela SulAmérica',
      date: slot.HR_AGENDA,
      requirement: {
        gender: slot.TIPO,
        minAge: 18,
        maxAge: 50,
      },
      createAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    return slots;
  }
}
