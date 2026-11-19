import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      { name: 'Pikachu', cardNumber: 25 },
      { name: 'Voltorb', cardNumber: 100 },
    ],
    title: 'ELECTRIC', icon: 'lightning-bolt', bgcolor: '#ffffc1', rowBg: '#ffffc1'
  },
  {
    data: [
      { name: 'Charmander', cardNumber: 4 },
      { name: 'Growlithe', cardNumber: 58 },
    ],
    title: 'FIRE', icon: 'fire', bgcolor: '#fdc2af', rowBg: '#fdc2af'
  },
  {
    data: [
      { name: 'Squirtle', cardNumber: 7 },
      { name: 'Psyduck', cardNumber: 54 },
    ],
    title: 'WATER', icon: 'water', bgcolor: '#A8D8EA', rowBg: '#A8D8EA'
  },
  {
    data: [
      { name: 'Bulbasaur', cardNumber: 1 },
      { name: 'Oddish', cardNumber: 43 },
    ],
    title: 'GRASS', icon: 'leaf', bgcolor: '#A9DFBF', rowBg: '#A9DFBF'
  },
];

const renderItem = ({ item, section }) => {
  const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`;

  return (
      <TouchableOpacity
          style={[styles.opacityStyle, { backgroundColor: section.rowBg }]}
          onPress={() => Alert.alert(item.name + ' is selected!')}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              title="ADD POKEMON"
              onPress={() => Alert.alert('Yet to learn how to add new pokemon!')}
          />
        </View>

        <SectionList
            sections={datasource}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 10 }}
            renderSectionHeader={({ section: { title, icon, bgcolor } }) => (
                <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                  <MaterialCommunityIcons name={icon} size={20} color="#333" /> {title}
                </Text>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  opacityStyle: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 8,
  },

  textStyle: {
    fontSize: 18,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    flex: 1,
  },
  cardImage: {
    width: 150,
    height: 210,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    marginBottom: 10,
  },
});