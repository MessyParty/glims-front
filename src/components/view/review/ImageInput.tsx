import PhotoIcon from "@/components/common/CustomIcon/PhotoIcon";
import styled from "@emotion/styled";
import React, { useRef, useState, Dispatch, SetStateAction } from "react";

type ImageInputProps = {
  setSelectedFile: Dispatch<SetStateAction<File | string>>;
};

const ImageInput = ({ setSelectedFile }: ImageInputProps) => {
  const uploadButtonRef = useRef<HTMLInputElement | null>(null);
  const [thumbnail, setThumbnail] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      setThumbnail(result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setSelectedFile(file || "");
  };

  const handleButtonClick = () => {
    if (uploadButtonRef.current) {
      uploadButtonRef.current.click();
    }
  };

  return (
    <Container>
      <label htmlFor="upload-button">
        File
        <input
          id="upload-button"
          type="file"
          accept="image/*"
          ref={uploadButtonRef}
          onChange={handleFileChange}
        />
        {thumbnail ? (
          <img src={thumbnail} alt="review photo" />
        ) : (
          <button onClick={handleButtonClick} className="image-button">
            <PhotoIcon />
          </button>
        )}
      </label>
    </Container>
  );
};

export default ImageInput;

const Container = styled.div`
  & > label {
    display: flex;
    flex-direction: column;

    & > img {
      margin: 1rem 0;
    }
  }
  & #upload-button {
    display: none;
  }

  & .image-button {
    margin: 1rem 0;
    width: 90px;
    height: 90px;
    background: #fff;
    border: 1px solid #000;
    cursor: pointer;
  }
`;
