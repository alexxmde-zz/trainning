var MeForm = React.createClass({
  getInitialState: function () {
    return { name : "",
      age: 0 }
  },
  sayHelloToMe : function () {
    this.setState({
      name: document.getElementById('name').value

    },function (){

      alert("Hello, " + this.state.name);
    });
  },
  sayYear : function () {
    var year = new Date().getFullYear();
    this.setState({
      age: year - document.getElementById('age').value
    }, function () {
      alert(this.state.age);
    });
  },

  sayGender : function () {
    var gender = document.getElementById('gender').value;

    if (gender == 'M')
      var message = "You are a boy!";
    if (gender == 'F')
      var message = "You are a girl!";

    this.setState({ 'gender' : gender
    }, function () {
      alert(message);
    });
  },

  save : function() {
  },
  render: function () {
    return(
      <div id="">
        <div>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="age">Your age</label>
          <input type="text" maxLength="3" id="age"></input>
        </div>
        <div>
          <label htmlFor="gender">Are you Male or Female?</label>
          <select id="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <button onClick={this.sayHelloToMe} id="sayHello">Say Hello to Me! </button>
        <button onClick={this.sayYear} id="sayYear">Say the year I was born</button>
        <button onClick={this.sayGender} id="sayGender">Say if I'm a boy or a girl!</button>
        <button onClick={this.save} id="save">Save my Info!</button>
        </div>
    );
  }
});

ReactDOM.render(<MeForm />, document.getElementById("meFormDiv"));
