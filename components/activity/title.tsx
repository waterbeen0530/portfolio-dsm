import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Title() {
  return (
    <Container>
      <TitleBox>ACTIVITY</TitleBox>
      <Text>DSM 3년 간의 일대기를 기록합니다.</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
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
