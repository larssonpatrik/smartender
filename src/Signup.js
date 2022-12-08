import { HeadingThree } from "./components/Headings";

function SignUp() 
// get username, email, and password from user input
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var database = firebase.database();

  database
    .ref("users/" + username)
    .once("value")
    .then(function (data) {

      if (data.exists()) {
        return (
          <HeadingThree>
            Username is already in use. Please choose a different username.
          </HeadingThree>
        );
      } else {
        var user = {
          username: username,
          email: email,
          password: password,
        };

        database.ref("users/" + username).set(user);

        return (<HeadingThree>Account was successfully created. You can now log in.</HeadingThree>)
      }
    });

