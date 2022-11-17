import React, {Component, useState, useEffect} from 'react'
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'
import firebase from 'firebase';
import {Card} from 'react-native-elements'

export default function AgendamentoLavagem ({navigation}) {

  const [tipoDeServico, settipoDeServico] = useState('');
  const [tipoDeVeiculo, settipoDeVeiculo] = useState('');
  const [dataDoAgendamento, setdataDoAgendamento] = useState('');
  const [horario, sethorario] = useState('');


  const agendar = ()=> {
      dados = {tipoDeServico:"Lavagem", tipoDeVeiculo, dataDoAgendamento, horario};
      db = firebase.firestore();
      db.collection('agendamento').add(dados).then(()=> navigation.navigate('ListarAgendamentos'));
   }

  return(
      <View>
        <div>
        <Card >
          <Card.Title>Servico de Lavagem</Card.Title>    
        </Card>
          <Card >
            <Card.Title>Tipo de Veiculo</Card.Title>     
            <TextInput style={estilos.input} placeholder="veiculo" value={tipoDeVeiculo} onChangeText={settipoDeVeiculo} />
          </Card>

        <Card >
          <Card.Title>Data</Card.Title>     
          <TextInput type="datetime" style={estilos.input} placeholder="dd/mm/aaaa" value={dataDoAgendamento} onChangeText={setdataDoAgendamento} />
        </Card>

        <Card >
          <Card.Title>Horario</Card.Title>     
          <TextInput style={estilos.input} placeholder="hora" value={horario} onChangeText={sethorario} />
        </Card>

        <Button color="#000099" title='Confirmar Agendamento' onPress={() => {agendar()} }/>
      </div>
      
    </View>
  )
}
const estilos = StyleSheet.create({
  input: {
    width: '100%',
    marginBottom: 16,
    paddingBottom: 16,
    alignSelf: "center",
    borderColor: "#009900",
    borderBottomWidth: 1
  }
})