import React from 'react';

import { getCommentsBar} from '../Api/barApi'
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


class Comments extends React.Component {

 constructor(props){
   super(props);{

     this.state = {
       comments: [],
       isLoading: false,
     }
   }
 };

 _getComment(){
   const { route , navigation } = this.props;
   const { id } = route.params.params;

   getCommentsBar(id).then( data => {
     this.setState({comments: data, isLoading:false});

})
 }

 componentDidMount() {
   this.setState({ isLoading: true });
   this._getComment();

 };

 render() {

   const {isLoading, comments} = this.state

   if (isLoading){
     return <View style ={{flex :1,justifyContent: 'center',}}><ActivityIndicator size="large" color ="red"/></View>
   }

   return (
     <View style = {styles.containerMain}>
     <View style = {styles.container}>
     <FlatList
        data={this.state.comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
         return(
           <View style = {styles.containerList}>
             <Text style ={styles.pseudo}>{item.login}</Text>
             <Text style ={styles.message}>{item.content}</Text>
           </View>
         )
       }
     }
     />
</View>
<View style ={styles.containerInput}>
     <TextInput
     placeholder= ' pseudo'
     style={styles.input}
     />
     <TextInput
     placeholder= ' message'
     style={styles.input}
     />
     <Button title='submit' onPress={""} />
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
export default Comments
