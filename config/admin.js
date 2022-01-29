module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96dab75f9dea9d0e4486c8937a1950ba'),
  },
});
