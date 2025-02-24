# Cypress Cucumber 2.0

Este repositório contém um projeto de automação de testes end-to-end utilizando **Cypress** e **Cucumber**. O objetivo foi aplicar testes automatizados estruturados em BDD (Behavior-Driven Development) para o cliente **Vivara**, enquanto atuava na empresa **Quality Digital**.

## 📌 Contexto do Projeto

A automação já estava estruturada com **Cypress** e **Cucumber**, e meu desafio foi aprender e aprimorar esse modelo de testes. Este projeto reflete meu aprendizado sobre a integração dessas tecnologias e sua aplicação prática no ambiente corporativo.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end
- [Cucumber](https://cucumber.io/) - Ferramenta para testes BDD
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) - Plugin para suporte ao Cucumber no Cypress
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem principal do projeto
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## 📂 Estrutura do Projeto

```
cypress-cucumber-2.0/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── login.feature
│   │   │   ├── compra.feature
│   │   ├── step-definitions/
│   │   │   ├── loginSteps.js
│   │   │   ├── compraSteps.js
│   ├── support/
│   ├── fixtures/
├── cypress.config.js
├── package.json
├── README.md
```

- `cypress/e2e/features/`: Arquivos **.feature** contendo os cenários de teste escritos em Gherkin.
- `cypress/e2e/step-definitions/`: Arquivos **.js** que implementam os **steps** descritos nas features.
- `cypress/support/`: Funções auxiliares e hooks para os testes.
- `cypress/fixtures/`: Dados estáticos utilizados nos testes.

## 🛠️ Configuração do Ambiente

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JardelQuaresma7/cypress-cucumber-2.0.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd cypress-cucumber-2.0
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## ▶️ Executando os Testes

### Abrindo a interface do Cypress

Para rodar os testes de forma interativa, utilize:

```bash
npx cypress open
```

ou

```bash
yarn run cypress open
```

### Rodando testes em modo headless

Para executar todos os testes sem interface gráfica:

```bash
npx cypress run
```

ou

```bash
yarn run cypress run
```

## 📌 Estrutura dos Testes com Cucumber

Os testes seguem o padrão **BDD (Behavior-Driven Development)**, utilizando **cenários escritos em Gherkin**. Exemplo:

```gherkin
Feature: Login
  Scenario: Usuário realiza login com sucesso
    Given que o usuário acessa a página de login
    When ele insere credenciais válidas
    Then ele deve ser redirecionado para a página inicial
```

A implementação desses passos ocorre no arquivo correspondente dentro de `step-definitions/`:

```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário acessa a página de login', () => {
  cy.visit('/login');
});

When('ele insere credenciais válidas', () => {
  cy.get('#user').type('usuario_teste');
  cy.get('#password').type('senha123');
  cy.get('#login-button').click();
});

Then('ele deve ser redirecionado para a página inicial', () => {
  cy.url().should('include', '/dashboard');
});
```

## 🤝 Contribuição

Se deseja contribuir com melhorias no projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações (`git checkout -b feature/minha-melhoria`).
3. Faça commit das mudanças (`git commit -m 'Melhoria na automação'`).
4. Envie para o repositório (`git push origin feature/minha-melhoria`).
5. Abra um Pull Request.

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
