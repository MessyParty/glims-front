import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getPerfume } from "@/apis/perfume";
import { getBestReviewByPerfume, getPerfumeReview } from "@/apis/review";
import ListCard from "@/components/common/ListCard";
import Modal from "@/components/common/Modal";
import ReviewCard from "@/components/common/ReviewCard";
import PerfumeDetail from "@/components/view/perfume/PerfumeDetail";
import ReviewModal from "@/components/view/review/ReveiwModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import usePerfume from "@/hooks/queries/usePerfume";
import {
  useBestPerfumeReview,
  usePerfumeReviews,
} from "@/hooks/queries/useReivew";
import useModal from "@/hooks/useModal";
import styled from "@emotion/styled";
import PaginationBar from "@/components/common/PaginationBar";
import SelectBox from "@/components/common/SelectBox";

type DetailType = {
  id: string;
  bid: string;
};

type SelectOptionValue = "DATE" | "HEARTS_COUNT";
const options: { value: SelectOptionValue; label: string }[] = [
  { value: "DATE", label: "날짜순" },
  { value: "HEARTS_COUNT", label: "추천순" },
];

const PerfumeDetailPage = () => {
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionValue>("HEARTS_COUNT");
  const [currentValue, setCurrentValue] =
    useState<SelectOptionValue>("HEARTS_COUNT");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const router = useRouter();
  const { id } = router.query;
  const { data, isSuccess } = usePerfume(id as string);
  const { data: bestReviewData, isSuccess: isSuccessBestReview } =
    useBestPerfumeReview(id as string);
  const { data: reviewData, isSuccess: isSuccessReview } = usePerfumeReviews(
    id as string,
  );
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedReviewData = reviewData?.slice(startIdx, endIdx);

  const reviewModal = useModal(MODAL_KEYS.review);

  const handleOptionChange = (option: SelectOptionValue) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      {isSuccess && <PerfumeDetail data={data} />}
      <h1>BEST REVIEW</h1>
      {isSuccessBestReview && bestReviewData.length > 0 ? (
        <Link
          href={`/review/${bestReviewData[0].uuid}`}
          key={bestReviewData[0].uuid}
        >
          <ReviewCard
            title={bestReviewData[0].title}
            author={bestReviewData[0].nickname}
            description={bestReviewData[0].body}
            score={bestReviewData[0].overallRatings}
            likeCount={bestReviewData[0].heartCnt}
            uuid={bestReviewData[0].uuid}
          />
        </Link>
      ) : (
        <p className="no-review-text">
          베스트 리뷰가 없습니다. 리뷰를 남겨주세요!
        </p>
      )}
      <button
        type="button"
        onClick={reviewModal.openModal}
        className="review-button"
      >
        리뷰 남기기
      </button>
      {isSuccess && (
        <Modal
          modalKey={MODAL_KEYS.review}
          modalContent={
            <ReviewModal
              brandName={data.brandName}
              perfumeName={data.perfumeName}
              perfumeUuid={data.uuid}
            />
          }
          open={reviewModal.isOpen}
        />
      )}

      {isSuccessReview && reviewData.length > 0 ? (
        <React.Fragment>
          <div className="sort-container">
            <SelectBox
              onChange={handleOptionChange}
              options={options}
              currentValue={currentValue}
              setCurrentValue={setCurrentValue}
            />
          </div>
          {paginatedReviewData?.map((item) => (
            <Link href={`/review/${item.uuid}`} key={item.uuid}>
              <ListCard
                likeCount={item.heartCnt}
                title={item.title}
                score={item.overallRatings}
                nickname={item.nickname}
                createdAt={item.createdAt}
                uuid={item.uuid}
                body={item.body}
                imgSrc={item.photoUrls}
              />
            </Link>
          ))}
          <div className="pagination-container">
            <PaginationBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={reviewData.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </React.Fragment>
      ) : (
        <p className="no-review-text">
          아직 리뷰가 없어요! 당신의 경험을 나누어주세요.
        </p>
      )}
    </Container>
  );
};

export default PerfumeDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as DetailType;
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["perfume", id],
      queryFn: () => getPerfume(id),
    }),
    queryClient.prefetchQuery({
      queryKey: ["bestPerfumeReview", id],
      queryFn: () => getBestReviewByPerfume(id),
    }),
    queryClient.prefetchQuery({
      queryKey: ["perfumeReview", id],
      queryFn: () => getPerfumeReview(id),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Container = styled.div`
  & > h1 {
    font-size: 30px;
    font-weight: bold;
  }

  & .sort-container {
    border-bottom: 1px solid #000;
    padding-bottom: 1rem;
  }

  & .review-button {
    background-color: #000;
    color: #fff;
    width: 250px;
    height: 60px;
    font-size: 18px;
    margin: 2rem auto;
  }

  & .no-review-text {
    text-align: center;
    margin: 3rem auto;
    font-size: 18px;
  }

  & .pagination-container {
    display: flex;
    justify-content: center;
    margin: 0.5rem;
  }
`;
