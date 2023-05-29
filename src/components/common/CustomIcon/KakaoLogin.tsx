import { SvgIcon, SvgIconProps } from "@mui/material";
import KakaoLoginIcon from "@root/public/kakao-login-icon.svg";

const KakaoLogin = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={KakaoLoginIcon} inheritViewBox {...props} />;
};

export default KakaoLogin;
