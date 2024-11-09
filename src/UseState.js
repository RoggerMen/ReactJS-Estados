import React from "react";

function UseState({ name }) {

    const[error, setError] = React.useState(true);
    const[loading, setLoading] = React.useState(false);

    React.useEffect(() => {
            console.log("Empezando el Efecto");
        // Si loading en vez de ser false es true entonces ejecutamos todo el setTimeout
            if(!!loading){
                setTimeout(() => {
                    console.log("Haciendo la Validación");
    
                    setLoading(false);
    
                    console.log("Terminando la Validación");
                }, 3000)
            }

            console.log("Terminando el Efecto");
    }, [loading]);

    return (
        <div>
                <h2>Eliminar {name}</h2>

                <p>Por favor, escribe el código de seguridad</p>

                {error && 
                <>
                {/*{alert("Error1: el código es incorrecto")}*/} 
                <p>Error: el código es incorrecto</p>  <p>Error 1</p>
                </>
                }

                {loading && 
                <> 
                <p>Loading...</p>  <p>Carga1...</p>
                </>
                }

                <input placeholder="Código de Seguridad" />
{/*la funcion actualizadora "setError" nos devuelve el valor anterior(estado inicial)
donde podemos hacerlo de 2 FORMAS como dandole una funcion anonima para que el onclick al presionar haga algo como :
 (prevState => !prevState) osea que llama al estado incial error y lo coloca al prevstate => donde ese "setError" devolvera un nuevo valor que es el error pero lo contrario  osea "!prevState"
 Otra forma es llamando a la funcion actualizadora y al estado inicial pero lo contrario donde es de esta forma: setError(!error)
 este es del ERROR onClick={()=>{
                    setError(!error);
                }}
 */}
                <button  onClick={()=>{
                    setLoading(true);
                }}>Comprobar</button>
            </div>
    )
}

export { UseState };
