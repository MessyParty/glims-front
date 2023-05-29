import styled from "@emotion/styled";
import { CardContent, CardMedia, Card, CardProps } from "@mui/material";

interface RatedCardProps extends CardProps {
  brandName: string;
  perfumeName: string;
  score: number;
  imgSrc?: string;
}

const RatedCard = ({
  brandName,
  perfumeName,
  score,
  imgSrc,
}: RatedCardProps) => {
  return (
    <Container>
      <Wrapper>
        <div className="perfume-img">
          <CardMedia component="img" image={imgSrc} alt="perfume image" />
        </div>
        <PerfumeBox>
          <div className="info-text">
            <p>{brandName}</p>
            <p>{perfumeName}</p>
          </div>
          <div className="score-text">{score}</div>
        </PerfumeBox>
      </Wrapper>
    </Container>
  );
};

export default RatedCard;

const Container = styled(Card)`
  width: 409px;
  border-radius: 0;
  border: 1px solid #000;
`;

const Wrapper = styled(CardContent)`
  padding: 0;
  & > .perfume-img img {
    width: 100%;
    height: 100%;
    min-height: 405px;
  }
`;

const PerfumeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  margin: 2rem 1.5rem;

  & .perfume-info {
    &:first-of-type {
      font-size: 21px;
      font-weight: bold;
    }

    &:nth-of-type(2) {
      font-size: 18px;
    }
  }

  & .score-text {
    width: 66px;
    height: 66px;
    background-color: #000;
    text-align: center;
    line-height: 66px;
    color: #fff;
    font-size: 17px;
  }
`;
