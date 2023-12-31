import { useNavigate } from 'react-router-dom';
import Search from '@/components/common/Search';
import Theme from '@/components/common/Theme';
import './header.css';

const Header = () => {
  const navigator = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigator('/')}>
        <span>MovieTV</span>
      </h1>
      <div className="header-info">
        <Search />
        <Theme />
      </div>
    </header>
  );
};

export default Header;
