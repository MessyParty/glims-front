import React, { useEffect, useState } from "react";
import ReviewRating from "./ReviewRating";
import {
  useCreateReview,
  useUpdateReview,
  useCreateReviewPhoto,
} from "@/hooks/queries/useReivew";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import styled from "@emotion/styled";
import ImageInput from "./ImageInput";

interface ReviewModalProps {
  brandName: string;
  perfumeName: string;
  perfumeUuid: string;
  reviewData?: {
    body: string;
    longevityRatings: number;
    overallRatings: number;
    sillageRatings: number;
    scentRatings: number;
    title: string;
    perfumeUuid?: string;
    uuid: string;
  };
}

const ReviewModal = ({
  brandName,
  perfumeName,
  perfumeUuid,
  reviewData,
}: ReviewModalProps) => {
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [rating, setRating] = useState({
    scentRatings: 0,
    longevityRatings: 0,
    sillageRatings: 0,
    overallRatings: 0,
  });
  const [selectedFile, setSelectedFile] = useState<File | string>("");

  const reviewId = reviewData?.uuid;
  const reivewError =
    !rating.longevityRatings ||
    !rating.overallRatings ||
    !rating.scentRatings ||
    !rating.sillageRatings;

  const { closeModal } = useModal(MODAL_KEYS.review);
  const { mutateAsync } = useCreateReview();
  const { mutate: updateReviewMutation } = useUpdateReview(reviewId as string);
  const { mutateAsync: mutatePhoto } = useCreateReviewPhoto();

  useEffect(() => {
    if (reviewData) {
      const {
        title: prevTitle,
        body: prevBody,
        longevityRatings: prevLongevityRatings,
        overallRatings: preOverallRatings,
        scentRatings: preScentRatings,
        sillageRatings: preSillageRatings,
      } = reviewData;

      const prevScore = {
        scentRatings: preScentRatings,
        longevityRatings: prevLongevityRatings,
        sillageRatings: preSillageRatings,
        overallRatings: preOverallRatings,
      };

      setReview(prevBody || review);
      setTitle(prevTitle || title);
      setRating(prevScore || rating);
    }
  }, []);

  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
    setError(false);
  };

  const handleReviewChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setReview(event.target.value);
    setError(false);
  };

  const handleRatingChange = (name: string, value: number) => {
    setRating((prevRatings) => ({
      ...prevRatings,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (title && review && rating && perfumeUuid) {
      const data = {
        title,
        perfumeUuid,
        body: review,
        longevityRatings: rating.longevityRatings,
        overallRatings: rating.overallRatings,
        scentRatings: rating.scentRatings,
        sillageRatings: rating.sillageRatings,
        photoUrls: selectedFile,
      };

      const formData = new FormData();
      formData.append("files", selectedFile);

      if (!reviewId) {
        const result = await mutateAsync({ ...data });
        await mutatePhoto({ id: result.uuid, photo: formData });
      } else {
        updateReviewMutation({ ...data });
      }
      closeModal();
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <div className="perfume-title">
        <p className="perfume-name">{perfumeName}</p>
        <p className="brand-name">{brandName}</p>
      </div>
      <ReviewRating onChange={handleRatingChange} ratings={rating} />
      {error && reivewError && <ErrorText>만족도를 선택해주세요.</ErrorText>}
      <div className="review-title-box content">
        <label>Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="당신의 한줄평을 남겨주세요"
        />
        {error && !title && <ErrorText>제목을 입력해주세요.</ErrorText>}
      </div>
      <div className="reivew-body-box content">
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleReviewChange}
          value={review}
          placeholder="당신의 경험을 자세히 남겨주세요"
        />
        {error && !review && <ErrorText>리뷰를 입력해주세요.</ErrorText>}
      </div>
      <ImageInput setSelectedFile={setSelectedFile} />
      <button type="submit" onClick={handleSubmit}>
        {reviewId ? "수정하기" : "리뷰 남기기"}
      </button>
    </Container>
  );
};

export default ReviewModal;

const Container = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-rows: repeat(6, minmax(10px, auto));
  grid-row-gap: 1rem;
  margin: 0 5rem;

  & .perfume-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;

    .perfume-name {
      font-size: 30px;
      font-weight: bold;
    }

    .brand-name {
      font-size: 23px;
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 835px;
    & label {
      margin-bottom: 22px;
      font-size: 22px;
      font-weight: bold;
    }

    & #title {
      border: none;
      border-bottom: 1px solid #000;
      font-size: 18px;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }

    & textarea {
      border: none;
      resize: none;
      border: 1px solid #000;
      height: 135px;
      font-size: 18px;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  & > button {
    background-color: #000;
    color: #fff;
    width: 250px;
    height: 60px;
    font-size: 18px;
    margin: 0 auto;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1.4rem;
  margin-top: 0.2rem;
`;
