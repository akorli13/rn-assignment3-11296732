import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

const DATA = [
 { id: "1", title: "Mobile App Development"},
 { id: "2", title: "Web Development"},
 { id: "3", title: "Push Ups"},
 { id: "4", title: "Crunches"},
 { id: "5", title: "Lawn Mowing"},
 { id: "6", title: "Biking"},
 { id: "7", title: "Swimming"},
 { id: "8", title: "Rock Climbing"},
 { id: "9", title: "Go Karting"},
 { id: "10", title: "Boxing"},
 { id: "11", title: "Cyber Security"},
 { id: "12", title: "Completing a Book"},
 { id: "13", title: "Gaming"},
 { id: "14", title: "Napping"},
 { id: "15", title: "Web Designing"},

]

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
  


export default function OngoingTask() {
  return (
    <View style={styles.container}>


      <Text style={styles.text}>Ongoing Task</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
        
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 35,


  },
  
  text:{
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 35,
  },
  item: {
    backgroundColor: "#FBF9F7",
    height: 128, 
    width: 350,
    marginTop: 10,
    paddingLeft: 20,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E8D1BA",
    borderRadius: 15,

  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  }


  
})