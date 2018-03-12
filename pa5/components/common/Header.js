import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => { 
  return (
    <nav>
    {/*}  <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/login" activeClassName="active">Login</Link>
      {" | "}
      <Link to="/faq" activeClassName="active">FAQ</Link>
      {" | "}
      <Link to="/msg" activeClassName="active">Messages</Link>
      {" | "}
      <Link to="/artist" activeClassName="active">My Page</Link>
  {loading && <LoadingDots interval={100} dots={20}/>}*/}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
