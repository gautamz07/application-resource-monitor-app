import logo from './logo.svg';
import './App.css';
import Applications from './components/applications'
import Resources from './components/resources'
import { Tabs } from 'antd';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      {/* <div>HI</div> */}
      {/* <Applications/> */}
      

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: 'Applications',
            key: '1',
            children: <Applications />,
          },
          {
            label: 'Resources',
            key: '2',
            children: <Resources />,
          },
        ]}
      />
    </div>
  );
}

export default App;
