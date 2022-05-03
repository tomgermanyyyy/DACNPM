import GaugeChart from 'react-gauge-chart';
import classes from "../../styles/Schart.module.css"
const SChart = (props) => {
  const percent = props.percent;
  return (
    <div className={classes.squarechart}>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={20}
        percent={percent}
        arcWidth={0.3}
        needleColor="#345243"
        textColor="black"
        hideText={true}
      />
    </div>
  );
};
export default SChart;
