import React, { Component } from 'react';
import {Nav,NavLink, Bars,NavMenu,NavBtn,NavBtnLink,} from '../NavBar/NavBarElements';


class EarningsHeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state ={
           
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Nav className='navbar navbar-expand-md navbar-light bg-dark'>
                        <NavMenu>
                                <NavLink to='/earnings/summary' >
                                Earnings Summary
                                </NavLink>
                                <NavLink to='/earnings/report' >
                                Earnings Report
                                </NavLink>
                                <NavLink to='/earnings/add' >
                                Add Earning
                                </NavLink>
                        </NavMenu>
                    </Nav>

                    </header>
            </div>
        );
    }
}

export default EarningsHeaderComponent;