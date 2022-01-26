import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Voltar
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.description}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#141414',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  btnVoltar: {
    backgroundColor: '#e50914',
    padding: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 20,
    marginLeft: 10,
  },
  description: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },
});
