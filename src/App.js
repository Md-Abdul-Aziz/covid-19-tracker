import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  // to get data from api(index.js)
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data: data });                 // data send to state property
    //this.setState({ data });                     // this is also work
  }

  // to get countris from api(index.js)
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data: data, country: country });  // data send to state property
    //this.setState({ data, country: country });      // this is also work

  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>

        <img className={styles.image} src={image} alt="COVID-19" />

        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;