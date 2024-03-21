function download() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Download selama 3 detik");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Verify selama 2 detik");
    }, 2000);
  });
}

function notify() {
  console.log("Download Selesai");
}

// function main() {
//     download().then((hasil) => {
//         console.log(hasil);
//         return verify();
//     }).then((hasil) => {
//         console.log(hasil);
//         return notify();
//     });
// }

function main() {
  download().then((hasil) => {
    console.log(hasil);
    verify()
      .then((hasil) => {
        console.log(hasil);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

main();
