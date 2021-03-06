/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as os from 'os';

const pjson: any = require('../package.json');

export class LuisAuthoringContext extends msRest.ServiceClient {
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the LuisAuthoringContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: msRest.ServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(credentials, options);

    this.baseUri = "https://{AzureRegion}.api.cognitive.microsoft.{AzureCloud}";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    this.addUserAgentInfo(this.getUserAgent());
  }

  private getUserAgent() : string {
    const packageUserAgent = `${pjson.name}/${pjson.version}`;
    const platformUserAgent = `(${os.arch()}-${os.type()}-${os.release()}; Node.js,Version=${process.version})`;
    const userAgent = `${packageUserAgent} ${platformUserAgent}`;
    
    return userAgent;
  }
}
