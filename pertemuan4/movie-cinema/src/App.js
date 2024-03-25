import Header from "./components/Header";
import Car from "./components/Car";
import User from "./components/User";
import Footer from "./components/Footer";
import imgProfile from "./components/man.png";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Car
        merk="Ferrari"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
      <User
        nama="Asep"
        alamat="Bandung"
        hobi={["Badminton", "Berkuda"]}
        angkatan={3}
        isGraduate={true}
        gambar="https://cdn-icons-png.freepik.com/256/1077/1077063.png"
        tombol={(nama) => alert(`Profile ${nama} telah dibuka`)}
      />
      <User
        nama="Agus"
        alamat="Jakarta"
        hobi={["Mancing", "Mendaki"]}
        angkatan={5}
        isGraduate={true}
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGFjsxZCvbMuKnsJHFywAKXzJh6SsPWVsifY_z36wVT9p38WQ3IQPDPDjhFPDyxv6YQY&usqp=CAU"
        tombol={(nama) => alert(`Profile ${nama} telah dibuka`)}
      />
      <User
        nama="Herman"
        alamat="Palembang"
        hobi={["Balapan", "Berkuda"]}
        angkatan={8}
        isGraduate={true}
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBxMbSYotRv-IImR178LgsHL_lq0jmp0xkHBXgY-IHem6RIfs1s4gcnrP0jvHin5o0CE&usqp=CAU"
        tombol={(nama) => alert(`Profile ${nama} telah dibuka`)}
      />
      <User
        nama="Samsul"
        alamat="Bekasi"
        hobi={["Bersepeda", "Lari"]}
        angkatan={10}
        isGraduate={false}
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU"
        tombol={(nama) => alert(`Profile ${nama} telah dibuka`)}
      />
      <User
        nama="Lutfi"
        alamat="Bandung"
        hobi={["Nonton", "Makan"]}
        angkatan={11}
        isGraduate={false}
        gambar={imgProfile}
        tombol={(nama) => alert(`Profile ${nama} telah dibuka`)}
      />
      <Footer nama="Mochammad Mahardika" />
    </div>
  );
}

export default App;
