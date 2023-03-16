import './style.scss';

export const SignUp = () => {
  return (
    <div className='container-reg'>
      <div className='register-form-container'>
        <h1 className='form-title'>Create your account</h1>
        <div className='form-fields'>
          <div className='form-field'>
            <input type='text' placeholder='Name' />
          </div>
          <div className='form-field'>
            <input type='text' placeholder='Email' />
          </div>
          <div className='form-field'>
            <input type='text' placeholder='Password' />
          </div>
          <div className='form-field'>
            <input type='text' placeholder='Repeat password' />
          </div>
          <div className='form-button'>
            <button className='button'>Sign up</button>
            <p className='text'>or</p>
            <a href='/#' className='button button-google'>
              Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
