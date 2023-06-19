import styled from "@emotion/styled";
import { Rating as MuiRating, styled as muiStyled } from "@mui/material";
import PerfumeFull from "./CustomIcon/PerfumeFull";
import Perfume from "./CustomIcon/Perfume";

interface RatingProps {
  score: number;
  fontSize: string;
}

const Rating = ({ score, fontSize }: RatingProps) => {
  return (
    <PerfumeRating
      name="perfume"
      value={score}
      defaultValue={0}
      precision={0.5}
      icon={<PerfumeFull style={{ fontSize }} />}
      emptyIcon={<Perfume style={{ fontSize }} />}
      readOnly
    />
  );
};

export default Rating;

const PerfumeRating = styled(MuiRating)`
  margin: 0.5rem 0;
`;
