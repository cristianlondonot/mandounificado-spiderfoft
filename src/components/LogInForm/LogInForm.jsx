import React, {useState} from 'react'
import Typewriter from 'typewriter-effect';
import VideoBg from '/video/santander.mp4'
import './LogInForm.sass'

const LogInForm = ({onLoginVerification}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleVerification = () => {
    // Constantes declaradas anteriormente
    const correctEmail = 'ejemplo@gmail.com';
    const correctPassword = 'prueba';

    // Verificar si los valores ingresados coinciden con las constantes
    const verification = email === correctEmail && password === correctPassword;

    console.log(verification)
    onLoginVerification(verification);
  };

  return (
    <div className="p-0">
      <div className="heroLogIn">
        <div className="overlay"></div>
        <video src={VideoBg} autoPlay loop muted />
        <div className="content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Mando Unificado</h1>
              <h3 className='text-2xl font-semibold'>
                <Typewriter
                  loop= 'true'
                  onInit={typewriter => {
                    typewriter
                      .typeString('Departamento de Santander')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('Santander seguro, próspero y sostenible.')
                      .start()
                  }}
                />
              </h3>
              <p className="py-6 font-light">La <strong className='font-medium'>Acción Unificada busca la unidad de esfuerzo entre las entidades estatales,</strong> el sector privado, las organizaciones de la sociedad civil, la cooperación internacional, las Fuerzas Militares y la Policía Nacional, con el fin de superar de manera integral la ausencia de Estado, el déficit de su presencia en los Territorios y los factores que generan inestabilidad</p>
            </div>
            <div className="logInForm card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contraseña</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label className="label">
                    <a href="#" className="label-text-alt hover:text-stone-50 underline">¿Olvidaste tu contraseña?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <div className="btn btn-green-dark font-bold text-lg" onClick={handleVerification}>Iniciar sesión</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInForm