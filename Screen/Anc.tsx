import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Anc = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayText, setDisplayText] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    console.log('Logging in with:', email, password);

    if (!email || !password) {
      setDisplayText('Please fill in both email and password.');
      return;
    }

    setDisplayText('Logging in...');

    try {
      const response = await axios.post('http://14.195.23.36/HomeCollectionAPI/api/Login/login', {
        AppVersion: 5,
        batterypercentage: 64,
        DeviceBrand: 'samsung',
        deviceid: '839a0150cab61cfa',
        DeviceModel: 'SM-A307FN',
        latitude: 28.5958103,
        longitude: 77.3202737,
        MobileTokenID: 'fsm9Gz-pQuaa3ER1kS_ikh:APA91bFk3Tv9I2OrpppAWZHcpugjBrCnKCChJHvwzS8NFNhiuiqguh2NHynsjZHaoC-x4eL5rDa811PF8Wtiwh4k2iv5qy7IOglOaCklgNlQVe07XVRI0XyXPkWxG2Cpq3tgHQbuugjr',
        Password: password,
        PhlebotomistID: 0,
        Username: email,
      });

      if (response.data.status) {
        // navigation.navigate('Dashboard');
        console.log('jn jjbh',response.data)
        console.log('jn jjbsDASDh',response.data.data[0]?.NAME)

      } else {
        setDisplayText('Incorrect Username or Password');
      }
    } catch (error) {
      setDisplayText('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bgl.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Image
            style={styles.profileIcon}
            source={require('./assets/itdose_logo.png')}
          />
          <TextInput
            style={styles.input2}
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {displayText !== '' && (
          <Text style={styles.displayText}>{displayText}</Text>
        )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  input2: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
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
  displayText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Anc;
