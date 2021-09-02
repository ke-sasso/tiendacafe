import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { cantidad, nameTamano, nameTipo,namePago, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (<View style={styles.boxResult}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult title="Cantidad solicitada:" value={`${cantidad}`} />
                <DataResult title="Tamaño:" value={`${nameTamano}`} />
                <DataResult title="Tipo café:" value={`${nameTipo}`} />
                <DataResult title="Tipo de pago:" value={`${namePago}`} />
                <DataResult title="Descuento %:" value={`$${total.descuetototal}`} />
                <DataResult
                    title="Total a pagar:"
                    value={`$${total.pagar}`}
                />
            </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});