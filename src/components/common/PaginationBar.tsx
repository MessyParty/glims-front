import { Pagination, PaginationItem, Stack } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const PaginationBar = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        size="large"
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <GlimsPaginationItem
            slots={{
              first: KeyboardDoubleArrowLeft,
              last: KeyboardDoubleArrowRight,
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default PaginationBar;

const GlimsPaginationItem = styled(PaginationItem)`
  &:hover {
    background-color: transparent;
  }

  &.Mui-selected {
    font-weight: bolder;
    background-color: transparent;
  }

  &.Mui-selected:hover {
    background-color: transparent;
  }

  & > .MuiTouchRipple-root {
    display: none;
  }
`;
