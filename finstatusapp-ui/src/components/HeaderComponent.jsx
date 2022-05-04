import React, { Component } from 'react';
import {Nav,NavLink, Bars,NavMenu,NavBtn,NavBtnLink,} from './NavBar/NavBarElements';
import Navbar from './NavBar';
class HearberComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
           
        }
    }
    render() {
        return (
            <div>
                <header>
                    <Nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                            <div><a href='http://localhost:3000/' className='navbar-brand'>FinStatus App</a></div>
                        <NavMenu>
                                <NavLink to='/earnings' >
                                Earnings
                                </NavLink>
                                <NavLink to='/expenses' >
                                Expenses
                                </NavLink>
                                <NavLink to='/assets' >
                                Assets
                                </NavLink>
                                <NavLink to='/liabilities' >
                                Liabilities
                                </NavLink>
                                <NavLink to='/blogs' >
                                    Blogs
                                </NavLink>
                                <NavLink to='/sign-up' >
                                    Sign Up
                                </NavLink>
                                {/* Second Nav */}
                                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                                <NavBtn>
                                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                                </NavBtn>
                        </NavMenu>
                    </Nav>
                </header>
            </div>
        );
    }
}

export default HearberComponent;