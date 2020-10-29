import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

// import FadeIn from '../Animations/FadeIn'


class BarItem extends React.Component {


    render() {
        const { bar, displayDetailBar } = this.props
        return (
            // <FadeIn>
                <TouchableOpacity
                     style={styles.main_container}
                     onPress={() => displayDetailBar(bar.id)}>

                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                            <Text style={styles.ad_text}>{bar.adresse}</Text>
                            <Text style={styles.ad_text}>{bar.telephone}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            //</FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      flexDirection: 'row',
      borderBottomColor: "#C70A0A",
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
        fontFamily: 'Kalam',
        fontWeight: 'bold',
        fontSize: 24,
        flexWrap: 'wrap',
        padding: 5,
        color: '#2651D4'
    },
    ad_text: {
        fontFamily: 'Kalam',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2651D4'

    }

})

export default BarItem
