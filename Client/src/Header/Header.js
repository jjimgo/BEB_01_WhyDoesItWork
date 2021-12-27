import './Header.css';
import { Search } from './HeaderComponent/hcSearch';
import { LogIn } from './HeaderComponent/hcLogIn';
import { SignIn } from './HeaderComponent/hcSignIn';
import { LogOut } from './HeaderComponent/hcLogOut';
import { Menu } from './HeaderComponent/hcMenu';

import { Link } from "react-router-dom";

const Logo = () => {
    console.log("Logo-Part");

    return (
        <div className="logo">
            {/*Logo*/}
            <img src="https://media.vlpt.us/images/johnnyji/post/243c436a-54a7-4960-b1c0-d9955bd7263b/logo_whydoesitwork.png"></img>
        </div>
    )
}

const Empty = () => {
    console.log("Empty-Part");

    return (
        <div className="Empty">
            {/*Empty*/}
        </div>
    )
}

const Write = () => {
    console.log("Write-Part");
    return (
        <div className="Write">
            {/*Write*/}
            <img src="https://media.vlpt.us/images/johnnyji/post/2ffaa5fe-2569-4ecb-854e-cebab9cebc03/write.png"></img>
        </div>
    )
}

const Header = () => {
    console.log("Header-Part");

    return (
        <div className="inner_header_row">
            <div className="inner_header_col">
                {/*Header*/}
                <Link to="/">
                    <Logo />
                </Link>
                <Empty />
                <Search />
                <Link to="/LogIn">
                    <LogIn />
                </Link>
                <Link to="/SignIn">
                    <SignIn />
                </Link>
                {/*<Link to="/LogOut">*/}
                <LogOut />
                {/*</Link>*/}
                <Link to="/Write">
                    <Write />
                </Link>
                <Link to="/Menu">
                    <Menu />
                </Link>
            </div>
        </div>
    )
};

export default Header