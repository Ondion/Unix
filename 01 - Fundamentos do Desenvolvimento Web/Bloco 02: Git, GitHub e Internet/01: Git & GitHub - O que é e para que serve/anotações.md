<h1 style="ext-align: center;">Anotações sobre Git/GitHub</h1>
  
O Git foi criado pelo Linus Torvalds em 2005, devido a um descontentamento do mesmo com o sistema de versionamento usado anteriormente para a composição do linux.  
Hoje o Git é um padrão de mercado, porém, não é o unico software versionador do mercado.  
  
Neste momento iremos atuar junto ao Git por linha de comando.   

O Git usa o SHA1, um algoritmo de criptografia, um conjunto de funções hash. A saida dessa criptografia gera um conjunto de 40 caracteres únicos a partir do conteúdo do arquivo criptografado. *_Exemplo: ```(stdin)= 03c7085fb873c3b7fd2b1bde538f5b8e71f1cb9a```_*  

Autenticações via SSH e HTTPS  

Existem duas formas para acessar o GitHub pelo terminal: HTTPS (Hypertext Transfer Protocol Secure) e SSH (Secure Shell).  

SSH ou Secure Shell : é um protocolo de criptografia de rede que serve para transferir dados de forma segura mesmo em redes inseguras. Usando o protocolo SSH, você pode se conectar ao GitHub sem precisar digitar seu nome e chave de acesso pessoal a cada comando executado.  
<br>
HTTPS ou Hypertext Transfer Protocol Secure : é uma extensão do protocolo de internet HTTP ( você verá mais sobre esse protocolo no dia de conteúdo que trata sobre internet! ) que utiliza certificados digitais para autenticar os dados e permitir que eles sejam criptografados de forma segura.  


Sobre os arquivos em um repositório git:  
 * Untracked = são arquivos que o git não "conhece" não estão sendo monitorados pelo git.  
 * Unmodified = arquivos que o git já conhece, porém não tem alteração desde o ultimo commit.  
 * Modified = arquivo monitorado pelo git e que sofreu alteração.
 * Staged = arquivo já pronto para o commit após ser adicionado pelo git add.  





Também temos hoje o GitHub, que é diferente do Git. O GitHub é um local para armazenar remotamente o código versionado pelo Git. Assim como o Git, o GitHub não é o unico local para armazenar códigos, existem outros sistemas que oferecem serviço parecido.  