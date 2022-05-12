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
      const dateParts = date.split('-').map(date => Number(date));
      let fifteenDaysAfterTheDate = new Date(
        dateParts[2],
        dateParts[1] - 1,
        dateParts[0],
      );
      fifteenDaysAfterTheDate.setDate(fifteenDaysAfterTheDate.getDate() + 5);
      var onlyDate = fifteenDaysAfterTheDate.toISOString().split('T')[0];
      // var onlyDate = await knex.raw(`
      //   SELECT To_Date('${date}','DD-MM-YYYY') + 15 data 
      //   FROM DUAL
      //   `);

      //whereDate = `AND it_agenda_central.hr_agenda BETWEEN To_Date('${date}', 'DD-MM-YYYY') AND To_Date('${onlyDate}','YYYY-MM-DD')`;
    }
    console.log(onlyDate);
    console.log(date);

    // console.log('SELECT');

    const allSlots: any[] = await knex.raw(`
      SELECT DISTINCT 
      dbamv.it_agenda_central.cd_agenda_central
        cd_it_agenda_central,
        agenda_central.cd_prestador,
        agenda_central.cd_unidade_atendimento,
        it_agenda_central.hr_agenda,
        'ALL' Genero 
      FROM agenda_central    
      LEFT JOIN dbamv.it_agenda_central ON it_agenda_central.cd_agenda_central= agenda_central.cd_agenda_central      
      WHERE sn_ativo = 'S'
      AND nm_paciente IS NULL
      AND it_agenda_central.hr_agenda > SYSDATE  
      AND it_agenda_central.hr_agenda BETWEEN To_Date('${date}', 'DD-MM-YYYY') AND To_Date('${onlyDate}','YYYY-MM-DD')
     ORDER BY hr_agenda ASC
    `);

    const slots: Slot[] = allSlots.map(slot => ({
      id: slot.id,
      slotId: slot.CD_IT_AGENDA_CENTRAL,
      professionalId: slot.CD_PRESTADOR,
      unitId: slot.CD_UNIDADE_ATENDIMENTO,
      productId: '',
      healthPlan: '',
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

// Ident. do prod., esse padrão SulAmérica.
// DiretoSP - Plano de saúde. Definido pela SulAmérica