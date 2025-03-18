
# Meu Projeto

Este é um projeto de exemplo utilizando **Express**, **TypeScript**, **TSOA** e **Swagger**. O projeto segue o padrão MVC, onde os controllers usam os decorators do TSOA para definir os endpoints e gerar a documentação automaticamente.

## Funcionalidades

- **Endpoints Documentados:** Endpoints criados com TSOA, com documentação gerada automaticamente pelo Swagger.
- **Estrutura MVC:** Separação de responsabilidades em controllers, services e interfaces.
- **Desenvolvimento Rápido:** Utiliza `ts-node-dev` para recarregamento automático durante o desenvolvimento.
- **Integração com Swagger:** Visualização da documentação da API via Swagger UI.

## Estrutura do Projeto

```
/src
  /controllers
    data.controller.ts      // Define os endpoints da API usando TSOA
  /interfaces
    data.ts                // Define as interfaces dos dados
  /services
    data.service.ts         // Lógica de negócio para processamento dos dados
  app.ts                   // Configuração do Express, Swagger e TSOA
  server.ts                // Inicialização do servidor
tsoa.json                  // Configuração do TSOA (rotas e spec)
tsconfig.json              // Configuração do TypeScript
package.json               // Dependências e scripts do projeto
.gitignore                 // Arquivo para ignorar arquivos/diretórios no Git
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado versão 14 ou superior)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Geração de Rotas e Especificação Swagger

Antes de iniciar o servidor, gere as rotas e a especificação Swagger usando os seguintes comandos:

```bash
npm run tsoa:routes
npm run tsoa:spec
```

## Scripts Disponíveis

- **Desenvolvimento:**

  Inicia o servidor em modo de desenvolvimento com recarregamento automático:

  ```bash
  npm run dev
  ```

- **Build:**

  Compila o projeto TypeScript para a pasta `dist`:

  ```bash
  npm run build
  ```

- **Start:**

  Executa o servidor a partir do código compilado:

  ```bash
  npm start
  ```

- **Geração de Rotas e Spec (TSOA):**

  ```bash
  npm run tsoa:routes
  npm run tsoa:spec
  ```

## Visualizando a Documentação da API

Após gerar a especificação Swagger e iniciar o servidor, acesse a documentação da API no seguinte endereço:

```
http://localhost:3000/api-docs
```

## Uso

### Exemplo de Endpoint

- **POST /data**

  Endpoint que processa uma URL de vídeo e retorna os dados extraídos.

  **Request Body:**

  ```json
  {
    "videoURL": "http://exemplo.com/meu-video.mp4"
  }
  ```

  **Response:**

  O endpoint retorna uma string ou objeto com os dados processados (conforme implementação do `DataService`).

## Contribuição

Sinta-se à vontade para enviar *issues* ou *pull requests* para melhorar este projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
