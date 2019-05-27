(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{236:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("As an application developer, use the API Catalog to view what services are running in the API Mediation Layer. Through the API Catalog, you can also view the associated API documentation corresponding to a service, descriptive information about the service, and the current state of the service. The tiles in the API Catalog are customized according to the configuration of the mfaas.catalog.ui section in the application.yml for a service. A microservice that is onboarded with the API Mediation Layer and configured appropriately, registers automatically with the API Catalog and a tile for that service is added to the Catalog.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("p",[i("strong",[e._v("Note:")]),e._v(" For more information about how to configure the API Catalog in the application.yml, see: "),i("router-link",{attrs:{to:"./topics/api-mediation/api-mediation-onboard-an-existing-spring-boot-rest-api-service.html"}},[e._v("Add API Onboarding Configuration")]),e._v(".")],1),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("Use the API Catalog to view services, API documentation, descriptive information about the service, the current state of the service, service endpoints, and detailed descriptions of these endpoints.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"api-catalog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-catalog","aria-hidden":"true"}},[this._v("#")]),this._v(" API Catalog")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Ensure that the service you would like to view in the API Catalog is configured to be displayed in the API Catalog.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"view-a-service-in-the-api-catalog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-a-service-in-the-api-catalog","aria-hidden":"true"}},[this._v("#")]),this._v(" View a Service in the API Catalog")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Tip:")]),this._v(" If the home page of the service is configured you can click Home Page to open the services home page.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Follow these steps:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[i("p",[e._v("Verify that your service is running. At least one started and registered instance with the Discovery Service is needed for your service to be visible in the API catalog.")])]),e._v(" "),i("li",[i("p",[e._v("In the API Catalog, find the tile that describes the product family of the API documentation that you are looking for.")]),e._v(" "),i("p",[i("strong",[e._v("Example:")]),e._v(" "),i("code",[e._v("Sample Applications, Endevor, SDK Application")])])]),e._v(" "),i("li",[i("p",[e._v("Click the tile. Header information and the registered services under that family ID is displayed.")]),e._v(" "),i("p",[i("strong",[e._v("Example:")]),e._v(" "),i("img",{attrs:{src:"diagrams/service-detail-info.PNG",alt:"Service Detail Information"}}),e._v(" "),i("strong",[e._v("Note:")]),e._v(" The state of the service is indicated in the tab. If at least one instance of the service is running, the state of the service is represented with a checkmark "),i("img",{attrs:{src:"diagrams/green-check.jpg",alt:"checkmark"}}),e._v(". If no instances of the service are currently running the state of the service is represented as an 'x' "),i("img",{attrs:{src:"diagrams/x-graphic.jpg",alt:"x"}}),e._v(". At least one instance of a service must be started and registered with the discovery service for it to be visible in the API Catalog. If a service was started and the corresponding API documentation was viewed, then that information is cached and is visible even when the service and all instances are stopped.")])]),e._v(" "),i("li",[i("p",[e._v("Click the tab to view the API documentation for that service.\nDescriptive information about the service and a link to the home page of the service is displayed.")])]),e._v(" "),i("li",[i("p",[e._v("Expand the panel to see the high-level description of the API and endpoint groups.")]),e._v(" "),i("p",[i("strong",[e._v("Example:")])]),e._v(" "),i("p",[i("img",{attrs:{src:"diagrams/cntrlr-detail.PNG",alt:"controller detail"}})])]),e._v(" "),i("li",[i("p",[e._v("Expand the endpoints to see a detailed description of the endpoints including the responses and parameters of each endpoint.\nThe summary of the endpoint and the full structure of the endpoint including the base URL and description of the endpoint is displayed.")]),e._v(" "),i("p",[i("strong",[e._v("Note:")]),e._v(" If a lock is visible, the endpoint requires authentication.")]),e._v(" "),i("p",[i("strong",[e._v("Example:")]),e._v(" "),i("img",{attrs:{src:"diagrams/endpoint-detail.PNG",alt:"endpoint detail"}})]),e._v(" "),i("p",[e._v("The structure of the endpoint is displayed relative to the base URL.")]),e._v(" "),i("p",[i("strong",[e._v("Example:")])]),e._v(" "),i("p",[e._v("In the Endpoint panel header section, the abbreviated endpoint relative to the base URL is displayed as the following path:")]),e._v(" "),i("div",{staticClass:"language-aidl extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v(" /api/v1/discoverableclient/movies/list\n")])])]),i("p",[e._v("A full URL that includes the base URL is also displayed as the following path:")]),e._v(" "),i("div",{staticClass:"language-aidl extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v(" https://hostName:basePort/api/v1/discoverableclient/movies/list\n")])])]),i("p",[e._v("Both links target the same endpoint location.")])])])}],!1,null,null,null);s.options.__file="api-mediation-api-catalog.md";t.default=s.exports}}]);