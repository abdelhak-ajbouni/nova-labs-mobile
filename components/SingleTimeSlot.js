import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ToastAndroid
} from 'react-native';


const SingleTimeSlot = ({ id, username, isBooked = false, onClick }) => {

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Time Slot Already Booked",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      };

    return (
        <View style={styles.timeSlot}>
            <Text
                style={styles.username}
                onPress={() => onClick(id)}
            >
                {username}
            </Text>
            {

                isBooked ? (
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <Text style={styles.bookedText} onPress={() => {showToastWithGravity()}}>Booked</Text>
                        </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { }}
                        >
                            <Text style={styles.sendText}>Send Request</Text>
                        </TouchableOpacity>
                    )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    timeSlot: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        padding: 15,
        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    btn: {
        backgroundColor: '#84a59d',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    sendText: {
        color: '#fff',
        fontSize: 12,
    },
    bookedText: {
        color: '#84a59d',
    },
    username: {
        fontSize: 16,
        alignSelf: 'center'
    }
});

export default SingleTimeSlot