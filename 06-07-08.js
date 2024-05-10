/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
                this.nombre = nombre;
                this.edad = edad;
                this.hobbies = hobbies;
                this.amigos = amigos;
            }
    
            addFriend(nombre, edad) {
                this.amigos.push({ nombre: nombre, edad: edad });
            }
    
            addHobby(hobby) {
                this.hobbies.push(hobby);
            }
    
            getFriends() {
                // Retorna un arreglo con solo los nombres de los amigos
                return this.amigos.map(amigo => amigo.nombre);
            }
    
            getHobbies() {
                // Retorna un arreglo con los hobbies de la persona
                return this.hobbies;
            }
    
            getPromedioEdad() {
                // Retorna el promedio de edad de los amigos de la persona
                const totalEdad = this.amigos.reduce((acc, amigo) => acc + amigo.edad, 0);
                return totalEdad / this.amigos.length;
            }
    
            getData() {
                // Retorna un string con la información completa de la persona
                return `${this.nombre} tiene ${this.edad} años`;
            }
        }
    
        return Persona;
    }
    
// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona