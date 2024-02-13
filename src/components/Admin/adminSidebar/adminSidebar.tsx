import tokenDecode from '../../../hooks/tokenDecode';
import './adminSidebar.css';


export default function AdminSidebar() {
  const handleArrowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const arrowParent = (e.target as HTMLElement).parentElement?.parentElement;
    if (arrowParent) {
      arrowParent.classList.toggle("showMenu");
    }
  };
  return (
<>
  <div className="sidebar">
    <div className="logo-details">
    <img src='https://tobeto.com/_next/static/media/tbtlogo-gradient.7979f966.svg' width={24} height={24}></img>
      <span className="logo_name">Tobeto</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <span className="link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              Category
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="bx bx-collection" />
            <span className="link_name">Category</span>
          </a>
          <i className="bx bxs-chevron-down arrow" onClick={handleArrowClick}/>
        </div>
        <ul className="sub-menu">
          <li>
            <a className="link_name" href="#">
              Category
            </a>
          </li>
          <li>
            <a href="#">HTML &amp; CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
          <li>
            <a href="#">PHP &amp; MySQL</a>
          </li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="bx bx-book-alt" />
            <span className="link_name">Posts</span>
          </a>
          <i className="bx bxs-chevron-down arrow" onClick={handleArrowClick}/>
        </div>
        <ul className="sub-menu">
          <li>
            <a className="link_name" href="#">
              Posts
            </a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Login Form</a>
          </li>
          <li>
            <a href="#">Card Design</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <span className="link_name">Analytics</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              Analytics
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-line-chart" />
          <span className="link_name">Chart</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              Chart
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="bx bx-plug" />
            <span className="link_name">Plugins</span>
          </a>
          <i className="bx bxs-chevron-down arrow"  onClick={handleArrowClick}/>
        </div>
        <ul className="sub-menu">
          <li>
            <a className="link_name" href="#">
              Plugins
            </a>
          </li>
          <li>
            <a href="#">UI Face</a>
          </li>
          <li>
            <a href="#">Pigments</a>
          </li>
          <li>
            <a href="#">Box Icons</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-compass" />
          <span className="link_name">Explore</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              Explore
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-history" />
          <span className="link_name">History</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              History
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="link_name">Setting</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="#">
              Setting
            </a>
          </li>
        </ul>
      </li>
      <li>
        <div className="profile-details">
          <div className="profile-content">
            {/*<img src="image/profile.jpg" alt="profileImg">*/}
          </div>
          <div className="name-job">
            <div className="profile_name">{tokenDecode().Name}</div>
            <div className="job">Web Desginer</div>
          </div>
          <i className="bx bx-log-out" />
        </div>
      </li>
    </ul>
  </div>
  <section className="home-section">
    <div className="home-content">
      <span className="text">Drop Down Sidebar</span>
    </div>
  </section>
</>

  )
}
