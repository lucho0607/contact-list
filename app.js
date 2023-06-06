let listaContactos = [
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








