import styled from "@emotion/styled";
import { theme } from "styles/theme";

export default function Header() {
  return (
    <Container>
      <Logo src="/img/header/subinsu.png" />
      <TextBox>
        <p>Introduction</p>
        <p>project</p>
        <p>Activity</p>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 86%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 130px;
  cursor: pointer;
`;

const TextBox = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    font-size: 16px;
    font-weight: 700;
    &:hover {
      color: ${theme.whiteColor};
      transition: all 0.5s;
      cursor: pointer;
    }
  }
`;
