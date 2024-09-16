import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';

export default function PlanetInfo({ visible, onClose, planeta, onNext, onPrevious }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={{ uri: planeta.img }} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 3 }} />
                    <Text style={styles.modalTitle}>{planeta.nome}</Text>
                    <Text style={styles.modalSubtitle}>{planeta.descricaoBreve}</Text>

                    <Text style={styles.modalText}>{planeta.descricao}</Text>

                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.modalTextItems}>Área de Superfície: {planeta.areaSuperficieKm2.toLocaleString('pt-BR')} km²</Text>
                        <Text style={styles.modalTextItems}>Satélites: {planeta.quantidadeSatelites}</Text>
                        <Text style={styles.modalTextItems}>Velocidade Orbital: {planeta.velocidadeOrbitalMediaKmS} km/s</Text>
                        <Text style={styles.modalTextItems}>Período de Rotação: {planeta.periodoRotacaoDias} dias</Text>
                    </View>

                    {/* Botões para navegar e fechar */}
                    <View style={styles.buttonContainer}>
                        <Button title="Anterior" onPress={onPrevious} disabled={!onPrevious} />
                        <Button title="Fechar" onPress={onClose} />
                        <Button title="Próximo" onPress={onNext} disabled={!onNext} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo semitransparente
    },
    modalView: {
        backgroundColor: '#000000',
        width: '95%',
        height: '75%',
        borderWidth: 3,
        borderColor: '#1d0c35',
        borderRadius: 20,
        padding: 21,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
        justifyContent: 'space-between'
    },

    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white',
        alignSelf: 'center',
    },

    modalSubtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#757575',
        alignSelf: 'center',
        textAlign: 'center',
    },

    modalText: {
        fontSize: 18,
        marginBottom: 8,
        color: 'white',
        textAlign: 'justify',
    },

    modalTextItems: {
        fontSize: 18,
        marginBottom: 4,
        marginTop: 4,
        color: 'white',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
});
