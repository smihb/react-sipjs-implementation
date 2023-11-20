import { useEffect } from 'react'
import './App.css'

import { Web } from 'sip.js'

function App() {

  function getAudioElement(id: string): HTMLAudioElement {
    const el = document.getElementById(id);
    if (!(el instanceof HTMLAudioElement)) {
      throw new Error(`Element "${id}" not found or not an audio element.`);
    }
    return el;
  }

  useEffect(() => {
    const options: Web.SimpleUserOptions = {
      aor: "", // caller
      userAgentOptions: {
        displayName: '',
        authorizationUsername: '',
        authorizationPassword: '',
      },
      media: {
        constraints: { audio: true, video: false }, // audio only call
        remote: { audio: getAudioElement("audioElement") } // play remote audio
      }
    };
    const server = "";

    const simpleUser = new Web.SimpleUser(server, options);


    try {

      simpleUser.connect()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div>
      <audio controls id="audioElement"></audio>
    </div>
  )
}

export default App