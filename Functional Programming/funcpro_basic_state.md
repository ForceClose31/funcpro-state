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

---

## useState

`useState` adalah hook dasar di React dan React Native yang memungkinkan kita menambahkan dan mengelola state lokal dalam komponen fungsional. Sebelum adanya hook, state hanya bisa dikelola di `komponen berbasis kelas`. Dengan useState, komponen fungsional bisa menjadi `dinamis`, di mana mereka dapat merespons input atau perubahan secara langsung.

Contoh penggunaan

```js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default CounterApp;
```

- useState(0) menginisialisasi nilai state count dengan 0.
- setCount(count + 1) memperbarui nilai count ketika tombol "Increase" ditekan.
- Ketika count diperbarui, komponen akan rerender secara otomatis dengan nilai terbaru.

Contoh penggunaan lainnya

```js
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const NameApp = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Text>Hello, {name}!</Text>
    </View>
  );
};

export default NameApp;
```

- useState('') menginisialisasi state name sebagai string kosong.
- Ketika pengguna mengetik di dalam TextInput, onChangeText memicu perubahan, dan setName diperbarui dengan teks yang dimasukkan.
- Nama yang dimasukkan pengguna langsung ditampilkan pada Text di bawahnya.

1. Apa itu state?

   State adalah data yang dimiliki oleh suatu komponen yang bisa berubah seiring waktu. Misalnya, jika Anda membuat aplikasi counter, nilai counter tersebut adalah state yang dapat bertambah atau berkurang saat pengguna menekan tombol.

2. Mengapa menggunakan useState?

   Dalam React, komponen pada dasarnya adalah fungsi murni yang menerima props dan menghasilkan UI. Namun, beberapa komponen perlu merespons perubahan data, seperti interaksi pengguna atau data yang diperbarui, di sinilah state dibutuhkan. useState memungkinkan Anda menangani perubahan tersebut secara otomatis.

3. Cara Kerja useState

   Ketika useState dipanggil, ini mengembalikan dua hal:
   
   - Nilai state saat ini.
   - Sebuah fungsi untuk memperbarui nilai state tersebut.

### Syntax dasar

```js
const [state, setState] = useState(initialValue);
```

- state: Menyimpan nilai saat ini dari state.
- setState: Fungsi untuk memperbarui state.
- initialValue: Nilai awal state yang hanya digunakan pertama kali komponen dirender.

### Kapan digunakan?

Gunakan `useState` ketika komponen membutuhkan state internal yang bisa berubah. Misalnya, untuk mengelola data sementara yang hanya relevan bagi komponen tersebut, seperti nilai input, toggle button, atau counter.

### Penerapan Functional Programming

`useState` mendukung konsep i**mmutability** karena setiap perubahan state menghasilkan state baru tanpa mengubah yang lama. Fungsi `setCount` menerima nilai baru dan menggantinya tanpa mutasi data.

---

## onPress

`onPress` adalah salah satu props yang sering digunakan pada komponen interaktif di React Native, seperti tombol atau area yang dapat disentuh (`Button`, `TouchableOpacity`, dll). Fungsi ini memungkinkan aplikasi merespons tindakan pengguna ketika mereka menekan atau menyentuh elemen tersebut.

Contoh penggunaan

```js
import React from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert("Button pressed!");
  };

  return (
    <View>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

export default App;
```

### Kapan digunakan?

onPress digunakan saat Anda ingin membuat elemen UI yang interaktif, seperti tombol, yang memicu suatu aksi ketika disentuh oleh pengguna. Contoh-contoh penggunaannya antara lain:

- Mengirim form
- Memindahkan pengguna ke layar lain
- Menambah item ke keranjang belanja
- Mengubah nilai di aplikasi (misalnya, counter, dll)

Selain Button, React Native juga memiliki komponen seperti `TouchableOpacity` yang lebih fleksibel dalam mendesain area yang bisa disentuh. Komponen ini memungkinkan programmer membuat area sentuh di sekitar elemen apa pun, seperti teks atau gambar, dengan kontrol lebih besar atas tampilannya.

Contoh penggunaan

```js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const handlePress = () => {
    console.log("Touchable area pressed!");
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={{ backgroundColor: 'lightblue', padding: 10 }}>
        <Text>Tap Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
```

Contoh penggunaan onPress bersama state

```js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
};

export default App;
```

---

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

---

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

---

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
