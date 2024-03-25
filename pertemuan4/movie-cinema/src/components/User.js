const User = (props) => {
  const { nama, alamat, angkatan, hobi, isGraduate, tombol, gambar } = props;
  return (
    <div>
      <ul>
        <img src={gambar} alt="" width={256} />
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Hobi : {hobi.map((hobi) => hobi + ", ")}</li>
        <li>Angkatan : {angkatan}</li>
        <li>Status : {isGraduate ? "lulus" : "sedang belajar"}</li>
        <button onClick={() => tombol(nama)}>Message</button>
      </ul>
    </div>
  );
};

export default User;
