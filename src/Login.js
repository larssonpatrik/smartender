import { HeadingThree } from "./components/Headings";
function Login() {
  // get the username and password values from the form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var database = firebase.database();

  database
    .ref("users/" + username)
    .once("value")
    .then(function (data) {
      var user = data.val();

      if (user.username == username && user.password == password) {
        var token = generateToken(username);
        sessionStorage.setItem("authToken", token);
        window.location.href = "dashboard.html";
      } else {
        return (
          <HeadingThree>
            Incorrect username or password, please try again
          </HeadingThree>
        );
      }
    });
}
