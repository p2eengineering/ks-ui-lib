import './customInput.scss';

function CustomInputField(props) {
  const { prefixIcon, placeholder, ...rest } = props;

  return (
    <div className='ks-custom-inpt'>
      {prefixIcon && prefixIcon}
      <input placeholder={placeholder} {...rest} />
    </div>
  );
}

export default CustomInputField;
