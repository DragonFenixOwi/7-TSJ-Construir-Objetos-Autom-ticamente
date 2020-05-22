/*
    -----------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        Constructor e instancia, en POO. Ensamblaje de autos.
    -----------------------------------------------------------
*/

/*
    ------------------
    Variables Globales
    ------------------
*/

//"numero_de_pedidos" define la cantidad de pedidos de ensamblaje
var cantidad_de_pedidos =0;

// variable que identifica los "modelos de los pedidos", cuando se llama la función instancia_de_ensamble
var modelo = '';

/*
    ---------
    Funciones
    ---------
*/


//función "instancia_de_ensamble" : crea instancias para Impresión en la consola del navegador 
function instancia_de_ensamble(numero_de_pedidos,modelo)
    {
        // Aseguramos una conversacion en minuscula del string recibido.  
        modelo = modelo.toLowerCase();
            
        // Si el pedido es de"toyota", se ejecuta el if
        if (modelo == 'toyota')
            {
            /*
                - Bucle que imprime en consola, los pedidos de ensamblaje y sus propiedades 
                - Cada iteración crea un objeto nuevo gracias a la plantilla (constructor "ensamblaje_de_coche")
            */
                for(var i1=1; i1<=numero_de_pedidos; i1++)
                    {   
                        //Creación de la instancia a partir del constructor  "ensamblaje_de_coche" 
                        var propiedades_de_construccion_1 = new ensamblaje_de_coche('Pick Up', 'Hibrido', 'independiente', 'Sistema ABS');
                        
                        // Cada objeto tiene la misma propiedad y en este caso el mismo valor key
                        console.log(`Autorización del pedido número ${i1} de la marca "${modelo}", con los siguientes valores-key de propiedades : \n `);
                        console.log(propiedades_de_construccion_1);
                        
                    }
                }

            
        // Si el pedido es de" Land Rover", se ejecuta el if
        if (modelo == 'land rover')
            {
            /*
                - Bucle que imprime en consola, los pedidos de ensamblaje y sus propiedades 
                - Cada iteración crea un objeto nuevo gracias a la plantilla (constructor "ensamblaje_de_coche")
            */
                for(var i2=1; i2<=numero_de_pedidos; i2++)
                    {   
                        //Creación de la instancia a partir del constructor  "ensamblaje_de_coche" 
                        var propiedades_de_construccion_2 = new ensamblaje_de_coche('SUV', 'Electrico', 'autoportante ', 'Sistema ABS');
                        
                        // Cada objeto tiene la misma propiedad y en este caso el mismo valor key
                        console.log(`Autorización del pedido número ${i2} de la marca "${modelo}", con los siguientes valores-key de propiedades : \n `);
                        console.log(propiedades_de_construccion_2);
                        
                        }
                }

            // Si el pedido es de"Nissan", se ejecuta el if
            if (modelo == 'nissan')
                {
                /*
                    - Bucle que imprime en consola, los pedidos de ensamblaje y sus propiedades 
                    - Cada iteración crea un objeto nuevo gracias a la plantilla (constructor "ensamblaje_de_coche")
                */
                    for(var i3=1; i3<=numero_de_pedidos; i3++)
                        {   
                            //Creación de la instancia a partir del constructor  "ensamblaje_de_coche" 
                            var propiedades_de_construccion_3 = new ensamblaje_de_coche('Sport', 'Gasolina', 'autoportante ', 'Freno de disco');
                            
                            // Cada objeto tiene la misma propiedad y en este caso el mismo valor key
                            console.log(`Autorización del pedido número ${i3} de la marca "${modelo}", con los siguientes valores-key de propiedades : \n `);
                            console.log(propiedades_de_construccion_3);
                            
                        }
                }
    }



/*
    ---------------------------
    Main - Desarrollo principal
    ---------------------------
*/


// Creando Constructor
function ensamblaje_de_coche(tipo_de_auto_carroceria, tipo_de_motor, chasis, Frenos) 
    {
        // Declarando las propiedades de la plantilla
            this.tipo_de_auto_carroceria = tipo_de_auto_carroceria;
            this.tipo_de_motor = tipo_de_motor;
            this.chasis = chasis;
            this.Frenos = Frenos;
    }

/*
Llamada de funcion para crear las instancias. Enviando:
    - "la cantidad de autos"  que se deben ensamblarcomo "primer parametro"
    - "El modelo del auto" que se quiere ensamblar "como segundo parametro"
*/
instancia_de_ensamble(10,'Land Rover');
instancia_de_ensamble(10,'Toyota');
instancia_de_ensamble(10,'Nissan');


