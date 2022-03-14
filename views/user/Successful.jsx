const res = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('../Default')

class Login extends React.Component {
    render() {
        const { session, user } = this.props
        console.log(user)
        return (
            <DefaultLayout session={session}>
                <div className="signMainWrapper">
                    <img className="loginImg" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
                    <div className="signupOuterWraper">
                        <div className="userTopText">
                            <h2>Sign-up Successful!</h2>
                        </div>
                        <div className="terms2">
                            <p></p>
                            <a className="btn btn-secondary" href="/user/login">Go to Login</a>
                            <p></p>
                            <div className="terms3">
                                <a href="">Conditions of Use</a>
                                <span> and </span>
                                <a href="">Privacy Notice.</a>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    <p></p>
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
