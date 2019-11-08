function calcularMedia(){
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    while (typeof arguments[x] === 'number'){
        total += arguments[x];
        x++;
    }

    return total/qtd;
}

function pegaNota(td){
    return parseFloat(td.textContent);
}

function recuperarNotas(td){
    var x = 0;
    var arr = [];

    while(td[x]){
        if(!isNaN(td[x].textContent) && td[x].textContent !== ''){
            arr.push(parseFloat(td[x].textContent));
        } 
        x++;
    }
    return arr;
}