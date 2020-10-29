import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, Image, ImageBackground, ActivityIndicator } from 'react-native';
import BarItem from './BarItem';
import { getBar } from '../Api/barApi';
import * as Font from 'expo-font';



let customFonts = {
    'Pacifico': require('../assets/fonts/Pacifico-Regular.ttf'),
    'Acme': require('../assets/fonts/Acme-Regular.ttf'),
    'Kalam': require('../assets/fonts/Kalam-Regular.ttf'),
};

class ListBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bars: [],
            titre: "Never's Bars",
            isLoading: true,
            fontsLoaded: false
        }
    }
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    componentDidMount() {
        this._loadFontsAsync();
        this.setState({ isLoading: true }) // Lancement du chargement
        getBar().then((data) => {
            this.setState({
                bars: data,
                isLoading: false
            })
        })

    }
    _displayLoading() {
        if (this.state.isLoading && !this.state.fontsLoaded) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color='#0000FF' />
                </View>
            )
        }
    }
    _displayDetailBar = (id) => {

        this.props.navigation.navigate('TabDetail', {
          screen: 'Detail',
          params : { id: id},
        })
    }
    render() {
            return (
                <ImageBackground source={require('../Images/fond.jpg')} style={styles.container}>
                        <View style={styles.title_container}>
                            <Text style={styles.title}>{this.state.titre}</Text>
                            <Image
                                style={styles.logo}
                            source={require('../Images/bar-sf.png')}
                            />
                    </View>
                {this._displayLoading()}
                <View style={styles.card}>
                    <View>
                        <FlatList
                            data={this.state.bars}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <BarItem bar={item} displayDetailBar={this._displayDetailBar}/>}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      backgroundColor: 'white',
      opacity: 0.8

    },
    title_container: {
      height: 100,
      paddingHorizontal: 4,
      flexDirection: 'row',
      justifyContent: "space-around",
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#2651D4',
      backgroundColor: '#E2D537'

    },
    title: {
      fontSize: 40,
      fontFamily: 'Pacifico',
      alignItems: 'center',
      textAlignVertical: "center",
      color: '#2651D4'

    },
    logo: {
      width: 100,
      height: 100

    },
    loading_container: {
        // flex:1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }
});


export default ListBar
