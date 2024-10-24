## Hook

`Hook` adalah fitur dari React (termasuk React Native) yang memungkinkan Programmer menggunakan `state` dan `lifecycle methods` dalam `komponen fungsional`. Sebelum hooks diperkenalkan, pengelolaan state dan efek samping seperti lifecycle hanya bisa dilakukan di dalam komponen berbasis kelas (`class-based components`). Dengan hooks, komponen fungsional dapat menangani `state`, `efek`, dan `konteks aplikasi dengan cara yang lebih modular dan bersih`.

### Contoh hook

- `useState` : Mengelola state lokal pada komponen fungsional.
- `useEffect` : Menjalankan efek samping seperti fetching data atau update DOM.
- `useContext` : Mengakses konteks aplikasi tanpa perlu prop drilling.

```js
const [count, setCount] = useState(0);
```

`useState` mengembalikan sepasang nilai: nilai state saat ini (`count`) dan fungsi untuk memperbarui nilai tersebut (`setCount`), mendukung prinsip `immutability` di functional programming.

### Mekanisme hook

Hooks bekerja dengan cara memetakan state dan lifecycle secara deklaratif. Misalnya, `useState` bekerja dengan menandai bahwa komponen harus dirender ulang setiap kali state yang dikelola oleh hook ini berubah.

### Pemahaman hook

Bayangkan Anda memiliki sebuah rumah pintar yang bisa mencatat kondisi setiap ruangan, seperti suhu atau jumlah lampu yang menyala. `useState` adalah seperti sistem catatan di rumah tersebut. Setiap kali suhu berubah, sistem mencatat dan memperbarui catatan tersebut sehingga Anda selalu memiliki data terbaru.

- `useState` membantu "rumah pintar" (komponen) mengetahui kondisi terbaru, seperti suhu atau jumlah lampu yang menyala (state), tanpa perlu Anda memeriksanya secara manual setiap saat.