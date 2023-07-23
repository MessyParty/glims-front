import useProfile from "@/hooks/queries/useProfile";
import useMyReviews from "@/hooks/queries/useMyReviews";
import ReviewCard from "@/components/common/ReviewCard";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import Modal from "@/components/common/Modal";
import NicknameUpdateModalContent from "@/components/view/mypage/NicknameUpdateModalContent";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import RatedCard from "@/components/common/RatedCard";
import React, { useState } from "react";
import PaginationBar from "@/components/common/PaginationBar";
import Link from "next/link";

const MyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: profileData } = useProfile();
  const { data: reviewData, isSuccess } = useMyReviews({});
  const nicknameUpdateModal = useModal(MODAL_KEYS.nicknameUpdate);

  const itemsPerPage = 6;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedReviewData = reviewData?.slice(startIdx, endIdx);

  return (
    <>
      <SummaryWrapper>
        <p>
          <b>{profileData?.nickname}님</b>은
        </p>
        <p>
          <b>{profileData?.reviewCnt}개</b>의 향수를 수집하고 계시네요!
        </p>
        <NicknameUpdateButton onClick={nicknameUpdateModal.openModal}>
          닉네임 수정
        </NicknameUpdateButton>
      </SummaryWrapper>
      <BestReviewWrapper>
        {reviewData !== undefined && reviewData.length > 0 ? (
          <ReviewCard
            title={reviewData[0].title}
            author={reviewData[0].nickname}
            likeCount={reviewData[0].heartCnt}
            score={reviewData[0].overallRatings}
            uuid={reviewData[0].perfumeUuid}
          />
        ) : (
          <p>작성된 베스트 리뷰가 없습니다!</p>
        )}
      </BestReviewWrapper>
      <ReviewListWrapper>
        {reviewData !== undefined && reviewData.length > 0 ? (
          <>
            <div className="reviews">
              {paginatedReviewData?.map((item) => (
                <Link href={`/review/${item.uuid}`}>
                  <RatedCard
                    brandName={item.perfumeBrandEng}
                    perfumeName={item.perfumeName}
                    score={item.overallRatings}
                    imgSrc={
                      item.photoUrls.length === 0
                        ? "/perfume-default.svg"
                        : item.photoUrls[0]
                    }
                    uuid={item.uuid}
                  />
                </Link>
              ))}
            </div>
            <div className="pagination-container">
              <PaginationBar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={reviewData.length}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </>
        ) : (
          <p>작성된 리뷰가 없습니다!</p>
        )}
      </ReviewListWrapper>
      <Modal
        modalKey={MODAL_KEYS.nicknameUpdate}
        modalContent={<NicknameUpdateModalContent />}
        open={nicknameUpdateModal.isOpen}
      />
    </>
  );
};

export default MyPage;

const SummaryWrapper = styled.div`
  padding: 70px 0 70px 0;
  border-bottom: 1px solid #707070;
  text-align: center;

  & > p {
    text-align: center;
    font-size: 30px;

    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;

const NicknameUpdateButton = styled(Button)`
  width: 156px;
  height: 52px;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid;
  border-radius: 0;
  margin-top: 46px;
`;

const BestReviewWrapper = styled.div`
  border-bottom: 1px solid #707070;

  & > p {
    text-align: center;
    font-size: 18px;
    margin: 3rem 0;
  }
`;

const ReviewListWrapper = styled.div`
  & > p {
    text-align: center;
    font-size: 18px;
    margin-top: 3rem;
  }

  & > .reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin: 74px 0;
  }

  & .pagination-container {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
  }
`;
