const { withFilter } = require('apollo-server');

const Subscription = {
  restaurant: {
    subscribe: withFilter(
      (parent, args , { pubsub }, info) => pubsub.asyncIterator('restaurant'),
      (payload, variables) => {
        
        const restaurant_region = payload.restaurant.data.region
        
        const region = variables.data.region

        return restaurant_region === region;
      }
    )
  }
}

export { Subscription as default }
