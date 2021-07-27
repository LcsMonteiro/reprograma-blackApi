# reprograma-blackApi

-[Heroku](https://reprograma-blackapi.herokuapp.com/)
<br>
-[GitHub](https://github.com/LcsMonteiro/reprograma-blackApi)

Esta aplicação é uma API que fornece informações de profissionais pretos de diversas áreas, desde serviços, vendas, profissionais de saúde entre outras.
Além de ser um facilitador para que pessoas pretas contratem serviços de outras pessoas pretas, a API terá informações sobre vagas de trabalho com recorte racial cadastradas pelas empresas parceiras.

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|
|`Heroku`|plataforma nuvem que faz deploy com integração github|
|`Mongo Atlas`|Serviço de banco de dados em nuvem
<br>
<br>

## 📁 Arquitetura

```
📁 PROJETO-BLACKAPI
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 enterprise.controller.js
   |         |- 📄 job.controller.js
   |         |- 📄 user.controller.js
   |         
   |    |- 📁 models
   |         |- 📄 enterprise.models.js
   |         |- 📄 job.models.js
   |         |- 📄 user.models.js
   |
   |    |- 📁 routes
   |         |- 📄 enterprise.routes.js 
   |         |- 📄 user.routes.js
   |         |- 📄 job.routes.js
   | 
   |    |- app.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   ```
<br>


## Requisitos

#### USER.CONTROLLER

  **GET**

    -[GET] "/users/list"
    allUsers que retorna todos os cadastros.
    HTTP 200 OK

  **POST**

    [POST] "/users/create"
    createUser cria um novo cadastro de usuários.
    HTTP 201 CREATED

**PATCH**

    [PATCH]"/users/update/:id"
    replaceUser atualiza os dados de cadastro de usuário.
    HTTP 200 OK

  **DELETE**

    [Delete] "/users/delete/:id"
    deleteUser deleta um cadastro.
    HTTP 204 NO CONTENT

### ENTERPRISE.CONTROLLER

  **GET**

    [GET] "/enterprise/list"
    searchEnterprise que retorna todas as empresas.
    HTTP 200 OK
     
  **POST**

    [POST] "/enterprise/create"
    createEnterprise cria um novo cadastro de empresa.
    HTTP 201 CREATED

  **PUT**

    [PUT] "enterprise/update/:id"
    replaceEnterprise atualiza os dados de cadastro da empresa.
    HTTP 200 OK

**DELETE**

    [Delete] "enterprise/delete/:id"
    deleteRegister deleta um cadastro de empresa.
    HTTP 204 NO CONTENT
<br>

### JOB.CONTROLLER

  **GET**

    [GET] "/jobs/list"
    listJob que retorna todas as vagas.
    HTTP 200 OK

    [GET] “/jobs/:jobName”
    searchJob retorna vagas com o nome solicitado.
    HTTP 200 OK

    [GET]"/workplace/:workplace"
    searchWorkplace retorna vagas com a localidade solicitada.
     
**POST**

    [POST] "/jobs/create"
    createJob cria um novo cadastro de vaga.
    HTTP 201 CREATED

**PATCH**

  [Patch] "jobs/update/:id"
  replaceJob atualiza os dados de cadastro da vaga.
  HTTP 200 OK

**DELETE**

    [Delete] "jobs/delete/:id"
    deleteJob deleta um cadastro de vaga.
    HTTP 204 NO CONTENT
<br>

## Regras de negócio
 Não deverá ser possível criar usuários com o mesmo CPF;
 Não deverá ser possível criar empresas com o mesmo CNPJ;
 Para criar uma vaga, deverá vincular no momento da criação a uma empresa já existente no sistema.
<br>

### Dados para Collection Enterprise

- id: autogerado e obrigatório
- enterpriseName: String e obrigatória;
- representativeName: String e obrigatória;
- cnpj: Number e obrigatória;
- email: String e obrigatória;
- enterprisePhone: Number e obrigatória;
- state: String e obrigatória;
- city: String e obrigatória;

#### API deve retornar seguinte JSON:

```jsx
[
  {
    "_id": "60e9d0391bdecc302278a16b",
    "enterpriseName": "Que delicia rações",
    "representativeName": "Kitana",
    "enterprisePresentation": "Empresa boa",
    "cnpj": 22222777777,
    "email": "kitana@gmail.com",
    "enterprisePhone": 3434699455,
    "state": "Minas Gerais",
    "city": "Uberaba",
    "__v": 0
  },
  {
    "_id": "60ea5be02b75fb517b649c4d",
    "enterpriseName": "Catarina Advocacia Ltda",
    "representativeName": "Catarina Jeovanna Batista",
    "enterprisePresentation": "Empresa de advocacia com foco em ações crinimais",
    "cnpj": 42299936000105,
    "email": "contato@catarinaadvocacialtda.com.br",
    "enterprisePhone": 3137134163,
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "__v": 0
  },
  {
    "_id": "60ea5d8e2b75fb517b649c53",
    "enterpriseName": "Black Tecnologia",
    "representativeName": "Tatiane Ribeiro",
    "enterprisePresentation": "Empresa de tecnologia",
    "cnpj": 8337829000196,
    "email": "blacktecnologia@gmail.com.br",
    "enterprisePhone": 3337793621,
    "state": "Minas Gerais",
    "city": "Governador Valadares",
    "__v": 0
  }
]
```
### Dados para Collection Users

- id: autogerado e obrigatório
- name: String e obrigatória;
- cpf: Number e obrigatória;
- email: String e obrigatória;
- phone: Number e obrigatória;
- state: String e obrigatória;
- city:String e obrigatória;
- aboutMe:String e obrigatória;

#### API deve retornar seguinte JSON:

```jsx
[
  {
    "services": [],
    "_id": "60ea1703f7eca3c2442a2f77",
    "name": "Smoke",
    "cpf": 3393399739093,
    "email": "smoke@gmail.com",
    "phone": 9999967889,
    "state": "Minas Gerais",
    "city": "Uberaba",
    "aboutMe": "Sou um gato grande",
    "__v": 0
  },
  {
    "services": [],
    "_id": "60ea3efe65bc0006bb9951a3",
    "name": "Thales Diego Farias",
    "cpf": 17680606900,
    "email": "thalesdiegofarias-81@cafefrossard.com",
    "phone": 9999967889,
    "state": "Minas Gerais",
    "city": "Uberaba",
    "aboutMe": "Encanador",
    "__v": 0
  },
  {
    "services": [
      "Encanador, eletricista"
    ],
    "_id": "60ea598a2b75fb517b649c43",
    "name": "Fábio Edson Castro",
    "cpf": 65378013461,
    "email": "fabioedsoncastro__fabioedsoncastro@yahool.com.br",
    "phone": 63993974211,
    "state": "TO",
    "city": "Palmas",
    "__v": 0
  },
  {
    "services": [
      "Médica, ginecologista"
    ],
    "_id": "60ea5a2d2b75fb517b649c46",
    "name": "Sara Nina Silveira",
    "cpf": 50848279417,
    "email": "saraninasilveira..saraninasilveira@igui.com.br",
    "phone": 62995528513,
    "state": "GO",
    "city": "Goiânia",
    "__v": 0
  },
  {
    "services": [
      "engenheiro"
    ],
    "_id": "60ea5add2b75fb517b649c4a",
    "name": "Heitor Tomás Julio Drumond",
    "cpf": 72591114102,
    "email": "heitortomasjuliodrumond-72@marithimaconstrutora.com.br",
    "phone": 21983069957,
    "state": "RJ",
    "city": "Maricá",
    "__v": 0
  }
]
```

### Dados para a colletion Jobs

- id: autogerado e obrigatório;
- jobName: String e obrigatório;
- descriptionActivities:  String e obrigatório;
- requisites:  String e obrigatório;
- desirableQualities:  String e obrigatório;
- jobObjectives:  String e obrigatório;
- workplace:  String e obrigatório;
- payment:  String e obrigatório;
- benefits:  String e obrigatório;
- enterprise:  String e obrigatório;
- create: autogerado e obrigatório.

#### API deve retornar seguinte JSON:

```jsx
[
  {
    "benefits": [
      "VR,VA,Auxílio Pandemia, Plano de saúde, Vale alimentaçao para gatinhos"
    ],
    "create": "2021-07-11T04:37:46.993Z",
    "_id": "60e9cbd4b8c64025d0cd9b66",
    "enterpriseName": "Sindelius",
    "enterprisePresentation": "Empresa do ramo de rações para gatos",
    "jobName": "vendedor",
    "descriptionActivities": "vender ração para gatinhos",
    "requisites": "gostar de gatos",
    "desirableQualities": "Boa comunicação e empatia",
    "jobObjectives": "Vender ração gostosa",
    "workplace": "Online",
    "payment": "4000",
    "__v": 0
  },
  {
    "benefits": [
      "VR,VA,Auxílio Pandemia, Plano de saúde, Vale alimentaçao para gatinhos"
    ],
    "create": "2021-07-10T17:04:34.727Z",
    "_id": "60e9d3acb42e173748bcf559",
    "enterprise": "60e9cf1711a00f2e3d3f58bf",
    "jobName": "vendedor",
    "descriptionActivities": "vender ração para gatinhos",
    "requisites": "gostar de gatos",
    "desirableQualities": "Boa comunicação e empatia",
    "jobObjectives": "Vender ração gostosa e sache maravilhoso",
    "workplace": "Online",
    "payment": "5000",
    "__v": 0
  }
]
```
<br>

## Projeto desenvolvido por: 

### Larissa Monteiro
-[linkedin](https://www.linkedin.com/in/larissa-silva-monteiro/)
-[github](https://github.com/LcsMonteiro)
