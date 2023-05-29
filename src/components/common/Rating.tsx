import styled from "@emotion/styled";
import { Rating as MuiRating } from "@mui/material";
import PerfumeFull from "./CustomIcon/PerfumeFull";
import Perfume from "./CustomIcon/Perfume";

const Rating = () => {
  return (
    <PerfumeRating
      name="perfume"
      value={2.5}
      defaultValue={0}
      precision={0.5}
      icon={<PerfumeFull fontSize="inherit" />}
      emptyIcon={<Perfume fontSize="inherit" />}
      readOnly
    />
  );
};

export default Rating;

const PerfumeRating = styled(MuiRating)`
  margin: 1rem 0;
`;
