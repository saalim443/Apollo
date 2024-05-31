import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const SalesFunelMaster = () => {
  const [nameOrganization, setNameOrganization] = useState('');
  const [taggedWith, setTaggedWith] = useState('');
  const [center, setCenter] = useState('');
  const [businessprofession, setBusinessProfession] = useState('');
  const [businessownership, setBusinessOwnership] = useState('');
  const [prospecttype, setProspectType] = useState('');
  const [landlineNumber, setLandlineNumber] = useState('');
  const [contactpersonname, setContactPersonName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPinCode] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();



  const handleSignUp = () => {
    if (!nameOrganization) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      console.log('Logging in with:', nameOrganization);
      setLoading(false);
    }, 2000);
    navigation.navigate('SalesFunelMasterSalesExecutiveObservation'); 
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
            <Text style={styles.startText}>Tagged with</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={taggedWith}
                style={styles.picker}
                onValueChange={(itemValue) => setTaggedWith(itemValue)}
              >
                  <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Center</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={center}
                style={styles.picker}
                onValueChange={(itemValue) => setCenter(itemValue)}
              >
                  <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Business Profession</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={businessprofession}
                style={styles.picker}
                onValueChange={(itemValue) => setBusinessProfession(itemValue)}
              >
             <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Business Ownership</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={businessownership}
                style={styles.picker}
                onValueChange={(itemValue) => setBusinessOwnership(itemValue)}
              >
                  <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Prospect Type </Text>
            <View style={styles.input}>
              <Picker
                selectedValue={prospecttype}
                style={styles.picker}
                onValueChange={(itemValue) => setProspectType(itemValue)}
              >
                  <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>Name of Organization</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Organization"
              onChangeText={setNameOrganization}
              value={nameOrganization}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Landline No.</Text>
            <TextInput
              style={styles.input}
              placeholder="Landline No."
              onChangeText={setLandlineNumber}
              value={landlineNumber}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Contact Person Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact Person Name"
              onChangeText={setContactPersonName}
              value={contactpersonname}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Designation</Text>
            <TextInput
              style={styles.input}
              placeholder="Designation"
              onChangeText={setDesignation}
              value={designation}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              onChangeText={setMobileNumber}
              value={mobilenumber}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Email Id</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Id"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Website</Text>
            <TextInput
              style={styles.input}
              placeholder="Website"
              onChangeText={setWebsite}
              value={website}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={setAddress}
              value={address}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Locality</Text>
            <TextInput
              style={styles.input}
              placeholder="Locality"
              onChangeText={setLocality}
              value={locality}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>State</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={state}
                style={styles.picker}
                onValueChange={(itemValue) => setState(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>City</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={city}
                style={styles.picker}
                onValueChange={(itemValue) => setCity(itemValue)}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <Text style={styles.startText}>PinCode</Text>
            <TextInput
              style={styles.input}
              placeholder="PinCode"
              onChangeText={setPinCode}
              value={pincode}
              autoCapitalize="none"
            />

            <Text style={styles.startText}>Country</Text>
            <View style={styles.inputcountry}>
              <Picker
                selectedValue={country}
                style={styles.picker}
                onValueChange={(itemValue) => setCountry(itemValue)}
              >
                 <Picker.Item label="Select" value="" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <TouchableOpacity style={styles.signUpFloatingButton} onPress={handleSignUp}>
        <Text style={styles.signUpFloatingButtonText}>Sign Up</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      )}
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
    paddingVertical: 20,
    justifyContent: 'center',
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
  topheadingstartText: {
    alignSelf: 'center',
    marginBottom: 20,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:0
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
    bottom: 20,
    elevation: 8,
    left: '10%',
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    height: '100%',
  },
});

export default SalesFunelMaster;
