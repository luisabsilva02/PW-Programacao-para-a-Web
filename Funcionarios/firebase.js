//Upload Photo to fireBase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
  from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js"
const firebaseConfig = {
  apiKey: "AIzaSyB3KfEFulq3S5K00vSdCWu7ejo5rt1fz7Q",
  authDomain: "pw2223-uminho.firebaseapp.com",
  projectId: "pw2223-uminho",
  storageBucket: "pw2223-uminho.appspot.com",
  messagingSenderId: "217970004906",
  appId: "1:217970004906:web:710e70206f087f14fa11d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//variaveiss e referencias

var files = [];
var reader = new FileReader();

var SelBtn = document.getElementById("importar-foto");
var UpBtn = document.getElementById("botaoCheckin");
var input = document.createElement("input");

var name;
var extention;

input.type = 'file';

input.onchange = e => {
  files = e.target.files;

  extention = GetFileExt(files[0]);
  name = GetFileName(files[0]);

  reader.readAsDataURL(files[0]);
  fileNameDiv.innerText = name + extention;
}

reader.onload = function () {

  imageContainer.src = reader.result;
}

// selection
SelBtn.onclick = function () {
  input.click();
  UploadProcess();
}



function GetFileExt(file) {
  var temp = file.name.split('.');
  var ext = temp.slice((temp.length - 1), (temp.length));
  return '.' + ext[0];
}

function GetFileName(file) {
  var temp = file.name.split('.');
  var fname = temp.slice(0, -1).join('.');

  return fname;
}

//upload

async function UploadProcess() {
  var ImgToUpload = files[0];

  var ImgName = name + extention;

  const metaData = {
    contentType: ImgToUpload.type
  }

  const storage = getStorage();
  const storageRef = sRef(storage, "Images/" + ImgName + Date.now());

  const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

  UploadTask.on('state-changed', (snapshot) => {

  },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
        localStorage.setItem("fotoUpload", downloadURL);

      });
    }

  );

}


const videoContainer = document.getElementById('video-container');
const video = document.getElementById('camera-stream');
const takePhotoBtn = document.getElementById('tirar-foto-btn');
const fileNameDiv = document.getElementById('file-name');
const imageContainer = document.getElementById('image-container');

takePhotoBtn.addEventListener('click', () => {
  videoContainer.style.display = 'block';
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    })
    .catch(error => {
      console.error('Error accessing the camera:', error);
    });
});

takePhotoBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageUrl = canvas.toDataURL();
  const image = new Image();
  image.src = imageUrl;

  imageContainer.src = imageUrl;
    takePhotoBtn.style.display = "none";
  // Upload the image to Firebase Storage
  videoContainer.style.display = 'none';
  uploadPhotoToFirebaseStorage(imageUrl);
});

function uploadPhotoToFirebaseStorage(imageUrl) {
  const storage = getStorage();
  const storageRef = sRef(storage, 'Images/' + Date.now() + '.png');
  
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const uploadTask = uploadBytesResumable(storageRef, blob);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress if needed
        },
        (error) => {
          console.error('Error uploading the photo:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Photo uploaded:', downloadURL);
            localStorage.setItem("fotoUpload", downloadURL);
          });
        }
      );
    });
}
