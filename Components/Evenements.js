import React from 'react';
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
import { getEventsBar,addEventsBar} from '../Api/barApi'

 class Evenements extends React.Component {
   constructor(props){
     super(props)

       this.state = {

           values:{
           titre: '',
           date : '',
           description:'',
         },
         comments: [],
         isLoading: false,
         titre_input :'',
         date_input:'',
         descrition_input:''
       }

   };
   _getEvent(){
     const { route , navigation } = this.props;
     const { id } = route.params.params;

     getEventsBar(id).then( data => {
       this.setState({event: data, isLoading:false});
   })
   }
   addEvent=()=>{
     const { route , navigation } = this.props;
     const { id } = route.params.params;

     const {titre_input, description_input, date_input} = this.state
     const values = {
               titre: titre_input,
               description: description_input,
               date: "2020-10-31 21:00:00",
               id_bar : id,
             }
     addEventsBar(values)
        .then((responseData => {
          console.log(
            "POST",
            "Response Body -> " + JSON.stringify(responseData)
        )
        }))
        this._getEvent()
   };
   componentDidMount() {
     this.setState({ isLoading: true });
     this._getEvent();
   };



   render() {
     const {isLoading, events, titre_input,description_input, date_input} = this.state
     if (isLoading ){
       return <View style ={{flex :1,justifyContent: 'center',}}><ActivityIndicator size="large" color ="red"/></View>
     }
     return (
       <View style = {styles.containerMain}>
       <View style = {styles.container}>
       <FlatList
          data={this.state.event}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
           return(
             <View style = {styles.containerList}>
               <Text style ={styles.pseudo}>{item.titre}</Text>
               <Text style ={styles.message}>{item.description}</Text>
               <Text style ={styles.message}>{item.date}</Text>
             </View>
           )
         }
       }
       />
   </View>
         <View style ={styles.containerInput}>
             <TextInput
             placeholder= ' titre'
             style={styles.input}
             onChangeText={text => this.setState({titre_input: text})}
             />
             <TextInput
             placeholder= 'description'
             style={styles.input}
             onChangeText={text => this.setState({description_input: text})}
             />
             <Button title='submit' onPress={this.addEvent} />
          </View>
       </View>
     )
   }
   }

const styles = StyleSheet.create({

containerMain : {
  flex :1,
},
container : {
  flex :3,
},
containerList : {
  flex :1,
},
containerInput : {
  flex :1,
  margin: 10,
},

pseudo:{
  textAlign: "center",
  backgroundColor : "gold",
  marginVertical : 5,
},

message:{
  paddingVertical:10,
  marginHorizontal:5,
},

input :{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,

},
});

 export default Evenements
