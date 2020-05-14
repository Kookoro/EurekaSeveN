import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
  "/Author": "Author",
  "/LoginControl": "LoginControl",
  "/Article": "Article",
  "/footer": "footer",
  "/Clock": "Clock",
  "/Author": "Author",
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
    //对路径进行切分，存放到this.state.pathSnippets中

    this.state.pathSnippets = this.props.location.pathname
      .split("/")
      .filter((i) => i);
    // let arr=this.state.pathSnippets;
    // let pathname=this.context.router.history.location.pathname;
    //将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
    this.state.extraBreadcrumbItems = this.state.pathSnippets.map(
      (_, index) => {
        let url = `/${this.state.pathSnippets.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          </Breadcrumb.Item>
        );
      }
    );
  };
  componentWillMount() {
    this.getPath();
  }

  render() {
    return <Breadcrumb>{this.state.extraBreadcrumbItems}</Breadcrumb>;
  }
}
export default withRouter(NewBreadcrumb);
