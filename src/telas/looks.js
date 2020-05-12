import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

const looks = [
  {
    _id: 'id_do_look_1',
    name: 'nome do look 1',
    description: 'descrição do look 1',
    clothe_torso: {
      // Informações da roupa do tronco
    },
    clothe_leg: {
      // Informações da roupa das pernas
    },
    clothe_feet: {
      // Informações do calçado
    },
  },

  {
    _id: 'id_do_look_2',
    name: 'nome do look 2',
    description: 'descrição do look 2',
    clothe_torso: {
      // Informações da roupa do tronco
    },
    clothe_leg: {
      // Informações da roupa das pernas
    },
    clothe_feet: {
      // Informações do calçado
    },
  },
];

export default class Looks extends Component {
  render() {
    return (
      <>
        <Text style={styles.title}>looks</Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={looks}
            keyExtractor={look => look._id}
            renderItem={({ item: look }) => (
              <View style={styles.lookContainer}>
                <Text>{look.name}</Text>
              </View>
            )}
            style={styles.lookList}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#C88E89',
  },

  lookList: {
    //
  },

  lookContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});
