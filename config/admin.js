module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3d1bb93e5d0ef56bacb26076f44d1ed'),
  },
});
