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

function App() {
    //setto di default attiva la tab "about"
  const [activeTab,setActiveTab] = useState(1);

  return (
    <CursorDivComponent className={"main-container page"}>
        <React.Fragment>
            <WaveComponent/>
            <div className="container opened" style={{width:"40vw"}}>
                <HeaderComponent activeTab={activeTab} onVoiceClick={(tab:number) => setActiveTab(tab)}/>
                <CardProfileComponent/>
                <CardComponent className={activeTab == 1 ? 'card-active' : null}>
                    <CardAboutComponent />
                </CardComponent>
                <CardComponent className={activeTab == 2 ? 'card-active' : null}>
                    <CardResumeComponent />
                </CardComponent>
            </div>
        </React.Fragment>
    </CursorDivComponent>
  );
}

export default App;
