import React from 'react';
import { SwapiServiceConsumer } from '../swapiServiceContext';

const WithSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService => {
                        const serviceProps = mapMethodsToProps(swapiService)
                        return (
                            <Wrapped {...props} {...serviceProps}></Wrapped>
                        )
                    })
                }
            </SwapiServiceConsumer>
        )
    }
}

export default WithSwapiService;