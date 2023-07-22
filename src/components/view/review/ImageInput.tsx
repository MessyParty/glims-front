import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import PhotoIcon from "@/components/common/CustomIcon/PhotoIcon";

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
      <h2>File</h2>
      <label htmlFor="upload-button">
        <div>
          {thumbnail ? (
            <img src={thumbnail} alt="review photo" />
          ) : (
            <button className="image-button" onClick={handleButtonClick}>
              <PhotoIcon />
            </button>
          )}
        </div>
        <input
          id="upload-button"
          type="file"
          accept="image/*"
          ref={uploadButtonRef}
          onChange={handleFileChange}
        />
      </label>
    </Container>
  );
};

export default ImageInput;

const Container = styled.div`
  & > h2 {
    margin-bottom: 22px;
    font-size: 22px;
    font-weight: bold;
  }
  & > label {
    display: block;
    flex-direction: column;
    width: 9rem;

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
