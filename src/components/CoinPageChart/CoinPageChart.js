import { Line } from "react-chartjs-2";
import { formatPrice } from "utils";

const CoinPageChart = ({ name, chartData, currency }) => {
  // console.log(chartData);
  const formatData = (data, key) => {
    if (!data) {
      return;
    } else {
      return data[key].map((item) => {
        return {
          t: item[0],
          y: Number(formatPrice(item[1]).replace(",", "")),
        };
      });
    }
  };

  return (
    <>
      {(currency === "btc" || currency === "eth") && (
        <div>No Price Data NotAvailable for {currency.toUpperCase()}</div>
      )}
      <Line
        data={{
          datasets: [
            {
              label: `${name} price in ${currency.toUpperCase()}`,
              data: formatData(chartData, "prices"),
              backgroundColor: "rgb(164,135,195, 0.5)",
              borderColor: "rgb(164,135,195, 0.5)",
              borderJoinStyle: "round",
              pointHoverBorderColor: "rgb(164,135,195)",
              pointHoverRadius: 5,
              pointHoverBorderWidth: 3,
              pointRadius: 0,
              pointHitRadius: 10,
            },
            // {
            //   label: `${name} price in ${currency.toUpperCase()}`,
            //   data: formatData(chartData, "totalVolumes"),
            //   backgroundColor: "rgb(164,135,195, 0.5)",
            //   borderColor: "red",
            //   borderJoinStyle: "round",
            //   pointHoverBorderColor: "rgb(164,135,195)",
            //   pointHoverRadius: 5,
            //   pointHoverBorderWidth: 3,
            //   pointRadius: 0,
            //   pointHitRadius: 10,
            // },
          ],
        }}
        options={{
          interaction: {
            mode: "point",
          },
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
                type: "time",
                distribution: "linear",
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
    </>
  );
};

export default CoinPageChart;
