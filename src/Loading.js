import React from "react";

class Loading extends React.Component {
         // ESTE NO SALE AL INICIALIZAR PERO ESTE SE VE CUANDO SE HACE UN RE-RENDER Y ES EL SEGUNDO QUE SE VE AL HACERSE EL RE-RENDER
     // ESTE AL INICIO NO SE MUESTRA PORQUE NUNCA DESREDERINZAMOS NUESTROS COMPONENTES
     componentWillUnmount(){
        console.log("componentWillUnmount");
    }
   
    render(){
        return (
            <p>Cargando2</p>
        );
    }
}

export { Loading };
