import React from 'react';
import './dashboard.scss';
import { dashboardImages } from '../../utils/dashboard-helper';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const trending = {
    img: dashboardImages.trending,
    link: '/earthlanding',
  };
  const navItems = [
    {
      title: 'Earth Landing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
    },
    {
      title: 'Jumping-Doraemon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

      img: dashboardImages.flyDora,
      link: '/doraemon-jump',
    },
    {
      title: 'Page Scroll Effect',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: dashboardImages.desert,
      link: '/page-scroll',
    },
    {
      title: 'Earth Landing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: dashboardImages.landingcat,
      link: '/earthlanding',
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
