import styled from "@emotion/styled";
import Title from "components/main/title";
import Items from "components/main/items";

export default function MainContainer() {
  return (
    <Container>
      <Title />
      <Items />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  width: 86%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
