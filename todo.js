// function showConfirm(e) {
//     e.preventDefault();

//     Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         confirmButtonText: 'Yeap!'
//     });
// }
  
//   document.querySelector('button').addEventListener('click', showConfirm);

// function create_todo(){
//     let 
// }

let modalBtns = [...document.querySelectorAll(".add-btn")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    // let modal = btn.getAttribute("data-modal");
    document.getElementById("model").style.display = "block";
  };
});
let closeBtns=document.querySelectorAll(".close");
closeBtns.forEach(function (btn) {
    btn.onclick =function(){
        document.getElementById("model").style.display = "none";
    }
})
window.onclick = function(event){
    if (event.target.className === "model"){
        event.target.style.display="none";
    }



}