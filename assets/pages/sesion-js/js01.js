console.log("Bienvenido a la sesión JS01");

//Datos primitivos:
// number, string, boolean, null, symbol, undenfined, bigint

//Tipos de datos Js:
//primitivos y no primitivos

//No primitivos:
//  Object 

//tipo de dato string
const stringData = "Holi crayoli";
console.log(stringData);

//tipos de dato number
//números positivos, negativos, +Infinity, decimales, NaN, -Infinity
//para un salto de línea se utiliza /n, pero en template string no es necesario
console.log(`Tipo de datos number: 
${12}, ${-6}, ${0.456}, ${5*"de"}, ${3/0}, ${-3/0}`);

console.log(`Valor máximo representable en JavaScript: ${Number.MAX_VALUE}`);//1.7976931348623157e+308

console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER}`); //9007199254740991

//Cuando se realizan operaciones que excend los límites DE MAX_SAFE_INTEGER
//se produce una péridida de precisión.
console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER + 1}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER + 2}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER + 3}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER + 4}`); //9007199254740991


//tipos de datos BigInt
//Sirven para representar valores númerico enteros, que el tipo number no puede representar o no es seguro.
console.log("Operaciones con BigInt ")
const myBigInt = 9007199254740991n; //La n indica que es bigInt
console.log(`Valor máximo seguro en JavaScript: ${myBigInt + 1n}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${myBigInt + 2n}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${myBigInt + 3n}`); //9007199254740991
console.log(`Valor máximo seguro en JavaScript: ${myBigInt + 4n}`); //9007199254740991


//Tipo de dato boolean
//Se tiene 2 estados: true/false
console.log(`Tipo de dato verdadero: ${true}` );
console.log(`Tipo de dato verdadero: ${false}` );

//tipo de dato undefined
//Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log(`Tipo de dato no definido: ${myVar}`);
