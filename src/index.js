import pkg from "../package.json";
import schemas from "./schemas/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Accounts extension",
    name: "accounts-extension",
    version: pkg.version,
    graphQL: {
      schemas
    }
  });
}
