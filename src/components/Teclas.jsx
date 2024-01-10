import { useEffect } from "react";
import "../styles/Teclas_styles.css";
import { FaDeleteLeft } from "react-icons/fa6";

export default function Teclas() {

    let limpar = false
    let num;

    function clean(){
        limpar = true;

        localStorage.setItem('numero', 0)

        window.location.reload();

    }

    function tecla(e){
        if(localStorage.getItem('numero') != 0){
            num = localStorage.getItem('numero');

            num = num + e.target.value

            localStorage.setItem('numero', num)

            window.location.reload();
        }else{
            localStorage.setItem('numero', e.target.value)

            window.location.reload();
        }
    }

    function operadores(){
        alert("Em produção")
    }

    return(
        <div id="teclas">
            
            <div id="up">
                <button id="Clean" onClick={clean}>C</button>
                <button className="operation"><FaDeleteLeft /></button>
                <button className="operation" onClick={operadores}>%</button>
                <button className="operation" onClick={operadores}>/</button>
            </div>

            <div id="down">

                <div id="column_zero">
                    <button className="num" id="zero" onClick={tecla} value={0}>0</button>
                    <button className="num" onClick={tecla} value={'.'}>.</button>
                </div>

                <div id="column_um">
                    <button className="num" onClick={tecla} value={7}>7</button>
                    <button className="num" onClick={tecla} value={4}>4</button>
                    <button className="num" onClick={tecla} value={1}>1</button>
                </div>

                <div id="column_dois">
                    <button className="num" onClick={tecla} value={8}>8</button>
                    <button className="num" onClick={tecla} value={5}>5</button>
                    <button className="num" onClick={tecla} value={2}>2</button>
                </div>

                <div id="column_tres">
                    <button className="num" onClick={tecla} value={9}>9</button>
                    <button className="num" onClick={tecla} value={6}>6</button>
                    <button className="num" onClick={tecla} value={3}>3</button>
                </div>

                <div id="column_quatro">
                    <button className="num" onClick={operadores} value={"x"}>X</button>
                    <button className="num" onClick={operadores} value={'-'}>-</button>
                    <button className="num" onClick={operadores} value={'+'}>+</button>
                    <button className="num">=</button>
                </div>

                
            </div>
        </div>
    )
}