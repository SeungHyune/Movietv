import Search from '@/components/common/Search';
import Theme from '@/components/common/Theme';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>
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
