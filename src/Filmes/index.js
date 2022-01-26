import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from '../Detalhes';


export default function Filmes({data}) {
  const [visibleModal , setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true) }>
            <Text style={styles.botaoTexo}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal} >
        <Detalhes filme={data} voltar={ () => setVisibleModal(false) }/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',
    margin: 15,
    eleven: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao:{
    width: 100,
    backgroundColor:'#e50914',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  botaoTexo:{
    color: '#fff',
    textAlign: 'center',
    fontSize:15
  }
});
