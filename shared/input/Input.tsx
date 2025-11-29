import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from '../tokens';

export function Input(props: TextInputProps) {
  return (
    <TextInput style={styles.input}
    placeholderTextColor={Colors.placeholderColor}
    {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(158, 161, 168, 1.0)'
  }
})