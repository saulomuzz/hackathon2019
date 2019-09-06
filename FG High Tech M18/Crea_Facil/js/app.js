function logar() {

    if ($('#number').val() != "1234" && $('#password').val() != "1234") {
        alert("Falha de Acesso, verifique seus dados.");
    } else {
        window.location.href = "./app.php";
        alert(1);

    }
}

function showModal1() {
    $('#myModal1').modal('show');
}
function showModal2() {
    $('#myModal2').modal('show');
}
function showModal3() {
    $('#myModal3').modal('show');
}



function closeModal3() {

    //$('#myModal3').modal('hide');

    location.href = './app.php';
}