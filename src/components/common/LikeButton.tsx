import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface LikeButtonProps {
  initialState?: boolean;
  likeCount?: number;
}

const LikeButton = ({ initialState, likeCount }: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(initialState ?? false);

  const likeHandler = () => {
    setIsClicked((previous) => !previous);
  };

  return (
    <>
      <IconButton color="primary" onClick={likeHandler} disableRipple>
        {isClicked ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
      <LikeCount>{likeCount ?? 25}</LikeCount>
    </>
  );
};

export default LikeButton;

const LikeCount = styled.div`
  display: inline-block;
  font-size: 18px;
  vertical-align: middle;
  padding-top: 5px;
`;
