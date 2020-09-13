import React from 'react';
import './RandomPlanet.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PropTypes from 'prop-types';

class RandomPlanet extends React.Component {

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const { updateInterval } =  this.props;
        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet(), updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    }

    onError = (err) => {
        this.setState({error: true, loading: false})
    }

    updatePlanet = () => {
        const randomId = Math.floor(Math.random()*25) + 3;
        this.props.getData(randomId)
            .then(planet => {
                this.onPlanetLoaded(planet)
            })
            .catch(err => this.onError(err))
    }

    render() {
        const { planet, loading, error } = this.state;
        const { showRandomPlanet, toggleRandomPlanet } = this.props;

        const hasData = !(loading || error || !showRandomPlanet);

        const errorMessage = error ? <div className="spinner-container"><ErrorIndicator /></div> : null;
        const spinner = loading ? <div className="spinner-container"><Spinner /></div> : null;
        const content = hasData ? <RandomPlanetView planet={planet}/> : null;

        return (
            <React.Fragment>
                <div className='random-planet card'>
                    {errorMessage}
                    {spinner}
                    {content}    
                </div>
                <button type="button" className="btn btn-outline-secondary random-planet-btn"
                    onClick={toggleRandomPlanet}>Toggle Random Planet</button>     
            </React.Fragment>
 

        )

    }
}

RandomPlanet.defaultProps = {
    updateInterval: 10000,
    showRandomPlanet: true
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number,
    toggleRandomPlanet: PropTypes.func.isRequired,
    showRandomPlanet: PropTypes.bool,
}

const RandomPlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet

    return (
        <React.Fragment>
            <div className="random-planet__image-wrapper">
                <img className='random-planet__image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>

            <div className="card-body random-planet-body">
                <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className='term'>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default RandomPlanet;
