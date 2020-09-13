import DetailsWithData from "../HOCHelpers/DetailsWithData";
import ItemDetails from "../ItemDetails/ItemDetails";
import WithSwapiService from "../HOCHelpers/WithSwapiService";

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getCertainItem: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getCertainItem: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getCertainItem: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

const PersonDetails = WithSwapiService( DetailsWithData(ItemDetails), mapPersonMethodsToProps );
const PlanetDetails = WithSwapiService( DetailsWithData(ItemDetails), mapPlanetMethodsToProps );
const StarshipDetails = WithSwapiService( DetailsWithData(ItemDetails), mapStarshipsMethodsToProps );

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}