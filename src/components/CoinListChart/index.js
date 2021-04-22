import { Line } from "react-chartjs-2";

export const CoinListChart = ({ categoryColor, priceData }) => {
  return (
    <Line
      data={{
        labels: priceData,
        datasets: [
          {
            label: `Price Chart`,
            data: priceData,
            backgroundColor: categoryColor,
            borderColor: categoryColor,
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
          enabled: false,
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
