import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            loading:false
        };
    }
    // METODOS DE CICLO DE VIDA EN "React.Component"
    // PRIMERO SE EJECUTA ESTE AL INICIALIZAR EL RENDERIZADO
    // ESTE METODO SE EJECUTA ANTES DE RENDERIZAR NUESTROS COMPONENTES
    //componentWillMount(){
    // UNSAFE_componentWillMount(){
    //     console.log("componentWillMount");
    // }
   
    //SEGUNDO EJECUTA ESTE AL INICIALIZAR EL RENDERIZADO
    // ESTE SE EJECUTA DESPUES DE RENDERIZAR NUESTROS COMPONENTES
    // componentDidMount(){
    //     console.log("componentDidMount");
    // }

    // Este CADA VEZ que hay un cambio en el ESTADO CUANDO HAGAMOS "setState" TENEMOS QUE LLAMAR A NUESTRO "didUpdate"
    componentDidUpdate(){
        console.log("Actualización");

        // Si loading en vez de ser false es true entonces ejecutamos todo el setTimeout
        if(!!this.state.loading){
            setTimeout(() => {
                console.log("Haciendo la Validación");

                this.setState({loading:false});

                console.log("Terminando la Validación");
            }, 2000)
        }
    }

    
    render(){
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad</p>

                {this.state.error && 
                <>
                {/*{alert("Error2: el código es incorrecto")}*/}
                <p>Error: el código es incorrecto</p>  <p>Error 2</p>
                </>
                }

                {this.state.loading && (
                    <Loading />
                    )
                }

                <input placeholder="Código de Seguridad" />
                {/** ANTES ERA ASI POR EL ESTADO ERROR
                 {
                    this.setState(prevState => (
                    
                        {error : !prevState.error}
                    ));
                }
                 */}
                <button onClick={() => this.setState({ loading :true})}
                    >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };
