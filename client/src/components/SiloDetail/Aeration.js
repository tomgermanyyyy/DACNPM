import {BsWind} from "react-icons/bs"
import classes from "../../styles/TurnOnOff.module.css"
import SwitchButton from "./SwitchButton"
const Aeration = ()=>{
    return <div className={classes.container}>
        <BsWind size={25}/>
        <div className={classes.info}>
            <p>Aeration</p>
            <div className={classes.onOffBar}>
                <p>Turn on/off aeration</p>
                <SwitchButton></SwitchButton>
            </div>
        </div>
    </div>
}

export default Aeration