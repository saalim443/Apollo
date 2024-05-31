import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SalesFunelMasterSalesExecutiveObservation = () => {
  const [proposedtypeofassociationwithAHLL, setproposedtypeofassociationwithAHLL] = useState('');
  const [expectedInterestLevel, setexpectedInterestLevel] = useState('');
  const [NoofexpectedcallsMon, setNoofexpectedcallsMon] = useState('');
  const [expectedBusinessForecast, setexpectedBusinessForecast] = useState('');
  const [Expectedcategory, setExpectedcategory] = useState('');

 
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if (!proposedtypeofassociationwithAHLL) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      console.log('Logging in with:', proposedtypeofassociationwithAHLL);
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('../Screen/assets/bg1.png')}
          style={styles.container}
        >
          <View style={styles.overlay}>
         
          <Text style={styles.topheadingstartText}>Basic Demographic Details</Text>
            <Text style={styles.startText}>Proposed type of association with AHLL</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={proposedtypeofassociationwithAHLL}
                style={styles.picker}
                onValueChange={(itemValue) => setproposedtypeofassociationwithAHLL(itemValue)}
              >
               <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Expected Interest Level</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={expectedInterestLevel}
                style={styles.picker}
                onValueChange={(itemValue) => setexpectedInterestLevel(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>No of expected calls/Mon</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={NoofexpectedcallsMon}
                style={styles.picker}
                onValueChange={(itemValue) => setNoofexpectedcallsMon(itemValue)}
              >
               <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Expected Business Forecast</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={expectedBusinessForecast}
                style={styles.picker}
                onValueChange={(itemValue) => setexpectedBusinessForecast(itemValue)}
              >
               <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Expected category</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={Expectedcategory}
                style={styles.picker}
                onValueChange={(itemValue) => setExpectedcategory(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

           

          

            

         


         

            


           

            {loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
              </View>
            )}
          </View>
        </ImageBackground>
      </ScrollView>
      <TouchableOpacity style={styles.signUpFloatingButton} onPress={handleSignUp}>
        <Text style={styles.signUpFloatingButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  inputcountry: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
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
  startText: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 0,
    color: '#dc3545',
    fontSize: 16,
    fontWeight: 'bold',
  },

  topheadingstartText: {
    alignSelf: 'center',
    marginBottom: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:0
  },
 
  startTexttagged: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
    color: '#dc3545',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0,
  },
  displayText: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#007bff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  signUpFloatingButton: {
    position: 'absolute',
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: 0,
    elevation: 8,
    left: '10%',
    right: '10%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  signUpFloatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
  },
});

export default SalesFunelMasterSalesExecutiveObservation;
