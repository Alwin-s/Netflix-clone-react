
import './App.css';
import Banner from './components/Banner.jsx';
import Nav from './components/Nav.jsx';
import Row from './components/Row';
import requests from './request.js';


function App() {
  return (
    <div className="App">
      <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals} /><br />
    <Row isPoster={true} title="NetflixOrginals" fetchUrl={requests.fetchNetflixOriginals} /> <br />
    <Row isPoster={true} title="Trending in India" fetchUrl={requests.fetchTrending} /><br />
    <Row isPoster={true} title="Top-Rated" fetchUrl={requests.fetchTopRated} /><br />
    <Row isPoster={true} title="Action-Movies" fetchUrl={requests.fetchActionMovies} /><br />
    <Row isPoster={true} title="Comedy-Movies" fetchUrl={requests.fetchComedyMovies} /><br />
    <Row  isPoster={true} title="Horror-Movies" fetchUrl={requests.fetchHorrorMovies} /><br />
    <Row isPoster={true} title="Romantic-Movies" fetchUrl={requests.fetchRomanceMovies} /><br />
    <Row isPoster={true} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
