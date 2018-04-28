
import { Template } from 'meteor/templating';

import './body.html';
import {books} from '../api/prod.js';

Template.todo.events({

    'submit.remove_item':function(){

        books.remove(this._id);


        return false;
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
      var mob1=$('.add_no').val();
      var email=$('.add_email').val();
      
      var doc= books.findOne({name:name});
   //  console.log(doc._id);

        if(doc==null)
        {
            alert('name not found or Fields Empty');
        }
         

     else if(doc!=""&&(mob1!=""&&name!=""&&email!="")){
      books.update({_id:doc._id},{$set:{mob:mob1}});
      books.update({_id:doc._id},{$set:{email:email}});
      
      console.log('updated');
      }
      else
      {
          alert(" feilds empty");
      }
      $('.add_text').val("");
      $('.add_no').val("");
      $('.add_email').val("");
      
return false;
    }




});
Template.add.events({

'click.submit':function(event){

    var data=$('.add_text').val();
    var mob1=$('.add_no').val();
    var email=$('.add_email').val();
    console.log(data);
    
 

    //console.log(books.find());
    
    if(data!=""&&mob1!=""&&email!="")
    books.insert({
              name:data,
              mob:mob1,
              email:email


    }
    
    
);
else
{
    alert("Fields are empty");
}


//event.target.text.value="";
$('.add_text').val("");
$('.add_email').val("");
$('.add_no').val("");

    return false;
}



});

Template.body.helpers({
    tasks() {
      // Show newest tasks at the top
      return books.find();
    },
  });

