import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { fetchCategories } from '../store/categoriesSlice';
import { selectFavorites } from '../store/favoritesSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState(null);

  const favorites = useSelector(selectFavorites);
  const favoriteCount = favorites.length;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  const handleCategoryClick = (id) => {
    setActiveCategory(id === activeCategory ? null : id);
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="img/logo.png" alt="" />
            <h1 className="sitename">Bizim<span>Emlak</span></h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
            <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Anasayfa
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/hakkimizda"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Hakkımızda
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ilanlar"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          İlanlar
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/temsilciler"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Temsilcilerimiz
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/iletisim"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          İletişim
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorilerim"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
           Favorilerim ({favoriteCount})
        </NavLink>
      </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
