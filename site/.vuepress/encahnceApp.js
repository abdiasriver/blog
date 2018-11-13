export default ({ router }) => {
  router.addRoutes([
    { path: '/foo/', redirect: '/' },
    { path: '/bar/', redirect: '/' }
  ])
}