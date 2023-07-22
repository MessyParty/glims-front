interface DecorationBarProps {
  top?: number | "auto";
  right?: number | "auto";
  bottom?: number | "auto";
  left?: number | "auto";
}

const DecorationBar = ({
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
}: DecorationBarProps) => {
  return (
    <div
      style={{
        width: "180px",
        height: "8px",
        backgroundColor: "black",
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}
    ></div>
  );
};

export default DecorationBar;
