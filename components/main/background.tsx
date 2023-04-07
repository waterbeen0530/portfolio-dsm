import styled from "@emotion/styled";
import { theme } from "styles/theme";

export default function BackGround({ children }: any) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/img/main/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 4150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 30px;
  border: 3px solid ${theme.backGroundColor};
  background-color: ${theme.backGroundColor};
`;
