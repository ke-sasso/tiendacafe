# TIENDA CAFÉ
# REACT NATIVE

Aplicación móvil para una tienda de café,  la aplicación móvil debe de considera lo siguiente: 
Precios según tamaño de café:
* Short 8 onz. $1.00
* Tall 12 onz $1.50
* Grande 16 onz $2.00

Precio según tipo de café:
* Mocha $2.00
* Te chai $2.50
* Americano $1.50
* Frapper $3.00


Cuando el usuario realiza un pago en efectivo recibe un `15% de descuento`, cuando
realiza un pago con tarjeta de crédito recibe solo un `5% de descuento` en su compra
El Total debe reflejar el total a pagar según la cantidad de elementos y su respectivo
precio, aplicando ya el descuento según `su forma de pago`.

## Iniciar proyecto

### `npm install`
### `npm start`

Ejecuta su aplicación en modo de desarrollo.

#### `npm run ios`

Como npm start, pero también intenta abrir su aplicación en el simulador de iOS si está en una Mac y la tiene instalada.

#### `npm run android`

Como npm start, pero también intenta abrir su aplicación en un dispositivo o emulador Android conectado. Requiere una instalación de las herramientas de compilación de Android (consulte los documentos de React Native para obtener una configuración detallada). También recomendamos instalar Genymotion como su emulador de Android. Una vez que haya terminado de configurar el entorno de compilación nativo, hay dos opciones para hacer que la copia correcta de adb esté disponible para Create React Native App:

##### Using Android Studio's `adb`

Asegúrese de que puede ejecutar adb desde su terminal.
Abra Genymotion y vaya a Configuración -> ADB. Seleccione "Usar herramientas de SDK de Android personalizadas" y actualice con su directorio de SDK de Android.
