import React from 'react';
import {Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/screens/Home'
import Black from './src/screens/Black'
import White from './src/screens/White'
import BlackWins from './src/screens/BlackWins'
import WhiteWins from './src/screens/WhiteWins'


const App = () => {

  const Stack = createStackNavigator()

  return(
  
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Início' screenOptions={{
         headerTitleAlign: 'center',
         headerTitleStyle:{
           color: '#FFF',
           fontSize: 18,
           letterSpacing: 1.5,
           textTransform: 'uppercase'
         },
         headerStyle:{
           backgroundColor: '#CD5C5C',
         },
        headerLeft: () => {return <Text></Text>}
       }}>
         <Stack.Screen name='Início' component={Home}/>
         <Stack.Screen name='Peças pretas' component={Black}/>
         <Stack.Screen name='Peças brancas' component={White}/>
         <Stack.Screen name='Peças pretas venceu' component={BlackWins}/>
         <Stack.Screen name='Peças brancas venceu' component={WhiteWins}/>
       </Stack.Navigator>
     </NavigationContainer>
    
  )
}

export default App;
