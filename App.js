import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Image 
      style={styles.cabecinha}
        source={{
          uri: 'https://meusbichos.com.br/wp-content/uploads/2021/05/COMBATE-2022-07-04T103922.278-1024x576.jpg'
        }}>
      </Image>
      <Text style={styles.nome}>Galinha Topetuda</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#0e0238',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    padding: 15,
    width: '100%',
  },
  cabecinha: {
    width: 130,
    height: 100,
    borderColor: '#565657',
    borderWidth: 3,
    borderRadius: 60,
  },
  nome: {
    color: 'white',
    marginRight: 20,
    fontWeight: 900,
    fontSize: 28,
  }
});
