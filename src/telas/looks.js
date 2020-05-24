import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const looks = [
  {
    _id: 'id_do_look_1',
    name: 'nome do look 1',
    description: 'descrição do look 1',
    clothe_torso: {
      image_url:
        'https://static3.tcdn.com.br/img/img_prod/311840/camisa_umbro_gremio_i_2019_jogador_63175_1_20191202180011.jpg',
    },
    clothe_leg: {
      image_url:
        'https://static3.tcdn.com.br/img/img_prod/311840/calca_umbro_gremio_treino_2019_marinho_56159_1_20191202190710.jpg',
    },
    clothe_feet: {
      image_url:
        'https://static.netshoes.com.br/produtos/tenis-umbro-soul-knit-trainer-ii-masculino/26/D21-4975-026/D21-4975-026_zoom1.jpg',
    },
  },

  {
    _id: 'id_do_look_2',
    name: 'nome do look 2',
    description: 'descrição do look 2',
    clothe_torso: {
      image_url:
        'https://images.lojanike.com.br/1024x1024/produto/19791_674359_20190625155435.png',
    },
    clothe_leg: {
      image_url:
        'https://static.lojadointer.com.br/produtos/calca-internacional-nike-dry-academy-kp-masculina/24/HZM-2701-024/HZM-2701-024_zoom1.jpg',
    },
    clothe_feet: {
      image_url:
        'https://authenticfeet.vteximg.com.br/arquivos/ids/221345-1000-1000/Tenis-Nike-Odyssey-React-Masculino-Preto.jpg',
    },
  },

  {
    _id: 'id_do_look_3',
    name: 'nome do look 3',
    description: 'descrição do look 3',
    clothe_torso: {
      image_url:
        'https://images.lojanike.com.br/1024x1024/produto/19791_674359_20190625155435.png',
    },
    clothe_leg: {
      image_url:
        'https://static.lojadointer.com.br/produtos/calca-internacional-nike-dry-academy-kp-masculina/24/HZM-2701-024/HZM-2701-024_zoom1.jpg',
    },
    clothe_feet: {
      image_url:
        'https://static.netshoes.com.br/produtos/tenis-umbro-soul-knit-trainer-ii-masculino/26/D21-4975-026/D21-4975-026_zoom1.jpg',
    },
  },

  {
    _id: 'id_do_look_4',
    name: 'nome do look 4',
    description: 'descrição do look 4',
    clothe_torso: {
      image_url:
        'https://static3.tcdn.com.br/img/img_prod/311840/camisa_umbro_gremio_i_2019_jogador_63175_1_20191202180011.jpg',
    },
    clothe_leg: {
      image_url:
        'https://static3.tcdn.com.br/img/img_prod/311840/calca_umbro_gremio_treino_2019_marinho_56159_1_20191202190710.jpg',
    },
    clothe_feet: {
      image_url:
        'https://authenticfeet.vteximg.com.br/arquivos/ids/221345-1000-1000/Tenis-Nike-Odyssey-React-Masculino-Preto.jpg',
    },
  },
];

export default class Looks extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#C58882', '#CFDBDB']}
          style={styles.gradientContainer}
          start={{x: 0, y: 0}}
          end={{x: 0.3, y: 0.7}}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>looks</Text>
          </View>

          <View style={styles.container}>
            <FlatList
              data={looks}
              keyExtractor={look => look._id}
              numColumns={2}
              renderItem={({item: look}) => {
                return (
                  <View style={styles.gridContainer}>
                    <View style={styles.lookContainer}>
                      <Image
                        style={styles.torso}
                        source={{uri: look.clothe_torso.image_url}}
                      />
                      <Image
                        style={styles.leg}
                        source={{uri: look.clothe_leg.image_url}}
                      />
                      <Image
                        style={styles.feet}
                        source={{uri: look.clothe_feet.image_url}}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#CFDBDB',
  },

  gradientContainer: {
    flex: 1,
  },

  containerTitle: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  title: {
    textAlign: 'center',
  },

  container: {
    flex: 1,
    padding: 5,
  },

  gridContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    height: 200,
  },

  lookContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  torso: {
    width: 66,
    height: 58,
  },

  leg: {
    width: 68,
    height: 86,
  },

  feet: {
    width: 70,
    height: 68,
  },
});
