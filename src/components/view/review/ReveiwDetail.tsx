import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { CardMedia, CardProps } from "@mui/material";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useModal from "@/hooks/useModal";
import QuoteLeft from "@/components/common/CustomIcon/QuoteLeft";
import QuoteRight from "@/components/common/CustomIcon/QuoteRight";
import Rating from "@/components/common/Rating";
import ReviewDetailRating from "./ReviewDetailRating";
import PerfumeImage from "@/components/common/PerfumeImage";
import { useDeleteReview, useReview } from "@/hooks/queries/useReivew";
import { Review } from "@/apis/interfaces/review.interface";
import Modal from "@/components/common/Modal";
import ReviewModal from "./ReveiwModal";

interface ReviewDetailProps extends CardProps {
  title: string;
  author: string;
  score: number;
  longevityRatings: number;
  sillageRatings: number;
  overallRatings: number;
  scentRatings: number;
  description?: string;
  photoUrl?: string[];
  perfumeName: string;
  perfumeBrand: string;
  createAt: string;
  id: string;
}

export const ReviewDetail = ({
  title,
  author,
  score,
  sillageRatings,
  longevityRatings,
  overallRatings,
  scentRatings,
  description,
  photoUrl,
  perfumeName,
  perfumeBrand,
  createAt,
  id,
  ...props
}: ReviewDetailProps) => {
  const [reviewData, setReviewData] = useState<Review>({
    perfumeBrandEng: "",
    body: "",
    createdAt: "",
    heartCnt: 0,
    longevityRatings: 0,
    nickname: "",
    overallRatings: 0,
    perfumeBrand: "",
    perfumeName: "",
    photoUrls: [],
    sillageRatings: 0,
    title: "",
    uuid: "",
    scentRatings: 0,
  });

  const router = useRouter();
  const reviewModal = useModal(MODAL_KEYS.review);

  const { data, isSuccess } = useReview(id as string);
  const { mutate } = useDeleteReview();

  const handleDelete = (id: string) => {
    alert("리뷰를 삭제하시겠습니까?");
    mutate(id);
    router.back();
  };

  const handleUpdateReview = (data: React.SetStateAction<Review>) => {
    reviewModal.openModal();
    setReviewData(data);
  };

  const moveToBack = () => {
    router.back();
  };

  const date = new Date(createAt);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

  return (
    <>
      {isSuccess && (
        <Container {...props}>
          <ReviewTopBox>
            <p className="perfume-text">{perfumeName}</p>
            <p className="brand-text">{perfumeBrand}</p>
          </ReviewTopBox>
          <ReviewTitleBox>
            <p className="review-title-text">{title}</p>
            <div className="review-info">
              <p className="date">{formattedDate}</p>
              <p className="author">by {author}</p>
            </div>
          </ReviewTitleBox>
          <Quote>
            <QuoteLeft />
            <p className="quote-title">{title}</p>
            <QuoteRight />
          </Quote>
          <div className="img-box">
            <PerfumeImage width={500} height={500} imgSrc={photoUrl} />
          </div>
          <ReviewDetailRating
            overallRatings={overallRatings}
            scentRatings={scentRatings}
            longevityRatings={longevityRatings}
            sillageRatings={sillageRatings}
          />
          <ReviewDescription>
            <p>{description}</p>
          </ReviewDescription>
          <div className="button-box">
            <Button variant="outlined" onClick={() => handleUpdateReview(data)}>
              수정하기
            </Button>
            <Modal
              modalKey={MODAL_KEYS.review}
              open={reviewModal.isOpen}
              modalContent={
                <ReviewModal
                  brandName={data.perfumeBrand}
                  perfumeUuid={data.uuid}
                  perfumeName={data.perfumeName}
                  reviewData={reviewData}
                />
              }
              fullWidth
              maxWidth="lg"
            />
            <Button variant="outlined" onClick={() => handleDelete(id)}>
              삭제하기
            </Button>
          </div>
        </Container>
      )}
      <ListButton>
        <Button
          className="list-button"
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 0,
            fontSize: "17px",
            padding: "10px 40px",
            margin: "0 1rem",
          }}
          onClick={moveToBack}
        >
          목록
        </Button>
      </ListButton>
    </>
  );
};

export default ReviewDetail;
const ReviewTopBox = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;

const ReviewTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 1rem 0;

  & .review-info {
    display: flex;
    align-items: center;

    & p:nth-of-type(1) {
      margin-right: 3rem;
      position: relative;

      &::after {
        display: block;
        content: "";
        height: 18px;
        border-right: 1px solid #000;
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%);
      }
    }
  }
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & > svg {
    min-width: 40px;
    min-height: 40px;
  }
`;

const ReviewDescription = styled.div`
  border-top: 1px solid #000;
  padding: 1rem 0;
  margin: 1.5rem 0;
`;

const ListButton = styled.div`
  text-align: center;
  margin: 1rem 0;
`;
const Container = styled.div`
  border-bottom: 1px solid #000;
  padding: 1rem 0 3rem;

  & .button-box {
    text-align: center;
  }
`;
