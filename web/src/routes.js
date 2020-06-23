import User from './components/User';
import Home from './components/User/Home';
import ArticleDetails from './components/User/ArticleDetails';

import Admin from './components/Admin';
import AdminHome from './components/Admin/Home';

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
  { path: '/admin', component: Admin,
    children: [
      {
        path: '/',
        name: 'admin-home',
        component: AdminHome
      },
    ]
  },
]
