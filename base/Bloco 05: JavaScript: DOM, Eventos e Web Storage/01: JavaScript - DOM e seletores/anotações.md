## DOM

O *_DOM_* é a ponte entre o HTML e o javaScript que realiza diversas atividade como seletores de elementos.  
O *_DOM_* **(Document Object Model)** é a interface que apresenta a maneira como o HTML e o XML serão lidos pelo browser.  
Primeiro o documento HTML é lido, após isso o DOM cria um objeto que é a representação da página, que agora, poderá ser manipulada pelo javaScript graças a ponte que o DOM realiza.  
Em resumo, o *_DOM_* é uma representação orientada a objetos da página web, que pode ser modificada com uma linguagem de scripts.  

## Estrutura do DOM  
```
            WINDOW
|---------------|----------|
LOCATION    DOCUMENT    HISTORY
                |
            ELEMENT<HTML>
|---------------|
ELEMENT<HEAD>  ELEMENT<BODY>
|               |
ELEMENT<TITLE>  ELEMENT<H1>-----------------ELEMENT<DIV>
|               |                   |-----------|
TEXT            TEXT            ELEMENT<P>  ELEMENT<P>
ID=""                           CLASS=""        ID=""             
```
**Sendo:**  
 * *_window_* - Representa a localização do objeto a qual ele está associado, isso é, o documento atual.
 * *_location_* - É a localização do objeto, ou seja, o documento.
 * *_document_* - Qualquer página web carregada no navegador, é o ponto de entrada no carregamento das informações junto ao browser.
 * *_history_* - Histórico da sessão do navegador, como páginas visitadas na guia ou quadro em que a página atual está carregada.
 * *_element_* - É a classe base que todos os objetos em um document herdam, isso é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM.
 * *_text_* - Texto que estão entre os elementos, conteúdo das tags.
 * *_atribute_* - São todos os atributos que um nó especifico possui, como uma class ou id.  

 **Comandos do console do browser**  
 ```
    document <!--Exibe toda o conteúdo HTML da página. -->

 ``` 


