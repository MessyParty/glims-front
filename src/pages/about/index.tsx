import styled from "@emotion/styled";
import Image from "next/image";
import { startTransition } from "react";

const About = () => {
  return (
    <Container>
      <LogoWrapper>
        <div className="logo-section">
          <Image
            src="/glims-logo.svg"
            alt="Glims Logo"
            width={154}
            height={88}
          />
        </div>
        <p>잠깐(언뜻) 봄을 뜻하는 `Glimpse`의 축약 형태</p>
      </LogoWrapper>
      <IntroductionWrapper>
        <p>오직 느낌에 기반해 추천하고, 추천받던 지난 날의 향수들.</p>
        <p>
          이제 글림스(glims)가 제공하는 객관적인 정보와 회원들이 직접 경험에
          근거하여 작성한 리뷰를 통해
        </p>
        <p>
          우리가 그 향수를 사랑했던 이유와 그 향수를 사랑해야 할 이유를
          확인해보세요.
        </p>
        <p>
          향수를 선택하는 새롭고 스마트한 구매 여정, 오늘부터 바로
          글림스(glims)에서.
        </p>
      </IntroductionWrapper>
      <ActionWrapper>
        <ActionLeftWrapper>
          <p className="action-title-en">Rate, Curate</p>
          <p className="action-title-ko">객관화되는 나의 향, 나의 취향</p>
        </ActionLeftWrapper>
        <ActionRightWrapper>
          <div className="actions">
            <div>
              <p className="action-text-en">Write</p>
              <p className="action-text-ko">쓰다</p>
            </div>
            <div>
              <p className="action-text-en">Rate</p>
              <p className="action-text-ko">점수를 매기다</p>
            </div>
            <div>
              <p className="action-text-en">Select</p>
              <p className="action-text-ko">선택하다</p>
            </div>
          </div>
          <div className="actions">
            <div>
              <p className="action-text-en">Share</p>
              <p className="action-text-ko">공유하다</p>
            </div>
            <div>
              <p className="action-text-en">Collect</p>
              <p className="action-text-ko">모으다</p>
            </div>
            <div>
              <p className="action-text-en">Communicate</p>
              <p className="action-text-ko">소통하다</p>
            </div>
          </div>
        </ActionRightWrapper>
      </ActionWrapper>
      <Bar />
      <SuggestionWrapper>
        <p>
          나의 소유지만, 동시에 모두가 향유할 수 있는 향수의 독특한 성질에
          글림스(glims)는 주목했습니다.
        </p>
        <p>
          지금 글림스(glims)에서 내 향수 경험을 쓰고, 점수를 매기고,
          글림스(glims)가 제공하는 해시태그를 사용하여 공유해보세요.
        </p>
        <p>
          나만의 향수 경험으로 커뮤니티에서 다른 회원들과 소통하며 더 넓은
          향수의 세계로 떠나보는 건 어떨까요?
        </p>
      </SuggestionWrapper>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 80px 0;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 296px;
  text-align: center;
  background: url(/introduction-background-color.png);

  & p {
    position: absolute;
    font-size: 18px;
    right: 24px;
    bottom: 25px;
  }

  & > .logo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
`;

const IntroductionWrapper = styled.div`
  width: 100%;
  padding: 98px 86px;

  & p {
    font-size: 20px;
    line-height: 1.5;

    &:last-of-type {
      padding-top: 30px;
    }
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 440px;
`;

const ActionLeftWrapper = styled.div`
  width: 460px;
  text-align: center;
  color: white;
  background: url(/introduction-background-black.png);

  & > .action-title-en {
    font-size: 35px;
    font-weight: bold;
    padding-top: 176px;
  }

  & > .action-title-ko {
    font-size: 24px;
    padding-top: 15px;
  }
`;

const ActionRightWrapper = styled.div`
  flex: 1;
  padding: 110px 80px;
  text-align: center;
  background: url(/introduction-background-white.png);

  & > .actions {
    display: flex;
    gap: 5rem;
    text-align: left;

    &:first-of-type {
      padding-bottom: 92px;
    }

    & .action-text-en {
      font-size: 28px;
      font-weight: bold;
      padding-bottom: 16px;
    }

    & .action-text-ko {
      font-size: 20px;
    }
  }
`;

const Bar = styled.div`
  width: 200px;
  height: 5px;
  margin: 100px 86px 24px;
  background-color: black;
`;

const SuggestionWrapper = styled.div`
  padding: 0 86px 100px;

  & p {
    font-size: 20px;
    line-height: 1.5;
  }
`;
