const SearchController = require("../controllers/SearchController");



module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/search/merchant',
      handler: SearchController.create,
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/user/:id/merchant',
      handler: SearchController.authUserMerchants
    },
  ],
};