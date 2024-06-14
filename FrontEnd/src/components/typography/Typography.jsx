import './Typography.module.css';

export default function Typography({
  text,
  type = 'big',
  color = '#000000b7',
}) {
  switch (type) {
    case 'big':
      type = 'big';
      break;
    case 'medium':
      type = 'medium';
      break;
    default:
      type = 'big';
      break;
  }
  return (
    <div className={type} style={{ color: color }}>
      {text}
    </div>
  );
}
