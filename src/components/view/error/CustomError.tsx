import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image from "next/image";

interface CustomErrorProps {
  code: string;
  message: string;
}

const CustomError = ({ code, message }: CustomErrorProps) => {
  const router = useRouter();

  const moveToBack = () => {
    router.back();
  };

  return (
    <Container>
      <LogoWrapper>
        <Image src="/glims-logo.svg" alt="Glims Logo" width={250} height={74} />
      </LogoWrapper>
      <InfoWrapper>
        <span>Error {code}</span>
        <p>{message}</p>
        <BackButton onClick={moveToBack}>돌아가기</BackButton>
      </InfoWrapper>
    </Container>
  );
};

export default CustomError;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & span {
    font-size: 48px;
    font-weight: bold;
  }

  & p {
    font-size: 22px;
  }
`;

const LogoWrapper = styled.div`
  padding: 90px 90px 90px 0;
  border-right: 1px solid;
`;

const InfoWrapper = styled.div`
  padding-left: 88px;
  text-align: left;
`;

const BackButton = styled.button`
  margin-top: 67px;
  color: white;
  background-color: black;
  padding: 19px 45px;
`;
