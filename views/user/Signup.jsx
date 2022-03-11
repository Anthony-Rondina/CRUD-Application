const React = require('react');
const DefaultLayout = require('../Default')

class Signup extends React.Component {
    render() {
        const { session } = this.props
        return (
            <DefaultLayout session={session}>
                <div className="signMainWrapper">
                    <img class="loginImg" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
                    <div class="signupOuterWraper">
                        <div className="userTopText">
                            <h2>Create account</h2></div>
                        <form class="inputForm" action="/user/signup" method="post">
                            <fieldset>
                                <legend></legend>
                                <label> <span>Username</span><br /><input
                                    class="yourname " type="text" name="username" required /> </label>
                                <label
                                ><span>Password</span><br /><input
                                        class="password" type="password" name="password" required />
                                </label>
                                <br /><input type="submit" value="Continue" />
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
                        <hr />
                        <p></p>
                        <div className="already">
                            <span>Already have an account? </span><a href="/user/login">Sign-in</a>
                        </div>

                    </div>
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

module.exports = Signup

