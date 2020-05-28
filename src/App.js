import React from "react";

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import { fetch } from './Api';  //automatically fetch index.js.No need to mention after ./api.//

class App extends React.Component{

    state={
        data : {} ,
        country: '',
    }
    
    async componentDidMount(){
        const fetcheddata=await fetch();
        this.setState({data : fetcheddata});
            // populating state.data
        }

    
        handleCountryChange = async (country)=>{
        const fetcheddata=await fetch(country);
        this.setState({data:fetcheddata, country:country});
    }

    render(){
        const { data, country } = this.state;  //storing locally from this.state.data

        return(
            <div className={styles.container}>
                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
               
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;