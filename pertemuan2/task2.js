/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log(`Hasil Download: ${result}`);
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      result = "GTA-V.exe";
      resolve("Download Selesai");
    }, 2000);
  });
};

const main = async () => {
  try {
    console.log(await download());
    showDownload(result);
  } catch (error) {
    console.log(error);
  }
}

main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */