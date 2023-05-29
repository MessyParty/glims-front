import { SvgIcon, SvgIconProps } from "@mui/material";
import QuoteLeftIcon from "@root/public/quote-left.svg";

const QuoteLeft = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={QuoteLeftIcon} inheritViewBox {...props} />;
};

export default QuoteLeft;
