# Anotações sobre comandos no CSS

## Formatação de texto
Comandos relacionados com a formatação de texto, linhas e cores.    
<br>

**font-family** - Especifica qual a fonte do texto exibido no browser
```
span{
    font-family: <parâmetro>; 
}
Parâmetros:
    arial; - fontes presentes no cliente, ou adicionadas. 
    arial, nospace, times; - Passa uma lista de fontes, o browser irar executar a primeira fonte disponivel no cliente.
```

**font-size** - Especifica o tamanho da fonte.  
```
span{
    font-size: <parâmetro>; 
}
Parâmetros:
    15px; - tamanho da fonte em pixels.
    2em; // seta a fonte em 2x a proporção do tamanho fonte da tag pai.
```

**font-weight** - Especifica a intensidade da fonte ou "grossura" para melhor entendimento.  
```
span{
    font-weight: <parâmetro>; 
}
Parâmetros:
    100; - valor mais fino possivel da fonte.
    900; - valor que já se iguala ao negrito.
    bold; - Aplica negrito a fonte.  
```

**font-style** - Aponta qual o estilo da fonte.  
```
span{
    font-style: <parâmetro>; 
}
Parâmetros:
    italic; - passa a fonte para italico.
```

**line-height** - Especifica o tamanho de espaçamento entre as linhas.   
```
span{
    line-height: <parâmetro>; 
}
Parâmetros:
    10px; - Tamanho do entre linhas em pixels.
```

**text-align** - Alinha o texto conforme parâmetro.    
```
span{
    text-align: <parâmetro>; 
}
Parâmetros:
    center - Alinha o texto no centro da caixa.

```

**text-decoration** - Aplica efeitos ao texto.  
```
span{
    text-decoration: <parâmetro>; 
}
Parâmetros:
    underline; - Aplica o sublinhado ao texto.
```

**background-color** - Aplica cor de fundo ao local do texto.  
```
span{
    background-color: <parâmetro>; 
}
Parâmetros:
    blue; - nome por extenso de algumas cores.
    rgb(200, 200, 200); - Cor pelo formato rgb.
```

**color** - Aplica cor ao texto.  
```
span{
    color: <parâmetro>; 
}
Parâmetros:
    blue; - nome por extenso de algumas cores.
    rgb(200, 200, 200); - Cor pelo formato rgb.
    ffffff; - representação hexadecimal das cores.
```

**list-style-type** - Altera o marcador das listas em html.  
```
span{
    list-style-type: <parâmetro>; 
}
Parâmetros:
    square; - muda para quadrado.
```

**text-decoration** - Aplica funções de estilo ao texto.  
```
span{
    text-decoration: <decoration>; 
}
Parâmetros:
    nome; - remove o sublinhado de hyper-links
```

## Formatação de blocos
Comandos relacionados com a formatação de blocos, linhas e formas.    
<br>

**display** - Altera o modo de exibição de um elemento.  
```
span{
    display: <parâmetro>; 
}
Parâmetros:
    block; - altera o modo para bloco.
    inline-block; - comportamento hibrido, alinhados em linha com demais funções de bloco.
```

**border-radius** - Arredonda a borda do bloco.  
```
span{
    border-radius: <parâmetro>;
    border-radius: 2px solid red;
}
Parâmetros:
    25%; - arredonda em uma determinada porcentagem a borda.
    10px 50px 100px 200px; - especifica o arredondamento de cada canto do bloco.
```
**border-width** - Especifica a largura da borda.  
```
span{
    border-width: <parâmetro>; 
}
Parâmetros:
    x
```

**border-style** - Controle de estilo da linha da borda.  
```
span{
    border-style: <parâmetro>; 
}
Parâmetros:
    x
```

**border-color** - Controle de cor da borda.  
```
span{
    border-color: <parâmetro>; 
}
Parâmetros:
    x
```

**padding** - Define a distância do conteúdo de uma caixa e suas bordas.  
```
span{
    padding: <parâmetro>; 
}
Parâmetros:
    10px 15px; - especificação das distâncias do padding.
```

**margin** - X.  
```
span{
    margin: <parâmetro>; 
}
Parâmetros:
    100px; - valor em pixels do afastamento da margem.
    auto; - distribui a margem de forma igual nos lados.
    
```

**width** - Atribui a largura de um elemento.  
```
span{
    width:<parâmetro>; 
}
Parâmetros:
    30px; - atribui um valor fixo em pixels.
    30%; - atribui um valor variavel a depender do tamanho de exibição do cliente.
```

**height** - Atribui a altura de um elemento.  
```
span{
    height <parâmetro>; 
}
Parâmetros:
    30px; - atribui um valor fixo em pixels.
    30%; - atribui um valor variavel a depender do tamanho de exibição do cliente.
```

**overflow** - Evita que elementos em excesso vazem o tamanho do bloco.  
```
span{
    overflow: <parâmetro>; // para horizontal e vertical
    overflow-x: <parâmetro>; // horizontal
    overflow-y: <parâmetro>; // vertical
}
Parâmetros:
    auto; - Estipula automaticamente o tamanho do bloco.
    hidden; - oculta a barra de rolagem do overflow.
```

**background-image** - Aplica uma imagem de fundo ao elemento.  
```
div{
    background-image: <parâmetro>;
}
Parâmetros:
    url(<caminho>); - caminho para a imagem a ser aplicada como fundo.
```

**background-size** - Altera o tamanho de uma imagem de elemento.  
```
div{
    background-size: <parâmetro>;
}
Parâmetros:
    cover; - altera o tamanho da imagem para cobrir o container.
```

**background-position** - Altera a posição de uma imagem de elemento.  
```
div{
    background-position: <parâmetro>;
}
Parâmetros:
    center; - centraliza a imagem em relação ao container.
    10% 10%; - ajuste de imagem pr porcentagem horizontal e vertical.
```

## Posicionamento de elementos
Comandos relacionados com a formatação de texto, linhas e cores.  
<br>

**position** - posiciona um elemento conforme parâmetro.  
```
span{
    position <parâmetro>; 
}
Parâmetros:
    absolute; - coloca o elemento a frente de todos os outros.
    fixed; - coloca o elemento a frente e faz a rolagem junto a página.
```

**top** - altera o posicionamento vertical pelo topo de um elemento.  
```
span{
    top: <parâmetro>; 
}
Parâmetros:
    10px; - altera a posição por pixels.
```

**left** - altera o posicionamento horizontal pela esquerda de um elemento.  
```
span{
    left: <parâmetro>; 
}
Parâmetros:
    10px; - altera a posição por pixels.
```

**right** - altera o posicionamento horizontal pela direita de um elemento.  
```
span{
    right: <parâmetro>; 
}
Parâmetros:
    10px; - altera a posição por pixels.
```

**bottom** - altera o posicionamento vertical um elemento a partir da parte baixa.  
```
span{
    bottom: <parâmetro>; 
}
Parâmetros:
    10px; - altera a posição por pixels.
```

**z-index** - altera a ordem absoluta de um elemento.  
```
span{
    z-index: <parâmetro>; 
}
Parâmetros:
    1; - coloca o elemento a frente de todos os outros por ser o primeiro.
    2; - coloca o elemento a frente de todos os outros exceto o primeiro.
```

**float** - Faz um elemento flutuar pelas caixas de elementos vizinhos.  
```
span{
    float: <parâmetro>;
}
Parâmetros:
    top; - posiciona o elemento acima da caixa vizinha.
    bottom; - posiciona o elemento abaixo da caixa vizinha.
    right; - posiciona o elemento a direita da caixa vizinha.
    left; - posiciona o elemento a esquerda da caixa vizinha.
```

**vertical-align** - Alinha elementos de forma vertical.  
```
span{
    vertical-align: <parâmetro>;
}
Parâmetros:
    top; - alinha os elementos pela parte superior
    bottom - realiza o alinhamento pela parte inferior
    middle; - alinhamento ao centro
```

## pseudo-classes  
<br>

**:hover** - Executa o bloco assim que o mouse passar por cima do elemento listado.
```
div:hover{
    <parâmetros>
}
```
<br>

**:active** - Executa o bloco assim que o elemento listado for ativado (receber um clique).
```
div:active{
    <parâmetros>
}
```
<br>

teste