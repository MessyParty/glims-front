import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { ERROR_PAGE_REGEX } from "@/constants/regex";
import { useRecoilValue } from "recoil";
import { loginState } from "@/recoil/login";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";

const NavBar = () => {
  const router = useRouter();
  const isLogined = useRecoilValue(loginState);

  const moveToMyPage = () => {
    router.push("/mypage");
  };

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;
  return (
    <>
      <LogoWrapper>
        <Link href="/">
          <Image
            src="./glims-logo.svg"
            alt="glims-logo"
            width="155"
            height="88"
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
          <IconButton color="primary" aria-label="search">
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
              <IconButton color="primary" aria-label="logout">
                <LogoutOutlined />
              </IconButton>
            </>
          ) : (
            <IconButton color="primary" aria-label="login">
              <LoginOutlined />
            </IconButton>
          )}
        </Utils>
      </NavContainer>
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
