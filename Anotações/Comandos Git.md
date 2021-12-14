<h1 style="text-align: center;">Comandos Git e GitHub</h1>
<br>

```git init```  
*_Inicializa a pasta atual do terminal como repositório git_*  

```git config --global user.email "emailDoAutor@aqui.com"```  
*_Seta de formal global as configurações de e-mail do autor do repositório ESSA CONFIG É NECESSÁRIA APENAS NO PRIMEIRO USO DO GIT NA MAQUINA._*  

```git config --global user.name UsuárioAqui```  
*_Seta de forma global as configurações de usuário do autor do repositório. ESSA CONFIG É NECESSÁRIA APENAS NO PRIMEIRO USO DO GIT NA MAQUINA._*  

```git config --list```  
*_Lista todas as configurações locais do Git, tais como e-mail, nome de usuário, URL do repositório local, etc..._*  

```git config --global --unset user.email```  
*_Remove de forma global as configurações de e-mail do autor do repositório._*  

```git config --global --unset user.name```  
*_Remove de forma global as configurações de usuário do autor do repositório._*  

```git add *```  
*_Adiciona todos os arquivos untracked e/ou modificados ao staged, novos arquivos passam a ser considerados tracked pelo git e após isso todos ficam prontos para o commit._*  

```git add arquivo.html```  
*_Adiciona o arquivo passado como parâmetro ao staged e após isso fica pronto para o commit._* 

```git rm arquivo.html```  
*_Remove o arquivo passado como parâmetro do tracked e o passa para o untracked._*  

```git commit -m "text de identificação do commit"```  
*_Realiza o commit no repositório local, junto com o texto descritivo sobre o conteúdo do commit._*  

```git status```  
*_Monitora o estado do repositório exibindo informações como: untracked, modified, staged, informações sobre a branch, necessidade de commit, conflitos, working tree, etc..._*  

```git remote add origin (URL do repositorio GitHub)```  
*_Empurra um repositório local para um repositório online, neste exemplo tomamos o GitHub como padrão._*  

```git remote -v```  
*_Exibe uma lista com os repositorios remotos cadastrados._*  

```git push origin main```  
*_Comando para o primeiro push de um repositorio local para o remoto._*  

```git push```  
*_Envia os commits já staged para o repositório remoto._*  

```git fetch```  
*_Analisa o repositorio remoto e procura por divergencias com o atual, caso existam, serão listadas._*  

```git pull```  
*_Puxa do repositório remoto o ultimo commit realizado se estiver divergente do localizado local._*  

```git clone (URL)```  
*_Faz um clone de um repositório remoto para u_*  