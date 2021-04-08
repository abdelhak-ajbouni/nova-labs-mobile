import React, { useState } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions
} from 'react-native';
import DatePicker from 'react-native-date-picker'

import SingleTimeSlot from '../components/SingleTimeSlot'

const width = Dimensions.get('window').width; //full width
const timeSlots = [{ _id: 'test' }, { _id: 'test' }]

const TimeSlots = ({ navigation }) => {
    const [date, setDate] = useState(new Date())

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
            <FlatList
                data={timeSlots}
                renderItem={() => (
                    <SingleTimeSlot key={'ee'} id={'test'} username={'user 1'} onClick={(id) => navigation.navigate('Profile', { name: id })} />
                )}
            />
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
    }
});

export default TimeSlots;