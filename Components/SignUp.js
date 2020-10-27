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
} from 'react-native'
import {addUser} from '../Api/barApi'


 class SignUp extends React.Component {

   constructor(props){
     super(props);{
       this.state = {
         values:{
         login: '',
         email: '',
         phone_number: '',
         password: '',
         // favorites:'',
         // avatar: '',

       },
       login_input :'',
       email_input:'',
       phone_input:'',
       password_input:'',
       // favorites_input:'',
       // avatar_input:'',


       }
     }
   }

   signUp=()=>{

     const {login_input, password_input, email_input, phone_input} = this.state
     const values = {
               login: login_input,
               password: password_input,
               email: email_input,
               phone_number: phone_input,
             }

     addUser(values)
                .then((responseData => {
                  console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
                }))


  };

   render() {
     const {login_input, password_input, email_input, phone_input,values} = this.state

     return(
      <View>
        <Text>SignUp test</Text>
        <TextInput
        placeholder= 'nom'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({login_input: text})}
        />
        <TextInput
        placeholder= 'email'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({email_input: text})}
        />
        <TextInput
        placeholder= 'telephone'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({phone_input: text})}
        />
        <TextInput
        placeholder= 'password'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({password_input: text})}
        />

        <Button title='submit' onPress={this.signUp}/>
      </View>
 )
}
 }

 export default SignUp
