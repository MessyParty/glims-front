import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import { getLoginTokens } from "@/apis/auth";
import { setCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { useSetRecoilState } from "recoil";
import { loginState } from "@/recoil/login";

const Oauth = () => {
  const router = useRouter();
  const setLoginState = useSetRecoilState(loginState);
  const { code } = router.query as { code: string };

  const login = async (code: string) => {
    try {
      const response = await getLoginTokens(code);
      setCookie(ACCESS_TOKEN_COOKIE, response.accessToken, {
        path: "/",
        expires: new Date(response.accessTokenExpireTime),
      });
      setCookie(REFRESH_TOKEN_COOKIE, response.refreshToken, {
        path: "/",
        expires: new Date(response.refreshTokenExpireTime),
      });
      setLoginState(true);
      await router.replace("/");
    } catch (e) {
      alert("로그인에 실패했습니다.");
      await router.replace("/");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      login(code);
    }
    return;
  }, [router.isReady]);

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
