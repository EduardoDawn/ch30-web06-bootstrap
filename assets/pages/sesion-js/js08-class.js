console.log("Sesión Js08- class");

const getProducts = async() =>{
    const url = "https://fakestoreapi.com/products";
    
    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response);
}

/**
 * Clase productos
 * El nombre de las clases se realizan con UpperCamelCase
 */
class Products{
    // definimos atributos
    
    //El método constructor nos ayuda a instanciar un objeto
    constructor(id,name){
        this.name = name; //creando el atributo name y le asignamos el valor de parámetro name
        this.id = id;
        this.createdAt = new Date().getTime();
        console.log(`Usuario ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

}

function createProductsOfClassProducts(){
    //Instanciar la clase Products para crear un objeto    
    const zote = new Products(1,"Zote");
    const products = [];
    products.push(zote);
    products.push(new Products(2,"Palmolive"));
    products.push(new Products(3,"Coca-cola 2L"));
    products.push(new Products(4,"Cajeta Corona"));

    console.table(products);
}
createProductsOfClassProducts();