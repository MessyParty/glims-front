import { SvgIcon, SvgIconProps } from "@mui/material";
import PerfumeHalfIcon from "@root/public/perfume-half.svg";

const PerfumeHalf = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={PerfumeHalfIcon} inheritViewBox {...props} />;
};

export default PerfumeHalf;
