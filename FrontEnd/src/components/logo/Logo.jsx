import Image from './../../../assests/images/my_unsplash_logo.svg';

import './Logo.module.css';

export default function Logo() {
  return (
    <div>
      <img src={Image} alt="" />
    </div>
  );
}
