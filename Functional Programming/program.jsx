import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      {isNameSubmitted && (
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', { userName: name })} 
          style={styles.button} 
        />
      )}
      
      <View style={styles.button}>
        <Button title="Submit Name" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 10, 
  },
  text: {
    fontSize: 20,
  },
});

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
