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
  overallRatings: number;
  iconSize?: string;
};

const ReviewDetailRating = ({
  scentRatings,
  longevityRatings,
  sillageRatings,
  overallRatings,
}: DetailRatingProps) => {
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
      <div className="rating-title">
        <p>
          AVERAGE
          <br />
          SCORE
        </p>
        <Rating score={overallRatings} fontSize={"4.5rem"} />
      </div>
      <h1>Score</h1>
      {RatingList.map(({ name, title, subTitle, value }) => (
        <Item key={name}>
          <div className="title">
            <p className="title-text">{title}</p>
            <p className="subtitle-text">{subTitle}</p>
          </div>
          <Rating score={value} fontSize="4rem" />
        </Item>
      ))}
    </Wrapper>
  );
};

export default ReviewDetailRating;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & .rating-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px 0;
    font-size: 1.3125rem;
    line-height: 1.5;
    font-weight: bold;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    p {
      margin-right: 80px;
    }
  }

  & > h1 {
    font-size: 1.7rem;
    margin: 35px 0 20px;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  line-height: 1.5;

  & > .title {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    & > .title-text {
      font-weight: bold;
      font-size: 1.4rem;
    }

    & > .subtitle-text {
      font-size: 1.3rem;
      color: #474747;
    }
  }
`;
