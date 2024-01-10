import '../styles/Visor_styles.css'

export default function Visor({numero}){
    return(
        <div id="visor">
            <p id='numeral'>{numero}</p>
        </div>
    )
}
