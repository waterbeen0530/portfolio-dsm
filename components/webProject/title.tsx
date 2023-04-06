import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Title() {
  return (
    <Container>
      <TitleBox>PROJECT</TitleBox>
      <Text>최근 2년간 진행했던 웹 프로젝트를 소개합니다.</Text>
    </Container>
  );
}

const Container = styled.div`
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
