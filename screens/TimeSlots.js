import React, { useState } from 'react'
import {
    View,
    FlatList,
} from 'react-native';

import SingleTimeSlot from '../components/SingleTimeSlot'

const timeSlots = [{ _id: 'test' }, { _id: 'test' }]

const TimeSlots = ({ navigation }) => {

    return (
        <View>
            <FlatList
                data={timeSlots}
                renderItem={() => (
                    <SingleTimeSlot key={'ee'} id={'test'} username={'user 1'} onClick={(id) => navigation.navigate('Profile', { name: id })} />
                )}
            />
        </View>
    )
}

export default TimeSlots;