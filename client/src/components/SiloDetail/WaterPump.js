import {GiWateringCan} from "react-icons/gi"
import classes from "../../styles/TurnOnOff.module.css"
import SwitchButton from "./SwitchButton"
const WaterPump = ()=>{
    return <div className={classes.container}>
        <GiWateringCan size={30} color="blue"/>
        <div className={classes.info}>
            <p>WaterPump</p>
            <div className={classes.onOffBar}>
                <p>Turn on/off water pump</p>
                <SwitchButton></SwitchButton>
            </div>
        </div>
    </div>
}

export default WaterPump;