(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{789:function(e,t,a){"use strict";a.r(t);var r=a(48),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v3-8-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v3-8-x-へのアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI v3.8.x へのアップグレード")]),e._v(" "),a("p",[e._v("Elasticsearch 利用時の Healthcheck の方法が変更されました。")]),e._v(" "),a("h2",{attrs:{id:"elasticsearch-に於ける-healthcheck-方法の変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-に於ける-healthcheck-方法の変更","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch に於ける Healthcheck 方法の変更")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("ul",[a("li",[e._v("Elasticsearch を利用していない環境 あるいは X-Pack を利用したロールベースのアクセスコントロールを行っていない環境では影響はありません。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.growi.org/redoc.html#tag/Healthcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Healthcheck API"),a("OutboundLink")],1),e._v(" を利用した死活監視を行っていない環境では影響はありません。")])])]),e._v(" "),a("p",[e._v("GROWI v3.7 までの "),a("a",{attrs:{href:"https://docs.growi.org/redoc.html#tag/Healthcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Healthcheck API"),a("OutboundLink")],1),e._v(" では、Elasticsearch の情報取得に "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-nodes-info.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodes info API"),a("OutboundLink")],1),e._v(" を利用していました。しかしながらこの API の利用には "),a("code",[e._v("cluster:monitor/nodes/info")]),e._v(" というかなり強い Privilege が必要となるため、GROWI v3.8 以降は "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cluster health API"),a("OutboundLink")],1),e._v(" を使う仕様に変更しました。")]),e._v(" "),a("p",[e._v("これに伴い、X-Pack の設定では "),a("code",[e._v("cluster:monitor/health")]),e._v(" Privilege が必要となりました。")]),e._v(" "),a("h3",{attrs:{id:"要求される-privilege-の変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要求される-privilege-の変更","aria-hidden":"true"}},[e._v("#")]),e._v(" 要求される Privilege の変更")]),e._v(" "),a("p",[e._v("以下の両方を行ってください。")]),e._v(" "),a("ol",[a("li",[e._v("Elasticsearch の認証ユーザーのロールに、"),a("code",[e._v("cluster:monitor/health")]),e._v(" Privilege を追加する")]),e._v(" "),a("li",[e._v("Elasticsearch の認証ユーザーに "),a("code",[e._v("cluster:monitor/nodes/info")]),e._v(" Privilege が必要でない場合はロールから削除する")])]),e._v(" "),a("p",[e._v("参考ページ: "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/authorization.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch Reference: User authorization"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"アップグレード前にチェックすべきこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと","aria-hidden":"true"}},[e._v("#")]),e._v(" アップグレード前にチェックすべきこと")]),e._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Elasticsearch を利用しており、かつ X-Pack を利用した Role ベースのアクセスコントロールを行っているかどうか")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Elasticsearch の認証ユーザーが "),a("code",[e._v("cluster:monitor/health")]),e._v(" Privilege をもっているかどうか")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" Healthcheck API を利用した死活監視を行っているかどうか")])])])},[],!1,null,null,null);t.default=s.exports}}]);