(function(e){function a(a){for(var t,n,l=a[0],s=a[1],c=a[2],u=0,d=[];u<l.length;u++)n=l[u],i[n]&&d.push(i[n][0]),i[n]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],t=!0,n=1;n<o.length;n++){var l=o[n];0!==i[l]&&(t=!1)}t&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var t={},n={app:0},i={app:0},r=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-05010548":"7a25dddb","chunk-0da51c8c":"bccfdc29","chunk-1db67cec":"436958c1","chunk-201b3422":"33659df9","chunk-2d22d746":"ff7625d5","chunk-4164889e":"422fa54c","chunk-6b659f22":"accb9f51","chunk-7576ea86":"3d5b35f9","chunk-a84b3daa":"976838c6"}[e]+".js"}function s(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-05010548":1,"chunk-0da51c8c":1,"chunk-201b3422":1,"chunk-4164889e":1,"chunk-6b659f22":1,"chunk-7576ea86":1,"chunk-a84b3daa":1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise(function(a,o){for(var t="css/"+({}[e]||e)+"."+{"chunk-05010548":"7d37bd88","chunk-0da51c8c":"4b776eb7","chunk-1db67cec":"31d6cfe0","chunk-201b3422":"afe03110","chunk-2d22d746":"31d6cfe0","chunk-4164889e":"9830d7f1","chunk-6b659f22":"6a407a8b","chunk-7576ea86":"2e96cf07","chunk-a84b3daa":"a72899fb"}[e]+".css",i=s.p+t,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var c=r[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===t||u===i))return a()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===t||u===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var t=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete n[e],m.parentNode.removeChild(m),o(r)},m.href=i;var k=document.getElementsByTagName("head")[0];k.appendChild(m)}).then(function(){n[e]=0}));var t=i[e];if(0!==t)if(t)a.push(t[2]);else{var r=new Promise(function(a,o){t=i[e]=[a,o]});a.push(t[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e),c=function(a){u.onerror=u.onload=null,clearTimeout(d);var o=i[e];if(0!==o){if(o){var t=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src,r=new Error("Loading chunk "+e+" failed.\n("+t+": "+n+")");r.type=t,r.request=n,o[1](r)}i[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=t,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(o,t,function(a){return e[a]}.bind(null,t));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/game-utilities/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"41cb":function(e,a,o){"use strict";var t=o("2b0e"),n=o("8c4f"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"home md-layout"},[o("HalfButton",{staticStyle:{"font-family":"'Cookie', Helvetica, sans-serif"},attrs:{to:"/draw"}},[e._v(" DRAW ")]),o("HalfButton",{staticStyle:{"font-family":"'monospace'"},attrs:{to:"/type"}},[e._v(" TYPE"),o("span",{staticClass:"blink"},[e._v("|")])]),o("h1",{staticClass:"md-layout-item md-size-100"},[e._v(" RANDOM WORD "),o("span",{staticStyle:{"white-space":"nowrap"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"lang",attrs:{type:"radio",name:"lang",id:"lang-en",value:"en",checked:""},domProps:{checked:e._q(e.lang,"en")},on:{change:function(a){e.lang="en"}}}),e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"lang",attrs:{type:"radio",name:"lang",id:"lang-si",value:"si"},domProps:{checked:e._q(e.lang,"si")},on:{change:function(a){e.lang="si"}}}),e._m(1)])]),o("WordButton",{attrs:{list:e.words[e.lang]["unique"],txt:"UNIQUE"}}),o("WordButton",{attrs:{list:e.words[e.lang]["alias"],txt:"ALIAS"}})],1)},r=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("label",{attrs:{for:"lang-en"}},[o("img",{attrs:{src:"img/en_flag.svg",alt:"en"}})])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("label",{attrs:{for:"lang-si"}},[o("img",{attrs:{src:"img/si_flag.svg",alt:"si"}})])}],l=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("HalfButton",{staticStyle:{"font-family":"'serif'"},attrs:{extraStyle:e.style},on:{click:function(a){return e.showRandomWord()}}},[e._v(" "+e._s(e.countdown||e.txt)+" ")])},s=[],c={name:"WordButton",props:{list:Array,txt:String},computed:{style:function(){return{background:"linear-gradient(90deg, "+this.colorLeft+" "+100*this.load+"%, "+this.colorRight+" "+100*this.load+"%)"}}},methods:{randomElement:function(e){return e[Math.floor(Math.random()*e.length)]},animateButton:function(){var e=this,a=["#EEEEEE","#D32F2F","#F1BE51","#98A352"],o=0,t=100,n=0;this.colorRight=a[o],this.colorLeft=a[o+1],this.countdown=a.length-1,this.interval=setInterval(function(){n+=1,e.load+=(a.length-1)/t,n>t&&clearInterval(e.interval),e.load>1&&(o+=1,e.colorRight=a[o],e.colorLeft=a[o+1],e.load=0,e.countdown=a.length-1-o)},3e3/t)},showRandomWord:function(){var e=this;if(this.timeout)return this.load=0,clearTimeout(this.timeout),clearInterval(this.interval),this.colorRight="#EEEEEE",this.countdown=null,this.timeout=null,void(this.interval=null);this.timeout=setTimeout(function(){P.push({name:"display",params:{text:e.randomElement(e.list)}})},3e3),this.animateButton()}},data:function(){return{load:0,colorLeft:"#D32F2F",colorRight:"#EEEEEE",countdown:null,timeout:null,interval:null}}},u=c,d=o("2877"),m=Object(d["a"])(u,l,s,!1,null,null,null),k=m.exports,p=o("e430"),h={name:"home",components:{WordButton:k},data:function(){return{lang:"en",words:p}},watch:{lang:function(){localStorage.setItem("lang",this.lang)}},mounted:function(){this.lang=localStorage.getItem("lang")||"en"}},g=h,S=(o("d5b0"),Object(d["a"])(g,i,r,!1,null,null,null)),f=S.exports;t["default"].use(n["a"]);var P=a["a"]=new n["a"]({routes:[{path:"/",name:"home",component:f,meta:{title:"Home"}},{path:"/rules",name:"rules",component:function(){return o.e("chunk-a84b3daa").then(o.bind(null,"4e51"))},meta:{title:"Rules"}},{path:"/type",name:"type",component:function(){return o.e("chunk-201b3422").then(o.bind(null,"83d6"))},meta:{title:"Type"}},{path:"/draw",name:"draw",component:function(){return o.e("chunk-7576ea86").then(o.bind(null,"bfed"))},meta:{title:"Draw"}},{path:"/display/:text",name:"display",component:function(){return o.e("chunk-6b659f22").then(o.bind(null,"bf79"))},meta:{title:"Display"}},{path:"/scores",name:"scores",component:function(){return o.e("chunk-4164889e").then(o.bind(null,"c14f"))},meta:{title:"Score"}},{path:"/about",name:"about",component:function(){return o.e("chunk-2d22d746").then(o.bind(null,"f820"))},meta:{title:"About"}},{path:"/vision/:redo?",name:"visionHome",component:function(){return o.e("chunk-1db67cec").then(o.bind(null,"2e83"))},meta:{title:"Select room"}},{path:"/visid/:room/:number/:player",name:"visionIdentity",component:function(){return o.e("chunk-0da51c8c").then(o.bind(null,"0186"))},meta:{title:"Vision"}},{path:"/bombs",name:"bombs",component:function(){return o.e("chunk-05010548").then(o.bind(null,"906d"))},meta:{title:"Bombs"}}]})},"458f":function(e,a,o){},"56d7":function(e,a,o){"use strict";o.r(a);o("7f7f"),o("386d"),o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),n=o("0284"),i=o.n(n),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("md-app",{staticClass:"container",attrs:{"md-waterfall":"","md-mode":"fixed"}},[o("md-app-toolbar",{staticClass:"md-primary"},[o("md-button",{staticClass:"md-icon-button",on:{click:function(a){e.menuVisible=!e.menuVisible}}},[o("md-icon",[e._v("menu")])],1),o("span",{staticClass:"md-title"},[e._v("Play Now")]),"visionIdentity"==e.$route.name?o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{staticStyle:{"text-transform":"none"},attrs:{to:"/vision/redo"}},[e._v(" "+e._s(e.$route.params.room)+" "+e._s(+e.$route.params.player+1)+"/"+e._s(e.$route.params.number)+" ")])],1):e._e()],1),o("md-app-drawer",{attrs:{"md-active":e.menuVisible,"md-swipeable":!0},on:{"update:mdActive":function(a){e.menuVisible=a},"update:md-active":function(a){e.menuVisible=a}}},[o("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[o("span",{staticClass:"md-title",on:{click:function(a){e.menuVisible=!e.menuVisible}}},[e._v(" Play Now ")])]),o("md-list",[o("md-list-item",{attrs:{to:"/",exact:""},on:{click:function(a){e.menuVisible=!e.menuVisible}}},[o("md-icon",[e._v("edit")]),o("span",{staticClass:"md-list-item-text"},[e._v("Unique")]),o("md-button",{staticClass:"md-icon-button",attrs:{to:"/rules"}},[o("md-icon",[e._v("menu_book")])],1)],1),o("md-list-item",{attrs:{to:"/bombs",exact:""},on:{click:function(a){e.menuVisible=!e.menuVisible}}},[o("md-icon",[e._v("new_releases")]),o("span",{staticClass:"md-list-item-text"},[e._v("Bombs")])],1),o("md-list-item",{attrs:{to:"/scores"},on:{click:function(a){e.menuVisible=!e.menuVisible}}},[o("md-icon",[e._v("format_list_numbered")]),o("span",{staticClass:"md-list-item-text"},[e._v("Score")])],1),o("md-list-item",{on:{click:e.toggleNoSleep}},[o("md-switch",{staticClass:"md-primary",model:{value:e.keepAwake,callback:function(a){e.keepAwake=a},expression:"keepAwake"}}),o("span",{staticClass:"md-list-item-text"},[e._v("Keep awake")])],1),o("md-divider"),o("md-divider"),null!==e.installPrompt?o("md-list-item",{on:{click:function(a){return e.installPrompt.prompt()}}},[o("md-icon",[e._v("cloud_download")]),o("span",{staticClass:"md-list-item-text"},[e._v("Install")])],1):e._e(),o("md-list-item",{attrs:{to:"/about"},on:{click:function(a){e.menuVisible=!e.menuVisible}}},[o("md-icon",[e._v("info")]),o("span",{staticClass:"md-list-item-text"},[e._v("About")])],1)],1)],1),o("md-app-content",[o("router-view")],1)],1)],1)},l=[],s=o("67bc"),c={name:"app",data:function(){return{menuVisible:!1,keepAwake:!1,installPrompt:null,nosleep:new s}},mounted:function(){var e=this;window.addEventListener("beforeinstallprompt",function(a){a.preventDefault(),e.installPrompt=a})},methods:{toggleNoSleep:function(){this.keepAwake=!this.keepAwake,this.keepAwake?this.nosleep.enable():this.nosleep.disable()}}},u=c,d=(o("5c0b"),o("2877")),m=Object(d["a"])(u,r,l,!1,null,null,null),k=m.exports,p=o("41cb"),h=o("9483");Object(h["a"])("".concat("/game-utilities/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=o("9c30"),S=(o("51de"),function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-button",{staticClass:"md-layout-item md-size-95 md-raised",class:{"md-size-95":!e.primary,"md-size-100":e.primary,"md-primary":e.primary},staticStyle:{"font-size":"3em",height:"1.5em"},style:e.extraStyle,attrs:{disabled:e.disabled,to:e.to},on:{click:function(a){return e.$emit("click")}}},[e._t("default")],2)],1)}),f=[],P={name:"HalfButton",props:{to:[String,Object],primary:Boolean,disabled:Boolean,extraStyle:Object}},b=P,v=Object(d["a"])(b,S,f,!1,null,null,null),C=v.exports;t["default"].use(g["MdApp"]),t["default"].use(g["MdButton"]),t["default"].use(g["MdCheckbox"]),t["default"].use(g["MdContent"]),t["default"].use(g["MdDialog"]),t["default"].use(g["MdDialogConfirm"]),t["default"].use(g["MdDivider"]),t["default"].use(g["MdDrawer"]),t["default"].use(g["MdField"]),t["default"].use(g["MdIcon"]),t["default"].use(g["MdList"]),t["default"].use(g["MdSnackbar"]),t["default"].use(g["MdSteppers"]),t["default"].use(g["MdSwitch"]),t["default"].use(g["MdTable"]),t["default"].use(g["MdToolbar"]),t["default"].component("HalfButton",C),p["a"].beforeEach(function(e,a,o){document.title="Play Now | "+e.meta.title,o()}),t["default"].use(i.a,{id:"UA-42885055-4",router:p["a"],autoTracking:{pageviewTemplate:function(e){return{page:window.location.pathname+window.location.search+"#"+e.name,title:document.title,location:window.location.href}}}}),t["default"].config.productionTip=!1,new t["default"]({router:p["a"],render:function(e){return e(k)},data:{menuVisible:!1}}).$mount("#app")},"5c0b":function(e,a,o){"use strict";var t=o("458f"),n=o.n(t);n.a},d5b0:function(e,a,o){"use strict";var t=o("fe09"),n=o.n(t);n.a},e430:function(e){e.exports={en:{alias:["Hollywood","Well","Foot","Spring","Court","Tube","Point","Tablet","Slip","Date","Drill","Lemon","Bell","Screen","Fair","Torch","State","Match","Iron","Block","France","Australia","Limousine","Stream","Glove","Nurse","Leprechaun","Play","Tooth","Arm","Bermuda","Diamond","Whale","Comic","Mammoth","Green","Pass","Missile","Paste","Drop","Pheonix","Marble","Staff","Figure","Park","Centaur","Shadow","Fish","Cotton","Egypt","Theater","Scale","Fall","Track","Force","Dinosaur","Bill","Mine","Turkey","March","Contract","Bridge","Robin","Line","Plate","Band","Fire","Bank","Boom","Cat","Shot","Suit","Chocolate","Roulette","Mercury","Moon","Net","Lawyer","Satellite","Angel","Spider","Germany","Fork","Pitch","King","Crane","Trip","Dog","Conductor","Part","Bugle","Witch","Ketchup","Press","Spine","Worm","Alps","Bond","Pan","Beijing","Racket","Cross","Seal","Aztec","Maple","Parachute","Hotel","Berry","Soldier","Ray","Post","Greece","Square","Mass","Bat","Wave","Car","Smuggler","England","Crash","Tail","Card","Horn","Capital","Fence","Deck","Buffalo","Microscope","Jet","Duck","Ring","Train","Field","Gold","Tick","Check","Queen","Strike","Kangaroo","Spike","Scientist","Engine","Shakespeare","Wind","Kid","Embassy","Robot","Note","Ground","Draft","Ham","War","Mouse","Center","Chick","China","Bolt","Spot","Piano","Pupil","Plot","Lion","Police","Head","Litter","Concert","Mug","Vacuum","Atlantis","Straw","Switch","Skyscraper","Laser","Africa","Plastic","Dwarf","Lap","Life","Honey","Horseshoe","Unicorn","Spy","Pants","Wall","Paper","Sound","Ice","Tag","Web","Fan","Orange","Temple","Canada","Scorpion","Undertaker","Mail","Europe","Soul","Apple","Pole","Tap","Mouth","Ambulance","Dress","Rabbit","Buck","Agent","Sock","Nut","Boot","Ghost","Oil","Superhero","Code","Kiwi","Hospital","Saturn","Film","Button","Snowman","Helicopter","Log","Princess","Time","Cook","Revolution","Shoe","Mole","Spell","Grass","Washer","Game","Beat","Hole","Horse","Pirate","Link","Dance","Fly","Pit","Server","School","Lock","Brush","Pool","Star","Jam","Organ","Berlin","Face","Luck","Amazon","Cast","Gas","Club","Sink","Water","Chair","Shark","Jupiter","Copper","Jack","Platypus","Stick","Olive","Grace","Bear","Glass","Row","Pistol","London","Rock","Van","Vet","Beach","Charge","Port","Disease","Palm","Moscow","Pin","Washington","Pyramid","Opera","Casino","Pilot","String","Night","Chest","Yard","Teacher","Pumpkin","Thief","Bark","Bug","Mint","Cycle","Telescope","Calf","Air","Box","Mount","Thumb","Antarctica","Trunk","Snow","Penguin","Root","Bar","File","Hawk","Battery","Compound","Slug","Octopus","Whip","America","Ivory","Pound","Sub","Cliff","Lab","Eagle","Genius","Ship","Dice","Hood","Heart","Novel","Pipe","Himalayas","Crown","Round","India","Needle","Shop","Watch","Lead","Tie","Table","Cell","Cover","Czech","Back","Bomb","Ruler","Forest","Bottle","Space","Hook","Doctor","Ball","Bow","Degree","Rome","Plane","Giant","Nail","Dragon","Stadium","Flute","Carrot","Wake","Fighter","Model","Tokyo","Eye","Mexico","Hand","Swing","Key","Alien","Tower","Poison","Cricket","Cold","Knife","Church","Board","Cloak","Ninja","Olympus","Belt","Light","Death","Stock","Millionaire","Day","Knight","Pie","Bed","Circle","Rose","Change","Cap","Triangle"],unique:["Accent","Acorn","Aladdin","Alarm","Alcatraz","Alcohol","Alien","Alliance","Amazon","America","Anchor","Angle","Anniversary","Antarctica","Apple","Armistice","Armstrong","Australia","Avatar","Baby","Baker","Bald","Ball","Ballet","Banana","Band","Bar","Barbecue","Barbie","Bath","Batman","Battery","Beer","Belgium","Bellybutton","Belt","Berry","Bet","Binoculars","Blond","Board","Bone","Book","Boss","Bottle","Bow","Bowling","Boxing","Bracelet","Brain","Branch","Bread","Bridge","Brush","Bubble","Buffy","Butterfly","Button","Cactus","Cafeteria","Cake","Calendar","Camembert","Canada","Candy","Cane","Canon","Canteen","Canvas","Carnival","Carousel","Carpet","Carton","Casino","Castle","Cat","Caterpillar","Cave","Cavity","Ceasar","Cell","Cemetary","Cereal","Chain","Champagne","Cheese","Chewbacca","Chicken","Chile","Chip","Chocolate","Christmas","Churchill","Cigarette","Cinderella","Cinema","Circus","Cleopatra","Climb","Clover","Club","Cockroach","Cocktail","Cocoon","Coffee","Colonel","Comedy","Comforter","Computer","Concert","Cookie","Cork","Corner","Cougar","Couscous","Crane","Crepe","Crocodile","Croissant","Cross","Crossroads","Crown","Cube","Cup","Cupid","Cycle","Dance","Darwin","Decathlon","Defense","Dentist","Desert","Devil","Diamond","Dinosaur","Disco","Doctor","Doll","Doping","Dracula","Drag","Dream","Dune","Dwarf","Easter","Egg","Elastic","Election","Electricity","Elephant","Elf","Elvis","Emergency","Emperor","End","Evening","Everest","Facebook","Failure","Fair","Fairy","Fall","Farm","Fashion","Fever","Fire","Fireman","Fitzgerald","Flame","Flash","Flight","Flintstone","Flower","Flute","Foam","Ford","Forest","Fork","Fountain","Fox","France","Frankenstein","Friday","Fries","Frost","Fur","Galaxy","Game","Gandhi","Garden","Garlic","Genius","Ghost","Giant","Gladiator","Glass","Glasses","Goat","Godfather","Godzilla","Golf","Google","Gothic","Grass","Greece","Gremlins","Grenade","Grotto","Guard","Guillotine","Gumbo","Hair","Hairdresser","Halloween","Hammer","Handle","Hanukkah","Hat","Hazelnut","Heart","Heel","Helicopter","Helmet","History","Hockey","Hole","Hollywood","Honey","Hose","Hotel","House","Hulk","Humor","Hunter","Ice","Ikea","Iris","Iron","Island","Israel","Italy","Jackson","Jedi","Jewelry","Johnny","Joker","Jones","Jungle","Karate","King","Knife","Knight","Ladder","Ladybug","Lake","Lamp","Language","Large","Lava","Lawyer","Leaf","Leap","Lego","Letter","Light","Lightbulb","Lighthouse","Lightning","Limb","Lion","Lonely","Lottery","Machine","Mad","Mafia","Magician","Magnet","Manga","Manual","Manure","Map","Mario","Market","Marriage","Mars","Mask","Matrix","Melon","Metal","Mexico","Mickey","Microsoft","Milk","Mill","Mirage","Mirror","Missile","Monkey","Monopoly","Moon","Moscow","Mosquito","Mountain","Mouse","Mouth","Mower","Mozart","Mummy","Muse","Mushroom","Music","Musketeer","Mustache","Mustard","Myth","Nail","Necklace","Needle","Neighborhood","Nest","New","Newspaper","Nile","Ninja","Nintendo","Noodle","Nuclear","Numan","Number","Nun","Oasis","Octopus","Olympics","Opera","Operation","Orange","Oven","Painting","Pair","Palace","Pan","Panda","Parachute","Paradise","Parrot","Passion","Peace","Peach","Peanut","Pear","Pebble","Penguin","Pepper","Perfume","Picasso","Pie","Pig","Pigeon","Pikachu","Pillow","Pilot","Pimento","Pipe","Pirate","Pit","Pizza","Plane","Plastic","PlayStation","Plier","Poison","Poker","Polar","Pole","Police","Pony","Pool","Pope","Porcelain","Potato","Potter","Powder","Pregnant","President","Primary","Princess","Prison","Prom","Psycho","Pump","Punk","Puppet","Purse","Pyramid","Radio","Rail","Rain","Rake","Ram","Rambo","Ramses","Rap","Rat","Ray","Reggae","Register","Revolution","Ring","Ripe","River","Robot","Rock","Rocky","Room","Rooster","Root","Rope","Rose","Ruler","Rum","Run","Safari","Safe","Sahara","Sail","Salt","Sand","Sardine","Sausage","Scale","Scene","School","Screw","Series","Sewer","Shack","Shakespeare","Shark","Sheep","Shelf","Shell","Sherlock","Ship","Shovel","Shower","Shrek","Simpson","Siren","Ski","Sleeve","Slipper","Smoke","Snake","Snow","Soap","Sock","Socket","Sofa","Sombrero","Song","Spartacus","Spear","Spice","Spielberg","Spy","Squib","Stallion","Star","Starbucks","Stark","Station","Stew","Sting","Stone","Straw","Strawberry","String","Study","Stuffing","Subway","Sugar","Sun","Switzerland","Sword","Syrup","Tango","Tarantino","Tarzan","Tattoo","Taxi","Temple","Tennis","Terminator","Theater","Thought","Thread","Throat","Thunder","Ticket","Tie","Tiger","Titanic","Tobacco","Tokyo","Tolkien","Tomato","Tool","Tornado","Towel","Tower","Tradition","Train","Treasure","Triangle","Troy","Tube","Tulip","Tuna","Tunnel","Umbrella","Unicorn","Uniform","Vacation","Vampire","Vegas","Vegetable","Vengeance","Venus","Viking","Violin","Virus","Volcano","Waltz","War","Watch","Wave","Weather","Western","Wheat","White","Widowmaker","Wind","Window","Wine","Wolf","Yellow","Zeus","Zombie","Zoo"],vision:["Panda","Paper","Heaven","Witch","Mattress","Slipper","Pig","Space","Egg","Lake","Magician","Spider","Ninja","Star","Thunder","Kebab","Sock","Armchair","Slide","Waffle","Boar","Seashell","Locomotive","Saw","Lion","Parasol","Hammer","Toad","Vulture","Strawberry","Cherry","Chocolate","Dynamite","Chips","Falcon","Honey","Napkin","Whistle","Octopus","Sunflower","Fork","Eagle","Necklace","Barbecue","Ant","Bread","River","Sofa","Canoe","Zucchini","Toilets","Cow","Raspberry","Shrimp","Horseman","Elf","Bowl","Ice cream","Cactus","Acrobats","Scientist","Statue","Garbage","Accordion","Seal","Beg","Mammoth","Ear","Spy","Banana","Squid","Plumber","Tablecloth","Window","Snow","Wasp","Gift","Mosquito","Lizard","Painting","Policeman","Ring","Piranha","Omelette","Satellite","Fang","Hill","Mountain","Shirt","Skeleton","Diver","Pie","Poker","Die","Baker","Screwdriver","Watch","Television","Crown","Mirror","Hamlet","Lobster","Cook","Gladiator","Broom","Donkey","Jam","Kiwi","Trunks","Chameleon","Nest","Hat","Comforter","Pajamas","Magnifying glass","Parachute","Refrigerator","Knife","Leaf","Snowflake","Whale","Child","Zeppelin","Sea","Tunnel","Ghost","Pineapple","Motorcycle","Scooter","Cloud","Wolf","Bomb","Horn","Mask","Juggler","Pillow","Sled","Hot air balloon","Lettuce","Cap","Mustache","Moon","Actor","Shark","Parrot","Candy","Giraffe","Onion","Reed","Butcher","Frog","Poppy","Hedgehog","Koala","Rocket","Samurai","Detective","Ham","Lamp","Shoe","Stapler","Candle","Tooth","Beard","Bear","Beaver","Medal","Cookie","Stool","Tissue","Treasure","Stroller","Mouse","Orchestra","Pan","Button","Goat","Fir tree","Bridge","Toast","Umbrella","Soap","Tractor","Surgeon","Grasshopper","Medicine","Cereal","Painter","Sausage","Ostrich","Hair","Hunter","Caviar","Baby","Pacifier","Grape","Beach","Binder","Ocean","Toothpaste","Chili","Trombone","Farmer","Bedroom","Dancer","Oyster","Diamond","Airplane","Groundhog","Shied","Dragonfly","Gondola","Trampolin","Bacon","Zebra","Crepe","Dog","Sombrero","Rhinoceros","Bell","Seahorse","Helicopter","Winter hat","Eclipse","Dolphin","Lawyer","Sword","Waiter","Bottle","Duck","Shower","Princess","Ferret","Cat","Swing","Computer","Gloves","Castle","Centaur","Milk","Mushroom","Feather","Horse","Telephone","Fairy","Chair","Rat","King","Root","Rooster","Skirt","Lightbulb","Bicycle","Rose","Pool","Pharmacist","Trumpet","Cowboy","Shovel","Coffee","Champagne","Airport","Train","Tramway","Rain","Dress","Sink","Vampire","Cheese","Watermelon","Harmonica","Wave","Croissant","Car","Crib","Mummy","Flute","Garden","Suitcase","Belt","Tomato","Balloon","Key","Spaghetti","Game","Sheep","Black pepper","French fries","Astronaut","Roof","Journalist","Melon","Hotel","Lollipop","Grotto","Fireman","Cane","Panties","Ski","Pencil","Mason","Bus","Knight","Snail","Butterfly","Pencil case","Zombie","Putter","Kangaroo","Kitchen","Sandal","Planet","Mug","Windmill","Flag","Heater","Pumpkin","Gazelle","Can","Apple","Radio","Rake","Hourglass","Desert","Yogurt","Bell pepper","Sky","Lumberjack","Match","School","Carpet","Penguin","Drawer","Curtain","Chimney","Piano","Hamburger","Book","Hippopotamus","Rice","Living room","Snake","Nurse","Drum","Alarm clock","Keyboard","Dragon","Rowboat","Squirrel","Sculpture","Vacuum","Pants","Alien","Violin","Meteor","Fishhook","Soup","Skateboard","Musician","Loaf","Comb","Glass","Gorilla","Thermometer","Boxer","Fox","Orange","Cheetah","Unicorn","Architect","Bathtub","Pirate","Wall","Tiger","Fly","Postman","Clown","Crocodile","Chick","Hell","Razor","Plant","Robot","Notebook","Pizza","Crutch","Nose","Axe","Island","Scarf","Monkey","Cockroach","Guitar","Bee","Plush","Scorpion","Pear","Truck","Salt","Nostril","Lemon","Wreck","Museum","Faucet","Cucumber","House","Fencing","Spoon","Minotaur","Tea","Bed","Newspaper","Port","Jellyfish","Branch","Shampoo","Garage","Plate","Boots","Table","Briefs","Dinosaur","Glasses","Desk","Sunset","Fisherman","Crab","Lighter","Volcano","Babysitter","Map","Grapefruit","Pickaxe","Skate","Swan","Bass","Radish","Storm"]},si:{alias:["Hollywood","Afrika","Agent","Zrak","Tujec","Alpe","Amazon","Amerika","Angel","Antarktika","Jabolko","Roka","Atlantis","Avstralija","Aztec","Nazaj","Krogla","Pas","Banka","Bar","Lubje","Netopir","Baterija","Plaža","Medved","Zmaga","Postelja","Peking","Zvonec","Pas","Berlin","Jagodičja","Račun","Blok","Deska","Vijak","Bomba","Obveznica","Bum","Škorenj","Steklenica","Lok","Škatla","Most","Ščetka","Dolar","Bivol","Napaka","Bule","Gumb","Tele","Kanada","Kapital","Avto","Kartica","Korenček","Casino","Oddaja","Mačka","Celica","Kentaur","Center","Stol","Spremeni","Obtožiti","Preveri","Prsa","Kitajska","Čokolada","Cerkev","Krog","Pečina","Plašč","Klub","Koda","Hladno","Strip","Spojina","Koncert","Dirigent","Pogodba","Kuhar","Pek","Bombaž","Sodišče","Pokrov","Žerjav","Nesreča","Kriket","Križ","Krona","Cikel","Češka","Ples","Datum","Dan","Smrt","Paluba","Stopnja","Diamant","Kocke","Dinozaver","Bolezen","Zdravnik","Pes","Osnutek","Zmaj","Obleko","Vaja","Padec","Raca","Škrat","Orel","Egipt","Veleposlaništvo","Motor","Evropa","Oko","Obraz","Pošteno","Padec","Ventilator","Ograja","Polje","Borec","Številka","Mapa","Film","Ogenj","Ribe","Flavta","Let","Stopalo","Sila","Gozd","Vilice","Francija","Igra","Plin","Genij","Nemčija","Duh","Velikan","Steklo","Rokavice","Zlato","Milost","Trava","Grčija","Zelena","Tla","Šunka","Roka","Sokol","Glava","Srce","Helikopter","Himalaja","Luknja","Med","Kapuca","Kljuka","Rog","Konj","Podkve","Bolnišnica","Hotel","Led","Indija","Železo","Jack","Marmelada","Jet","Jupiter","Kenguru","Kečap","Ključ","Otrok","Kralj","Kivi","Nož","Vitez","Laboratorij","Krog","Laser","Odvetnik","Svinec","Limona","Škrat","Življenje","Svetloba","Limuzina","Vrstica","Povezava","Lev","Stelja","Zaklepanje","Dnevnik","London","Sreča","Pošta","Mamut","Javor","Marmor","Marš","Maso","Ujemanje","Srebro","Mehika","Mikroskop","Milijonar","Moje","Nakovalo","Projektil","Model","Mol","Luna","Moskva","Miška","Usta","Vrč","Žebelj","Igla","Mreža","Noč","Ninja","Opomba","Roman","Sestra","Matica","Hobotnica","Olje","Oliva","Olimp","Opera","Oranžna","Organ","Dlan","Pan","Hlače","Papir","Padalo","Parkiranje","Del","Mimo","Pasta","Pingvin","Feniks","Klavir","Pita","Pilot","Pin","Cev","Pirat","Pištola","Jama","Tona","Letalo","Plastika","Plošča","Kljunaš","Igra","Parcela","Točka","Strup","Palica","Policija","Bazen","Pristanišče","Objava","Funt","Princesa","Buča","Učenec","Piramida","Kraljica","Zajec","Raketa","Žarek","Revolucija","Prstan","Tašča","Robot","Kamen","Rim","Rose","Ruleta","Krog","Vrstica","Vladar","Satelit","Saturn","Lestvice","Šola","Znanstvenik","Škorpijon","Zaslon","Pečat","Strežnik","Senca","Shakespeare","Pes","Ladja","Čevelj","Trgovina","Strel","Ponor","Nebotičnik","Zdrs","Polž","Tihotapca","Sneg","Nogavica","Vojak","Duša","Zvok","Prostor","Urok","Pajek","Spike","Hrbtenica","Znamenje","Pomlad","Vohun","Kvadrat","Stadion","Osebje","Zvezda","Država","Palico","Zaloga","Slama","Tok","Stavke","Niz","Sub","Obleka","Superheroj","Gugalnica","Stikalo","Miza","Tableta","Oznaka","Rep","Tapnite","Učitelj","Teleskop","Tempelj","Gledališče","Tat","Palec","Kljukica","Kravata","Čas","Tokio","Zob","Bakla","Stolp","Skladbo","Vlak","Trikotnik","Potovanje","Prtljažnik","Cev","Puran","Pogrebnik","Samorog","Vakuum","Kombi","Veterinar","Budilka","Zid","Vojna","Pralec","Washington","Ogledalo","Voda","Val","Splet","Dobro","Kit","Bič","Veter","Čarovnica","Črv","Dvorišče"],unique:["Aladdin","Alarm","Alcatraz","Alkohol","Amazon","Amerika","Antarktika","Arašid","Armstrong","Avatar","Avstralija","Balet","Banana","Bar","Baraka","Barbie","Baterija","Batman","Bazen","Bela","Belgija","Bliskavica","Blond","Boks","Boter","Božič","Breskev","Brisačo","Brki","Top","Casino","Celica","Cesar","Cev","Chewbacca","Churchill","Cigareta","Cikel","Cirkus","Cupid","Cvet","Daljnogled","Darwin","Decathlon","Delovanje","Deska","Detelja","Dež","Dežnik","Diamant","Dim","Dinja","Dinozaver","Disco","Doping","Dracula","Duh","Džungla","Elastičen","Elektrika","Vile","Elvis","Enota","Everest","Facebook","Flavta","Ford","Francija","Frankenstein","Frizer","Galaksija","Gandhi","Gasilec","Genij","Giljotina","Gladiator","Glasba","Gledališče","Gnezdo","Gnoj","Goba","Godzilla","Golf","Golob","Google","Gorčica","Gosenica","Gotska","Gozd","Grad","Granata","Gremlini","Grlo","Grmenje","Grčija","Gumb","Halloween","Hanukkah","Helikopter","Hiša","Hobotnica","Hokej","Hollywood","Hotel","Hruška","Hudič","Hulk","Humor","Igla","Igra","Postaja","Ikea","Šarenica","Italija","Izrael","Jabolko","Jackson","Jadrati","Jagoda","Jajce","Jama","Jama","Jedi","Jedrski","Jezen","Jezero","Jezik","Johnny","Joker","Jones","Kaktus","Kamen","Kanada","Kanalizacija","Karate","Karneval","Kava","Kavarna","Kavč","Kača","Keglanje","Kino","Kladivo","Kleopatra","Klobasa","Klobuk","Klub","Kmetija","Knjiga","Kocka","Kokon","Koktajl","Koledar","Komar","Komedija","Koncert","Konec","Kopel","Kopje","Kosilnica","Kosti","Kot","Kotiček","Kovinski","Koza","Kralj","Kravata","Kremen","Križ","Krogla","Krokodil","Krompir","Krompirček","Krona","Kruh","Krzno","Kuskus","Ladja","Pikapolonica","Lasje","Lava","Led","Lego","Lestev","Lestvice","Let","Letalo","Lev","Lešnik","Lisica","List","Lok","Lončar","Lopata","Loterija","Lovec","Luknja","Luna","Lupina","Lutka","Mafija","Magnet","Manga","Mario","Mars","Maska","Matrica","Matura","Mačka","Maščevanje","Med","Mehika","Mehurček","Melona","Menza","Metulj","Meč","Mickey","Microsoft","Milo","Mir","Misel","Mit","Miška","Mleko","Mlin","Moda","Monopol","Pes","Moskva","Most","Gora","Mozart","Možgani","Mumija","Muza","Mušketir","Nadev","Naglas","Nakit","Natikači","Neuspeh","Nil","Ninja","Nintendo","Nit","Niz","Nogavica","Noseča","Novo","Nož","Nuna","Oaza","Obara","Obletnica","Obramba","Odvetnik","Ogenj","Ogledalo","Ogrlica","Okno","Opera","Opica","Oranžna","Orodje","Osamljen","Otok","Otrok","Ovce","Oven","Očala","Padalo","Padec","Pajkice","Palača","Palica","Pan","Panda","Papež","Papiga","Par","Paradižnik","Parfum","Pas","Pek","Pena","Pepelka","Pesek","Pesem","Peta","Petek","Petelin","Pečica","Picasso","Pikachu","Pilot","Pimento","Pingvin","Piramida","Pirat","Pismo","Pita","Pivo","Pizza","Piškotek","Piščanec","Plamen","Plastika","Platno","Ples","Plešast","Pinceta","Pluta","Podgana","Podružnica","Podzemna","Poker","Pokopališče","Polica","Policija","Polkovnik","Poni","Popek","Poper","Porcelan","Poroka","Postaja","Povleci","Počitnice","Pošteno","Prah","Prašič","Predor","Predsednik","Premirje","Preproga","Preskok","Primarno","Princesa","Priročnik","Privid","Dejanje","Prodnata","Projektil","Prstan","Psiho","Puma","Punk","Puščava","Pšenica","Radio","Raj","Grablje","Rambo","Ramzes","Rap","Razpotje","Računalnik","Reggae","Register","Revolucija","Rezanci","River","Robot","Skala","Rocky","Rogljiček","Rokav","Koren","Vrtnica","Ročaj","Rum","Rumena","Safari","Sahara","Samorog","Sanje","Sardine","Serije","Shakespeare","Sherlock","Shrek","Sidro","Simpson","Sir","Sirena","Sirup","Skodelica","Sladkarije","Sladkor","Slama","Slika","Slon","Smučanje","Sneg","Soba","Sol","Sombrero","Sonce","Soseska","Spartak","Spielberg","Srce","Starbucks","Stark","Stava","Steklenica","Steklo","Stolp","Strast","Stražar","Strela","Stroj","Strup","Svetilka","Svetilnik","Svetloba","Taksi","Tango","Tarantino","Tarzan","Tempelj","Tenis","Terminator","Tetoviranje","Tek","Tiger","Titanic","Tobak","Tokio","Tolažnik","Tolkien","Torbica","Tornado","Torta","Tradicija","Trava","Trg","Trikotnik","Troja","Trs","Tujec","Tulipan","Tuna","Tuš","Ud","Usta","Sila","Val","Valček","Vampir","Varno","Vdovec","Vegas","Velik","Velikan","Velikonočno","Venera","Veriga","Veter","Večer","Vijak","Viking","Vila","Vilice","Vino","Violina","Virus","Vitez","Vladar","Vlak","Vodnjak","Vohun","Vojna","Volitve","Volk","Votlino","Vozovnico","Vreme","Vročina","Vrt","Vrtiljak","Vrv","Vtičnica","Vulkan","Vzglavnik","Vzpon","Western","Zaklad","Zapestnica","Zapor","Zavezništvo","Začimba","Zdravnik","Zelenjava","Zemljevid","Zeus","Zgodovina","Zmrzal","Zobozdravnik","Zombi","Zrel","Zvezda","Čarovnik","Časopis","Čelada","Česen","Čile","Čip","Čokolada","Črpalka","Šampanjec","Šef","Škatla","Škrat","Šola","Število","Študija","Švica","Ščetka","Ščurki","Žar","Žarek","Žarnica","Žebelj","Železnica","Železo","Želo","Želod","Žerjav","Žito","Žrebec"]}}},fe09:function(e,a,o){}});
//# sourceMappingURL=app.f184abeb.js.map