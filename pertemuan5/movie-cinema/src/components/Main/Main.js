import Car from "../Car/Car";
// import User from "../User/User";
import "./Main.css";
import man from "../Car/mobill.png";
import bmw from "../Car/bmw.png";
import bmw2 from "../Car/lamborgini.png";
import supra from "../Car/supra.png";
import supra2 from "../Car/supra2.png";

const Main = () => {
  return (
    <div className="content">
      <Car
        merk="BMW"
        harga={5}
        isNew={true}
        gambar={bmw}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Ferrari"
        harga={4}
        isNew={true}
        gambar={bmw2}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Ferrari"
        harga={2}
        isNew={true}
        gambar={man}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Supra 2017"
        harga={3}
        isNew={true}
        gambar={supra}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Supra 2024"
        harga={10}
        isNew={true}
        gambar={supra2}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
      {/* <User nama="Asep" member="Platinum" />
      <User nama="Agus" member="Gold" />
      <User nama="Herman" member="Silver" />
      <User nama="Samsul" member="Platinum" />
      <User nama="Lutfi" member="Silver" />
      <User nama="Surya" member="Gold" />
      <User nama="Vina" member="Non Member" />
      <User nama="Sarah" member="Platinum" />
      <User nama="Siti" member="Diamond" />
      <User nama="Malik" member="Gold" />
      <User nama="Tata" member="Non Member" />
      <User nama="Ucen" member="Diamond" /> */}
    </div>
  );
};

export default Main;
