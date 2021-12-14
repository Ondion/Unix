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

**HTTP Body** - É o corpo da mensagem que foi transmitida, o HTML por exemplo é transmitido pelo Body.  

**Método HTTP GET** - É utilizado para ler informações encaminhadas pelo servidor. As requisições GET são apenas para leitura, ou seja, não podem ser modificados pelo servidor. Requisições GET são respondidas com status 200 (OK) para sucesso, ou 404 (NOT FOUND) para página não encontrada.  

**Método HTTP POST** - Cria um novo recurso, requisições POST retornam o status code 201 (CREATED) e um novo caminho no header com o Link do recurso criado.  

**Método HTTP PUT** - É utilizado para atualizar o recurso URL. É método proximo ao POST para criar um novo recurso. Requisições PUT alteram o estado da aplicação no servidor. No entanto, o método PUT é idempotente, pois múltiplas requisições têm o mesmo efeito que uma única. Ele retorna o status code 200 (OK) para sucesso, ou 404 (NOT FOUND) se ele não for encontrado.  

** Método HTTP DELETE** - É utilizado para deletar um recurso identificado pelo URL. DELETE é idempotente, pois o recurso é deletado.le retorna o status code 200 (OK) para sucesso, ou 404 (NOT FOUND) se ele não for encontrado.  

**Método HTTP REST ** - é a sigla para Representational State Transfer, uma arquitetura utilizado no design de aplicações Web, que manipula todos os outros verbos HTTP.  

Curl
Por fim, você vai aprender sobre o comando curl , abreviação para Client URL . Ele é um comando disponível na maioria dos sistemas baseados em Unix que serve para verificar conectividade, além transferir dados via terminal.