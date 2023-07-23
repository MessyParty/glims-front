import styled from "@emotion/styled";
import useProfile from "@/hooks/queries/useProfile";
import useMyReviews from "@/hooks/queries/useMyReviews";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/login";
import { useBestReviews } from "@/hooks/queries/useReivew";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import Modal from "@/components/common/Modal";
import React from "react";
import SearchModal from "@/components/view/search/SearchModal";
import { useRandomPerfume } from "@/hooks/queries/usePerfume";
import LeftSideBox from "@/components/view/main/LeftSideBox";
import RightSideBox from "@/components/view/main/RightSideBox";

const Main = () => {
  const searchModal = useModal(MODAL_KEYS.search);

  return (
    <>
      <Container>
        <LeftSideBox />
        <RightSideBox />
      </Container>
      <Modal
        modalKey={MODAL_KEYS.search}
        modalContent={<SearchModal />}
        open={searchModal.isOpen}
      />
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 100px 0;
`;
