import logo from './logo.svg';
import './App.css';
import Applications from './components/applications'
import Resources from './components/resources'
import { Tabs } from 'antd';
import {
  AiFillAndroid,
  AiFillApple 
} from "react-icons/ai";


function App() {
  return (
    <main className="ResourceMonitorApp">
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
        className='MonitorResourceWrapper'
        items={[
          {
            label: <span className='MonitorResourceWrapper__TabHeader'><AiFillAndroid/> <span className='MonitorResourceWrapper__TabText'>Applications</span></span>,
            key: '1',
            children: <Applications />,
          },
          {
            label: <span className='MonitorResourceWrapper__TabHeader'><AiFillApple/> <span className='MonitorResourceWrapper__TabText'>Resources</span></span>,
            key: '2',
            children: <Resources />,
          },
        ]}
      />
    </main>
  );
}

export default App;
