import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import SelectBox from "@/components/common/SelectBox";
import { useRouter } from "next/router";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

type SelectOptionValue = "brand" | "perfume" | "notes";
const options: { value: SelectOptionValue; label: string }[] = [
  { value: "brand", label: "Brand" },
  { value: "perfume", label: "Perfume" },
  { value: "notes", label: "Notes" },
];

const SearchModal = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionValue>("brand");
  const [currentValue, setCurrentValue] = useState<SelectOptionValue>("brand");

  const { closeModal } = useModal(MODAL_KEYS.search);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOptionChange = (option: SelectOptionValue) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search && selectedOption) {
      const query = { [selectedOption]: search };
      router.push({
        pathname: "/perfumes/search",
        query,
      });
    }
    closeModal();
  };

  return (
    <Container>
      <div className="logo-box">
        <Image src="/glims-logo.svg" alt="Glims Logo" width={96} height={54} />
        <p>객관화되는 나의 향, 나의 취향</p>
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <SelectBox
          onChange={handleOptionChange}
          options={options}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleInputChange}
          placeholder="당신의 향수를 찾아보세요"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </Container>
  );
};

export default SearchModal;

const Container = styled.div`
  width: 540px;
  height: 330px;
  padding: 40px 0;

  & .logo-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      margin-bottom: 1rem;
    }
  }

  & .search-box {
    display: flex;
    justify-content: center;
    border: 1px solid #000;
    width: 514px;
    padding-right: 1rem;
    margin: 3rem auto;

    & > input {
      border: none;
      border-left: 1px solid #000;
      width: 377px;
      padding: 0 1rem;
      font-size: 17px;
    }
  }
`;
