import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { VioletButton } from '../shared/button/VioletButton'
import { Input } from '../shared/input/Input'
import { Colors } from '../shared/tokens'

export default function Login() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        {/*Arrow button and header */}
        <Image
          source={require('../assets/arrow_back.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.loginText}>Log into account</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.baseText}>Email</Text>
          <Input placeholder='example@example.com'/>
        </View>
        <View>
          <Text style={styles.baseText}>Password</Text>
          <Input isPass placeholder='Enter password'/>
        </View>
        <VioletButton title='Log in'/>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>
            By using Classroom,
            you agree to The Terms and Privacy Policy.
            Terms and Privacy Policy.
          </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 44,
    marginBottom: 24,
    backgroundColor: Colors.lightBackColor,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    width: 343,
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    height: 28,
    width: 28,
  },
  loginText: {
    width: 279,
    height: 60,
    fontFamily: 'Satoshi Variable',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000'
  },
  body: {
    gap: 16,
    flexGrow: 1
  },
  baseText: {
    width: 343,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#121A2C'
  },
  forgotText: {
    width: 343,
    height: 22,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#121A2C',
  },
  footer: {
    width: 343,
    height: 94,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  footerText: {
    width: 375,
    height: 94,
  },
})
