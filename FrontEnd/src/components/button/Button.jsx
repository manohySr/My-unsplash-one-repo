import './Button.module.css';

export default function Button({
  text = 'Button',
  color = 'rgb(61, 183, 109)',
  type = 'normal',
}) {
  if (type == 'normal') {
    return (
      <>
        <button className="btn" style={{ background: `${color}` }}>
          {text}
        </button>
      </>
    );
  } else if (type === 'outlined') {
    return (
      <>
        <button
          className="btn outlined"
          style={{
            color: `${color} !important`,
            border: `2px solid ${color} !important`,
          }}
        >
          {text}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="btn default">{text}</button>
      </>
    );
  }
}
