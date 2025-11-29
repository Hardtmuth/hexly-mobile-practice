import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from './shared/button/Button';

export default function App() {
  return (
    <View style={styles.content}>
      <Image 
          source={require("./assets/background.png")}
          resizeMode='cover'
          style={styles.backgroundImage}
        />
      <View style={styles.loginBlock}>
        <Text style={styles.welcomeText}>Welcome to Classroom</Text>
        <Text style={styles.descriptionText}>Join over 10.000 learners over the World and enjoy online education!</Text>
        <Button title="Create an account"/>
        <View style={styles.textBlock}>
          <Text style={styles.loginText}>Alredy have an account?</Text>
          <Text style={styles.loginText}>Log in</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#6400CD",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  loginBlock: {
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Satoshi Variable',
    fontWeight: '900',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  descriptionText: {
    marginVertical: 10,
    width: 343,
    height: 52,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  textBlock: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 10,
    height: 52,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#FFFFFF'
  },
});
