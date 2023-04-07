import styled from "@emotion/styled";
import Title from "./title";
import Item from "./item";

export default function TechContainer() {
  return (
    <Container id="tech">
      <Title />
      <Item />
    </Container>
  );
}

const Container = styled.div`
  width: 86%;
  margin-top: 120px;
`;
