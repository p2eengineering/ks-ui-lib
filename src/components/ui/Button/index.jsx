import './Button.scss';

const Button = ({ className, title, disabled, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} button-wrapper ${disabled && 'disabled-button'}`}
    >
      {title}
    </button>
  );
};

export default Button;
