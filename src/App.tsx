import "./App.css";
import Header from "./components/Header";
import Homepage from "./assets/pages/homepage/home";
import HomeContinous from "./assets/pages/homepage/home-continous";
import HowtoPage from "./assets/pages/homepage/the-how";
import LeaderBoard from "./assets/pages/homepage/Leaderboard";
import StakeToken from "./assets/pages/homepage/stake";
import GetStarted from "./assets/pages/homepage/get-started";
import ConnectWallet from "./assets/wallet/wallet";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <HomeContinous />
      <HowtoPage />
      <LeaderBoard />
      <StakeToken />
      <GetStarted />
      <ConnectWallet />
    </>
  );
}

export default App;
