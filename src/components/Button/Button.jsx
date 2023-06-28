import css from './Button.module.css';

export const Button = ({ handleMoreImage }) => {
  return (
    <>
      <button className={css.button} onClick={handleMoreImage}>
        Load More
      </button>
    </>
  );
};
