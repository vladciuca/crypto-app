import { ChartBox, SkeletonText, Spacer } from "./Skeletons.styles";

export const SkeletonChart = () => {
  return (
    <ChartBox>
      <SkeletonText width={"100%"} height={"2rem"} />
      <Spacer />
    </ChartBox>
  );
};
