import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './Search.module.css';

export default function Search({ placeholder = 'Search', onChange }) {
  return (
    <div className="search">
      <SearchOutlinedIcon className="search__icon" />
      <input
        className="search__input"
        placeholder={`${placeholder}`}
        onChange={onChange}
      />
    </div>
  );
}
