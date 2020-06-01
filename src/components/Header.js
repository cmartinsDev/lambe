import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Platform } from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
  render ()  {
    return (
      <View style={styles.container} >
        <View style={styles.rowContainer}>
          <Image source={} style={styles.image}/>
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,

  }
})