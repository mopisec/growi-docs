(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{687:function(e,a,t){"use strict";t.r(a);var s=t(48),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrading-growi-to-v3-6-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-growi-to-v3-6-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading GROWI to v3.6.x")]),e._v(" "),t("p",[e._v("GROWI v3.6 no longer supports Node.js v8.")]),e._v(" "),t("p",[e._v("v3.5 or below has the bug("),t("a",{attrs:{href:"https://github.com/weseek/growi/issues/1361",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/growi#1361"),t("OutboundLink")],1),e._v(") that generate two databases wrongly.")]),e._v(" "),t("h2",{attrs:{id:"node-js-v8-is-no-longer-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-v8-is-no-longer-supported","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js v8 is no longer supported")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Systems that is launched by "),t("a",{attrs:{href:"https://hub.docker.com/r/weseek/growi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official docker image"),t("OutboundLink")],1),e._v(" will not be affected")])]),e._v(" "),t("h3",{attrs:{id:"upgrade-node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-node-js","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade Node.js")]),e._v(" "),t("ol",[t("li",[e._v("Upgrade Node.js to v10 or v12")])]),e._v(" "),t("h2",{attrs:{id:"avoid-weseek-growi-1361"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoid-weseek-growi-1361","aria-hidden":"true"}},[e._v("#")]),e._v(" Avoid "),t("a",{attrs:{href:"https://github.com/weseek/growi/issues/1361",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/growi#1361"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This problem is caused in the situation that using "),t("code",[e._v("MONGO_URI")]),e._v(" with parameters of the form "),t("code",[e._v("?key=value")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"upgrade-anyway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-anyway","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade anyway")]),e._v(" "),t("ul",[t("li",[e._v("Upgrade as usual")]),e._v(" "),t("li",[e._v("Effects\n"),t("ul",[t("li",[e._v("The cumulative migration so far will run again")]),e._v(" "),t("li",[e._v("There should be no problem in design, but inconsistent data may be rewritten")])])])]),e._v(" "),t("h3",{attrs:{id:"upgrade-safely"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-safely","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade safely")]),e._v(" "),t("ul",[t("li",[e._v("Transplant "),t("code",[e._v("migrations")]),e._v(" collection.\nRun following process in your shell that is able to use "),t("code",[e._v("mongodump")]),e._v(" and "),t("code",[e._v("mongorestore")]),e._v(".\nReplace "),t("code",[e._v("{dbname}")]),e._v(" and "),t("code",[e._v("{dbname?key=value}")]),e._v(" according to your environment."),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mongodump -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("dbname?key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" -c migrations -o backup\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mongorestore -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("dbname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" -c migrations "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./backup/{dbname?key=value}/migrations.bson"')]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Drop unnecessary DB. Run following process in your mongo shell.\nReplace "),t("code",[e._v("{dbname?key=value}")]),e._v(" according to your environment."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("use {dbname?key=value}\ndb.dropDatabase()\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"check-before-upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading","aria-hidden":"true"}},[e._v("#")]),e._v(" Check before Upgrading")]),e._v(" "),t("ul",{staticClass:"contains-task-list"},[t("li",{staticClass:"task-list-item"},[t("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" "),t("code",[e._v("MONGO_URI")]),e._v(" has parameters of the form "),t("code",[e._v("?key=value")])]),e._v(" "),t("li",{staticClass:"task-list-item"},[t("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" MongoDB has a database which name has parameters of the form "),t("code",[e._v("?key=value")])])])])},[],!1,null,null,null);a.default=r.exports}}]);