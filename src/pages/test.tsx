import { componentOnReady } from '@ionic/core';
import React, { Component } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Ptest: React.FC = () => {
  const test = localStorage.getItem("prenom"); // S
  useIonViewWillEnter(() => {
    renderUsers();
  });
  async function getUsers() {
    let url = 'http://127.0.0.1:8888/wk/php/try.php?type=mots';
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderUsers() {
    let users = await getUsers();
    let html = '';

    //let rdm = Math.floor(Math.random() * users.length);  //Exploiter la base de données quand il y a une donnée choisie au hasard
    //let htmlSegment = `<div class="user">
                         // <h2>${users[rdm].id}</h2>
                          //<h2>${users[rdm].libelle}</h2>
                     // </div>`;

     // html += htmlSegment;
   users.forEach((user: { nom_mot: any; definition: any; image: any; }) => { //Exploiter la base de données quand il y a plusieurs données
     let htmlSegment = `<div class="user">
                          <h2>${user.nom_mot}</h2>
                          <h2>${user.definition}</h2>
                     </div>`;

      html += htmlSegment;
    });

    let container = document.getElementById('container');
    if (container != null) {
      container.innerHTML = html;
    }
  }

  let response = fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' }).then(res => res.json());
  const { name } = useParams<{ name: string; }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{test}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div id="container"></div>
      
    </IonPage>
  );
};

export default Ptest;
