import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

export default function PlanetList({ planeta, index, onPress }) {
  return (
    <TouchableOpacity key={index} onPress={() => onPress(planeta)}>
      <View style={styles.planetCard}>
        <Text style={styles.textTitle}>{planeta.nome}</Text>
        <Image source={{ uri: planeta.img }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
        <Text style={[styles.textCard, { fontWeight: 'bold' }]}>{planeta.descricaoBreve}</Text>
        <Text style={styles.textCard}>Área de Superfície: {planeta.areaSuperficieKm2.toLocaleString('pt-BR')} km²</Text>
        <Text style={styles.textCard}>Satélites: {planeta.quantidadeSatelites}</Text>
        <Text style={styles.textCard}>Velocidade Orbital: {planeta.velocidadeOrbitalMediaKmS} km/s</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({

  planetCard: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 20,
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 1,
  },

  textTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  textCard: {
    color: 'white',
    fontSize: 16,
    marginVertical: 3,
  }
});
