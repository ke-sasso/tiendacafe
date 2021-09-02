import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
    const { setTamano, setTipo, setPago, setCantidad } = props;
    return (
        <View style={styles.viewForm}>         
            <RNPickerSelect
                style={picketSelectStyles}
                onValueChange={(value) => setTamano(value)}
                placeholder={{
                    label: 'Seleccione tamaño de café...',
                    value: null,
                }}
                items={[
                    { label: '8 onz', value: 8 },
                    { label: '12 onz', value: 12 },
                    { label: '16 onz', value: 16 },
                ]}
            />
             <RNPickerSelect
                style={picketSelectStyles}
                onValueChange={(value) => setTipo(value)}
                placeholder={{
                    label: 'Seleccione tipo de café...',
                    value: null,
                }}
                items={[
                    { label: 'Mocha', value: 1 },
                    { label: 'Te chai ', value: 2 },
                    { label: 'Americano', value: 3 },
                    { label: 'Frapper', value: 4 },
                ]}
            />
             <RNPickerSelect
                style={picketSelectStyles}
                onValueChange={(value) => setPago(value)}
                placeholder={{
                    label: 'Tipo de pago...',
                    value: null,
                }}
                items={[
                    { label: 'Efectivo', value: 1 },
                    { label: 'Tarjeta', value: 2 },
                ]}
            />
            <View style={styles.viewInputs}>   
                <TextInput
                            placeholder="Cantidad a pedir"
                            keyboardType="numeric"
                            style={styles.input}
                            onChange={(e) => setCantidad(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
});