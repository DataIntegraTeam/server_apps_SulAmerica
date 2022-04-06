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
  - Regras de Negócio Erro - Ok 
- Obter Detalhes de Especialidades 90% (Não sera usado no momento)
  

## Entendimento.
  ### Obter Agendas Disponíveis:
  As Agendas Disponíveis vem com um `id`.
  Esse `id` vai ser usado na criação do agendamento o nome `slotId`.
  Desta forma `id` = `slotId`.

  ### Criar Agendamento:
  Ao Criar Agendamento com o id do `slotId`.
  Ele vai gera e retorna salvo o `appointmentId`. 
  Desta forma sera criado um agendamento com id `appointmentId`.

  ### Cancelar Agendamento:
  O Cancelamento do Agendamento ira usar `patientBenefitCode` era ira passar o como params o `appointmentId` na rota.
  
  ### Obter Detalhes de Especialidades:
  Ficando assim:
  ```
  "reason": "SAME_DAY_APPOINTMENT",
	"patientBenefitCode": "0129B33B2218",
  ```

  Colocar ou não?
  "appointmentId": "9875364"

