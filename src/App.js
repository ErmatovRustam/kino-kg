import './App.css'
import requests from './components/requests'
import Row from './components/Row/Row'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'

function App() {
  return <div className="App">
    <Nav />
    <Banner />
    <Row title='ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true }/>
    <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
    <Row title='TRENDING' fetchUrl={requests.fetchTrending} />
    <Row title='ACTION MOIVES' fetchUrl = {requests.fetchActionMovies}/>
    <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies }/>
    <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
    <Row title='DOCUMENTARIES MOVIES' fetchUrl={requests.fetchDocumentaries} />
    <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
    </div>
}

export default App
