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
import React from "react";
import PerfumeImage from "@/components/common/PerfumeImage";

const RightSideBox = () => {
  const { data: profileData } = useProfile();
  const { data: myReviewData } = useMyReviews({});
  const { data: randomPerfumeData } = useRandomPerfume(2);
  const isLoggedIn = useRecoilValue(loginState);
  const searchModal = useModal(MODAL_KEYS.search);

  const searchHandler = () => {
    searchModal.openModal();
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
              <div className="my-review-detail">
                <BrandText>{item.perfumeBrandEng}</BrandText>
                <NameText>{item.perfumeName}</NameText>
                <DescriptionText>{item.body}</DescriptionText>
                <div className="like-button">
                  <LikeButton likeCount={item.heartCnt} uuid={item.uuid} />
                </div>
              </div>
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
          </HighlightText>
          <HighlightText>오늘 시작해보세요!</HighlightText>
          <div className="random-perfumes">
            <HighlightText>Today's Perfumes</HighlightText>
            {randomPerfumeData?.map((item) => (
              <div className="small-rated-card">
                <PerfumeImage width={400} height={280} />
                <div className="card-detail">
                  <div>
                    <BrandText>{item.brandName}</BrandText>
                    <NameText>{item.perfumeName}</NameText>
                  </div>
                  <div className="rating-box">{item.overallRatings}</div>
                </div>
              </div>
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

    & > .small-rated-card {
      text-align: center;
      border-bottom: 1px solid;

      &:first-of-type {
        margin-bottom: 30px;
      }

      & > .card-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
