import GoogleLogin from 'react-google-login';
import './Login.css'

const clientID = '209823746236-3vptats44ghm6jeuoe6qj5inm6mqfjcf.apps.googleusercontent.com'

function Login({setToken , setUserInfo}) {

    const handleLogin = (googleData) => {
        console.log(googleData);
        setToken(googleData.accessToken);
        setUserInfo(googleData.profileObj);
    }

    const handleFailure = (res) => {
        console.log('Login Failure', res);
    }

    return (
        <div className='login-container'>
            <div className='login-container'>
                <div className='login-wrapper'>

                    <div className='login-left'>
                        <div className='login-welcome'>
                            <h1>კეთილი იყოს შენი მობრძანება.</h1>
                            <p>საიტზე შესასვლელად გთხოვთ გაიარეთ ავტორიზაცია.</p>
                        </div>
                    </div>

                    <div className='login-right'>

                        <div className='login-box'>

                            <div className='login-title-box'>
                                <h1 className='login-title'>ავტორიზაცია</h1>
                            </div>

                            <div className='login-btn'>

                                <GoogleLogin
                                    clientId={clientID}
                                    buttonText="Login With Google" 
                                    onSuccess={handleLogin}
                                    onFailure={handleFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />

                            </div>
                            

                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login