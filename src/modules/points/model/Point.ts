import { v4 as uuidV4 } from 'uuid';

class Point {
  id?: string;
  id_point?: number;
  name?: string;
  error?: string;
  waiting?: string;
  success?: string;
  last_execution?: string;
  grouped_errors?: string;
  sn_active?: string;
  id_multi_companies?: string;
  nr_min_notifies?: number;
  id_third_system?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Point };

/*  id: string;
  name: string;
  error: string;
  waiting: string;
  success: string;
  last_execution: string;
  grouped_errors: string;
  sn_active: string;
  id_multi_companies: string;
  nr_min_notifies: number;
  id_third_system: number; */
