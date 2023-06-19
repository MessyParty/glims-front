import { getAllReview, getReview } from "@/apis/review";
import useAllReview from "@/hooks/queries/useAllReview";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";

const ReviewPage = () => {
  const [order, setOrder] = useState<"DATE" | "HEARTS_COUNT">("DATE");
  const { data, isSuccess } = useAllReview({ limit: 5, orderStandard: order });
  console.log(data);
  return (
    <div>
      {isSuccess &&
        data?.content.map((item) => (
          <Link href={`/review/${item.uuid}`}>{item.title}</Link>
        ))}
    </div>
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
