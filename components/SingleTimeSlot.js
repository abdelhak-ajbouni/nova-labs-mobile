import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Button
} from 'react-native';


const SingleTimeSlot = ({ id, username, onClick }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.timeSlot}>
                <Text onPress={() => onClick(id)}>
                    {username}
                </Text>
                <Button
                    title="Send Request"
                    onPress={() => {}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    timeSlot: {
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
});

export default SingleTimeSlot