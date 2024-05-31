import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const Dashboard = () => {
  const cardColors = ['#44b8ab', '#007aff', '#dc3546', '#fec107', '#ce4d73', '#016e6c', '#e1777f', '#eba5aa', '#dc3546'];
  const cardTexts = ['Sales Funnel \nMaster', 'Travel Summary', 'Pup sales', 'Search/Edit Funnel', 'View Travel Plan', 'MSL View', 'View Ticket' , 'New Ticket', 'Daily Call \nReport Sales'];
  const navigation = useNavigation();

  const handleCardPress = (index) => {
    if (index == 0) {
      navigation.navigate('SalesFunelMaster');
    } else {
      // Handle other card presses if needed
      console.log('Card pressed:', cardTexts[index]);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bg1.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Image
            style={styles.profileIcon}
            source={require('./assets/profile.png')}
          />
          <View style={styles.nameAndAddress}>
            <Text style={styles.title}>Saalim</Text>
            <Text style={styles.address}>Noida Sector 63, U.P</Text>
          </View>
          <Image
            style={styles.sidebarIcon}
            source={require('./assets/menu.png')}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cardColors.map((color, index) => (
            <TouchableOpacity key={index} onPress={() => handleCardPress(index)} style={[styles.card, { backgroundColor: color }]}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{cardTexts[index]}</Text>
                <View style={styles.header}>
                  <Text style={styles.title}>Click Here</Text>
                  <Image
                    style={styles.nexrarrowIcon}
                    source={require('./assets/goforword.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  nameAndAddress: {
    marginRight: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  address: {
    fontSize: 14,
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 5,
    marginBottom: 10,
  },
  sidebarIcon: {
    width: 40,
    height: 40,
  },
  nexrarrowIcon: {
    width: 20,
    height: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 320,
    height: 150,
    borderRadius: 10,
    padding: 25,
    marginBottom: 5,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Dashboard;
