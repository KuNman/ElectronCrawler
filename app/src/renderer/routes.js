export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/App'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
