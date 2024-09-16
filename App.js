import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { planetas } from './planetas';
import PlanetInfo from './PlanetInfo';
import PlanetList from './PlanetList';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

  const handlePress = (index) => {
    setSelectedPlanetIndex(index);  // Armazena o índice do planeta selecionado
    setModalVisible(true);          // Abre o modal
  };

  const closeModal = () => {
    setModalVisible(false);         // Fecha o modal
    setSelectedPlanetIndex(null);   // Limpa o planeta selecionado
  };

  const handleNext = () => {
    if (selectedPlanetIndex < planetas.length - 1) {
      setSelectedPlanetIndex(selectedPlanetIndex + 1);  // Vai para o próximo planeta
    }
  };

  const handlePrevious = () => {
    if (selectedPlanetIndex > 0) {
      setSelectedPlanetIndex(selectedPlanetIndex - 1);  // Vai para o planeta anterior
    }
  };




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1d0c35' }}>
      <ImageBackground
        source={{ uri: "https://i.pinimg.com/originals/d8/00/22/d800229588e417a5ec2d71f4489de90b.jpg" }}
        style={styles.bgImage}
      >
        <StatusBar style='light' />

        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize: 20 }}>Vamos explorar!</Text>
          <MaterialCommunityIcons name="rocket-launch-outline" size={32} color="white" />
        </View>


        {/* lista os planetas */}
        <ScrollView>
          {planetas.map((planeta, index) => (
            <PlanetList key={index} planeta={planeta} index={index} onPress={() => handlePress(index)} />
          ))}
        </ScrollView>

        {/* Modal exibido ao pressionar o card */}
        {selectedPlanetIndex !== null && (
          <PlanetInfo
            visible={modalVisible}
            onClose={closeModal}
            planeta={planetas[selectedPlanetIndex]}
            onNext={selectedPlanetIndex < planetas.length - 1 ? handleNext : null}
            onPrevious={selectedPlanetIndex > 0 ? handlePrevious : null}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 21,
    justifyContent: 'center',
    backgroundColor: '#1d0c35',
    gap: 15,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#5a5a5a',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'center',
  }
});
