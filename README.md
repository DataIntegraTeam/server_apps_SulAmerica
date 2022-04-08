# AGENDAMENTO ELETRÔNICO INTEGRADO (SulAmérica)
### server_apps_SulAmerica (Back-End)

Deletar o arquivo ```yarn-error.log```.

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
- Faturamento de Parceiros - Ok  

## Entendimento.
  ### Obter Agendas Disponíveis:
  As Agendas Disponíveis vem com um `id`.
  Esse `id` vai ser usado na criação do agendamento o nome `slotId`.
  Desta forma `id` = `slotId`.

  ### Criar Agendamento:
  Ao Criar Agendamento com o id do `slotId`.
  Ele vai gera um id aleatório e retorna e salva no `appointmentId`. 
  Desta forma sera criado um agendamento com id `appointmentId`.

  ### Cancelar Agendamento:
  O Cancelamento do Agendamento ira usar `patientBenefitCode` era ira passar o como params o `appointmentId` na rota.
    
  Ficando assim:
  ```
  "reason": "SAME_DAY_APPOINTMENT",
	"patientBenefitCode": "0129B33B2218",
  ```
  ### Faturamento de Parceiros: revenues
  
Rodar no servido:

1 - OBS: Para o Node Ctrl + C antes de iniciar pm2:

2 - `cd dist`.

3 - `npm install`.

4 - `npm install pm2 -g`.

5 - `pm2 start server.js`.

6 - `pm2 logs`.