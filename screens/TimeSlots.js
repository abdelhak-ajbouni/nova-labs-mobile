import React, { useState, useEffect } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Text
} from 'react-native';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    useQuery
} from 'react-query'

import SingleTimeSlot from '../components/SingleTimeSlot'
import { getSellerById } from '../libs/apis'

const width = Dimensions.get('window').width; 

const TimeSlots = ({ navigation, route }) => {
    const { sellerId, currentUser } = route.params;
    const { isFetching, error, refetch, data } = useQuery(["sellers", sellerId, date], () => getSellerById(sellerId, date))
    const [date, setDate] = useState(new Date())
    const timeSlotsList = data ? data.timeSlots : []
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Something Went Wrong",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    }
    
    useEffect(() => {
        refetch(sellerId, date)
    }, [date]);

    useEffect(() => {
        error && showToastWithGravity()
    }, [error]);

    const renderTimeSlots = () => {
        if (timeSlotsList.length < 1) {
            return (
                <View style={styles.noResult}>
                    <Icon
                        name="exclamation-circle"
                        style={styles.noResultIcon}
                    />
                    <Text style={styles.noResultText}>
                        No Time Slots in This Date
                    </Text>
                </View>
            )
        }
        return (
            <FlatList
                data={timeSlotsList}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <SingleTimeSlot 
                        id={item._id} 
                        timeRange={'user 1'} 
                        start={item.start}
                        end={item.end}
                        isBooked={item.isBooked}
                        sellerId={sellerId}
                        requestedBy={currentUser}
                    />
                )}
            />
        )
    }

    return (
        <View style={styles.view}>
            <DatePicker
                style={styles.datePicker}
                date={date}
                onDateChange={setDate}
                androidVariant={'nativeAndroid'}
                mode={'date'}
                minimumDate={new Date()}
            />
            {
                isFetching ? (
                    <ActivityIndicator size="small" color="#84a59d" />
                ) : (
                    renderTimeSlots()
                )

            }
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#edf2f4',
        flex:1
    },
    datePicker: {
        width: width,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    noResult: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    noResultText: {
        color: '#ccc',
        marginTop: 5
    },
    noResultIcon: {
        color: '#ccc',
        fontSize: 24
    }
});

export default TimeSlots;