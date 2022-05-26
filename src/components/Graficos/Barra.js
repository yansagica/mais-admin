import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function Barra({ chartData }) {
  return <Bar data={chartData} />;
}

export default Barra;
