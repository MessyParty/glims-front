import styled from "@emotion/styled";
import { useState } from "react";

const SelectBox = () => {
  const [currentValue, setCurrentValue] = useState("Brand");
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <Container onClick={() => setIsShowOptions((prev) => !prev)}>
      <SelectLabel>{currentValue}</SelectLabel>
      <SelectOptions show={isShowOptions}>
        <SelectOption>Brand</SelectOption>
        <SelectOption>Perfume</SelectOption>
        <SelectOption>Notes</SelectOption>
      </SelectOptions>
    </Container>
  );
};

export default SelectBox;

const Container = styled.div`
  position: relative;
  width: 136px;
  height: 52px;
  background-color: white;
  align-self: center;
`;

const SelectLabel = styled.label`
  font-size: 18px;
  text-align: center;
`;

const SelectOptions = styled.ul<{ show: string }>`
  position: absolute;
  list-style: none;
  font-size: 18px;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "none" : "0")};
`;

const SelectOption = styled.li`
  font-size: 18px;
`;
