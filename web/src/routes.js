import Home from './components/Home/Home';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/article/:slug', name: 'articleDetails', component: ArticleDetails }
]
