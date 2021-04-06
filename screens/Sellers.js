import React, { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
    FlatList,
    TextInput
} from 'react-native';

import Seller from '../components/Seller'

const sellers = [{ _id: 'test' }, { _id: 'test' }]

const Sellers = ({ navigation }) => {
    const [search, setSearch] = useState(null)

    console.log('search =========================', search)

    return (
        <View>
            <TextInput
                placeholder="Search Sellers"
                style={styles.search}
                onChangeText={setSearch}
            />
            <FlatList
                data={sellers}
                renderItem={() => (
                    <Seller id={'test'} username={'user 1'} onClick={(id) => navigation.navigate('Time Slots', { name: id })} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        margin: 15
    },
    search: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    }
});

export default Sellers;