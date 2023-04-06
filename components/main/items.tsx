import styled from "@emotion/styled";
import { theme } from "styles/theme";

export default function Items() {
  const item = [
    {
      img: "/img/main/happyFace.png",
      title: "긍정의 대명사",
      content:
        "“긍정적인 사고는 새로운 성장을 도모한다.”\n\n새로운 기술과 도전에 대해 열린 마음을 유지하며\n 긍정적인 사고로 새로운 성장을 도모하는 개발자\n가 될 것입니다.",
    },
    {
      img: "/img/main/starFace.png",
      title: "창의적인 & 독창적인",
      content:
        "“창의성은 가능성을 만들어내는 도구.”\n\n보다 더 다양한 분야에서 창의적인 아이디어를\n발굴하고, 계속해서 새로운 도전과 성장을 위해\n노력할 것입니다.",
    },
    {
      img: "/img/main/loveFace.png",
      title: "유연한 의사소통",
      content:
        "“협업은 유연한 의사소통으로부터 시작된다.”\n\n상대방의 입장을 이해하고 존중하며, 타협점을\n찾아내는 것이야 말로 팀워크에서 가장 중요하다고\n생각합니다.",
    },
  ];
  return (
    <Container>
      {item.map((arr, i) => (
        <Wrapper key={i}>
          <Item>
            <TextBox>
              <Face src={arr.img} />
              <Title>{arr.title}</Title>
            </TextBox>
            <Text>{arr.content}</Text>
          </Item>
        </Wrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 550px;
  height: 530px;
`;
const Wrapper = styled.div`
  width: 320px;
  height: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid ${theme.whiteColor};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );

  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: shaking 1.4s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    @keyframes shaking {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-16px);
      }
    }
  }
  &:nth-child(2) {
    position: absolute;
    top: 150px;
    right: 0;
    animation: shaking 1.2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    @keyframes shaking {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-16px);
      }
    }
  }
  &:last-child {
    position: absolute;
    bottom: 0;
    left: 120px;
    animation: shaking 1.6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    @keyframes shaking {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-16px);
      }
    }
  }
`;
const Item = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Face = styled.img`
  width: 36px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Text = styled.div`
  margin-top: 18px;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.nomalGrayColor};
  white-space: pre-wrap;
`;
