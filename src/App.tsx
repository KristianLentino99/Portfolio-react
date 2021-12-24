import React, {useEffect, useState} from 'react';
import './css/basic.css';
import './css/layout.css';
import './css/blogs.css';
import './css/ionicons.css';
import './css/magnific-popup.css';
import './css/animate.css';
import './css/new-skin.css';
import './css/Header.css';
import './css/gradient.css';

import './css/owl.carousel.css';
import './css/App.css';
import './css/dark.css';
import HeaderComponent from "./components/navigation/HeaderComponent";
import CursorDivComponent from "./components/cursor/CursorDivComponent";
import CardAboutComponent from "./components/cards/CardAboutComponent";
import CardProfileComponent from "./components/cards/CardProfileComponent";
import WaveComponent from "./components/wave/WaveComponent";
import CardComponent from "./components/cards/CardComponent";
import CardResumeComponent from './components/cards/CardResumeComponent';
import CardWorkComponent from "./components/cards/CardWorkComponent";

function App() {

    //setto di default attiva la tab "about"
  const [activeTab,setActiveTab] = useState(1);

  useEffect(() => {
      document.title = "Kristian Lentino's Portfolio";
  })
  return (
    <CursorDivComponent className={"main-container page"}>
        <React.Fragment>
            <WaveComponent/>
            <div className="container opened cards-container">
                <HeaderComponent activeTab={activeTab} onVoiceClick={(tab:number) => setActiveTab(tab)}/>
                <CardProfileComponent/>
                <CardComponent className={activeTab == 1 ? 'card-active' : 'd-none'}>
                    <CardAboutComponent />
                </CardComponent>
                <CardComponent className={activeTab == 2 ? 'card-active' : 'd-none'}>
                    <CardResumeComponent />
                </CardComponent>
                <CardComponent className={activeTab == 3 ? 'card-active' : 'd-none'}>
                    <CardWorkComponent />
                </CardComponent>
            </div>
        </React.Fragment>
    </CursorDivComponent>
  );
}

export default App;
