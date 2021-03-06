import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
import AdminWrapper from "./component/admin/AdminWrappers";
import Dashboard from "./component/admin/Dashboard";
// import NotFound from "./component/common/notFound";
import LoginWrapper from "./component/common/loginWrapper";
import Users from "./component/admin/users";
import Posts from "./component/admin/posts";
import AddPost from "./component/admin/addPost";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Coding from "./component/common/Coding";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route
          exact={true}
            path="/Signup"
            render={(props) => {
              return (this.props.auth.token ? (
                <Redirect to="/" />
              ) : (
                <LoginWrapper>
                  <Signup />
                </LoginWrapper>
              ));
            }}
          />
          <Route
          exact={true}
            path="/login"
            render={(props) => {
              return (
                <LoginWrapper>
                  <Coding />
                </LoginWrapper>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <LogInForm />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
          exact={true}
            path="/admin/users"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <LogInForm />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/admin/posts/:view/:id?"
            exact={true}
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <LogInForm />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
          exact={true}
            path="/admin/posts"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <LogInForm />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
