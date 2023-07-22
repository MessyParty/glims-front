import styled from "@emotion/styled";
import Image from "next/image";
import useProfile from "@/hooks/queries/useProfile";
import { ChangeEvent, FormEvent, useState } from "react";
import useModal from "@/hooks/useModal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useUpdateNickname from "@/hooks/queries/useUpdateNickname";

const NicknameUpdateModalContent = () => {
  const { data } = useProfile();
  const { mutate } = useUpdateNickname();
  const { closeModal } = useModal(MODAL_KEYS.nicknameUpdate);
  const [nickname, setNickname] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nickname) {
      mutate(nickname);
    }
    closeModal();
  };

  return (
    <Container>
      <Image src="/glims-logo.svg" alt="Glims Logo" width={96} height={54} />
      <p className="">{data?.nickname}컬렉터님,</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          id="nickname"
          value={nickname}
          onChange={handleInputChange}
          placeholder="수정할 닉네임을 작성해주세요."
        />
        <button type={"submit"}>확인</button>
      </form>
    </Container>
  );
};

export default NicknameUpdateModalContent;

const Container = styled.div`
  padding: 48px 58px;
  text-align: center;

  & p {
    font-size: 21px;
    margin-top: 34px;
    margin-bottom: 22px;
  }

  & input {
    display: inline-block;
    border-radius: 0;
    border: 1px solid;
    padding: 15px 51px 16px 17px;
    width: 284px;
    box-sizing: border-box;
    margin-bottom: 44px;
  }

  & input::placeholder {
    font-size: 18px;
    color: #d7d7d7;
    font-weight: lighter;
  }

  & button {
    color: white;
    background-color: black;
    font-size: 18px;
    text-align: center;
    width: 168px;
    height: 46px;
    margin: 0 auto;
  }

  & button:hover {
    opacity: 0.8;
    transition: all ease 0.4s;
  }
`;
