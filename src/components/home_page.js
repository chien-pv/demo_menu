import MoreTemplate from './commons/more_template';
function HomePage(){
    return(
      <>
        <h2>Pro Sidebar</h2>
        <hr/>
        <div className="row">
          <div className="form-group col-md-12">
            <p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>
            <p> You can find the complete code on <a href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank">
                Github</a>, it contains more themes and background image option</p>
          </div>
          <div className="form-group col-md-12">
            <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small" frameborder="0" scrolling="0" width="90px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="90px" height="30px"></iframe>
          </div>
          <div className="form-group col-md-12">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">New !</h4>
              <p>New react pro sidebar library is now available on <a href="https://www.npmjs.com/package/react-pro-sidebar" target="_blank">npm</a> <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank">
                  <img alt="GitHub stars" src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social" />
                </a></p>
              <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" className="btn btn-sm btn-primary mr-2">
                Github</a>
              <a href="https://azouaoui-med.github.io/react-pro-sidebar" target="_blank" className="btn btn-sm btn-success">
                Demo</a>
            </div>
          </div>
        </div>
        <MoreTemplate/>
      </>
    )
}

export default HomePage;