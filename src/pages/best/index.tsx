import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getBestPerfume } from "@/apis/perfume";
import RatedCard from "@/components/common/RatedCard";
import useBestPerfume from "@/hooks/queries/useBestPerfume";
import TitleBox from "@/components/common/TitleBox";
import styled from "@emotion/styled";
import Link from "next/link";
import DEFAULT_IMG from "@root/public/perfume-default.svg";

export default function BestPage() {
  const { data: bestData } = useBestPerfume(7);

  return (
    <div>
      <TitleBox title="BEST" subtitle="PERFUMES" />
      <BrandBox>
        {bestData
          ? bestData.map(
              ({ brandName, perfumeName, overallRatings, photos, uuid }) => (
                <Link key={uuid} href={`/perfumes/${uuid}`}>
                  <RatedCard
                    brandName={brandName}
                    perfumeName={perfumeName}
                    score={overallRatings}
                    imgSrc={photos[0].url ?? DEFAULT_IMG}
                    uuid={uuid}
                  />
                </Link>
              ),
            )
          : null}
      </BrandBox>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["perfume", "best"],
      queryFn: () => getBestPerfume(7),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  & a:first-of-type {
    grid-column: span 2;
  }
  & a:last-child {
    grid-column: span 2;
  }
  margin-bottom: 5rem;
`;
