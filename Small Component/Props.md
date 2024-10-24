## Props

`Props` (properties) adalah objek yang berisi nilai atau referensi fungsi yang dilewatkan dari komponen parent ke komponen child. Props bersifat `read-only`, artinya komponen penerima tidak boleh mengubah props tersebut. Props memungkinkan komponen untuk tetap bersifat `pure`, karena komponen hanya merender UI berdasarkan input yang diberikan dari luar tanpa mengubah state internal.

### Contoh Props

```js
const Welcome = (props) => {
  return <Text>Hello, {props.name}!</Text>;
};
```

### Pemahaman Props

Bayangkan Anda sedang memasak di dapur, dan teman Anda memberikan resep yang berisi bahan-bahan yang perlu Anda masukkan ke dalam masakan. Bahan-bahan tersebut adalah `props`. Anda hanya menggunakan bahan yang diberikan, tidak mengubahnya.

- `Props` adalah seperti bahan resep yang Anda gunakan dalam masakan. Anda tidak bisa mengubah bahan (props) itu, Anda hanya bisa mengolahnya sesuai petunjuk.
