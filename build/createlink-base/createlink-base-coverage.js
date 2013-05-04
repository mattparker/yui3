if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/createlink-base/createlink-base.js']) {
   __coverage__['build/createlink-base/createlink-base.js'] = {"path":"build/createlink-base/createlink-base.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"(anonymous_2)","line":46,"loc":{"start":{"line":46,"column":20},"end":{"line":46,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":85,"column":47}},"2":{"start":{"line":13,"column":4},"end":{"line":13,"column":28}},"3":{"start":{"line":19,"column":4},"end":{"line":32,"column":6}},"4":{"start":{"line":34,"column":4},"end":{"line":34,"column":26}},"5":{"start":{"line":35,"column":4},"end":{"line":35,"column":45}},"6":{"start":{"line":37,"column":4},"end":{"line":81,"column":7}},"7":{"start":{"line":47,"column":12},"end":{"line":48,"column":92}},"8":{"start":{"line":50,"column":12},"end":{"line":78,"column":13}},"9":{"start":{"line":51,"column":16},"end":{"line":51,"column":62}},"10":{"start":{"line":52,"column":16},"end":{"line":52,"column":62}},"11":{"start":{"line":53,"column":16},"end":{"line":53,"column":58}},"12":{"start":{"line":54,"column":16},"end":{"line":54,"column":40}},"13":{"start":{"line":55,"column":16},"end":{"line":55,"column":39}},"14":{"start":{"line":58,"column":16},"end":{"line":58,"column":56}},"15":{"start":{"line":59,"column":16},"end":{"line":59,"column":49}},"16":{"start":{"line":60,"column":16},"end":{"line":60,"column":40}},"17":{"start":{"line":61,"column":16},"end":{"line":77,"column":17}},"18":{"start":{"line":63,"column":20},"end":{"line":63,"column":45}},"19":{"start":{"line":64,"column":20},"end":{"line":66,"column":21}},"20":{"start":{"line":65,"column":24},"end":{"line":65,"column":47}},"21":{"start":{"line":67,"column":20},"end":{"line":73,"column":21}},"22":{"start":{"line":68,"column":24},"end":{"line":72,"column":25}},"23":{"start":{"line":69,"column":28},"end":{"line":71,"column":29}},"24":{"start":{"line":70,"column":32},"end":{"line":70,"column":72}},"25":{"start":{"line":76,"column":20},"end":{"line":76,"column":104}},"26":{"start":{"line":79,"column":12},"end":{"line":79,"column":21}}},"branchMap":{"1":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":12},"end":{"line":50,"column":12}},{"start":{"line":50,"column":12},"end":{"line":50,"column":12}}]},"2":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":16},"end":{"line":61,"column":16}},{"start":{"line":61,"column":16},"end":{"line":61,"column":16}}]},"3":{"line":61,"type":"binary-expr","locations":[{"start":{"line":61,"column":20},"end":{"line":61,"column":36}},{"start":{"line":61,"column":40},"end":{"line":61,"column":50}}]},"4":{"line":64,"type":"if","locations":[{"start":{"line":64,"column":20},"end":{"line":64,"column":20}},{"start":{"line":64,"column":20},"end":{"line":64,"column":20}}]},"5":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":20},"end":{"line":67,"column":20}},{"start":{"line":67,"column":20},"end":{"line":67,"column":20}}]},"6":{"line":68,"type":"if","locations":[{"start":{"line":68,"column":24},"end":{"line":68,"column":24}},{"start":{"line":68,"column":24},"end":{"line":68,"column":24}}]},"7":{"line":69,"type":"if","locations":[{"start":{"line":69,"column":28},"end":{"line":69,"column":28}},{"start":{"line":69,"column":28},"end":{"line":69,"column":28}}]}},"code":["(function () { YUI.add('createlink-base', function (Y, NAME) {","","","    /**","     * Adds prompt style link creation. Adds an override for the","     * <a href=\"Plugin.ExecCommand.html#method_COMMANDS.createlink\">createlink execCommand</a>.","     * @class Plugin.CreateLinkBase","     * @static","     * @submodule createlink-base","     * @module editor","     */","","    var CreateLinkBase = {};","    /**","    * Strings used by the plugin","    * @property STRINGS","    * @static","    */","    CreateLinkBase.STRINGS = {","            /**","            * String used for the Prompt","            * @property PROMPT","            * @static","            */","            PROMPT: 'Please enter the URL for the link to point to:',","            /**","            * String used as the default value of the Prompt","            * @property DEFAULT","            * @static","            */","            DEFAULT: 'http://'","    };","","    Y.namespace('Plugin');","    Y.Plugin.CreateLinkBase = CreateLinkBase;","","    Y.mix(Y.Plugin.ExecCommand.COMMANDS, {","        /**","        * Override for the createlink method from the <a href=\"Plugin.CreateLinkBase.html\">CreateLinkBase</a> plugin.","        * @for ExecCommand","        * @method COMMANDS.createlink","        * @static","        * @param {String} cmd The command executed: createlink","        * @return {Node} Node instance of the item touched by this command.","        */","        createlink: function(cmd) {","            var inst = this.get('host').getInstance(), out, a, sel, holder,","                url = prompt(CreateLinkBase.STRINGS.PROMPT, CreateLinkBase.STRINGS.DEFAULT);","","            if (url) {","                holder = inst.config.doc.createElement('div');","                url = url.replace(/\"/g, '').replace(/'/g, ''); //Remove single & double quotes","                url = inst.config.doc.createTextNode(url);","                holder.appendChild(url);","                url = holder.innerHTML;","","","                this.get('host')._execCommand(cmd, url);","                sel = new inst.EditorSelection();","                out = sel.getSelected();","                if (!sel.isCollapsed && out.size()) {","                    //We have a selection","                    a = out.item(0).one('a');","                    if (a) {","                        out.item(0).replace(a);","                    }","                    if (Y.UA.gecko) {","                        if (a.get('parentNode').test('span')) {","                            if (a.get('parentNode').one('br.yui-cursor')) {","                                a.get('parentNode').insert(a, 'before');","                            }","                        }","                    }","                } else {","                    //No selection, insert a new node..","                    this.get('host').execCommand('inserthtml', '<a href=\"' + url + '\">' + url + '</a>');","                }","            }","            return a;","        }","    });","","","","}, '@VERSION@', {\"requires\": [\"editor-base\"]});","","}());"]};
}
var __cov_2ZvAdchrIK08s2OxY$TIGQ = __coverage__['build/createlink-base/createlink-base.js'];
__cov_2ZvAdchrIK08s2OxY$TIGQ.s['1']++;YUI.add('createlink-base',function(Y,NAME){__cov_2ZvAdchrIK08s2OxY$TIGQ.f['1']++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['2']++;var CreateLinkBase={};__cov_2ZvAdchrIK08s2OxY$TIGQ.s['3']++;CreateLinkBase.STRINGS={PROMPT:'Please enter the URL for the link to point to:',DEFAULT:'http://'};__cov_2ZvAdchrIK08s2OxY$TIGQ.s['4']++;Y.namespace('Plugin');__cov_2ZvAdchrIK08s2OxY$TIGQ.s['5']++;Y.Plugin.CreateLinkBase=CreateLinkBase;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['6']++;Y.mix(Y.Plugin.ExecCommand.COMMANDS,{createlink:function(cmd){__cov_2ZvAdchrIK08s2OxY$TIGQ.f['2']++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['7']++;var inst=this.get('host').getInstance(),out,a,sel,holder,url=prompt(CreateLinkBase.STRINGS.PROMPT,CreateLinkBase.STRINGS.DEFAULT);__cov_2ZvAdchrIK08s2OxY$TIGQ.s['8']++;if(url){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['1'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['9']++;holder=inst.config.doc.createElement('div');__cov_2ZvAdchrIK08s2OxY$TIGQ.s['10']++;url=url.replace(/"/g,'').replace(/'/g,'');__cov_2ZvAdchrIK08s2OxY$TIGQ.s['11']++;url=inst.config.doc.createTextNode(url);__cov_2ZvAdchrIK08s2OxY$TIGQ.s['12']++;holder.appendChild(url);__cov_2ZvAdchrIK08s2OxY$TIGQ.s['13']++;url=holder.innerHTML;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['14']++;this.get('host')._execCommand(cmd,url);__cov_2ZvAdchrIK08s2OxY$TIGQ.s['15']++;sel=new inst.EditorSelection();__cov_2ZvAdchrIK08s2OxY$TIGQ.s['16']++;out=sel.getSelected();__cov_2ZvAdchrIK08s2OxY$TIGQ.s['17']++;if((__cov_2ZvAdchrIK08s2OxY$TIGQ.b['3'][0]++,!sel.isCollapsed)&&(__cov_2ZvAdchrIK08s2OxY$TIGQ.b['3'][1]++,out.size())){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['2'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['18']++;a=out.item(0).one('a');__cov_2ZvAdchrIK08s2OxY$TIGQ.s['19']++;if(a){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['4'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['20']++;out.item(0).replace(a);}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['4'][1]++;}__cov_2ZvAdchrIK08s2OxY$TIGQ.s['21']++;if(Y.UA.gecko){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['5'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['22']++;if(a.get('parentNode').test('span')){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['6'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['23']++;if(a.get('parentNode').one('br.yui-cursor')){__cov_2ZvAdchrIK08s2OxY$TIGQ.b['7'][0]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['24']++;a.get('parentNode').insert(a,'before');}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['7'][1]++;}}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['6'][1]++;}}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['5'][1]++;}}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['2'][1]++;__cov_2ZvAdchrIK08s2OxY$TIGQ.s['25']++;this.get('host').execCommand('inserthtml','<a href="'+url+'">'+url+'</a>');}}else{__cov_2ZvAdchrIK08s2OxY$TIGQ.b['1'][1]++;}__cov_2ZvAdchrIK08s2OxY$TIGQ.s['26']++;return a;}});},'@VERSION@',{'requires':['editor-base']});
