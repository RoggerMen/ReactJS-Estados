import React from "react";

class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: "false"
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

                

                <input placeholder="Código de Seguridad" />

                <button onClick={()=>
                {
                    this.setState(prevState => (
                    
                        {error : !prevState.error}
                    ));
                }}>Comprobar</button>
            </div>
        );
    }
}

export { ClassState };
