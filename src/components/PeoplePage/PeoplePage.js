import React from 'react';

import './PeoplePage.css';
import Row from '../Row/Row';
import Record from '../Record/Record';
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({history, match}) => {
    
    const { id } = match.params;

    const personList = (
        <PersonList selectItemFromList={(id) => history.push(id)} />
    );

    const ItemElement = (
        <PersonDetails
            itemId={id}>
                <Record field='gender' label='Gender'></Record>
                <Record field='eyeColor' label='Eye Color'></Record>
                <Record field='birthYear' label='Birth Year'></Record>
        </PersonDetails>
    )

    return <Row left={personList} right={ItemElement}></Row>
}

export default withRouter(PeoplePage);
