import './style.scss';

// id must be unique

const Toggle = ({ id }) => {
  return (
    <div key={id} class='toggle-switch'>
      <label for={id}>
        <input type='checkbox' id={id} className='toggle-input' />
        <span>
          <small>
            <span className='dot'></span>
          </small>
        </span>
      </label>
    </div>
  );
};

export default Toggle;
