import React from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import './App.css';
// import AboutPage from './pages/AboutPage';
// import ArticlesPage from './pages/ArticlesPage';
import Loadable from 'react-loadable';
import RouterListener from './components/RouterListener';

const Loading = () => {
  return <div>로딩중...</div>;
};

const HomePage = Loadable({
  loader: () => import('./pages/HomePage'),
  loading: Loading,
  delay: 300
});

const AboutPage = Loadable({
  loader: () => import('./pages/AboutPage'),
  loading: Loading,
  delay: 300
});

const ArticlesPage = Loadable({
  loader: () => import('./pages/ArticlesPage'),
  loading: Loading,
  delay: 300
});

const App = () => {
  return (
    <div className="App">
      <Menu />
      <main>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles" component={ArticlesPage} />
      </main>
      <RouterListener />
    </div>
  );
};

export default App;
