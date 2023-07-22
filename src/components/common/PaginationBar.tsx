import { Pagination, PaginationItem, Stack } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import styled from "@emotion/styled";

interface PaginationBarProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const PaginationBar = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: PaginationBarProps) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
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
