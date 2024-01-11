import React, {Component} from "react";
import "../styles/Corpo_styles.css"
import Visor from "./Visor";
import Teclas from "./Teclas";

export default class calculadora extends Component{
    render(){
        return(
            <div id="principal">

                <div id="Calculadora">

                    <div id="sup">
                    <Visor/>
                    </div>

                    <div id="inf">
                        <Teclas/>
                    </div>

                </div>
                
            </div>
        )
    }
}