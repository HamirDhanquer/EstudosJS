// 

function area( largura, altura ){
    const area = largura * altura
    if(area > 20){
        console.log("Valor acima do permitido")
    }else{
        return area
    }
}

area(2,2)