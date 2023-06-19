import styled from "@emotion/styled";
import Link from "next/link";

interface BrandListProps {
  filteredBrands: {
    brandId: number;
    brandNameKor: string;
    brandNameEng: string;
  }[];
}

export default function BrandList({ filteredBrands }: BrandListProps) {
  return (
    <Container>
      {filteredBrands?.map(({ brandId, brandNameKor, brandNameEng }) => (
        <div key={brandId}>
          <Link
            href={`/perfumes?brand=${encodeURIComponent(brandNameEng)}`}
            legacyBehavior
          >
            <a>
              <p className="perfume-brand">{`${brandNameEng}`.toUpperCase()}</p>
              <p className="perfume-brand">{brandNameKor}</p>
            </a>
          </Link>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;

  & div {
    margin: 1rem 0;
    & .perfume-brand {
      font-size: 20px;
      padding: 10px 0;
    }
  }
`;
