import RandomPlanet from './RandomPlanet';
import WithSwapiService from '../HOCHelpers/WithSwapiService';

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
    }
};

export default WithSwapiService(RandomPlanet, mapPlanetMethodsToProps);