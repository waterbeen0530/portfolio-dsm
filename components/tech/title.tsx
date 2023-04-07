import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Title() {
  return (
    <Container>
      <TitleBox>TECH & STACK</TitleBox>
      <Text>&quot;Click Me&quot; 버튼을 눌러 보세요!</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.h1`
  font-size: 50px;
  color: ${theme.blackColor};
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: ${theme.strongGrayColor};
`;
