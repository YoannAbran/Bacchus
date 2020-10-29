import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { loginUser} from '../Api/barApi'



 class Login extends React.Component {

   constructor(props){
     super(props);{
       this.state = {
         values:{
         login: '',
         password: '',
       },
       login_input :'',
       password_input:'',

       }
     }
   }

   login=()=>{

     const {login_input, password_input} = this.state
     const values = {
               login: login_input,
               password: password_input,
   }
   // console.log(this);
     loginUser(values)
                .then((responseData => {
                  console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
                }))


};

   render() {

      const {login_input, password_input,values} = this.state
     return(

   <View>
    <Text>Login test</Text>
     <TextInput
     placeholder= 'nom'
     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText={text => this.setState({login_input: text})}

     />

     <TextInput
     placeholder= 'password'
     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText={text => this.setState({password_input: text})}
     />

     <Button title='submit' onPress={this.login}/>

   </View>
 )
}
 }

 export default Login
