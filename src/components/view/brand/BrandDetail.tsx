import React from "react";
import styled from "@emotion/styled";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useHandleScroll from "@/hooks/useHandleScroll";
import useObserver from "@/hooks/useObserver";
import TitleBox from "@/components/common/TitleBox";
import RatedCard from "@/components/common/RatedCard";
import { Perfume } from "@/apis/interfaces/perfume.interfece";

const BrandDetail = ({ brandName }: { brandName: string }): JSX.Element => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteScroll(brandName);

  const brandNameKor = data?.pages[0]?.content[0].brandNameKor;

  useHandleScroll({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const observerElement = useObserver(fetchNextPage, hasNextPage);

  return (
    <>
      <TitleBox title={`${brandName}`.toUpperCase()} subtitle={brandNameKor} />
      {isSuccess &&
        data?.pages.map((page, i) => (
          <BrandBox key={i}>
            {page.content?.map((item: Perfume, index: number) => (
              <React.Fragment key={index}>
                <RatedCard
                  brandName={item.brandName}
                  perfumeName={item.perfumeName}
                  score={item.overallRatings}
                  imgSrc={item.photos[0].url}
                  uuid={item.uuid}
                />
              </React.Fragment>
            ))}
          </BrandBox>
        ))}
      <div className="loader" ref={observerElement}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : ""}
      </div>
    </>
  );
};

export default BrandDetail;

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;
