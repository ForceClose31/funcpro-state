# React Native
---
## TextInput

`TextInput` adalah komponen bawaan di React Native yang digunakan untuk menerima input teks dari pengguna. Fungsinya mirip dengan elemen `<input>` dalam HTML.

Contoh penggunaan
  
```js
import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const TextInputExample = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Type here"
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <Text>You entered: {inputText}</Text>
    </View>
  );
};

export default TextInputExample;
```

### Kapan digunakan?
Digunakan ketika Programmer memerlukan `input teks` dari pengguna, seperti di formulir, pencarian, atau data interaktif lainnya.

### Penerapan Functional Programming

Pada contoh di atas, komponen `TextInputExample` bersifat **stateless** dan menggunakan **useState** untuk menangani state yang berisi input pengguna. Ini mencerminkan paradigma functional programming, di mana fungsi dan state dipisahkan secara jelas, dan UI diperbarui berdasarkan perubahan state.

## useState

`useState` adalah hook yang memungkinkan Anda menambahkan state ke komponen fungsional di React. Ini menggantikan class-based state management dalam komponen fungsi, yang menjadikan kode lebih sederhana dan bersifat deklaratif.

Contoh penggunaan

```js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
```

### Kapan digunakan?

Gunakan `useState` ketika komponen membutuhkan state internal yang bisa berubah. Misalnya, untuk mengelola data sementara yang hanya relevan bagi komponen tersebut, seperti nilai input, toggle button, atau counter.

### Penerapan Functional Programming

`useState` mendukung konsep i**mmutability** karena setiap perubahan state menghasilkan state baru tanpa mengubah yang lama. Fungsi `setCount` menerima nilai baru dan menggantinya tanpa mutasi data.

## useNavigation

`useNavigation` adalah hook dari `@react-navigation/native` yang digunakan untuk mendapatkan akses ke navigasi di dalam komponen fungsional. Ini memungkinkan komponen untuk melakukan navigasi ke layar lain tanpa memerlukan prop eksplisit dari komponen orang tua/parent.

Contoh penggunaan

```js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
```

### Kapan digunakan?

Digunakan untuk melakukan navigasi di dalam komponen fungsional tanpa harus mengoper prop navigasi secara manual. Sangat berguna ketika Anda memiliki navigasi di dalam komponen child atau komponen yang tidak langsung memiliki akses ke prop navigasi.

### Penarapan Functional Programming

Dengan `useNavigation`, kita bisa membuat komponen yang **independen** dan **reusable**, di mana logika navigasi dipisahkan dari prop dan lebih mudah untuk dikelola.

## Conditionally Show Component Based on State

Dalam React Native, Kita sering kali ingin menampilkan atau menyembunyikan komponen berdasarkan state. Ini bisa dilakukan dengan menggunakan operasi kondisional dalam JSX, seperti operator ternary atau logika AND (`&&`).

Contoh penggunaan

```js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Button
        title={isVisible ? "Hide Text" : "Show Text"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text>This is the toggled text!</Text>}
    </View>
  );
};

export default ToggleText;
```

### Kapan digunakan?

Gunakan metode ini ketika Kita perlu menampilkan komponen secara dinamis berdasarkan kondisi tertentu, misalnya, saat menampilkan `pesan error`, menampilkan `hasil pencarian`, atau menampilkan `dialog konfirmasi`.

### Penerapan Functional Programming

Penggunaan conditional rendering mendukung pemrograman deklaratif, di mana tampilan UI disusun berdasarkan state. Ini menghindari mutasi langsung pada elemen UI, dan menjadikan logika UI lebih mudah dibaca dan di-maintain.

### Contoh program sederhana dengan functional programming

```js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventScreen = () => {
  const [eventName, setEventName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Event Name"
        value={eventName}
        onChangeText={setEventName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {isSubmitted && <Text>Event: {eventName} is created!</Text>}

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { eventName })}
      />
    </View>
  );
};

export default EventScreen;

```
