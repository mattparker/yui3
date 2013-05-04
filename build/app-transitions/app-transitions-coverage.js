if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/app-transitions/app-transitions.js']) {
   __coverage__['build/app-transitions/app-transitions.js'] = {"path":"build/app-transitions/app-transitions.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"AppTransitions","line":40,"loc":{"start":{"line":40,"column":0},"end":{"line":40,"column":26}}},"3":{"name":"(anonymous_3)","line":222,"loc":{"start":{"line":222,"column":21},"end":{"line":222,"column":44}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":242,"column":44}},"2":{"start":{"line":40,"column":0},"end":{"line":40,"column":28}},"3":{"start":{"line":42,"column":0},"end":{"line":60,"column":2}},"4":{"start":{"line":76,"column":0},"end":{"line":91,"column":2}},"5":{"start":{"line":93,"column":0},"end":{"line":231,"column":2}},"6":{"start":{"line":223,"column":8},"end":{"line":223,"column":46}},"7":{"start":{"line":225,"column":8},"end":{"line":227,"column":9}},"8":{"start":{"line":226,"column":12},"end":{"line":226,"column":43}},"9":{"start":{"line":229,"column":8},"end":{"line":229,"column":27}},"10":{"start":{"line":234,"column":0},"end":{"line":234,"column":35}},"11":{"start":{"line":235,"column":0},"end":{"line":235,"column":36}},"12":{"start":{"line":237,"column":0},"end":{"line":239,"column":3}}},"branchMap":{"1":{"line":225,"type":"if","locations":[{"start":{"line":225,"column":8},"end":{"line":225,"column":8}},{"start":{"line":225,"column":8},"end":{"line":225,"column":8}}]},"2":{"line":225,"type":"binary-expr","locations":[{"start":{"line":225,"column":12},"end":{"line":225,"column":23}},{"start":{"line":225,"column":27},"end":{"line":225,"column":47}}]}},"code":["(function () { YUI.add('app-transitions', function (Y, NAME) {","","/**\r","`Y.App` extension that provides view transitions in browsers which support\r","native CSS3 transitions.\r","\r","@module app\r","@submodule app-transitions\r","@since 3.5.0\r","**/\r","\r","/**\r","`Y.App` extension that provides view transitions in browsers which support\r","native CSS3 transitions.\r","\r","View transitions provide an nice way to move from one \"page\" to the next that is\r","both pleasant to the user and helps to communicate a hierarchy between sections\r","of an application.\r","\r","When the `\"app-transitions\"` module is used, it will automatically mix itself\r","into `Y.App` and transition between `activeView` changes using the following\r","effects:\r","\r","  - **`fade`**: Cross-fades between the old an new active views.\r","\r","  - **`slideLeft`**: The old and new active views are positioned next to each\r","    other and both slide to the left.\r","\r","  - **`slideRight`**: The old and new active views are positioned next to each\r","    other and both slide to the right.\r","\r","**Note:** Transitions are an opt-in feature and are enabled via an app's\r","`transitions` attribute.\r","\r","@class App.Transitions\r","@uses App.TransitionsNative\r","@extensionfor App\r","@since 3.5.0\r","**/\r","function AppTransitions() {}\r","\r","AppTransitions.ATTRS = {\r","    /**\r","    Whether or not this application should use view transitions, and if so then\r","    which ones or `true` for the defaults which are specified by the\r","    `transitions` prototype property.\r","\r","    **Note:** Transitions are an opt-in feature and will only be used in\r","    browsers which support native CSS3 transitions.\r","\r","    @attribute transitions\r","    @type Boolean|Object\r","    @default false\r","    @since 3.5.0\r","    **/\r","    transitions: {\r","        setter: '_setTransitions',\r","        value : false\r","    }\r","};\r","\r","/**\r","Collect of transitions -> fx.\r","\r","A transition (e.g. \"fade\") is a simple name given to a configuration of fx to\r","apply, consisting of `viewIn` and `viewOut` properties who's values are names of\r","fx registered on `Y.Transition.fx`.\r","\r","By default transitions: `fade`, `slideLeft`, and `slideRight` have fx defined.\r","\r","@property FX\r","@type Object\r","@static\r","@since 3.5.0\r","**/\r","AppTransitions.FX = {\r","    fade: {\r","        viewIn : 'app:fadeIn',\r","        viewOut: 'app:fadeOut'\r","    },\r","\r","    slideLeft: {\r","        viewIn : 'app:slideLeft',\r","        viewOut: 'app:slideLeft'\r","    },\r","\r","    slideRight: {\r","        viewIn : 'app:slideRight',\r","        viewOut: 'app:slideRight'\r","    }\r","};\r","\r","AppTransitions.prototype = {\r","    // -- Public Properties ----------------------------------------------------\r","\r","    /**\r","    Default transitions to use when the `activeView` changes.\r","\r","    The following are types of changes for which transitions can be defined that\r","    correspond to the relationship between the new and previous `activeView`:\r","\r","      * `navigate`: The default transition to use when changing the `activeView`\r","        of the application.\r","\r","      * `toChild`: The transition to use when the new `activeView` is configured\r","        as a child of the previously active view via its `parent` property as\r","        defined in this app's `views`.\r","\r","      * `toParent`: The transition to use when the new `activeView` is\r","        configured as the `parent` of the previously active view as defined in\r","        this app's `views`.\r","\r","    **Note:** Transitions are an opt-in feature and will only be used in\r","    browsers which support native CSS3 transitions.\r","\r","    @property transitions\r","    @type Object\r","    @default\r","        {\r","            navigate: 'fade',\r","            toChild : 'slideLeft',\r","            toParent: 'slideRight'\r","        }\r","    @since 3.5.0\r","    **/\r","    transitions: {\r","        navigate: 'fade',\r","        toChild : 'slideLeft',\r","        toParent: 'slideRight'\r","    },\r","\r","    // -- Public Methods -------------------------------------------------------\r","\r","    /**\r","    Sets which view is active/visible for the application. This will set the\r","    app's `activeView` attribute to the specified `view`.\r","\r","    The `view` will be \"attached\" to this app, meaning it will be both rendered\r","    into this app's `viewContainer` node and all of its events will bubble to\r","    the app. The previous `activeView` will be \"detached\" from this app.\r","\r","    When a string-name is provided for a view which has been registered on this\r","    app's `views` object, the referenced metadata will be used and the\r","    `activeView` will be set to either a preserved view instance, or a new\r","    instance of the registered view will be created using the specified `config`\r","    object passed-into this method.\r","\r","    A callback function can be specified as either the third or fourth argument,\r","    and this function will be called after the new `view` becomes the\r","    `activeView`, is rendered to the `viewContainer`, and is ready to use.\r","\r","    @example\r","        var app = new Y.App({\r","            views: {\r","                usersView: {\r","                    // Imagine that `Y.UsersView` has been defined.\r","                    type: Y.UsersView\r","                }\r","            },\r","\r","            transitions: true,\r","            users      : new Y.ModelList()\r","        });\r","\r","        app.route('/users/', function () {\r","            this.showView('usersView', {users: this.get('users')});\r","        });\r","\r","        app.render();\r","        app.navigate('/uses/');\r","        // => Creates a new `Y.UsersView` and transitions to it.\r","\r","    @method showView\r","    @param {String|View} view The name of a view defined in the `views` object,\r","        or a view instance which should become this app's `activeView`.\r","    @param {Object} [config] Optional configuration to use when creating a new\r","        view instance. This config object can also be used to update an existing\r","        or preserved view's attributes when `options.update` is `true`.\r","    @param {Object} [options] Optional object containing any of the following\r","        properties:\r","      @param {Function} [options.callback] Optional callback function to call\r","        after new `activeView` is ready to use, the function will be passed:\r","          @param {View} options.callback.view A reference to the new\r","            `activeView`.\r","      @param {Boolean} [options.prepend=false] Whether the `view` should be\r","        prepended instead of appended to the `viewContainer`.\r","      @param {Boolean} [options.render] Whether the `view` should be rendered.\r","        **Note:** If no value is specified, a view instance will only be\r","        rendered if it's newly created by this method.\r","      @param {Boolean|String} [options.transition] Optional transition override.\r","        A transition can be specified which will override the default, or\r","        `false` for no transition.\r","      @param {Boolean} [options.update=false] Whether an existing view should\r","        have its attributes updated by passing the `config` object to its\r","        `setAttrs()` method. **Note:** This option does not have an effect if\r","        the `view` instance is created as a result of calling this method.\r","    @param {Function} [callback] Optional callback Function to call after the\r","        new `activeView` is ready to use. **Note:** this will override\r","        `options.callback` and it can be specified as either the third or fourth\r","        argument. The function will be passed the following:\r","      @param {View} callback.view A reference to the new `activeView`.\r","    @chainable\r","    @since 3.5.0\r","    **/\r","    // Does not override `showView()` but does use `options.transitions`.\r","\r","    // -- Protected Methods ----------------------------------------------------\r","\r","    /**\r","    Setter for `transitions` attribute.\r","\r","    When specified as `true`, the defaults will be use as specified by the\r","    `transitions` prototype property.\r","\r","    @method _setTransitions\r","    @param {Boolean|Object} transitions The new `transitions` attribute value.\r","    @return {Mixed} The processed value which represents the new state.\r","    @protected\r","    @see App.Base.showView()\r","    @since 3.5.0\r","    **/\r","    _setTransitions: function (transitions) {\r","        var defTransitions = this.transitions;\r","\r","        if (transitions && transitions === true) {\r","            return Y.merge(defTransitions);\r","        }\r","\r","        return transitions;\r","    }\r","};\r","\r","// -- Namespace ----------------------------------------------------------------\r","Y.App.Transitions = AppTransitions;\r","Y.Base.mix(Y.App, [AppTransitions]);\r","\r","Y.mix(Y.App.CLASS_NAMES, {\r","    transitioning: Y.ClassNameManager.getClassName('app', 'transitioning')\r","});\r","","","}, '@VERSION@', {\"requires\": [\"app-base\"]});","","}());"]};
}
var __cov_2_u5xavh62mdqarWSEoI8Q = __coverage__['build/app-transitions/app-transitions.js'];
__cov_2_u5xavh62mdqarWSEoI8Q.s['1']++;YUI.add('app-transitions',function(Y,NAME){__cov_2_u5xavh62mdqarWSEoI8Q.f['1']++;__cov_2_u5xavh62mdqarWSEoI8Q.s['2']++;function AppTransitions(){__cov_2_u5xavh62mdqarWSEoI8Q.f['2']++;}__cov_2_u5xavh62mdqarWSEoI8Q.s['3']++;AppTransitions.ATTRS={transitions:{setter:'_setTransitions',value:false}};__cov_2_u5xavh62mdqarWSEoI8Q.s['4']++;AppTransitions.FX={fade:{viewIn:'app:fadeIn',viewOut:'app:fadeOut'},slideLeft:{viewIn:'app:slideLeft',viewOut:'app:slideLeft'},slideRight:{viewIn:'app:slideRight',viewOut:'app:slideRight'}};__cov_2_u5xavh62mdqarWSEoI8Q.s['5']++;AppTransitions.prototype={transitions:{navigate:'fade',toChild:'slideLeft',toParent:'slideRight'},_setTransitions:function(transitions){__cov_2_u5xavh62mdqarWSEoI8Q.f['3']++;__cov_2_u5xavh62mdqarWSEoI8Q.s['6']++;var defTransitions=this.transitions;__cov_2_u5xavh62mdqarWSEoI8Q.s['7']++;if((__cov_2_u5xavh62mdqarWSEoI8Q.b['2'][0]++,transitions)&&(__cov_2_u5xavh62mdqarWSEoI8Q.b['2'][1]++,transitions===true)){__cov_2_u5xavh62mdqarWSEoI8Q.b['1'][0]++;__cov_2_u5xavh62mdqarWSEoI8Q.s['8']++;return Y.merge(defTransitions);}else{__cov_2_u5xavh62mdqarWSEoI8Q.b['1'][1]++;}__cov_2_u5xavh62mdqarWSEoI8Q.s['9']++;return transitions;}};__cov_2_u5xavh62mdqarWSEoI8Q.s['10']++;Y.App.Transitions=AppTransitions;__cov_2_u5xavh62mdqarWSEoI8Q.s['11']++;Y.Base.mix(Y.App,[AppTransitions]);__cov_2_u5xavh62mdqarWSEoI8Q.s['12']++;Y.mix(Y.App.CLASS_NAMES,{transitioning:Y.ClassNameManager.getClassName('app','transitioning')});},'@VERSION@',{'requires':['app-base']});
