const React = require('react');
const DefaultLayout = require('../Default')

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="signMainWrapper">
        <img class="loginImg" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
          <div class="signupOuterWraper">
            <div className="userTopText">
              <h2>Sign-In</h2></div>
            <form action="/user/login" method="post">
              <fieldset>
                <legend></legend>
                <label
                >Username <input type="text" name="username" required />
                </label>
                <label
                >Password <input type="password" name="password" required />
                </label>
                <input type="submit" value="Continue" />
              </fieldset>
            </form>
            <div className="terms">
              <p></p>
              <span>By creating an account, you agree to Amazon's </span>
              <a href="">Conditions of Use</a>
              <span> and </span>
              <a href="">Privacy Notice.</a>
            </div>
            <p></p>
           
          </div>
          <p></p>
          <div className="newToAmazon">
              <hr />
              <p class="newToAmazonP">New to Amazon?</p>
              <hr />
            </div>
            <a class="btn btn-secondary" href="/user/signup">Create your Amazon account</a>
          <p></p>
          <hr />
          <div className="bottomInfo">
            <a href="">Conditions of Use</a>
            <a href="">Privacy Notice</a>
            <a href="">Help</a>
          </div>
          <span className="copyright">1988-2022, Anthony Rondina and his affiliates</span>
        </div>

      </DefaultLayout>
    )
  }
}

module.exports = Login
