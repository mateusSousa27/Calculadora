import "../styles/Teclas_styles.css";
import { FaDeleteLeft } from "react-icons/fa6";

export default function Teclas() {
    let num;
    let limpar = false
    let deletar;
    let contador;

    let novoNumero=[];

    let operador;
    let number_1;
    let number_2; 
    let resultado;


    function clean(){
        limpar = true;

        localStorage.setItem('numero', 0)

        window.location.reload();

    }

    function tecla(e){
        if(localStorage.getItem('numero') != 0){
            num = localStorage.getItem('numero');

            localStorage.setItem('numero', num + e.target.value)

            window.location.reload();
        }else{
            localStorage.setItem('numero', e.target.value)

            window.location.reload();
        }
    }

    function delet(){
        deletar = localStorage.getItem('numero')

        contador = deletar.length - 1;

        for (let index = 0; index < contador; index++) {
            
            novoNumero = novoNumero + deletar[index]
         
        }

        if (novoNumero.length == 0) {
            localStorage.setItem('numero', 0);

            window.location.reload();
        }else{
            localStorage.setItem('numero', novoNumero);

            window.location.reload();
        }

        

    }

    function operadores(e){

        operador = e.target.value;

        localStorage.setItem('operador', operador)

        if(number_1 > 0){
            number_2 = localStorage.getItem('numero')

            localStorage.setItem('number_02', number_2);
        }else{
            number_1 = localStorage.getItem('numero')

            localStorage.setItem('numero', ' ')

            localStorage.setItem('number_1', number_1)
        }

    }

    function result(){
        number_1 = localStorage.getItem('number_1')
        number_2 = localStorage.getItem('numero')

        console.log(parseInt(number_1));
        console.log(parseInt(number_2));

        console.log(localStorage.getItem('operador'));

        operador = localStorage.getItem('operador')

        switch (operador) {
            case "+":

                resultado = parseInt(number_1) + parseInt(number_2)

                localStorage.setItem('numero', resultado)
                break;
            case "x":
    
                resultado = parseInt(number_1) * parseInt(number_2)
    
                localStorage.setItem('numero', resultado)
                break;
            case "-":
        
                resultado = parseInt(number_1) - parseInt(number_2)
        
                localStorage.setItem('numero', resultado)
                break;
                 
            case "%":
        
                resultado = (parseInt(number_1)/100) * parseInt(number_2)
        
                localStorage.setItem('numero', resultado)
                break;
            
            case "/":
        
                resultado = parseInt(number_1) / parseInt(number_2)
        
                localStorage.setItem('numero', resultado)
                break;
              
            default:
                break;
        }

        window.location.reload()
    }

    return(
        <div id="teclas">
            
            <div id="up">
                <button id="Clean" onClick={clean}>C</button>
                <button className="operation" onClick={delet}><FaDeleteLeft /></button>
                <button className="operation" onClick={operadores} value="%">%</button>
                <button className="operation" onClick={operadores} value="/">/</button>
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
                    <button className="num" onClick={operadores} value="x">X</button>
                    <button className="num" onClick={operadores} value='-'>-</button>
                    <button className="num" onClick={operadores} value='+'>+</button>
                    <button className="num" onClick={result}>=</button>
                </div>

                
            </div>
        </div>
    )
}