import React from 'react';
import { useState, useEffect } from "react";
import _ from 'lodash';


function orderAscendentByCode(array){
var dataordered =_.orderBy(array, ['code'], ['asc']);
return dataordered
}

function urlFrontEnd(){
  var REACT_APP_URL_FRONT="http://192.168.100.18:3000/";
  return REACT_APP_URL_FRONT;
}

function urlBackEnd(){
  // var REACT_APP_URL_BACK="http://66.97.46.226:4003/";
  // var REACT_APP_URL_BACK="http://192.168.100.17:4003/";
  var REACT_APP_URL_BACK="http://192.168.100.18:4003/";
    return REACT_APP_URL_BACK;
  }


  function getImagesDestacados(urlBack){
  //   const [card, setCard] = useState([]);
  //   fetch(urlBack + "images/destacados")
  //   .then((data) => setCard(data))
  //   return card
  //   // .then(() => document.querySelector("#spinner").classList.add("hidden"))
  }

  function getToken(){
    var tkn = localStorage.getItem('token') || null;
    if (tkn) {
      var token = tkn.replace('"', '');
      var token = token.replace('"', '');
      return token;
    }
    // else {
    //   return window.location.href = "as";
    // }

    }

export {orderAscendentByCode, urlFrontEnd, urlBackEnd, getImagesDestacados, getToken};
