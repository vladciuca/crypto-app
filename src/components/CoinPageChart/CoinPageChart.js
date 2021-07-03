import { Line } from "react-chartjs-2";

const CoinPageChart = ({ name, chartData, currency }) => {
  const formatData = (data) => {
    if (!data) {
      return;
    } else {
      return data.prices.map((item) => {
        return { t: item[0], y: item[1].toFixed(2) };
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
              data: formatData(chartData),
              backgroundColor: "rgb(164,135,195, 0.5)",
              borderColor: "rgb(164,135,195, 0.5)",
              borderJoinStyle: "round",
              pointHoverBorderColor: "rgb(164,135,195)",
              pointHoverRadius: 5,
              pointHoverBorderWidth: 3,
              pointRadius: 0,
              pointHitRadius: 10,
            },
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
