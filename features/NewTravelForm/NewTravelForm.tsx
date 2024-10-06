import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import TextField from "@/components/Inputs/TextField";

const NewTravelForm = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                centerComponent={{ text: 'New Travel Form', style: { color: '#fff', fontSize: 18 } }}
            />
            <View style={{ marginTop: 20, padding: 20 }}>
                <Text>Hello world! a</Text>
                <TextField placeholder="coucou" />
            </View>
        </View>
    );
};

export default NewTravelForm;
