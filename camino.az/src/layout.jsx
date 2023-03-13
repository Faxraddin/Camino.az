import React from 'react';
import Nav from './components/navbar';

class Layout extends React.Component {
    render(){
      return (
        <>
          <Nav />
          <main>{this.props.children}</main>
        </>
      )
    }
  }
  export default Layout;