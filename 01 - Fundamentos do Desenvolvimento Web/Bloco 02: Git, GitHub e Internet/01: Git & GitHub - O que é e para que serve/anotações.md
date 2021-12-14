<h1 style="ext-align: center;">Anotações sobre Git/GitHub</h1>
  
O Git foi criado pelo Linus Torvalds em 2005, devido a um descontentamento do mesmo com o sistema de versionamento usado anteriormente para a composição do linux.  
Hoje o Git é um padrão de mercado, porém, não é o unico software versionador do mercado.  
  
Neste momento iremos atuar junto ao Git por linha de comando.   

O Git usa o SHA1, um algoritmo de criptografia, um conjunto de funções hash. A saida dessa criptografia gera um conjunto de 40 caracteres únicos a partir do conteúdo do arquivo criptografado. *_Exemplo: ```(stdin)= 03c7085fb873c3b7fd2b1bde538f5b8e71f1cb9a```_*  

Sobre os arquivos em um repositório git:  
 * Untracked = são arquivos que o git não "conhece" não estão sendo monitorados pelo git.  
 * Unmodified = arquivos que o git já conhece, porém não tem alteração desde o ultimo commit.  
 * Modified = arquivo monitorado pelo git e que sofreu alteração.
 * Staged = arquivo já pronto para o commit após ser adicionado pelo git add.  





Também temos hoje o GitHub, que é diferente do Git. O GitHub é um local para armazenar remotamente o código versionado pelo Git. Assim como o Git, o GitHub não é o unico local para armazenar códigos, existem outros sistemas que oferecem serviço parecido.  