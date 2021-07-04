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
      <CoinPageCol
        xs={{ span: 24, order: 1 }}
        sm={{ span: 12, order: 1 }}
        md={{ span: 11, order: 1 }}
        lg={{ span: 6, order: 1 }}
        xl={{ span: 6, order: 1 }}
      >
        <Center>
          <SkeletonAvatar width={"3.5rem"} height={"3.5rem"} />
        </Center>
      </CoinPageCol>
      <CoinPageCol
        xs={{ span: 24, offset: 0, order: 2 }}
        sm={{ span: 11, offset: 1, order: 2 }}
        md={{ span: 12, offset: 1, order: 2 }}
        lg={{ span: 6, offset: 1, order: 2 }}
        xl={{ span: 6, offset: 1, order: 2 }}
      >
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

      <CoinPageCol
        xs={{ span: 24, offset: 0, order: 4 }}
        sm={{ span: 24, offset: 0, order: 4 }}
        md={{ span: 24, offset: 0, order: 4 }}
        lg={{ span: 10, offset: 1, order: 3 }}
        xl={{ span: 10, offset: 1, order: 3 }}
      >
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
