import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
// import FadeIn from '../Animations/FadeIn'


class BarItem extends React.Component {


    render() {

        const { bar,  nbfav } = this.props

        return (
          
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                            <Text style={styles.ad_text}>{bar.adresse}</Text>
                            <Text style={styles.ad_text}>{bar.telephone}</Text>
                        </View>
                    </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: "#FFE436",
        borderBottomWidth: 4
    },
    content_container: {
        margin: 5
    },
    header_container: {
        flex: 6,
        padding:3

    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 24,
        flexWrap: 'wrap',
        padding: 5,
        color: '#0000FF'
    },
    ad_text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0000FF'
    }

})

export default BarItem
