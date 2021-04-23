import React from "react";
import { Row, Col } from "antd";
import {
  SkeletonContainer,
  SkeletonBigAvatar,
  SkeletalBulletPointList,
  SkeletalBulletPoint,
  SkeletonHeader1,
  SkeletonHeader2,
} from "./Skeletons.styles";

export const SkeletonCoinPage = (props) => {
  return (
    <SkeletonContainer>
      <Row>
        <Col offset={1} span={8}>
          <Row align="middle">
            <Col span={4}>
              <SkeletonBigAvatar />
            </Col>
            <Col span={20}>
              <SkeletonHeader1 />
              <SkeletonHeader2 />
            </Col>
          </Row>
        </Col>
        <Col offset={3} span={12}>
          <Row>
            <Col span={8}>
              <SkeletonHeader1 />
              <SkeletonHeader2 />
            </Col>
            <Col span={16}>
              {[1, 2, 3].map((item) => {
                return (
                  <SkeletalBulletPointList>
                    <SkeletalBulletPoint />
                    <SkeletonHeader2 />
                  </SkeletalBulletPointList>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </SkeletonContainer>
  );
};
