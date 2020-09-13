import React from 'react';
import ItemList from '../ItemList/ItemList';
import WithData from '../HOCHelpers/WithData';
import WithChildFunction from '../HOCHelpers/WithChildFunction';
import WithSwapiService from '../HOCHelpers/WithSwapiService';

const ListWithPeople = WithChildFunction( ItemList, ({name, gender, birthYear}) => (
    <React.Fragment>
        <span>{name}, </span>
        <span className='text-muted'>({gender}, {birthYear})</span>
    </React.Fragment>) );

const ListWithPlanets = WithChildFunction( ItemList, ({name, population, diameter}) => (
    <React.Fragment>
      <span>{name}, </span>
      <span className='text-muted'>({population}, {diameter})</span>
    </React.Fragment>) );

const ListWithStarships = WithChildFunction( ItemList, ({name, costInCredits, model}) => (
    <React.Fragment>
      <span>{name}, </span>
      <span className='text-muted'>({costInCredits}, {model})</span>
    </React.Fragment>) );

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = WithSwapiService( WithData(ListWithPeople), mapPersonMethodsToProps);
const PlanetList = WithSwapiService( WithData(ListWithPlanets), mapPlanetMethodsToProps );
const StarshipList = WithSwapiService( WithData(ListWithStarships), mapStarshipMethodsToProps );

export {
    PersonList,
    PlanetList,
    StarshipList
}