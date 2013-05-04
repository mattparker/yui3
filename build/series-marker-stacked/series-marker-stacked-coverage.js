if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-marker-stacked/series-marker-stacked.js']) {
   __coverage__['build/series-marker-stacked/series-marker-stacked.js'] = {"path":"build/series-marker-stacked/series-marker-stacked.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":17},"end":{"line":29,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":50,"column":67}},"2":{"start":{"line":20,"column":0},"end":{"line":46,"column":3}},"3":{"start":{"line":30,"column":8},"end":{"line":30,"column":65}},"4":{"start":{"line":31,"column":8},"end":{"line":31,"column":43}}},"branchMap":{},"code":["(function () { YUI.add('series-marker-stacked', function (Y, NAME) {","","/**\r"," * Provides functionality for creating a stacked marker series.\r"," *\r"," * @module charts\r"," * @submodule series-marker-stacked\r"," */\r","/**\r"," * StackedMarkerSeries plots markers with different series stacked along the value axis to indicate each\r"," * series' contribution to a cumulative total.\r"," *\r"," * @class StackedMarkerSeries\r"," * @constructor\r"," * @extends MarkerSeries\r"," * @uses StackingUtil\r"," * @param {Object} config (optional) Configuration parameters.\r"," * @submodule series-marker-stacked\r"," */\r","Y.StackedMarkerSeries = Y.Base.create(\"stackedMarkerSeries\", Y.MarkerSeries, [Y.StackingUtil], {\r","    /**\r","     * @protected\r","     *\r","     * Calculates the coordinates for the series. Overrides base implementation.\r","     *\r","     * @method setAreaData\r","     */\r","    setAreaData: function()\r","    {\r","        Y.StackedMarkerSeries.superclass.setAreaData.apply(this);\r","        this._stackCoordinates.apply(this);\r","    }\r","}, {\r","    ATTRS: {\r","        /**\r","         * Read-only attribute indicating the type of series.\r","         *\r","         * @attribute type\r","         * @type String\r","         * @default stackedMarker\r","         */\r","        type: {\r","            value:\"stackedMarker\"\r","        }\r","    }\r","});\r","\r","","","}, '@VERSION@', {\"requires\": [\"series-stacked\", \"series-marker\"]});","","}());"]};
}
var __cov_vb9jJpsodsNhLkVO6OSnFQ = __coverage__['build/series-marker-stacked/series-marker-stacked.js'];
__cov_vb9jJpsodsNhLkVO6OSnFQ.s['1']++;YUI.add('series-marker-stacked',function(Y,NAME){__cov_vb9jJpsodsNhLkVO6OSnFQ.f['1']++;__cov_vb9jJpsodsNhLkVO6OSnFQ.s['2']++;Y.StackedMarkerSeries=Y.Base.create('stackedMarkerSeries',Y.MarkerSeries,[Y.StackingUtil],{setAreaData:function(){__cov_vb9jJpsodsNhLkVO6OSnFQ.f['2']++;__cov_vb9jJpsodsNhLkVO6OSnFQ.s['3']++;Y.StackedMarkerSeries.superclass.setAreaData.apply(this);__cov_vb9jJpsodsNhLkVO6OSnFQ.s['4']++;this._stackCoordinates.apply(this);}},{ATTRS:{type:{value:'stackedMarker'}}});},'@VERSION@',{'requires':['series-stacked','series-marker']});