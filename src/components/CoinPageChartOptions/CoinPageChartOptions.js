import { Radio } from "antd";
import { Container } from "./CoinPageChartOptions.styles";

const CoinPageChartOptions = ({ getChartDays, days }) => {
  const chartOptions = [
    { label: "1d", value: "1" },
    { label: "7d", value: "7" },
    { label: "30d", value: "30" },
    { label: "90d", value: "90" },
    // { label: "180d", value: "180" },
    { label: "1y", value: "365" },
    { label: "Max", value: "max" },
  ];

  return (
    <>
      <Container>
        <Radio.Group
          options={chartOptions}
          onChange={getChartDays}
          value={days}
        />
      </Container>
    </>
  );
};

export default CoinPageChartOptions;
