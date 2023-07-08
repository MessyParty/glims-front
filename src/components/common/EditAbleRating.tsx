import React from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import PerfumeFull from "./CustomIcon/PerfumeFull";
import Perfume from "./CustomIcon/Perfume";

type EditableRatingProps = {
  value: number;
  onChange: (value: number) => void;
  fontSize: string;
  precision: number;
};

const EditableRating = ({
  value,
  onChange,
  fontSize,
  precision,
}: EditableRatingProps) => {
  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null,
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <PerfumeRating
      value={value || 0}
      onChange={handleRatingChange}
      precision={precision}
      icon={<PerfumeFull style={{ fontSize }} />}
      emptyIcon={<Perfume style={{ fontSize }} />}
    />
  );
};

export default EditableRating;

const PerfumeRating = styled(Rating)`
  margin: 1rem 0;
`;
