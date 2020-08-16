 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBnfhAUtW9lVLMeLS7YK4cXXt9NK6iTwSE",
    authDomain: "database-54731.firebaseapp.com",
    databaseURL: "https://database-54731.firebaseio.com",
    projectId: "database-54731",
    storageBucket: "database-54731.appspot.com",
    messagingSenderId: "520217693571",
    appId: "1:520217693571:web:a558fc862cc0f2ce153ab6",
    measurementId: "G-FGEQDLTZK6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





var list = document.getElementById("list")
firebase.database().ref('list').on('child_added',function(data){
    
        //  li tag and node
        var li =document.createElement('li')
        var litext =document.createTextNode(data.val().work)
        li.appendChild(litext)
        //dlt btn
        var dlt = document.createElement("button")
        var dlttext = document.createTextNode("delete")
        dlt.setAttribute('id', data.val().key)
        dlt.setAttribute("onclick","deleteItem(this)")
        dlt.appendChild(dlttext)
        
        //edt btn
        var edt = document.createElement("button")
        var edttext = document.createTextNode("edit")
        edt.setAttribute('id', data.val().key)
        edt.setAttribute("onclick","editItem(this)")
        edt.appendChild(edttext)

        li.appendChild(dlt)
        li.appendChild(edt)
        list.appendChild(li)
        // console.log(data.val())
        
})   
function cd()
{
    var fbase = firebase.database().ref('list')
    var work = document.getElementById('work')
    var key =fbase.push().key
    var work_list = {
        work: work.value,
        key : key

    }
    fbase.child(key).set(work_list)
    work.value=""
    // console.log(key)

}
function deleteItem(e)
{
    e.parentNode.remove()
    firebase.database().ref('list').child(e.id).remove()
}

function editItem(e)
{
    var value = prompt(" ente new work here",e.parentNode.firstChild.nodeValue)
    var edited = {
        work: value ,
        key: e.id
    }
    firebase.database().ref('list').child(e.id).set(edited)
    e.parentNode.firstChild.nodeValue = value
    
}
 function dltall() {
    list.innerHTML=""
    firebase.database().ref('list').remove()  
    
}