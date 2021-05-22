import SidebarDropdow from './sidebar_dropdow';
function SidebarMenu(){
    return(
        <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <SidebarDropdow name="Dashboard" icon="fa fa-tachometer-alt">
                 <ul>
                    <li>
                      <a href="#">Dashboard 1
                        <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
              </SidebarDropdow>
              <SidebarDropdow name="E-commerce" icon="fa fa-shopping-cart">
                <ul>
                    <li>
                      <a href="#">Products

                      </a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
              </SidebarDropdow>
              <SidebarDropdow name="Dashboard" icon="fa fa-tachometer-alt">
                 <ul>
                    <li>
                      <a href="#">Dashboard 1
                        <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
              </SidebarDropdow>
              <SidebarDropdow name="Dashboard" icon="fa fa-tachometer-alt">
                 <ul>
                    <li>
                      <a href="#">Dashboard 1
                        <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
              </SidebarDropdow>
              <SidebarDropdow name="Dashboard" icon="fa fa-tachometer-alt">
                 <ul>
                    <li>
                      <a href="#">Dashboard 1
                        <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
              </SidebarDropdow>
              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book"></i>
                  <span>Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-folder"></i>
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </div>
    )
}

export default SidebarMenu;
