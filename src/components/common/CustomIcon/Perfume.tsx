import { SvgIcon, SvgIconProps } from "@mui/material";
import PerfumeIcon from "@root/public/perfume-empty.svg";

const Perfume = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={PerfumeIcon} inheritViewBox {...props} />;
};

export default Perfume;
