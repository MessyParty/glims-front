import { getAllReview, getReview } from "@/apis/review";
import ListCard from "@/components/common/ListCard";
import ReviewCard from "@/components/common/ReviewCard";
import SortController from "@/components/common/SortController";
import TitleBox from "@/components/common/TitleBox";
import { useAllReview, useBestReviews } from "@/hooks/queries/useReivew";
import styled from "@emotion/styled";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";

const ReviewPage = () => {
  const [order, setOrder] = useState<"DATE" | "HEARTS_COUNT">("DATE");
  const { data, isSuccess } = useAllReview({ limit: 5, orderStandard: order });
  const { data: bestData, isSuccess: isSuccessBest } = useBestReviews(3);

  return (
    <Container>
      <TitleBox title={"REVIEW"} subtitle={"BEST AND ALL"} />
      {isSuccessBest &&
        bestData?.map((item) => (
          <Link href={`/review/${item.uuid}`} key={item.uuid}>
            <ReviewCard
              title={item.title}
              author={item.nickname}
              score={item.overallRatings}
              likeCount={item.heartCnt}
              uuid={item.uuid}
              description={item.body}
              imgSrc={item.photoUrls}
            />
          </Link>
        ))}
      <div className="sort-container">
        <SortController orderCallback={setOrder} />
        <button>+ 내 리뷰 남기기</button>
      </div>
      {isSuccess &&
        data?.map((item) => (
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
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["review", "all", 0, 5, "DATE", "DESC"],
      queryFn: () =>
        getAllReview({
          limit: 10,
          orderStandard: "DATE",
          sortType: "DESC",
          offset: 0,
        }),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ReviewPage;

const Container = styled.div`
  padding-bottom: 5rem;
  & .sort-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #000;
  }
`;
