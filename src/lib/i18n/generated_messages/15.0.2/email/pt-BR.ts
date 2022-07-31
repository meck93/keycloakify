//This code was automatically generated by running dist/bin/generate-i18n-messages.js
//PLEASE DO NOT EDIT MANUALLY

/* spell-checker: disable */
const messages = {
    "emailVerificationSubject": "Verificação de endereço de e-mail",
    "emailVerificationBody":
        "Alguém criou uma conta {2} com este endereço de e-mail. Se foi você, clique no link abaixo para verificar o seu endereço de email.\n\n{0}\n\nEste link irá expirar dentro de {3}.\n\nSe não foi você quem criou esta conta, basta ignorar esta mensagem.",
    "emailVerificationBodyHtml":
        '<p>Alguém criou uma conta {2} com este endereço de e-mail. Se foi você, clique no link abaixo para verificar o seu endereço de email.</p><p><a href="{0}">Link para verificação de endereço de e-mail</a></p><p>Este link irá expirar dentro de {3}.</p><p>Se não foi você quem criou esta conta, basta ignorar esta mensagem.</p>',
    "emailTestSubject": "[KEYCLOAK] - Mensagem de teste SMTP",
    "emailTestBody": "Esta é uma mensagem de teste",
    "emailTestBodyHtml": "<p>Esta é uma mensagem de teste</p>",
    "identityProviderLinkSubject": "Vincular {0}",
    "identityProviderLinkBody":
        'Alguém quer vincular a sua conta "{1}" com a conta "{0}" do usuário {2} . Se foi você, clique no link abaixo para vincular as contas.\n\n{3}\n\nEste link irá expirar em {5}.\n\nSe você não quer vincular a conta, apenas ignore esta mensagem. Se você vincular as contas, você será capaz de logar em {1} fazendo login em {0}.',
    "identityProviderLinkBodyHtml":
        '<p>Alguém quer vincular a sua conta <b>{1}</b> com a conta <b>{0}</b> do usuário {2} . Se foi você, clique no link abaixo para vincular as contas.</p><p><a href="{3}">Link para confirmar vinculação de contas</a></p><p>Este link irá expirar em {5}.</p><p>Se você não quer vincular a conta, apenas ignore esta mensagem. Se você vincular as contas, você será capaz de logar em {1} fazendo login em {0}.</p>',
    "passwordResetSubject": "Redefinição de senha",
    "passwordResetBody":
        "Alguém solicitou uma alteração de senha da sua conta {2}. Se foi você, clique no link abaixo para redefini-la.\n\n{0}\n\nEste link e código expiram em {3}.\n\nSe você não deseja redefinir sua senha, apenas ignore esta mensagem e nada será alterado.",
    "passwordResetBodyHtml":
        '<p>Alguém solicitou uma alteração de senha da sua conta {2}. Se foi você, clique no link abaixo para redefini-la.</p><p><a href="{0}">Link para redefinir a senha</a></p><p>Este link irá expirar em {3}.</p><p>Se você não deseja redefinir sua senha, apenas ignore esta mensagem e nada será alterado.</p>',
    "executeActionsSubject": "Atualização de conta",
    "executeActionsBody":
        "Um administrador solicitou que você atualize sua conta {2} com a(s) seguinte(s) etapa(s): {3}. Clique no link abaixo para iniciar o processo.\n\n{0}\n\nEste link irá expirar em {4}.\n\nSe você não tem conhecimento de que o administrador solicitou isso, basta ignorar esta mensagem e nada será alterado.",
    "executeActionsBodyHtml":
        '<p>Um administrador solicitou que você atualize sua conta {2} com a(s) seguinte(s) etapa(s): {3}. Clique no link abaixo para iniciar o processo.</p><p><a href="{0}">Link para atualizar a conta</a></p><p>Este link irá expirar em {4}.</p><p>Se você não tem conhecimento de que o administrador solicitou isso, basta ignorar esta mensagem e nada será alterado.</p>',
    "eventLoginErrorSubject": "Erro de login",
    "eventLoginErrorBody":
        "Uma tentativa de login malsucedida da sua conta foi detectada em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.",
    "eventLoginErrorBodyHtml":
        "<p>Uma tentativa de login malsucedida da sua conta foi detectada em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.</p>",
    "eventRemoveTotpSubject": "Remover autenticação de dois fatores",
    "eventRemoveTotpBody":
        "A autenticação de dois fatores foi removida da sua conta em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.",
    "eventRemoveTotpBodyHtml":
        "<p>A autenticação de dois fatores foi removida da sua conta em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.</p>",
    "eventUpdatePasswordSubject": "Atualização de senha",
    "eventUpdatePasswordBody": "Sua senha foi alterada em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.",
    "eventUpdatePasswordBodyHtml": "<p>Sua senha foi alterada em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.</p>",
    "eventUpdateTotpSubject": "Atualização de autenticação de dois fatores",
    "eventUpdateTotpBody":
        "A autenticação de dois fatores foi atualizada para a sua conta em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.",
    "eventUpdateTotpBodyHtml":
        "<p>A autenticação de dois fatores foi atualizada para a sua conta em {0} de {1}. Se não foi você, por favor, entre em contato com um administrador.</p>",
    "requiredAction.CONFIGURE_TOTP": "Configurar Autenticação de Dois Fatores",
    "requiredAction.terms_and_conditions": "Termos e Condições",
    "requiredAction.UPDATE_PASSWORD": "Atualizar Senha",
    "requiredAction.UPDATE_PROFILE": "Atualizar Perfil",
    "requiredAction.VERIFY_EMAIL": "Verificar Endereço de E-mail",
    "linkExpirationFormatter.timePeriodUnit.seconds": "segundos",
    "linkExpirationFormatter.timePeriodUnit.seconds.1": "segundo",
    "linkExpirationFormatter.timePeriodUnit.minutes": "minutos",
    "linkExpirationFormatter.timePeriodUnit.minutes.1": "minuto",
    "linkExpirationFormatter.timePeriodUnit.hours": "horas",
    "linkExpirationFormatter.timePeriodUnit.hours.1": "hora",
    "linkExpirationFormatter.timePeriodUnit.days": "dias",
    "linkExpirationFormatter.timePeriodUnit.days.1": "dia",
    "emailVerificationBodyCode": "Verifique o seu endereço de e-mail inserindo o seguinte código.\n\n{0}\n\n.",
    "emailVerificationBodyCodeHtml": "<p>Verifique o seu endereço de e-mail inserindo o seguinte código.</p><p><b>{0}</b></p>",
};

export default messages;
/* spell-checker: enable */
