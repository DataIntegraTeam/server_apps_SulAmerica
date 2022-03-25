# AGENDAMENTO ELETRÔNICO INTEGRADO (SulAmérica)
### server_apps_SulAmerica (Back-End)

Converte os arquivo para Javascript: ```yarn build```.

Rodar API's: ```npm run dev```.

Criando a API com Node.JS.

Etapas concluídas:

- Obter Unidades - Ok
- Obter Profissionais - Ok
- Obter Agendas Disponíveis - Ok
- Variavel de Ambiante - Ok
- Criar Agendamento - Ok
  - Cancelar Agendamento - Ok
  - Regras de Negócio Erro - 50% 
- Obter Detalhes de Especialidades 90% (Verificar necessidade)
  

## Entendimento.
  ### Obter Agendas Disponíveis:
  As Agendas Disponíveis vem com um `id`.
  Esse `id` vai ser usado na criação do agendamento o nome `slotId`.
  Desta forma `id` = `slotId`.

  ### Criar Agendamento:
  Ao Criar Agendamento com o id do `slotId`.
  Ele vai retorna e salva `appointmentId`. 
  Desta forma `slotId` = `appointmentId`.

  ### Cancelar Agendamento:
  O Cancelamento de Agendamento ira usar `appointmentId` para adicionar no campo `reason` o motivo desse canselamento.
  
  ### Obter Detalhes de Especialidades:
  Ficando assim:
  ```
  "reason": "SAME_DAY_APPOINTMENT",
	"patientBenefitCode": "0129B33B2218",
  ```

  Colocar ou não?
  "appointmentId": "9875364"



```
      const sql = `UPDATE dataintegra.tbl_dti_agendamento 
        SET tp_status = 'false', reason = ${data.reason} 
        WHERE appointment_id = ${data.appointmentId} 
        AND nr_carteira = ${data.patientBenefitCode}`
```