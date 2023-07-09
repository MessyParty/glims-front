import styled from "@emotion/styled";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type SelectOptionValue = "brand" | "perfume" | "notes";

const options: { value: SelectOptionValue; label: string }[] = [
  { value: "brand", label: "Brand" },
  { value: "perfume", label: "Perfume" },
  { value: "notes", label: "Notes" },
];

type SelectBoxProps = {
  onChange: (selectedOption: SelectOptionValue) => void;
};

const SelectBox = ({ onChange }: SelectBoxProps) => {
  const [currentValue, setCurrentValue] = useState<SelectOptionValue>("brand");
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleOnChangeSelectValue = (selectedOption: SelectOptionValue) => {
    setCurrentValue(selectedOption);
    onChange(selectedOption);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container onClick={() => setIsShowOptions((prev) => !prev)}>
      {isShowOptions ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      <SelectLabel>{capitalize(currentValue)}</SelectLabel>
      <SelectOptions show={isShowOptions}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            value={option.value}
            onClick={() => handleOnChangeSelectValue(option.value)}
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
  width: 136px;
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
  top: 4rem;
  left: 0;
  width: 100%;
  padding: 0 0.5rem;
`;

const SelectOption = styled.li`
  font-size: 18px;
  padding: 0.5rem 0;
  padding-left: 2rem;
`;
