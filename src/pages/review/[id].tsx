import React from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getReview } from "@/apis/review";
import ReviewDetail from "@/components/view/review/ReveiwDetail";
import { useReview } from "@/hooks/queries/useReivew";

const ReviewDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isSuccess } = useReview(id as string);

  return (
    <>
      {data && isSuccess ? (
        <ReviewDetail
          title={data.title}
          author={data.nickname}
          perfumeBrand={data.perfumeBrandEng}
          perfumeName={data.perfumeName}
          createAt={data.createdAt}
          description={data.body}
          longevityRatings={data.longevityRatings}
          sillageRatings={data.sillageRatings}
          score={data.overallRatings}
          photoUrl={data.photoUrls}
          id={data.uuid}
          overallRatings={data.overallRatings}
          scentRatings={data.scentRatings}
        />
      ) : (
        <p>데이터가 없습니다</p>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["review", id],
      queryFn: () => getReview(id),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default ReviewDetailPage;
