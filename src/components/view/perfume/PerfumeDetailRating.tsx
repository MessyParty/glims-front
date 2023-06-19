import React from "react";
import styled from "@emotion/styled";
import Rating from "@/components/common/Rating";

type RatingListType = {
  name: string;
  title: string;
  subTitle: string;
  value: number;
};

type DetailRatingProps = {
  scentRatings: number;
  longevityRatings: number;
  sillageRatings: number;
  iconSize?: string;
};

export default function DetailRating({
  scentRatings,
  longevityRatings,
  sillageRatings,
}: DetailRatingProps) {
  const RatingList: RatingListType[] = [
    {
      name: "scentRatings",
      title: "본연의 향",
      subTitle: "SCENT",
      value: scentRatings,
    },
    {
      name: "longevityRatings",
      title: "지속력",
      subTitle: "LONGEVITY",
      value: longevityRatings,
    },
    {
      name: "sillageRatings",
      title: "잔향",
      subTitle: "SILLAGE",
      value: sillageRatings,
    },
  ];

  return (
    <Wrapper>
      {RatingList.map(({ name, title, subTitle, value }) => (
        <Item key={name}>
          <div className="title">
            <p className="title-text">{title}</p>
            <p className="subtitle-text">{subTitle}</p>
          </div>
          <Rating score={value} fontSize="3rem" />
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  & > .title {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    & > .title-text {
      font-weight: bold;
      font-size: 1.2rem;
    }

    & > .subtitle-text {
      font-size: 1.1rem;
      color: #474747;
    }
  }

  & > .MuiRating-root {
    place-content: end;
  }
`;
