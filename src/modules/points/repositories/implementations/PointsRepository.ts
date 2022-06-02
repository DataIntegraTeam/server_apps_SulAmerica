import { Point } from '../../model/Point';
import { IPointsRepository } from '../IPointsRepository';
import knex from '../../../../database/db';

export class PointsRepository implements IPointsRepository {
  private static INSTANCE: PointsRepository;

  private constructor() {}
  public static getInstance(): PointsRepository {
    if (!PointsRepository.INSTANCE) {
      PointsRepository.INSTANCE = new PointsRepository();
    }
    return PointsRepository.INSTANCE;
  }

  async list(): Promise<Point[]> {
    const allPpoints: any[] = await knex.raw(`
    SELECT 
      ID_PONTO,
      NM_PONTO,
      QR_ERROS,
      QR_AGUARDANDO,
      QR_SUCESSO,
      QR_ULTIMA_EXECUCAO,
      QR_ERROS_AGRUP,
      SN_ATIVO,
      ID_MULTI_EMPRESAS,
      NR_MIN_NOTIFICA,
      ID_SISTEMA_TERCEIRO
    FROM ADMIN.tbl_mon_pontos        
  `);

    const points: Point[] = allPpoints.map(point => ({
      id_point: point.ID_PONTO,
      name: point.NM_PONTO,
      errors: point.QR_ERROS,
      waiting: point.QR_AGUARDANDO,
      success: point.QR_SUCESSO,
      last_execution: point.QR_ULTIMA_EXECUCAO,
      grouped_errors: point.QR_ERROS_AGRUP,
      sn_active: point.SN_ATIVO,
      id_multi_companies: point.ID_MULTI_EMPRESAS,
      nr_min_notifies: point.NR_MIN_NOTIFICA,
      id_third_system: point.ID_SISTEMA_TERCEIRO,
    }));

    return points;
  }
}

/*const points: Point[] = allPpoints.map(point => ({
  id: point.CD_UNIDADE_ATENDIMENTO,
  name: point.NM_PONTO,
  errors: point.QR_ERROS,
  waiting: point.QR_AGUARDANDO,
  success: point.QR_SUCESSO,
  last_execution: point.QR_ULTIMA_EXECUCAO,
  grouped_errors: point.QR_ERROS_AGRUP,
  sn_active: point.SN_ATIVO,
  id_multi_companies: point.ID_MULTI_EMPRESAS,
  nr_min_notifies: point.NR_MIN_NOTIFICA,
  id_third_system: point.ID_SISTEMA_TERCEIRO,
}));
*/
