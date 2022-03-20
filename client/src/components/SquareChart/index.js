import { FiClock } from "react-icons/fi";
import classes from "../../styles/SquareChart.module.css";
import SChart from "./SChart";
const SquareChart = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.name}</h1>
      <div className={classes.text}>
        <FiClock />
        <span>Realtime-last 10 minutes</span>
      </div>
      <SChart name={props.name} fill={props.fill}/>
      <div className={classes.footer}>
        <span>{props.name}</span>
        <span>{props.percent}</span>
      </div>
    </div>
  );
};

export default SquareChart;
