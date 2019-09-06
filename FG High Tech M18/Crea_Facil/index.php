
<?php
date_default_timezone_set ('America/Sao_Paulo');
# Informa qual o conjunto de caracteres será usado.


// Mensagens de Erro
error_reporting(E_ALL);
ini_set('display_errors',false);
if ($_SESSION["logado"] == null) {
     session_start();
}

//if (!$_SESSION["logado"]) {
    echo file_get_contents("./html/login.html");
//} else {
 //   echo $matricula;
//}
?>
