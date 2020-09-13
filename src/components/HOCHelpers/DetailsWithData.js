import React from 'react';
import Spinner from '../Spinner/Spinner';

const DetailsWithData = (View) => {
    return class extends React.Component {
        state = {
            selectedItem: {},
            loading: false,
            image: null
        }
    
        componentDidMount() {
            this.updateItem();
        }
    
        componentDidUpdate(prevProps) {
            if ( this.props.itemId !== prevProps.itemId ) {
                this.setState({loading: true});
                this.updateItem();
            }
        }
    
        updateItem = () => {
            const { itemId, getCertainItem, getImageUrl } = this.props;
            if ( !itemId ) {
                return;
            }
    
            getCertainItem(itemId)
                .then(selectedItem => this.setState({ selectedItem, loading: false, image: getImageUrl(selectedItem) }))
        }

        render () {
            const { selectedItem, loading, image } = this.state;
            const content = <View { ...this.props } selectedItem={selectedItem} image={image}/>

            const showSpinner = loading ? <div className='person-details card person-details-spinner'><Spinner color={'#fff'}/></div> : null;
            const notSelected = !selectedItem.name ? <span>Select person from list</span> : null;
            const componentWithData = selectedItem.name && !loading ? content : null;

            return (
                <React.Fragment>
                    {showSpinner}
                    {notSelected}
                    {componentWithData}
                </React.Fragment>
            )
        }
    }
}

export default DetailsWithData;