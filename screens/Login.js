import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';


const Login = ({ navigation }) => {
    const [username, setUsername] = useState()
    return (
        <View style={styles.view}>
            <TextInput
                placeholder="Type Your Username"
                style={styles.input}
                onChangeText={setUsername}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { navigation.navigate('Sellers', { currentUser: username }) }}
                disabled={!username}
            >
                <Text  style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center', 
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#edf2f4',
    },
    input: {
        width: 250,
        borderRadius: 50,
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    btn: {
        backgroundColor: '#84a59d',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    btnText: {
        color: '#fff',
    }
});

export default Login