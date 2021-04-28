import React from "react";
import { SkeletonText, SkeletonAvatar, SkeletonRow } from "./Skeletons.styles";

export const SkeletonCoinList = ({ coinsPerPage }) => {
  return (
    <>
      {[...Array(coinsPerPage)].map((item) => {
        return (
          <SkeletonRow key={item}>
            <SkeletonAvatar width="2rem" height="2rem" />
            <SkeletonText width="80%" height="0.25rem" />
          </SkeletonRow>
        );
      })}
    </>
  );
};
