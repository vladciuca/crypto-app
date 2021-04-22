import React from "react";
import {
  SkeletonText,
  SkeletonAvatar,
  SkeletonRow,
  SkeletonHeader,
} from "./Skeletons.styles";

export const SkeletonCoinList = ({ coinsPerPage }) => {
  const rows = [];
  for (let i = 1; i < coinsPerPage; i++) {
    rows.push(i);
  }
  return (
    <>
      <SkeletonHeader />
      {rows.map((item) => {
        return (
          <SkeletonRow key={item}>
            <SkeletonAvatar />
            <SkeletonText />
          </SkeletonRow>
        );
      })}
    </>
  );
};
