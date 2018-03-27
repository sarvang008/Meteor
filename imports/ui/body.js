
import { Template } from 'meteor/templating';

import './body.html';
import {books} from '../api/prod.js';



Template.add.events({

'submit.submit':function(event){

    var data=$('.add_text').val();
    console.log(data);
    
    data=event.target.text.value;

    //console.log(books.find());
    
    books.insert({
              name:data

    }
);

   

    return false;
}



});

Template.body.helpers({
    tasks() {
      // Show newest tasks at the top
      return books.find();
    },
  });

