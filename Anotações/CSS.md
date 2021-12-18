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
    ; 
}
Parâmetros:
    x
```

**x** - X.  
```
span{
    X; 
}
Parâmetros:
    x
```

**x** - X.  
```
span{
    X; 
}
Parâmetros:
    x
```

**x** - X.  
```
span{
    X; 
}
Parâmetros:
    x
```




## Formatação de blocos
Comandos relacionados com a formatação de blocos, linhas e formas.    
<br>

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


