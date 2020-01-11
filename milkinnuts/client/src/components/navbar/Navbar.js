import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                   <Link to="/" className="link">Home</Link> 
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li><a href="sass.html">Sass</a></li> */}
                   
                        <li> <Link to="/register" className="link">
                            Sign up
            </Link>
                        </li>
                        <li> <Link to="/login" className="link">
                            Log in
            </Link>
                        </li>

                        <li>  <Link to="/delivery" className="link">
                         delivery
            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;