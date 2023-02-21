function buttonl____________l(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("tag")
    window.location= "index.html"
}
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

var Username= localStorage.getItem("user_name")

var Salas= localStorage.getItem("tag")

function buttonclick(){
    var guardation_of_mensajetion= document.getElementById("idchido").value
    firebase.database().ref(Salas).push({
        nombre: Username,
        mensaje: guardation_of_mensajetion,
        likes: 0.
    })
    document.getElementById("idchido").value= ""
}
function nombres_salas(){
    firebase.database().ref("/"+Salas).on('value',function(snapshot){
      document.getElementById("divfunc").innerHTML=""
      snapshot.forEach(function (childSnapshot) {
        childKey=childSnapshot.key
        childData=childSnapshot.val()
        mensajesid= childKey
        console.log (mensajesid)
        mensajes= childData
        console.log (mensajes)
        var nombres= mensajes['nombre']
        var glgaspseutk= mensajes['mensaje']
        var likees= mensajes['likes']
        console.log (nombres)
        console.log (glgaspseutk)
        console.log (likees)
        var tppmgxx0= "<h1 id='holaadios'> "+nombres+" </h1>"
        var tppmgxx1= "<h1 id='holaadios'> "+glgaspseutk+" </h1>"
        var tppmgxx2= "<button onclick='onckickultra()' id='holaadios'> "+likees+" </button>"
        var agrupacion= tppmgxx0+tppmgxx1+tppmgxx2
        document.getElementById("divfunc").innerHTML+=agrupacion
      });
    })
}
nombres_salas()