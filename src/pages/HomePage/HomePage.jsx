import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to your personal Contact Book!</h1>
      <p className={css.subtitle}>
        This site helps you conveniently store and organize your contacts.
      </p>
      <p className={css.subtitle}>To get started, Register or Login</p>
    </>
  );
};

export default HomePage;
