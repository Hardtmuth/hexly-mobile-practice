import { StyleSheet, Pressable, PressableProps, View, Text } from 'react-native'

export function Button({title, ...props}: PressableProps & {title: string}) {
    return(
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
        backgroundColor: '#FFFFFF',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        width: 131,
        height: 26,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#27252E'
    }
})