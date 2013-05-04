if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datatable-datasource/datatable-datasource.js']) {
   __coverage__['build/datatable-datasource/datatable-datasource.js'] = {"path":"build/datatable-datasource/datatable-datasource.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"DataTableDataSource","line":15,"loc":{"start":{"line":15,"column":0},"end":{"line":15,"column":31}}},"3":{"name":"(anonymous_3)","line":92,"loc":{"start":{"line":92,"column":20},"end":{"line":92,"column":33}}},"4":{"name":"(anonymous_4)","line":102,"loc":{"start":{"line":102,"column":24},"end":{"line":102,"column":48}}},"5":{"name":"(anonymous_5)","line":117,"loc":{"start":{"line":117,"column":17},"end":{"line":117,"column":34}}},"6":{"name":"(anonymous_6)","line":148,"loc":{"start":{"line":148,"column":10},"end":{"line":148,"column":27}}},"7":{"name":"(anonymous_7)","line":170,"loc":{"start":{"line":170,"column":34},"end":{"line":170,"column":46}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":180,"column":80}},"2":{"start":{"line":15,"column":0},"end":{"line":17,"column":1}},"3":{"start":{"line":16,"column":4},"end":{"line":16,"column":70}},"4":{"start":{"line":24,"column":0},"end":{"line":72,"column":3}},"5":{"start":{"line":79,"column":0},"end":{"line":175,"column":3}},"6":{"start":{"line":93,"column":8},"end":{"line":93,"column":48}},"7":{"start":{"line":118,"column":8},"end":{"line":120,"column":9}},"8":{"start":{"line":119,"column":12},"end":{"line":119,"column":55}},"9":{"start":{"line":149,"column":8},"end":{"line":149,"column":30}},"10":{"start":{"line":150,"column":8},"end":{"line":150,"column":70}},"11":{"start":{"line":151,"column":8},"end":{"line":155,"column":10}},"12":{"start":{"line":157,"column":8},"end":{"line":157,"column":63}},"13":{"start":{"line":158,"column":8},"end":{"line":160,"column":9}},"14":{"start":{"line":159,"column":12},"end":{"line":159,"column":35}},"15":{"start":{"line":171,"column":8},"end":{"line":171,"column":63}},"16":{"start":{"line":173,"column":8},"end":{"line":173,"column":46}},"17":{"start":{"line":177,"column":0},"end":{"line":177,"column":64}}},"branchMap":{"1":{"line":93,"type":"binary-expr","locations":[{"start":{"line":93,"column":15},"end":{"line":93,"column":17}},{"start":{"line":93,"column":21},"end":{"line":93,"column":47}}]},"2":{"line":118,"type":"if","locations":[{"start":{"line":118,"column":8},"end":{"line":118,"column":8}},{"start":{"line":118,"column":8},"end":{"line":118,"column":8}}]},"3":{"line":149,"type":"binary-expr","locations":[{"start":{"line":149,"column":17},"end":{"line":149,"column":23}},{"start":{"line":149,"column":27},"end":{"line":149,"column":29}}]},"4":{"line":150,"type":"binary-expr","locations":[{"start":{"line":150,"column":25},"end":{"line":150,"column":39}},{"start":{"line":150,"column":43},"end":{"line":150,"column":69}}]},"5":{"line":151,"type":"binary-expr","locations":[{"start":{"line":151,"column":26},"end":{"line":151,"column":41}},{"start":{"line":151,"column":45},"end":{"line":155,"column":9}}]},"6":{"line":157,"type":"binary-expr","locations":[{"start":{"line":157,"column":18},"end":{"line":157,"column":35}},{"start":{"line":157,"column":39},"end":{"line":157,"column":61}}]},"7":{"line":158,"type":"if","locations":[{"start":{"line":158,"column":8},"end":{"line":158,"column":8}},{"start":{"line":158,"column":8},"end":{"line":158,"column":8}}]},"8":{"line":171,"type":"binary-expr","locations":[{"start":{"line":171,"column":23},"end":{"line":171,"column":33}},{"start":{"line":171,"column":37},"end":{"line":171,"column":55}},{"start":{"line":171,"column":60},"end":{"line":171,"column":62}}]}},"code":["(function () { YUI.add('datatable-datasource', function (Y, NAME) {","","/**\r"," * Plugs DataTable with DataSource integration.\r"," *\r"," * @module datatable\r"," * @submodule datatable-datasource\r"," */\r","\r","/**\r"," * Adds DataSource integration to DataTable.\r"," * @class Plugin.DataTableDataSource\r"," * @extends Plugin.Base\r"," */\r","function DataTableDataSource() {\r","    DataTableDataSource.superclass.constructor.apply(this, arguments);\r","}\r","\r","/////////////////////////////////////////////////////////////////////////////\r","//\r","// STATIC PROPERTIES\r","//\r","/////////////////////////////////////////////////////////////////////////////\r","Y.mix(DataTableDataSource, {\r","    /**\r","     * The namespace for the plugin. This will be the property on the host which\r","     * references the plugin instance.\r","     *\r","     * @property NS\r","     * @type String\r","     * @static\r","     * @final\r","     * @value \"datasource\"\r","     */\r","    NS: \"datasource\",\r","\r","    /**\r","     * Class name.\r","     *\r","     * @property NAME\r","     * @type String\r","     * @static\r","     * @final\r","     * @value \"dataTableDataSource\"\r","     */\r","    NAME: \"dataTableDataSource\",\r","\r","/////////////////////////////////////////////////////////////////////////////\r","//\r","// ATTRIBUTES\r","//\r","/////////////////////////////////////////////////////////////////////////////\r","    ATTRS: {\r","        /**\r","        * @attribute datasource\r","        * @description Pointer to DataSource instance.\r","        * @type {DataSource}\r","        */\r","        datasource: {\r","            setter: \"_setDataSource\"\r","        },\r","\r","        /**\r","        * @attribute initialRequest\r","        * @description Request sent to DataSource immediately upon initialization.\r","        * @type Object\r","        */\r","        initialRequest: {\r","            setter: \"_setInitialRequest\"\r","        }\r","    }\r","});\r","\r","/////////////////////////////////////////////////////////////////////////////\r","//\r","// PROTOTYPE\r","//\r","/////////////////////////////////////////////////////////////////////////////\r","Y.extend(DataTableDataSource, Y.Plugin.Base, {\r","    /////////////////////////////////////////////////////////////////////////////\r","    //\r","    // ATTRIBUTE HELPERS\r","    //\r","    /////////////////////////////////////////////////////////////////////////////\r","    /**\r","    * @method _setDataSource\r","    * @description Creates new DataSource instance if one is not provided.\r","    * @param ds {Object | Y.DataSource}\r","    * @return {DataSource}\r","    * @private\r","    */\r","    _setDataSource: function(ds) {\r","        return ds || new Y.DataSource.Local(ds);\r","    },\r","\r","    /**\r","    * @method _setInitialRequest\r","    * @description Sends request to DataSource.\r","    * @param request {Object} DataSource request.\r","    * @private\r","    */\r","    _setInitialRequest: function(/* request */) {\r","    },\r","\r","    /////////////////////////////////////////////////////////////////////////////\r","    //\r","    // METHODS\r","    //\r","    /////////////////////////////////////////////////////////////////////////////\r","    /**\r","    * Initializer.\r","    *\r","    * @method initializer\r","    * @param config {Object} Config object.\r","    * @private\r","    */\r","    initializer: function(config) {\r","        if(!Y.Lang.isUndefined(config.initialRequest)) {\r","            this.load({request:config.initialRequest});\r","        }\r","    },\r","\r","    ////////////////////////////////////////////////////////////////////////////\r","    //\r","    // DATA\r","    //\r","    ////////////////////////////////////////////////////////////////////////////\r","\r","    /**\r","     * Load data by calling DataSource's sendRequest() method under the hood.\r","     *\r","     * @method load\r","     * @param config {object} Optional configuration parameters:\r","     *\r","     * <dl>\r","     * <dt>request</dt><dd>Pass in a new request, or initialRequest is used.</dd>\r","     * <dt>callback</dt><dd>Pass in DataSource callback object, or the following default is used:\r","     *    <dl>\r","     *      <dt>success</dt><dd>datatable.onDataReturnInitializeTable</dd>\r","     *      <dt>failure</dt><dd>datatable.onDataReturnInitializeTable</dd>\r","     *      <dt>scope</dt><dd>datatable</dd>\r","     *      <dt>argument</dt><dd>datatable.getState()</dd>\r","     *    </dl>\r","     * </dd>\r","     * <dt>datasource</dt><dd>Pass in a new DataSource instance to override the current DataSource for this transaction.</dd>\r","     * </dl>\r","     */\r","    load: function(config) {\r","        config = config || {};\r","        config.request = config.request || this.get(\"initialRequest\");\r","        config.callback = config.callback || {\r","            success: Y.bind(this.onDataReturnInitializeTable, this),\r","            failure: Y.bind(this.onDataReturnInitializeTable, this),\r","            argument: this.get(\"host\").get(\"state\") //TODO\r","        };\r","\r","        var ds = (config.datasource || this.get(\"datasource\"));\r","        if(ds) {\r","            ds.sendRequest(config);\r","        }\r","    },\r","\r","    /**\r","     * Callback function passed to DataSource's sendRequest() method populates\r","     * an entire DataTable with new data, clearing previous data, if any.\r","     *\r","     * @method onDataReturnInitializeTable\r","     * @param e {Event.Facade} DataSource Event Facade object.\r","     */\r","    onDataReturnInitializeTable : function(e) {\r","        var records = (e.response && e.response.results) || [];\r","\r","        this.get(\"host\").set(\"data\", records);\r","    }\r","});\r","\r","Y.namespace(\"Plugin\").DataTableDataSource = DataTableDataSource;\r","","","}, '@VERSION@', {\"requires\": [\"datatable-base\", \"plugin\", \"datasource-local\"]});","","}());"]};
}
var __cov_8fu916gFMRqxZqUgCWTggA = __coverage__['build/datatable-datasource/datatable-datasource.js'];
__cov_8fu916gFMRqxZqUgCWTggA.s['1']++;YUI.add('datatable-datasource',function(Y,NAME){__cov_8fu916gFMRqxZqUgCWTggA.f['1']++;__cov_8fu916gFMRqxZqUgCWTggA.s['2']++;function DataTableDataSource(){__cov_8fu916gFMRqxZqUgCWTggA.f['2']++;__cov_8fu916gFMRqxZqUgCWTggA.s['3']++;DataTableDataSource.superclass.constructor.apply(this,arguments);}__cov_8fu916gFMRqxZqUgCWTggA.s['4']++;Y.mix(DataTableDataSource,{NS:'datasource',NAME:'dataTableDataSource',ATTRS:{datasource:{setter:'_setDataSource'},initialRequest:{setter:'_setInitialRequest'}}});__cov_8fu916gFMRqxZqUgCWTggA.s['5']++;Y.extend(DataTableDataSource,Y.Plugin.Base,{_setDataSource:function(ds){__cov_8fu916gFMRqxZqUgCWTggA.f['3']++;__cov_8fu916gFMRqxZqUgCWTggA.s['6']++;return(__cov_8fu916gFMRqxZqUgCWTggA.b['1'][0]++,ds)||(__cov_8fu916gFMRqxZqUgCWTggA.b['1'][1]++,new Y.DataSource.Local(ds));},_setInitialRequest:function(){__cov_8fu916gFMRqxZqUgCWTggA.f['4']++;},initializer:function(config){__cov_8fu916gFMRqxZqUgCWTggA.f['5']++;__cov_8fu916gFMRqxZqUgCWTggA.s['7']++;if(!Y.Lang.isUndefined(config.initialRequest)){__cov_8fu916gFMRqxZqUgCWTggA.b['2'][0]++;__cov_8fu916gFMRqxZqUgCWTggA.s['8']++;this.load({request:config.initialRequest});}else{__cov_8fu916gFMRqxZqUgCWTggA.b['2'][1]++;}},load:function(config){__cov_8fu916gFMRqxZqUgCWTggA.f['6']++;__cov_8fu916gFMRqxZqUgCWTggA.s['9']++;config=(__cov_8fu916gFMRqxZqUgCWTggA.b['3'][0]++,config)||(__cov_8fu916gFMRqxZqUgCWTggA.b['3'][1]++,{});__cov_8fu916gFMRqxZqUgCWTggA.s['10']++;config.request=(__cov_8fu916gFMRqxZqUgCWTggA.b['4'][0]++,config.request)||(__cov_8fu916gFMRqxZqUgCWTggA.b['4'][1]++,this.get('initialRequest'));__cov_8fu916gFMRqxZqUgCWTggA.s['11']++;config.callback=(__cov_8fu916gFMRqxZqUgCWTggA.b['5'][0]++,config.callback)||(__cov_8fu916gFMRqxZqUgCWTggA.b['5'][1]++,{success:Y.bind(this.onDataReturnInitializeTable,this),failure:Y.bind(this.onDataReturnInitializeTable,this),argument:this.get('host').get('state')});__cov_8fu916gFMRqxZqUgCWTggA.s['12']++;var ds=(__cov_8fu916gFMRqxZqUgCWTggA.b['6'][0]++,config.datasource)||(__cov_8fu916gFMRqxZqUgCWTggA.b['6'][1]++,this.get('datasource'));__cov_8fu916gFMRqxZqUgCWTggA.s['13']++;if(ds){__cov_8fu916gFMRqxZqUgCWTggA.b['7'][0]++;__cov_8fu916gFMRqxZqUgCWTggA.s['14']++;ds.sendRequest(config);}else{__cov_8fu916gFMRqxZqUgCWTggA.b['7'][1]++;}},onDataReturnInitializeTable:function(e){__cov_8fu916gFMRqxZqUgCWTggA.f['7']++;__cov_8fu916gFMRqxZqUgCWTggA.s['15']++;var records=(__cov_8fu916gFMRqxZqUgCWTggA.b['8'][0]++,e.response)&&(__cov_8fu916gFMRqxZqUgCWTggA.b['8'][1]++,e.response.results)||(__cov_8fu916gFMRqxZqUgCWTggA.b['8'][2]++,[]);__cov_8fu916gFMRqxZqUgCWTggA.s['16']++;this.get('host').set('data',records);}});__cov_8fu916gFMRqxZqUgCWTggA.s['17']++;Y.namespace('Plugin').DataTableDataSource=DataTableDataSource;},'@VERSION@',{'requires':['datatable-base','plugin','datasource-local']});
