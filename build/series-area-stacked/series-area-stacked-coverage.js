if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/series-area-stacked/series-area-stacked.js']) {
   __coverage__['build/series-area-stacked/series-area-stacked.js'] = {"path":"build/series-area-stacked/series-area-stacked.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":27,"loc":{"start":{"line":27,"column":17},"end":{"line":28,"column":4}}},"3":{"name":"(anonymous_3)","line":40,"loc":{"start":{"line":40,"column":13},"end":{"line":41,"column":4}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":60,"column":65}},"2":{"start":{"line":19,"column":0},"end":{"line":57,"column":3}},"3":{"start":{"line":29,"column":8},"end":{"line":29,"column":63}},"4":{"start":{"line":30,"column":8},"end":{"line":30,"column":43}},"5":{"start":{"line":42,"column":8},"end":{"line":42,"column":67}}},"branchMap":{},"code":["(function () { YUI.add('series-area-stacked', function (Y, NAME) {","","/**\r"," * Provides functionality for creating a stacked area series.\r"," *\r"," * @module charts\r"," * @submodule series-area-stacked\r"," */\r","/**\r"," * StackedAreaSeries area fills to display data showing its contribution to a whole.\r"," *\r"," * @class StackedAreaSeries\r"," * @extends AreaSeries\r"," * @uses StackingUtil\r"," * @constructor\r"," * @param {Object} config (optional) Configuration parameters.\r"," * @submodule series-area-stacked\r"," */\r","Y.StackedAreaSeries = Y.Base.create(\"stackedAreaSeries\", Y.AreaSeries, [Y.StackingUtil], {\r","    /**\r","     * @protected\r","     *\r","     * Calculates the coordinates for the series. Overrides base implementation.\r","     *\r","     * @method setAreaData\r","     */\r","    setAreaData: function()\r","    {\r","        Y.StackedAreaSeries.superclass.setAreaData.apply(this);\r","        this._stackCoordinates.apply(this);\r","    },\r","\r","    /**\r","     * @protected\r","     *\r","     * Draws the series\r","     *\r","     * @method drawSeries\r","     */\r","\tdrawSeries: function()\r","    {\r","        this.drawFill.apply(this, this._getStackedClosingPoints());\r","    }\r","}, {\r","    ATTRS: {\r","        /**\r","         * Read-only attribute indicating the type of series.\r","         *\r","         * @attribute type\r","         * @type String\r","         * @default stackedArea\r","         */\r","        type: {\r","            value:\"stackedArea\"\r","        }\r","    }\r","});\r","","","}, '@VERSION@', {\"requires\": [\"series-stacked\", \"series-area\"]});","","}());"]};
}
var __cov_Wg0DI4$47pgQKeLmmZfqvw = __coverage__['build/series-area-stacked/series-area-stacked.js'];
__cov_Wg0DI4$47pgQKeLmmZfqvw.s['1']++;YUI.add('series-area-stacked',function(Y,NAME){__cov_Wg0DI4$47pgQKeLmmZfqvw.f['1']++;__cov_Wg0DI4$47pgQKeLmmZfqvw.s['2']++;Y.StackedAreaSeries=Y.Base.create('stackedAreaSeries',Y.AreaSeries,[Y.StackingUtil],{setAreaData:function(){__cov_Wg0DI4$47pgQKeLmmZfqvw.f['2']++;__cov_Wg0DI4$47pgQKeLmmZfqvw.s['3']++;Y.StackedAreaSeries.superclass.setAreaData.apply(this);__cov_Wg0DI4$47pgQKeLmmZfqvw.s['4']++;this._stackCoordinates.apply(this);},drawSeries:function(){__cov_Wg0DI4$47pgQKeLmmZfqvw.f['3']++;__cov_Wg0DI4$47pgQKeLmmZfqvw.s['5']++;this.drawFill.apply(this,this._getStackedClosingPoints());}},{ATTRS:{type:{value:'stackedArea'}}});},'@VERSION@',{'requires':['series-stacked','series-area']});