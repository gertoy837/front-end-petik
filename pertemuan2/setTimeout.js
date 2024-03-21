function download(callbackVerify) {
  setTimeout(function () {
    console.log("Download selama 3 detik");
    callbackVerify();
  }, 3000);
}

function verify(callbackNotify) {
  setTimeout(function () {
    console.log("Verify selama 2 detik");
    callbackNotify();
  }, 2000);
}

function notify() {
  console.log("Download Selesai");
}

function main() {
  // solusinya : callback
  download(function () {
    verify(function () {
      notify();
    });
  });
}

main();
