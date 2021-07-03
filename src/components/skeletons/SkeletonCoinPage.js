import {
  SkeletonAvatar,
  SkeletonText,
  CoinPageRow,
  CoinPageCol,
  Spacer,
  Center,
} from "./Skeletons.styles";

export const SkeletonCoinPage = () => {
  return (
    <CoinPageRow>
      <CoinPageCol span={6}>
        <Center>
          <SkeletonAvatar width={"3.5rem"} height={"3.5rem"} />
        </Center>
      </CoinPageCol>
      <CoinPageCol offset={1} span={6}>
        <div>
          <div>
            <SkeletonText width={"7.5rem"} height={"1rem"} />
          </div>
          <Spacer />
          <div>
            <SkeletonText width={"7.5rem"} height={"0.5rem"} />
          </div>
        </div>
      </CoinPageCol>

      <CoinPageCol offset={1} span={10}>
        <div>
          <div>
            <SkeletonText width={"15rem"} height={"1rem"} />
          </div>
          <Spacer />
          <div>
            <SkeletonText width={"15rem"} height={"1rem"} />
          </div>
          <Spacer />
          <div>
            <SkeletonText width={"15rem"} height={"1rem"} />
          </div>
        </div>
      </CoinPageCol>
    </CoinPageRow>
  );
};
