import Logo from '../../components/logo/Logo';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';

import './Header.module.css';

export default function Header({ addStateSet, searchSet }) {
  const onChange = (e) => {
    searchSet(e.target.value);
  };
  return (
    <div className="header">
      <div className="header--left">
        <Logo />
        <div className="header__search">
          <Search placeholder="Search by name" onChange={(e) => onChange(e)} />
        </div>
      </div>
      <div
        onClick={() => {
          // console.log(123);
          addStateSet(true);
        }}
        // style={{ backgroundColor: 'orangered' }}
      >
        <Button text="Add a photo" />
      </div>
    </div>
  );
}
