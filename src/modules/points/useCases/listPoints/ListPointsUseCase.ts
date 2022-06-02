import { Point } from '../../model/Point';
import { IPointsRepository } from '../../repositories/IPointsRepository';

type TListPointsUseCase = { data: Point[] };

class ListPointsUseCase {
  constructor(private PointsRepository: IPointsRepository) {}

  async execute(): Promise<TListPointsUseCase> {
    const points = await this.PointsRepository.list();

    const data: TListPointsUseCase = { data: points };
    return data;
  }
}

export { ListPointsUseCase };
