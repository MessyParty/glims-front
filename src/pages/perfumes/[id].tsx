import { Perfume } from "@/apis/interfaces/perfume.interfece";
import { getPerfume } from "@/apis/perfume";
import PerfumeDetail from "@/components/view/perfume/PerfumeDetail";
import usePerfume from "@/hooks/queries/usePerfume";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

type DetailType = {
  id: string;
  bid: string;
};

const PerfumeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isSuccess } = usePerfume(id as string);

  return (
    <div>
      {isSuccess ? (
        <>
          <PerfumeDetail data={data} />
        </>
      ) : null}
    </div>
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
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
