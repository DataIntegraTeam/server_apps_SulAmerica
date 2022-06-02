import { Point } from '../model/Point';

interface IPointsRepository {
  list(): Promise<Point[]>;
}

export { IPointsRepository };
