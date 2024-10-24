import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState(''); 
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (name.trim() !== '') {
      setIsNameSubmitted(true); 
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      
      {isNameSubmitted && (
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', { userName: name })}
        />
      )}
      
      <Button title="Submit Name" onPress={handleSubmit} />
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { userName } = route.params; 

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Hello, {userName}!</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
