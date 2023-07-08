import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useModal from "@/hooks/useModal";
import QuoteLeft from "@/components/common/CustomIcon/QuoteLeft";
import QuoteRight from "@/components/common/CustomIcon/QuoteRight";
import ReviewDetailRating from "./ReviewDetailRating";
import PerfumeImage from "@/components/common/PerfumeImage";
import { useDeleteReview, useReview } from "@/hooks/queries/useReivew";
import { Review } from "@/apis/interfaces/review.interface";
import Modal from "@/components/common/Modal";
import ReviewModal from "./ReveiwModal";

interface ReviewDetailProps {
  title: string;
  author: string;
  score: number;
  longevityRatings: number;
  scentRatings: number;
  sillageRatings: number;
  overallRatings: number;
  description?: string;
  photoUrl?: string[];
  perfumeName: string;
  perfumeBrand: string;
  createAt: string;
  id: string;
}

const ReviewDetail = ({
  title,
  author,
  score,
  scentRatings,
  sillageRatings,
  longevityRatings,
  overallRatings,
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
        <Button variant="contained" onClick={moveToBack}>
          목록
        </Button>
      </ListButton>
    </>
  );
};

export default ReviewDetail;

const ReviewTopBox = styled.div`
  text-align: center;
  margin: 24px 0;
  & .perfume-text {
    font-size: 1.875rem;
  }
  & .brand-text {
    font-size: 1.4375rem;
  }
`;

const ReviewTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.0625rem solid #000;
  border-bottom: 0.0625rem solid #000;
  padding: 16px 0;

  .review-title-text {
    font-size: 1.25rem;
  }

  & .review-info {
    display: flex;
    align-items: center;
    font-size: 1.125rem;

    & p:nth-of-type(1) {
      margin-right: 48px;
      position: relative;

      &::after {
        display: block;
        content: "";
        height: 1.125rem;
        border-right: 0.0625rem solid #000;
        position: absolute;
        top: 50%;
        right: -1.5625rem;
        transform: translateY(-50%);
      }
    }
  }
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;

  .quote-title {
    font-size: 1.75rem;
    margin: 0 0.75rem;
    padding-top: 1.25rem;
  }

  & > svg {
    min-width: 2.5rem;
    min-height: 2.5rem;
  }
`;

const ReviewDescription = styled.div`
  width: 1000px;
  border-top: 0.0625rem solid #000;
  padding: 1.7rem 0;
  margin: 3rem auto;
  font-size: 1.25rem;
  font-weight: lighter;
`;

const ListButton = styled.div`
  text-align: center;
  margin: 16px 0;
  button {
    background-color: #000;
    color: #fff;
    border-radius: 0;
    font-size: 1.0625rem;
    padding: 0.625rem 2.5rem;
    margin: 0 16px;
  }
`;

const Container = styled.div`
  border-bottom: 0.0625rem solid #000;
  padding: 16px 0 48px;
  .img-box {
    display: flex;
    justify-content: center;
    margin: 1.8rem 0;
  }
  & .button-box {
    text-align: center;

    button {
      border-radius: 0;
      font-size: 1.0625rem;
      padding: 0.625rem 2.5rem;
      margin: 0 16px;
    }
  }
`;
