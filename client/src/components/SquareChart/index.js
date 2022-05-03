import classes from "../../styles/SquareChart.module.css";
import SChart from "./SChart";
const SquareChart = (props) => {
  return (
    <div className={classes.container}>
      <p>{props.name}</p>
      <SChart name={props.name} percent={props.percent}/>
      <div className={classes.footer}>
        <span>{props.value}</span>
      </div>
    </div>  
  );
};

export default SquareChart;
