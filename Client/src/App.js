import "./App.css";
import Header from "./Header/Header";

import { RightBar } from "./Contents/RightBar/RightBar";
import LeftBar from "./Contents/Leftbar/Leftbar";
import ContentsList from "./Contents/ContentsList/ContentsList";

//const Footer = () => {
//  console.log("Footer");
//  return <footer>Copyright @ 2021 test</footer>;
//};

export default function App() {
  return (
    <div className="App">
      {/*App*/}
      <main>
        {/*main*/}
        <div className="Header">
          <Header />
        </div>
        <div className="Contents">
          {/*Contents*/}
          <LeftBar />
          <ContentsList />
          <RightBar />
        </div>
        {/*<div className="Footer">
          <Footer />
        </div>*/}
      </main>
    </div>
  );
}
