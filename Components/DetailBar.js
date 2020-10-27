import React from 'react';
import MapView, { Marker ,PROVIDER_GOOGLE } from "react-native-maps";
import { getSingleBar} from '../Api/barApi'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'


 class DetailBar extends React.Component {

  constructor(props){
    super(props);{

      this.state = {
        bars: [],
        isLoading: false,
        markers: []
      }
    }
  };

  _getBarDetail(){
    const { route , navigation } = this.props;
    const { id } = route.params;
    getSingleBar(id).then( data => {

      this.setState({bars: data, isLoading:false});

    })
  };

  _barMarkers(id, lat, long, name) {
    this.state.markers.push({
      id: id,
      title : name,
      coordinates: {
        latitude: lat,
        longitude: long
      }
    });
    this.setState({ markers: this.state.markers });

  }

  getCoord() {
    const {bars, isLoading} = this.state
    const id = bars.id;
    const lat = bars.latitude
    const long = bars.longitude
    const name = bars.nom
    this._barMarkers(id, lat, long, name);
  }

  mapMarkers() {
    return this.state.markers.map(
      (markers) =>
      <Marker
        key={markers.id}
        coordinate={{
          latitude: markers.coordinates.longitude,
          longitude: markers.coordinates.latitude
        }}
        title={markers.title}
      >
      </Marker>
    )
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this._getBarDetail();

  };

  componentDidUpdate(previousProps, previousState) {
    if (this.state.bars.latitude != previousState.bars.latitude) {

      this.getCoord();

    }
  }

render() {

  const {bars, isLoading, markers, } = this.state

  if (isLoading ){
    return <View style ={{flex :1,justifyContent: 'center',}}><ActivityIndicator size="large" color ="red"/></View>
  }

  return (


    <View style={styles.container}>

      <View style= {styles.head}>
        <Text>{bars.photo}</Text>
        <Text style ={styles.title}>{bars.nom} </Text>
      </View>

      <View style= {styles.contact}>
        <Text style= {styles.text}><Text style = {{textDecorationLine:"underline"}}>Telephone :</Text> {bars.telephone}</Text>
        <Text><Text style = {{textDecorationLine:"underline"}}>Adresse :</Text> {bars.adresse}</Text>
      </View>

      <View style ={styles.horaire}>
        <Text style = {{textDecorationLine:"underline"}}>Horaires : </Text>
        <Text>{bars.horaire_jour}</Text>
      </View>

      <View style= {styles.text}>
        <Text>{bars.reseau_sociaux}</Text>
      </View>

      <View style= {styles.mapcontainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          zoomEnabled={true}
          region={{
             latitude: 46.9896,
             longitude: 3.159,
             latitudeDelta: 0.0440,
             longitudeDelta: 0.0442,
           }}>
           {this.mapMarkers()}
        </MapView>
      </View>
    </View>

    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 3,
    margin : 5,
  },
  title :{
    fontSize: 30,
    textAlign: "center",

  },
  text:{
    fontSize:15,
  },
 map: {
   height: 250,
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
 horaire:{
   flex:1.2,

   alignSelf: "flex-end",
 },
 head :{
   flex:0.8,
 },
 contact :{
   flex:0.5,
   padding:0,
 },
 mapcontainer :{
   flex:2,
 },
});

export default DetailBar
