import '../styles/Visor_styles.css'

export default function Visor(){

    let num = localStorage.getItem('numero')
    return(
        <div id="visor">
            <p id='numeral'>{num}</p>
        </div>
    )
}
