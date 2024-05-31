import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import OngoingTask from './components/OngoingTask';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
