import { Perfume } from "@/apis/interfaces/perfume.interfece";
import styled from "@emotion/styled";
import React from "react";
import PerfumeDetailRating from "./PerfumeDetailRating";
import Rating from "@/components/common/Rating";
interface PerfumeDetailProps {
  data: {
    brandName: string;
    brandNameKor: string;
    longevityRatings: number;
    overallRatings: number;
    perfumeName: string;
    reviewCnt: number;
    sillageRatings: number;
    scentRatings: number;
    uuid: string;
    photos: { url: string }[];
    notes: { id: number; korName: string; engName: string }[];
    introduction: string;
  };
}

const PerfumeDetail = ({ data }: PerfumeDetailProps) => {
  const {
    photos,
    brandName,
    brandNameKor,
    notes,
    scentRatings,
    longevityRatings,
    sillageRatings,
    overallRatings,
    introduction,
  } = data as Perfume;

  return (
    <Container>
      <PerfumeDescription>
        <div className="perfume-container">
          <TopDecorationBar />
          <div className="perfume-thumb">
            <div className="perfume-img">
              <img src={photos[0].url} alt="perfume image" />
            </div>
          </div>
        </div>
        <PerfumeName>
          <div className="perfume-name-box">
            <p className="perfume-eng">{brandName}</p>
            <p className="perfume-kor">{brandNameKor}</p>
          </div>
          <div className="perfume-intro">{introduction}</div>
          <div className="perfume-note">
            {notes.map((item) => (
              <div key={item.id}>
                <span className="note-kor">{item.korName}</span>
                <span className="note-eng">{item.engName}</span>
              </div>
            ))}
          </div>
        </PerfumeName>
      </PerfumeDescription>
      <PerfumeInfo>
        <div className="perfume-note-box">
          <h1 className="title">Note</h1>
          <div className="perfume-note">
            {notes.map((item) => (
              <div key={item.id}>
                <span className="note-kor">{item.korName}</span>
                <span className="note-eng">{item.engName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="perfume-score">
          <h1 className="title">Score</h1>
          <PerfumeDetailRating
            scentRatings={scentRatings}
            longevityRatings={longevityRatings}
            sillageRatings={sillageRatings}
          />
          <div className="perfume-detail-score">
            <p className="average-title">
              AVERAGE <br /> SCORE
            </p>
            <Rating score={overallRatings} fontSize="3.75rem" />
          </div>
        </div>
      </PerfumeInfo>
      <BottomDecorationBar />
    </Container>
  );
};

export default PerfumeDetail;

const Container = styled.div`
  margin: 2rem 0;
`;
const PerfumeDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 35rem;
  border-top: 1px solid #000;
  position: relative;

  .perfume-container {
    width: 100%;
    background-color: #fefeff;
    height: 35rem;
    overflow: hidden;
    border-bottom: 1px solid #000;
    .perfume-thumb {
      position: relative;
      padding-top: 100%;
      height: 35rem;
      overflow: hidden;

      .perfume-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transform: translate(50%, 50%);
        -ms-transform: translate(50%, 50%);
        transform: translate(50%, 50%);

        img {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 90%;
          height: auto;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .thumbnail-wrappper {
    width: 25%;
  }

  .thumbnail {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  }

  .thumbnail .centered {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: translate(50%, 50%);
    -ms-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }

  .thumbnail .centered img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: auto;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const PerfumeName = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;

  .perfume-name-box {
    .perfume-eng {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .perfume-kor {
      font-size: 1.5rem;
    }
  }

  .perfume-intro {
    font-size: 1.3rem;
    line-height: 1.5;
    padding-top: 5rem;
  }

  .perfume-note {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    width: 20rem;

    & > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin: 0.5rem 0;
      .note-kor {
        font-weight: bold;
      }
    }
  }
`;

const PerfumeInfo = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  border-top: 1px solid #000;
  & .title {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  & .perfume-note-box {
    border-right: 1px solid #000;

    & .perfume-note {
      margin: 1rem 0;
      & > div {
        display: grid;
        grid-template-columns: 1fr 4fr;
        margin: 0.5rem 0;
        font-size: 1.3125rem;
        line-height: 1.5;
        .note-kor {
          font-weight: bold;
        }

        .note-eng {
          color: #474747;
        }
      }
    }
  }

  & .perfume-score {
    width: 90%;

    & .perfume-detail-score {
      display: grid;
      grid-template-columns: 1fr 2fr;

      & .average-title {
        font-weight: bold;
        font-size: 1.31rem;
        line-height: 1.5;
      }

      & > .MuiRating-root {
        place-content: end;
      }
    }
  }
`;

const TopDecorationBar = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 0.8125rem;
  background-color: #000;
  top: -5px;
  left: 0;
`;
const BottomDecorationBar = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 0.8125rem;
  background-color: #000;
  bottom: -267px;
  right: 256px;
`;
