'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      elementName:'',
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
    deleteItem(index){
      this.toDoList.splice(index,1);
    },
    doneItem(index){
      this.toDoList[index].done = true;
    },
    createItem(){
      const newElement = {
        elementName: this.elementName,
        done: false
      }
      this.toDoList.push(newElement)
    },
    saveItem(index){
      this.toDoList[index].done = false;
    }
  }


}).mount('#app');
