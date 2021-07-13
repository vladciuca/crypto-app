import { ChartBox, SkeletonText, ChartBar } from "./Skeletons.styles";

const generateBarHeight = (min, max) => {
  return min >= max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
};

export const SkeletonChart = ({ barPerChart }) => {
  return (
    <ChartBox gutter={[16]}>
      {[...Array(barPerChart)].map((item, index) => (
        <ChartBar key={index}>
          <SkeletonText
            width={"100%"}
            height={`${generateBarHeight(1, 8)}rem`}
          />
        </ChartBar>
      ))}
      <ChartBar>
        <SkeletonText width={"100%"} height={"8rem"} />
      </ChartBar>
    </ChartBox>
  );
};
