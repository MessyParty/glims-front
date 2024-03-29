import styled from "@emotion/styled";
import { CardContent, CardMedia, Card, CardProps } from "@mui/material";

interface RatedCardProps extends CardProps {
  brandName: string;
  perfumeName: string;
  score: number;
  imgSrc: string;
  uuid?: string;
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
          <CardMedia
            component="img"
            image={imgSrc}
            alt="perfume image"
            style={{ maxHeight: "25rem", objectFit: "contain" }}
          />
        </div>
        <PerfumeBox>
          <div className="info-text">
            <p>{brandName}</p>
            <p>{perfumeName}</p>
          </div>
          <div className="score-text">{score.toFixed(1)}</div>
        </PerfumeBox>
      </Wrapper>
    </Container>
  );
};

export default RatedCard;

const Container = styled(Card)`
  max-width: 792px;
  min-width: 384px;
  height: 540px;
  border-radius: 0;
  border: 1px solid #000;
`;

const Wrapper = styled(CardContent)`
  padding-top: 1rem;
  & > a {
    height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & > .perfume-img img {
    width: 100%;
    height: 4855px;
    object-fit: contain;
  }
`;

const PerfumeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  margin: 2rem 1.5rem 0;
  & .info-text {
    line-height: 1.7;
  }
  & .perfume-info {
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
