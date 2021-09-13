import {Link} from "react-router-dom";
import './button.css'

const STYLES=['btn--primary','btn--outline'];
const  SIZES=['btn--medium','btn--large']
export const Button=({children,type,onclick,buttonStyle,buttonSize})=>{
     const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
     const checkButtonSize = SIZES.includes(buttonSize)?buttonSize:SIZES[0];

     return(
         <Link to='signUp' classname="btn-mobile">
              <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
                   {children}
              </button>
         </Link>
     )
}