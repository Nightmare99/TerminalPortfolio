import React,{useRef,useEffect} from 'react';

import Input from './components/Input/Input.component';
import CommandHistory from './components/CommandHistory/CommandHistory.component';
import Contacts from './components/contacts/contact.component';

import {IntroArt,ProfilePhoto} from './utils/asciiArt';
import {useCommandHistory} from './utils/hooks'

import {MainContainer,IntroContainer,ProfilePhotoPre,NameContainer,ComandContainer,ContactContainer} from './App.styles'

function App() {

  const inputRef = useRef(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const {
    commandHistory,
    command,
    lastCommandIndex,
    setCommand,
    setCommandHistory,
    clearCommandHistory,
    setLastCommandIndex,
  } = useCommandHistory([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [commandHistory]);



  return (
    <MainContainer onClick={onClickAnywhere}>
      <IntroContainer>
          <ProfilePhotoPre className="font-cyan">
            <ProfilePhoto/>
          </ProfilePhotoPre> 
        <NameContainer className="font-pink">        
          <IntroArt/>
        </NameContainer>
        <ContactContainer className="font-cyan">
          <Contacts/>
        </ContactContainer>
      </IntroContainer>
      <ComandContainer className='font-cyan'>
        <CommandHistory commandHistory ={commandHistory} />
        <br></br>
        <Input
          inputRef={inputRef}
          command={command}
          commandHistory={commandHistory}
          setCommand={setCommand}
          setCommandHistory={setCommandHistory}
          setLastCommandIndex={setLastCommandIndex}
          clearCommandHistory={clearCommandHistory} 
          lastCommandIndex={lastCommandIndex}
        />
      </ComandContainer>
    </MainContainer>
  );
}

export default App;
