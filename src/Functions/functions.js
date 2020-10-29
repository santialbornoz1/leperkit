import React from 'react';
import { useState, useEffect } from "react";
import _ from 'lodash';
import SyncStorage from 'sync-storage';

function orderAscendentByCode(array) {
  var dataordered = _.orderBy(array, ['code'], ['asc']);
  return dataordered
}

function urlFrontEnd() {
  var REACT_APP_URL_FRONT = "http://192.168.100.18:3000/";
  return REACT_APP_URL_FRONT;
}

function urlBackEnd() {
  var REACT_APP_URL_BACK = "http://192.168.100.18:4003/";
  return REACT_APP_URL_BACK;
}


function getImagesDestacados(urlBack) {
  //   const [card, setCard] = useState([]);
  //   fetch(urlBack + "images/destacados")
  //   .then((data) => setCard(data))
  //   return card
  //   // .then(() => document.querySelector("#spinner").classList.add("hidden"))
}

function getToken() {
  var tkn = SyncStorage.get('token') || null;

  // if (tkn) {
  //   alert("TKN", tkn)
  // }
  // else {
  //   alert("NO HAY TOKEN")
  // }

}

export { orderAscendentByCode, urlFrontEnd, urlBackEnd, getImagesDestacados, getToken };
