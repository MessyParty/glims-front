import { SvgIcon, SvgIconProps } from "@mui/material";
import PerfumeFullIcon from "@root/public/perfume-full.svg";

const PerfumeFull = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={PerfumeFullIcon} inheritViewBox {...props} />;
};

export default PerfumeFull;
