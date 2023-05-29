import { KAKAO_AUTH_URL } from "@/constants/auth";
import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@mui/material";

const LoginModalContent = () => {
  const login = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <Image src="/glims-logo.svg" alt="Glims Logo" width={96} height={54} />
      <p>로그인 후 나만의 향수를 찾아보세요!</p>
      <KakaoLoginButton startIcon="#" onClick={login}>
        카카오로 로그인하기
      </KakaoLoginButton>
    </Container>
  );
};

export default LoginModalContent;

const Container = styled.div`
  padding: 70px 0;
  text-align: center;

  & p {
    font-size: 20px;
    padding: 14px 50px 80px 50px;
  }
`;

const KakaoLoginButton = styled(Button)`
  width: 300px;
  height: 54px;
  background-color: #fee500;
  font-size: 18px;
  color: black;

  & > .MuiButton-startIcon {
    position: absolute;
    left: 1.5rem;
  }
`;
