(()=>{var e={4311:(e,t,r)=>{"use strict";r.r(t);var o=r(4992),n=r(1749),a=r(9766),s=r(399),i=r(6244),l=r(9439),d=r(7757),u=r.n(d),c=r(3922),f=r(8188),p=r(6789),g=r(8001),h=r(2364),y=r(8701),m=(0,h.initializeApp)({apiKey:"AIzaSyBM_QhOYsr-tR36EGnsc7e3uwOdl-kByhs",authDomain:"gamemate-app-9b800.firebaseapp.com",projectId:"gamemate-app-9b800",storageBucket:"gamemate-app-9b800.appspot.com",messagingSenderId:"858333712885",appId:"1:858333712885:web:e5b560b8459fa5b92710bc",measurementId:"G-2RYHQ4G9GN"}),b=((0,g.getAnalytics)(m),(0,p.getAuth)()),x=(0,y.getFirestore)(),w=r(5770),j=(0,a.createContext)({});f.maybeCompleteAuthSession();var v={androidClientId:"858333712885-862edi68mjjp35phc9bm9ii8ig1ir995.apps.googleusercontent.com",iosClientId:"858333712885-tllmbbqlp1qt1ph7pg3vfsgu9j80peqr.apps.googleusercontent.com",webClientId:"858333712885-t573fk6mkuumqpsn2f2kh8qph3vpe71q.apps.googleusercontent.com",scopes:["profile","email"],permissions:["public_profile","email","gender","location"]},O=function(e){var t=e.children,r=(0,a.useState)(null),o=(0,l.default)(r,2),n=o[0],s=o[1],i=c.useAuthRequest(v),d=(0,l.default)(i,3),f=(d[0],d[1]),g=d[2],h=(0,a.useState)(null),y=(0,l.default)(h,2),m=y[0],x=y[1],O=(0,a.useState)(!0),S=(0,l.default)(O,2),R=S[0],P=S[1],T=(0,a.useState)(!1),L=(0,l.default)(T,2),C=L[0],k=L[1];(0,a.useEffect)((function(){(0,p.onAuthStateChanged)(b,(function(e){x(e||null),P(!1),k(!1)}))}),[]);return(0,a.useEffect)((function(){var e;return u().async((function(t){for(;;)switch(t.prev=t.next){case 0:if(k(!0),t.prev=1,"success"!==(null==f?void 0:f.type)){t.next=8;break}return t.next=5,u().awrap(p.GoogleAuthProvider.credential(null,f.params.access_token));case 5:return e=t.sent,t.next=8,u().awrap((0,p.signInWithCredential)(b,e));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s(t.t0);case 13:return t.prev=13,t.finish(13);case 16:case"end":return t.stop()}}),null,null,[[1,10,13,16]],Promise)}),[f]),(0,w.jsx)(j.Provider,{value:{user:m,loading:C,error:n,logout:function(){k(!0),(0,p.signOut)(b).catch((function(e){return s(e)})).finally((function(){return k(!1)}))},signInWithGoogle:g},children:!R&&t})};function S(){return(0,a.useContext)(j)}var R=r(115),P=r(4942),T=r(5808),L=r(4614),C=r(8344),k=r(7901),B=r(3936),E=r(6983),D=r(458),G=r(6742),z=r(5012);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const M=function(e,t){var r=_({},e);delete r[t];var o=Object.entries(r).flat(),n=(0,l.default)(o,2);return _({id:n[0]},n[1])};const N=function(e){var t=e.matchDetails,r=(0,E.useNavigation)(),o=S().user,n=(0,a.useState)(null),i=(0,l.default)(n,2),d=i[0],u=i[1],c=(0,s.useTailwind)(),f=(0,a.useState)(""),p=(0,l.default)(f,2),g=p[0],h=p[1];return(0,a.useEffect)((function(){u(M(t.users,o.uid))}),[t,o]),(0,a.useEffect)((function(){return(0,y.onSnapshot)((0,y.query)((0,y.collection)(x,"matches",t.id,"messages"),(0,y.orderBy)("timestamp","desc")),(function(e){var t,r;return h(null==(t=e.docs[0])||null==(r=t.data())?void 0:r.message)}))}),[t,x]),(0,w.jsxs)(z.default,{style:[c("flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"),U.cardShadow],onPress:function(){return r.navigate("Messages",{matchDetails:t})},children:[(0,w.jsx)(D.default,{style:c("rounded-full h-16 w-16 mr-4"),source:{uri:null==d?void 0:d.photoURL}}),(0,w.jsxs)(B.default,{children:[(0,w.jsx)(k.default,{style:c("text-lg font-semibold"),children:null==d?void 0:d.gamertag}),(0,w.jsx)(k.default,{children:g||"Sugerencia de ChatGPT"})]})]})};var U=G.default.create({cardShadow:{shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2}});function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}const F=function(){var e=(0,s.useTailwind)(),t=(0,a.useState)([]),r=(0,l.default)(t,2),o=r[0],n=r[1],i=S().user,d=(0,a.useState)(!0),u=(0,l.default)(d,2),c=u[0],f=u[1];return(0,a.useEffect)((function(){(0,T.onSnapshot)((0,T.query)((0,T.collection)(x,"matches"),(0,T.where)("usersMatched","array-contains",i.uid)),(function(e){n(e.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:e.id},e.data())}))),f(!1)}))}),[]),c?(0,w.jsx)(L.default,{size:"large"}):o.length>0?(0,w.jsx)(C.default,{style:e("h-full"),data:o,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return(0,w.jsx)(N,{matchDetails:t})}}):(0,w.jsx)(B.default,{style:e("p-5"),children:(0,w.jsx)(k.default,{style:e("text-center text-lg"),children:"No tienes chats \ud83d\ude05"})})};var q=r(5061),H=r(6786);const W=function(e){var t=e.title,r=e.callEnabled,o=(0,s.useTailwind)(),n=(0,E.useNavigation)();return(0,w.jsxs)(B.default,{style:o("p-2 flex-row items-center justify-between"),children:[(0,w.jsxs)(B.default,{style:o("flex flex-row items-center"),children:[(0,w.jsx)(z.default,{onPress:function(){return n.goBack()},style:o("p-2"),children:(0,w.jsx)(q.default,{name:"chevron-back-outline",size:34,color:"#FF5864"})}),(0,w.jsx)(k.default,{style:o("text-2xl font-bold pl-2"),children:t})]}),r&&(0,w.jsx)(z.default,{style:o("rounded-lg mr-4 p-3 bg-red-200"),children:(0,w.jsx)(H.default,{style:o(""),name:"telephone",size:20,color:"red"})})]})};const X=function(){return(0,w.jsxs)(R.default,{children:[(0,w.jsx)(W,{title:"Chat",callEnabled:!1}),(0,w.jsx)(F,{})]})};var J=r(3433),Q=r(7364),Y=r(2230),K=r(2482);const V=function(e,t){return e>t?e+t:t+e};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ee=function(){var e=(0,s.useTailwind)(),t=(0,E.useNavigation)(),r=S(),o=r.user,n=r.logout,i=(0,a.useState)([]),d=(0,l.default)(i,2),c=d[0],f=d[1],p=(0,a.useState)(!1),g=(0,l.default)(p,2),h=g[0],m=g[1],b=(0,a.useState)(!1),j=(0,l.default)(b,2),v=j[0],O=j[1],T=(0,a.useRef)(null);(0,a.useLayoutEffect)((function(){(0,y.onSnapshot)((0,y.doc)(x,"users",o.uid),(function(e){e.exists()||t.navigate("Modal")}))}),[]),(0,a.useEffect)((function(){var e;return function(){var t,r,n,a;u().async((function(s){for(;;)switch(s.prev=s.next){case 0:return O(!0),s.next=3,u().awrap((0,y.getDocs)((0,y.collection)(x,"users",o.uid,"passes")).then((function(e){return e.docs.map((function(e){return e.id}))})));case 3:return t=s.sent,s.next=6,u().awrap((0,y.getDocs)((0,y.collection)(x,"users",o.uid,"swipes")).then((function(e){return e.docs.map((function(e){return e.id}))})));case 6:r=s.sent,n=t.length>0?t:["test"],a=r.length>0?r:["test"],e=(0,y.onSnapshot)((0,y.query)((0,y.collection)(x,"users"),(0,y.where)("id","not-in",[].concat((0,J.default)(n),(0,J.default)(a)))),(function(e){var t=e.docs.filter((function(e){return e.id!==o.uid})).map((function(e){return $({id:e.id},e.data())}));f(t),O(!1)}));case 10:case"end":return s.stop()}}),null,null,null,Promise)}(),e}),[x]),(0,a.useEffect)((function(){0===c.length?m(!0):m(!1)}),[c]);return(0,w.jsxs)(R.default,{style:e("flex-1"),children:[(0,w.jsxs)(B.default,{style:e("flex-row items-center justify-between px-5 z-[1]"),children:[(0,w.jsx)(z.default,{onPress:n,children:(0,w.jsx)(D.default,{style:e("h-10 w-10 rounded-full"),source:{uri:o.photoURL||"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}})}),(0,w.jsx)(z.default,{onPress:function(){return t.navigate("Modal")},children:(0,w.jsx)(D.default,{style:e("h-14 w-14 m-1"),source:{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"}})}),(0,w.jsx)(z.default,{onPress:function(){return t.navigate("Chat")},children:(0,w.jsx)(Q.default,{name:"message",size:30,color:"#FF5864"})})]}),v?(0,w.jsxs)(B.default,{style:[e("relative bg-white h-2/3 rounded-xl justify-center items-center text-center m-7"),te.cardShadow],children:[(0,w.jsx)(L.default,{color:"#9262C2",size:"large",style:e("py-5")}),(0,w.jsx)(k.default,{style:e("pb-5 font-semibold"),children:"Cargando perfiles..."})]}):h&&(0,w.jsxs)(B.default,{style:[e("relative bg-white h-2/3 rounded-xl justify-center items-center text-center m-7"),te.cardShadow],children:[(0,w.jsx)(k.default,{style:e("pb-5 font-semibold"),children:"No hay m\xe1s perfiles"}),(0,w.jsx)(D.default,{style:e("h-20 w-20"),height:100,width:100,source:{uri:"https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"}})]}),(0,w.jsx)(B.default,{style:e("flex-1 -mt-5"),children:(0,w.jsx)(K.default,{ref:T,containerStyle:{backgroundColor:"transparent"},cards:c,stackSize:5,cardIndex:0,verticalSwipe:!1,animateCardOpacity:!0,animateOverlayLabelsOpacity:!0,onSwipedAll:function(){return m(!0)},backgroundColor:"#4fd0e9",onSwipedLeft:function(e){!function(e){if(c[e]){var t=c[e];(0,y.setDoc)((0,y.doc)(x,"users",o.uid,"passes",t.id),t)}}(e)},onSwipedRight:function(e){!function(e){var r,n;u().async((function(a){for(;;)switch(a.prev=a.next){case 0:if(c[e]){a.next=2;break}return a.abrupt("return");case 2:return r=c[e],a.t0=u(),a.next=6,u().awrap((0,y.getDoc)((0,y.doc)(x,"users",o.uid)));case 6:return a.t1=a.sent.data(),a.next=9,a.t0.awrap.call(a.t0,a.t1);case 9:n=a.sent,(0,y.getDoc)((0,y.doc)(x,"users",r.id,"swipes",o.uid)).then((function(e){var a;e.exists()?((0,y.setDoc)((0,y.doc)(x,"users",o.uid,"swipes",r.id),r),(0,y.setDoc)((0,y.doc)(x,"matches",V(o.uid,r.id)),{users:(a={},(0,P.default)(a,o.uid,n),(0,P.default)(a,r.id,r),a),usersMatched:[o.uid,r.id],timestamp:(0,y.serverTimestamp)()}),t.navigate("Match",{loggedInProfile:n,userSwiped:r})):(0,y.setDoc)((0,y.doc)(x,"users",o.uid,"swipes",r.id),r)}));case 11:case"end":return a.stop()}}),null,null,null,Promise)}(e)},overlayLabels:{left:{title:"NOPE.",swipeColor:"#9262C2",style:{label:{textAlign:"right",color:"red"}}},right:{title:"MATCH?",style:{label:{color:"#4DED30"}}}},renderCard:function(t){return void 0!==t&&(0,w.jsxs)(B.default,{style:e("relative bg-white h-5/6 rounded-xl"),children:[(0,w.jsx)(D.default,{style:e("absolute top-0 h-full w-full rounded-xl"),source:{uri:t.photoURL}}),(0,w.jsxs)(B.default,{style:[e("absolute bottom-0 bg-white w-full h-20 flex-row justify-between items-center px-6 py-2 rounded-b-xl"),te.cardShadow],children:[(0,w.jsxs)(B.default,{children:[(0,w.jsx)(k.default,{style:e("text-2xl font-bold"),children:t.gamertag}),(0,w.jsxs)(k.default,{style:e("text-xl"),children:["Juego a ",t.favoriteGame]})]}),(0,w.jsx)(D.default,{style:e("h-7 w-7 my-4"),source:{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"}})]})]},t.id)}})}),(0,w.jsxs)(B.default,{style:e("flex flex-row justify-evenly mb-5"),children:[(0,w.jsx)(z.default,{onPress:function(){return T.current.swipeLeft()},style:e(h?"items-center justify-center rounded-full w-16 h-16 bg-gray-200":"items-center justify-center rounded-full w-16 h-16 bg-red-200"),disabled:h,children:(0,w.jsx)(Y.default,{name:"cross",size:24,color:"red"})}),(0,w.jsx)(z.default,{onPress:function(){return T.current.swipeRight()},style:e(h?"items-center justify-center rounded-full w-16 h-16 bg-gray-200":"items-center justify-center rounded-full w-16 h-16 bg-green-200"),disabled:h,children:(0,w.jsx)(Y.default,{name:"heart",size:24,color:"green"})})]})]})};var te=G.default.create({cardShadow:{shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2}}),re=r(7421);const oe=function(){var e=(0,s.useTailwind)(),t=S(),r=t.loading,o=t.signInWithGoogle;return(0,w.jsxs)(B.default,{style:e("flex-1"),children:[(0,w.jsx)(re.default,{resizeMode:"cover",style:e("flex-1"),source:{uri:"https://wallpaperaccess.com/full/649846.jpg"}}),(0,w.jsx)(z.default,{style:[e("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),{marginHorizontal:"25%"}],onPress:o,children:(0,w.jsx)(k.default,{style:e("font-semibold text-center"),disabled:r,children:"Sign in & get swiping"})})]})};const ne=function(){var e=(0,E.useNavigation)(),t=(0,E.useRoute)().params,r=(0,s.useTailwind)(),o=t.loggedInProfile,n=t.userSwiped;return(0,w.jsxs)(B.default,{style:[r("h-full bg-red-500 pt-20"),{opacity:.9}],children:[(0,w.jsx)(B.default,{style:r("justify-center px-10 pt-10"),children:(0,w.jsx)(D.default,{style:r("h-20 w-full"),source:{uri:"https://filecache.mediaroom.com/mr5mr_tinder/178157/43b-matches.png"}})}),(0,w.jsxs)(k.default,{style:r("text-white text-center font-semibold mt-5"),children:["T\xfa y ",n.gamertag," hab\xe9is hecho match."]}),(0,w.jsxs)(B.default,{style:r("flex-row justify-evenly mt-5"),children:[(0,w.jsx)(D.default,{style:r("h-32 w-32 rounded-full"),source:{uri:o.photoURL}}),(0,w.jsx)(D.default,{style:r("h-32 w-32 rounded-full"),source:{uri:n.photoURL}})]}),(0,w.jsx)(z.default,{style:r("bg-white m-5 px-10 py-8 rounded-full mt-20"),onPress:function(){e.goBack(),e.navigate("Chat")},children:(0,w.jsx)(k.default,{style:r("text-center"),children:"Env\xeda un mensaje"})})]})};var ae=r(8754),se=r(4137),ie=r(3453),le=r(9741),de=r(4574),ue=r(3123);const ce=function(e){var t=e.message,r=(0,s.useTailwind)();return(0,w.jsxs)(B.default,{style:[r("bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-5 my-2 ml-14 max-w-3/4"),{alignSelf:"flex-start"}],children:[(0,w.jsx)(D.default,{style:r("h-12 w-12 rounded-full absolute top-0 -left-14"),source:{uri:t.photoURL}}),(0,w.jsx)(k.default,{style:r("text-white"),children:t.message})]})};const fe=function(e){var t=e.message,r=(0,s.useTailwind)();return(0,w.jsx)(B.default,{style:[r("bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2 max-w-3/4"),{alignSelf:"flex-start",marginLeft:"auto"}],children:(0,w.jsx)(k.default,{style:r("text-white"),children:t.message})})};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}const ge=function(){var e=S().user,t=(0,E.useRoute)().params.matchDetails,r=(0,s.useTailwind)(),o=(0,a.useState)(""),n=(0,l.default)(o,2),i=n[0],d=n[1],u=(0,a.useState)([]),c=(0,l.default)(u,2),f=c[0],p=c[1];(0,a.useEffect)((function(){return(0,y.onSnapshot)((0,y.query)((0,y.collection)(x,"matches",t.id,"messages"),(0,y.orderBy)("timestamp","desc")),(function(e){return p(e.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:e.id},e.data())})))}))}),[t,x]);var g=function(){i&&(0,y.addDoc)((0,y.collection)(x,"matches",t.id,"messages"),{timestamp:(0,y.serverTimestamp)(),userId:e.uid,displayName:e.displayName,photoURL:t.users[e.uid].photoURL,message:i}),d("")};return(0,w.jsxs)(R.default,{style:r("flex-1"),children:[(0,w.jsx)(W,{title:M(t.users,e.uid).gamertag,callEnabled:!0}),(0,w.jsx)(ie.default,{behavior:"ios"===le.default.OS?"padding":"height",style:r("flex-1"),keyboardVerticalOffset:10,children:(0,w.jsx)(ue.default,{onPress:se.default.dismiss,children:(0,w.jsx)(C.default,{inverted:!0,data:f,style:r("pl-4"),keyExtractor:function(e){return e.id},renderItem:function(t){var r=t.item;return r.userId===e.uid?(0,w.jsx)(fe,{message:r},r.id):(0,w.jsx)(ce,{message:r},r.id)}})})}),(0,w.jsxs)(B.default,{style:r("flex-row justify-between items-center bg-white border-t border-gray-200 px-5 py-2"),children:[(0,w.jsx)(de.default,{style:r("h-10 text-lg w-full"),placeholder:"Escribe un mensaje",onChangeText:d,onSubmitEditing:g,value:i}),(0,w.jsx)(ae.default,{onPress:g,title:"Enviar",color:"#FF5864"})]})]})};const he=function(){var e=S().user,t=(0,E.useNavigation)(),r=(0,s.useTailwind)(),o=(0,a.useState)(void 0),n=(0,l.default)(o,2),i=n[0],d=n[1],c=(0,a.useState)(void 0),f=(0,l.default)(c,2),p=f[0],g=f[1],h=(0,a.useState)(void 0),m=(0,l.default)(h,2),b=m[0],j=m[1],v=(0,a.useState)({photoURL:void 0,gamertag:void 0,favoriteGame:void 0}),O=(0,l.default)(v,2),R=O[0],P=O[1],T=(0,a.useState)(!1),C=(0,l.default)(T,2),G=C[0],I=C[1];(0,a.useLayoutEffect)((function(){t.setOptions({headerShown:!0,headerTitle:"Actualizar tu perfil",headerStyle:{backgroundColor:"#FF5864"},headerTitleStyle:{color:"white"},headerTintColor:"#fff"})}),[]),(0,a.useEffect)((function(){(0,y.onSnapshot)((0,y.doc)(x,"users",e.uid),(function(e){e.exists()&&P({photoURL:e.data().photoURL,gamertag:e.data().gamertag,favoriteGame:e.data().favoriteGame})}))}),[]);var _=(i||R.photoURL)&&(p||R.gamertag)&&(b||R.favoriteGame);return(0,w.jsxs)(B.default,{style:r("flex-1 items-center pt-2"),children:[(0,w.jsx)(D.default,{style:r("h-20 w-full w-10 h-10"),resizeMode:"contain",source:{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1200px-Xbox_Logo.svg.png"}}),(0,w.jsxs)(k.default,{style:r("text-xl text-gray-500 p-2 font-semibold"),children:["Bienvenido, ",e.displayName]}),(0,w.jsx)(k.default,{style:r("text-center p-4 font-bold text-red-400"),children:"Paso 1: Tu foto de perfil"}),(0,w.jsx)(de.default,{value:i,onChangeText:function(e){return d(e)},style:r("text-center text-xl pb-2"),placeholder:"Introduce una URL",maxLength:200}),(0,w.jsx)(k.default,{style:r("text-center p-4 font-bold text-red-400"),children:"Paso 2: Tu gamertag"}),(0,w.jsx)(de.default,{value:p,onChangeText:function(e){return g(e)},style:r("text-center text-xl pb-2"),placeholder:R.gamertag||"Gamertag principal",maxLength:50}),(0,w.jsx)(k.default,{style:r("text-center p-4 font-bold text-red-400"),children:"Paso 3: Tu videojuego favorito"}),(0,w.jsx)(de.default,{value:b,onChangeText:function(e){return j(e)},style:r("text-center text-xl pb-2"),placeholder:R.favoriteGame||"Escribe el t\xedtulo o saga",maxLength:200}),(0,w.jsx)(z.default,{style:[r("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400"),r(_?"bg-red-400":"bg-gray-400")],disabled:!_,onPress:function(){return u().async((function(r){for(;;)switch(r.prev=r.next){case 0:I(!0),(0,y.onSnapshot)((0,y.doc)(x,"users",e.uid),(function(e){e.exists()&&P({photoURL:e.data().photoURL,gamertag:e.data().gamertag,favoriteGame:e.data().favoriteGame})})),(0,y.setDoc)((0,y.doc)(x,"users",e.uid),{id:e.uid,displayName:e.displayName,photoURL:i||R.photoURL,gamertag:p||R.gamertag,favoriteGame:b||R.favoriteGame,timestamp:(0,y.serverTimestamp)()}).then((function(){I(!1),t.navigate("Home")})).catch((function(e){G(e.message)}));case 3:case"end":return r.stop()}}),null,null,null,Promise)},children:(0,w.jsx)(k.default,{style:r("text-center text-white text-xl"),children:G?(0,w.jsx)(L.default,{size:"small",color:"#ffffff"}):"Actualizar perfil"})})]})};var ye=(0,i.default)(),me=function(){var e=S().user;return(0,w.jsx)(ye.Navigator,{screenOptions:{headerShown:!1},children:e?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(ye.Group,{children:[(0,w.jsx)(ye.Screen,{name:"Home",component:ee}),(0,w.jsx)(ye.Screen,{name:"Chat",component:X}),(0,w.jsx)(ye.Screen,{name:"Messages",component:ge})]}),(0,w.jsx)(ye.Group,{screenOptions:{presentation:"modal"},children:(0,w.jsx)(ye.Screen,{name:"Modal",component:he})}),(0,w.jsx)(ye.Group,{screenOptions:{presentation:"transparentModal"},children:(0,w.jsx)(ye.Screen,{name:"Match",component:ne})})]}):(0,w.jsx)(ye.Screen,{name:"Login",component:oe})})};const be=JSON.parse('{"absolute":{"style":{"position":"absolute"}},"relative":{"style":{"position":"relative"}},"-left-14":{"style":{"left":-56}},"bottom-0":{"style":{"bottom":0}},"bottom-10":{"style":{"bottom":40}},"bottom-40":{"style":{"bottom":160}},"top-0":{"style":{"top":0}},"z-[1]":{"style":{"zIndex":1}},"m-1":{"style":{"marginTop":4,"marginRight":4,"marginBottom":4,"marginLeft":4}},"m-5":{"style":{"marginTop":20,"marginRight":20,"marginBottom":20,"marginLeft":20}},"m-7":{"style":{"marginTop":28,"marginRight":28,"marginBottom":28,"marginLeft":28}},"mx-3":{"style":{"marginLeft":12,"marginRight":12}},"mx-5":{"style":{"marginLeft":20,"marginRight":20}},"my-1":{"style":{"marginTop":4,"marginBottom":4}},"my-2":{"style":{"marginTop":8,"marginBottom":8}},"my-4":{"style":{"marginTop":16,"marginBottom":16}},"-mt-5":{"style":{"marginTop":-20}},"mb-5":{"style":{"marginBottom":20}},"ml-14":{"style":{"marginLeft":56}},"mr-4":{"style":{"marginRight":16}},"mt-20":{"style":{"marginTop":80}},"mt-5":{"style":{"marginTop":20}},"ml-5":{"style":{"marginLeft":20}},"flex":{"style":{"display":"flex"}},"h-10":{"style":{"height":40}},"h-12":{"style":{"height":48}},"h-14":{"style":{"height":56}},"h-16":{"style":{"height":64}},"h-2/3":{"style":{"height":"66.666667%"}},"h-20":{"style":{"height":80}},"h-3/4":{"style":{"height":"75%"}},"h-32":{"style":{"height":128}},"h-5/6":{"style":{"height":"83.333333%"}},"h-7":{"style":{"height":28}},"h-full":{"style":{"height":"100%"}},"w-10":{"style":{"width":40}},"w-12":{"style":{"width":48}},"w-14":{"style":{"width":56}},"w-16":{"style":{"width":64}},"w-20":{"style":{"width":80}},"w-32":{"style":{"width":128}},"w-52":{"style":{"width":208}},"w-64":{"style":{"width":256}},"w-7":{"style":{"width":28}},"w-full":{"style":{"width":"100%"}},"w-auto":{"style":{"width":"auto"}},"max-w-3/4":{"style":{"maxWidth":"75%"}},"max-w-xs":{"style":{"maxWidth":320}},"flex-1":{"style":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"flex-row":{"style":{"flexDirection":"row"}},"items-center":{"style":{"alignItems":"center"}},"justify-center":{"style":{"justifyContent":"center"}},"justify-between":{"style":{"justifyContent":"space-between"}},"justify-evenly":{"style":{"justifyContent":"space-evenly"}},"rounded-2xl":{"style":{"borderTopLeftRadius":16,"borderTopRightRadius":16,"borderBottomRightRadius":16,"borderBottomLeftRadius":16}},"rounded-full":{"style":{"borderTopLeftRadius":9999,"borderTopRightRadius":9999,"borderBottomRightRadius":9999,"borderBottomLeftRadius":9999}},"rounded-lg":{"style":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"rounded-xl":{"style":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"rounded-b-xl":{"style":{"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"rounded-tl-none":{"style":{"borderTopLeftRadius":0}},"rounded-tr-none":{"style":{"borderTopRightRadius":0}},"border-t":{"style":{"borderTopWidth":1}},"border-gray-200":{"style":{"--tw-border-opacity":1,"borderTopColor":"rgb(229 231 235 / var(--tw-border-opacity))","borderRightColor":"rgb(229 231 235 / var(--tw-border-opacity))","borderBottomColor":"rgb(229 231 235 / var(--tw-border-opacity))","borderLeftColor":"rgb(229 231 235 / var(--tw-border-opacity))"}},"bg-gray-200":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(229 231 235 / var(--tw-bg-opacity))"}},"bg-gray-400":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(156 163 175 / var(--tw-bg-opacity))"}},"bg-green-200":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(187 247 208 / var(--tw-bg-opacity))"}},"bg-purple-600":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(147 51 234 / var(--tw-bg-opacity))"}},"bg-red-200":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(254 202 202 / var(--tw-bg-opacity))"}},"bg-red-400":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(248 113 113 / var(--tw-bg-opacity))"}},"bg-red-500":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(239 68 68 / var(--tw-bg-opacity))"}},"bg-white":{"style":{"--tw-bg-opacity":1,"backgroundColor":"rgb(255 255 255 / var(--tw-bg-opacity))"}},"p-2":{"style":{"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8}},"p-3":{"style":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12}},"p-4":{"style":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"p-5":{"style":{"paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20}},"px-10":{"style":{"paddingLeft":40,"paddingRight":40}},"px-5":{"style":{"paddingLeft":20,"paddingRight":20}},"px-6":{"style":{"paddingLeft":24,"paddingRight":24}},"py-2":{"style":{"paddingTop":8,"paddingBottom":8}},"py-3":{"style":{"paddingTop":12,"paddingBottom":12}},"py-5":{"style":{"paddingTop":20,"paddingBottom":20}},"py-8":{"style":{"paddingTop":32,"paddingBottom":32}},"pb-2":{"style":{"paddingBottom":8}},"pb-5":{"style":{"paddingBottom":20}},"pl-2":{"style":{"paddingLeft":8}},"pl-4":{"style":{"paddingLeft":16}},"pt-10":{"style":{"paddingTop":40}},"pt-2":{"style":{"paddingTop":8}},"pt-20":{"style":{"paddingTop":80}},"text-center":{"style":{"textAlign":"center"}},"text-2xl":{"style":{"fontSize":24,"lineHeight":32}},"text-lg":{"style":{"fontSize":18,"lineHeight":28}},"text-xl":{"style":{"fontSize":20,"lineHeight":28}},"font-bold":{"style":{"fontWeight":"700"}},"font-semibold":{"style":{"fontWeight":"600"}},"text-gray-500":{"style":{"--tw-text-opacity":1,"color":"rgb(107 114 128 / var(--tw-text-opacity))"}},"text-red-400":{"style":{"--tw-text-opacity":1,"color":"rgb(248 113 113 / var(--tw-text-opacity))"}},"text-white":{"style":{"--tw-text-opacity":1,"color":"rgb(255 255 255 / var(--tw-text-opacity))"}}}');(0,o.default)((function(){return(0,w.jsx)(s.TailwindProvider,{utilities:be,children:(0,w.jsx)(n.default,{children:(0,w.jsx)(O,{children:(0,w.jsx)(me,{})})})})}))},4654:()=>{}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,r.d(a,s),a}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/gamemate-app/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,l]=o,d=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var u=l(r)}for(t&&t(o);d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[553],(()=>r(4311)));o=r.O(o)})();
//# sourceMappingURL=main.6bfb2980.js.map