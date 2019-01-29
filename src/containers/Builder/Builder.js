import React, {Component} from 'react';
import InfoItems from "../../components/InfoItems";
import axios from 'axios';
import CountryList from "../../components/CountryList";

class Builder extends Component {

    state = {
        countryList: [],
        extraInfo: [],
        flag: false,
    };


    componentDidMount() {

        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            let copy = this.state.countryList;
            response.data.map(item => {
                copy.push(item.name);
                return copy;
            });
            this.setState({countryList: copy});

        }).catch(error => {
            console.error(error);
        });

    }

    fetchIt(event) {

        const country = event.currentTarget.textContent;
        let countryInfo = null;

        axios.get('https://restcountries.eu/rest/v2/name/' + country).then(response => {
            countryInfo = response.data[0];
            return Promise.all(response.data[0].borders.map(item => {
                return axios.get('https://restcountries.eu/rest/v2/alpha/' + item).then(response => {

                    return response.data.name;
                });
            }));
        }).then(item => {
            countryInfo.borders = item;
            this.setState({extraInfo: countryInfo, flag: true});
        }).catch(error => {
            console.error(error);
        });
    }

    render() {

        return (
            <div className='container'>
                <CountryList flag={this.state.flag} array={this.state.countryList} onClick={this.fetchIt.bind(this)}/>
                <div className="info_div">

                    {this.state.flag ? <InfoItems obj={this.state.extraInfo}  /> : <div className='empty_sign'><h1>Please Select Country</h1></div>}

                </div>
            </div>)
    }
}

export default Builder;