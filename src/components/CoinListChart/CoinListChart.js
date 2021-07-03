import { Line } from "react-chartjs-2";
import { lightTheme, darkTheme } from "../../theme";

const CoinListChart = ({ priceChange, priceData, theme }) => {
  const themeColor = theme ? lightTheme : darkTheme;
  const chartColor = () => {
    if (priceChange > 0) {
      return themeColor.success;
    } else {
      return themeColor.danger;
    }
  };
  return (
    <Line
      data={{
        labels: priceData,
        datasets: [
          {
            label: `Price Chart`,
            data: priceData,
            backgroundColor: `transparent`,
            borderWidth: 1,
            borderColor: chartColor(),
            borderJoinStyle: "round",
            pointHoverRadius: 5,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
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

export default CoinListChart;
