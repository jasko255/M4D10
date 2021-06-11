import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";


const SideBar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Your Library</Nav.Link>
            </Nav.Item>
            
            </Nav>
          
        </>
        );
  };
  
  export default withRouter(SideBar)