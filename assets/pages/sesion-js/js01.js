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

//tipo de dato null
//Una variable que intensionalmente se borra el tipo de dato
let myVarNull;
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`); // undefined
myVarNull = "no";
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`); // string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`); // object

//tipo de dato symbol
//Representa un valor único que se puede utilizar como clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(` mySymbol == mySymbol2  ${mySymbol == mySymbol2}`);

const myObj = {
    clave: "valor",
    [mySymbol] : 16, //se creará una clave privada, no se itera con un ciclo, ni se almacena en LocalStorage
    myKey : 123,
    [myKey] : 567
};

console.log(myObj);

//------------------------ Objetos en JavaScript-----------------------------------------------------------------------
//tipo de dato Array
const cancionesCh30 = ["Highway Star", "Trouble", "Saoko","Rock Dj"];

//tipo de datos Object
const misDatosDePerfil = {
    name : "Eduardo",
    lastname : "Pérez",
    age : 29,
    isBelicoso : false,
    fullName : function(){
        return `Nombre completo de Ed: ${this.name} ${this.lastname}`; 
    },
    //Agregar una funcion que muestre el nombre completo en mayúsculas
    upperName : function(){
        return `Nombre completo en mayúsculas: ${this.name.toUpperCase()} ${this.lastname.toUpperCase()}`; 
    }
}
console.log(misDatosDePerfil);
console.table(misDatosDePerfil);
console.log(misDatosDePerfil.fullName); //Te regresa la función
console.log(misDatosDePerfil.upperName());//Invoca la función

//---------------------------------------
// Conversión explicita de datos (coerción de tipo)
const horaDescanso = 13.05;
console.log("Hora descanso " + horaDescanso + " h."); //concatenación
const horaDescansoTxt = String(horaDescanso);
console.log("Hora descanso " + horaDescansoTxt + " h."); 
console.log("Hora de retorno: " + horaDescanso + .15);

const colorVerde = 0x008000;//Representación decimal: 32769
console.log(`El valor RGB del color verde es ${colorVerde}`); //32769 
console.log(`El valor RGB del color verde es ${String(colorVerde)}`); //32769 
console.log(`El valor RGB del color verde es ${colorVerde.toString()}`); //32769 
console.log(`El valor RGB del color verde es ${colorVerde.toString(16)}`); //8000 
console.log(`El valor RGB del color verde es #${colorVerde.toString(16).padStart(6,"0")}`); //#008000 

//Conversión a Number
const myAgeTxt = "23";
const sumatoria = 10 + myAgeTxt; //1025
console.log(`Valor de la sumatoria ${sumatoria}`);
console.log(`Valor de la sumatoria ${10 + Number(myAgeTxt)}`); //33
console.log(`Valor de la sumatoria ${10 + parseInt(myAgeTxt)}`); //33
console.log(`Valor de la sumatoria ${10 + parseFloat(myAgeTxt)}`); //33
console.log(`Valor de la sumatoria ${10 + (+myAgeTxt)}`); //33

//Diferencias entre usar Number() y parseInt()
/* -Number convierte enteros y decimales
    -parseInt convierte solo enteros
    -Number devuelve  NaN si la cadena contiene algun caracter no númerico
    -parseInt convierte los enteros hasta encontrar un caracter no numérico,
        si la entrada no comienza con un valor númerico, devuelve NaN
*/
console.log(Number("123 - 456"));
console.log(parseInt("123 - 456"));
console.log(parseInt("$123 - 456".slice(1)));
console.log(Number(true));
console.log(parseInt(true));

//Conversión  a booleano
/* En la conversión de boolean los siguientes valores son false:
    "", false, 0, null, undefined 
*/
console.log("Boolean(1): " + Boolean(1)); //true
console.log("Boolean(100): " + Boolean(100)); //true
console.log("Boolean('Hola'): " + Boolean("Hola")); //true
console.log("Boolean('false'): " + Boolean("false")); //true
const isBelicoso = "false";

//Number
// [] -> 0, [30] -> 30, [30,33] -> NaN, flase -> 0, true -> 1
//String
// [] -> "", [12,2] -> "12, 2", function(){} -> "function(){}", {} -> [object, object]








