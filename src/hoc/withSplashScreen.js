import React, { Component } from "react";
import logo from "../assets/image/logo_sparc.png";
import customer from "../assets/Picture3.avif";
function SplashMessage() {
  return (
    <div className="splash-screen">
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}
const preloadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve; // Đánh dấu đã tải xong ảnh
  });
};
export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        await preloadImage(customer);
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}
