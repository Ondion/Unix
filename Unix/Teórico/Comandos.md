```ls``` - Lista todos os arquivos e diretórios no local.  
```ls ..``` - Lista todos os arquivos e diretórios no local passado como parâmetro.  
```ll``` - Lista todos os arquivos e diretórios no local, inclusive as permissões de escrita e outras informações.  
```ls -a``` - Lista todos os arquivos e diretórios no local, inclusive ocultos.  
```cd``` - Entra na pasta passada como parâmetro.  
```cd ~``` - Volta para o Root do terminal.  
```clear``` - Limpa o terminal de comandos.  
```mkdir``` - Cria um novo diretório.  
```pwd``` - Lista o path até o local passado.  
```cp``` - Copia arquivos para o local passado.  
**Exe:** ```cp arquivo.txt .. ``` - Neste caso copiamos o arquivo para um diretório acima.  
**Exe:** ```cp arquivo.txt arquivoCopiado.txt ``` - Neste caso copiamos o arquivo para o mesmo diretório.  
```cat``` - Exibe o conteúdo de um arquivo.  
```mv``` - Move um arquivo, e também pode ser usado para renomear.  
**Exe:** ```mv arquivo.txt arquivoRenomeado.txt ``` - Neste caso renomeamos um arquivo, mas poderíamos move-lo se o segundo parâmetro fosse um path.  
```rm``` - Apaga um arquivo, é importante passar a extensão desse arquivo.  
```rmdir``` - Apaga um diretório vazio.  
```rm -r``` - Apaga um arquivo ou diretório de forma recursiva.  
```rm -rf``` - Apaga um arquivo ou diretório de forma recursiva e forçada.  
```less``` - Exibe conteúdo de text paginado, de acordo com o tamanho do terminal. **q** para sair.  
```less '/' 'n'``` - utilizar a '/' enquanto se exibe o conteúdo, realiza uma busca no texto do valor passado, enquanto o 'n' realiza a paginação do valor buscado pela '/'.  
```head``` - Exibe, por padrão, as 10 primeiras linhas de um arquivo de texto.  
```head -15``` - Exibe, neste exemplo, as 15 primeiras linhas de um arquivo de texto, a flag **-x** que realiza a modificação.  
```tail``` - Exibe, por padrão, as 10 últimas linhas de um arquivo de texto.  
```tail -15``` - Exibe, neste exemplo, as 15 últimas linhas de um arquivo de texto, a flag **-x** que realiza a modificação.  
```grep``` - Realiza a busca de um termo no arquivo passado.  
**Exe:** ```grep teste arquivo.txt ``` - Irá retornar no terminal as linhas onde a palavra teste aparece no arquivo de texto.  
```grep -i``` - Flag para realizar a busca não case-sensitive.  
```grep -n``` - Flag para exibir a linha do valor buscado.  
```grep -c``` - Flag para exibir a quantidade de vezes que o valor buscado é presente no texto.  
```grep -v``` - Flag para realizar a busca inversa, onde semente é retornado as linhas onde o valor passado não é presente.  
```grep -iv 'valor buscado'``` - Aspas são necessárias para uma busca com espaços, neste exemplo é realizado uma busca reversa, não case sensitive.  
```wc``` - Conta, em um arquivo de texto, a quantidade de: linhas, palavras e caracteres de um arquivo de texto.  
```wc -w``` - Conta, em um arquivo de texto, a quantidade de: palavras de um arquivo de texto.  
```wc -l``` - Conta, em um arquivo de texto, a quantidade de: linhas de um arquivo de texto.  
```wc -c``` - Conta, em um arquivo de texto, a quantidade de: caracteres de um arquivo de texto.  
```?``` - Coringa para a nomeação do parâmetro:  
**Exe:** ```cat ???uivo.txt ``` - Irá exibir o conteúdo de um arquivo que termine com os valores passados, o inicio será substituído pelo arquivo que atender.  
**Exe:** ```ls pasta ?rquivo.txt ``` - Irá exibir o arquivo achado no diretório pasta.  
**Exe:** ```grep teste arquivo.txt ``` - Irá  
```man``` - Abre o manual do comando passado como parâmetro.  
```whatis``` - Abre uma explicação do comando passado.  
```apropos``` - Realiza uma busca do termo passado nos manuais e retornar o resultado.  
