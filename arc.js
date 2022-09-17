class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    libros = [];
    mascotas = [];

    getFullName() {
        return `${usuario.nombre} ${usuario.apellido}`
    }
    addMascota(string){
        this.mascotas.push(string);
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(string, string1){
        this.libros.push({nombre: string, autor: string1})
    }
    getBookNames(){
        return this.libros.nombre;
    }
}

let usuario = new Usuario("Eva", "Quinteros");
usuario.getFullName();
usuario.addMascota("Gato");
usuario.addMascota("Perro");
usuario.countMascotas();
usuario.addBook("Encuentros", "El principito");
usuario.getBookNames();

console.log(usuario);
console.log(usuario.countMascotas())
console.log(usuario.getFullName());