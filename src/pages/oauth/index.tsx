import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";

const Oauth = () => {
  const router = useRouter();
  const { code } = router.query as { code: string };

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  // TODO useLoginQuery(code ?? "");

  return (
    <Container>
      <Box position="relative" display="inline-flex">
        <BackgroundCircularProgress
          variant="determinate"
          size={90}
          thickness={6}
          value={100}
        />
        <ForegroundCircularProgress
          variant="indeterminate"
          size={90}
          thickness={6}
        />
      </Box>
      <p className="login-info-text">로그인 중입니다.</p>
      <p className="waiting-text">잠시만 기다려주세요.</p>
    </Container>
  );
};

export default Oauth;

const Container = styled.div`
  padding: 100px 0;
  text-align: center;

  & > .login-info-text {
    font-size: 28px;
    font-weight: bold;
    padding-top: 46px;
  }

  & > .waiting-text {
    font-size: 20px;
    padding-top: 8px;
  }
`;

const BackgroundCircularProgress = styled(CircularProgress)`
  color: #e0e0e0;
  position: absolute;
`;

const ForegroundCircularProgress = styled(CircularProgress)`
  position: relative;
`;
