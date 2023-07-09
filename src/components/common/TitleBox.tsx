import styled from "@emotion/styled";

interface TitleBoxProps {
  title: string;
  subtitle: string;
}

const TitleBox = ({ title, subtitle }: TitleBoxProps) => {
  return (
    <BrandTitleBox>
      <p className="title-text">{title}</p>
      <p className="subTitle-text">{subtitle}</p>
    </BrandTitleBox>
  );
};

export default TitleBox;

const BrandTitleBox = styled.div`
  width: 330px;
  padding: 2rem 0;
  margin: 3rem 0 5rem;
  border-top: 10px solid #000;
  border-bottom: 10px solid #000;
  line-height: 1.5;
  & .title-text {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }

  & .subTitle-text {
    font-size: 24px;
  }
`;
