  //an exapple of how "this" works in JavaScript
  var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
      // Notice we use "this" just as we used "he" in the example sentence earlier?:​
      console.log(this.firstName + " " + this.lastName);
      // We could have also written this:​​
      console.log(person.firstName + " " + person.lastName);
    }
};

  //
  var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​
    // "this" will have the value of the person object because the person object will invoke showFullName ()​
    showFullName:function () {
      console.log (this.firstName + " " + this.lastName);
    }
  };
    person.showFullName (); // Penelope Barrymore