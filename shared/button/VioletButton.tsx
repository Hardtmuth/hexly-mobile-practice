import { StyleSheet, Pressable, PressableProps, Text, Animated } from 'react-native';
import { Colors } from '../tokens';

export function VioletButton({ title, ...props }: PressableProps & { title: string }) {
  const animVal = new Animated.Value(100);
  const LoginButtonColor = animVal.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.violetButtonColor, Colors.activeVioletButtonColor],
  });

  const buttonActive = () => {
    Animated.timing(animVal, {
      toValue: 100,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const buttonNoActive = () => {
    Animated.timing(animVal, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable {...props} onPressIn={buttonActive} onPressOut={buttonNoActive}>
      <Animated.View style={{ ...styles.button, backgroundColor: LoginButtonColor }}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 44,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: Colors.textColor,
  },
});
