import { GoPrimitiveDot } from "react-icons/go";
import {ImDroplet} from "react-icons/im"
import {FaTemperatureHigh} from "react-icons/fa"
import {MdLocalGasStation} from "react-icons/md"
import classes from "../../styles/InfoBar.module.css"
const InfoBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.portion}>
        <p>Aeration:</p>
        <div>
          <GoPrimitiveDot size={25} color="green"></GoPrimitiveDot>
          <span>Off</span>
        </div>
      </div>
      <div className={classes.portion}>
        <p>Moisture:</p>
        <div>
          <ImDroplet size={25}></ImDroplet>
          <span>64.5%</span>
        </div>
      </div>
      <div className={classes.portion}>
        <p>Temperature:</p>
        <div>
          <FaTemperatureHigh size={25}></FaTemperatureHigh>
          <span>24.5%</span>
        </div>
      </div>
      <div className={classes.portion}>
        <p>Outdoor temp:</p>
        <div>
          <FaTemperatureHigh size={25}></FaTemperatureHigh>
          <span>24.5%</span>
        </div>
      </div>
      <div className={classes.portion}>
        <p>Crop level:</p>
        <div>
          <MdLocalGasStation size={25} color="green"></MdLocalGasStation>
          <span>24.5%</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
