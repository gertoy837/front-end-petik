import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [angka, setAngka] = useState(0);
  const handleClickTambah = () => {
    setAngka(angka + 1);
  };
  const handleClickKurang = () => {
    setAngka(angka - 1);
  };
  return (
    <div className="counter">
      <p>Nilai saat ini : {angka}</p>
      <div class="button">
        <button className="buttonCounter" onClick={handleClickTambah}>
          Tambah
        </button>
        <button className="buttonCounter" onClick={handleClickKurang}>
          Kurang
        </button>
      </div>
    </div>
  );
};

export default Counter;