import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const Test = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newField, setNewField] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic
    console.log('Logging in with:', email, password, newField);
    // Example of setting display text after login button is clicked
    setDisplayText('Logging in...');
  };

  const handleSignUp = () => {
    // Navigate to sign up screen or perform sign up action
    console.log("Navigate to sign up screen or perform sign up action");
  };

  return (
    <ImageBackground
      source={require('../Screen/assets/bg1.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Image
            style={styles.profileIcon}
            source={require('../Screen/assets/profile.png')}
          />
          <Text style={styles.title}>Login</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="New Field"
          onChangeText={setNewField}
          value={newField}
        />

        <View style={styles.horizontalContainer}>
          <TextInput
            style={[styles.input, styles.horizontalInput]}
            placeholder="Field 1"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            style={[styles.input, styles.horizontalInput]}
            placeholder="Field 2"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        {/* Display text after button click */}
        {displayText !== '' && (
          <Text style={styles.displayText}>{displayText}</Text>
        )}

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Adjust the opacity as needed
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  displayText: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  horizontalInput: {
    width: '45%', // Adjust width as needed
  },

  // horizontalContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '80%',
  //   marginBottom: 20,
  // },
  // horizontalInput: {
  //   width: '45%', // Adjust width as needed
  // },

});

export default Test;
