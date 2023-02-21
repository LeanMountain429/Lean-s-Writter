var firebaseConfig = {
  apiKey: "AIzaSyD5ldK0aA29TI2R2UFpyKfl_0AsK0GPJKs",
  authDomain: "lean-writter.firebaseapp.com",
  databaseURL:"https://lean-writter-default-rtdb.firebaseio.com/",
  projectId: "lean-writter",
  storageBucket: "lean-writter.appspot.com",
  messagingSenderId: "34240807530",
  appId: "1:34240807530:web:ff5026da2c9358cd288013"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var localstooorage= localStorage.getItem("user_name")
//firebase.database().ref("/").child(localstooorage).update({
    //samuszerojejenahebroma:"0"
//})

var mmsmqtjj= localStorage.getItem("user_name")
document.getElementById("un_pato").innerHTML= "¡Hola " + mmsmqtjj + " Lean le da un saludo!"

function onclick_________(){
  var sala= document.getElementById("inputwithfriends").value
  firebase.database().ref("/").child(sala).update({
    estatus:"Sala Agregada"
})
localStorage.setItem("tag",sala)
window.location= "Sala.html"
}
function salas_nombres(){
  firebase.database().ref("/").on("value",function(snapshot){
    document.getElementById("nqckpsmf").innerHTML=""
    snapshot.forEach(function (childSnapshot) {
      childKey=childSnapshot.key
      nombre_de_salas= childKey
      console.log (nombre_de_salas)
      rowname= "<div onclick='ooncliick(this.id)' id="+nombre_de_salas+" class='nameofclases'></div>"
      document.getElementById("nqckpsmf").innerHTML+= rowname
    });
  })
}
salas_nombres()

function buttonl____________l(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("tag")
  window.location= "index.html"
}

function ooncliick(salasala){
  console.log (salasala)
  localStorage.setItem("tag",salasala)
  window.location= "Sala.html"
}