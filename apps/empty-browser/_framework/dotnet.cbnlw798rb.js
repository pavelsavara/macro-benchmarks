//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

const e=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),n=Symbol.for("wasm promise_control");function r(e,o){let t=null;const r=new Promise(function(n,r){t={isDone:!1,promise:null,resolve:o=>{t.isDone||(t.isDone=!0,n(o),e&&e())},reject:e=>{t.isDone||(t.isDone=!0,r(e),o&&o())}}});t.promise=r;const i=r;return i[n]=t,{promise:i,promise_control:t}}function i(e){return e[n]}function s(e){e&&function(e){return void 0!==e[n]}(e)||Be(!1,"Promise is not controllable")}const a="__mono_message__",l=["debug","log","trace","warn","info","error"],c="MONO_WASM: ";let d,u,f,m,g,p;function h(e){m=e}function b(e){if(Pe.diagnosticTracing){const o="function"==typeof e?e():e;console.debug(c+o)}}function w(e,...o){console.info(c+e,...o)}function y(e,...o){console.info(e,...o)}function v(e,...o){console.warn(c+e,...o)}function _(e,...o){if(o&&o.length>0&&o[0]&&"object"==typeof o[0]){if(o[0].silent)return;if(o[0].toString)return void console.error(c+e,o[0].toString())}console.error(c+e,...o)}function E(e,o,t){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}o(t?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){f.error(`proxyConsole failed: ${e}`)}}}function R(e,o,t){u=o,m=e,f={...o};const n=`${t}/console`.replace("https://","wss://").replace("http://","ws://");d=new WebSocket(n),d.addEventListener("error",x),d.addEventListener("close",A),function(){for(const e of l)u[e]=E(`console.${e}`,T,!0)}()}function j(e){let o=30;const t=()=>{d?0==d.bufferedAmount||0==o?(e&&y(e),function(){for(const e of l)u[e]=E(`console.${e}`,f.log,!1)}(),d.removeEventListener("error",x),d.removeEventListener("close",A),d.close(1e3,e),d=void 0):(o--,globalThis.setTimeout(t,100)):e&&f&&f.log(e)};t()}function T(e){d&&d.readyState===WebSocket.OPEN?d.send(e):f.log(e)}function x(e){f.error(`[${m}] proxy console websocket error: ${e}`,e)}function A(e){f.debug(`[${m}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=S(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const o="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t=Pe.config.environmentVariables;if(void 0===t[o]&&e&&(t[o]="1"),void 0===t.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(t.TZ=e)}catch(e){w("failed to detect timezone, will fallback to UTC")}}function S(e){var o;if((null===(o=e.resources)||void 0===o?void 0:o.icu)&&"invariant"!=e.globalizationMode){const o=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);e.applicationCulture||(e.applicationCulture=o);const t=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(t.length>=1)return t[0].name}else o&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const o=e.split("-")[0];return"en"===o||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(o)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(o)):n="icudt.dat";if(n)for(let e=0;e<t.length;e++){const o=t[e];if(o.virtualPath===n)return o.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const M=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,o){try{const t="function"==typeof globalThis.fetch;if(Ae){const n=e.startsWith("file://");if(!n&&t)return globalThis.fetch(e,o||{credentials:"same-origin"});g||(p=await import(/*! webpackIgnore: true */"url"),g=await import(/*! webpackIgnore: true */"fs")),n&&(e=p.fileURLToPath(e));const r=await g.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(t)return globalThis.fetch(e,o||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(o){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o},text:()=>{throw o}}}throw new Error("No fetch implementation available")}function C(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!P(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const I=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,O=/[a-zA-Z]:[\\/]/;function P(e){return Ae||Ce?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||O.test(e):I.test(e)}let U,L=0;const N=[],$=[],z=new Map,W={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},F={...W,"js-module-library-initializer":!0},B={...W,dotnetwasm:!0,heap:!0,manifest:!0},V={...F,manifest:!0},H={...F,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},q={...F,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function Z(e,o,t){null!=o||(o=[]),Be(1==o.length,`Expect to have one ${t} asset in resources`);const n=o[0];return n.behavior=t,K(n),e.push(n),n}function K(e){B[e.behavior]&&z.set(e.behavior,e)}function X(e){Be(B[e],`Unknown single asset behavior ${e}`);const o=z.get(e);if(o&&!o.resolvedUrl)if(o.resolvedUrl=Pe.locateFile(o.name),W[o.behavior]){const e=me(o);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),o.resolvedUrl=e):o.resolvedUrl=le(o.resolvedUrl,o.behavior)}else if("dotnetwasm"!==o.behavior)throw new Error(`Unknown single asset behavior ${e}`);return o}function Y(e){const o=X(e);return Be(o,`Single asset for ${e} not found`),o}let ee=!1;async function oe(){if(!ee){ee=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],o=[],t=(e,o)=>{!q[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,o.push(ie(e)))};for(const o of N)t(o,e);for(const e of $)t(e,o);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...o]).then(()=>{Pe.allDownloadsFinished.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const o=await e;if(o.buffer){if(!q[o.behavior]){o.buffer&&"object"==typeof o.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof o.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=o.resolvedUrl,t=await o.buffer,n=new Uint8Array(t);ge(o),await Oe.beforeOnRuntimeInitialized.promise,await Oe.afterInstantiateWasm.promise,Oe.instantiate_asset(o,e,n)}}else J[o.behavior]?("symbols"===o.behavior&&(await Oe.instantiate_symbols_asset(o),ge(o)),J[o.behavior]&&++Pe.actual_downloaded_assets_count):(o.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[o.behavior]&&G(o)&&Pe.expected_downloaded_assets_count--,!q[o.behavior]&&G(o)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const o of e)r.push(n(o));for(const e of o)i.push(n(e));Promise.all(r).then(()=>{Me||Oe.coreAssetsInMemory.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),Promise.all(i).then(async()=>{Me||(await Oe.coreAssetsInMemory.promise,Oe.allAssetsInMemory.promise_control.resolve())}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let te=!1;function ne(){if(te)return;te=!0;const e=Pe.config,o=[];if(e.assets)for(const o of e.assets)"object"!=typeof o&&Be(!1,`asset must be object, it was ${typeof o} : ${o}`),"string"!=typeof o.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof o.name&&Be(!1,"asset name must be string"),o.resolvedUrl&&"string"!=typeof o.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),o.hash&&"string"!=typeof o.hash&&Be(!1,"asset resolvedUrl could be string"),o.pendingDownload&&"object"!=typeof o.pendingDownload&&Be(!1,"asset pendingDownload could be object"),o.isCore?N.push(o):$.push(o),K(o);else if(e.resources){const t=e.resources;t.wasmNative||Be(!1,"resources.wasmNative must be defined"),t.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),t.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),Z($,t.wasmNative,"dotnetwasm"),Z(o,t.jsModuleNative,"js-module-native"),Z(o,t.jsModuleRuntime,"js-module-runtime"),t.jsModuleDiagnostics&&Z(o,t.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,o,t)=>{const n=e;n.behavior=o,t?(n.isCore=!0,N.push(n)):$.push(n)};if(t.coreAssembly)for(let e=0;e<t.coreAssembly.length;e++)n(t.coreAssembly[e],"assembly",!0);if(t.assembly)for(let e=0;e<t.assembly.length;e++)n(t.assembly[e],"assembly",!t.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(t.corePdb)for(let e=0;e<t.corePdb.length;e++)n(t.corePdb[e],"pdb",!0);if(t.pdb)for(let e=0;e<t.pdb.length;e++)n(t.pdb[e],"pdb",!t.corePdb)}if(e.loadAllSatelliteResources&&t.satelliteResources)for(const e in t.satelliteResources)for(let o=0;o<t.satelliteResources[e].length;o++){const r=t.satelliteResources[e][o];r.culture=e,n(r,"resource",!t.coreAssembly)}if(t.coreVfs)for(let e=0;e<t.coreVfs.length;e++)n(t.coreVfs[e],"vfs",!0);if(t.vfs)for(let e=0;e<t.vfs.length;e++)n(t.vfs[e],"vfs",!t.coreVfs);const r=S(e);if(r&&t.icu)for(let e=0;e<t.icu.length;e++){const o=t.icu[e];o.name===r&&n(o,"icu",!1)}if(t.wasmSymbols)for(let e=0;e<t.wasmSymbols.length;e++)n(t.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let o=0;o<e.appsettings.length;o++){const t=e.appsettings[o],n=pe(t);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||$.push({name:t,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...N,...$,...o]}async function re(e){const o=await ie(e);return await o.pendingDownloadInternal.response,o.buffer}async function ie(e){try{return await se(e)}catch(o){if(!Pe.enableDownloadRetry)throw o;if(Ce||Ae)throw o;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw o;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw o;if(o&&404==o.status)throw o;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await se(e)}catch(o){return e.pendingDownloadInternal=void 0,await new Promise(e=>globalThis.setTimeout(e,100)),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await se(e)}}}async function se(e){for(;U;)await U.promise;try{++L,L==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),U=r());const o=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const o=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>o,json:()=>JSON.parse(new TextDecoder("utf-8").decode(o)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const o=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let t;for(let n of o){n=n.trim(),"./"===n&&(n="");const o=ae(e,n);e.name===o?Pe.diagnosticTracing&&b(`Attempting to download '${o}'`):Pe.diagnosticTracing&&b(`Attempting to download '${o}' for ${e.name}`);try{e.resolvedUrl=o;const n=ue(e);if(e.pendingDownloadInternal=n,t=await n.response,!t||!t.ok)continue;return t}catch(e){t||(t={ok:!1,url:o,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(t||Be(!1,`Response undefined ${e.name}`),!n){const o=new Error(`download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`);throw o.status=t.status,o}w(`optional download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`)}(e);return o?(J[e.behavior]||(e.buffer=await o.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--L,U&&L==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=U;U=void 0,e.promise_control.resolve()}}}function ae(e,o){let t;return null==o&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?t=e.resolvedUrl:(t=""===o?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:o+e.name,t=le(Pe.locateFile(t),e.behavior)),t&&"string"==typeof t||Be(!1,"attemptUrl need to be path or url string"),t}function le(e,o){return Pe.modulesUniqueQuery&&V[o]&&(e+=Pe.modulesUniqueQuery),e}let ce=0;const de=new Set;function ue(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const o=function(e){let o=e.resolvedUrl;if(Pe.loadBootResource){const t=me(e);if(t instanceof Promise)return t;"string"==typeof t&&(o=t)}const t={};return e.cache?t.cache=e.cache:Pe.config.disableNoCacheFetch||(t.cache="no-cache"),e.useCredentials?t.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(t.integrity=e.hash),Pe.fetch_like(o,t)}(e),t={name:e.name,url:e.resolvedUrl,response:o};return de.add(e.name),t.response.then(()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),ce++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(ce,de.size)}),t}catch(o){const t={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(t)}}}const fe={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function me(e){var o;if(Pe.loadBootResource){const t=null!==(o=e.hash)&&void 0!==o?o:"",n=e.resolvedUrl,r=fe[e.behavior];if(r){const o=Pe.loadBootResource(r,e.name,n,t,e.behavior);return"string"==typeof o?C(o):o}}}function ge(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function pe(e){let o=e.lastIndexOf("/");return o>=0&&o++,e.substring(o)}async function he(e){e&&await Promise.all((null!=e?e:[]).map(e=>async function(e){try{const o=e.name;if(!e.moduleExports){const t=le(Pe.locateFile(o),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${t}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */t)}Pe.libraryInitializers.push({scriptName:o,exports:e.moduleExports})}catch(o){v(`Failed to import library initializer '${e}': ${o}`)}}(e)))}async function be(e,o){if(!Pe.libraryInitializers)return;const t=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&t.push(we(r.scriptName,e,()=>r.exports[e](...o)))}await Promise.all(t)}async function we(e,o,t){try{await t()}catch(t){throw v(`Failed to invoke '${o}' on library initializer '${e}': ${t}`),Xe(1,t),t}}function ye(e,o){if(e===o)return e;const t={...o};return void 0!==t.assets&&t.assets!==e.assets&&(t.assets=[...e.assets||[],...t.assets||[]]),void 0!==t.resources&&(t.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},t.resources)),void 0!==t.environmentVariables&&(t.environmentVariables={...e.environmentVariables||{},...t.environmentVariables||{}}),void 0!==t.runtimeOptions&&t.runtimeOptions!==e.runtimeOptions&&(t.runtimeOptions=[...e.runtimeOptions||[],...t.runtimeOptions||[]]),Object.assign(e,t)}function ve(e,o){if(e===o)return e;const t={...o};return t.config&&(e.config||(e.config={}),t.config=ye(e.config,t.config)),Object.assign(e,t)}function _e(e,o){if(e===o)return e;const t={...o};return void 0!==t.coreAssembly&&(t.coreAssembly=[...e.coreAssembly||[],...t.coreAssembly||[]]),void 0!==t.assembly&&(t.assembly=[...e.assembly||[],...t.assembly||[]]),void 0!==t.lazyAssembly&&(t.lazyAssembly=[...e.lazyAssembly||[],...t.lazyAssembly||[]]),void 0!==t.corePdb&&(t.corePdb=[...e.corePdb||[],...t.corePdb||[]]),void 0!==t.pdb&&(t.pdb=[...e.pdb||[],...t.pdb||[]]),void 0!==t.jsModuleWorker&&(t.jsModuleWorker=[...e.jsModuleWorker||[],...t.jsModuleWorker||[]]),void 0!==t.jsModuleNative&&(t.jsModuleNative=[...e.jsModuleNative||[],...t.jsModuleNative||[]]),void 0!==t.jsModuleDiagnostics&&(t.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...t.jsModuleDiagnostics||[]]),void 0!==t.jsModuleRuntime&&(t.jsModuleRuntime=[...e.jsModuleRuntime||[],...t.jsModuleRuntime||[]]),void 0!==t.wasmSymbols&&(t.wasmSymbols=[...e.wasmSymbols||[],...t.wasmSymbols||[]]),void 0!==t.wasmNative&&(t.wasmNative=[...e.wasmNative||[],...t.wasmNative||[]]),void 0!==t.icu&&(t.icu=[...e.icu||[],...t.icu||[]]),void 0!==t.satelliteResources&&(t.satelliteResources=function(e,o){if(e===o)return e;for(const t in o)e[t]=[...e[t]||[],...o[t]||[]];return e}(e.satelliteResources||{},t.satelliteResources||{})),void 0!==t.modulesAfterConfigLoaded&&(t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...t.modulesAfterConfigLoaded||[]]),void 0!==t.modulesAfterRuntimeReady&&(t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...t.modulesAfterRuntimeReady||[]]),void 0!==t.extensions&&(t.extensions={...e.extensions||{},...t.extensions||{}}),void 0!==t.vfs&&(t.vfs=[...e.vfs||[],...t.vfs||[]]),Object.assign(e,t)}function Ee(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const o of e.assets){const t={};switch(o.behavior){case"assembly":t.assembly=[o];break;case"pdb":t.pdb=[o];break;case"resource":t.satelliteResources={},t.satelliteResources[o.culture]=[o];break;case"icu":t.icu=[o];break;case"symbols":t.wasmSymbols=[o];break;case"vfs":t.vfs=[o];break;case"dotnetwasm":t.wasmNative=[o];break;case"js-module-threads":t.jsModuleWorker=[o];break;case"js-module-runtime":t.jsModuleRuntime=[o];break;case"js-module-native":t.jsModuleNative=[o];break;case"js-module-diagnostics":t.jsModuleDiagnostics=[o];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${o.behavior} of asset ${o.name}`)}_e(e.resources,t)}}e.debugLevel,void 0===e.virtualWorkingDirectory&&(e.virtualWorkingDirectory=Ie),e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Oe.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Oe.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let Re=!1;async function je(e){var o;if(Re)return void await Pe.afterConfigLoaded.promise;let t;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),t=e.configSrc,Re=!0,t&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const o=e.configSrc,t=Pe.locateFile(o);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",o,t,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(C(n)),r=await xe(i)):r=(await import(C(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await xe(i)):r=e.config}else t.includes(".json")?(i=await s(le(t,"manifest")),r=await xe(i)):r=(await import(le(t,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ye(Pe.config,r)}(e)),Ee(),await he(null===(o=Pe.config.resources)||void 0===o?void 0:o.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),Ee()}catch(e){throw _("onConfigLoaded() failed",e),e}Ee(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(o){const n=`Failed to load config file ${t} ${o} ${null==o?void 0:o.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:o,isError:!0}),Xe(1,new Error(n)),o}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function xe(e){const o=Pe.config,t=await e.json();o.applicationEnvironment||t.applicationEnvironment||(t.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),t.environmentVariables||(t.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(t.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(t.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),t}"function"==typeof importScripts&&(globalThis.dotnetSidecar=!0);const Ae="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Se=De&&"undefined"!=typeof dotnetSidecar,Me=De&&!Se,ke="object"==typeof window||De&&!Ae,Ce=!ke&&!Ae,Ie="/";let Oe={},Pe={},Ue={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Oe,diagnosticHelpers:Ue,api:Le};function Be(e,o){if(e)return;const t="Assert failed: "+("function"==typeof o?o():o),n=new Error(t);_(t,n),Oe.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function He(){return Oe.runtimeReady&&!Ve()}function Je(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use dotnet.runMain() which doesn't exit the runtime.`),Oe.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function qe(){ke&&(globalThis.addEventListener("unhandledrejection",eo),globalThis.addEventListener("error",oo))}let Qe,Ge;function Ze(e){Ge&&Ge(e),Xe(e,Pe.exitReason)}function Ke(e){Qe&&Qe(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(e,o){var t;const n=o&&"object"==typeof o;e=n&&"number"==typeof o.status?o.status:void 0===e?-1:e;const r=n&&"string"==typeof o.message?o.message:""+o;(o=n?o:Oe.ExitStatus?function(e,o){const t=new Oe.ExitStatus(e);return t.message=o,t.toString=()=>o,t}(e,r):new Error("Exit with code "+e+" "+r)).status=e,o.message||(o.message=r);const i=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>i})}catch(e){}const s=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Qe),We.onExit==Ze&&(We.onExit=Ge),ke&&(globalThis.removeEventListener("unhandledrejection",eo),globalThis.removeEventListener("error",oo)),Oe.runtimeReady?(Oe.jiterpreter_dump_stats&&Oe.jiterpreter_dump_stats(!1),0===e&&(null===(t=Pe.config)||void 0===t?void 0:t.interopCleanupOnExit)&&Oe.forceDisposeProxies(!0,!0)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Oe.dotnetReady&&(Oe.dotnetReady.promise_control.reject(e),Oe.afterInstantiateWasm.promise_control.reject(e),Oe.afterPreRun.promise_control.reject(e),Oe.beforeOnRuntimeInitialized.promise_control.reject(e),Oe.afterOnRuntimeInitialized.promise_control.reject(e),Oe.afterPostRun.promise_control.reject(e))}(o))}catch(e){v("mono_exit A failed",e)}try{s||(function(e,o){if(0!==e&&o){const e=Oe.ExitStatus&&o instanceof Oe.ExitStatus?b:_;"string"==typeof o?e(o):(void 0===o.stack&&(o.stack=(new Error).stack+""),o.message?e(Oe.stringify_as_error_with_stack?Oe.stringify_as_error_with_stack(o.message+"\n"+o.stack):o.message+"\n"+o.stack):e(JSON.stringify(o)))}!Me&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsole?j("WASM EXIT "+e):y("WASM EXIT "+e):Pe.config.forwardConsole&&j())}(e,o),function(e){if(ke&&!Me&&Pe.config&&Pe.config.appendElementOnExit&&document){const o=document.createElement("label");o.id="tests_done",0!==e&&(o.style.background="red"),o.innerHTML=""+e,document.body.appendChild(o)}}(e))}catch(e){v("mono_exit B failed",e)}Pe.exitCode=e,Pe.exitReason||(Pe.exitReason=o),!Me&&Oe.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),o=e=>new Promise((o,t)=>{e.on("error",t),e.end("","utf8",o)}),t=o(e.stderr),n=o(e.stdout);let r;const i=new Promise(e=>{r=setTimeout(()=>e("timeout"),1e3)});await Promise.race([Promise.all([n,t]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(e,o)}})(),o;Ye(e,o)}function Ye(e,o){if(Oe.runtimeReady&&Oe.nativeExit)try{Oe.nativeExit(e)}catch(e){!Oe.ExitStatus||e instanceof Oe.ExitStatus||v("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Ae?process.exit(e):Oe.quit&&Oe.quit(e,o),o}function eo(e){to(e,e.reason,"rejection")}function oo(e){to(e,e.error,"error")}function to(e,o,t){e.preventDefault();try{o||(o=new Error("Unhandled "+t)),void 0===o.stack&&(o.stack=(new Error).stack),o.stack=o.stack+"",o.silent||(_("Unhandled error:",o),Xe(1,o))}catch(e){}}!function(n){if($e)throw new Error("Loader module already loaded");$e=!0,Oe=n.runtimeHelpers,Pe=n.loaderHelpers,Ue=n.diagnosticHelpers,Le=n.api,Ne=n.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(n.module,{config:ye(ze,{environmentVariables:{}})});const a={mono_wasm_bindings_is_ready:!1,config:n.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"e921c3d511279a7ed37f83dbd346019c5b3ffc0e",config:n.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:r(),allDownloadsQueued:r(),allDownloadsFinished:r(),wasmCompilePromise:r(),runtimeModuleLoaded:r(),loadingWorkers:r(),is_exited:Ve,is_runtime_running:He,assert_runtime_running:Je,mono_exit:Xe,createPromiseController:r,getPromiseController:i,assertIsControllablePromise:s,mono_download_assets:oe,resolve_single_asset_path:Y,setup_proxy_console:R,set_thread_prefix:h,installUnhandledErrorHandler:qe,retrieve_asset_download:re,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:e,simd:t,relaxedSimd:o};Object.assign(Oe,a),Object.assign(Pe,l)}(Fe);let no,ro,io,so=!1,ao=!1;async function lo(e){if(!ao){if(ao=!0,ke&&Pe.config.forwardConsole&&void 0!==globalThis.WebSocket&&R("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const o=e(Fe.api);if(o.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,o),ve(We,o)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");ve(We,e)}await async function(e){if(Ae){const e=await import(/*! webpackIgnore: true */"process"),o=14;if(e.versions.node.split(".")[0]<o)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${o}.`)}const o=/*! webpackIgnore: true */import.meta.url,t=o.indexOf("?");var n;if(t>0&&(Pe.modulesUniqueQuery=o.substring(t)),Pe.scriptUrl=o.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==M?new URL(e,Pe.scriptDirectory).toString():P(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,o=e.userAgentData&&e.userAgentData.brands;o&&o.length>0?Pe.isChromium=o.some(e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}void 0===globalThis.URL&&(globalThis.URL=M)}(We)}}async function co(e){return await lo(e),Pe.config.exitOnUnhandledError&&qe(),Qe=We.onAbort,Ge=We.onExit,We.onAbort=Ke,We.onExit=Ze,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,o=e.port1,t=e.port2;o.addEventListener("message",e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),so?Pe.diagnosticTracing&&b("mono config already received"):(ye(Pe.config,n),Oe.monoThreadInfo=r,Ee(),Pe.diagnosticTracing&&b("mono config received"),so=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsole&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),o.close(),t.close()},{once:!0}),o.start(),self.postMessage({[a]:{monoCmd:"preload",port:t}},[t])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const o of e.assets)K(o),Q[o.behavior]&&$.push(o)}(),setTimeout(async()=>{try{await oe()}catch(e){Xe(1,e)}},0);const e=uo(),o=await Promise.all(e);return await fo(o),We}():async function(){var e;await je(We),ne();const o=uo();(async function(){try{const e=Y("dotnetwasm");await ie(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const o=await e.pendingDownloadInternal.response,t=o.headers&&o.headers.get?o.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===t)n=await WebAssembly.compileStreaming(o);else{ke&&"application/wasm"!==t&&v('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await o.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ce?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout(async()=>{try{D(),await oe()}catch(e){Xe(1,e)}},0);const t=await Promise.all(o);return await fo(t),await Oe.dotnetReady.promise,await he(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function uo(){const e=Y("js-module-runtime"),o=Y("js-module-native");if(no&&ro)return[no,ro,io];"object"==typeof e.moduleExports?no=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),no=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof o.moduleExports?ro=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),ro=import(/*! webpackIgnore: true */o.resolvedUrl));const t=X("js-module-diagnostics");return t&&("object"==typeof t.moduleExports?io=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),io=import(/*! webpackIgnore: true */t.resolvedUrl))),[no,ro,io]}async function fo(e){const{initializeExports:o,initializeReplacements:t,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),o(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l(()=>(Object.assign(We,{__dotnet_runtime:{initializeReplacements:t,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We)).catch(e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize.");throw e})}const mo=new class{withModuleConfig(e){try{return ve(We,e),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,o){try{return ye(ze,{interpreterPgo:e,interpreterPgoSaveDelay:o}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ye(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),ve(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ye(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,o){try{const t={};return t[e]=o,ye(ze,{environmentVariables:t}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ye(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ye(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ye(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ye(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ye(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ye(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ye(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lo(We),await je(We),ne(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await co(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}run(){return this.runMainAndExit()}async runMainAndExit(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}async runMain(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMain()}catch(e){throw Xe(1,e),e}}},go=Xe,po=co;Ce||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version."),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),globalThis.performance&&"function"==typeof globalThis.performance.now||Be(!1,"This browser/engine doesn't support performance.now. Please use a modern version."),Ce||globalThis.crypto&&"object"==typeof globalThis.crypto.subtle||Be(!1,"This engine doesn't support crypto.subtle. Please use a modern version."),Ce||globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues||Be(!1,"This engine doesn't support crypto.getRandomValues. Please use a modern version."),Ae&&"function"!=typeof process.exit&&Be(!1,"This engine doesn't support process.exit. Please use a modern version."),mo.withConfig(/*json-start*/{
  "mainAssemblyName": "EmptyBrowser",
  "resources": {
    "hash": "sha256-zG4K/R9b28lASHS8RkN6hXR/GUmz0r67jEW5nSrmQuo=",
    "jsModuleDiagnostics": [
      {
        "name": "dotnet.diagnostics.s31gs2yia6.js"
      }
    ],
    "jsModuleNative": [
      {
        "name": "dotnet.native.yxa9ubharw.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.gvfqv6oou8.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.4ga30s68wt.wasm",
        "hash": "sha256-XFiTeV3tHayz05qOW6cLNv4fWgI/yeUmfgqCcUfyi6I=",
        "cache": "force-cache"
      }
    ],
    "wasmSymbols": [
      {
        "name": "dotnet.native.epwh6nzps3.js.symbols",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt_CJK.dat",
        "name": "icudt_CJK.5lgyv9xn0b.dat",
        "hash": "sha256-eZuX0pntrUwNrAmFCMwpxJjFA3/Myi/rW2x9mEZ+Mbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_EFIGS.dat",
        "name": "icudt_EFIGS.xyuimhy3ww.dat",
        "hash": "sha256-SQcxb+bdx2UXUCU9tFdOWCr4Ctk64xghCnr0JGLWWKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_no_CJK.dat",
        "name": "icudt_no_CJK.h0en30vv0c.dat",
        "hash": "sha256-T8YllylpxyWp9Aq4AiF+BMAxKXqYyzWB9RA5RqY19vs=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.bz5d6bg5wp.dll",
        "hash": "sha256-h3EESgAZyF59iopbPThV+MoWLwMOarv6ATHmeVGhfW4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.5nec1apu6s.dll",
        "hash": "sha256-3xF5piCMgX6PQoriBDb3Etb7X0U8Szf64DLGpz7pax0=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.q2vfk5bz3g.dll",
        "hash": "sha256-EoPMQbbp1yoNpHSm0aeUb9+j9YEvV8/znhpVtN7Ffl4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.n3iwi2ggih.dll",
        "hash": "sha256-o73kqWAwF6REqYYiuQzOllV44KMCEXgpkQG4B3h7E9I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.e26tfgknxt.dll",
        "hash": "sha256-9nK5JJxeycALdA745pGvkyrXdzvHZYhvwfELw9bVltg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.a8zgeziwi4.dll",
        "hash": "sha256-WnBQDp9KMHUJPd/rEo48Vh9BwzCCt7iTu0bhK65mFuU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.4jy5hr2gzb.dll",
        "hash": "sha256-8KQnCmY1KxHQdoV+2uspbDKxTypOWekc4jju3YoO3j8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.hjxzw8tbd1.dll",
        "hash": "sha256-jWQFTmo6Dqxai9KEgaYucnPTeb/K6JEaCg1RIajoWAM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.fzezkoj00v.dll",
        "hash": "sha256-m1oThWFVf8kj4hfhaJIvOfjxeWigMD6EqmfuVlej5Sk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.8i7mnbyfiv.dll",
        "hash": "sha256-gDJ2Xoexp+Aioo1+JALocT/2pOwlXZJ4v6IOGlHF+SE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.xyh47b8u0n.dll",
        "hash": "sha256-+aZr/YAqV2o4BltTF7MSrkX1sZJSOXJStFu6Cl72ZqY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.80v7rimxj4.dll",
        "hash": "sha256-uLttlj9L1qpQJWUJzNNGx0uhS4rFtHzEiNoom5FbWnM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.tymqcszfxg.dll",
        "hash": "sha256-xWK2kEMOxuM8g4jQH/+hFiMmyzYNjFO+4RPyG9pj38A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.9u81dx4m6p.dll",
        "hash": "sha256-/wuDgwz4gVD/S7fhvn3tkD4Tp6OvIAqJiGn6xavPMDE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.xn9m68qhnl.dll",
        "hash": "sha256-baBzVSsAT61AEXxUIayV9dxpNZ06Cqdvubzy0MswmHY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.6tx047j94d.dll",
        "hash": "sha256-Khu48Mo2FoozrxkxuoAwLd6hWFZmGtqSi9jN7bFdN94=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.y1qw7578eu.dll",
        "hash": "sha256-5lZRIBXY56p6v04Gmylinb1dqZSYzgQ6i9OoamvHC6c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.jefaof6anr.dll",
        "hash": "sha256-hf/FAZKO7Kyki7jg/CZK+ZMu4Fid/BwQEC3TTJN1o3I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.cd5u462z60.dll",
        "hash": "sha256-sLLSCfvrTzor099bfVNyzRKSloMN6YtakNrFKdnBbEA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.otoacq6b83.dll",
        "hash": "sha256-1A8lLihssuO5v6RsDMbtJqUvNxiQhP7v9yd27h0kELE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.ukl1carzx8.dll",
        "hash": "sha256-fof5saWC2adQA72joXKCa3QU/mWPE2W6CaYOQIE/P7Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.eyqts2bydp.dll",
        "hash": "sha256-tkHjs2xR5u4GivN8GBRzLwyZEBTSP4PsIL5Id92/B3k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.y2y5xw8gsy.dll",
        "hash": "sha256-NgP53WogffiEXf7Trb4CHqowoVftpeeyjJOOe4Xavr0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.hg5kkifefy.dll",
        "hash": "sha256-XxsR+xlEf6uXaha566txxLYywYemxrQkIldxHlgYah4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.7x09yzkft9.dll",
        "hash": "sha256-6zomC0O7rdcE64U9QgDsdpnsSQK/QlyXPwqwcdP29e4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.69vxgplsmk.dll",
        "hash": "sha256-eoDdYSykk2p+hjqc6Kw7dsfRw6ypEjaWn/JEpy6HNqc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.lb9r293gaz.dll",
        "hash": "sha256-8Z3dJBJUIzF6d0kCrBioCmwJ2uo/1xBTTzE2Xy1oWg4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.s16bupuypn.dll",
        "hash": "sha256-oMov4gdNXNayGgHPdn04jFSNiqtUYFxi9sVvnNzhavI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.9rtbneg2pq.dll",
        "hash": "sha256-ZVo5f+ZCkolgaNH5ggJUwQbwqFGydpsmtaxkqT6Vey8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.bro4xaavj3.dll",
        "hash": "sha256-V98qk1ejLGYBQ3/qMu+DlQY/6+gGur8H7hYJUEzxNAM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.fiia3t3jy6.dll",
        "hash": "sha256-N+PebpRgoP4z7HoKrRMPWUSRU5rVplsuav61dBYINAo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.mbomo0zyy0.dll",
        "hash": "sha256-ouyshMmSzr5ErSnDrNRQL8DIXg35Vwi3gZB0d05iCzY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.guh2rpadv4.dll",
        "hash": "sha256-2KXeVF7YHo4sGU/ea/V//Y4bL91Pcs/eEDIvkuBn/Z4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.o0auq0e8do.dll",
        "hash": "sha256-yDe+IuGw2rbg/sTFzyk8ggz0+G3s0uwMEgT2D5q/lEk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.u70mniii9t.dll",
        "hash": "sha256-mklJGl27oUAS69DpQanaLyaOAgM0Ic0cPMUD5vp4QZE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.6angjm53f4.dll",
        "hash": "sha256-Igv+e8poraHBDddwily0hT11P8WjbdB+/VxMF430bQ8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.xrkwfltsow.dll",
        "hash": "sha256-0xttQaosPDKcVZA5HmCvyqGlisofdQm9KXQ1xfs3uQk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.xh78natrj5.dll",
        "hash": "sha256-C7kFzutWrhXytiAABqsc0vKbDi8j5sKzgXQL82E2p/w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.knke78356l.dll",
        "hash": "sha256-EFdhiJjmaMAgdK5K5Y/7g6NlYl+gu72sLR+8nFJAcZ4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.3tztk2f8pl.dll",
        "hash": "sha256-hyZcTD7hK/c5ENsv00PVDCbWgralWQYngUZfMOWhCbo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.2jp4m0fab4.dll",
        "hash": "sha256-wl89mR9NbkG5C+VyGKGAjJRUgqzeaGhTtdey9kLPm/k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.ybwq50a1v8.dll",
        "hash": "sha256-0tT4h6z9SHfr1Hp/NiNJXv7v3GFwgok5FCIvg0lK+wQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.nqbudf2n7r.dll",
        "hash": "sha256-7z/rltJeHgNYWRCilCDYHezGo68olA208pq8I3RBRZY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.mhvdtabe0e.dll",
        "hash": "sha256-VkofiVNhHcfL7EhjsE1dI2j+8sNOF3jlKNLdJxFj4no=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.m6wt5zui34.dll",
        "hash": "sha256-LjkRzfDhn+RvCVT5eNcCfdJqbRyeHir6ov3445FqhWo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.rslkj0tu0g.dll",
        "hash": "sha256-W+7FM8SrRS8CuMmZg6KRB6DITcY8WlCRbVvKwiPHRDo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.m2q81u4b80.dll",
        "hash": "sha256-AvHf/lfTQFuTMdMI6Z22Wd8+ijXG8fOjlYoi642E9x4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.piwthsw5gc.dll",
        "hash": "sha256-4SrclaCH7iZIqA79Dqb9LIpbjDqcr13Vw6uPF6KrTvg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.zdf313xuu0.dll",
        "hash": "sha256-WXKZnD07LCv2ajMXbhVbn0Woq/Z877Q2iyJkQX1IXPY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.a2cqk043wl.dll",
        "hash": "sha256-bqyBd7+xHYXmB6R6ubsRz6eGL9hOo+HAtTUVH/Nziho=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.81iuka8l67.dll",
        "hash": "sha256-NI0psPYu7s685J3g2K0wYUkIt0auGR9OXayIXbEUXnk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.o84629mkqs.dll",
        "hash": "sha256-+MCZlL7JjL02rPAMG+r4nSxR1G4toD6VNeVWEuiY9q4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.ttdjz7jwj5.dll",
        "hash": "sha256-P4TpAeez0r2oohCUTj7owF2LmzlQvh/4EnNZ+4h+3l8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.sht13ljlbi.dll",
        "hash": "sha256-cO0VVlVeHfP70p4BNN1lVX5OeOPHfySXvvydOUC03dk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.5ka9dnw6b3.dll",
        "hash": "sha256-S/no25Cgc6L+pyAcbeOFw7bHOw/l01pUQxsvMH8qY9s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.eyyjpsod8z.dll",
        "hash": "sha256-Sl/AeUAT0pDrUyl9Sh9LaeSu4h0+e9xKFRv1WuiCwrc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.5gie8yscf4.dll",
        "hash": "sha256-GxsviUcACWPpr6t/cV2TXRvlZLiqPq2ovscPu1i28Qw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.quahzh8mia.dll",
        "hash": "sha256-zscxE7jlejjJ1rV1sSmTV5KfyfndgX+lYvrcyQZSBLo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.hh8bn5q8jb.dll",
        "hash": "sha256-S7VMRy6GENq4TaOwzrzPcW0r9VR8/3w9jp1JnaDqr1Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.gfchip32vf.dll",
        "hash": "sha256-1KBXKbAuPvejECNuk5zWk5wXlwK2I07I9DjCaoBIaYo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.g44vm7moed.dll",
        "hash": "sha256-oNhnDWgDs2oy1r0+SIY2qakU0KfT3nLNH6YPpmWmx9E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.t852ac7c89.dll",
        "hash": "sha256-DfFh4jbXVORQO4kvB56DaIcVuHayxAAOC0+npIVBK0M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.xv06j97xi2.dll",
        "hash": "sha256-A09LwzN7Tkm2yhkrgyywx0YtgtANhFp0enlSjLhN9rw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.3eacisv7ki.dll",
        "hash": "sha256-m7ECKIm3GhIwEHOLnWYgvu1eVKhNYYqntEovusfB6YE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.8fwuteb5f8.dll",
        "hash": "sha256-pCQ+TVVnpPdRBOZ72/bYDNN2VQJg6bWB8Edfdqb/B4I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.yb5flfq6tl.dll",
        "hash": "sha256-QkYtARKmXa2yfkYggmWd8MiEIJ6cX7dQJdqVc6k1ES8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.offrntbmkk.dll",
        "hash": "sha256-5MGIfiiRWEkkib90EglbOSoUcmlN3/jDvweAAFNUNJM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.jc0cffytc1.dll",
        "hash": "sha256-w/dFJteq8/N+ds8uWeqz2h9PevaLYahWU1aYdZy1GxI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.686cldqiq2.dll",
        "hash": "sha256-eqx4qM+Gr9CcAiPYN2SOVeHePqCSSvpAWLixu5Txh8M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.mth7dvmpsx.dll",
        "hash": "sha256-BgEUHfXjfTST3Q2GEWFC2DRKGR3qEpxduOSPbL+M1SA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.0bzhdpdtfv.dll",
        "hash": "sha256-BPIPJq7lT47dQq2Lxa5ioycKoMrbflfTRTSiLhc5p+k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.y5gjpxis7t.dll",
        "hash": "sha256-ltUGpCI8+wAgEfqpu+Ayywqdf2v1Rhpuj8LxFPPDa6g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.hqlmgnax67.dll",
        "hash": "sha256-dzziKTCt26+9XwDtRXVv/KLid+Pfwlyj3lPHdcdFsw0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.v2h2gqlcv6.dll",
        "hash": "sha256-98oOCfm6s8pL1yxDoXpq7TRAPxDZBk5BiVYs4TBTyBs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.w9xpz9s60n.dll",
        "hash": "sha256-tHuqX4rUe5MFPmneSM7lqV7Isf+ef3tTqTWfkHEGvP0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.lywi0wmt5k.dll",
        "hash": "sha256-o2hQpWeZEa6M5SztFEqafblUo35/8tpnh6dyQmb13is=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.hkeenuggbw.dll",
        "hash": "sha256-QfDWQODcKNtjO3HUX4YQ3HvpWLEvl8JwuH5hLmixE6s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.uhoeao8jm8.dll",
        "hash": "sha256-gl2HATo6ybNpm0b2x7jrqmprMx+5ACBcH8yFXSvrwLI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.sxtp32dc5j.dll",
        "hash": "sha256-0F50iv8wJFwEJdYRa0eDDdPtVXc+GipZE7hmqIZMaxw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.jo2cndy19g.dll",
        "hash": "sha256-k8MXio9bwW4RmONdmkGSZipNrEZ3treGWGOpzLpi0ZY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.wm80jexeda.dll",
        "hash": "sha256-uKZ5qWdIn3BHdY6lp1ZAbW2mzla3D7qoVtjaLmF5jNs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.itc5xtjimo.dll",
        "hash": "sha256-2ioF5jRACFaRi4gArBHHD+orKJu8YEV/ZoBz+ub/Y28=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.r385dujjei.dll",
        "hash": "sha256-ufLcFZsCLbCnSBYPI4H+EME6e8WIoSFnAiil2lMNG4g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.5xikdsd0fg.dll",
        "hash": "sha256-yYl46HtEYG9OrxtRLRPIL43/rNEYxGXNPpYb3cBPEz8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.xf3i6tz7hm.dll",
        "hash": "sha256-E9QIDdaqAAvgsDpH0nM3YfCzPCntRDAxgNuPC2crCjU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.czrg9xwys8.dll",
        "hash": "sha256-WMHLcS4WtVGdWcpuwWWx8j7rQMMh0mkm8EldzsznwX8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.ptgv4uty5i.dll",
        "hash": "sha256-E429kel4ju691e9LVWnjYWNGkMG18CKsYfKlRKG0sjU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.d67k8qqe7u.dll",
        "hash": "sha256-q86RmQZ3GqyaeWVnR7QPaw8gd6kZGwphN/T3w9h8bXs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.jo6268ndb1.dll",
        "hash": "sha256-rdu82VyrLeHXFta2Y4sF1xcVyMg70/L9YyYKZcjDYrY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.r5lwhykt8o.dll",
        "hash": "sha256-Hyz39+i3rjA5RHBGUu7PpnDzA6Gvdz9OZ/0u7Ot7FKo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.66lba0s8t4.dll",
        "hash": "sha256-ErbiMvH1Fx7wU5VpWe7RLTEULpYqgewnTTy6QYUrDwQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.779xwnj6nq.dll",
        "hash": "sha256-Lcf8rHy+78znjnb/Xj7YusQcGXnNGLeMtenL8taqxwg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.rb2a8epnnd.dll",
        "hash": "sha256-R3q0dDLiVNwXet/vA4BUmsHz9RT0agODJittLme5oTk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.948repi4p6.dll",
        "hash": "sha256-2VM96TAYJJR6C2sucDTt1YmTNLYUWj8WKYaEhDnaPac=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.gy1m8burbr.dll",
        "hash": "sha256-aGf9KNREnDIdUY8pm6zPtPx/qiO+of6yXcUWDTTw+4M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.g42hmdr8cu.dll",
        "hash": "sha256-AAEJ8ZK7cJrdUm66UOHc9xYeIGywrnSFWMamLIl7Je4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.to20yg36kc.dll",
        "hash": "sha256-nV9I/o3nlmoRY/DBrrrBmmQYSmHhT9wL8cLcYI2inok=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.5fbsqbwb6s.dll",
        "hash": "sha256-L7H3e8cRE+mtgODoAvS3eIgGfj4+M8Hr+BNw1qcKTSg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.04x6zc7ahh.dll",
        "hash": "sha256-IJCiTuCwS2UxtWFV4R2aWNI/cdqgqxj8PhoRlzGgXEU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.ag8iyb1w8s.dll",
        "hash": "sha256-toYXBv1l/wC3a6FPUmK9s3fYLP0qcvxwn1ZuYFBppFQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.eppt34k9kt.dll",
        "hash": "sha256-YhpC2gvd/Lws00ObFcQHfRpS0eAYFfXezgpEOMavAMc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.yje0v80x5c.dll",
        "hash": "sha256-rijbtb7vPipUKE+mZ0t2aw5mMaoOXYql02B9GVP/UfY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.hylbwszqyt.dll",
        "hash": "sha256-6QNu+lVSS4Fe8nOTYvmG1j+qGcuW/UMHoPuMNkEAO08=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.r74jiuhd7p.dll",
        "hash": "sha256-6YmxS7efP8Xrs8LLZvqGnXDhcZvSLSIQDG71kHckA8k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.yil8dv3yc4.dll",
        "hash": "sha256-+teK1+/o7KgPs1Qv4Z1SBXc52DG5IMKQhj3GoZzgSW0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.r4sudapdvb.dll",
        "hash": "sha256-FbHl/SCYwHjrk4jc7yNdRSmj1V+Fwi88nrBS+FhuMeo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.vwpv3jwjvp.dll",
        "hash": "sha256-72PR5RQF0a9ebL0MkYBUOhbILHfafR7XpYWn47Kdo7M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.nu0z7qac9m.dll",
        "hash": "sha256-D57TdXU9qsAguOnRPnaZSReynOn0f4IU/g/31MNnjCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.cqkqlv2696.dll",
        "hash": "sha256-dJyrLLia0Fcg8IVBnmAGP74RWWdgA4IpmnAiY0y4cG0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.vbpptknncr.dll",
        "hash": "sha256-hXanGqjqV1P64FOnrqx46NFWQJB1ch+ODiQ59Rxs7aU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.mddsqr76ul.dll",
        "hash": "sha256-usge0C2kqnd5dGl3LVdqklIyBqGuCrKA7kj1PzsOWWE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.3n9c97hkld.dll",
        "hash": "sha256-MQ/A9gAfbZSQV0cJeDhN0gxHFQZPPC2W/zEg3QuAOPQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.vd71wklf5m.dll",
        "hash": "sha256-o9s4A6lmUUxELLVOkf7Zy4Laio6Tvw/gOK+sv2LdxJo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.sej3xy8ag1.dll",
        "hash": "sha256-BA719KQoXUNOvT4WgOrfEwA8YhoMsXhQ3KDLSEBS0n8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.ga3he41des.dll",
        "hash": "sha256-GCc8/95wifzSK8SAXoMbKdDeoS8sFiCmRFXb7WRuxgQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.8ht02ffceb.dll",
        "hash": "sha256-PGPa94ui2Xtgw0+XooLiOsmkdfLW/4rQUnaHI/78zxs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.54gi6wfefn.dll",
        "hash": "sha256-FdivYvbZcJB7zetKfpuFFfZDRxnVVWt7eR8nI31xv6M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.7gdqcek7yb.dll",
        "hash": "sha256-l0qKLJRrcXlujxKXtw684yN1Xsmtb2/mYb+3ko10e/Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.9penmle1na.dll",
        "hash": "sha256-LRT09UQ8saJuEQqupAc2vtEFKgZrjbT8ttXPo/suFpM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.17y5243m45.dll",
        "hash": "sha256-o0Fvxde3orv9Rkan06oBQXWCM0Ud/aKBF5ysLuD7EJk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.trvea76rlx.dll",
        "hash": "sha256-WX6ZgGILtds4md3XelGORqnp2V8HL2Svvwy517K+G9g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.6yianu7qh4.dll",
        "hash": "sha256-bh2BitbeeehlgdEcv4dYzwBhzw5Cxdi5HKxue4cNnv8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.t88untly8r.dll",
        "hash": "sha256-PWBMn7RyBVA1G6wA5Dklsj443WP19UXW88IfvyoVG6U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.i95v9ips0r.dll",
        "hash": "sha256-Zu0PLYGGMI1DmFE0UPvosfaDnSku8Tgu0Arz0ozr3dw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.g2rdaucagl.dll",
        "hash": "sha256-uHOPQdFqfnyeu46rLS/XA3xO/d7EIxctJkiRuvGEdjY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.oskvf7xavx.dll",
        "hash": "sha256-+Al8aV7byE3pYnAkZpsoxOb1tALe4likybBJ9/bBt2w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.qqvunv3kc8.dll",
        "hash": "sha256-zoDMrJ+OjI65KLfNPnj3ugbSVcYpKc6z9KIx+pM87uY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.7bp5hr6sq3.dll",
        "hash": "sha256-Y2xGB150Dk037kxXcuC7rUpjZxEln9jLfi1HZbFUHVI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.jw9hy4y6bx.dll",
        "hash": "sha256-nSGNiysM3Oq5NPl04E0tivtqm1A8wHmNZVxqGwMUEL4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.888egdu690.dll",
        "hash": "sha256-KOWwUlUYFudeIRbyQfcUxcOn71TA+to6iuuLZMwCsqo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.pr2q0qzyr0.dll",
        "hash": "sha256-exfaf0D6k3Ke84QTvAuUYx4tXA5pgsEHHjy0CK2/4DU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.gzewpp33f6.dll",
        "hash": "sha256-3MCQaS/W4RNBcdYTA9w4aiNwlDlTArfqyfpTxFJCjvw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.mxufy4k13u.dll",
        "hash": "sha256-WryDge0BpU5u7nB9vhSNDLH5oksWIe2ozpnv/0vGUNo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.0zj46jdf45.dll",
        "hash": "sha256-5D/n8BIpiu+raJdjmhlcjxskyufmCGTRp7hBqJckdbI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.h1oi2yodps.dll",
        "hash": "sha256-y+upNSeYI5/Z7GBTFLIv+AQRP1Di8XhgVyC3BWLfNKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.20ifkklo27.dll",
        "hash": "sha256-4rwQzfh1XbEoh4O5ztMgjc56UpTeeY7KFJKIlMngBxc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.fd9hr8e4sm.dll",
        "hash": "sha256-s0RFSuCrIqZTfY/me8qBmPI3FcIaSDQ8dVwTx3hSvXE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.rrxcj9ame0.dll",
        "hash": "sha256-9wwevaoIrPFNQHXNatxpNlJVMyz0madmJUA/tu0Vz/g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.tg9cr0vw5e.dll",
        "hash": "sha256-7aX0inALtU0Kyczsi0z+GFrfHpxY7wO7HTfnZzZ1uF0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.4bui26lr0q.dll",
        "hash": "sha256-8JPFf7F8U8V9z8oA/hBZyttMH4AK5j1DOeOADMjMHuU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.fqung96e8l.dll",
        "hash": "sha256-qVCnEuqLlciN0pNx0Dv39NuSmpF7G0bDa6lwZUBiTxM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.42l4o6qk86.dll",
        "hash": "sha256-ZCxBJGeVa8uoP00azx6iazcJzytD6UUwB/vgSUH0bOE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.ug80hqmpgy.dll",
        "hash": "sha256-Itx/Fuiygo3St/E6phMVaAH+w3xJDY9s7U4poRVZlc8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.6cxq2j9n6k.dll",
        "hash": "sha256-RulVig+JM9YXPSKYdo3WLx8e+t2W2FhtUD9G+lmMzug=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.b64rrwqiwv.dll",
        "hash": "sha256-4+ifoN+fT1tG/rWiselBxJCvHcpH8q7zhNNZADm57+4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.h7d5oqhewy.dll",
        "hash": "sha256-HSLfja3G4MhSON82bvlnij1f9o+U+sn8G3GxTiT8ZL0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.6x08njjnyy.dll",
        "hash": "sha256-VrYSs3scR3yW/ZbYWglIEcFAepFLP/h+0Dxl/vJ/BR8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.7v4h595bnw.dll",
        "hash": "sha256-4yubgxCTwV1Dunew6KrYd/h7V1J+qW8QwefXXGPR5kI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.l6vjy6vfim.dll",
        "hash": "sha256-Y/GXvE0nMpTo14xdFsAG1xZDUOK0+0pjSrnLo2LEzlQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.bhdq9a34e8.dll",
        "hash": "sha256-QfhX3oy5xmrdyFkLZak7EirNhbdjvnE2yfTBt45bGmE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.m68vc5ni7q.dll",
        "hash": "sha256-Lusoxhpo0uBzERBneiip32kOr1HvB3rhprw82OsS7Rk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.oj76mufk5o.dll",
        "hash": "sha256-tGkLOYn0swR2m44y/YL+PY8hRsQGcDMO/NCqIuD1z9Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.8wjifdtt4g.dll",
        "hash": "sha256-OAg+cD74Fy8dlJk0Y2B6aiMG2H7P04diFdMGoGpzOHU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.73e2f4gbds.dll",
        "hash": "sha256-03K31hsH7iJ3/BgqLHtUYkqXg6DOWyGGoXRPgyYXRwE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.bt19dmgphs.dll",
        "hash": "sha256-kQl8esLWqfeA/A+NGG0r0/NWhVTaDyW06obJXny8xGk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.hmtihlpxa9.dll",
        "hash": "sha256-h6QSegGxjr3CRHxo0hLC7nDVOOaEf46jce4YfUJJC6E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.vhr2xdkfd3.dll",
        "hash": "sha256-swyG+TD7NE5mMTTVe4MgCXWfGPNemgPV3AQDEMwtLtE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.qcnu8eujlf.dll",
        "hash": "sha256-Ro5kRzrcQFj+6//GUctzPmH2YNf9Cmuw1R5R1qLN3Tg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.z5r5ulmjbb.dll",
        "hash": "sha256-x4p1H5cEXg1uPAyxUWE6f5GAkCV83yhdCqXGKEfEEZM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.pet8sso43o.dll",
        "hash": "sha256-4VKD17ja2uw6YhhbN/KKpWY0c3f2CIMYNMUCJNbLUic=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.y290oj1m98.dll",
        "hash": "sha256-+gHDJzmNIPRKq/8bh3WZxONG2Ut+NEB4IvS/DV6s+Z4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.qjoxamw3qf.dll",
        "hash": "sha256-hhy16WQQgxwJjqtroJY3Rg8k+K+vrlslvt1JtkYwFNA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.m3lvpkmq15.dll",
        "hash": "sha256-kuWubFKzxUNJmb8q7RyF9mkI7RHl7/agdylLFRItcw4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.xqumogp86c.dll",
        "hash": "sha256-19Kt+9CCdYvNs349zGwRrTrrSh8f4Qb3RlOuLPOfxDM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.ndvi7fg8nd.dll",
        "hash": "sha256-W3K+GyZyi2hSUItxHrfUyGAeV59U6Nfnef1Rbh7q0Z4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.jhmpx4rk6a.dll",
        "hash": "sha256-6cAjgpyresnUiAzsG8jJNWcZIFp+CnslC0FTOQbbdRc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.vuxwxj9u1m.dll",
        "hash": "sha256-mY/0hPm3lryO49DQsWkDQKKPcP6wvI5MrGAvHufAFBU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.5enmr7ayw0.dll",
        "hash": "sha256-7bY5DM9NRUIuYVeXi7iRKfS6JlhgGYDj2WpsDpKVcE0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.64xrcl1wxa.dll",
        "hash": "sha256-ZvAmJwYLrhEhALR+LcYdGztbA7FrN1HcNixY29WVWvk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.yphtb0k00k.dll",
        "hash": "sha256-9inseOr7BMhbuIVkei4K4AWrWizzczyrEg94qv0ORcw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.rfnek9aya4.dll",
        "hash": "sha256-J+ZP91xzbfk0+KjLRv592MzNELWESApR9RM4cwydqcs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.tx4e9r8zhj.dll",
        "hash": "sha256-gUX4p4/kLNlBfyUz0+TizyJvnBWA+Lx17UUugTipSxg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.DotNet.HotReload.WebAssembly.Browser.dll",
        "name": "Microsoft.DotNet.HotReload.WebAssembly.Browser.5rqevm291s.dll",
        "hash": "sha256-8XVurfFMh3IoVutxrQ7JmM2Wcr2QJhtYHfkh5aYBghc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "EmptyBrowser.dll",
        "name": "EmptyBrowser.xnih3bpy9u.dll",
        "hash": "sha256-Q4jTHNK+5M3Qx+gcsetY9st8gYh/wUUeBvQhCWJlEpA=",
        "cache": "force-cache"
      }
    ]
  },
  "debugLevel": 0,
  "globalizationMode": "sharded",
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "System.Diagnostics.Metrics.Meter.IsSupported": true,
        "System.Diagnostics.StackTrace.IsSupported": true,
        "System.Diagnostics.Tracing.EventSource.IsSupported": true,
        "System.Globalization.Invariant": false,
        "System.TimeZoneInfo.Invariant": false,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Runtime.CompilerServices.RuntimeFeature.IsMultithreadingSupported": false
      }
    }
  }
}/*json-end*/);export{po as default,mo as dotnet,go as exit};
