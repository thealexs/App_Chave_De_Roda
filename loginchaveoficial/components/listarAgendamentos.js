 import React, {Component, useState, useEffect} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase';
import {Card} from 'react-native-elements'

export default function ListarAgendamentos ({navigation}) {
  
  const [agendamentos, setAgendamentos] = useState([]);

   useEffect(()=>{
    db = firebase.firestore();
    db.collection('agendamento').get().then((querySnapShot)=> {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push(doc.data())
      })
      setAgendamentos(list);
    });
  }, [])  

  const irParaServicos = ()=> navigation.navigate('Dashboard');

  return(
      <View>
        <Card >
          <Card.Title>Agendamentos Salvos</Card.Title>  
          <Card.Divider/>      
          {agendamentos.map((agendamento, index) => {
            return <Text key={agendamento.tipoDeVeiculo}> {index + 1} {agendamento.tipoDeServico} {agendamento.tipoDeVeiculo} {agendamento.dataDoAgendamento} {agendamento.horario} </Text>
        })}        
        </Card>

        <Button color="#000099" title='< Voltar para Serviços' onPress={() => irParaServicos()}/> 
        <View style={styles.bottomView}>
        </View>      
    </View>    
  )
}

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  },
  textStyle: {
    textAlign: 'center',
    color: '#000099',
    fontSize: 12
  }
});
