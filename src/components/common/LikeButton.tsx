import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDecreaseLike, useIncreaseLike } from "@/hooks/queries/useHeart";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/login";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import NicknameUpdateModalContent from "@/components/view/mypage/NicknameUpdateModalContent";
import Modal from "@/components/common/Modal";
import LoginRequiredModalContent from "@/components/view/main/LoginRequiredModalContent";

interface LikeButtonProps {
  initialState?: boolean;
  likeCount?: number;
  uuid: string;
}

const LikeButton = ({ initialState, likeCount, uuid }: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(initialState ?? false);
  const { mutate: increaseMutate } = useIncreaseLike();
  const { mutate: decreaseMutate } = useDecreaseLike();
  const isLoggedIn = useRecoilValue(loginState);
  const loginRequiredModal = useModal(MODAL_KEYS.loginRequired);

  const likeHandler = () => {
    if (!isLoggedIn) {
      loginRequiredModal.openModal();
      return;
    }
    setIsClicked((previous) => {
      if (previous) {
        decreaseMutate(uuid);
        return false;
      }
      increaseMutate(uuid);
      return true;
    });
  };

  return (
    <>
      <Container>
        <IconButton color="primary" onClick={likeHandler} disableRipple>
          {isClicked ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
        <LikeCount>{likeCount ?? 25}</LikeCount>
      </Container>
      <Modal
        modalKey={MODAL_KEYS.loginRequired}
        modalContent={<LoginRequiredModalContent />}
        open={loginRequiredModal.isOpen}
      />
    </>
  );
};

export default LikeButton;

const Container = styled.div``;

const LikeCount = styled.div`
  display: inline-block;
  font-size: 18px;
  vertical-align: middle;
  padding-top: 5px;
`;
