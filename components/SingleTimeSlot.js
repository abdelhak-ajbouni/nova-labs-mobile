import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ToastAndroid
} from 'react-native';
import {
    useMutation,
    useQuery
} from 'react-query'

import { addRequestToTimeSlot, getRequests } from '../libs/apis'


const SingleTimeSlot = ({ id, start, end, isBooked, requestedBy, sellerId }) => {
    const { refetch, data } = useQuery(["requests", sellerId, id], () => getRequests(sellerId, id))
    const { mutate } = useMutation(newRequest => addRequestToTimeSlot(sellerId, id, newRequest), {
        onSuccess: () => {
            refetch()
        }
    })
    
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Time Slot Already Booked",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    };

    const isSent = (requestedBy, start, end) => {
        if (!data) {
            return false
        }
        const found = data.find(r => r.requestedBy === requestedBy)
        return !!found
    }

    return (
        <View style={styles.timeSlot}>
            <Text
                style={styles.username}
            >
                {start} - {end}
            </Text>
            {

                isBooked ? (
                    <TouchableOpacity>
                        <Text style={styles.bookedText} onPress={() => { showToastWithGravity() }}>Booked</Text>
                    </TouchableOpacity>
                )
                    : (
                        <TouchableOpacity
                            style={!isSent(requestedBy) && styles.btn}
                            disabled={isSent(requestedBy)}
                            onPress={() => mutate({ requestedBy })}
                        >
                            <Text style={isSent(requestedBy) ? styles.bookedText : styles.sendText}>{isSent(requestedBy) ? 'Request Sent' : 'Send Request'}</Text>
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