import React from "react";
import styled from "@emotion/styled";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import Modal from "@/components/common/Modal";
import SearchModal from "@/components/view/search/SearchModal";
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
