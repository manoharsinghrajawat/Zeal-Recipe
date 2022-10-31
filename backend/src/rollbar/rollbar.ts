const Rollbar = require('rollbar')
export const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_APIKEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
})