import axios from 'axios';
import { Spin } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './infinitescroll.scss';

function InfinitePageScroll() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const handleFetch = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(`https://randomuser.me/api/?results=10`);
      await setList((prev) => [...prev, ...res.data.results]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);
  useEffect(() => {
    handleFetch();
  }, [page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const handleScroll = () => {
    window.scrollTo(-0, -10);
  };

  console.log(list);
  return (
    <div className='infinite-scroll-container'>
      <div className='home-container'>
        {list &&
          list.map((item, i) => (
            <div
              key={i}
              className='user-card'>
              <img
                className='user-img'
                src={item?.picture?.thumbnail}
                alt=''
              />
              <div className='user-details'>
                <h3 className='user-name'>{`${item?.name?.title}. ${
                  item?.name?.first
                }${' '}${item?.name?.last}`}</h3>
                <p className='user-email'>email: {item?.email}</p>
                <p className='user-email'>
                 Address:  {item?.location?.city ??
                    '' + ' ' + item?.location?.country ??
                    ''}
                </p>
              </div>
            </div>
          ))}
      </div>
      {loading && (
        <div className='loader-container'>
          <Spin
            className='mt10'
            tip='Loading...'
            size='large'
          />
        </div>
      )}
      {error && <p>Error!</p>}
      <div ref={loader} />
      <button
        onClick={handleScroll}
        className='scroll-to-top'
        type='primary'>
        Scroll to Top
      </button>
    </div>
  );
}

export default InfinitePageScroll;
