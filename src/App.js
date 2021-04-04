import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
background-color: red;
`;

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dance
        </a>
      </header>
      Hi
    </Container>
  );
}

export default App;
