import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import styled from "@emotion/styled";
import { ERROR_PAGE_REGEX } from "@/constants/regex";
import { useRecoilCallback, useRecoilState } from "recoil";
import { loginState, loginStateSelector } from "@/recoil/login";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { logout } from "@/apis/auth";
import { removeCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/constants/auth";
import { MODAL_KEYS } from "@/constants/modalKeys";
import LoginModalContent from "@/components/view/main/LoginModalContent";
import Modal from "@/components/common/Modal";
import useModal from "@/hooks/useModal";
import SearchModal from "@/components/view/search/SearchModal";

const NavBar = () => {
  const router = useRouter();
  const loginModal = useModal(MODAL_KEYS.login);
  const searchModal = useModal(MODAL_KEYS.search);
  const [isLogined, setLoginState] = useRecoilState(loginState);

  const moveToMyPage = () => {
    router.push("/mypage");
  };

  const initializeLoginState = useRecoilCallback(({ snapshot }) => async () => {
    const loggedIn = await snapshot.getPromise(loginStateSelector);
    setLoginState(loggedIn);
  });

  useEffect(() => {
    initializeLoginState();
  }, []);

  const logoutUser = async () => {
    try {
      await logout();
      removeCookie(ACCESS_TOKEN_COOKIE);
      removeCookie(REFRESH_TOKEN_COOKIE);
      setLoginState(false);
      await router.replace("/");
    } catch (e) {
      alert("로그아웃에 실패했습니다.");
      await router.push("/");
    }
  };

  const loginHandler = () => {
    loginModal.openModal();
  };
  const searchHandler = () => {
    searchModal.openModal();
  };

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;
  return (
    <>
      <LogoWrapper>
        <Link href="/">
          <Image
            src="/glims-logo.svg"
            alt="glims-logo"
            width="155"
            height="88"
            priority
          />
        </Link>
      </LogoWrapper>
      <NavContainer>
        <Nav>
          <Link href="/about">About</Link>
          <Link href="/best">Best</Link>
          <Link href="/brand">Brand</Link>
          <Link href="/review">Review</Link>
        </Nav>
        <Utils>
          <IconButton
            color="primary"
            aria-label="search"
            onClick={searchHandler}
          >
            <SearchIcon />
          </IconButton>
          {isLogined ? (
            <>
              <IconButton
                color="primary"
                aria-label="user"
                onClick={moveToMyPage}
              >
                <PersonOutlineIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="logout"
                onClick={logoutUser}
              >
                <LogoutOutlined />
              </IconButton>
            </>
          ) : (
            <IconButton
              color="primary"
              aria-label="login"
              onClick={loginHandler}
            >
              <LoginOutlined />
            </IconButton>
          )}
        </Utils>
      </NavContainer>
      <Modal
        modalKey={MODAL_KEYS.login}
        modalContent={<LoginModalContent />}
        open={loginModal.isOpen}
      />
      <Modal
        modalKey={MODAL_KEYS.search}
        modalContent={<SearchModal />}
        open={searchModal.isOpen}
      />
    </>
  );
};

const LogoWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto;

  & a {
    margin: 0 1rem;
  }
`;
const Utils = styled.div`
  & button {
    margin: 0 10px;
  }
`;

export default NavBar;
