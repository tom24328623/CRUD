new Vue({
  el: '#app',
  data: {
    columns: ['No.', 'Name', 'Phone', 'Email','edit', 'delete'],
    persons: [{
      name: "User1",
      phone: "02-12345678",
      email: "aaa@mail.com"
    }, {
      name: "User2",
      phone: "02-12345678",
      email: "bbb@mail.com"
    }, {
      name: "User3",
      phone: "02-12345678",
      email: "ccc@mail.com"
    }, {
      name: "User4",
      phone: "0912-345-678",
      email: "ddd@mail.com"
    }, {
      name: "User5",
      phone: "0912-345-678",
      email: "eee@mail.com"
    }],
    
    input: {
      name: "",
      phone: "",
      email: ""
    },
    editInput: {
      name: "",
      phone: "",
      email: ""
    }
  },
  methods: {
    //add data
    add: function() {
        this.persons.push({
            name: this.input.name,
            phone: this.input.phone,
            email: this.input.email,
            edit: this.input.edit
        });

        for (var key in this.input) {
            this.input[key] = '';
        }
        this.persons.sort(ordonner);
    },
    //edit data 
    edit: function(index) {
        this.editInput = this.persons[index];
        console.log(this.editInput);
        this.persons.splice(index, 1);
    },
    //delete data 
    deplete: function(index) {
        this.persons.splice(index, 1);
    },
    //update data
    update: function(){
        this.persons.push({
            name: this.editInput.name,
            phone: this.editInput.phone,
            email: this.editInput.email,
            edit: this.editInput.edit
        });
        for (var key in this.editInput) {
            this.editInput[key] = '';
        }
        this.persons.sort(ordonner);
    },
    
    
  }
});
//sort table data
var ordonner = function(a, b) {
    return (a.name > b.name);
};