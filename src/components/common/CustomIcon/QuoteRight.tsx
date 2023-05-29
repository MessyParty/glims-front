import { SvgIcon, SvgIconProps } from "@mui/material";
import QuoteRightIcon from "@root/public/quote-right.svg";

const QuoteRight = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={QuoteRightIcon} inheritViewBox {...props} />;
};

export default QuoteRight;
