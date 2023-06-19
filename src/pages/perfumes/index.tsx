import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { searchPerfumes } from "@/apis/perfume";
import BrandDetail from "@/components/view/brand/BrandDetail";

const DetailPage = () => {
  const router = useRouter();
  const { brand } = router.query as { brand: string };

  return <BrandDetail brandName={brand} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brand } = context.query as { brand: string };

  const queryClient = new QueryClient();

  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["searchPerfumes", brand],
      queryFn: () => searchPerfumes(brand),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailPage;
