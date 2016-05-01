(function(window, angular, undefined) {'use strict';

var urlBase = "//localhost:3100/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lilybook.data
 * @module
 * @description
 *
 * The `lilybook.data` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lilybook.data", ['ngResource']);

/**
 * @ngdoc object
 * @name lilybook.data.Composer
 * @header lilybook.data.Composer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Composer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Composer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Composers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Composer.compositions() instead.
        "prototype$__get__compositions": {
          isArray: true,
          url: urlBase + "/Composers/:id/compositions",
          method: "GET"
        },

        // INTERNAL. Use Composer.compositions.count() instead.
        "prototype$__count__compositions": {
          url: urlBase + "/Composers/:id/compositions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#create
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Composers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#createMany
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Composers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#upsert
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Composers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#exists
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Composers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#findById
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Composers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#find
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Composers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#findOne
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Composers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#deleteById
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Composers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#prototype$updateAttributes
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Composers/:id",
          method: "PUT"
        },

        // INTERNAL. Use Composition.composer() instead.
        "::get::Composition::composer": {
          url: urlBase + "/Compositions/:id/composer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lilybook.data.Composer#updateOrCreate
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#destroyById
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lilybook.data.Composer#removeById
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lilybook.data.Composer#modelName
    * @propertyOf lilybook.data.Composer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Composer`.
    */
    R.modelName = "Composer";

    /**
     * @ngdoc object
     * @name lilybook.data.Composer.compositions
     * @header lilybook.data.Composer.compositions
     * @object
     * @description
     *
     * The object `Composer.compositions` groups methods
     * manipulating `Composition` instances related to `Composer`.
     *
     * Call {@link lilybook.data.Composer#compositions Composer.compositions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lilybook.data.Composer#compositions
         * @methodOf lilybook.data.Composer
         *
         * @description
         *
         * Queries compositions of Composer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        R.compositions = function() {
          var TargetResource = $injector.get("Composition");
          var action = TargetResource["::get::Composer::compositions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Composer.compositions#count
         * @methodOf lilybook.data.Composer.compositions
         *
         * @description
         *
         * Counts compositions of Composer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.compositions.count = function() {
          var TargetResource = $injector.get("Composition");
          var action = TargetResource["::count::Composer::compositions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Composition
 * @header lilybook.data.Composition
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Composition` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Composition",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Compositions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Composition.composer() instead.
        "prototype$__get__composer": {
          url: urlBase + "/Compositions/:id/composer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#create
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Compositions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#createMany
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Compositions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#upsert
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Compositions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#exists
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Compositions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#findById
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Compositions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#find
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Compositions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#findOne
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Compositions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#deleteById
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Compositions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#count
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Compositions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#prototype$updateAttributes
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Compositions/:id",
          method: "PUT"
        },

        // INTERNAL. Use Composer.compositions() instead.
        "::get::Composer::compositions": {
          isArray: true,
          url: urlBase + "/Composers/:id/compositions",
          method: "GET"
        },

        // INTERNAL. Use Composer.compositions.count() instead.
        "::count::Composer::compositions": {
          url: urlBase + "/Composers/:id/compositions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lilybook.data.Composition#updateOrCreate
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#destroyById
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lilybook.data.Composition#removeById
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composition` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lilybook.data.Composition#modelName
    * @propertyOf lilybook.data.Composition
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Composition`.
    */
    R.modelName = "Composition";


        /**
         * @ngdoc method
         * @name lilybook.data.Composition#composer
         * @methodOf lilybook.data.Composition
         *
         * @description
         *
         * Fetches belongsTo relation composer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Composer` object.)
         * </em>
         */
        R.composer = function() {
          var TargetResource = $injector.get("Composer");
          var action = TargetResource["::get::Composition::composer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Account
 * @header lilybook.data.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Account",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Accounts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Account.bookmarks.findById() instead.
        "prototype$__findById__bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.bookmarks.destroyById() instead.
        "prototype$__destroyById__bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.bookmarks.updateById() instead.
        "prototype$__updateById__bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.bookmarks() instead.
        "prototype$__get__bookmarks": {
          isArray: true,
          url: urlBase + "/Accounts/:id/bookmarks",
          method: "GET"
        },

        // INTERNAL. Use Account.bookmarks.create() instead.
        "prototype$__create__bookmarks": {
          url: urlBase + "/Accounts/:id/bookmarks",
          method: "POST"
        },

        // INTERNAL. Use Account.bookmarks.count() instead.
        "prototype$__count__bookmarks": {
          url: urlBase + "/Accounts/:id/bookmarks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#findById
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Accounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#login
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Accounts/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#logout
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Accounts/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#confirm
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Accounts/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#resetPassword
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Accounts/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#bookmarks
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "bookmarks": {
          isArray: true,
          url: urlBase + "/Accounts/bookmarks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Account#getCurrent
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Accounts" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lilybook.data.Account#getCachedCurrent
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lilybook.data.Account#login} or
         * {@link lilybook.data.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account#isAuthenticated
         * @methodOf lilybook.data.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account#getCurrentId
         * @methodOf lilybook.data.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lilybook.data.Account#modelName
    * @propertyOf lilybook.data.Account
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Account`.
    */
    R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lilybook.data.Account.bookmarks
     * @header lilybook.data.Account.bookmarks
     * @object
     * @description
     *
     * The object `Account.bookmarks` groups methods
     * manipulating `Bookmark` instances related to `Account`.
     *
     * Call {@link lilybook.data.Account#bookmarks Account.bookmarks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lilybook.data.Account#bookmarks
         * @methodOf lilybook.data.Account
         *
         * @description
         *
         * Queries bookmarks of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R.bookmarks = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::get::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#count
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Counts bookmarks of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.bookmarks.count = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::count::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#create
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Creates a new instance in bookmarks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R.bookmarks.create = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::create::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#createMany
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Creates a new instance in bookmarks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R.bookmarks.createMany = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::createMany::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#destroyById
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Delete a related item by id for bookmarks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookmarks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bookmarks.destroyById = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::destroyById::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#findById
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Find a related item by id for bookmarks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookmarks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R.bookmarks.findById = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::findById::Account::bookmarks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lilybook.data.Account.bookmarks#updateById
         * @methodOf lilybook.data.Account.bookmarks
         *
         * @description
         *
         * Update a related item by id for bookmarks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookmarks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R.bookmarks.updateById = function() {
          var TargetResource = $injector.get("Bookmark");
          var action = TargetResource["::updateById::Account::bookmarks"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Form
 * @header lilybook.data.Form
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Form` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Form",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Forms/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.Form#exists
         * @methodOf lilybook.data.Form
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Forms/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Form#findById
         * @methodOf lilybook.data.Form
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Form` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Forms/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Form#find
         * @methodOf lilybook.data.Form
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Form` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Forms",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Form#findOne
         * @methodOf lilybook.data.Form
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Form` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Forms/findOne",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lilybook.data.Form#modelName
    * @propertyOf lilybook.data.Form
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Form`.
    */
    R.modelName = "Form";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Key
 * @header lilybook.data.Key
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Key` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Key",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Keys/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.Key#exists
         * @methodOf lilybook.data.Key
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Keys/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Key#findById
         * @methodOf lilybook.data.Key
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Key` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Keys/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Key#find
         * @methodOf lilybook.data.Key
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Key` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Keys",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Key#findOne
         * @methodOf lilybook.data.Key
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Key` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Keys/findOne",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lilybook.data.Key#modelName
    * @propertyOf lilybook.data.Key
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Key`.
    */
    R.modelName = "Key";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.ABRSM
 * @header lilybook.data.ABRSM
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ABRSM` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ABRSM",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ABRSMs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.ABRSM#exists
         * @methodOf lilybook.data.ABRSM
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ABRSMs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.ABRSM#findById
         * @methodOf lilybook.data.ABRSM
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ABRSM` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ABRSMs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.ABRSM#find
         * @methodOf lilybook.data.ABRSM
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ABRSM` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ABRSMs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.ABRSM#findOne
         * @methodOf lilybook.data.ABRSM
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ABRSM` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ABRSMs/findOne",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lilybook.data.ABRSM#modelName
    * @propertyOf lilybook.data.ABRSM
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ABRSM`.
    */
    R.modelName = "ABRSM";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Henle
 * @header lilybook.data.Henle
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Henle` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Henle",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Henles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.Henle#exists
         * @methodOf lilybook.data.Henle
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Henles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Henle#findById
         * @methodOf lilybook.data.Henle
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Henle` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Henles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Henle#find
         * @methodOf lilybook.data.Henle
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Henle` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Henles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Henle#findOne
         * @methodOf lilybook.data.Henle
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Henle` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Henles/findOne",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lilybook.data.Henle#modelName
    * @propertyOf lilybook.data.Henle
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Henle`.
    */
    R.modelName = "Henle";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.RCM
 * @header lilybook.data.RCM
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RCM` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RCM",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RCMs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.RCM#exists
         * @methodOf lilybook.data.RCM
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RCMs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.RCM#findById
         * @methodOf lilybook.data.RCM
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RCM` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RCMs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.RCM#find
         * @methodOf lilybook.data.RCM
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RCM` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RCMs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.RCM#findOne
         * @methodOf lilybook.data.RCM
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RCM` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RCMs/findOne",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lilybook.data.RCM#modelName
    * @propertyOf lilybook.data.RCM
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RCM`.
    */
    R.modelName = "RCM";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lilybook.data.Bookmark
 * @header lilybook.data.Bookmark
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Bookmark` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Bookmark",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Bookmarks/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#create
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Bookmarks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#createMany
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Bookmarks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#upsert
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Bookmarks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#exists
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Bookmarks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#findById
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Bookmarks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#find
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Bookmarks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#findOne
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Bookmarks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#updateAll
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Bookmarks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#deleteById
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Bookmarks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#count
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Bookmarks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#prototype$updateAttributes
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Bookmarks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#checkBookmark
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `compositionId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `bookmarked` – `{boolean=}` - 
         */
        "checkBookmark": {
          url: urlBase + "/Bookmarks/checkBookmark",
          method: "GET"
        },

        // INTERNAL. Use Account.bookmarks.findById() instead.
        "::findById::Account::bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.bookmarks.destroyById() instead.
        "::destroyById::Account::bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.bookmarks.updateById() instead.
        "::updateById::Account::bookmarks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/bookmarks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.bookmarks() instead.
        "::get::Account::bookmarks": {
          isArray: true,
          url: urlBase + "/Accounts/:id/bookmarks",
          method: "GET"
        },

        // INTERNAL. Use Account.bookmarks.create() instead.
        "::create::Account::bookmarks": {
          url: urlBase + "/Accounts/:id/bookmarks",
          method: "POST"
        },

        // INTERNAL. Use Account.bookmarks.createMany() instead.
        "::createMany::Account::bookmarks": {
          isArray: true,
          url: urlBase + "/Accounts/:id/bookmarks",
          method: "POST"
        },

        // INTERNAL. Use Account.bookmarks.count() instead.
        "::count::Account::bookmarks": {
          url: urlBase + "/Accounts/:id/bookmarks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#updateOrCreate
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#update
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#destroyById
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lilybook.data.Bookmark#removeById
         * @methodOf lilybook.data.Bookmark
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bookmark` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lilybook.data.Bookmark#modelName
    * @propertyOf lilybook.data.Bookmark
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Bookmark`.
    */
    R.modelName = "Bookmark";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lilybook.data.LoopBackResourceProvider
   * @header lilybook.data.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lilybook.data.LoopBackResourceProvider#setAuthHeader
     * @methodOf lilybook.data.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lilybook.data.LoopBackResourceProvider#setUrlBase
     * @methodOf lilybook.data.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lilybook.data.LoopBackResourceProvider#getUrlBase
     * @methodOf lilybook.data.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
