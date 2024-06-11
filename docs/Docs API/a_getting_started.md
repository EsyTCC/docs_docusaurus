# Getting Started - BackEnd🥇

Bem-vindo ao nosso guia de "Getting Started"! Este recurso foi projetado para ajudá-lo a dar os primeiros passos e se familiarizar com nossa plataforma ou serviço. Vamos guiá-lo pelo processo de configuração inicial para que você possa começar a aproveitar ao máximo tudo o que temos a oferecer. 


**Ferramentas necessárias:**
- [Java 17](https://www.java.com/download/ie_manual.jsp) - O Java é uma linguagem de programação e uma plataforma de computação amplamente utilizada para o desenvolvimento de aplicativos corporativos, web e móveis. Como a API foi realizada em [Spring Boot](https://spring.io/), o java é necessário.
- [JDK](https://www.oracle.com/br/java/technologies/downloads/) - O Java Development Kit (JDK) é um conjunto de ferramentas essenciais para desenvolver aplicativos Java. Ele inclui o Java Runtime Environment (JRE), compiladores Java e outras ferramentas de desenvolvimento.
- [Maven](https://maven.apache.org/install.html) - O Apache Maven é uma ferramenta de automação de construção de projetos amplamente utilizada em projetos Java. Ele simplifica o processo de construção, relatório e documentação de projetos Java.
- [DBeaver](https://dbeaver.io/download/) - DBeaver é uma ferramenta de banco de dados universal e gratuita que suporta a maioria dos bancos de dados populares, como MySQL, PostgreSQL, SQLite, Oracle, SQL Server e muito mais. É uma excelente opção para desenvolvedores que trabalham com vários bancos de dados (sua preferência).
- [Docker (WSL (Usamos WSL))](https://github.com/LuisHBeck/configs/tree/master/docker) - O Docker WSL é uma versão do Docker otimizada para o Windows Subsystem for Linux (WSL). Ele permite que você execute contêineres Docker no Windows usando o ambiente WSL.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Outra possibilidade, **FORA DA BOSCH**) - Docker Desktop é uma aplicação que facilita a criação, o gerenciamento e a execução de contêineres Docker em sistemas operacionais de desktop, como Windows e macOS.
- [IDE](https://www.jetbrains.com/idea/download/?section=linux) (Intellij) - IntelliJ IDEA é uma das IDEs mais populares para desenvolvimento Java. Oferece uma ampla gama de recursos avançados, como edição inteligente de código, refatoração, suporte a frameworks e integração com ferramentas de construção, como Maven e Gradle (sua preferência).

### Comandos:
**RODANDO O PROJETO:**
```
git clone --branch main https://github.com/EsyProject/Esy_backend.git
```
*Para gerar o .jar da aplicação. Para colocar no [Dockerfile](https://github.com/EsyProject/Esy_backend/blob/fix_dev/Dockerfile)*:
```
mvn package -DskipTests
```
*Buildar o docker compose:*
```
docker-compose up
```
**CONFIGURANDO IP:**

Faça essa configuração apenas se estiver no [WINDOWS](https://www.microsoft.com/en-us/software-download/windows10%20), se estiver no [Linux](https://www.kali.org/docs/installation/hard-disk-install/) não faça, pois não é necessário.

*No wls, execute o seguinte comando para obter o docker eth0:*
```
ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
```
*No PowerShell como administrador, execute o seguinte comando para permitir que o aplicativo seja acessível no endereço IP:*
```
netsh interface portproxy add v4tov4 listenport=<portApplication> listenaddress=0.0.0.0 connectport=<portApplication> connectaddress=<dockerEth0>
```
*Obter o seu IP (IPV4):*
```
ipconfig
```
* Ative o compartilhamento de pasta

*Acesse a seguinte url:*

`http://<SeuIP>:<PortaAplicação>`

**CONFIGURAR O .ENV:**

Para encontrar os links do AUTHORIZATION_URI, TOKEN_URI e JWK_SET_URI no Azure, é necessário seguir os seguintes passos:

        * **1** - Acesse a sua conta no Azure.

        * **2** - Navegue até o portal do Azure.

        * **3** -No menu de navegação à esquerda, clique em "Azure Active Directory".

        * **4** -Em seguida, selecione "App registrations" (Registros de aplicativos).

        * **5** -Escolha o aplicativo relevante para o qual você deseja encontrar as informações.

        * **6** - Na página de visão geral do aplicativo, você encontrará os links do AUTHORIZATION_URI, TOKEN_URI e JWK_SET_URI.

É importante ressaltar que essas informações podem variar de acordo com a configuração específica do seu aplicativo no Azure. Recomenda-se consultar a documentação oficial do Azure ou entrar em contato com o suporte técnico da Microsoft para obter orientações mais precisas e atualizadas.

Quanto à obtenção do CLIENT_ID e CLIENT_SECRET na Home da Azure, sugere-se seguir as seguintes etapas:
Faça login na Home da Azure.

        * **1** - Navegue até a seção de configurações do aplicativo
        * **2** - Procure pelas informações de CLIENT_ID e CLIENT_SECRET
        * **3** - Anote essas informações para uso posterior
        * **4** - É importante ressaltar que, ao utilizar o servidor de e-mail da Bosch, a senha do usuário que envia         o e-mail não deve ser colocada no arquivo .yml(resources) do Spring Boot. Em vez disso, recomenda-se        colocar essas informações sensíveis em um arquivo .env, seguindo as práticas de segurança recomendadas.

Exemplo da .env:
```
AUTHORIZATION_URI= <yourLink>
TOKEN_URI= <yourLink>
JWK_SET_URI= <yourLink>

CLIENT_ID= <yourLink>
CLIENT_SECRET= <yourLink>

PASSWORD_USER = <yourLink>
```