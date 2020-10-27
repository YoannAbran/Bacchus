import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text,TextInput,Button,Alert } from 'react-native'




class SignUp extends React.Component {

  constructor(props){
    super(props);{
      this.state = {
        nom_input: '',
        password_input: '',
        mail_input: '',
        id_evenement_input: ''
      }
    }
  }

  fetchPost = () => {
    fetch('http://172.21.201.23:8080/api/test/auth/signup',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nom: this.state.nom_input,
        password: this.state.password_input,
        mail: this.state.mail_input,
        id_evenement: this.state.id_evenement_input,
      })
    }).then((response)=>response.json())
        .then((responseData) =>{
          if(responseData.nom && responseData.password && responseData.mail && responseData.id_evenement)
        {
          Alert.alert('Utilisateur créer avec succés');
        }
        else{
          Alert.alert(JSON.stringify(responseData.message)); // Alerts doesn't allow arrays or JSONs, so stringify them to view in Alerts
      }
      }
      )
      .catch((error)=>{console.error(error);});
  };

  render(){

  return(


    <ImageBackground source={require('./Img/Beer2.png')} style={{width: '100%', height: '100%'}}>

    <View style={[styles.main_container, {}]}>

    <Text style={[styles.text, {}]}>CREATION DE COMPTE</Text>

    <TextInput
    placeholder= 'Nom'
    style={[ styles.textinput, {  }]}
    onChangeText={text => this.setState({nom_input: text})}

    />
    <TextInput
    placeholder= 'Mot de passe'
    style={[ styles.textinput, {  }]}
    onChangeText={text => this.setState({password_input: text})}

    />
    <TextInput
    placeholder= 'Mail'
    style={[ styles.textinput, {  }]}
    onChangeText={text => this.setState({mail_input: text})}

    />
    <TextInput
    placeholder= 'Evènement'
    style={[ styles.textinput, {  }]}
    onChangeText={text => this.setState({id_evenement_input: text})}

    />

    <Button style={[ styles.button, {  }]} title='Créer un compte' onPress={this.fetchPost}/>

    </View>

      </ImageBackground>






)
}
}

const styles = StyleSheet.create({

  text: {
    fontWeight: "700",
    marginBottom: 5,
    marginTop: 20,
    textAlign: 'center'
  },

  image: {
    flex: 1,
  },

  button: {
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'black',
  },

  main_container: {
    flex: 1,
    marginTop: 20,
    flexDirection: "column"

  },
  textinput: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    height: 50,
    borderColor: 'dodgerblue',
    borderWidth: 3,
    paddingLeft: 5,
    height: 40,

  },

})

export default SignUp
