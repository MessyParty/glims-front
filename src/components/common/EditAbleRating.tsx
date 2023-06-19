import { useState } from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import PerfumeFull from "./CustomIcon/PerfumeFull";
import Perfume from "./CustomIcon/Perfume";


const EditAbleRating = ({ fontSize }: { fontSize: number }) => {
  const [rating, setRating] = useState<null | number>(0);

  return (
    <PerfumeRating
      name="perfume"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      defaultValue={0}
      precision={0.5}
      icon={<PerfumeFull style={{ fontSize }} />}
      emptyIcon={<Perfume style={{ fontSize }} />}
    />
  );
};

export default EditableRating;

const PerfumeRating = styled(Rating)`
  margin: 1rem 0;
`;
