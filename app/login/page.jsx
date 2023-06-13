import GoogleSignInButton from '../components/GoogleSignInButton'
import styles from './page.module.css'

export default function Login() {

  return(
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2>Sign in to view your Cart</h2>
        <h4>Currently only Google Sign in Allowed</h4>
      </div>
      <div className={styles.loginFormContainer}>
        <form className={styles.signinForm}>
          <input className={styles.input} type='email' name='email' placeholder='Email' />
          <input className={styles.input} type='password' name='password' placeholder='Password' />
          <button className={styles.loginBtn} type='submit'>Login</button>
        </form>
        <div className={styles.separator}></div>
        <div className={styles.googleSignin}>
          <h4>Or Sign in with Google</h4>
          {/* insert new google button here */}
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  )
}
