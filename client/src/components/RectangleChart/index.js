import classes from "../../styles/RectangleChart.module.css";
import { FiClock } from "react-icons/fi";
import Chart from "./RChart";
const RectangleChart = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.name}</h1>
      <div className={classes.text}>
        <FiClock />
        <span>Realtime-last 10 minutes</span>
      </div>
      <Chart name={props.name} fill={props.fill} />
      <div className={classes.footer}>
        <span>{props.name}</span>
        <span>24.1 °C</span>
      </div>
      <div className={classes.footer}>
        <span>Outdoor temperature</span>
        <span>24.1 °C</span>
      </div>
      <div className={classes.footer}>
        <span>Indoor temperature</span>
        <span>24.1 °C</span>
      </div>
    </div>
  );
};

export default RectangleChart;
