Feature: Login
Funcionalidade para realizar variados logins no sistema PHPTravels
    Scenario Outline: "<cenario>"
        Given eu acesse a página home da aplicação
        When eu inserir meu email "<email>" e minha "<senha>"
            And clicar no botão entrar
        Then tenho meu acesso "<mensagem>"

    Examples:
        | cenario           | email               | senha    | mensagem                 |
        | login com sucesso | user@phptravels.com | demouser | com sucesso na aplicação |
