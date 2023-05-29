import { ERROR_PAGE_REGEX } from "@/constants/regex";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;
  return (
    <Container>
      <p>Copyright 2023 by glims. All rights reserved.</p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  text-align: center;
  border-top: 1px solid #000;

  & p {
    padding: 1.5rem 0;
  }
`;
