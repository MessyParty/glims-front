import styled from "@emotion/styled";
import PerfumeImage from "@/components/common/PerfumeImage";
import LikeButton from "@/components/common/LikeButton";
import Image from "next/image";
import Rating from "@/components/common/Rating";

interface ReviewCardProps {
  title: string;
  author: string;
  score: number;
  description?: string;
  imgSrc?: string;
  likeCount: number;
  uuid: string;
}

const ReviewCard = ({
  title,
  author,
  score,
  description,
  imgSrc,
  likeCount,
  uuid,
}: ReviewCardProps) => {
  return (
    <Container>
      <ContentWrapper>
        <div className="title">
          <div className="quote">
            <Image
              src="/quote-left.svg"
              alt="Quote Left"
              width={38}
              height={36}
            />
            <p>{title}</p>
            <Image
              src="/quote-right.svg"
              alt="Quote Right"
              width={38}
              height={36}
            />
          </div>
          <div className="author">
            <p>by {author}</p>
          </div>
        </div>
        <div className="score">
          <div className="average-score">
            <span>AVERAGE</span>
            <span>SCORE</span>
          </div>
          <Rating score={score} fontSize="68px" />
        </div>
        <div className="description">
          <p>{description?.slice(0, 120) + "..."}</p>
        </div>
      </ContentWrapper>
      <ImageWrapper>
        <PerfumeImage imgSrc={imgSrc} width={500} height={500} />
        <div className="like-button">
          <LikeButton likeCount={likeCount} />
        </div>
      </ImageWrapper>
    </Container>
  );
};

export default ReviewCard;

const Container = styled.div`
  display: flex;
  gap: 46px;
  align-items: center;
`;

const ContentWrapper = styled.div`
  flex: 1;

  & > .title {
    border-bottom: solid 0.5px #707070;
    padding-bottom: 24px;

    & > .quote {
      display: flex;

      p {
        font-size: 28px;
        font-weight: bold;
        padding: 24px 10px;
      }
    }

    & > .author {
      text-align: right;
    }
  }

  & > .score {
    display: flex;
    gap: 22px;
    padding: 24px 0;
    align-items: center;
    border-bottom: solid 0.5px #707070;

    & > .average-score {
      span {
        display: block;
        font-size: 19px;
        line-height: 28px;
      }
    }
  }

  & > .description {
    padding: 24px 0;

    p {
      font-size: 20px;
      line-height: 34px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  & > .like-button {
    position: absolute;
    right: 50px;
    bottom: 20px;
  }
`;
