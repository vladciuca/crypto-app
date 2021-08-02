import React from "react";
import { SkeletonText, SkeletonAvatar, SkeletonRow } from "./Skeletons.styles";

export const SkeletonCoinList = ({ coinsPerPage }) => {
  return (
    <>
      {coinsPerPage === 0
        ? ""
        : [...Array(coinsPerPage)].map((item, index) => (
            <SkeletonRow key={index}>
              <SkeletonAvatar width="2rem" height="2rem" />
              <SkeletonText width="80%" height="0.65rem" />
            </SkeletonRow>
          ))}
    </>
  );
};
