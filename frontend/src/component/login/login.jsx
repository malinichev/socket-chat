import React,{Component} from 'react';

class Login extends Component {
    render(){
        return (
            <div id='login'>
                <form >
                    <label>Username: </label><br/>
                    <input type="text" id='username'/><br/>
                    <input type="submit" value="Log In"/>
                </form>
            </div>
          );
    }
}

export default Login;