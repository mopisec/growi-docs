(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{759:function(e,t,r){"use strict";r.r(t);var a=r(48),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"let-s-encrypt-による-https-運用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-による-https-運用","aria-hidden":"true"}},[e._v("#")]),e._v(" Let's Encrypt による HTTPS 運用")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("この Cookbook は "),r("RouterLink",{attrs:{to:"/ja/admin-guide/getting-started/docker-compose.html"}},[e._v("docker-compose")]),e._v(" による管理を前提としています")],1)]),e._v(" "),r("h2",{attrs:{id:"概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),r("p",[e._v("この章では "),r("a",{attrs:{href:"https://github.com/SteveLTN/https-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS-PORTAL"),r("OutboundLink")],1),e._v(" をもとにした Let's Encript および nginx プロキシを用いた HTTPS サーバーの利用手順を紹介します。")]),e._v(" "),r("h2",{attrs:{id:"手順"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手順","aria-hidden":"true"}},[e._v("#")]),e._v(" 手順")]),e._v(" "),r("h3",{attrs:{id:"docker-compose-override-yml-ファイルのコピー"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-override-yml-ファイルのコピー","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose.override.yml ファイルのコピー")]),e._v(" "),r("p",[e._v("以下のコマンドを実行し、GROWI のあるディレクトリの直下に "),r("code",[e._v("./exmaples/https-portal")]),e._v(" の "),r("code",[e._v("docker-compose.override.yml")]),e._v(" ファイルをコピーします。")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cd growi // growi-docker-compose をインストールしたディレクトリ\n$ cp examples/https-portal/docker-compose.override.yml .\n")])])]),r("h3",{attrs:{id:"起動"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起動","aria-hidden":"true"}},[e._v("#")]),e._v(" 起動")]),e._v(" "),r("p",[e._v("GROWI を起動し、サイトにアクセスしてください。")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("docker-compose up\n")])])]),r("p",[r("a",{attrs:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://example.com"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"ドメイン名の設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ドメイン名の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" ドメイン名の設定")]),e._v(" "),r("p",[r("code",[e._v("./docker-compose.override.yml")]),e._v(" の "),r("code",[e._v("DOMAINS")]),e._v(" の値に、利用者が管理可能なドメイン名を設定してください。")]),e._v(" "),r("div",{staticClass:"language-text:docker-compose.override.yml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("services:\n  https-portal:\n    environment:\n      // example.com の部分を利用可能なドメイン名に変更\n      DOMAINS: 'example.com -> http://app:3000' \n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);