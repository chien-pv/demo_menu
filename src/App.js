import logo from './logo.svg';
import Sidebar from './layouts/sidebar';
import FotterMain from './layouts/footer_main';
import HomePage from './components/home_page';

function App() {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark">
        <i className="fas fa-bars"></i>
      </a>
      <Sidebar/>
      <main className="page-content">
        <div className="container-fluid">
          <HomePage/>
          <hr/>
          <FotterMain/>
        </div>
      </main>
    </div>
  );
}

export default App;
