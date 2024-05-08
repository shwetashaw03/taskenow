import logo from './../assets/images/logo.png';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="site-header">
      <div className="top-header">
				<div className="container">
                    <ul className="top-link">
                        <li className="account" id="my_account">
                            <a href="mailto:info@dummy.com" title="my account"> 
                                <span className="fa fa-envelope"></span>
                                info@dummy.com
                            </a>
                        </li>
                        <li className="account" id="my_account">
                            <a href="tel:0987654321" title="my account"> 
                                <span className="fa fa-phone"></span>
                                09876 54321 
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="bottom-header">
				<div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="" title=""><img src="/src/assets/images/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
    </header>
  );
};

export default Header;