import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import AgendamentoAlinhamento from './components/agendamentoAlinhamento';
import ListarAgendamentos from './components/listarAgendamentos';
import AgendamentoTrocaDeOleo from './components/agendamentoTrocaDeOleo';
import AgendamentoBalanceamento from './components/agendamentoBalanceamento';
import AgendamentoLavagem from './components/agendamentoLavagem';
import firebase from 'firebase'
import firebaseConfig from './database/Firebase'

const Stack = createStackNavigator();

function Home(){
  return (
    <Stack.Navigator
    initialRouteName=""
    screenOptions={{
      headerTitleAlign: 'center',
      backgroundColor: '#000080',
      headerStyle:{
        backgroundColor: '#000080'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
    }}>
      <Stack.Screen
      name="Signup" 
        component={Signup} 
        options={{ title: 'Cadastrar' }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Logar'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Inicio' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="AgendamentoAlinhamento" 
       component={AgendamentoAlinhamento} 
       options={
         { title: 'Agendamento Alinhamento' }
       }
      />
      <Stack.Screen 
       name="ListarAgendamentos" 
       component={ListarAgendamentos} 
       options={
         { title: 'Listar Agendamentos' }
       }
      />
      <Stack.Screen 
       name="AgendamentoTrocaDeOleo" 
       component={AgendamentoTrocaDeOleo} 
       options={
         { title: 'Agendamento Troca De Oleo' }
       }
      />
      <Stack.Screen 
       name="AgendamentoBalanceamento" 
       component={AgendamentoBalanceamento} 
       options={
         { title: 'Agendamento Balanceamento' }
       }
      />
      <Stack.Screen 
       name="AgendamentoLavagem" 
       component={AgendamentoLavagem} 
       options={
         { title: 'Agendamento Lavagem' }
       }
      />
    </Stack.Navigator>
  )
}

export default function App(){
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return(
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  )
}