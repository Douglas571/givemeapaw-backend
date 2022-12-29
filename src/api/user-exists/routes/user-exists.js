module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/user-exists',
     handler: 'user-exists.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
