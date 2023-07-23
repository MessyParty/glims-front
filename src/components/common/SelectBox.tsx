import styled from "@emotion/styled";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type SelectOptionValue =
  | "brand"
  | "perfume"
  | "notes"
  | "DATE"
  | "HEARTS_COUNT";

type SelectBoxProps<T> = {
  onChange: (selectedOption: T) => void;
  options: { value: string; label: string }[];
  currentValue: string;
  setCurrentValue: (selectedOption: T) => void;
};

const SelectBox = <T extends SelectOptionValue>({
  onChange,
  options,
  currentValue,
  setCurrentValue,
}: SelectBoxProps<T>) => {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleOnChangeSelectValue = (selectedOption: T) => {
    setCurrentValue(selectedOption);
    onChange(selectedOption);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const currentOption = options.find((option) => option.value === currentValue);
  const currentLabel = currentOption ? currentOption.label : "";

  return (
    <Container onClick={() => setIsShowOptions((prev) => !prev)}>
      {isShowOptions ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      <SelectLabel>{capitalize(currentLabel)}</SelectLabel>
      <SelectOptions show={isShowOptions}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            value={option.value}
            onClick={() => handleOnChangeSelectValue(option.value as T)}
          >
            {capitalize(option.label)}
          </SelectOption>
        ))}
      </SelectOptions>
    </Container>
  );
};

export default SelectBox;

const Container = styled.div`
  position: relative;
  min-width: 136px;
  height: 52px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 13px 15px;
  padding-left: 10px;

  & > svg {
    margin-right: 0.5rem;
  }
`;

const SelectLabel = styled.label`
  font-size: 18px;
  text-align: center;
`;

const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  list-style: none;
  font-size: 18px;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "none" : "0")};
  top: 3.5rem;
  left: 0;
  width: 100%;
  padding: 0 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 12px -2px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 5px 12px -2px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 5px 12px -2px rgba(0, 0, 0, 0.62);
  z-index: 9;
  max-width: 137px;
`;

const SelectOption = styled.li`
  font-size: 18px;
  padding: 0.5rem 0;
  padding-left: 2rem;
`;
