import {BsLightbulbFill} from "react-icons/bs"
import classes from "../../styles/TurnOnOff.module.css"
import SwitchButton from "./SwitchButton"
const LightBulb = ()=>{
    return <div className={classes.container}>
        <BsLightbulbFill size={30} color="Orange"/>
        <div className={classes.info}>
            <p>LightBulb</p>
            <div className={classes.onOffBar}>
                <p>Turn on/off lightbulb</p>
                <SwitchButton></SwitchButton>
            </div>
        </div>
    </div>
}

export default LightBulb;