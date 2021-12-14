<h1 style="text-align: center;">Anotações sobre Internet</h1>
<br>

**Internet Protocol (IP)** - Parte fundamental na comunicação das coisas pela internet, ele é o conjunto de regras para a comunicação entre diferentes tecnologias. Ele basicamente dividi a informação em pedaços pequenos chamados pacotes e os envia para o destinatário que foi identificado por um número IP.  

**Autonomous System (AS)** - É a denominação dada aos serviços que fazem uso do IP para manter o funcionamento da Internet. Alguns exemplos desses AS são os provedores de serviços, provedores de acesso, provedores de transito, etc...  

**Autonomous System Number (ASN)** - Número de identificação que os AS recebem.  

**Border Gateway Protocol (BGP)** - É o protocolo de roteamento usado nos sistemas AS para comunicação entre eles.  

**Domain Name System (DNS)** - Sistema que gerencia nomes de redes vs IPs dos mesmos, são hospedados em servidores que respondem a solicitações do cliente.  

**Cliente** - É o termo dado a aplicação que está conectada a internet e dela faz solicitações.  

**Servidor** - É um computador ou rede interna deles, que faz uso de da estrutura de comunicação da Internet para responder solicitações do cliente. As principais funções de um servidor são: Armazenar, processar e entregar solicitações.  

**Transmission Control Protocol/Internet Protocol (TCP/IP**) - É um protocolo que roda dentro do protocolo IP, usado para transmitir dados pela rede.  

**Port Number** - É um número de 16 bits, usado para identificar uma porta no servidor. ele sempre está associado a um número IP.  

**Uniform Resource Locators (URL)** - Identifica que tipo de solicitação e resposta obtivemos em uma página web e aplica o protocolo correto para o consumo da informação.  

**Hyper-text Transfer Protocol (HTTP)** - Protocolo usado para comunicação entre navegador-cliente e servidor na Internet. cada requisição e resposta trocada entre cliente/servidor é uma única transação HTTP, toda a transação é feita por texto(bits) que é interpretado localmente.  

**HTTP Headers** - O Header é a metadata que incluem o tipo de requisição (GET, POST, PUT, DELETE), o caminho URL, o endereço IP dentre outros.  

**HTTP Body** - É o corpo da mensagem que foi transmitida, 
O servidor armazena então os dados (metadados) mais importantes para estabelecer uma comunicação com o cliente. O Body refere-se ao corpo da mensagem que está sendo transmitida. Você pode acessá-lo clicando em Response na barra superior. Para a requisição que fizemos, acessar a página https://github.com/, o body contém o HTML para a página que estamos querendo acessar. Para praticar, experimente navegar nos outros arquivos que foram retornados para o navegador após a requisição! Você pode acessá-los no menu disponível na barra lateral esquerda.

Body.
Métodos HTTP
Os métodos HTTP são os verbos que dizem ao servidor o que fazer com os dados no URL. Como vimos, o endereço URL identifica recursos específicos. Quando o cliente utiliza o endereço URL combinado a um verbo HTTP, o servidor saberá qual será a ação necessária para cada recurso. Os exemplos mais comuns são:
GET
O método GET é o mais comum, e é utilizado para ler informações encaminhadas pelo servidor para uma URL específica. As requisições GET são apenas para leitura , o que significa que os dados nunca poderão ser modificados no servidor. O servidor irá apenas retornar os dados, sem modificá-los. Assim, esse tipo de requisição é considerada uma operação segura, pois o efeito retornado será sempre o mesmo, independentemente do número de requisições feitas. Assim sendo, dizemos que requisições GET são idempotentes , o que significa que o efeito da requisição no servidor será sempre o mesmo - fazer milhões de requisições GET para o mesmo URL tem o mesmo efeito que uma única requisição. O método GET apenas retorna dados.
Requisições GET são respondidas com status 200 (OK) se o recurso que estamos querendo acessar for encontrado com sucesso, ou 404 (NOT FOUND) se a página não for encontrada.

404 - Page not found.
POST
O método POST é utilizado para criar um novo recurso, como um formulário para login. Você usará o método POST para criar um recurso subordinado (ex: novo usuário) para a aplicação pai (ex: http://exemplo.com/usuario). Ao contrário do método GET, o método POST não é nem seguro e nem idempotente. Fazer duas ou mais requisições POSTS resultará em novos recursos criados (mesmo que idênticos). Requisições POST são retornadas com o status code 201 (CREATED) e um novo caminho no header com o Link do recurso criado.
PUT
O método PUT é utilizado para atualizar o recurso identificado pelo URL. Esse método também pode ser utilizado para criar um novo recurso. Requisições PUT não são consideradas operações seguras, pois o estado da aplicação é modificado no servidor. No entanto, o método PUT é idempotente porque múltiplas requisições PUT para atualizar um recurso têm o mesmo efeito que uma única requisição.
A resposta a requisição é o status code 200 (OK) se o recurso foi atualizado com sucesso, ou 404 (NOT FOUND) se ele não for encontrado.
DELETE
DELETE é utilizado para deletar um recurso identificado pelo URL. As requisições DELETE são idempotentes, pois quando deletamos um recurso ele será deletado. Você pode fazer milhares de requisições com o método DELETE que no fim o resultado será o mesmo: um recurso deletado.
A resposta requisição é o status code 200 (OK) se o recurso for deletado com sucesso, ou 404 (NOT FOUND) se o recurso que será deletado não existir.
REST
Você pode já ter ouvido falar do termo RESTful para descrever uma aplicação. REST é a sigla para Representational State Transfer . É um estilo de arquitetura utilizado no design de aplicações Web. O estado da aplicação são os dados necessários para que o servidor possa atender a uma determinada requisição. As regras do REST nos guiam a desenvolver sistemas mais performáticos, escaláveis, simples, de fácil manutenção e modificação, portátil e confiável. Dentre elas, podemos destacar:
Interface uniforme: define a interface entre cliente e servidor de forma a desacoplar a arquitetura da aplicação. Os verbos que vimos acima descrevem a grande maioria das regras para interface uniforme. Dentre as definições previstas pelo REST, as mais importantes são:
Recursos, como dados de um banco de dados, devem ser identificados na requisição e o cliente terá acesso apenas a representação do recurso (ex: JSON, HTML)
O cliente deve ter informações suficientes para manipular recursos no servidor utilizando representações
As mensagens trocadas entre cliente e servidor devem ser auto-descritivas
Stateless: Essa regra define que todos os dados do estado da aplicação que precisam ser manipulados em uma requisição devem estar contidos na própria requisição (URL, HTTP body, HTTP header) e o servidor deve encaminhar para o cliente todos os dados referentes ao estado na resposta (HTTP headers, status code, HTTP response body).
O protocolo HTTP é uma peça chave na comunicação entre cliente-servidor. Para construir aplicações RESTFul é necessário compreender o básico de HTTP. Assim, você será capaz de criar páginas performáticas e escaláveis que farão a diferença na vida de muitos usuários!
Agora responda ao quiz, lembrando que ele serve para fixação dos conteúdos e não tem caráter avaliativo , não se preocupe! 😉
Quiz - Protocolo HTTP & REST
Curl
Por fim, você vai aprender sobre o comando curl , abreviação para Client URL . Ele é um comando disponível na maioria dos sistemas baseados em Unix que serve para verificar conectividade, além transferir dados via terminal.