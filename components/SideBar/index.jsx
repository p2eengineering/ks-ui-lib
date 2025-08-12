import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebar } from '../../constants';
import './SideBar.scss';

export default function SideBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const matchedPath = sidebar.sideBarPathList.find((sidePath) =>
      location.pathname.startsWith(sidePath)
    );
    if (matchedPath) {
      setActiveTab(matchedPath);
    }
  }, [location.pathname]);

  return (
    <div className='sidebar'>
      <div className='sidebar-content-wrapper'>
        {sidebar.list.map((item, index) => {
          const isSelected = activeTab === item.path;
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              className={`sidebar-link ${isSelected ? 'active' : ''}`}
              target={item.target}
              key={index}
            >
              <div className='d-flex align-items-center justify-content-center'>
                <Icon active={isSelected} />
              </div>
              <span className='sidebar-items'>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
