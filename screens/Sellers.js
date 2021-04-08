import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    TextInput
} from 'react-native';

import SingleSeller from '../components/SingleSeller'

const sellers = [{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' },{ _id: 'test' }, { _id: 'test' }]

const Sellers = ({ navigation }) => {
    const [search, setSearch] = useState(null)

    console.log('search =========================', search)

    return (
        <View style={styles.view}>
            <TextInput
                placeholder="Search Sellers"
                style={styles.search}
                onChangeText={setSearch}
            />
            <FlatList
                data={sellers}
                renderItem={() => (
                    <SingleSeller id={'test'} username={'user 1'} onClick={(id) => navigation.navigate('Time Slots', { name: id })} />
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
    title: {
        fontSize: 18,
        margin: 15
    },
    search: {
        borderRadius: 50,
        padding: 15,
        margin: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    }
});

export default Sellers;