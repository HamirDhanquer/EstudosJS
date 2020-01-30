// Cadeia de protótipos ( prototype chain )
Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(filho.attr0)
console.log(filho.attrA)