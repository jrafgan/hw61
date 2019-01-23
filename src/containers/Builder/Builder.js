import React, {Component} from 'react';
import InfoItems from "../../components/InfoItems";
import axios from 'axios';

class Builder extends Component {

    state = {
      countryList: [],
    };
    componentDidMount() {

        const BASE_URL = 'https://restcountries.eu/rest/v2/all';

        axios.get(BASE_URL).then(response => {
            console.log(response.data);
            this.setState({countryList: response.data});
            return response.data;

        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className="list_div">Country List</div>
                <div className="info_div">
                    <InfoItems/>
                </div>
            </div>
        );
    }
}

export default Builder;