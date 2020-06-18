import User from './components/User';
import Home from './components/User/Home';
import ArticleDetails from './components/User/ArticleDetails';

export default [
  { path: '/', component: User,
    children: [
      {
        path: '/',
        name: 'user-home',
        component: Home
      },
      {
        path: '/article/:slug',
        name: 'user-article-details',
        component: ArticleDetails
      }
    ]
  },
]
