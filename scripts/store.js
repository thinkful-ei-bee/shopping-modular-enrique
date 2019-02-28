'use strict';
/* global cuid*/

const store = (function (){
    const items= [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
    const hideCheckedItems= false;
    const searchTerm= '';
    
      function findById(id){
       return items.find(item => item.id === id);
      }

      function addItem(name){
        try{
          Item.validateName(name);
          this.items.push(Item.create(name));
        } catch (error){
          console.log('Cannot add item: ' + error.message);
        }
      }

      function findAndToggleChecked(id){
        this.findById(id).checked = !this.findById(id).checked;
      }

      function findAndUpdateName(id, newName){
        try{
          Item.validateName(newName);
          this.findById(id).name = newName;
        } catch (error){
          console.log(`Cannot update name: ${error.message}`);
        }
      }
      
      function findAndDelete(id){
       this.items = this.items.filter(i => i.id !== id);
      }

      function toggleCheckedFilter(){
        this.hideCheckedItems = !this.hideCheckedItems;
      }

      function setSearchTerm(x){
        this.searchTerm = x;
      }

    return {
       items,
       hideCheckedItems,
       searchTerm, 
       findById,
       addItem,
       findAndToggleChecked,
       findAndUpdateName,
       findAndDelete,
       toggleCheckedFilter,
       setSearchTerm,
       

    }

}() );