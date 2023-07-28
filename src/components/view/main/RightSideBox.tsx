import useProfile from "@/hooks/queries/useProfile";
import { useBestReviews } from "@/hooks/queries/useReivew";
import useMyReviews from "@/hooks/queries/useMyReviews";
import { useRandomPerfume } from "@/hooks/queries/usePerfume";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/login";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import LikeButton from "@/components/common/LikeButton";
import React, { useState } from "react";
import Link from "next/link";

const RightSideBox = () => {
  const { data: profileData } = useProfile();
  const isLoggedIn = useRecoilValue(loginState);
  const { data: myReviewData } = useMyReviews({ limit: 3, isLoggedIn });
  const { data: randomPerfumeData } = useRandomPerfume(2);
  const searchModal = useModal(MODAL_KEYS.search);

  const searchHandler = () => {
    searchModal.openModal();
  };
  const [imageErrorStatus, setImageErrorStatus] = useState<number>();

  const handleImageError = (statusCode: number) => {
    setImageErrorStatus(statusCode);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <div className="my-total">
            <HighlightText>{profileData?.nickname} 컬렉터님,</HighlightText>
            <HighlightText>
              지금까지 {profileData?.reviewCnt}개의 향수를
            </HighlightText>
            <HighlightText>수집하고 계시군요!</HighlightText>
          </div>
          <div className="my-best-review">
            <HighlightText style={{ paddingBottom: "20px" }}>
              My Best Review
            </HighlightText>
            {myReviewData?.map((item) => (
              <Link
                href={`/review/${item.uuid}`}
                className="my-review-detail"
                key={item.uuid}
              >
                <BrandText>{item.perfumeBrandEng}</BrandText>
                <NameText>{item.perfumeName}</NameText>
                <DescriptionText>{item.body}</DescriptionText>
                <div className="like-button">
                  <LikeButton likeCount={item.heartCnt} uuid={item.uuid} />
                </div>
              </Link>
            ))}
          </div>
          <ReviewCreateButton variant="text" onClick={searchHandler}>
            더 많은 리뷰 남기기 +
          </ReviewCreateButton>
        </>
      ) : (
        <>
          <HighlightText>
            향수를 선택하는 새롭고 스마트한 구매 여정,
            <br />
            오늘 시작해보세요!
          </HighlightText>
          <div className="random-perfumes">
            <HighlightText>Today's Perfumes</HighlightText>
            {randomPerfumeData?.map((item) => (
              <Link
                href={`/perfumes/${item.uuid}`}
                className="small-rated-card"
                key={item.uuid}
              >
                <div className="perfume-img-box">
                  <img
                    width={400}
                    height={280}
                    src={
                      imageErrorStatus === 401 ||
                      imageErrorStatus === 400 ||
                      imageErrorStatus === 404 ||
                      imageErrorStatus === 200 ||
                      imageErrorStatus === 500
                        ? "/perfume-default.svg"
                        : item.photos[0].url
                    }
                    alt={item.perfumeName}
                    onError={() => handleImageError(400)}
                  />
                </div>
                <div className="card-detail">
                  <div>
                    <BrandText>{item.brandName}</BrandText>
                    <NameText>{item.perfumeName}</NameText>
                  </div>
                  <div className="rating-box">
                    {item.overallRatings.toFixed(1)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default RightSideBox;

const Container = styled.div`
  flex: 1;
  border: 1px solid;
  padding: 20px 15px;
  position: relative;

  & > .my-total {
    padding-bottom: 276px;
  }

  & > .my-best-review {
    & > .my-review-detail {
      & > .like-button {
        text-align: right;
      }
    }
  }

  & > .random-perfumes {
    margin-top: 308px;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(3, minmax(1rem, auto));
    grid-row-gap: 1rem;

    & > .small-rated-card {
      text-align: center;
      & .perfume-img-box {
        width: 400px;
        height: 280px;

        & > img {
          object-fit: contain;
        }
      }

      &:first-of-type {
        margin-bottom: 30px;
      }

      & > .card-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;

        & > .rating-box {
          padding-top: 25px;
          width: 66px;
          height: 66px;
          background-color: #000;
          text-align: center;
          color: #fff;
          font-size: 17px;
        }
      }
    }
  }
`;

const HighlightText = styled.p`
  font-weight: bold;
  font-size: 22px;
  text-align: left;
  line-height: 1.3;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 19px;
  padding: 18px 0;
`;

const BrandText = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: left;
`;

const NameText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 17px;
  line-height: 25px;
  text-align: left;
`;

const ReviewCreateButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 15px;
  font-size: 18px;
  float: right;
  border-radius: 0;
`;
