(function(e){function a(a){for(var n,t,l=a[0],s=a[1],c=a[2],u=0,d=[];u<l.length;u++)t=l[u],r[t]&&d.push(r[t][0]),r[t]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);k&&k(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,a=0;a<i.length;a++){for(var o=i[a],n=!0,t=1;t<o.length;t++){var l=o[t];0!==r[l]&&(n=!1)}n&&(i.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},t={app:0},r={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-19e6e23e":"776d6c56","chunk-6382f35b":"4abff6e3","chunk-817f42b2":"4639aa8d","chunk-b60f11ce":"149ffd66"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-19e6e23e":1,"chunk-6382f35b":1,"chunk-817f42b2":1,"chunk-b60f11ce":1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise(function(a,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-19e6e23e":"772a5efc","chunk-6382f35b":"ddb3ab24","chunk-817f42b2":"3f3c9131","chunk-b60f11ce":"2e85991b"}[e]+".css",r=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return a()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===r)return a()}var k=document.createElement("link");k.rel="stylesheet",k.type="text/css",k.onload=a,k.onerror=function(a){var n=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete t[e],k.parentNode.removeChild(k),o(i)},k.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(k)}).then(function(){t[e]=0}));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var i=new Promise(function(a,o){n=r[e]=[a,o]});a.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e),c=function(a){u.onerror=u.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+t+")");i.type=n,i.request=t,o[1](i)}r[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/game-utilities/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var k=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"111d":function(e,a,o){},"21bb":function(e,a,o){"use strict";var n=o("4850"),t=o.n(n);t.a},"458f":function(e,a,o){},4850:function(e,a,o){},"56d7":function(e,a,o){"use strict";o.r(a);o("7f7f"),o("386d"),o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),t=o("0284"),r=o.n(t),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],s=(o("5c0b"),o("2877")),c={},u=Object(s["a"])(c,i,l,!1,null,null,null),d=u.exports,k=o("8c4f"),m=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"home container"},[o("router-link",{staticClass:"btn",staticStyle:{"font-family":"'Cookie', Helvetica, sans-serif"},attrs:{to:"/draw"}},[o("span",[e._v("DRAW")])]),o("router-link",{staticClass:"btn",staticStyle:{"font-family":"'monospace'"},attrs:{to:"/type"}},[o("span",[e._v("TYPE"),o("span",{staticClass:"blink"},[e._v("|")])])]),o("h1",[e._v(" RANDOM WORD "),o("span",{staticStyle:{"white-space":"nowrap"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"lang",attrs:{type:"radio",name:"lang",id:"lang-en",value:"en",checked:""},domProps:{checked:e._q(e.lang,"en")},on:{change:function(a){e.lang="en"}}}),e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"lang",attrs:{type:"radio",name:"lang",id:"lang-si",value:"si"},domProps:{checked:e._q(e.lang,"si")},on:{change:function(a){e.lang="si"}}}),e._m(1)])]),o("WordButton",{attrs:{list:e.words[e.lang]["unique"],txt:"UNIQUE"}}),o("WordButton",{attrs:{list:e.words[e.lang]["alias"],txt:"ALIAS"}}),o("Score"),o("h1",[o("router-link",{attrs:{to:"/rules"}},[e._v("Rules")])],1),e._m(2)],1)},p=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("label",{attrs:{for:"lang-en"}},[o("img",{attrs:{src:"img/en_flag.svg",alt:"en"}})])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("label",{attrs:{for:"lang-si"}},[o("img",{attrs:{src:"img/si_flag.svg",alt:"si"}})])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"footer"},[e._v(" Hosted on "),o("a",{attrs:{href:"https://github.com/MKolman/game-utilities"}},[e._v("GitHub")]),e._v(". Go to the "),o("a",{attrs:{href:"https://www.kolman.si"}},[e._v("home page")]),e._v(". ")])}],h=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",[o("h1",[e._v("SCORE")]),o("span",{staticClass:"btn scr"},[o("span",{on:{click:function(a){e.score-=5}}},[e._v("–5")]),o("span",{staticClass:"border",on:{click:function(a){e.score-=1}}},[e._v("–1")]),o("input",{attrs:{type:"number"},domProps:{value:e.score}}),o("span",{staticClass:"border",on:{click:function(a){e.score+=1}}},[e._v("+1")]),o("span",{on:{click:function(a){e.score+=5}}},[e._v("+5")])])])},g=[],P={name:"Score",data:function(){return{score:0}}},v=P,S=(o("966a"),Object(s["a"])(v,h,g,!1,null,"317a72b8",null)),f=S.exports,b=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("button",{staticClass:"btn",style:e.style,on:{click:function(a){return e.showRandomWord()}}},[o("span",[e._v(e._s(e.countdown||e.txt))])])},j=[],C={name:"WordButton",props:{list:Array,txt:String},computed:{style:function(){return{background:"linear-gradient(90deg, "+this.colorLeft+" "+100*this.load+"%, "+this.colorRight+" "+100*this.load+"%)"}}},methods:{randomElement:function(e){return e[Math.floor(Math.random()*e.length)]},animateButton:function(){var e=this,a=["#D32F2F","#F1BE51","#98A352","#4B9086"],o=0,n=100,t=0;this.colorRight=a[o],this.colorLeft=a[o+1],this.countdown=a.length-1,this.interval=setInterval(function(){t+=1,e.load+=(a.length-1)/n,t>n&&clearInterval(e.interval),e.load>1&&(o+=1,e.colorRight=a[o],e.colorLeft=a[o+1],e.load=0,e.countdown=a.length-1-o)},3e3/n)},showRandomWord:function(){var e=this;if(this.timeout)return this.load=0,clearTimeout(this.timeout),clearInterval(this.interval),this.colorRight="#D32F2F",this.countdown=null,this.timeout=null,void(this.interval=null);this.timeout=setTimeout(function(){D.push({name:"display",params:{text:e.randomElement(e.list)}})},3e3),this.animateButton()}},data:function(){return{load:0,colorLeft:"#fdcd3b",colorRight:"#D32F2F",countdown:null,timeout:null,interval:null}}},M=C,y=(o("6d3a"),Object(s["a"])(M,b,j,!1,null,"0fa028c5",null)),B=y.exports,T=o("e430"),w={name:"home",components:{Score:f,WordButton:B},data:function(){return{lang:"en",words:T}}},K=w,R=(o("21bb"),Object(s["a"])(K,m,p,!1,null,null,null)),L=R.exports;n["a"].use(k["a"]);var D=new k["a"]({routes:[{path:"/",name:"home",component:L,meta:{title:"Home"}},{path:"/rules",name:"rules",component:function(){return o.e("chunk-817f42b2").then(o.bind(null,"9f78"))},meta:{title:"Rules"}},{path:"/type",name:"type",component:function(){return o.e("chunk-19e6e23e").then(o.bind(null,"74e0"))},meta:{title:"Type"}},{path:"/draw",name:"draw",component:function(){return o.e("chunk-6382f35b").then(o.bind(null,"2be2"))},meta:{title:"Draw"}},{path:"/display/:text",name:"display",component:function(){return o.e("chunk-b60f11ce").then(o.bind(null,"efc6"))},meta:{title:"Display"}}]}),G=o("9483");Object(G["a"])("".concat("/game-utilities/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),D.beforeEach(function(e,a,o){document.title="Play Now | "+e.meta.title,o()}),n["a"].use(r.a,{id:"UA-42885055-4",router:D,autoTracking:{pageviewTemplate:function(e){return{page:window.location.pathname+window.location.search+"#"+e.name,title:document.title,location:window.location.href}}}}),n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,a,o){"use strict";var n=o("458f"),t=o.n(n);t.a},"6d3a":function(e,a,o){"use strict";var n=o("111d"),t=o.n(n);t.a},"966a":function(e,a,o){"use strict";var n=o("c2d4"),t=o.n(n);t.a},c2d4:function(e,a,o){},e430:function(e){e.exports={en:{alias:["Hollywood","Well","Foot","Spring","Court","Tube","Point","Tablet","Slip","Date","Drill","Lemon","Bell","Screen","Fair","Torch","State","Match","Iron","Block","France","Australia","Limousine","Stream","Glove","Nurse","Leprechaun","Play","Tooth","Arm","Bermuda","Diamond","Whale","Comic","Mammoth","Green","Pass","Missile","Paste","Drop","Pheonix","Marble","Staff","Figure","Park","Centaur","Shadow","Fish","Cotton","Egypt","Theater","Scale","Fall","Track","Force","Dinosaur","Bill","Mine","Turkey","March","Contract","Bridge","Robin","Line","Plate","Band","Fire","Bank","Boom","Cat","Shot","Suit","Chocolate","Roulette","Mercury","Moon","Net","Lawyer","Satellite","Angel","Spider","Germany","Fork","Pitch","King","Crane","Trip","Dog","Conductor","Part","Bugle","Witch","Ketchup","Press","Spine","Worm","Alps","Bond","Pan","Beijing","Racket","Cross","Seal","Aztec","Maple","Parachute","Hotel","Berry","Soldier","Ray","Post","Greece","Square","Mass","Bat","Wave","Car","Smuggler","England","Crash","Tail","Card","Horn","Capital","Fence","Deck","Buffalo","Microscope","Jet","Duck","Ring","Train","Field","Gold","Tick","Check","Queen","Strike","Kangaroo","Spike","Scientist","Engine","Shakespeare","Wind","Kid","Embassy","Robot","Note","Ground","Draft","Ham","War","Mouse","Center","Chick","China","Bolt","Spot","Piano","Pupil","Plot","Lion","Police","Head","Litter","Concert","Mug","Vacuum","Atlantis","Straw","Switch","Skyscraper","Laser","Africa","Plastic","Dwarf","Lap","Life","Honey","Horseshoe","Unicorn","Spy","Pants","Wall","Paper","Sound","Ice","Tag","Web","Fan","Orange","Temple","Canada","Scorpion","Undertaker","Mail","Europe","Soul","Apple","Pole","Tap","Mouth","Ambulance","Dress","Rabbit","Buck","Agent","Sock","Nut","Boot","Ghost","Oil","Superhero","Code","Kiwi","Hospital","Saturn","Film","Button","Snowman","Helicopter","Log","Princess","Time","Cook","Revolution","Shoe","Mole","Spell","Grass","Washer","Game","Beat","Hole","Horse","Pirate","Link","Dance","Fly","Pit","Server","School","Lock","Brush","Pool","Star","Jam","Organ","Berlin","Face","Luck","Amazon","Cast","Gas","Club","Sink","Water","Chair","Shark","Jupiter","Copper","Jack","Platypus","Stick","Olive","Grace","Bear","Glass","Row","Pistol","London","Rock","Van","Vet","Beach","Charge","Port","Disease","Palm","Moscow","Pin","Washington","Pyramid","Opera","Casino","Pilot","String","Night","Chest","Yard","Teacher","Pumpkin","Thief","Bark","Bug","Mint","Cycle","Telescope","Calf","Air","Box","Mount","Thumb","Antarctica","Trunk","Snow","Penguin","Root","Bar","File","Hawk","Battery","Compound","Slug","Octopus","Whip","America","Ivory","Pound","Sub","Cliff","Lab","Eagle","Genius","Ship","Dice","Hood","Heart","Novel","Pipe","Himalayas","Crown","Round","India","Needle","Shop","Watch","Lead","Tie","Table","Cell","Cover","Czech","Back","Bomb","Ruler","Forest","Bottle","Space","Hook","Doctor","Ball","Bow","Degree","Rome","Plane","Giant","Nail","Dragon","Stadium","Flute","Carrot","Wake","Fighter","Model","Tokyo","Eye","Mexico","Hand","Swing","Key","Alien","Tower","Poison","Cricket","Cold","Knife","Church","Board","Cloak","Ninja","Olympus","Belt","Light","Death","Stock","Millionaire","Day","Knight","Pie","Bed","Circle","Rose","Change","Cap","Triangle"],unique:["Accent","Acorn","Aladdin","Alarm","Alcatraz","Alcohol","Alien","Alliance","Amazon","America","Anchor","Angle","Anniversary","Antarctica","Apple","Armistice","Armstrong","Australia","Avatar","Baby","Baker","Bald","Ball","Ballet","Banana","Band","Bar","Barbecue","Barbie","Bath","Batman","Battery","Beer","Belgium","Bellybutton","Belt","Berry","Bet","Binoculars","Blond","Board","Bone","Book","Boss","Bottle","Bow","Bowling","Boxing","Bracelet","Brain","Branch","Bread","Bridge","Brush","Bubble","Buffy","Butterfly","Button","Cactus","Cafeteria","Cake","Calendar","Camembert","Canada","Candy","Cane","Canon","Canteen","Canvas","Carnival","Carousel","Carpet","Carton","Casino","Castle","Cat","Caterpillar","Cave","Cavity","Ceasar","Cell","Cemetary","Cereal","Chain","Champagne","Cheese","Chewbacca","Chicken","Chile","Chip","Chocolate","Christmas","Churchill","Cigarette","Cinderella","Cinema","Circus","Cleopatra","Climb","Clover","Club","Cockroach","Cocktail","Cocoon","Coffee","Colonel","Comedy","Comforter","Computer","Concert","Cookie","Cork","Corner","Cougar","Couscous","Crane","Crepe","Crocodile","Croissant","Cross","Crossroads","Crown","Cube","Cup","Cupid","Cycle","Dance","Darwin","Decathlon","Defense","Dentist","Desert","Devil","Diamond","Dinosaur","Disco","Doctor","Doll","Doping","Dracula","Drag","Dream","Dune","Dwarf","Easter","Egg","Elastic","Election","Electricity","Elephant","Elf","Elvis","Emergency","Emperor","End","Evening","Everest","Facebook","Failure","Fair","Fairy","Fall","Farm","Fashion","Fever","Fire","Fireman","Fitzgerald","Flame","Flash","Flight","Flintstone","Flower","Flute","Foam","Ford","Forest","Fork","Fountain","Fox","France","Frankenstein","Friday","Fries","Frost","Fur","Galaxy","Game","Gandhi","Garden","Garlic","Genius","Ghost","Giant","Gladiator","Glass","Glasses","Goat","Godfather","Godzilla","Golf","Google","Gothic","Grass","Greece","Gremlins","Grenade","Grotto","Guard","Guillotine","Gumbo","Hair","Hairdresser","Halloween","Hammer","Handle","Hanukkah","Hat","Hazelnut","Heart","Heel","Helicopter","Helmet","History","Hockey","Hole","Hollywood","Honey","Hose","Hotel","House","Hulk","Humor","Hunter","Ice","Ikea","Iris","Iron","Island","Israel","Italy","Jackson","Jedi","Jewelry","Johnny","Joker","Jones","Jungle","Karate","King","Knife","Knight","Ladder","Ladybug","Lake","Lamp","Language","Large","Lava","Lawyer","Leaf","Leap","Lego","Letter","Light","Lightbulb","Lighthouse","Lightning","Limb","Lion","Lonely","Lottery","Machine","Mad","Mafia","Magician","Magnet","Manga","Manual","Manure","Map","Mario","Market","Marriage","Mars","Mask","Matrix","Melon","Metal","Mexico","Mickey","Microsoft","Milk","Mill","Mirage","Mirror","Missile","Monkey","Monopoly","Moon","Moscow","Mosquito","Mountain","Mouse","Mouth","Mower","Mozart","Mummy","Muse","Mushroom","Music","Musketeer","Mustache","Mustard","Myth","Nail","Necklace","Needle","Neighborhood","Nest","New","Newspaper","Nile","Ninja","Nintendo","Noodle","Nuclear","Numan","Number","Nun","Oasis","Octopus","Olympics","Opera","Operation","Orange","Oven","Painting","Pair","Palace","Pan","Panda","Parachute","Paradise","Parrot","Passion","Peace","Peach","Peanut","Pear","Pebble","Penguin","Pepper","Perfume","Picasso","Pie","Pig","Pigeon","Pikachu","Pillow","Pilot","Pimento","Pipe","Pirate","Pit","Pizza","Plane","Plastic","PlayStation","Plier","Poison","Poker","Polar","Pole","Police","Pony","Pool","Pope","Porcelain","Potato","Potter","Powder","Pregnant","President","Primary","Princess","Prison","Prom","Psycho","Pump","Punk","Puppet","Purse","Pyramid","Radio","Rail","Rain","Rake","Ram","Rambo","Ramses","Rap","Rat","Ray","Reggae","Register","Revolution","Ring","Ripe","River","Robot","Rock","Rocky","Room","Rooster","Root","Rope","Rose","Ruler","Rum","Run","Safari","Safe","Sahara","Sail","Salt","Sand","Sardine","Sausage","Scale","Scene","School","Screw","Series","Sewer","Shack","Shakespeare","Shark","Sheep","Shelf","Shell","Sherlock","Ship","Shovel","Shower","Shrek","Simpson","Siren","Ski","Sleeve","Slipper","Smoke","Snake","Snow","Soap","Sock","Socket","Sofa","Sombrero","Song","Spartacus","Spear","Spice","Spielberg","Spy","Squib","Stallion","Star","Starbucks","Stark","Station","Stew","Sting","Stone","Straw","Strawberry","String","Study","Stuffing","Subway","Sugar","Sun","Switzerland","Sword","Syrup","Tango","Tarantino","Tarzan","Tattoo","Taxi","Temple","Tennis","Terminator","Theater","Thought","Thread","Throat","Thunder","Ticket","Tie","Tiger","Titanic","Tobacco","Tokyo","Tolkien","Tomato","Tool","Tornado","Towel","Tower","Tradition","Train","Treasure","Triangle","Troy","Tube","Tulip","Tuna","Tunnel","Umbrella","Unicorn","Uniform","Vacation","Vampire","Vegas","Vegetable","Vengeance","Venus","Viking","Violin","Virus","Volcano","Waltz","War","Watch","Wave","Weather","Western","Wheat","White","Widowmaker","Wind","Window","Wine","Wolf","Yellow","Zeus","Zombie","Zoo"]},si:{alias:["Hollywood","Afrika","Agent","Zrak","Tujec","Alpe","Amazon","Amerika","Angel","Antarktika","Jabolko","Roka","Atlantis","Avstralija","Aztec","Nazaj","Krogla","Pas","Banka","Bar","Lubje","Netopir","Baterija","Plaža","Medved","Zmaga","Postelja","Peking","Zvonec","Pas","Berlin","Jagodičja","Račun","Blok","Deska","Vijak","Bomba","Obveznica","Bum","Škorenj","Steklenica","Lok","Škatla","Most","Ščetka","Dolar","Bivol","Napaka","Bule","Gumb","Tele","Kanada","Kapital","Avto","Kartica","Korenček","Casino","Oddaja","Mačka","Celica","Kentaur","Center","Stol","Spremeni","Obtožiti","Preveri","Prsa","Kitajska","Čokolada","Cerkev","Krog","Pečina","Plašč","Klub","Koda","Hladno","Strip","Spojina","Koncert","Dirigent","Pogodba","Kuhar","Pek","Bombaž","Sodišče","Pokrov","Žerjav","Nesreča","Kriket","Križ","Krona","Cikel","Češka","Ples","Datum","Dan","Smrt","Paluba","Stopnja","Diamant","Kocke","Dinozaver","Bolezen","Zdravnik","Pes","Osnutek","Zmaj","Obleko","Vaja","Padec","Raca","Škrat","Orel","Egipt","Veleposlaništvo","Motor","Evropa","Oko","Obraz","Pošteno","Padec","Ventilator","Ograja","Polje","Borec","Številka","Mapa","Film","Ogenj","Ribe","Flavta","Let","Stopalo","Sila","Gozd","Vilice","Francija","Igra","Plin","Genij","Nemčija","Duh","Velikan","Steklo","Rokavice","Zlato","Milost","Trava","Grčija","Zelena","Tla","Šunka","Roka","Sokol","Glava","Srce","Helikopter","Himalaja","Luknja","Med","Kapuca","Kljuka","Rog","Konj","Podkve","Bolnišnica","Hotel","Led","Indija","Železo","Jack","Marmelada","Jet","Jupiter","Kenguru","Kečap","Ključ","Otrok","Kralj","Kivi","Nož","Vitez","Laboratorij","Krog","Laser","Odvetnik","Svinec","Limona","Škrat","Življenje","Svetloba","Limuzina","Vrstica","Povezava","Lev","Stelja","Zaklepanje","Dnevnik","London","Sreča","Pošta","Mamut","Javor","Marmor","Marš","Maso","Ujemanje","Srebro","Mehika","Mikroskop","Milijonar","Moje","Nakovalo","Projektil","Model","Mol","Luna","Moskva","Miška","Usta","Vrč","Žebelj","Igla","Mreža","Noč","Ninja","Opomba","Roman","Sestra","Matica","Hobotnica","Olje","Oliva","Olimp","Opera","Oranžna","Organ","Dlan","Pan","Hlače","Papir","Padalo","Parkiranje","Del","Mimo","Pasta","Pingvin","Feniks","Klavir","Pita","Pilot","Pin","Cev","Pirat","Pištola","Jama","Tona","Letalo","Plastika","Plošča","Kljunaš","Igra","Parcela","Točka","Strup","Palica","Policija","Bazen","Pristanišče","Objava","Funt","Princesa","Buča","Učenec","Piramida","Kraljica","Zajec","Raketa","Žarek","Revolucija","Prstan","Tašča","Robot","Kamen","Rim","Rose","Ruleta","Krog","Vrstica","Vladar","Satelit","Saturn","Lestvice","Šola","Znanstvenik","Škorpijon","Zaslon","Pečat","Strežnik","Senca","Shakespeare","Pes","Ladja","Čevelj","Trgovina","Strel","Ponor","Nebotičnik","Zdrs","Polž","Tihotapca","Sneg","Nogavica","Vojak","Duša","Zvok","Prostor","Urok","Pajek","Spike","Hrbtenica","Znamenje","Pomlad","Vohun","Kvadrat","Stadion","Osebje","Zvezda","Država","Palico","Zaloga","Slama","Tok","Stavke","Niz","Sub","Obleka","Superheroj","Gugalnica","Stikalo","Miza","Tableta","Oznaka","Rep","Tapnite","Učitelj","Teleskop","Tempelj","Gledališče","Tat","Palec","Kljukica","Kravata","Čas","Tokio","Zob","Bakla","Stolp","Skladbo","Vlak","Trikotnik","Potovanje","Prtljažnik","Cev","Puran","Pogrebnik","Samorog","Vakuum","Kombi","Veterinar","Budilka","Zid","Vojna","Pralec","Washington","Ogledalo","Voda","Val","Splet","Dobro","Kit","Bič","Veter","Čarovnica","Črv","Dvorišče"],unique:["Aladdin","Alarm","Alcatraz","Alkohol","Amazon","Amerika","Antarktika","Arašid","Armstrong","Avatar","Avstralija","Balet","Banana","Bar","Baraka","Barbie","Baterija","Batman","Bazen","Bela","Belgija","Bliskavica","Blond","Boks","Boter","Božič","Breskev","Brisačo","Brki","Top","Casino","Celica","Cesar","Cev","Chewbacca","Churchill","Cigareta","Cikel","Cirkus","Cupid","Cvet","Daljnogled","Darwin","Decathlon","Delovanje","Deska","Detelja","Dež","Dežnik","Diamant","Dim","Dinja","Dinozaver","Disco","Doping","Dracula","Duh","Džungla","Elastičen","Elektrika","Vile","Elvis","Enota","Everest","Facebook","Flavta","Ford","Francija","Frankenstein","Frizer","Galaksija","Gandhi","Gasilec","Genij","Giljotina","Gladiator","Glasba","Gledališče","Gnezdo","Gnoj","Goba","Godzilla","Golf","Golob","Google","Gorčica","Gosenica","Gotska","Gozd","Grad","Granata","Gremlini","Grlo","Grmenje","Grčija","Gumb","Halloween","Hanukkah","Helikopter","Hiša","Hobotnica","Hokej","Hollywood","Hotel","Hruška","Hudič","Hulk","Humor","Igla","Igra","Postaja","Ikea","Šarenica","Italija","Izrael","Jabolko","Jackson","Jadrati","Jagoda","Jajce","Jama","Jama","Jedi","Jedrski","Jezen","Jezero","Jezik","Johnny","Joker","Jones","Kaktus","Kamen","Kanada","Kanalizacija","Karate","Karneval","Kava","Kavarna","Kavč","Kača","Keglanje","Kino","Kladivo","Kleopatra","Klobasa","Klobuk","Klub","Kmetija","Knjiga","Kocka","Kokon","Koktajl","Koledar","Komar","Komedija","Koncert","Konec","Kopel","Kopje","Kosilnica","Kosti","Kot","Kotiček","Kovinski","Koza","Kralj","Kravata","Kremen","Križ","Krogla","Krokodil","Krompir","Krompirček","Krona","Kruh","Krzno","Kuskus","Ladja","Pikapolonica","Lasje","Lava","Led","Lego","Lestev","Lestvice","Let","Letalo","Lev","Lešnik","Lisica","List","Lok","Lončar","Lopata","Loterija","Lovec","Luknja","Luna","Lupina","Lutka","Mafija","Magnet","Manga","Mario","Mars","Maska","Matrica","Matura","Mačka","Maščevanje","Med","Mehika","Mehurček","Melona","Menza","Metulj","Meč","Mickey","Microsoft","Milo","Mir","Misel","Mit","Miška","Mleko","Mlin","Moda","Monopol","Pes","Moskva","Most","Gora","Mozart","Možgani","Mumija","Muza","Mušketir","Nadev","Naglas","Nakit","Natikači","Neuspeh","Nil","Ninja","Nintendo","Nit","Niz","Nogavica","Noseča","Novo","Nož","Nuna","Oaza","Obara","Obletnica","Obramba","Odvetnik","Ogenj","Ogledalo","Ogrlica","Okno","Opera","Opica","Oranžna","Orodje","Osamljen","Otok","Otrok","Ovce","Oven","Očala","Padalo","Padec","Pajkice","Palača","Palica","Pan","Panda","Papež","Papiga","Par","Paradižnik","Parfum","Pas","Pek","Pena","Pepelka","Pesek","Pesem","Peta","Petek","Petelin","Pečica","Picasso","Pikachu","Pilot","Pimento","Pingvin","Piramida","Pirat","Pismo","Pita","Pivo","Pizza","Piškotek","Piščanec","Plamen","Plastika","Platno","Ples","Plešast","Pinceta","Pluta","Podgana","Podružnica","Podzemna","Poker","Pokopališče","Polica","Policija","Polkovnik","Poni","Popek","Poper","Porcelan","Poroka","Postaja","Povleci","Počitnice","Pošteno","Prah","Prašič","Predor","Predsednik","Premirje","Preproga","Preskok","Primarno","Princesa","Priročnik","Privid","Dejanje","Prodnata","Projektil","Prstan","Psiho","Puma","Punk","Puščava","Pšenica","Radio","Raj","Grablje","Rambo","Ramzes","Rap","Razpotje","Računalnik","Reggae","Register","Revolucija","Rezanci","River","Robot","Skala","Rocky","Rogljiček","Rokav","Koren","Vrtnica","Ročaj","Rum","Rumena","Safari","Sahara","Samorog","Sanje","Sardine","Serije","Shakespeare","Sherlock","Shrek","Sidro","Simpson","Sir","Sirena","Sirup","Skodelica","Sladkarije","Sladkor","Slama","Slika","Slon","Smučanje","Sneg","Soba","Sol","Sombrero","Sonce","Soseska","Spartak","Spielberg","Srce","Starbucks","Stark","Stava","Steklenica","Steklo","Stolp","Strast","Stražar","Strela","Stroj","Strup","Svetilka","Svetilnik","Svetloba","Taksi","Tango","Tarantino","Tarzan","Tempelj","Tenis","Terminator","Tetoviranje","Tek","Tiger","Titanic","Tobak","Tokio","Tolažnik","Tolkien","Torbica","Tornado","Torta","Tradicija","Trava","Trg","Trikotnik","Troja","Trs","Tujec","Tulipan","Tuna","Tuš","Ud","Usta","Sila","Val","Valček","Vampir","Varno","Vdovec","Vegas","Velik","Velikan","Velikonočno","Venera","Veriga","Veter","Večer","Vijak","Viking","Vila","Vilice","Vino","Violina","Virus","Vitez","Vladar","Vlak","Vodnjak","Vohun","Vojna","Volitve","Volk","Votlino","Vozovnico","Vreme","Vročina","Vrt","Vrtiljak","Vrv","Vtičnica","Vulkan","Vzglavnik","Vzpon","Western","Zaklad","Zapestnica","Zapor","Zavezništvo","Začimba","Zdravnik","Zelenjava","Zemljevid","Zeus","Zgodovina","Zmrzal","Zobozdravnik","Zombi","Zrel","Zvezda","Čarovnik","Časopis","Čelada","Česen","Čile","Čip","Čokolada","Črpalka","Šampanjec","Šef","Škatla","Škrat","Šola","Število","Študija","Švica","Ščetka","Ščurki","Žar","Žarek","Žarnica","Žebelj","Železnica","Železo","Želo","Želod","Žerjav","Žito","Žrebec"]}}}});
//# sourceMappingURL=app.adbb8f05.js.map