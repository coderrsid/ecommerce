import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBSC_Y_773Ukymb4ltq42bGPsXvcfatO5Q",
  authDomain: "ecommerce-ec0bf.firebaseapp.com",
  databaseURL: "https://ecommerce-ec0bf.firebaseio.com",
  projectId: "ecommerce-ec0bf",
  storageBucket: "",
  messagingSenderId: "1049656982135",
  appId: "1:1049656982135:web:237de96d08b3bd11"
};

const fire = firebase.initializeApp(config);

export default fire;
