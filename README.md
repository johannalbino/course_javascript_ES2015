# Curso de JS

## Sistema Léxico

* Case-sensitive
* Comentários
* Declarações
* Literais
* Escape
* Variáveis e Constantes
* Null, undefined, NaN e Infinity
* Objeto global (window, global) e this


## Orientação a objeto

O carácter ponto é o mais importante do JS, pois é através dele que acessa métodos e propriedades

Métodos e funções é a mesma coisa.

Propriedades está dentro de um objeto.

**Protótipos**

var minhaCaneta = new Caneta();

//método
minhaCaneta.defineCor("red");

//propriedade
minhaCaneta.cor = "red";

**Herança Prototípica**

No JS a herança ocorre por meio do seu protótipo.


## Funções em JS

* Literais;
* De primeira classe;
* Podem ser passadas por parâmetros;
* No ES5, são as únicas que criam escopos;
* Podem ser auto executáveis;
* Possuem uma propriedade que mostra os argumentos passados por parâmetros;

## Document Object Model (DOM)
* getElementById - Trás somente um objeto
* getElementByTagName - 
* getElementByClassName - Trás uma coleção de objeto  
* querySelector
* querySelectorAll


* Inner HTML:

Inserir código HTML no DOM reflete na visualização da página

* Value:

Propriedade que recupera e insere o valor de um campo de formulário

## Objetos no JS

* Objetos Nativos
* Sintaxe formal e literal
* Objetos do ambiente de hospedagem
* Contrutores
* Valor vs. Referência
* Objetos 


## Eventos

* Um evento é uma ação executada por algo ou alguém (usuário ou browser)
* Um disparador de evento é o elemento HTML que originou aquele evento
* Alguns eventos ocorre de maneira padrão pelo browser (exemplo: abrir uma página, submeter um form, etc)
* Event Handler é a função a ser executada quando ocorre o evento. Ex: click, mouseover, mouseout, keyup, submit, load....

## Progagação
* Capacidade dos eventos de percorrerem a estrutura do HTML, desde o elemento original é o nível mais alto (numa página é o body)

## Objeto Event

* Objeto passado por parâmetro para a função que foi atrelada nos fornecendo várias informações adicionais sobre o evento em si. Este objeto varia de acordo com o tipo de evento.

## Delegação de evento

* É uma técnica que consiste em atrelar o evento a um elemento mais alto e verificar quem foi o elemento clicado.