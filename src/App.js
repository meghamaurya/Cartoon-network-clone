import './App.css';
import CardCarousal1 from './Components/CardCarousal1/CardCarousal1';
import DetailCard from './Components/DetailComp/DetailComp';
import FeaturedGame from './Components/FeaturedGame/FeaturedGame';
import Navbar from './Components/Navbar/Navbar';
import SecondNav from './Components/SecondNav/SecondNav';
import CardDetailGames from "./Components/JsonFiles/Games.json"
import CardDetail1 from "./Components/JsonFiles/CardDetail.json";
import TeenTitans from "./Components/JsonFiles/TeenTitans.json";
import TopVideos from "./Components/JsonFiles/TopVideos.json";
import Craig from "./Components/JsonFiles/Craig.json";
import Detail from "./Components/JsonFiles/Detail.jsx";
import { RiPlayFill } from 'react-icons/ri';
import { IoGameController } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TfiThought } from "react-icons/tfi";
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <SecondNav />
      <CardCarousal1 CardDetail={CardDetail1} />
      <FeaturedGame SecBgColor={'#2eade4'} bgcolor={"black"} CardDetail={CardDetailGames} Icon={IoGameController} btnTitle={Detail.btntitle1} HeadTitle={Detail.headTitle1} />
      <DetailCard img={Detail.img1} title1={Detail.title1} para1={Detail.para1} />
      <FeaturedGame SecBgColor={'#fff15c'} bgcolor={"black"} CardDetail={TopVideos} Icon={RiPlayFill} btnTitle={Detail.btntitle2} HeadTitle={Detail.headTitle2} />
      <DetailCard img={Detail.img2} title1={Detail.title2} para1={Detail.para2} />
      <FeaturedGame SecBgColor={`url(${Detail.bgBmx})`} bgcolor={"#2fb6ea"} CardDetail={TeenTitans} Icon={BsFillLightningChargeFill} btnTitle={Detail.btntitle3} HeadTitle={Detail.headTitle3} />
      <FeaturedGame SecBgColor={`url(${Detail.bgCraig})`} bgcolor={"#4f9968"} CardDetail={Craig} Icon={TfiThought} btnTitle={Detail.btntitle4} HeadTitle={Detail.headTitle4} />
      <DetailCard img={Detail.img3} title1={Detail.title3} para1={Detail.para3} />
      <Footer />
    </div>
  );
}

export default App;
