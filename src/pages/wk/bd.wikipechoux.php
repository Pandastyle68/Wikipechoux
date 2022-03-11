<?php
include_once "bd.inc.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

//Madeleines
function getMadeleine() {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id,libelle,image from madeleine");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//Mots
function getMots() {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id, nom_mot, definition, date_creation from mot");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

/*function correctMot($mot,$id) { Fonction utilisée pour corriger la base de données qui comporte des espaces dans nom_mot
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("update mot set nom_mot = :newmot WHERE id = :id");
        $req->bindParam(':newmot',$mot,PDO::PARAM_STR);
        $req->bindParam(':id',$id,PDO::PARAM_INT);
        $req->debugDumpParams(true);
        $req->execute();      
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
}
*/ 
function getMotLettre($lettre) {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id, nom_mot, definition from mot where nom_mot like CONCAT(:lettre, '%')");
        $req->bindParam(':lettre',$lettre,PDO::PARAM_STR);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

function getIdByMot($mot) {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id from mot where nom_mot like :mot");
        $req->bindParam(':mot',$mot,PDO::PARAM_STR);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}


function getMotById($id) {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id, nom_mot, definition from mot where id = :id");
        $req->bindParam(':id',$id,PDO::PARAM_INT);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

function getImageMot($id) {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select nom_photo from photo where id_mot = :id");
        $req->bindParam(':id',$id,PDO::PARAM_INT);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

function getVideoMot($id) {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select nom_photo from photo where id_mot =  :id");
        $req->bindParam(':id',$id,PDO::PARAM_INT);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}


function getMotAlea() {
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select id from mot ORDER BY RAND() LIMIT 1");
        $req->bindParam(':id',$id,PDO::PARAM_INT);
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//Lexique de la mer
function getLexique(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select Nom, Définition from lexiquedelamer");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//Lexique des termes culinaires
function getLexiquedestermesculinaires(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select Nom, Définition from lexiquedelamer");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//Lexique des thérapies
function getLexiquedesthérapies(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select Nom, Définition from lexiquedesthérapies");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//Photo
function getPhotos(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select nom_photo from photo");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//proverbes
function getProverbes(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select Lettres, Proverbes, Citations from proverbes");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}

//thèmes
function getThemes(){
    $resultat = array();

    try {
        $cnx = connexionPDO();
        $req = $cnx->prepare("select nom_theme from theme");
        $req->execute();

        $ligne = $req->fetch(PDO::FETCH_ASSOC);
        while ($ligne) {
            $resultat[] = $ligne;
            $ligne = $req->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage();
        die();
    }
    return $resultat;
}
