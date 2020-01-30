
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve(frase)
        }, segundos * 1000)


    })
}

falarDepoisDe(3,"jdhjkaSHDJKaHdjaD")
    .then(frase => frase.concat('??? O que foi???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))