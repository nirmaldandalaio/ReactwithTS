import React from "react";
import HomePage from '../pages/HomePage';
import TechPage from '../pages/TechPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
    <Router>
        <div className="container Main">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav container NavItemBox">
                            <Link to="/">HOME</Link>
                            <Link to="/tech/">TECH</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-2"></div>
            </div>
            <Route path="/" exact component={HomePage} />
            <Route path="/tech/" component={TechPage} />
        </div>
    </Router>
);

export default AppRouter;