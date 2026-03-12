// version 1.0.0

// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------- Ejemplo para pedir datos al usuario ----------------------

// Llama a la función getUserInput para obtener la entrada del usuario.
// De esta manera debes pedir datos al usuario durante el juego.
// Simplemente guardarás la respuesta en otra variable para el fin que corresponda.

//username = await getUserInput("What is your name?"); // COMENTA esta linea cuando empieces a programar.


// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}

//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

startGame();



let victoria = 0;
let derrota = 0;
let vidas_restantes = 0;
let continuar = "si";

let Lista_Palabras =[
    "PROGRAMA", "VARIABLE", "FUNCIONES", "SISTEMAS", "LOGARITM", "PROYECTO",
    "ESTUDIAN", "CIBERNET", "CONSOLA", "LENGUAJE", "PANTALLA", "TECLADOS",
    "INTERNET", "GRAFICOS", "ARCHIVOS", "MEMORIAS", "PROCESOS", "CUADRADO",
    "DINAMICA", "ESTRUCTU", "ALGORITM", "COMPILAR", "EJECUTAR", "ETIQUETA",
    "SOFTWARE", "HARDWARE", "APLICAR", "LOGISTICA", "ACADEMIA", "DESARROL",
    "FRONTEND", "BACKENDS", "DATABASE", "REGISTRO", "USUARIOS", "CONSULTA",
    "REPORTES", "GRAFICAS", "MENSAJES", "SEGURIDA", "CONEXION", "SERVIDO",
    "CLIENTES", "INTERFAZ", "VENTANAS", "BOTONES", "CALCULAR", "PROMEDIO",
    "NUMEROS_", "ARREGLOS", "OBJETOS", "METODOS", "HERENCIA", "CLASES_J",
    "EVENTOS", "CAPTURA", "VALORAR", "REPETIR", "MIENTRAS", "RETORNO",
    "ENLACES", "VISUALES", "LOGARITM", "POTENCIA", "RAIZ_CUA", "MODULOS",
    "LIBRERIA", "PAQUETES", "IMPORTAR", "EXPORTAR", "PROMESAS", "ASINCRON",
    "ESPERAR", "PETICION", "DOMINIOS", "HOSTING", "PUERTOS", "ENRUTADO",
    "ESTILO_S", "COLORES", "BORDES_L", "RELLENO", "MARGENES", "POSICION",
    "FLOTANTE", "FLEXIBLE", "REDISEÑO", "ADAPTADO", "VERSIONA", "GIT_HUB",
    "REPOSIT", "RAMASGIT", "FUSIONAR", "CONFLICT", "ENTORNO", "TERMINAL",
    "COMANDOS", "SCRIPTS", "BINARIOS", "COMPRESO", "LIBRERIA"
]

async function startGame(){
        username = await getUserInput("cual es tu nombre?");
        list_name=[username];
        list_name.push(username);
        let cedulaProgramador = "123456789";
        let intentosEchos = 6;
   
    while (true){
        let indice = Math.floor(Math.random() * 100)
        let palabraSecreta = Lista_Palabras[indice].toUpperCase(); //aqui tuve que pedir un poco de ayuda a la IA para que se escoja la palabra aleatoria
        let letrasAdivinadas = [];
        let letrasUsadas = "";
        for(let i in palabraSecreta) {
            letrasAdivinadas[i] = "_";
        }
        while(intentosEchos > 0 && letrasAdivinadas.includes("_")){
            console.log("este es el juego del ahorcado");
            console.log("palabras "+letrasAdivinadas);
            console.log("vidas restantes: "+intentosEchos);
            console.log("Letras usadas: "+letrasUsadas);
            let entrada = await getUserInput("Ingresa una letra que esten todas en mayuscula\n O introduce tu cédula para cerrar el programa (osea pon si quieres terminar 123456789): ");
            if (entrada = cedulaProgramador){
                console.log("cedula confirmada: seccion serrada");
                break;
            }
        }
       continuar = await getUserInput("quieres continuar? si/no");
    }
    // Aquí va la lógica principal del juego.
    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}