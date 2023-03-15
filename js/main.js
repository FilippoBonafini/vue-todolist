'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue;

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      // DATO CHE SI AUTOSCRIVE IN BASE ALL'INPUT DELL'UTENTE 
      elementName:'',
      error: false,
        // OGGETTI NELLA LISTA 
        toDoList:[
          {
            elementName:'fare la spesa',
            done: false
          },
          {
            elementName:'lavare i piatti',
            done: false
          },
          {
            elementName:'Prendere i nonni',
            done: false
          }
        ]
    }
  },
  methods:{

    // FUNZIONE CHE ELIMINA UNA VOCE DALL'ARRAY DEGLI OGGETTI 
    deleteItem(index){
      this.toDoList.splice(index,1);
    },

    // FUNZIONE CHE IMPOSTA UNA VOCE 'FATTA'
    doneItem(index){
      this.toDoList[index].done = true;
    },

    // FUNZIONE CHE CREA UN NUOVO ELEMENTO 
    createItem(){
      const newElement = {
        elementName: this.elementName,
        done: false
      }
      if(newElement.elementName !== ''){
        this.toDoList.push(newElement);
        // RESET 
        this.elementName = '';
        this.error=false
        
      }else{
        this.error=true
      }
    },

    // FUNZIONE CHE RENDE NON FATTO UN ELEMENTO 
    saveItem(index){
      this.toDoList[index].done = false;
    }
  }


}).mount('#app');
