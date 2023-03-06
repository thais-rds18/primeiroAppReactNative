import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [text1, onChangeText1] = React.useState('Comente aqui');
  const [text2, onChangeText2] = React.useState('Comente aqui');
  const [text3, onChangeText3] = React.useState('Comente aqui');


  return (
    <>
      <View style={styles.container1}>
        <Image
          style={styles.cabecinha}
          source={{
            uri: 'https://meusbichos.com.br/wp-content/uploads/2021/05/COMBATE-2022-07-04T103922.278-1024x576.jpg'
          }}>
        </Image>
        <View>
          <Text style={styles.nome}>Galinha Topetuda</Text>
          <Text style={styles.descricao}>📅 2 years old {"\n"}
            👨‍🌾 Natural from RingCity{"\n"}
            🚣🏻‍♂️ Looking for adventures{"\n"}
            💬 Stay away from the pan</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container3}>
          <Image
            style={styles.post}
            source={{
              uri: 'https://www.cacklehatchery.com/wp-content/uploads/2015/01/white_polish2.jpeg'
            }}>
          </Image>
          <Text style={styles.legenda}>📸  TBT antes de cortar o cabelo </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
          />
          </View>
          <View style={styles.container3}>
          <Image
            style={styles.post}
            source={{
              uri: 'https://rusticchic.files.wordpress.com/2009/11/white-featherhead-5.jpg?w=200&h=300'
            }}>
          </Image>
          <Text style={styles.legenda}>Sim, eu já fui do rock 🤘</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
          />
          </View>
          <View style={styles.container3}>
          <Image
            style={styles.post}
            source={{
              uri: 'https://images.unsplash.com/photo-1589922583749-6b8473a85048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbmclM0J8ZW58MHx8MHx8&w=1000&q=80'
            }}>
          </Image>
          <Text style={styles.legenda}>Esse dia foi loucooo 😂😂😂</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
          />
          </View>
        </ScrollView>
      </View>
    </>
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
    zIndex: 99,
  },
  cabecinha: {
    width: 120,
    height: 100,
    borderColor: '#565657',
    borderWidth: 2.5,
    borderRadius: 70,
  },
  nome: {
    color: 'white',
    marginLeft: 20,
    fontWeight: 900,
    fontSize: 28,
  },
  descricao: {
    color: 'white',
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 14,
    width: 250,
    justifyContent: 'space-evenly',
  },
  container2: {
    marginTop: '42%',
    padding: 0,
    width: '100%',
    height: 'auto',
  },
  scrollView: {
    backgroundColor: '#dfe1f0',
    marginHorizontal: 0,
    marginVertical: 0,
    padding: 15,
  },
  container3: {
    padding: 5,
    width: '100%',
    height: 'auto',
    borderColor: '#22214d',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 40,
  },
  post: {
    width: '100%',
    height: 300,
    margin: 'auto',
    borderColor: '#565657',
    borderWidth: 1,
    borderRadius: 5,
  },
  legenda: {
    color: '#0e0238',
    marginLeft: 15,
    fontWeight: 700,
    fontSize: 20,
    padding: 10,
  },
  input: {
    margin: 10,
    borderColor: '#22214d',
    height: 50,
    borderWidth: 0.5,
    textAlign: 'justify',
    padding: 5,
    borderRadius: 5,
  }
});
