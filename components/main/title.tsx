import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Title() {
  return (
    <Container>
      <TitleBox>
        <p>
          목표를 향해
          <br />
          유쾌하게 달리는
        </p>
        <strong>임수빈 </strong>
        <span>입니다!</span>
      </TitleBox>
      <Text>안녕하세요. 프론트엔드 개발자 임수빈입니다.</Text>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

const TitleBox = styled.div`
  font-size: 50px;
  color: ${theme.blackColor};
`;

const Text = styled.p`
  margin-top: 28px;
  font-size: 20px;
  color: ${theme.strongGrayColor};
`;
