import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SingleSeller = ({ id, username, onClick }) => {
    return (
        <TouchableOpacity onPress={() => onClick(id)}>
            <View style={styles.singleSeller}>
                <Text style={styles.username}>
                    {username}
                </Text>
                <Icon
                    name="chevron-right"
                    style={styles.icon}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singleSeller: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        marginHorizontal: 25,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    },
    username: {
        fontSize: 16
    },
    icon: {
        fontSize: 18
    }
});

export default SingleSeller