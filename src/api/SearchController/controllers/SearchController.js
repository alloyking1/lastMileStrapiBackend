'use strict';

/**
 * A set of functions called "actions" for `SearchController`
 */

module.exports = {

  create: async (ctx, next) => {
    try {
      const searchZipCode = ctx.request.body.data;
      const query = await strapi.db.query('api::merchant.merchant').findMany({
        where: {
          Zipcode: searchZipCode,
        },
      });

      if (query.length) {
        await ctx.send({
          data: query,
          status: 200
        });
        return false
      }

      await ctx.send({
        data: `No data found for Merchant with Zipcode ${searchZipCode}`,
        status: 404
      });

    } catch (err) {
      await ctx.send({
        error: err,
        message: "Search failed, query param not found",
        status: 500
      })
      // ctx.body = err;
    }
  },

};
