import styled from "@emotion/styled";
import PerfumeImage from "@/components/common/PerfumeImage";
import LikeButton from "@/components/common/LikeButton";
import Rating from "@/components/common/Rating";

interface ListCardProps {
  imgSrc?: string;
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
  return (
    <Container>
      <ImageWrapper>
        <PerfumeImage imgSrc={imgSrc} width={280} height={280} />
        <div className="like-button">
          <LikeButton likeCount={likeCount} />
        </div>
      </ImageWrapper>
      <ReviewWrapper>
        <Rating score={score} fontSize="42px" />
        <p className="title">{title}</p>
        <p className="body">{body?.slice(0, 120) + "..."}</p>
        <div className="meta">
          <span>{createdAt}</span>
          <span>by {nickname}</span>
        </div>
      </ReviewWrapper>
    </Container>
  );
};

export default ListCard;

const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 38px 18px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  & > .like-button {
    position: absolute;
    bottom: 10px;
    right: 24px;
  }
`;

const ReviewWrapper = styled.div`
  padding: 8px 0;

  & > .title {
    font-size: 24px;
    font-weight: bold;
    padding: 8px 0;
  }

  & > .body {
    font-size: 18px;
    padding: 8px 0;
  }

  & > .meta {
    padding: 8px 0;
    text-align: right;

    span:first-of-type {
      padding-right: 30px;
      border-right: solid 1px;
    }

    span:last-of-type {
      padding-left: 30px;
    }
  }
`;
