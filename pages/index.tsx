import Header from "components/common/header";
import BackGround from "components/main/background";
import MainContainer from "components/main/mainContainer";

export default function Home() {
  return (
    <>
      <BackGround>
        <Header />
        <MainContainer />
      </BackGround>
    </>
  );
}
