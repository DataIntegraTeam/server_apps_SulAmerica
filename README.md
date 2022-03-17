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
  - Cancelar Agendamento - 40%
  - Regras de Negócio Erro - 
- Obter Detalhes de Especialidades (Verificar necessidade)
  

Entendimento:
  As Agendas Disponíveis vem com um `id`.
  Esse `id` vai ser usado na criação do agendamento `slotId`.
  `id` = `slotId`.

  Ao Criar Agendamento com `slotId`.
  Ele vai retorna e salva `appointmentId` que e = `slotId`.

  O Cancelar Agendamento ira usar `appointmentId` para adicionar ou salva no campo `reason` o motivo desse canselamento.
