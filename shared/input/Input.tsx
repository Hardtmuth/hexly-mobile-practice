import { Pressable, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../tokens';
import { useState } from 'react';
import VisIcon from '../../assets/icons/visibility_off';

export function Input(props: TextInputProps & { isPass?: boolean }) {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <TextInput
        style={styles.input}
        secureTextEntry={props.isPass && !isPasswordVisible}
        placeholderTextColor={Colors.placeholderColor}
        {...props}
      />
      {props.isPass && (
        <Pressable style={styles.passIcon} onPress={() => setPasswordVisible((state) => !state)}>
          <VisIcon />
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(158, 161, 168, 1.0)',
  },
  passIcon: {
    position: 'absolute',
    right: 0,
    paddingVertical: 38,
    paddingRight: 12,
  },
});
