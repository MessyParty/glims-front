import { useRandomPerfume } from "@/hooks/queries/usePerfume";
import styled from "@emotion/styled";
import { useBestReviews } from "@/hooks/queries/useReivew";
import DecorationBar from "@/components/common/DecorationBar";
import PerfumeImage from "@/components/common/PerfumeImage";
import LikeButton from "@/components/common/LikeButton";
import React from "react";

const LeftSideBox = () => {
  const { data: bestData, isSuccess } = useBestReviews(3);
  const { data: randomPerfumeData } = useRandomPerfume(3);

  return (
    <Container>
      {bestData !== undefined ? (
        <>
          <div className="best-review">
            <DecorationBar top={-4} left={-1} />
            <div className="review-box">
              <PerfumeImage width={375} height={400} />
              <div className="review-detail">
                <div>
                  <HighlightText>{bestData && bestData[0].title}</HighlightText>
                  <DescriptionText>
                    {bestData && bestData[0].body}
                  </DescriptionText>
                </div>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {bestData && bestData[0].perfumeBrandEng}
                    </BrandText>
                    <NameText>{bestData && bestData[0].perfumeName}</NameText>
                  </div>
                  <LikeButton
                    likeCount={bestData && bestData[0].heartCnt}
                    uuid={bestData && bestData[0].uuid}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="best-review">
            <DecorationBar top={-4} right={0} />
            <div className="review-box">
              <div className="review-detail">
                <div>
                  <HighlightText>{bestData && bestData[1].title}</HighlightText>
                  <DescriptionText>
                    {bestData && bestData[1].body}
                  </DescriptionText>
                </div>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {bestData && bestData[1].perfumeBrandEng}
                    </BrandText>
                    <NameText>{bestData && bestData[1].perfumeName}</NameText>
                  </div>
                  <LikeButton
                    likeCount={bestData && bestData[1].heartCnt}
                    uuid={bestData && bestData[1].uuid}
                  />
                </div>
              </div>
              <PerfumeImage width={375} height={400} />
            </div>
          </div>
          <div className="best-review">
            <DecorationBar top={-4} left={-1} />
            <div className="review-box">
              <PerfumeImage width={375} height={400} />
              <div className="review-detail">
                <div>
                  <HighlightText>{bestData && bestData[2].title}</HighlightText>
                  <DescriptionText>
                    {bestData && bestData[2].body}
                  </DescriptionText>
                </div>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {bestData && bestData[2].perfumeBrandEng}
                    </BrandText>
                    <NameText>{bestData && bestData[2].perfumeName}</NameText>
                  </div>
                  <LikeButton
                    likeCount={bestData && bestData[2].heartCnt}
                    uuid={bestData && bestData[2].uuid}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="random-review">
            <DecorationBar top={-4} left={-1} />
            <div className="review-box">
              <PerfumeImage width={375} height={400} />
              <div className="review-detail">
                <DescriptionText>
                  {randomPerfumeData && randomPerfumeData[0].introduction}
                </DescriptionText>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {randomPerfumeData && randomPerfumeData[0].brandName}
                    </BrandText>
                    <NameText>
                      {randomPerfumeData && randomPerfumeData[0].perfumeName}
                    </NameText>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="random-review">
            <DecorationBar top={-4} right={0} />
            <div className="review-box">
              <div className="review-detail">
                <DescriptionText>
                  {randomPerfumeData && randomPerfumeData[1].introduction}
                </DescriptionText>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {randomPerfumeData && randomPerfumeData[1].brandName}
                    </BrandText>
                    <NameText>
                      {randomPerfumeData && randomPerfumeData[1].perfumeName}
                    </NameText>
                  </div>
                </div>
              </div>
              <PerfumeImage width={375} height={400} />
            </div>
          </div>
          <div className="random-review">
            <DecorationBar top={-4} left={-1} />
            <div className="review-box">
              <PerfumeImage width={375} height={400} />
              <div className="review-detail">
                <DescriptionText>
                  {randomPerfumeData && randomPerfumeData[2].introduction}
                </DescriptionText>
                <div className="review-meta">
                  <div>
                    <BrandText>
                      {randomPerfumeData && randomPerfumeData[2].brandName}
                    </BrandText>
                    <NameText>
                      {randomPerfumeData && randomPerfumeData[2].perfumeName}
                    </NameText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default LeftSideBox;

const Container = styled.div`
  width: 750px;
  border: 1px solid;

  & > .best-review {
    position: relative;
    display: flex;

    & > .review-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0;
    }

    & .review-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 30px;

      & > .review-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 80px;
      }
    }
  }

  & > .random-review {
    position: relative;
    display: flex;

    & > .review-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0;
    }

    & .review-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 30px;

      & > .review-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 80px;
      }
    }
  }
`;

const HighlightText = styled.p`
  font-weight: bold;
  font-size: 22px;
  text-align: left;
  line-height: 1.3;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 19px;
  padding: 18px 0;
`;

const BrandText = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`;

const NameText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 17px;
  line-height: 25px;
`;
