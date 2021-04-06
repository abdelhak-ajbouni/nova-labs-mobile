import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';


const Seller = ({ id, username, onClick }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.seller}>
                <Text onPress={() => onClick(id)}>
                    {username}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    seller: {
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderRadius: 5 
    }
});

export default Seller