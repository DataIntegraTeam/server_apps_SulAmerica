import { ICancelingRepository } from '../../repositories/ICancelingRepository';

export type TRequestData = {
  reason?: 'SAME_DAY_APPOINTMENT' | 'RESCHEDULE_ANOTHER_DAY' | 'DONT_NEED' | 'DONT_WANT_TO_INFORM';
  patientBenefitCode: string;
  appointmentId: string;
}
export type TReturn = {
  status: number;
  message: string | undefined;
}
class CancelingUseCase {
  constructor(private cancelingRepository: ICancelingRepository) { }

  async execute(data: TRequestData): Promise<TReturn> {

    const updated = await this.cancelingRepository.update(data);

    if (updated instanceof Error) return {
      status: 404, message: updated.message
    }

    return { status: 204, message: undefined }
  }
}

export { CancelingUseCase };