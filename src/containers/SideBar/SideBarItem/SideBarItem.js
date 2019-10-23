import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import './SideBarItem.scss';

class SideBarItem extends Component {

  shouldBeHighLighted = () => {
    const { pathname } = this.props.location;
    const path = this.props.path;
    console.log('pathname = ', pathname);

    if (path === '/') {
      return pathname === path;
    }
    return pathname.includes(path);
  }

  render() {
    const { icon, label, path } = this.props;
    // React will ignore custom boolean attributes, therefore we pass a string
    // we use this attribute in our SCSS styling
    const highLight = this.shouldBeHighLighted() ? 'highlight-item' : null;
    return (
      <Link to={{pathname: path}}>
        <Menu.Item className={['sidebar-item', highLight].join(' ')}>
          <div className='sidebar-item-alignment-container'>
            <span>
              <Icon size='large' name={icon} />
            </span>
            <span>{label}</span>
          </div>
        </Menu.Item>
      </Link>
    );
  }
}

export default withRouter(SideBarItem);
