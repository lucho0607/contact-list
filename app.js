/* let listaContactos = [
    "luis cubillos",
    "alexander florez",
    "sara pineda",
     
]

function añadirContacto (nuevo){
    listaContactos.push(nuevo);
}
añadirContacto("luz restrepo");

console.log(listaContactos);

function eliminar (){
    listaContactos.pop()
}
eliminar();
console.log(listaContactos);

function imprimirContactos(){
   console.log(listaContactos)
}
imprimirContactos()

añadirContacto("Gabriella Castañeda");

console.log(listaContactos);

function añadirContactoa (nuevo){
    listaContactos.unshift(nuevo)
}
añadirContactoa("axel rose")

console.log(listaContactos)

function eliminara (){
    listaContactos.shift()
}
eliminara();

console.log(listaContactos)

function eliminarp (){
    listaContactos.splice(2,1)
}
eliminarp();

console.log(listaContactos)

añadirContacto("jose calle");

console.log(listaContactos); */







const contacto1 ={
    id: 123456,
    nopmbres: "cindy nataly",
    apellidos: "castro sanchez",
    telefono: 3024055233,
    ubicaciones: {
        ciudad: "Bogota",
        direccion: "calle las aguas 20"

    }
} ;

const contacto2 ={
    id: 654321,
    nombres: "carlos andres",
    apellidos:"perez ortiz",
    telefono: 3045162088,
    ubicaciones:{
        ciudad: "Bogota",
        direccion:"calle 46 # 16"
    } 

};

let listaContactos =[contacto1, contacto2];
console.log(listaContactos);

function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    let contacto = {
        id,
        nombres,
        apellidos,
        telefono,
        ubicaciones: {
            ciudad,
            direccion
        }

    }
    listaContactos.push(contacto)
};

crearContacto(852987, "luis fernando", "cubillos", 3044455063, "Bogota", "calle 52 # 25");
console.log(listaContactos);

function eliminarContacto (id){
    for (let i=0; i<listaContactos.length; i++){
        if(listaContactos[i].id===id){
            listaContactos.splice(i, 1);
        }
    } 
};
eliminarContacto(654321)
console.log(listaContactos);

