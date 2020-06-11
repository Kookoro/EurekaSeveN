import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
  "/Author": "Author",
  "/LoginControl": "LoginControl",
  "/Article": "Article",
  "/footer": "footer",
  "/Clock": "Clock",
  "/Article/Content/0001": "0001",
  "/Article/Content/0002": "0002",
  "/Article/Content/0003": "0003",
};

class NewBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathSnippets: null,
      extraBreadcrumbItems: null,
    };
  }
  getPath = () => {
    // this.state.pathSnippets = this.props.location.pathname
    //   .split("/")
    //   .filter((i) => i);

    this.setState({
      pathSnippets: this.props.location.pathname.split("/").filter((i) => i),
      extraBreadcrumbItems: this.state.pathSnippets.map((_, index) => {
        const url = `/${this.state.pathSnippets.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          </Breadcrumb.Item>
        );
      }),
    });
  };
  componentWillMount() {
    this.getPath();
  }

  render() {
    return <Breadcrumb>{this.state.extraBreadcrumbItems}</Breadcrumb>;
  }
}
export default withRouter(NewBreadcrumb);
