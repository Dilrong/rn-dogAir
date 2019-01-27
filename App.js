import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GoodAir, SoSoAir, BadAir, VeryBadAir } from './components';
import { AdMobBanner } from 'expo';

export default class App extends React.Component {
  state={
  }

  componentDidMount() {
    this._getAirInfo(this._getlocation);
  }

  _getAirInfo = async (lat, long) => {
    const airs = await this._callAirInfo(lat, long)
    this.setState({
        city: airs.data.city,
        aqius: airs.data.current.pollution.aqius,
        tp: airs.data.current.weather.tp,
        pr: airs.data.current.weather.pr,
        hu: airs.data.current.weather.hu,
        ws: airs.data.current.weather.ws,
    })
  }

  _callAirInfo = async (lat, long) => {
    return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&rad=500&key=AZezEShyHMiEa8789`)
    .then(request => request.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  _getlocation = navigator.geolocation.getCurrentPosition(position => {
    this._getAirInfo(position.coords.latitude, position.coords.longitude)
  })

  _findDust = (aqius) => {
    if(aqius < 30){
      return <GoodAir
      city={this.state.city}
      aqius={this.state.aqius}
      />
    }else if(aqius > 30 && aqius < 80){
      return <SoSoAir
      city={this.state.city}
      aqius={this.state.aqius}
      />
    }else if(aqius > 80 && aqius < 150){
      return <BadAir
      city={this.state.city}
      aqius={this.state.aqius}
      />
    }else if(aqius > 150){
      return <VeryBadAir
      city={this.state.city}
      aqius={this.state.aqius}
      />
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this._findDust(this.state.aqius)
      }
      <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-5210543205621832/4350193804"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBanner: {
    width: '100%',
    bottom: 0
  },
});
