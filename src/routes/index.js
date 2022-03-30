import Home from '../views/pages/Home';
import About from '../views/pages/About';
import Blog from '../views/pages/Blog';
import Contacts from '../views/pages/Contacts';
import Category from '../views/pages/Category';
import Videos from '../views/pages/Videos';
import Upload from '../views/pages/Upload';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/category/:id',
    component: Category
  },
  {
    path: '/videos/:category_id',
    component: Videos
  },
  {
    path: '/upload',
    component: Upload
  },
];

export default routes;