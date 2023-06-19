import styled from "@emotion/styled";

import useBrand from "@/hooks/queries/useBrand";
import AlphabetList from "@/components/view/brand/AlphabetList";
import BrandList from "@/components/view/brand/BrandList";
import useMoveScroll from "@/hooks/useMoveScroll";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getBrand } from "@/apis/brand";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Brand = () => {
  const { scrollRef, onMoveToElement } = useMoveScroll();
  const { data, isLoading, isError } = useBrand();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  const sortedBrands = data?.sort((a, b) =>
    a.brandNameEng.localeCompare(b.brandNameEng),
  );

  return (
    <>
      <AlphabetList onMoveToElement={onMoveToElement} alphabet={ALPHABET} />
      {Array.from(ALPHABET).map((letter, index) => {
        const filteredBrands = sortedBrands?.filter(
          (brand) => brand.brandNameEng.toUpperCase().indexOf(letter) === 0,
        );
        return (
          <BrandBox key={letter}>
            <BrandListTitle
              id={letter}
              ref={(ref) => (scrollRef.current[index] = ref as HTMLDivElement)}
            >
              {letter}
            </BrandListTitle>
            {filteredBrands?.length === 0 ? (
              <p>{""}</p>
            ) : (
              <BrandList filteredBrands={filteredBrands} />
            )}
          </BrandBox>
        );
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["brand"],
      queryFn: () => getBrand(),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Brand;

const BrandListTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const BrandBox = styled.div`
  margin: 5rem;
`;
