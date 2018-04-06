
import { Template } from 'meteor/templating';

import './body.html';
import {books} from '../api/prod.js';

Template.todo.events({

    'click.remove_item':function(){

        books.remove(this._id);

    }



});

Template.update.events({

    'click.btnupdate':function(event) {

    // Set the checked property to the opposite of its current value

     /* var object=$('.add_text').val();

      console.log(object);
      var data =books.find(name:object);

        console.log(data);


    books.update(_id:data._id, {
      $set: { name:'27' }
    });
*/
      var name=$('.add_text').val();
      var age1=$('.update_age').val();
      var doc= books.findOne({name:name});
     // console.log(doc._id);
      if(doc!=""&&age1!=""&&name!=""){
      books.update({_id:doc._id},{$set:{age:age1}});
      console.log('updated');
      }
      else
      {
          alert("name not found or feilds empty");
      }
      $('.add_text').val("");
      $('.update_age').val("");
      
      
return false;
    }




});
Template.add.events({

'click.submit':function(event){

    var data=$('.add_text').val();
    var age1=$('.update_age').val();
    console.log(data);
    
 

    //console.log(books.find());
    
    if(data!=""&&age1!="")
    books.insert({
              name:data,
              age:age1


    }
    
    
);
else
{
    alert("Fields are empty");
}


//event.target.text.value="";
$('.add_text').val("");

$('.update_age').val("");

    return false;
}



});

Template.body.helpers({
    tasks() {
      // Show newest tasks at the top
      return books.find();
    },
  });

