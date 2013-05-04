if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/event-outside/event-outside.js']) {
   __coverage__['build/event-outside/event-outside.js'] = {"path":"build/event-outside/event-outside.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":64,"loc":{"start":{"line":64,"column":24},"end":{"line":64,"column":47}}},"3":{"name":"(anonymous_3)","line":69,"loc":{"start":{"line":69,"column":12},"end":{"line":69,"column":43}}},"4":{"name":"(anonymous_4)","line":70,"loc":{"start":{"line":70,"column":48},"end":{"line":70,"column":60}}},"5":{"name":"(anonymous_5)","line":78,"loc":{"start":{"line":78,"column":16},"end":{"line":78,"column":47}}},"6":{"name":"(anonymous_6)","line":82,"loc":{"start":{"line":82,"column":18},"end":{"line":82,"column":57}}},"7":{"name":"(anonymous_7)","line":83,"loc":{"start":{"line":83,"column":54},"end":{"line":83,"column":67}}},"8":{"name":"(anonymous_8)","line":90,"loc":{"start":{"line":90,"column":19},"end":{"line":90,"column":43}}},"9":{"name":"(anonymous_9)","line":91,"loc":{"start":{"line":91,"column":55},"end":{"line":91,"column":68}}},"10":{"name":"(anonymous_10)","line":102,"loc":{"start":{"line":102,"column":27},"end":{"line":102,"column":44}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":107,"column":51}},"2":{"start":{"line":44,"column":0},"end":{"line":48,"column":6}},"3":{"start":{"line":64,"column":0},"end":{"line":99,"column":2}},"4":{"start":{"line":65,"column":4},"end":{"line":65,"column":39}},"5":{"start":{"line":67,"column":4},"end":{"line":95,"column":6}},"6":{"start":{"line":70,"column":12},"end":{"line":75,"column":21}},"7":{"start":{"line":71,"column":16},"end":{"line":74,"column":17}},"8":{"start":{"line":72,"column":20},"end":{"line":72,"column":43}},"9":{"start":{"line":73,"column":20},"end":{"line":73,"column":37}},"10":{"start":{"line":79,"column":12},"end":{"line":79,"column":32}},"11":{"start":{"line":83,"column":12},"end":{"line":87,"column":29}},"12":{"start":{"line":84,"column":16},"end":{"line":86,"column":17}},"13":{"start":{"line":85,"column":20},"end":{"line":85,"column":37}},"14":{"start":{"line":91,"column":12},"end":{"line":93,"column":19}},"15":{"start":{"line":92,"column":20},"end":{"line":92,"column":38}},"16":{"start":{"line":96,"column":4},"end":{"line":96,"column":42}},"17":{"start":{"line":98,"column":4},"end":{"line":98,"column":33}},"18":{"start":{"line":102,"column":0},"end":{"line":104,"column":3}},"19":{"start":{"line":103,"column":4},"end":{"line":103,"column":33}}},"branchMap":{"1":{"line":65,"type":"binary-expr","locations":[{"start":{"line":65,"column":11},"end":{"line":65,"column":15}},{"start":{"line":65,"column":20},"end":{"line":65,"column":37}}]},"2":{"line":71,"type":"if","locations":[{"start":{"line":71,"column":16},"end":{"line":71,"column":16}},{"start":{"line":71,"column":16},"end":{"line":71,"column":16}}]},"3":{"line":84,"type":"if","locations":[{"start":{"line":84,"column":16},"end":{"line":84,"column":16}},{"start":{"line":84,"column":16},"end":{"line":84,"column":16}}]},"4":{"line":91,"type":"binary-expr","locations":[{"start":{"line":91,"column":19},"end":{"line":91,"column":34}},{"start":{"line":91,"column":38},"end":{"line":93,"column":18}}]}},"code":["(function () { YUI.add('event-outside', function (Y, NAME) {","","/**\r"," * Outside events are synthetic DOM events that fire when a corresponding native\r"," * or synthetic DOM event occurs outside a bound element.\r"," *\r"," * The following outside events are pre-defined by this module:\r"," * <ul>\r"," *   <li>blur</li>\r"," *   <li>change</li>\r"," *   <li>click</li>\r"," *   <li>dblclick</li>\r"," *   <li>focus</li>\r"," *   <li>keydown</li>\r"," *   <li>keypress</li>\r"," *   <li>keyup</li>\r"," *   <li>mousedown</li>\r"," *   <li>mousemove</li>\r"," *   <li>mouseout</li>\r"," *   <li>mouseover</li>\r"," *   <li>mouseup</li>\r"," *   <li>select</li>\r"," *   <li>submit</li>\r"," * </ul>\r"," *\r"," * Define new outside events with\r"," * <code>Y.Event.defineOutside(eventType);</code>.\r"," * By default, the created synthetic event name will be the name of the event\r"," * with \"outside\" appended (e.g. \"click\" becomes \"clickoutside\"). If you want\r"," * a different name for the created Event, pass it as a second argument like so:\r"," * <code>Y.Event.defineOutside(eventType, \"yonderclick\")</code>.\r"," *\r"," * This module was contributed by Brett Stimmerman, promoted from his\r"," * gallery-outside-events module at\r"," * http://yuilibrary.com/gallery/show/outside-events\r"," *\r"," * @module event\r"," * @submodule event-outside\r"," * @author brettstimmerman\r"," * @since 3.4.0\r"," */\r","\r","// Outside events are pre-defined for each of these native DOM events\r","var nativeEvents = [\r","        'blur', 'change', 'click', 'dblclick', 'focus', 'keydown', 'keypress',\r","        'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup',\r","        'select', 'submit'\r","    ];\r","\r","/**\r"," * Defines a new outside event to correspond with the given DOM event.\r"," *\r"," * By default, the created synthetic event name will be the name of the event\r"," * with \"outside\" appended (e.g. \"click\" becomes \"clickoutside\"). If you want\r"," * a different name for the created Event, pass it as a second argument like so:\r"," * <code>Y.Event.defineOutside(eventType, \"yonderclick\")</code>.\r"," *\r"," * @method defineOutside\r"," * @param {String} event DOM event\r"," * @param {String} name (optional) custom outside event name\r"," * @static\r"," * @for Event\r"," */\r","Y.Event.defineOutside = function (event, name) {\r","    name = name || (event + 'outside');\r","\r","    var config = {\r","    \r","        on: function (node, sub, notifier) {\r","            sub.handle = Y.one('doc').on(event, function(e) {\r","                if (this.isOutside(node, e.target)) {\r","                    e.currentTarget = node;\r","                    notifier.fire(e);\r","                }\r","            }, this);\r","        },\r","        \r","        detach: function (node, sub, notifier) {\r","            sub.handle.detach();\r","        },\r","        \r","        delegate: function (node, sub, notifier, filter) {\r","            sub.handle = Y.one('doc').delegate(event, function (e) {\r","                if (this.isOutside(node, e.target)) {\r","                    notifier.fire(e);\r","                }\r","            }, filter, this);\r","        },\r","        \r","        isOutside: function (node, target) {\r","            return target !== node && !target.ancestor(function (p) {\r","                    return p === node;\r","                });\r","        }\r","    };\r","    config.detachDelegate = config.detach;\r","\r","    Y.Event.define(name, config);\r","};\r","\r","// Define outside events for some common native DOM events\r","Y.Array.each(nativeEvents, function (event) {\r","    Y.Event.defineOutside(event);\r","});\r","","","}, '@VERSION@', {\"requires\": [\"event-synthetic\"]});","","}());"]};
}
var __cov_a9nciFiQj0YEROGRBBvZ$A = __coverage__['build/event-outside/event-outside.js'];
__cov_a9nciFiQj0YEROGRBBvZ$A.s['1']++;YUI.add('event-outside',function(Y,NAME){__cov_a9nciFiQj0YEROGRBBvZ$A.f['1']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['2']++;var nativeEvents=['blur','change','click','dblclick','focus','keydown','keypress','keyup','mousedown','mousemove','mouseout','mouseover','mouseup','select','submit'];__cov_a9nciFiQj0YEROGRBBvZ$A.s['3']++;Y.Event.defineOutside=function(event,name){__cov_a9nciFiQj0YEROGRBBvZ$A.f['2']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['4']++;name=(__cov_a9nciFiQj0YEROGRBBvZ$A.b['1'][0]++,name)||(__cov_a9nciFiQj0YEROGRBBvZ$A.b['1'][1]++,event+'outside');__cov_a9nciFiQj0YEROGRBBvZ$A.s['5']++;var config={on:function(node,sub,notifier){__cov_a9nciFiQj0YEROGRBBvZ$A.f['3']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['6']++;sub.handle=Y.one('doc').on(event,function(e){__cov_a9nciFiQj0YEROGRBBvZ$A.f['4']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['7']++;if(this.isOutside(node,e.target)){__cov_a9nciFiQj0YEROGRBBvZ$A.b['2'][0]++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['8']++;e.currentTarget=node;__cov_a9nciFiQj0YEROGRBBvZ$A.s['9']++;notifier.fire(e);}else{__cov_a9nciFiQj0YEROGRBBvZ$A.b['2'][1]++;}},this);},detach:function(node,sub,notifier){__cov_a9nciFiQj0YEROGRBBvZ$A.f['5']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['10']++;sub.handle.detach();},delegate:function(node,sub,notifier,filter){__cov_a9nciFiQj0YEROGRBBvZ$A.f['6']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['11']++;sub.handle=Y.one('doc').delegate(event,function(e){__cov_a9nciFiQj0YEROGRBBvZ$A.f['7']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['12']++;if(this.isOutside(node,e.target)){__cov_a9nciFiQj0YEROGRBBvZ$A.b['3'][0]++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['13']++;notifier.fire(e);}else{__cov_a9nciFiQj0YEROGRBBvZ$A.b['3'][1]++;}},filter,this);},isOutside:function(node,target){__cov_a9nciFiQj0YEROGRBBvZ$A.f['8']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['14']++;return(__cov_a9nciFiQj0YEROGRBBvZ$A.b['4'][0]++,target!==node)&&(__cov_a9nciFiQj0YEROGRBBvZ$A.b['4'][1]++,!target.ancestor(function(p){__cov_a9nciFiQj0YEROGRBBvZ$A.f['9']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['15']++;return p===node;}));}};__cov_a9nciFiQj0YEROGRBBvZ$A.s['16']++;config.detachDelegate=config.detach;__cov_a9nciFiQj0YEROGRBBvZ$A.s['17']++;Y.Event.define(name,config);};__cov_a9nciFiQj0YEROGRBBvZ$A.s['18']++;Y.Array.each(nativeEvents,function(event){__cov_a9nciFiQj0YEROGRBBvZ$A.f['10']++;__cov_a9nciFiQj0YEROGRBBvZ$A.s['19']++;Y.Event.defineOutside(event);});},'@VERSION@',{'requires':['event-synthetic']});
