import { v4 as uuidV4 } from 'uuid';

class Revenue {
  id: string;
  cd_dti_beneficiario?: number;
  ds_erro: string;
  dt_gerado: Date;
  codigo_produto: string;
  codigo_beneficiario: string;
  codigo_digito_verificador: string;
  codigo_pref_empresa: string;
  codigo_empresa: string;
  codigo_familiar_benef: string;
  codigo_prestador: string;
  codigo_procedimento: string;
  mes_referencia: Date;
  valor_captation: number;
  percentual_guia_gaptation: number;
  codigo_contrato: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Revenue };
