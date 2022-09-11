class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    libros = [];
    mascotas = [];

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(string){
        this.mascotas.push(string);
    }
    countMascotas(){
        this.mascotas;
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
usuario.addMascota("Gato")
usuario.addMascota("Perro");
usuario.countMascotas();
usuario.addBook("Encuentros", "El principito");
usuario.getBookNames();

console.log(usuario);