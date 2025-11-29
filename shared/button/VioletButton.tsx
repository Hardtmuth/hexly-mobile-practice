import {
  StyleSheet,
  Pressable,
  PressableProps,
  View,
  Text,
} from "react-native";
import { Colors } from '../tokens';

export function VioletButton({title, ...props}: PressableProps & {title: string}) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#B88AE8',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 44,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: Colors.textColor,
  }
})