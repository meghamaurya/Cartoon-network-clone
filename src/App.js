import './App.css';
import CardCarousal1 from './Components/CardCarousal1/CardCarousal1';
import FeaturedGame from './Components/FeaturedGame/FeaturedGame';
import Navbar from './Components/Navbar/Navbar';
import SecondNav from './Components/SecondNav/SecondNav';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondNav />
      <CardCarousal1 />
      <FeaturedGame />
    </div>
  );
}

export default App;
