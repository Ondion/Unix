# Anotações
Unix foi lançando em 1969 por Kem Thompson, Dennis Ritche, dentre outros.
Foi feito em C e Assembly.
Hoje o Unix ganhou muitas variações tais como o Linux e o Macos.

Basicamente o Unix se divide em três partes:

**Kernel** que é responsavel pela integração entre o hardware e software.

**Shell** é a interface que faz a integração entre o sistema operacional, o usuário e o kernel. Exemplos de Shells:

    * SH
    * BASH
    * CSH
    * TCSH
    * ZSH

**Aplicativos**, que são os softwares e rotinas utilizados no sistema operacional.

**Processos e Arquivos.**
Todo comando executado no Unix é chamado de processo e, todo processo, tem um PID que carrega informações como: Usuário proprietário do processo, sessão do shell, o estado, linha de comando, dentre outras informações.

Já arquivos são vistos pelo sistema operacional como tudo que é armazenado, tais como diretórios e seu conteúdo.

EXEMPLO DE IDENTIFICAÇÃO DE ARQUIVO:  
**-rwxr--r-- 1 dono_do_arquivo grupo 3820 Apr 6 16:22 nome_do_arquivo.txt**   
*_onde consta as informações: Tipo do arquivo, permissões, hard links, dono, grupo, tamanho, data e hora da última modificação e nome._*  
*_quebrando em partes_*   

**-(1) rwx(2) rwx(3) rwx(4) 1(5) user(6) group(7) 4096(8) dez 5 17:17(9)**  
 1 - se houve uma letra 'd' significa que é um diretório, '-' significa um arquivo comum.  
 2 - 'r' para read, 'w' para write e 'x' para executar. o primeiro grupo de caracteres diz repeito as permissões do usuário local.  
 3 - 'r' para read, 'w' para write e 'x' para executar. o segundo grupo de caracteres diz repeito as permissões para os grupos.  
 4 - 'r' para read, 'w' para write e 'x' para executar. o terceiro grupo de caracteres diz repeito a outros usuários.  
 5 - links  
 6 - nome do usuário dono do arquivo.  
 7 - nome do grupo do arquivo.  
 8 - tamanho em bytes  
 9 - data e horário da ultima alteração do arquivo.  