import styled from "@emotion/styled";
import PerfumeImage from "@/components/common/PerfumeImage";
import LikeButton from "@/components/common/LikeButton";
import Rating from "@/components/common/Rating";
import useFormatDate from "@/hooks/useFormatDate";
import Link from "next/link";

interface ListCardProps {
  imgSrc?: string[];
  likeCount: number;
  title: string;
  score: number;
  body?: string;
  nickname: string;
  createdAt: string;
  uuid: string;
}

const ListCard = ({
  imgSrc,
  likeCount,
  title,
  score,
  body,
  nickname,
  createdAt,
  uuid,
}: ListCardProps) => {
  const date = useFormatDate(createdAt);
  return (
    <Container>
      <ImageWrapper>
        <PerfumeImage imgSrc={imgSrc} width={342} height={342} />
        <div className="like-button">
          <LikeButton likeCount={likeCount} uuid={uuid} />
        </div>
      </ImageWrapper>
      <ReviewWrapper>
        <Link href={`/review/${uuid}`}>
          <Rating score={score} fontSize="70px" />
          <p className="title">{title}</p>
          <p className="body">
            {body && body.length > 120 ? body?.slice(0, 120) + "..." : body}
          </p>
          <div className="meta">
            <span>{date}</span>
            <span>by {nickname}</span>
          </div>
        </Link>
      </ReviewWrapper>
    </Container>
  );
};

export default ListCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 342px;
  height: 342px;

  & > .like-button {
    position: absolute;
    bottom: 10px;
    right: 24px;
  }
`;

const ReviewWrapper = styled.div`
  padding: 8px 0;
  width: 100%;
  height: 250px;

  & > a {
    display: grid;
    grid-template-rows: repeat(3, minmax(10px, auto));
    grid-row-gap: 20px;
    & > .title {
      font-size: 24px;
      font-weight: bold;
      padding-left: 1rem;
    }

    & > .body {
      font-size: 18px;
      line-height: 1.5;
      padding-left: 1rem;
    }

    & > .meta {
      text-align: right;

      span:first-of-type {
        padding-right: 30px;
        border-right: solid 1px;
      }

      span:last-of-type {
        padding-left: 30px;
      }
    }
  }
`;
