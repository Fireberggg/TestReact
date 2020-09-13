import React from 'react';

import './StarshipPage.css';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {
    return <StarshipList selectItemFromList={(itemId) => history.push(itemId)} />
}

export default withRouter(StarshipPage);

