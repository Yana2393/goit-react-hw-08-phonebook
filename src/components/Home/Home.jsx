import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/authSelectors';
import css from './Home.module.css'

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);

  return isLoggedIn ? (
    <>
      <h2 className={css.formTitle}>Welcome back {name}!</h2>
    </>
  ) : (
    <>
      <h2  className={css.formTitle}>
        Hello! <br />You need to register to use the application 🤍
      </h2>
    </>
  );
};
export default Home;