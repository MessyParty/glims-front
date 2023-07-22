import styled from "@emotion/styled";
import Image from "next/image";
import { MODAL_KEYS } from "@/constants/modalKeys";
import LoginModalContent from "./LoginModalContent";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";

const LoginRequiredModalContent = () => {
  const loginModal = useModal(MODAL_KEYS.login);

  const loginHandler = () => {
    loginModal.openModal();
  };

  return (
    <Container>
      <Image src="/glims-logo.svg" alt="Glims Logo" width={96} height={54} />
      <p className="login-required-text">로그인이 필요한 기능입니다.</p>
      <p className="login-ask-text">로그인 하시겠습니까?</p>
      <button onClick={loginHandler}>확인</button>
      <Modal
        modalKey={MODAL_KEYS.login}
        modalContent={<LoginModalContent />}
        open={loginModal.isOpen}
      />
    </Container>
  );
};

export default LoginRequiredModalContent;

const Container = styled.div`
  padding: 70px 78px;
  text-align: center;

  & p {
    font-size: 20px;
  }

  & > .login-required-text {
    padding: 34px 0 5px 0;
  }

  & > .login-ask-text {
    padding: 5px 0 42px 0;
  }

  & > button {
    width: 168px;
    height: 54px;
    font-size: 18px;
    font-weight: 100;
    color: white;
    background-color: black;
    border-radius: 0;
    margin: 0 auto;
  }
`;
