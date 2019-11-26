console.log('this',this);//global object
function whatsThis()
{
    "use strict";
    return this;//depends how it is used i.e with or without strict(window)
}
console.log(whatsThis());
//method
var person = {
  firstName: "John",
  lastName : "Doe",
  getFullName : function() {
    return this.firstName + " " + this.lastName;//owner object
  }
};
console.log(person.getFullName());
//In case of event handlers,this refer to the HTML element that received the event
