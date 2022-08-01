
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h2>ayan rana</h2>
      {/* Grab baseurl from requests then send to Row.js using props */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}
 
export default App;
 