import { GoPrimitiveDot } from "react-icons/go";
import { ImDroplet } from "react-icons/im";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import classes from "../../styles/InfoBar.module.css";
const InfoBar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.portion}>
        <span>Dome</span>
        <div>
          <GoPrimitiveDot size={25} color={props.dome === 1? "green": "red"}></GoPrimitiveDot>
          <span>{props.dome === 1? "ON": "OFF"}</span>
        </div>
      </div>
      <div className={classes.portion}>
        <soan>Pump</soan>
        <div>
          <GoPrimitiveDot size={25} color={props.pump === 1? "green": "red"}></GoPrimitiveDot>
          <span>{props.pump === 1? "ON": "OFF"}</span>
        </div>
      </div>
      <div className={classes.portion}>
        <span>Moisture</span>
        <div>
          <ImDroplet size={25} color="rgba(0, 242, 255, 0.8)"></ImDroplet>
          <span>{props.moisture}%</span>
        </div>
      </div>
      <div className={classes.portion}>
        <span>Temperature</span>
        <div>
          <FaTemperatureHigh
            size={25}
            color="rgba(255, 124, 0, 0.8)"
          ></FaTemperatureHigh>
          <span>{props.temperature}°C</span>
        </div>
      </div>
      <div className={classes.portion}>
        <span>Light Intensity</span>
        <div>
          <BsFillSunFill size={25} color="rgba(224, 232, 0, 1)"></BsFillSunFill>
          <span>{props.light} lux</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
