import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View style={styles.categories}>
    
        <Text style={styles.text}>Categories</Text>
      <ScrollView
      showsHorizontalScrollIndicator= {false}
       horizontal style={styles.scrollview}>
        
      <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Exercise</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/exercise.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Study</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/Study.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Code</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/code.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Cook</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/cook.jpg")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Sleep</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/sleep.jpg")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Game</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/game.jpg")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Read</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/read.png")} />
        </View>

        <View style={styles.category}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Drive</Text>
            <Text style={styles.text2}>12 Tasks</Text>
          </View>
          <Image style={styles.image} source={require("../assets/drive.jpg")} />
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  categories: {
    marginTop:30,
    marginLeft:35,
  }, 
  text: {
    fontSize: 20,
    fontWeight: "700",
  },

  scrollview: {
    marginTop: 10,
  },


  category: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 192,
    width: 186,
    marginLeft: 10,

  },

  texts: {
    marginLeft:10,
    marginTop: 5,
  },

  text1: {
    fontSize: 16,
    fontWeight: "700",
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
  },

  image: {

    height: 132,
    width: 132,
    
  }

})