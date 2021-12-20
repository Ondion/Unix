## Box Model
<br>
Elementos HTML são renderizados como caixas pelo browser, por isso o termo "box model", nós utilizamos ferramentas de formatação tendo em mente o desenho de caixa para isso.  

**Hierarquia Box**
```
    margin
        border
            padding
                conteúdo
            padding
        border
    margin
```

**width e height** - Largura e a altura da área de conteúdo, controla a quantidade de espaço vazio entre o conteúdo em si e a borda da caixa.  
**border** - Borda da caixa, a propriedade border em si é considerada uma shorthand , ou seja, ela serve como um atalho para controlar um conjunto de outras propriedades que poderiam ser definidas individualmente, nesse caso border-width , border-style , e border-color !
border-width : também pode controlar a largura da borda e o seu valor inicial é medium .
border-style : essa propriedade controla o estilo da linha e tem como valor inicial none . Por isso que você não consegue ver nenhuma borda se não alterar essa propriedade !
border-color : essa propriedade controla a cor da borda, e tem como valor inicial currentcolor . Esse valor define a cor da borda como sendo o mesmo do elemento, então na maioria dos casos é desejável modificá-la.
margin
A margem funciona como um tipo de "campo de força" que expande o elemento para além das suas dimensões visíveis. Ela fica do lado de fora da borda e não é afetada pela estilização do elemento, servindo mais para manejar o afastamento entre as caixas. Ainda assim, não esqueça que a margem faz parte da caixa dentro do box model !