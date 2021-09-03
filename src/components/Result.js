import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Result(props) {
    const { cantidad, nameTamano, nameTipo,namePago, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (<View style={styles.boxResult}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult icon="hashtag" title="Cantidad solicitada:" value={`${cantidad}`} />
                <DataResult icon="cube"  title="Tamaño:" value={`${nameTamano}`} />
                <DataResult icon="coffee"  title="Tipo café:" value={`${nameTipo}`} />
                <DataResult icon="money" title="Tipo de pago:" value={`${namePago}`} />
                <DataResult icon="usd"  title="Descuento %:" value={`$${total.descuetototal}`} />
                <DataResult icon="dollar" title="Total a pagar:" value={`$${total.pagar}`}/>
            </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { icon, title, value } = props;
    return (
        <View style={styles.value}>
            <Icon name={`${icon}`} size={30}  /> 
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