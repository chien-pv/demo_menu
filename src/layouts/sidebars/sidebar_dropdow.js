function SidebarDropdow(props){
    console.log(props)
    return(
        <li className="sidebar-dropdown">
        <a href="#">
            <i className={props.icon}></i>
            <span>{props.name}</span>
            <span className="badge badge-pill badge-warning">New</span>
        </a>
        <div className="sidebar-submenu" style={{display: "none"}}>
            {props.children}
        </div>
        </li>
    )
}

export default SidebarDropdow;