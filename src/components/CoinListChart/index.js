import { Line } from "react-chartjs-2";

export const CoinListChart = (props) => {
  return (
    <Line
      data={{
        labels: props.priceData,
        datasets: [
          {
            label: `Price Chart`,
            data: props.priceData,
            backgroundColor: "rgb(164, 135, 195, 0.5)",
            borderColor: "rgb(164, 135, 195, 0.5)",
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
