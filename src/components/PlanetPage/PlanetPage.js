import React, { Component } from 'react';

import './PlanetPage.css';
import Row from '../Row/Row';
import Record from '../Record/Record';
import { PlanetList, PlanetDetails } from '../sw-components';

export class PlanetPage extends Component {
    
    state = {
        selectedPlanet: null
    }

    onPlanetSelected = (id) => {
        this.setState({selectedPlanet: id})
    }

    render() {
        const { selectedPlanet } = this.state;
        
        const planetList = (
            <PlanetList selectItemFromList={this.onPlanetSelected} />
        );

        const ItemElement = (
            <PlanetDetails
                itemId={selectedPlanet}>
                    <Record field='population' label='Population'></Record>
                    <Record field='rotationPeriod' label='Rotation Period'></Record>
                    <Record field='diameter' label='Diameter'></Record>
            </PlanetDetails>
        )

        return <Row left={planetList} right={ItemElement}></Row>
    }
}

export default PlanetPage;
