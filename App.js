import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Result from './src/components/Result';

import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {

  const [tamano, setTamano] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [pago, setPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [nameTamano, setnameTamano] = useState('');
  const [nameTipo, setnameTipo] = useState('');
  const [namePago, setnamePago] = useState('');

  const calculate = () => {
    reset();
    if (!tamano) {
      setErrorMessage('¡Seleccionar un tamaño de café!');
    } else if (!tipo) {
      setErrorMessage('¡Seleccionar un tipo de café!');
    } else if (!pago) {
      setErrorMessage('¡Seleccionar un tipo de pago!');
    } else if (!cantidad) {
      setErrorMessage('¡Ingresar cantidad a pedir!');
    }else {
       let precioTamno = 0;
        if(tamano == 8){
          precioTamno = 1.00;
          setnameTamano('Short 8 onz');
        }else if(tamano == 12){
          precioTamno = 1.50;
          setnameTamano('Tall 12 onz');
        }else{
          precioTamno = 2.00;
          setnameTamano('Grande 16 onz');
        }
        let precioTipo = 0;
        if(tipo == 1){
          precioTipo = 2.00;
          setnameTipo('Mocha');
        }else if(tipo == 2){
          precioTipo = 2.50;
          setnameTipo('Te chai');
        }else if(tipo == 3){
          precioTipo = 1.50;
          setnameTipo('Americano');
        }else{
          precioTipo = 3.00;
          setnameTipo('Frapper');
        }

        let descuento = 0;
        if(pago == 1){
          descuento = 0.15;
          setnamePago('Efectivo');
        }else{
          descuento = 0.05;
          setnamePago('Tarjeta');
        }
        const precio = precioTamno + precioTipo;
        const total = cantidad * precio;
        const descuetototal = total * descuento;
        const pagar = total - descuetototal;
        setTotal({
          descuetototal: descuetototal.toFixed(2).replace('.', ','),
          pagar: pagar.toFixed(2).replace('.', ','),
        });

    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }


  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>StarBosco APP     <Icon name="coffee" size={30}  /> </Text>
        <Form
          setTamano={setTamano}
          setTipo={setTipo}
          setPago={setPago}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Result
        cantidad={cantidad}
        nameTamano={nameTamano}
        nameTipo={nameTipo}
        namePago={namePago}
        total={total}
        errorMessage={errorMessage}
      />
      <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate} >
                <Text style={styles.text}>CALCULAR  <Icon name="hand-o-up" size={30}  /> </Text>
            </TouchableOpacity>
       </View>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  },
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%',
},
text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
},
})