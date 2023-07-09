import Image from "next/image";
import React from "react";

interface PerfumeImageProps {
  imgSrc?: string[] | undefined;
  width: number;
  height: number;
}

const PerfumeImage = ({ imgSrc, width, height }: PerfumeImageProps) => {
  return (
    <>
      {imgSrc && imgSrc.length > 0 ? (
        imgSrc.map((photo, index) => (
          <React.Fragment key={index}>
            <Image
              src={photo}
              alt="Perfume Image"
              width={width}
              height={height}
            />
          </React.Fragment>
        ))
      ) : (
        <Image
          src="/perfume-default.svg"
          alt="Perfume Image"
          width={width}
          height={height}
          style={{ objectFit: "cover" }}
        />
      )}
    </>
  );
};

export default PerfumeImage;
