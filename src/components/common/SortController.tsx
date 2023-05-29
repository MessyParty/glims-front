import { useState } from "react";
import styled from "@emotion/styled";
import { Select, MenuItem, SelectChangeEvent, Input } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Order = "DATE" | "HEARTS_COUNT";

interface SortControllerProps {
  orderCallback: React.Dispatch<React.SetStateAction<Order>>;
}

const SortController = ({ orderCallback }: SortControllerProps) => {
  const [value, setValue] = useState<Order>("DATE");

  const onChange = (e: SelectChangeEvent<Order>) => {
    const target = e.target.value as Order;
    setValue(target);
    orderCallback(target);
  };

  return (
    <Container>
      <Select
        value={value}
        onChange={onChange}
        input={<CustomInput disableUnderline />}
        IconComponent={KeyboardArrowDownIcon}
      >
        <MenuItem value="DATE">날짜순</MenuItem>
        <MenuItem value="HEARTS_COUNT">추천순</MenuItem>
      </Select>
    </Container>
  );
};

export default SortController;

const Container = styled.div`
  display: flex;
  flex-direction: space-between;
`;

const CustomInput = styled(Input)`
  & > .MuiSelect-select {
    padding-right: 0px;
    padding-left: 32px;
  }

  & > .MuiSvgIcon-root {
    right: 0;
    left: 7px;
  }
`;
