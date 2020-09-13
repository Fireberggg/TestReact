import React from 'react';
import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import SwapiService from '../../services/swapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import PlanetPage from '../PlanetPage/PlanetPage';
import StarshipPage from '../StarshipPage/StarshipPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components';
import Record from '../Record/Record';

class App extends React.Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      const newShowState = !showRandomPlanet;
      return { showRandomPlanet: newShowState };
    })
  }

  onPersonSelected = (id) => {
    this.setState({selectedPerson: id})
  }

  render() {
    const { showRandomPlanet } = this.state;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className='container'>
            <Header />
            <RandomPlanet toggleRandomPlanet={this.toggleRandomPlanet} showRandomPlanet={showRandomPlanet}/>

            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
            <Route path='/people/:id?' component={PeoplePage} />
            <Route path='/planets' component={PlanetPage} />
            <Route path='/starships' exact component={StarshipPage} />
            <Route path='/starships/:id' render={({ match }) => {
              const { id } = match.params;
              return (
                <StarshipDetails itemId={id}>
                    <Record field='costInCredits' label='Cost'></Record>
                    <Record field='model' label='Model'></Record>
                    <Record field='manufacturer' label='Manufacturer'></Record>
                </StarshipDetails>)
            }} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
