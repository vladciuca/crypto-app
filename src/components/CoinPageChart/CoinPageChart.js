import { Line } from "react-chartjs-2";

const CoinPageChart = ({ name, priceData }) => {
  return (
    <Line
      data={{
        labels: priceData,
        datasets: [
          {
            label: `${name} Price Chart`,
            data: priceData,
            backgroundColor: "rgb(164,135,195, 0.5)",
            borderColor: "rgb(164,135,195, 0.5)",
            borderJoinStyle: "round",
            pointRadius: 0,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      }}
    />
  );
};

export default CoinPageChart;
