import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Header extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { user } = this.props;
    const isRoot = user && user.role === 'root';
    const isAdmin = user && user.role === 'admin';
    const isRootOrAdmin = isRoot || isAdmin;

    //Styles

    return (
      <div>
        <Navbar
          style={{
            background: '#ecebf0',
            borderTop: '5px solid #007bff',
            borderBottom: '1px solid #00000020',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '3'
          }}
          className='header'
          expand='md'
        >
          <NavbarBrand href='/'>Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {isRootOrAdmin && (
                <NavItem>
                  <Link href='/create'>
                    <NavLink>+ Create</NavLink>
                  </Link>
                </NavItem>
              )}

              <NavItem>
                <Link href='/cart'>
                  <NavLink>Cart</NavLink>
                </Link>
              </NavItem>

              {user ? (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {user.name}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link href='/account'>
                          <NavLink>Profile</NavLink>
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink>Track Order</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink onClick={handleLogout}>Log Out</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                <>
                  <NavItem>
                    <Link href='/login'>
                      <NavLink>Login</NavLink>
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link href='/signup'>
                      <NavLink>Signup</NavLink>
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
