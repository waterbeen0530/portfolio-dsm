import Header from "components/common/header";
import BackGround from "components/main/background";
import MainContainer from "components/main/mainContainer";
import ProjectContainer from "components/webProject/projectContainer";

export default function Home() {
  return (
    <>
      <BackGround>
        <Header />
        <MainContainer />
        <ProjectContainer />
      </BackGround>
    </>
  );
}
