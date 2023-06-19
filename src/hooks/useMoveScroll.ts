import { useRef } from "react";

const useMoveScroll = () => {
  const scrollRef = useRef<Array<HTMLDivElement>>([]);

  const onMoveToElement = (index: number) => {
    scrollRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollRef, onMoveToElement };
};

export default useMoveScroll;
