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

**Aplicativos**, que são os softwares e rotinas ultilizados no sistema operacional.

**Processos e Arquivos.**
Todo comando executado no Unix é chamado de processo e, todo processo, tem um PID que carrega informações como: Usuário proprietário do processo, sessão do shell, o estado, linha de comando, dentre outras informações.

Já arquivos são vistos pelo sistema operacional como tudo que é armazenado, tais como diretórios e seu conteúdo.


**Exemplo de caminho no Unix:** /Users/User/Documents
Onde a "/" é o diretório root, inicial na arvore de hierarquia.
EXEMPLO DE IDENTIFICAÇÃO DE ARQUIVO:

**-rww-r--r-- 1 dono_do_arquivo grupo 3820 Apr 6 16:22 nome_do_arquivo.txt**

onde consta as informações: Tipo do arquivo, permissões, hard links, dono, grupo, tamanho, data e hora da última modificação e nome.
