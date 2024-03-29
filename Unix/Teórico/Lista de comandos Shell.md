# Lista de Comandos

`sudo apt install` | `exemplo: sudo apt install code`  
Realiza a instalação de um pacote  

`sudo apt remove` | `exemplo: sudo apt remove code`  
Realiza a remoção de um pacote  

`apt -cache depends` | `exemplo: apt -cache depends code`  
Realiza a uma busca de dependências de um pacote.  

`alias` | `exemplo: alias cls=clear`  
Cria um "apelido" para um outro comando especifico. Os alias são encerrados quando o terminal é fechado.  

`whoami` | `exemplo: whoami`  
Exibe o atual usuário logado no sistema.  

`date` | `exemplo: date`  
Exibe a data do sistema.  

`echo` | `exemplo: echo "repete essa linha"`  
Repete o comando inserido, ecoa.  

`host` | `exemplo: host www.google.com`  
Exibe as informações de host da URL informada.  

`ls` | `exemplo: ls`  
Lista todos os diretórios e arquivos dentro do atual diretório.  

`ls -a` | `exemplo: ls -a`  
Lista todos os diretórios e arquivos dentro do atual diretório inclusive os ocultos.  

```ls -l``` | ```exemplo: ls -l```  
Lista todos os diretórios e arquivos dentro do atual diretório e exibe também informações sobre propriedade e permissividade.  

```ll``` | ```exemplo: ll```  
Lista todos os diretórios e arquivos dentro do atual diretório inclusive os ocultos e adiciona especificações sobre propriedade e permissividade do arquivo.  

```ls *``` | ```exemplo: ls *```  
Lista todos os arquivos e diretórios abaixo do diretório atual.  

```ls *``` | ```exemplo: ls *.txt```  
Lista todos os arquivos que contenham a extensão especificada.  

```ls *``` | ```exemplo: ls palavra*```  
Lista todos os arquivos ou diretórios que contenham a busca especificada.  

```ls {x,y}``` | ```ls {html,css,js}```  
Lista todos os arquivos que contém parte do texto passado entre as chaves.  

```ls ..``` | ```ls ..```  
Lista todos os arquivos e diretórios no local passado como parâmetro.  

```cd``` | ```exemplo: cd user```  
Muda o diretório atual para o apontado.  

```cd ~``` | ```exemplo: cd ~```  
Volta para o Root do terminal.  

```cd .``` | ```exemplo: cd .```  
Muda o diretório para o diretório . ou seja, atualiza o diretório atual.  
*Users/Usuário :arrow_right: Users/Usuário*  

```cd ..``` | ```exemplo: cd ..```  
Muda para o diretório anterior ao atual.  
*Users/Usuário :arrow_right: Users*  

```clear``` | ```exemplo: clear```  
Limpa o terminal de comandos.  

```touch``` | ```exemplo: touch arquivo.txt```  
Cria um arquivo vazio, ou se o arquivo já existir, atualiza a última modificação do mesmo.  

```touch 1 2 3``` | ```exemplo: touch arquivo.txt arquivo2.txt arquivo3.txt```  
Cria uma serie de arquivos vazios, ou se o arquivo já existir, atualiza a última modificação do mesmo.  

```mkdir``` | ```exemplo: mkdir nova_pasta``` *ou* ```exemplo: mkdir 'nova pasta'```  
Cria um novo diretório na pasta atual.  

```mkdir /``` | ```exemplo: mkdir /home/user```  
Cria um novo diretório no local apontado no comando.  

```pwd``` | ```exemplo: pwd```  
Mostra o caminho completo até o diretório atual.  

```cp``` | ```exemplo: cp arquivo.txt arquivo_2.txt```  
Cria uma cópia de um arquivo na pasta atual.  

```cat``` | ```exemplo: cat arquivo.txt```  
Mostra o conteúdo de um arquivo.  

```cat``` | ```exemplo: cat arquivo.txt arquivo2.txt```  
Concatena arquivos e exibe o conteúdo.  

```cat >``` | ```exemplo: cat > text.txt```  
Cria o arquivo listado como parâmetro e em seguida o console espera as entradas do arquivo.  

```cat >>``` | ```exemplo: cat >> text.txt```  
Cria ou atualiza o arquivo listado como parâmetro e em seguida o console espera as entradas do arquivo que serão mescladas as entradas existentes no arquivo.  

```cat (1) (2) > (3)``` | ```exemplo: cat arquivo1.txt arquivo2.txt > arquivoNovo.txt```  
Concatena dois arquivos em um terceiro.  

```mv``` | ```exemplo: mv arquivo.txt /Users/User/Documents```  
Move um arquivo para o local especificado.  

```rm``` | ```exemplo: rm arquivo.txt```  
Remove um arquivo.  

```rm -rf``` | ```exemplo: rm -rf diretório```  
Remove diretório e arquivos de forma forçada.  

```rmdir``` | ```exemplo: rmdir```  
Apaga um diretório, desde que vazio.  

```less``` | ```exemplo: less arquivo.txt```  
Exibe o conteúdo de um arquivo de forma paginada. "space" para proxima pagina, **q** para sair.  
Durante a exibição do arquivo, "/" realiza uma busca por palavra  
Durante a exibição do arquivo, "n" realiza a paginação do valor buscado pela '/'  
Durante a exibição do arquivo, "-i" realiza uma busca por palavra _**não case-sensitive**_  

```head``` | ```exemplo: head arquivo.txt```  
Mostra as dez primeiras linhas de um arquivo ou saida.    

```head -5``` | ```exemplo: head -5```  
Mostra as cinco primeiras linhas de um arquivo ou saida.    

```tail``` | ```exemplo: tail```  
Mostra as dez últimas linhas ou saidas de um aquivo.  

```tail -5``` | ```exemplo: tail -5```  
Mostra as cinco últimas linhas de um arquivo ou saida.  

```grep``` | ```exemplo: grep palavra arquivo.txt```  
Faz uma busca no arquivo pela palavra especificada, à busca é case-sensitive.  

```grep -i``` | ```exemplo: grep -i palavra arquivo.txt```  
Faz uma busca no arquivo pela palavra especificada, à busca _**não**_ é case-sensitive.  

```grep``` | ```exemplo: grep 'busca de frase' arquivo.txt```  
Faz uma busca no arquivo pela frase especificada, à busca é case-sensitive.  

```grep -i``` | ```exemplo: grep -i 'busca de frase' arquivo.txt```  
Faz uma busca no arquivo pela frase especificada, à busca _**não**_ é case-sensitive.  

```grep -iv``` | ```exemplo: grep -iv 'busca de frase' arquivo.txt```  
Faz uma busca no arquivo _**por tudo, menos à frase especificada**_, à busca _**não**_ é case-sensitive.  

```grep -in``` | ```exemplo: grep -in palavra arquivo.txt```  
Faz uma busca pela palavra especificada e exibe a linha da ocorrência, à busca _**não**_ é case-sensitive.  

```grep -ic``` | ```exemplo: grep -ic palavra arquivo.txt```  
Faz uma busca pela palavra especificada e exibe a quantidade de ocorrências, à busca _**não**_ é case-sensitive.  

```wc``` | ```exemplo: wc arquivo.txt```  
Exibe a quantidade de linhas, palavras e caracteres de um arquivo.  

```wc -w``` | ```exemplo: wc -w arquivo.txt```  
Exibe a quantidade de palavras de um arquivo.  

```wc -l``` | ```exemplo: wc -l arquivo.txt```  
Exibe a quantidade de linhas de um arquivo.  

```wc -c``` | ```exemplo: wc -c arquivo.txt```  
Exibe a quantidade de caracteres de um arquivo.  

```?``` | ```exemplo: cat ??quivo.txt```  
Usado como coringa, faz uma busca no diretório atual e avalia qual arquivo ou diretório se encaixa melhor na descrição e realiza a troca automática dos caracteres marcados com "?".    

```man``` | ```exemplo: man ls```  
Exibe o manual do comando especificado.  

```whatis``` | ```exemplo: whatis cp```  
Exibe uma preve descrição do funcionamento do comando especificado.  

```apropos``` | ```exemplo: apropos copy```  
Faz uma busca de comandos que realizem a condição especificada, a busca é realizada no manual.  

```curl``` | ```exemplo: curl https://exemplo.com.br```  
Comando para recuperar informações por meio de URL.

```df``` | ```exemplo: df```  
Exibe informações sobre o tamanho, espaço disponível e usado do drive do sistema atual.  

```df -h``` | ```exemplo: df```  
Exibe informações sobre o tamanho, espaço disponível e usado do drive do sistema atual atualizando as informações de bytes para MB e GB.  

```diff``` | ```exemplo: diff arquivo1.txt arquivo2.txt```  
Exibe a diferença entre dois arquivos.  

```diff -y``` | ```exemplo: diff -y arquivo1.txt arquivo2.txt```  
Exibe a diferença entre dois arquivos lado a lado no terminal.  

```exit``` | ```exemplo: exit```  
Encerra a sessão atual do terminal.  

```find``` | ```find .```  
Faz uma busca em todos os diretórios a partir do local passado como parâmetro. Neste exemplo exibe todos os diretórios e arquivos a partir da pasta atual.    

```find``` | ```find . -name "*.txt"```  
Localiza todos os arquivos do tipo txt a partir da pasta atual.  

```find``` | ```find . -type d```  
Localiza todos os diretórios a partir do local.  

```find``` | ```find . -type f```  
Localiza todos os arquivos a partir do diretório atual.  

```find``` | ```find . -name "exemplo*"```  
Localiza todos os arquivos e diretórios a partir do diretório atual.  

```find``` | ```find . -name arquivo.txt```  
Faz uma busca em todos os diretórios a partir do local passado como parâmetro, a busca é feita pelo nome do arquivo case sensitive.  

```find``` | ```find . -iname ArquiVo.*```  
Faz uma busca em todos os diretórios a partir do local passado como parâmetro, a busca é feita pelo nome do arquivo não-case sensitive    

```find``` | ```find . -iname *.txt```  
Faz a busca em todos os diretórios, neste exemplo o todos os arquivos com a extensão txt.   

```free``` | ```exemplo: free```  
Exibe detalhes sobre a memória RAM do sistema, como uso, quantidade usada e livre, dentre outros, em quantidades em Bytes.  

```free -h``` | ```exemplo: free -h```  
Exibe detalhes sobre a memória RAM do sistema, como uso, quantidade usada e livre, dentre outros, em quantidades em GB e MB.  

```groups``` | ```exemplo: groups usuário```  
Exibe os grupos que o usuário passado como parâmetro pertence.    

```exit``` | ```exemplo: exit```  
Encerra a sessão atual do terminal.  

```uptime``` | ```exemplo: uptime```  
Exibe uma linha com a data e horário do sistema.  

```history``` | ```exemplo: history```   
Exibe um histórico com todos os comandos executados no shell até o presente momento.  

***Ctrl + r*** | ```atalho de teclado```  
Faz uma busca reversa por comandos digitados no shell no passado.  

```zip``` | ```exemplo: zip arquivo```
Compacta arquivos no formato zip.  

```unzip``` | ```exemplo: unzip arquivo.zip```  
Descompacta arquivos no formato zip.  

```sort``` | ```exemplo: sort arquivo.txt```  
Organiza em ordem alfabética, por linhas, o conteúdo do arquivo, não modifica o arquivo original.  

```bc``` | ```bc```   
Abre uma calculadora no terminal, é necessário o uso das sintaxes de linha de comando para os cálculos.  

```nano``` | ```exemplo: nano arquivo.txt```  
Abre um editor de texto no terminal.  

```passwd``` | ```passwd```  
Troca a password do usuário atual.  

```passwd``` | ```sudo passwd usuário```  
Troca a password do usuário passado através do superusuário.  

```shutdown``` | ```shutdown```  
Desliga o sistema após um minuto.  

```shutdown now``` | ```shutdown now```  
Desliga o sistema imediatamente.  

```shutdown <time> <text>``` | ```shutdown 23:00 Texto a ser exibido antes do shutdown agendado para as 23:00``  
Desliga o sistema imediatamente.  

```shutdown -c``` | ```shutdown -c```  
Cancela o shutdown agendado.  

```sort``` | ```sort arquivo.txt```  
Retorna a ordenação do arquivo passado.  

```sort > ``` | ```sort > arquivo.txt``  
Aguarda entradas no terminal e posteriormente, cria ou sobre escreve o arquivo com o conteúdo passado de forma ordenada.  

```sort 1 > 2``` | ```sort arquivo.txt > arquivo.txt```  
Ordena o arquivo passado como primeiro parâmetro e, posteriormente, cria ou sobre escreve o resultado no segundo arquivo.  

```sort 1 >> 2``` | ```sort arquivo.txt >> arquivo.txt```  
Ordena o arquivo passado como primeiro parâmetro e, posteriormente, adiciona o resultado ao segundo arquivo.  

```who``` | ```exemplo: who```  
Exibe informações sobre o usuário local.  

```chmod <grupo><operação><permissão> <file>``` | ```chmod  a-rw arquivo.txt```  
Altera a permissão rwx de um arquivo, conforme grupo, operação e permissão:  
 * GRUPOS:  
 * u - usuário do acesso
 * g - grupo local
 * o - outros usuários
 * a - todos os grupos de acesso  
   <br>  
 * OPERAÇÕES:  
 * *_-_* Sinal de menos, retira as permissões
 * *_+_* Sinal de mais, adiciona as permissões
 * *_=_* Sinal de igual, deixa as permissões conforme passada no parâmetro  
  
   <br>  
 * PERMISSÕES:  
 * *_r_* Permissão para leitura
 * *_w_* Permissão para escrita
 * *_x_* Permissão para acesso e/ou execução  

```chmod``` | ```chmod xxx arquivo```  
Altera a permissão rwx de um arquivo, conforme tabela:  
 * rwx = 111 ( 7 | Acesso Total )
 * r-- = 100 ( 4 | Somente Leitura )
 * -w- = 010 ( 2 | Somente Escrita )
 * --x = 001 ( 1 | Somente Execução )
 * rw- = 110 ( 6 | Somente Leitura e Escrita )
 * r-x = 101 ( 5 | Somente Leitura e Execução )
 * -wx = 011 ( 3 | Somente Escrita e Execução )
 * --- = 000 ( 0 | Todos Acessos Negados )  

```ps``` | ```ps```  
Exibe uma lista de processos em execução.  

```^z``` | ```Ctrl z```  
Pausa um processo em execução no foreground.  

```sleep``` | ```sleep 5```  
Pausa as execuções de processos pelo período em segundos passados como parâmetro.  

```sleep &``` | ```sleep 5 &```  
Pausa as execuções de processos pelo período em segundos passados como parâmetro e coloca esse processo em background.  

```bg``` | ```bg```  
Coloca um processo que atualmente está em foreground para background.  

```&``` | ```<processo> &```  
O 'E' comercial coloca um processo em background quando adicionado como parâmetro no momento da declaração desse processo.  

```jobs``` | ```jobs```  
Lista todos os processos declarados em execução no momento.  

```fg``` | ```fg %(número lista do processo)```  
Continua um processo suspenso ou trás ele do background para o foreground.  

```kill %``` | ```kill %(número lista do processo)```  
Encerra um processo em background.  

```kill``` | ```kill (PID)```  
Encerra um processo em background pelo número PID.  

```kill -9``` | ```kill -9 (PID)```  
Encerra um processo em background pelo número PID de maneira forçada.  

```top``` | ```top```  
Exibe em tempo real todos os processos internos do sistema e o consumo dos mesmos.  

```|``` | ```comando1 | comando2```  
O PIPE é usado para passar o resultado de um comando, como parâmetro para o outro.  