'use strict';

/**
 * A set of functions called "actions" for `user-exists`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {

      let users = await strapi.entityService.findMany(
        "plugin::users-permissions.user", {filters: {email: ctx.request.query.email}}
      )

      ctx.body = JSON.stringify({
        userExists: users.length !== 0
      })

    } catch (err) {
      console.log({err})
      ctx.body = err;
    }
  }
};
