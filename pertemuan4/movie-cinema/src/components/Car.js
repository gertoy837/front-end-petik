import man from './mobill.png'

const Car = (props) => {
  const { merk, harga, isNew, colors, beli } = props;
  return (
    // parent kosong di sebut fragment <h3></> -> hanya di react
    <>
      <img src={man} alt="foto-mobil" width={264} />
      <audio src=""></audio>
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : Rp {harga} Miliyar</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian Warna : {colors.map((color) => color + ", ")}</h5>
      <button onClick={beli}>Beli</button>
    </>
  );
};

export default Car;
