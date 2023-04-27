import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import "./bot.css"

const App = () => {

  const [showIframe, setShowIframe] = useState(false);
  const [initial, setInitial] = useState(false);

  const toggleIframe = () => {
    !initial && setInitial(true);
    setShowIframe(!showIframe);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {initial && <div className={`fixed right-0 bottom-0 h-full ${showIframe ? 'app-active' : 'app-inActive'}`} style={{width: '400px'}}>
        <iframe
          id="iframe-bot-5f96ac4a-de23-44c0-9ead-8599de507e1e"
          src="https://widget.enquirybot.com/#/bots/5f96ac4a-de23-44c0-9ead-8599de507e1e/7d24de732549490fa5cdab40b7c91580"
          style={{ height: '100%', width: '100%' }}
        />
      </div>}

      <div class={`bot-right bot-eb-trigger bot-popup ${showIframe && 'bot-active'}`} id="eb-bot-trigger" onClick={toggleIframe}
        style={{ backgroundImage: 'linear-gradient(to right, rgba(30, 40, 150, 0.5), rgb(80, 0, 180))' }}>
        {/* <div class="bot-eb-tooltip fade" id="bot-tooltip" data-title="You're offline" style={{ opacity: 0 }}></div> */}
        <span class="count">1</span>
        <div class="bot-e-text">
          <span class="bot-text">Make an DenBot</span>
        </div>
        <span class="round-container" style={{background: 'rgb(255, 255, 255)'}}>
          <img id="bot-logo" alt="bot-logo" class={`${!showIframe ? 'bot-close' : 'bot-open bot-cover'}`}
            src="data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzc1cHQiIGhlaWdodD0iMzc0Ljk5OTk5MXB0IiB2aWV3Qm94PSIwIDAgMzc1IDM3NC45OTk5OTEiIHZlcnNpb249IjEuMiI+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAxIj4KICA8cGF0aCBkPSJNIDE5Ljc2OTUzMSAzNyBMIDM1Mi4wMTk1MzEgMzcgTCAzNTIuMDE5NTMxIDM0MiBMIDE5Ljc2OTUzMSAzNDIgWiBNIDE5Ljc2OTUzMSAzNyAiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8ZyBpZD0ic3VyZmFjZTEiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzc1IiBoZWlnaHQ9IjM3NC45OTk5OTEiIHN0eWxlPSJmaWxsOnRyYW5zcGFyZW50O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lOyIvPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzc1IiBoZWlnaHQ9IjM3NC45OTk5OTEiIHN0eWxlPSJmaWxsOnRyYW5zcGFyZW50O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lOyIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPgo8cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6IzFlMWYxZTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gNTIuOTkyMTg4IDM3LjAxMTcxOSBDIDM0LjcxODc1IDM3LjAxMTcxOSAxOS43Njk1MzEgNTEuOTY4NzUgMTkuNzY5NTMxIDcwLjI1IEwgMTkuNzY5NTMxIDI0OS42MTMyODEgQyAxOS43Njk1MzEgMjU3LjAwNzgxMiAyOC43MTQ4NDQgMjYwLjcyMjY1NiAzMy45NDkyMTkgMjU1LjQ4ODI4MSBMIDY5LjYwNTQ2OSAyMTkuODE2NDA2IEwgMjE5LjExNzE4OCAyMTkuODE2NDA2IEMgMjM3LjM5NDUzMSAyMTkuODE2NDA2IDI1Mi4zNDM3NSAyMDQuODU5Mzc1IDI1Mi4zNDM3NSAxODYuNTc4MTI1IEwgMjUyLjM0Mzc1IDcwLjI1IEMgMjUyLjM0Mzc1IDUxLjk2ODc1IDIzNy4zOTQ1MzEgMzcuMDExNzE5IDIxOS4xMTcxODggMzcuMDExNzE5IFogTSAyODUuNTcwMzEyIDEyMC4xMDU0NjkgTCAyODUuNTcwMzEyIDE4Ni41NzgxMjUgQyAyODUuNTcwMzEyIDIyMy4yODkwNjIgMjU1LjgxNjQwNiAyNTMuMDU0Njg4IDIxOS4xMTcxODggMjUzLjA1NDY4OCBMIDExOS40NDUzMTIgMjUzLjA1NDY4OCBMIDExOS40NDUzMTIgMjY5LjY3MTg3NSBDIDExOS40NDUzMTIgMjg3Ljk1MzEyNSAxMzQuMzk0NTMxIDMwMi45MTAxNTYgMTUyLjY2Nzk2OSAzMDIuOTEwMTU2IEwgMzAyLjE3OTY4OCAzMDIuOTEwMTU2IEwgMzM3LjgzOTg0NCAzMzguNTgyMDMxIEMgMzQzLjA3NDIxOSAzNDMuODE2NDA2IDM1Mi4wMTk1MzEgMzQwLjEwMTU2MiAzNTIuMDE5NTMxIDMzMi43MDcwMzEgTCAzNTIuMDE5NTMxIDE1My4zNDM3NSBDIDM1Mi4wMTk1MzEgMTM1LjA2MjUgMzM3LjA2NjQwNiAxMjAuMTA1NDY5IDMxOC43OTI5NjkgMTIwLjEwNTQ2OSBaIE0gMjg1LjU3MDMxMiAxMjAuMTA1NDY5ICIvPgo8L2c+CjwvZz4KPC9zdmc+" />
          <img id="bot-close" alt="bot-close" class={`${!showIframe ? 'bot-open bot-cover' : 'bot-close'}`}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMDhweCIgaGVpZ2h0PSIwOHB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIxMS44MzMzMzMzIDEuMzQxNjY2NjcgMTAuNjU4MzMzMyAwLjE2NjY2NjY2NyA2IDQuODI1IDEuMzQxNjY2NjcgMC4xNjY2NjY2NjcgMC4xNjY2NjY2NjcgMS4zNDE2NjY2NyA0LjgyNSA2IDAuMTY2NjY2NjY3IDEwLjY1ODMzMzMgMS4zNDE2NjY2NyAxMS44MzMzMzMzIDYgNy4xNzUgMTAuNjU4MzMzMyAxMS44MzMzMzMzIDExLjgzMzMzMzMgMTAuNjU4MzMzMyA3LjE3NSA2Ij4KICA8L3BvbHlnb24+CiAgPC9kZWZzPgogIDxnIGlkPSJCb3QtZGVzaWducyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgPGcgaWQ9ImljX2Nsb3NlIj4KICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJyZWQiPgogIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+CiAgPC91c2U+CiAgPC9tYXNrPgogIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiMxZTFmMWUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPgogIDwvdXNlPgogIDwvZz4KICA8L2c+CiAgPC9zdmc+CiAg" />
        </span>
        {/* <div class={`powered bot-right ${showIframe && 'bot-active'}`}>
          <a href="https://denbot.co.uk" class={`bot-right power ${showIframe && 'bot-hide'}`} target="_blank" rel="noopener noreferrer">
            DenBot
          </a>
        </div> */}
      </div>
    </BrowserRouter >
  );
};

export default App;
