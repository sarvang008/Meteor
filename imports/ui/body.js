
import { Template } from 'meteor/templating';

import './body.html';
import {books} from '../api/prod.js';

Template.todo.events({

    'click.remove_item':function(){

        books.remove(this._id);

    }



});

Template.add.events({

'submit.submit':function(event){

    var data=$('.add_text').val();
    console.log(data);
    
 

    //console.log(books.find());
    
    if(data)
    books.insert({
              name:data

    }
    
    
);
else
{
    alert("Enter text");
}


//event.target.text.value="";
$('.add_text').val("");


    return false;
}



});

Template.body.helpers({
    tasks() {
      // Show newest tasks at the top
      return books.find();
    },
  });

