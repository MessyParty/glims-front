import styled from "@emotion/styled";
import useProfile from "@/hooks/queries/useProfile";
import useMyReviews from "@/hooks/queries/useMyReviews";
import PerfumeImage from "@/components/common/PerfumeImage";
import LikeButton from "@/components/common/LikeButton";
import DecorationBar from "@/components/common/DecorationBar";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/login";
import { Button } from "@mui/material";
import { useBestReviews } from "@/hooks/queries/useReivew";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import Modal from "@/components/common/Modal";
import React from "react";
import SearchModal from "@/components/view/search/SearchModal";

const Main = () => {
  const { data: profileData } = useProfile();
  const { data: bestData, isSuccess } = useBestReviews(3);
  const { data: myReviewData } = useMyReviews({});
  const isLogined = useRecoilValue(loginState);
  const searchModal = useModal(MODAL_KEYS.search);

  const searchHandler = () => {
    searchModal.openModal();
  };

  return (
    <>
      <Container>
        <ReviewWrapper>
          {bestData !== undefined ? (
            <>
              <div className="best-review">
                <DecorationBar top={-4} left={-1} />
                <div className="review-box">
                  <PerfumeImage width={375} height={400} />
                  <div className="review-detail">
                    <div>
                      <HighlightText>{bestData[0].title}</HighlightText>
                      <DescriptionText>{bestData[0].body}</DescriptionText>
                    </div>
                    <div className="review-meta">
                      <div>
                        <BrandText>{bestData[0].perfumeBrandEng}</BrandText>
                        <NameText>{bestData[0].perfumeName}</NameText>
                      </div>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </div>
              <div className="best-review">
                <DecorationBar top={-4} right={0} />
                <div className="review-box">
                  <div className="review-detail">
                    <div>
                      <HighlightText>{bestData[1].title}</HighlightText>
                      <DescriptionText>{bestData[1].body}</DescriptionText>
                    </div>
                    <div className="review-meta">
                      <div>
                        <BrandText>{bestData[1].perfumeBrandEng}</BrandText>
                        <NameText>{bestData[1].perfumeName}</NameText>
                      </div>
                      <LikeButton />
                    </div>
                  </div>
                  <PerfumeImage width={375} height={400} />
                </div>
              </div>
              <div className="best-review">
                <DecorationBar top={-4} left={-1} />
                <div className="review-box">
                  <PerfumeImage width={375} height={400} />
                  <div className="review-detail">
                    <div>
                      <HighlightText>{bestData[2].title}</HighlightText>
                      <DescriptionText>{bestData[2].body}</DescriptionText>
                    </div>
                    <div className="review-meta">
                      <div>
                        <BrandText>{bestData[2].perfumeBrandEng}</BrandText>
                        <NameText>{bestData[2].perfumeName}</NameText>
                      </div>
                      <LikeButton />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </ReviewWrapper>
        <MyInfoWrapper>
          {isLogined ? (
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
                      <LikeButton />
                    </div>
                  </div>
                ))}
              </div>
              <ReviewCreateButton variant="text" onClick={searchHandler}>
                더 많은 리뷰 남기기 +
              </ReviewCreateButton>
            </>
          ) : (
            <></>
          )}
        </MyInfoWrapper>
      </Container>
      <Modal
        modalKey={MODAL_KEYS.search}
        modalContent={<SearchModal />}
        open={searchModal.isOpen}
      />
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 100px 0;
`;

const ReviewWrapper = styled.div`
  width: 750px;
  border: 1px solid;

  & > .best-review {
    position: relative;
    display: flex;

    & > .review-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0;
    }

    & .review-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 30px;

      & > .review-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 80px;
      }
    }
  }
`;

const MyInfoWrapper = styled.div`
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
`;

const HighlightText = styled.p`
  font-weight: bold;
  font-size: 22px;
  text-align: left;
  line-height: 1.3;
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
`;

const NameText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 17px;
  line-height: 25px;
`;

const ReviewCreateButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 15px;
  font-size: 18px;
  float: right;
  border-radius: 0;
`;
