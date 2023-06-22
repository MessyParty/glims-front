import Image from "next/image";

interface PerfumeImageProps {
  imgSrc?: string;
  width: number;
  height: number;
}

const PerfumeImage = ({ imgSrc, width, height }: PerfumeImageProps) => {
  return (
    <>
      {imgSrc ? (
        <Image src={imgSrc} alt="Perfume Image" width={width} height={height} />
      ) : (
        <Image
          src="/perfume-default.svg"
          alt="Perfume Image"
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default PerfumeImage;
