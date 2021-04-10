import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    ToastAndroid,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    useQuery
} from 'react-query'

import SingleSeller from '../components/SingleSeller'
import { getSellers } from '../libs/apis'

const Sellers = ({ navigation, route }) => {
    const { currentUser } = route.params;
    const { isFetching, error, refetch, data } = useQuery("sellers", () => getSellers(0, 100, search))
    const [search, setSearch] = useState('')

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Something Went Wrong",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    };

    useEffect(() => {
        error && showToastWithGravity()
    }, [error]);

    const renderSellers = (sellersList) => {
        if (sellersList.length < 1) {
            return (
                <View style={styles.noResult}>
                    <Icon
                        name="exclamation-circle"
                        style={styles.noResultIcon}
                    />
                    <Text style={styles.noResultText}>
                        No Sellers To Show

                    </Text>
                </View>
            )
        }
        return (
            <FlatList
                data={sellersList}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <SingleSeller id={item._id} username={item.fullName} onClick={() => navigation.navigate('Time Slots', {sellerId: item._id, currentUser})} />
                )}
                inverted
            />
        )
    }

    return (
        <View style={styles.view}>
            <TextInput
                placeholder="Search Sellers"
                style={styles.search}
                onChangeText={setSearch}
                onSubmitEditing={() => refetch(0, 8, search)}
            />
            {
                isFetching ? (
                    <ActivityIndicator size="small" color="#84a59d" />
                ) : (
                    renderSellers(data)
                )

            }
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#edf2f4',
        flex: 1
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

export default Sellers;