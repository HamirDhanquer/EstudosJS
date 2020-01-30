const pilotos = [ 'Vettle', 'Alonso', 'Raikkonen', 'Massa' ]

pilotos.pop() // Remove o último 
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona
console.log(pilotos)

pilotos.shift() // Remove o primeiro 
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona o primeiro
console.log(pilotos)

// Pode adicionar como remover do array. 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover 
pilotos.splice(3,1)
console.log(pilotos)

// Retorna um novo array. 
const algunsPiloto1 = pilotos.slice(2) // novo array 
console.log(algunsPiloto1)

const algunsPiloto2 = pilotos.slice(1,4)
console.log(algunsPiloto2)
