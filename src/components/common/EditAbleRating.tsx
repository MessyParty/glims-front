import { useState } from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import PerfumeFull from "./CustomIcon/PerfumeFull";
import Perfume from "./CustomIcon/Perfume";

const EditAbleRating = () => {
  const [rating, setRating] = useState<null | number>(0);

  return (
    <PerfumeRating
      name="perfume"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      defaultValue={2}
      precision={0.5}
      icon={<PerfumeFull fontSize="inherit" />}
      emptyIcon={<Perfume fontSize="inherit" />}
    />
  );
};

export default EditAbleRating;

const PerfumeRating = styled(Rating)`
  margin: 1rem 0;
`;
