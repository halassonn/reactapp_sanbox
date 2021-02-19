import { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

function Main(props) {
  const { children } = props;
  const { history } = children.props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="wrapper">
        {open ? <LinearProgress /> : null}
        <Sidebar />
        <main className="container base_light">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node
};
export default Main;
