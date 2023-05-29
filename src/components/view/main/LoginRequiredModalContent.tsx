import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@mui/material";

const LoginRequiredModalContent = () => {
  return (
    <Container>
      <Image src="/glims-logo.svg" alt="Glims Logo" width={96} height={54} />
      <p className="login-required-text">로그인이 필요한 기능입니다.</p>
      <p className="login-ask-text">로그인 하시겠습니까?</p>
      <ConfirmButton>확인</ConfirmButton>
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
`;

const ConfirmButton = styled(Button)`
  width: 168px;
  height: 54px;
  font-size: 18px;
  font-weight: 100;
  color: white;
  background-color: black;
  border-radius: 0;
`;
