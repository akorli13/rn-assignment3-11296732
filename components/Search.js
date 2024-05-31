import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";

export default function Search() {
  return (
    <View style={styles.container}>  
    
        <View style={styles.placeholderContainer}>
          <View style={styles.searchIcon}>

          <Icon.Search height={25} width={25} strokeWidth={2} stroke="black"/>
          </View>
        <TextInput style={styles.search} placeholder='Search' placeholderTextColor={"rgba(0,0,0,1)"}/>
        </View >

        <TouchableOpacity style={styles.slider}>
    <Icon.Sliders height={25} width={25} strokeWidth={3} stroke="white" />
        </TouchableOpacity>

     
    </View>
  )
}







const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  marginTop: 20,
  marginLeft: 20,

    
  },

  placeholderContainer:{
    height: 48,
    width: 260,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    
    
    
  },
  search: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,
    
  },
  searchIcon: {
    marginLeft: 10,
  },

  slider: {
    backgroundColor: "#F0522F",
    height:45,
    width:45,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  transform: [{rotate: "90deg"}],

  }
  

})


