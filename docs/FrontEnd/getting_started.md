# Getting Started - FrontEnd 🖼

Bem-vindo ao nosso guia de "Getting Started"! Este recurso foi projetado para ajudá-lo a dar os primeiros passos e se familiarizar com nossa plataforma ou serviço. Vamos guiá-lo pelo processo de configuração inicial para que você possa começar a aproveitar ao máximo tudo o que temos a oferecer.

## Comandos:
**RODANDO O PROJETO:**
```
git clone --branch main https://github.com/EsyProject/EsyFrontend.git
```
```
npm i or npm install
```
```
npm run dev
```

**CONFIGURANDO A .ENV:**

Para encontrar essas informações no Azure, você precisa acessar o portal do Azure e seguir as etapas abaixo:
* **1** - Faça login no portal do [Azure](https://portal.azure.com).

* **2** - No painel de navegação à esquerda, clique em "Azure Active Directory".*
* **3** - Em seguida, clique em "Registro de aplicativos" na seção "Gerenciar".
* **4** - Você verá uma lista de todos os aplicativos registrados. Procure pelo aplicativo com o ID do     aplicativo (App ID).

* **5** - Clique no nome do aplicativo para abrir as configurações.

* **6** - Na página de configurações do aplicativo, você encontrará as informações do aplicativo,  
incluindo o ID do Locatário (Tenant ID).

* **7** - Para encontrar o URI de redirecionamento (Redirect URI), clique em "Autenticação" no menu esquerdo.
Role para baixo até a seção "URI de redirecionamento" e você encontrará o URI de redirecionamento configurado como "http://portApplication/".

Lembre-se de que essas etapas são específicas para o portal do Azure e podem variar dependendo da versão do portal ou da interface de usuário que você está usando.

Exemplo da .env:

```
VITE_MSAL_APPID=<AppId>
VITE_MSAL_TENANTID=<TTenantId>
VITE_MSAL_REDIRECTURI=<portApplication>
```
