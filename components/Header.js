import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hello , Dev</Text>
        <Text style={styles.text2}>14 tasks today</Text>
      </View>
      <View style={styles.profileContainer}>
      <Image style={styles.profile} source={require("../assets/profile.png")} />   
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
      },
  text: {
    fontSize: 32,
    fontWeight: "700",
  },
  text2: {
    fontSize: 12,
    fontWeight: "500",
  },
  profile: {
    height: 45,
    width: 45,
  },

  profileContainer: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
  }

})
