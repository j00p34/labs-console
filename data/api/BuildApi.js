/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end. Additionally, this API will be used to experiment with new concepts in order to allow the Automation API (https://github.com/rht-labs/automation-api) to remain stable.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/Body'), require('../model/Build'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.BuildApi = factory(root.RedHatOpenInnovationLabsConsoleApi.ApiClient, root.RedHatOpenInnovationLabsConsoleApi.ErrorModel, root.RedHatOpenInnovationLabsConsoleApi.Body, root.RedHatOpenInnovationLabsConsoleApi.Build);
  }
}(this, function(ApiClient, ErrorModel, Body, Build) {
  'use strict';

  /**
   * Build service.
   * @module api/BuildApi
   * @version 0.1.0
   */

  /**
   * Constructs a new BuildApi. 
   * @alias module:api/BuildApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addBuild operation.
     * @callback module:api/BuildApi~addBuildCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new build
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body} opts.body Build object that needs to be added to the store
     * @param {module:api/BuildApi~addBuildCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addBuild = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/builds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the buildsGet operation.
     * @callback module:api/BuildApi~buildsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Build>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Build&#x60; objects. 
     * @param {module:api/BuildApi~buildsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Build>}
     */
    this.buildsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Build];

      return this.apiClient.callApi(
        '/builds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the buildsIdGet operation.
     * @callback module:api/BuildApi~buildsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a &#x60;Build&#x60; object by ID. 
     * @param {Integer} id Build ID
     * @param {module:api/BuildApi~buildsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */
    this.buildsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling buildsIdGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Build;

      return this.apiClient.callApi(
        '/builds/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
