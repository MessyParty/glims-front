import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import useSearch from "@/hooks/queries/useSearch";
import RatedCard from "@/components/common/RatedCard";
import { getSearch } from "@/apis/search";
import styled from "@emotion/styled";
import { useState } from "react";
import TitleBox from "@/components/common/TitleBox";
import SelectBox from "@/components/common/SelectBox";
import Link from "next/link";

type SelectOptionValue = "DATE" | "HEARTS_COUNT";
const options: { value: SelectOptionValue; label: string }[] = [
  { value: "DATE", label: "날짜순" },
  { value: "HEARTS_COUNT", label: "추천순" },
];

const Search = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionValue>("HEARTS_COUNT");
  const [currentValue, setCurrentValue] =
    useState<SelectOptionValue>("HEARTS_COUNT");

  const { brand, perfume, notes } = router.query as {
    brand: string;
    perfume: string;
    notes: string;
  };

  const { data: results, isLoading } = useSearch(
    brand ? "brand" : perfume ? "perfume" : "notes",
    brand || perfume || notes,
  );

  const handleOptionChange = (option: SelectOptionValue) => {
    setSelectedOption(option);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (results && results.length > 0) {
    return (
      <Container>
        <TitleBox
          title={brand || perfume || notes}
          subtitle={`검색 결과 총 ${results.length} 건`}
        />
        <div className="sort-container">
          <SelectBox
            onChange={handleOptionChange}
            options={options}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </div>
        <div className="perfume-container">
          {results.map((result) => (
            <Link key={result.uuid} href={`/perfumes/${result.uuid}`}>
              <RatedCard
                brandName={result.brandName}
                perfumeName={result.perfumeName}
                imgSrc={result.photos[0].url}
                score={result.overallRatings}
                uuid={result.uuid}
              />
            </Link>
          ))}
        </div>
      </Container>
    );
  }

  return <h1>검색 결과가 없습니다.</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brand, perfume, notes } = context.query;
  const option = brand ? "brand" : perfume ? "perfume" : "notes";
  const keyword = brand || perfume || notes;
  const results = await getSearch(option, keyword as string);
  return {
    props: { results },
  };
};

export default Search;

const Container = styled.div`
  width: 100%;
  & > .css-7vhqgf {
    margin-bottom: 2rem;
  }
  & .sort-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
  }

  & .perfume-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;
