import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import useSearch from "@/hooks/queries/useSearch";
import RatedCard from "@/components/common/RatedCard";
import { getSearch } from "@/apis/search";

const Search = () => {
  const router = useRouter();
  const { brand, perfume, notes } = router.query as {
    brand: string;
    perfume: string;
    notes: string;
  };

  const { data: results, isLoading } = useSearch(
    brand ? "brand" : perfume ? "perfume" : "notes",
    brand || perfume || notes,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (results && results.length > 0) {
    return (
      <>
        {results.map((result) => (
          <RatedCard
            key={result.id}
            brandName={result.brandName}
            perfumeName={result.perfumeName}
            imgSrc={result.imgSrc}
            score={result.score}
            uuid={result.uuid}
          />
        ))}
      </>
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
