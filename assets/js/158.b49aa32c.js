(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{763:function(a,e,t){"use strict";t.r(e);var s=t(48),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"複数の-growi-を起動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#複数の-growi-を起動","aria-hidden":"true"}},[a._v("#")]),a._v(" 複数の GROWI を起動")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("この Cookbook は "),t("RouterLink",{attrs:{to:"/ja/admin-guide/getting-started/docker-compose.html"}},[a._v("docker-compose")]),a._v(" による管理を前提としています")],1)]),a._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),t("p",[a._v("この章では1つのマシン上に3つの GROWI を立ち上げる手順を紹介します。")]),a._v(" "),t("h3",{attrs:{id:"イメージのビルド"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#イメージのビルド","aria-hidden":"true"}},[a._v("#")]),a._v(" イメージのビルド")]),a._v(" "),t("p",[a._v("Docker イメージをビルドします。growi-docker-compose がインストールされているフォルダにて、以下のコマンドを実行してください。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker build -t growimulti_app "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),t("h3",{attrs:{id:"docker-compose-yml-の編集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-の編集","aria-hidden":"true"}},[a._v("#")]),a._v(" docker-compose.yml の編集")]),a._v(" "),t("p",[t("code",[a._v("./docker-compose.yml")]),a._v(" ファイルの "),t("code",[a._v("services:app")]),a._v(" およびボリュームを以下のように複製してください。なお、今回はリソース節約のために Mongo DB と Elasticsearch はそれぞれ1つだけで運用します。")]),a._v(" "),t("div",{staticClass:"language-text:docker-compose.yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('...\n\nservices:\n  app-1:\n    # 上記でビルドしたイメージ名に合わせます\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3001:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # この MONGO_URI と ELASTICSEARCH_URI のパス名は app-1 用のものに揃えてください\n      - MONGO_URI=mongodb://mongo:27017/growi-1\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_1:/data\n\n  app-2:\n    # 上記でビルドしたイメージ名に合わせます\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3002:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # この MONGO_URI と ELASTICSEARCH_URL のパス名は app-2 用のものに揃えてください\n      - MONGO_URI=mongodb://mongo:27017/growi-2\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_2:/data\n\n  app-3:\n    # 上記でビルドしたイメージ名に合わせます\n    image: "growimulti_app:latest"\n    ports:\n      - 127.0.0.1:3003:3000\n    links:\n      - mongo:mongo\n      - elasticsearch:elasticsearch\n    depends_on:\n      - mongo\n      - elasticsearch\n    environment:\n      # この MONGO_URI と ELASTICSEARCH_URI のパス名は app-3 用のものに揃えてください\n      - MONGO_URI=mongodb://mongo:27017/growi-3\n      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-3\n      - PASSWORD_SEED=changeme\n    command: "dockerize\n              -wait tcp://mongo:27017\n              -wait tcp://elasticsearch:9200\n              -timeout 60s\n              npm run server:prod"\n    restart: unless-stopped\n    volumes:\n      - growi_data_3:/data\n\n...\n\nvolumes:\n  # それぞれの GROWI で使用しているボリューム名に合わせてください\n  growi_data_1:\n  growi_data_2:\n  growi_data_3:\n\n...\n')])])]),t("h2",{attrs:{id:"起動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起動","aria-hidden":"true"}},[a._v("#")]),a._v(" 起動")]),a._v(" "),t("p",[a._v("以下のコマンドを実行後、それぞれのポートにアクセスして起動を確認します。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker-compose up\n")])])]),t("p",[t("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3001"),t("OutboundLink")],1),a._v(" (app-1)")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://localhost:3002",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3002"),t("OutboundLink")],1),a._v(" (app-2)")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://localhost:3003",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3003"),t("OutboundLink")],1),a._v(" (app-3)")]),a._v(" "),t("h2",{attrs:{id:"アップグレード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード","aria-hidden":"true"}},[a._v("#")]),a._v(" アップグレード")]),a._v(" "),t("h3",{attrs:{id:"コンテナを停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コンテナを停止","aria-hidden":"true"}},[a._v("#")]),a._v(" コンテナを停止")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose stop\n")])])]),t("h3",{attrs:{id:"docker-イメージと-app-コンテナの削除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-イメージと-app-コンテナの削除","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker イメージと App コンテナの削除")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-1\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-2\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" app-3\ndocker rmi growimulti_app\ndocker rmi weseek/growi:3\n")])])]),t("h3",{attrs:{id:"docker-イメージの起動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-イメージの起動","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker イメージの起動")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\ndocker build -t growimulti_app "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),t("h3",{attrs:{id:"起動-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起動-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 起動")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose up\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);