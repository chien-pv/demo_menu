import SidebarMenu from './sidebars/sidebar_menu';

function Sidebar(){
    return(
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#">pro sidebar</a>
            <div id="close-sidebar">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                alt="User picture"/>
            </div>
            <div className="user-info">
              <span className="user-name">Jhon
                <strong>Smith</strong>
              </span>
              <span className="user-role">Administrator</span>
              <span className="user-status">
                <i className="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..."/>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SidebarMenu/>
        </div>
        <div className="sidebar-footer">
          <a href="#">
            <i className="fa fa-bell"></i>
            <span className="badge badge-pill badge-warning notification">3</span>
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
            <span className="badge badge-pill badge-success notification">7</span>
          </a>
          <a href="#">
            <i className="fa fa-cog"></i>
            <span className="badge-sonar"></span>
          </a>
          <a href="#">
            <i className="fa fa-power-off"></i>
          </a>
        </div>
      </nav>
    )
}

export default Sidebar;
