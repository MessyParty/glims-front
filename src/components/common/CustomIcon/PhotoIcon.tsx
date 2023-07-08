import { SvgIcon, SvgIconProps } from "@mui/material";
import Photo from "@root/public/photo-icon.svg";

const PhotoIcon = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={Photo} inheritViewBox {...props} />;
};

export default PhotoIcon;
