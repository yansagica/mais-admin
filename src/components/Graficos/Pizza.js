import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function Pizza({ chartData }) {
  return <Doughnut data={chartData} />;
}

export default Pizza;
