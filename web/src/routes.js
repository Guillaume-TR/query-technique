import User from './components/User';
import Home from './components/User/Home';
import ArticleDetails from './components/User/ArticleDetails';

import Admin from './components/Admin';
import AdminHome from './components/Admin/Home';
import AdminArticles from './components/Admin/Articles';

import AdminLogin from './components/Admin/Login';

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
      {
        path: 'articles',
        name: 'admin-articles',
        component: AdminArticles
      }
    ]
  },
  { path: '/login', name: 'admin-login', component: AdminLogin },
]
