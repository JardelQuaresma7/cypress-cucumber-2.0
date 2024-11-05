Feature: Cadastro de usuarios
    Cadastro de usuarios na plataforma

    Scenario Outline: "<caso_teste>"
        Given que estamos na page de Cadastro
            And inserimos nosso Nome "<name>" e Sobrenome "<surname>"
            And informamos nossos dados de contato "<adress>", "<email>" e "<phone>"
            And nosso genero como "<gender>" e hobbies "<hobbies>"
            And nossas skill "<skill>" e nosso pais "<country>"
        When eu digitar meu nascimento "<year>" , "<month>" e "<day>"
            And inserir minhas senhas "<pass>" e "<confirmPass>"
            And clico no botão cadastrar
        Then tenho meu cadastro realizado com sucesso

    Examples:
        | caso_teste           | name   | surname | adress                    | email                     | phone      | gender | hobbies | skill      | country | year | month | day | pass     | confirmPass |
        | Cadastro com sucesso | Jardel | Lima    | Rua Cristiano Angeli, 765 | jardelquaresma7@gmail.com | 1199999999 | Male   | Movies  | Javascript | Australia  | 1996 | May   | 15  | 1234@123 | 1234@123    |