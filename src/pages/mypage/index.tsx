import useProfile from "@/hooks/queries/useProfile";
import useMyReviews from "@/hooks/queries/useMyReviews";
import ReviewCard from "@/components/common/ReviewCard";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import Modal from "@/components/common/Modal";
import NicknameUpdateModalContent from "@/components/view/mypage/NicknameUpdateModalContent";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MyPage = () => {
  const { data: profileData } = useProfile();
  const { data: reviewData } = useMyReviews({});
  const nicknameUpdateModal = useModal(MODAL_KEYS.nicknameUpdate);

  return (
    <>
      <SummaryWrapper>
        <p>
          <b>{profileData?.nickname}님</b>은
        </p>
        <p>
          <b>{profileData?.reviewCnt}개</b>의 향수를 수집하고 계시네요!
        </p>
        <NicknameUpdateButton onClick={nicknameUpdateModal.openModal}>
          닉네임 수정
        </NicknameUpdateButton>
      </SummaryWrapper>

      <BestReviewWrapper>
        {false ? (
          <ReviewCard
            title={"처음 분사했을 때의 느낌을 잊지 못해요."}
            author={"glims007"}
            likeCount={16}
            score={3.5}
            uuid={"1234"}
          />
        ) : (
          <p>작성된 리뷰가 없습니다!</p>
        )}
      </BestReviewWrapper>
      <ReviewListWrapper></ReviewListWrapper>
      <Modal
        modalKey={MODAL_KEYS.nicknameUpdate}
        modalContent={<NicknameUpdateModalContent />}
        open={nicknameUpdateModal.isOpen}
      />
    </>
  );
};

export default MyPage;

const SummaryWrapper = styled.div`
  padding: 70px 0 70px 0;
  border-bottom: 1px solid #707070;
  text-align: center;

  p {
    text-align: center;
    font-size: 30px;

    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;

const NicknameUpdateButton = styled(Button)`
  width: 156px;
  height: 52px;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid;
  border-radius: 0;
  margin-top: 46px;
`;

const BestReviewWrapper = styled.div`
  border-bottom: 1px solid #707070;
`;

const ReviewListWrapper = styled.div``;
