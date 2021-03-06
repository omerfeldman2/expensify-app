import { Link } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to='/dashboard' className="header__title">
                    <h1>Expensify</h1>
                </Link>
                <h5 className='noa'>אפליקציה זו מוקדשת לגברת נועה שיינוביץ הגיבורה שסוגרת שבת אחרי שבת למרות הקושי, אוהבים אותך נועה</h5>
                <button onClick={startLogout} className="button button--link">Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);