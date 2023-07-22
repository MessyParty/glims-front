import React from "react";
import styled from "@emotion/styled";
import EditableRating from "@/components/common/EditAbleRating";

type RatingName =
  | "overallRatings"
  | "longevityRatings"
  | "sillageRatings"
  | "scentRatings";

const RatingList = [
  { name: "overallRatings", title: "총점", subtitle: "overall" },
  { name: "longevityRatings", title: "지속력", subtitle: "longevity" },
  { name: "sillageRatings", title: "잔향", subtitle: "sillage" },
  { name: "scentRatings", title: "본연의 향", subtitle: "scent" },
];

type ReviewRatingProps = {
  onChange: (name: RatingName, value: number) => void;
  ratings: {
    [name: string]: number;
  };
};

const ReviewRating = ({ onChange, ratings }: ReviewRatingProps) => {
  const handleRatingChange = (name: RatingName, value: number) => {
    onChange(name, value);
  };

  return (
    <Wrapper>
      <div className="average">
        <div>
          <EditableRating
            value={ratings.overallRatings}
            onChange={(value) => handleRatingChange("overallRatings", value)}
            precision={0.5}
            fontSize="4rem"
          />
        </div>
      </div>
      <h2>Detail</h2>
      {RatingList.filter((rating) => rating.name !== "overallRatings").map(
        ({ name, title, subtitle }) => (
          <Item key={name}>
            <div className="rating-title">
              <p className="title">{title}</p>
              <p className="subtitle">{subtitle.toUpperCase()}</p>
            </div>
            <EditableRating
              value={ratings[name]}
              onChange={(value) =>
                handleRatingChange(name as RatingName, value)
              }
              precision={0.5}
              fontSize="3.5rem"
            />
          </Item>
        ),
      )}
    </Wrapper>
  );
};

export default ReviewRating;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 838px;
  margin: 0 auto;

  & .average {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-bottom: 36px;
    width: 838px;
    & > div {
      text-align: center;
    }

    & > .MuiRating-root {
      display: flex;
      justify-content: center;
    }
  }

  & > h2 {
    font-size: 22px;
    font-weight: bold;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 495px;

  & .rating-title {
    display: flex;
    flex-direction: column;

    & .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 18px;
      margin-bottom: 0.5rem;
    }

    & .subtitle {
      color: rgba(0, 0, 0, 0.7);
      font-size: 18px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;
