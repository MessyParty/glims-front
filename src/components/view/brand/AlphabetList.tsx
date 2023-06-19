import styled from "@emotion/styled";
import { Button } from "@mui/material";

type MoveScrollProps = {
  onMoveToElement: (i: number) => void;
  alphabet: string;
};

const AlphabetList = ({ onMoveToElement, alphabet = "" }: MoveScrollProps) => {
  return (
    <Container>
      {Array.from(alphabet).map((letter, index) => (
        <div key={letter}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => onMoveToElement(index)}
          >
            {letter}
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default AlphabetList;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 0;
  & div {
    & button {
      border-radius: 0;
      width: 65px;
      height: 65px;
      margin: 10px;
      font-family: "Libre Baskerville", serif;
    }
  }
`;
