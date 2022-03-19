import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);
const Chart = (props) => {
  return (
    <div>
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: props.name,
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                "rgba(75, 192, 192, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              tension:0.4,
              fill:props.fill,
            },
            {
              label: "Outdoor temperature",
              data: [23, 19, 10, 51, 16, 53, 49],
              backgroundColor: [
                "rgba(54, 162, 235, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              tension:0.4,
              fill:props.fill,
            },
            {
              label: "Indoor temperature",
              data: [12, 10, 45, 5, 6, 13, 99],
              backgroundColor: [
                "rgba(255, 159, 64, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              tension:0.4,
              fill:props.fill,
            }
          ],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio :false,
          scales:{
            yAxes: [
              {
                ticks:{
                  beginAtZero: true,
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};
export default Chart;
