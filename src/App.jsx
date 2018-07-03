import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TopBar from './components/header/topbar/TopBar';
import Header from './components/header/main-header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    const { socialLinks,
      companyInfo,
      menuItems
    } = this.props;
    this.state = {
      socialLinks,
      companyInfo,
      menuItems
    };
  }
  componentDidMount() {

  }

  render() {
    const {
      socialLinks,
      companyInfo,
      menuItems
    } = this.props;
    return (
      <div className="layout">
        {socialLinks &&
          <div className="layout--header">
            <TopBar
              socialLinks={socialLinks}
            />
            <Header
              companyInfo={companyInfo}
              menuItems={menuItems}
            />
          </div>
        }
        <div className="layout--container">
          {this.props.children}
        </div>
        <div className="layout--footer">
        </div>
      </div>
    );
  }
}
App.propTypes = {
  socialLinks: PropTypes.array,
  companyInfo: PropTypes.array,
  menuItems: PropTypes.array
}
/**
 *
 * @param {object} state - State from store
 *
 * @returns {object} props
 */
function mapStateToProps(state) {
  return {
    socialLinks: state.homePageReducer.mediaLinks,
    companyInfo: state.homePageReducer.companyInfo,
    menuItems: state.homePageReducer.menuItems,
  }
}
export default connect(mapStateToProps, null)(App);
