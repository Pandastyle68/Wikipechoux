<?php include_once "bd.inc.php";
include_once "bd.wikipechoux.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if (isset($_GET['type'])) { // Permet de retourner les bonnes informations selon l'url ?type=
    if ($_GET['type'] == 'madeleines') {
        $data = getMadeleine();
        $encoded =  json_encode($data);
        echo ($encoded);
    } else if ($_GET['type'] == 'idmot') {
        if (isset($_GET['id'])) {
            $data = getMotById($_GET['id']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
    } else if ($_GET['type'] == 'motalea') {
        $data = getMotAlea();
        $encoded = json_encode($data);
        echo ($encoded);
    } else if ($_GET['type'] == 'mots') {
        $data = getMots();
        $encoded = json_encode($data);
        echo ($encoded);
    } else if ($_GET['type'] == 'defmot') {
        if (isset($_GET['mot'])) {
            $data = getIdByMot($_GET['mot']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
    } else if ($_GET['type'] == 'motrecherche') {
        if (isset($_GET['lettre'])) {
            $data = getMotLettre($_GET['lettre']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
    } else if ($_GET['type'] == 'motordre') {
        if (isset($_GET['lettre'])) {
            $data = getMotByOrdreAlpha($_GET['lettre']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
    } else if ($_GET['type'] == 'image') {
        if (isset($_GET['id'])) {
            $data = getImageMot($_GET['id']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
        /*} else if ($_GET['type'] == 'correct') { Utilisé pour corriger la base de données - > table mot - > colonne nom_mot où il y a des espaces
        $data = getMots();
        foreach($data as $unMot){
            correctMot(trim($unMot['nom_mot']," \n\r\t\v\x00"), $unMot['id']);
        }
    }*/
    } else if ($_GET['type'] == 'video') {
        if (isset($_GET['id'])) {
            $data = getVideoMot($_GET['id']);
            $encoded = json_encode($data);
            echo ($encoded);
        }
    }
}
