import React from 'react';
import './dashboard.scss';
import { dashboardImages } from '../../utils/dashboard-helper';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const trending = {
    img: dashboardImages.desert,
    link: '/page-scroll',
  };
  const navItems = [
    {
      title: 'Page Scroll Effect',
      description:
        'Scroll down to see the Parallax effect, without using the Parallax packages.',
      img: dashboardImages.desert,
      link: '/page-scroll',
    },
    {
      title: 'Jumping-Doraemon',
      description: 'funny scroll work, with some nice animations',

      img: dashboardImages.flyDora,
      link: '/doraemon-jump',
    },

    {
      title: 'Earth Landing',
      description: 'Cat jump effect from moon to earth. with parallax effect.',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
    },
    {
      title: 'Scroll Indicator',
      description: 'Scroll down to see the scroll indicator effect',
      img: dashboardImages.scrollIndicator,
      link: '/scroll-progressbar',
    },
  ];

  const handleNavigation = (link) => {
    navigate(`${link}`);
  };
  return (
    <div className='dashboard-main-container'>
      <div className='trending-container'>
        <img
          onClick={() => handleNavigation(trending.link)}
          src={trending.img}
          alt='Trending'
        />
      </div>
      <div className='sub-titles-container'>
        <h2> Animations : </h2>
      </div>
      <div className='cards-container'>
        {navItems.map((item, index) => (
          <div
            className='card-container'
            onClick={() => handleNavigation(item.link)}>
            <div className='banner-container'>
              <img
                src={item.img}
                alt='poster'
              />
            </div>
            <div className='details-container'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
