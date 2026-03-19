//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

const e=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),n=Symbol.for("wasm promise_control");function r(e,o){let t=null;const r=new Promise(function(n,r){t={isDone:!1,promise:null,resolve:o=>{t.isDone||(t.isDone=!0,n(o),e&&e())},reject:e=>{t.isDone||(t.isDone=!0,r(e),o&&o())}}});t.promise=r;const i=r;return i[n]=t,{promise:i,promise_control:t}}function i(e){return e[n]}function s(e){e&&function(e){return void 0!==e[n]}(e)||Be(!1,"Promise is not controllable")}const a="__mono_message__",l=["debug","log","trace","warn","info","error"],c="MONO_WASM: ";let d,u,f,m,g,p;function h(e){m=e}function b(e){if(Pe.diagnosticTracing){const o="function"==typeof e?e():e;console.debug(c+o)}}function w(e,...o){console.info(c+e,...o)}function y(e,...o){console.info(e,...o)}function v(e,...o){console.warn(c+e,...o)}function _(e,...o){if(o&&o.length>0&&o[0]&&"object"==typeof o[0]){if(o[0].silent)return;if(o[0].toString)return void console.error(c+e,o[0].toString())}console.error(c+e,...o)}function E(e,o,t){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}o(t?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){f.error(`proxyConsole failed: ${e}`)}}}function R(e,o,t){u=o,m=e,f={...o};const n=`${t}/console`.replace("https://","wss://").replace("http://","ws://");d=new WebSocket(n),d.addEventListener("error",x),d.addEventListener("close",A),function(){for(const e of l)u[e]=E(`console.${e}`,T,!0)}()}function j(e){let o=30;const t=()=>{d?0==d.bufferedAmount||0==o?(e&&y(e),function(){for(const e of l)u[e]=E(`console.${e}`,f.log,!1)}(),d.removeEventListener("error",x),d.removeEventListener("close",A),d.close(1e3,e),d=void 0):(o--,globalThis.setTimeout(t,100)):e&&f&&f.log(e)};t()}function T(e){d&&d.readyState===WebSocket.OPEN?d.send(e):f.log(e)}function x(e){f.error(`[${m}] proxy console websocket error: ${e}`,e)}function A(e){f.debug(`[${m}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=S(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const o="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t=Pe.config.environmentVariables;if(void 0===t[o]&&e&&(t[o]="1"),void 0===t.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(t.TZ=e)}catch(e){w("failed to detect timezone, will fallback to UTC")}}function S(e){var o;if((null===(o=e.resources)||void 0===o?void 0:o.icu)&&"invariant"!=e.globalizationMode){const o=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);e.applicationCulture||(e.applicationCulture=o);const t=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(t.length>=1)return t[0].name}else o&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const o=e.split("-")[0];return"en"===o||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(o)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(o)):n="icudt.dat";if(n)for(let e=0;e<t.length;e++){const o=t[e];if(o.virtualPath===n)return o.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const M=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,o){try{const t="function"==typeof globalThis.fetch;if(Ae){const n=e.startsWith("file://");if(!n&&t)return globalThis.fetch(e,o||{credentials:"same-origin"});g||(p=await import(/*! webpackIgnore: true */"url"),g=await import(/*! webpackIgnore: true */"fs")),n&&(e=p.fileURLToPath(e));const r=await g.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(t)return globalThis.fetch(e,o||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(o){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o},text:()=>{throw o}}}throw new Error("No fetch implementation available")}function C(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!P(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const I=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,O=/[a-zA-Z]:[\\/]/;function P(e){return Ae||Ce?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||O.test(e):I.test(e)}let U,L=0;const N=[],$=[],z=new Map,W={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},F={...W,"js-module-library-initializer":!0},B={...W,dotnetwasm:!0,heap:!0,manifest:!0},V={...F,manifest:!0},H={...F,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},q={...F,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function Z(e,o,t){null!=o||(o=[]),Be(1==o.length,`Expect to have one ${t} asset in resources`);const n=o[0];return n.behavior=t,K(n),e.push(n),n}function K(e){B[e.behavior]&&z.set(e.behavior,e)}function X(e){Be(B[e],`Unknown single asset behavior ${e}`);const o=z.get(e);if(o&&!o.resolvedUrl)if(o.resolvedUrl=Pe.locateFile(o.name),W[o.behavior]){const e=me(o);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),o.resolvedUrl=e):o.resolvedUrl=le(o.resolvedUrl,o.behavior)}else if("dotnetwasm"!==o.behavior)throw new Error(`Unknown single asset behavior ${e}`);return o}function Y(e){const o=X(e);return Be(o,`Single asset for ${e} not found`),o}let ee=!1;async function oe(){if(!ee){ee=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],o=[],t=(e,o)=>{!q[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,o.push(ie(e)))};for(const o of N)t(o,e);for(const e of $)t(e,o);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...o]).then(()=>{Pe.allDownloadsFinished.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const o=await e;if(o.buffer){if(!q[o.behavior]){o.buffer&&"object"==typeof o.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof o.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=o.resolvedUrl,t=await o.buffer,n=new Uint8Array(t);ge(o),await Oe.beforeOnRuntimeInitialized.promise,await Oe.afterInstantiateWasm.promise,Oe.instantiate_asset(o,e,n)}}else J[o.behavior]?("symbols"===o.behavior&&(await Oe.instantiate_symbols_asset(o),ge(o)),J[o.behavior]&&++Pe.actual_downloaded_assets_count):(o.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[o.behavior]&&G(o)&&Pe.expected_downloaded_assets_count--,!q[o.behavior]&&G(o)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const o of e)r.push(n(o));for(const e of o)i.push(n(e));Promise.all(r).then(()=>{Me||Oe.coreAssetsInMemory.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),Promise.all(i).then(async()=>{Me||(await Oe.coreAssetsInMemory.promise,Oe.allAssetsInMemory.promise_control.resolve())}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let te=!1;function ne(){if(te)return;te=!0;const e=Pe.config,o=[];if(e.assets)for(const o of e.assets)"object"!=typeof o&&Be(!1,`asset must be object, it was ${typeof o} : ${o}`),"string"!=typeof o.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof o.name&&Be(!1,"asset name must be string"),o.resolvedUrl&&"string"!=typeof o.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),o.hash&&"string"!=typeof o.hash&&Be(!1,"asset resolvedUrl could be string"),o.pendingDownload&&"object"!=typeof o.pendingDownload&&Be(!1,"asset pendingDownload could be object"),o.isCore?N.push(o):$.push(o),K(o);else if(e.resources){const t=e.resources;t.wasmNative||Be(!1,"resources.wasmNative must be defined"),t.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),t.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),Z($,t.wasmNative,"dotnetwasm"),Z(o,t.jsModuleNative,"js-module-native"),Z(o,t.jsModuleRuntime,"js-module-runtime"),t.jsModuleDiagnostics&&Z(o,t.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,o,t)=>{const n=e;n.behavior=o,t?(n.isCore=!0,N.push(n)):$.push(n)};if(t.coreAssembly)for(let e=0;e<t.coreAssembly.length;e++)n(t.coreAssembly[e],"assembly",!0);if(t.assembly)for(let e=0;e<t.assembly.length;e++)n(t.assembly[e],"assembly",!t.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(t.corePdb)for(let e=0;e<t.corePdb.length;e++)n(t.corePdb[e],"pdb",!0);if(t.pdb)for(let e=0;e<t.pdb.length;e++)n(t.pdb[e],"pdb",!t.corePdb)}if(e.loadAllSatelliteResources&&t.satelliteResources)for(const e in t.satelliteResources)for(let o=0;o<t.satelliteResources[e].length;o++){const r=t.satelliteResources[e][o];r.culture=e,n(r,"resource",!t.coreAssembly)}if(t.coreVfs)for(let e=0;e<t.coreVfs.length;e++)n(t.coreVfs[e],"vfs",!0);if(t.vfs)for(let e=0;e<t.vfs.length;e++)n(t.vfs[e],"vfs",!t.coreVfs);const r=S(e);if(r&&t.icu)for(let e=0;e<t.icu.length;e++){const o=t.icu[e];o.name===r&&n(o,"icu",!1)}if(t.wasmSymbols)for(let e=0;e<t.wasmSymbols.length;e++)n(t.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let o=0;o<e.appsettings.length;o++){const t=e.appsettings[o],n=pe(t);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||$.push({name:t,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...N,...$,...o]}async function re(e){const o=await ie(e);return await o.pendingDownloadInternal.response,o.buffer}async function ie(e){try{return await se(e)}catch(o){if(!Pe.enableDownloadRetry)throw o;if(Ce||Ae)throw o;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw o;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw o;if(o&&404==o.status)throw o;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await se(e)}catch(o){return e.pendingDownloadInternal=void 0,await new Promise(e=>globalThis.setTimeout(e,100)),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await se(e)}}}async function se(e){for(;U;)await U.promise;try{++L,L==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),U=r());const o=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const o=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>o,json:()=>JSON.parse(new TextDecoder("utf-8").decode(o)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const o=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let t;for(let n of o){n=n.trim(),"./"===n&&(n="");const o=ae(e,n);e.name===o?Pe.diagnosticTracing&&b(`Attempting to download '${o}'`):Pe.diagnosticTracing&&b(`Attempting to download '${o}' for ${e.name}`);try{e.resolvedUrl=o;const n=ue(e);if(e.pendingDownloadInternal=n,t=await n.response,!t||!t.ok)continue;return t}catch(e){t||(t={ok:!1,url:o,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(t||Be(!1,`Response undefined ${e.name}`),!n){const o=new Error(`download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`);throw o.status=t.status,o}w(`optional download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`)}(e);return o?(J[e.behavior]||(e.buffer=await o.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--L,U&&L==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=U;U=void 0,e.promise_control.resolve()}}}function ae(e,o){let t;return null==o&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?t=e.resolvedUrl:(t=""===o?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:o+e.name,t=le(Pe.locateFile(t),e.behavior)),t&&"string"==typeof t||Be(!1,"attemptUrl need to be path or url string"),t}function le(e,o){return Pe.modulesUniqueQuery&&V[o]&&(e+=Pe.modulesUniqueQuery),e}let ce=0;const de=new Set;function ue(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const o=function(e){let o=e.resolvedUrl;if(Pe.loadBootResource){const t=me(e);if(t instanceof Promise)return t;"string"==typeof t&&(o=t)}const t={};return e.cache?t.cache=e.cache:Pe.config.disableNoCacheFetch||(t.cache="no-cache"),e.useCredentials?t.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(t.integrity=e.hash),Pe.fetch_like(o,t)}(e),t={name:e.name,url:e.resolvedUrl,response:o};return de.add(e.name),t.response.then(()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),ce++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(ce,de.size)}),t}catch(o){const t={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(t)}}}const fe={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function me(e){var o;if(Pe.loadBootResource){const t=null!==(o=e.hash)&&void 0!==o?o:"",n=e.resolvedUrl,r=fe[e.behavior];if(r){const o=Pe.loadBootResource(r,e.name,n,t,e.behavior);return"string"==typeof o?C(o):o}}}function ge(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function pe(e){let o=e.lastIndexOf("/");return o>=0&&o++,e.substring(o)}async function he(e){e&&await Promise.all((null!=e?e:[]).map(e=>async function(e){try{const o=e.name;if(!e.moduleExports){const t=le(Pe.locateFile(o),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${t}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */t)}Pe.libraryInitializers.push({scriptName:o,exports:e.moduleExports})}catch(o){v(`Failed to import library initializer '${e}': ${o}`)}}(e)))}async function be(e,o){if(!Pe.libraryInitializers)return;const t=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&t.push(we(r.scriptName,e,()=>r.exports[e](...o)))}await Promise.all(t)}async function we(e,o,t){try{await t()}catch(t){throw v(`Failed to invoke '${o}' on library initializer '${e}': ${t}`),Xe(1,t),t}}function ye(e,o){if(e===o)return e;const t={...o};return void 0!==t.assets&&t.assets!==e.assets&&(t.assets=[...e.assets||[],...t.assets||[]]),void 0!==t.resources&&(t.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},t.resources)),void 0!==t.environmentVariables&&(t.environmentVariables={...e.environmentVariables||{},...t.environmentVariables||{}}),void 0!==t.runtimeOptions&&t.runtimeOptions!==e.runtimeOptions&&(t.runtimeOptions=[...e.runtimeOptions||[],...t.runtimeOptions||[]]),Object.assign(e,t)}function ve(e,o){if(e===o)return e;const t={...o};return t.config&&(e.config||(e.config={}),t.config=ye(e.config,t.config)),Object.assign(e,t)}function _e(e,o){if(e===o)return e;const t={...o};return void 0!==t.coreAssembly&&(t.coreAssembly=[...e.coreAssembly||[],...t.coreAssembly||[]]),void 0!==t.assembly&&(t.assembly=[...e.assembly||[],...t.assembly||[]]),void 0!==t.lazyAssembly&&(t.lazyAssembly=[...e.lazyAssembly||[],...t.lazyAssembly||[]]),void 0!==t.corePdb&&(t.corePdb=[...e.corePdb||[],...t.corePdb||[]]),void 0!==t.pdb&&(t.pdb=[...e.pdb||[],...t.pdb||[]]),void 0!==t.jsModuleWorker&&(t.jsModuleWorker=[...e.jsModuleWorker||[],...t.jsModuleWorker||[]]),void 0!==t.jsModuleNative&&(t.jsModuleNative=[...e.jsModuleNative||[],...t.jsModuleNative||[]]),void 0!==t.jsModuleDiagnostics&&(t.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...t.jsModuleDiagnostics||[]]),void 0!==t.jsModuleRuntime&&(t.jsModuleRuntime=[...e.jsModuleRuntime||[],...t.jsModuleRuntime||[]]),void 0!==t.wasmSymbols&&(t.wasmSymbols=[...e.wasmSymbols||[],...t.wasmSymbols||[]]),void 0!==t.wasmNative&&(t.wasmNative=[...e.wasmNative||[],...t.wasmNative||[]]),void 0!==t.icu&&(t.icu=[...e.icu||[],...t.icu||[]]),void 0!==t.satelliteResources&&(t.satelliteResources=function(e,o){if(e===o)return e;for(const t in o)e[t]=[...e[t]||[],...o[t]||[]];return e}(e.satelliteResources||{},t.satelliteResources||{})),void 0!==t.modulesAfterConfigLoaded&&(t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...t.modulesAfterConfigLoaded||[]]),void 0!==t.modulesAfterRuntimeReady&&(t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...t.modulesAfterRuntimeReady||[]]),void 0!==t.extensions&&(t.extensions={...e.extensions||{},...t.extensions||{}}),void 0!==t.vfs&&(t.vfs=[...e.vfs||[],...t.vfs||[]]),Object.assign(e,t)}function Ee(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const o of e.assets){const t={};switch(o.behavior){case"assembly":t.assembly=[o];break;case"pdb":t.pdb=[o];break;case"resource":t.satelliteResources={},t.satelliteResources[o.culture]=[o];break;case"icu":t.icu=[o];break;case"symbols":t.wasmSymbols=[o];break;case"vfs":t.vfs=[o];break;case"dotnetwasm":t.wasmNative=[o];break;case"js-module-threads":t.jsModuleWorker=[o];break;case"js-module-runtime":t.jsModuleRuntime=[o];break;case"js-module-native":t.jsModuleNative=[o];break;case"js-module-diagnostics":t.jsModuleDiagnostics=[o];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${o.behavior} of asset ${o.name}`)}_e(e.resources,t)}}e.debugLevel,void 0===e.virtualWorkingDirectory&&(e.virtualWorkingDirectory=Ie),e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Oe.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Oe.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let Re=!1;async function je(e){var o;if(Re)return void await Pe.afterConfigLoaded.promise;let t;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),t=e.configSrc,Re=!0,t&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const o=e.configSrc,t=Pe.locateFile(o);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",o,t,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(C(n)),r=await xe(i)):r=(await import(C(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await xe(i)):r=e.config}else t.includes(".json")?(i=await s(le(t,"manifest")),r=await xe(i)):r=(await import(le(t,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ye(Pe.config,r)}(e)),Ee(),await he(null===(o=Pe.config.resources)||void 0===o?void 0:o.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),Ee()}catch(e){throw _("onConfigLoaded() failed",e),e}Ee(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(o){const n=`Failed to load config file ${t} ${o} ${null==o?void 0:o.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:o,isError:!0}),Xe(1,new Error(n)),o}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function xe(e){const o=Pe.config,t=await e.json();o.applicationEnvironment||t.applicationEnvironment||(t.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),t.environmentVariables||(t.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(t.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(t.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),t}"function"==typeof importScripts&&(globalThis.dotnetSidecar=!0);const Ae="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Se=De&&"undefined"!=typeof dotnetSidecar,Me=De&&!Se,ke="object"==typeof window||De&&!Ae,Ce=!ke&&!Ae,Ie="/";let Oe={},Pe={},Ue={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Oe,diagnosticHelpers:Ue,api:Le};function Be(e,o){if(e)return;const t="Assert failed: "+("function"==typeof o?o():o),n=new Error(t);_(t,n),Oe.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function He(){return Oe.runtimeReady&&!Ve()}function Je(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use dotnet.runMain() which doesn't exit the runtime.`),Oe.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function qe(){ke&&(globalThis.addEventListener("unhandledrejection",eo),globalThis.addEventListener("error",oo))}let Qe,Ge;function Ze(e){Ge&&Ge(e),Xe(e,Pe.exitReason)}function Ke(e){Qe&&Qe(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(e,o){var t;const n=o&&"object"==typeof o;e=n&&"number"==typeof o.status?o.status:void 0===e?-1:e;const r=n&&"string"==typeof o.message?o.message:""+o;(o=n?o:Oe.ExitStatus?function(e,o){const t=new Oe.ExitStatus(e);return t.message=o,t.toString=()=>o,t}(e,r):new Error("Exit with code "+e+" "+r)).status=e,o.message||(o.message=r);const i=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>i})}catch(e){}const s=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Qe),We.onExit==Ze&&(We.onExit=Ge),ke&&(globalThis.removeEventListener("unhandledrejection",eo),globalThis.removeEventListener("error",oo)),Oe.runtimeReady?(Oe.jiterpreter_dump_stats&&Oe.jiterpreter_dump_stats(!1),0===e&&(null===(t=Pe.config)||void 0===t?void 0:t.interopCleanupOnExit)&&Oe.forceDisposeProxies(!0,!0)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Oe.dotnetReady&&(Oe.dotnetReady.promise_control.reject(e),Oe.afterInstantiateWasm.promise_control.reject(e),Oe.afterPreRun.promise_control.reject(e),Oe.beforeOnRuntimeInitialized.promise_control.reject(e),Oe.afterOnRuntimeInitialized.promise_control.reject(e),Oe.afterPostRun.promise_control.reject(e))}(o))}catch(e){v("mono_exit A failed",e)}try{s||(function(e,o){if(0!==e&&o){const e=Oe.ExitStatus&&o instanceof Oe.ExitStatus?b:_;"string"==typeof o?e(o):(void 0===o.stack&&(o.stack=(new Error).stack+""),o.message?e(Oe.stringify_as_error_with_stack?Oe.stringify_as_error_with_stack(o.message+"\n"+o.stack):o.message+"\n"+o.stack):e(JSON.stringify(o)))}!Me&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsole?j("WASM EXIT "+e):y("WASM EXIT "+e):Pe.config.forwardConsole&&j())}(e,o),function(e){if(ke&&!Me&&Pe.config&&Pe.config.appendElementOnExit&&document){const o=document.createElement("label");o.id="tests_done",0!==e&&(o.style.background="red"),o.innerHTML=""+e,document.body.appendChild(o)}}(e))}catch(e){v("mono_exit B failed",e)}Pe.exitCode=e,Pe.exitReason||(Pe.exitReason=o),!Me&&Oe.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),o=e=>new Promise((o,t)=>{e.on("error",t),e.end("","utf8",o)}),t=o(e.stderr),n=o(e.stdout);let r;const i=new Promise(e=>{r=setTimeout(()=>e("timeout"),1e3)});await Promise.race([Promise.all([n,t]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(e,o)}})(),o;Ye(e,o)}function Ye(e,o){if(Oe.runtimeReady&&Oe.nativeExit)try{Oe.nativeExit(e)}catch(e){!Oe.ExitStatus||e instanceof Oe.ExitStatus||v("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Ae?process.exit(e):Oe.quit&&Oe.quit(e,o),o}function eo(e){to(e,e.reason,"rejection")}function oo(e){to(e,e.error,"error")}function to(e,o,t){e.preventDefault();try{o||(o=new Error("Unhandled "+t)),void 0===o.stack&&(o.stack=(new Error).stack),o.stack=o.stack+"",o.silent||(_("Unhandled error:",o),Xe(1,o))}catch(e){}}!function(n){if($e)throw new Error("Loader module already loaded");$e=!0,Oe=n.runtimeHelpers,Pe=n.loaderHelpers,Ue=n.diagnosticHelpers,Le=n.api,Ne=n.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(n.module,{config:ye(ze,{environmentVariables:{}})});const a={mono_wasm_bindings_is_ready:!1,config:n.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"803eb28628f5623c108f1bf33504c86e19815821",config:n.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:r(),allDownloadsQueued:r(),allDownloadsFinished:r(),wasmCompilePromise:r(),runtimeModuleLoaded:r(),loadingWorkers:r(),is_exited:Ve,is_runtime_running:He,assert_runtime_running:Je,mono_exit:Xe,createPromiseController:r,getPromiseController:i,assertIsControllablePromise:s,mono_download_assets:oe,resolve_single_asset_path:Y,setup_proxy_console:R,set_thread_prefix:h,installUnhandledErrorHandler:qe,retrieve_asset_download:re,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:e,simd:t,relaxedSimd:o};Object.assign(Oe,a),Object.assign(Pe,l)}(Fe);let no,ro,io,so=!1,ao=!1;async function lo(e){if(!ao){if(ao=!0,ke&&Pe.config.forwardConsole&&void 0!==globalThis.WebSocket&&R("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const o=e(Fe.api);if(o.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,o),ve(We,o)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");ve(We,e)}await async function(e){if(Ae){const e=await import(/*! webpackIgnore: true */"process"),o=14;if(e.versions.node.split(".")[0]<o)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${o}.`)}const o=/*! webpackIgnore: true */import.meta.url,t=o.indexOf("?");var n;if(t>0&&(Pe.modulesUniqueQuery=o.substring(t)),Pe.scriptUrl=o.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==M?new URL(e,Pe.scriptDirectory).toString():P(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,o=e.userAgentData&&e.userAgentData.brands;o&&o.length>0?Pe.isChromium=o.some(e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}void 0===globalThis.URL&&(globalThis.URL=M)}(We)}}async function co(e){return await lo(e),Pe.config.exitOnUnhandledError&&qe(),Qe=We.onAbort,Ge=We.onExit,We.onAbort=Ke,We.onExit=Ze,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,o=e.port1,t=e.port2;o.addEventListener("message",e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),so?Pe.diagnosticTracing&&b("mono config already received"):(ye(Pe.config,n),Oe.monoThreadInfo=r,Ee(),Pe.diagnosticTracing&&b("mono config received"),so=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsole&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),o.close(),t.close()},{once:!0}),o.start(),self.postMessage({[a]:{monoCmd:"preload",port:t}},[t])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const o of e.assets)K(o),Q[o.behavior]&&$.push(o)}(),setTimeout(async()=>{try{await oe()}catch(e){Xe(1,e)}},0);const e=uo(),o=await Promise.all(e);return await fo(o),We}():async function(){var e;await je(We),ne();const o=uo();(async function(){try{const e=Y("dotnetwasm");await ie(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const o=await e.pendingDownloadInternal.response,t=o.headers&&o.headers.get?o.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===t)n=await WebAssembly.compileStreaming(o);else{ke&&"application/wasm"!==t&&v('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await o.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ce?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout(async()=>{try{D(),await oe()}catch(e){Xe(1,e)}},0);const t=await Promise.all(o);return await fo(t),await Oe.dotnetReady.promise,await he(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function uo(){const e=Y("js-module-runtime"),o=Y("js-module-native");if(no&&ro)return[no,ro,io];"object"==typeof e.moduleExports?no=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),no=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof o.moduleExports?ro=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),ro=import(/*! webpackIgnore: true */o.resolvedUrl));const t=X("js-module-diagnostics");return t&&("object"==typeof t.moduleExports?io=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),io=import(/*! webpackIgnore: true */t.resolvedUrl))),[no,ro,io]}async function fo(e){const{initializeExports:o,initializeReplacements:t,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),o(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l(()=>(Object.assign(We,{__dotnet_runtime:{initializeReplacements:t,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We)).catch(e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize.");throw e})}const mo=new class{withModuleConfig(e){try{return ve(We,e),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,o){try{return ye(ze,{interpreterPgo:e,interpreterPgoSaveDelay:o}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ye(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),ve(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ye(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,o){try{const t={};return t[e]=o,ye(ze,{environmentVariables:t}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ye(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ye(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ye(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ye(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ye(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ye(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ye(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lo(We),await je(We),ne(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await co(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}run(){return this.runMainAndExit()}async runMainAndExit(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}async runMain(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMain()}catch(e){throw Xe(1,e),e}}},go=Xe,po=co;Ce||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version."),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),globalThis.performance&&"function"==typeof globalThis.performance.now||Be(!1,"This browser/engine doesn't support performance.now. Please use a modern version."),Ce||globalThis.crypto&&"object"==typeof globalThis.crypto.subtle||Be(!1,"This engine doesn't support crypto.subtle. Please use a modern version."),Ce||globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues||Be(!1,"This engine doesn't support crypto.getRandomValues. Please use a modern version."),Ae&&"function"!=typeof process.exit&&Be(!1,"This engine doesn't support process.exit. Please use a modern version."),mo.withConfig(/*json-start*/{
  "mainAssemblyName": "MicroBenchmarks",
  "resources": {
    "hash": "sha256-/9k9w/irtXoqGjGTY/5K14jPX8+C4YzLbmqlzbGmrYs=",
    "jsModuleDiagnostics": [
      {
        "name": "dotnet.diagnostics.s31gs2yia6.js"
      }
    ],
    "jsModuleNative": [
      {
        "name": "dotnet.native.hcogsfelwr.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.cim5h1exkd.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.yexeqyguvj.wasm",
        "hash": "sha256-qkL2Z1vTHRMUa/wbKaqQUTgnDAALuiV1/dYb2QeWL2M=",
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
        "name": "System.Runtime.InteropServices.JavaScript.907qbod5c5.dll",
        "hash": "sha256-+QB3C3rdScxpK7MXChPTkcwBc8tCTuKQmaL80T+YMgw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.74b6wbp2ry.dll",
        "hash": "sha256-OUaKztJIzB2jk+fHLCigwqgcFLDFS76/E6PWgqXRfgE=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.w4hdo3gx0j.dll",
        "hash": "sha256-ANwT1RqRBHpUfaaXKZseIa9mEV/yqV9aqvmoJU3q8/c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.dnz9xm396b.dll",
        "hash": "sha256-R5rBbyBD6CCSdpE+K/PDC//qnmoj7lpH9CIOgmIXql4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.s5l6fqmoty.dll",
        "hash": "sha256-YNjf6tJNuOnetLoSdGbfBTj6camH+VmGHqDn5ESN7a8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.m5fsialcts.dll",
        "hash": "sha256-Rrr/++TcAwrrC69332WDNZ/Nm8QIRda3OQo6MacgjVA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.jwkt2evgxg.dll",
        "hash": "sha256-EzmV/55kYWc7pkmkNLSbyYFs6S52cdvBR5z7jnfjj0g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.ny6rjpfb3x.dll",
        "hash": "sha256-Af3FxAc0BFXgNCCaaqy+zD6SvdAnvcSCsuaCtZHJCSs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.ib8n99kuqr.dll",
        "hash": "sha256-Ikma9Vk4JomxMVH6nuLJ7SBX48ARzIFrMauPDSUt8w0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.7zkeofjpgn.dll",
        "hash": "sha256-s4XvkIykQmlVH874XY3fHXOYCy+EiOVBa0+JXJ9iImI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.a4mn6htl19.dll",
        "hash": "sha256-uonUxgWXc89Z2AJgxMZKSh42CzOo4s/vf6lIkuWdiGc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.g4xblg9vra.dll",
        "hash": "sha256-kL5OWGXBLPmwNEU0qG471UwH+ZZRAxmXp/zFjRzs8LE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.w2hgrab02m.dll",
        "hash": "sha256-iDK2aq8gj+38GbVjwq7B6jdEYbrZRgnClakXUbbUrGg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.bh8rxia8a5.dll",
        "hash": "sha256-UbPIThWH8Qig9iDRIEy7lV/wKJ1eo3fZYZe+CbJ47XY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.mvbitphno8.dll",
        "hash": "sha256-XuKRoN4CkhTLvvp3amARiccjDQecWnN1mPOj0ujIkdY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.o0ro8x4ltz.dll",
        "hash": "sha256-yEqe0P6pHho55oejFzF13UdwwJb5tjiM0cH10MCGkQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.03zug66hmn.dll",
        "hash": "sha256-5GoBd1Yxc6HGWB4ctZv5CBXFE/gHRaL1e9rNMEi7dyE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.vbit72w0jy.dll",
        "hash": "sha256-C7EasEEdnlZc3QFZoeD14bEpPaiaS8sJ21S2gHnsnRI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.7f0m46n99j.dll",
        "hash": "sha256-o7fFdK3VCHVS59RsPjwFXTFew5RR0s5sCjWTy197gNs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.3xam4rqwqe.dll",
        "hash": "sha256-x1BnG4u6GfFHoB6K3j9MWecmSK79LBsaqXdEF8QixhY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.mv4uc0i420.dll",
        "hash": "sha256-MiATOCkxZIthEaPjZoSMFM/2tiFxesEzZlWZSLal9WE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.9n4shv20xc.dll",
        "hash": "sha256-e0y/9ATzjCLj9rUQeJU/yEbulK2nYZrsgwBFk5NaYzE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.pamlk1qfgd.dll",
        "hash": "sha256-Ifz7lFt6ZSN4G5tH5snBI/NOgpppf5g5jEXU/xJXpU0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.4ff5jq83sq.dll",
        "hash": "sha256-ULiWJpDjBOVDT4CazE+u4V2a1rsq4OyUBMoYO0eZvrQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.2fx6i3bk1f.dll",
        "hash": "sha256-UiN+i/YM/V/HQIWSa9qCCpqpxLnKO1atIN3UVvDhF5s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.cbp24dgomf.dll",
        "hash": "sha256-qMSr9gQG2Xk7L+qTJah2VkEUXbY1SgClOMeNvmhiHPM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.fuduao4n6x.dll",
        "hash": "sha256-abTsezNnwyDdZpWdaJbxI9n57rhdXvZ9juMd8W1HrOo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.or0hklzdtv.dll",
        "hash": "sha256-JJb9SXGyDqdyohgOXOfKGHXw2mH9gAY/s6IBqvTnwRA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.04obeilaog.dll",
        "hash": "sha256-MIuOqfIoq0+0uC6yG8GUoHhPpZwYoP6lP3//UcbF5bc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.ogvbmjih7h.dll",
        "hash": "sha256-CNbyYLEEVBoom2NZ6KcaaKKeCZqQbJD0c3EQgFHPgjA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.ssbvmojrr8.dll",
        "hash": "sha256-fHMjtiqO29Z9PTprypsRLZmooKFI2nHrIsbZqyDaOWc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.xjfxqeaj4x.dll",
        "hash": "sha256-A4GL8q1tC53KM5M/+fGlKM5Q3c2qyKurmK4QEQhuj0A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.wl7a4gk55t.dll",
        "hash": "sha256-BInFi7TwW+xW6zoTSEQ5dXHY5li+o7eC95Xk17iEkG4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.dkmwwgygcc.dll",
        "hash": "sha256-PbrF5r/DQLVDRQw0UVG2cG73vsVCZAfpkMcg8z3gm2M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.yq2mw20lor.dll",
        "hash": "sha256-al+YOTeGhmkSEmIrL4nIhBc4fsUPGh+PHsSYkrMkNR4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.t78omrh46t.dll",
        "hash": "sha256-mXHHpvS+TcQF9EfNz5L7kIlHA1wSy6bJ424lJuSizLc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.jp0zgqprx6.dll",
        "hash": "sha256-qQnmA13gazLSTToqgAt2iwU05gsYyzTO7Q8gjAbxPPA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.yz17sj5j7p.dll",
        "hash": "sha256-IiJOBLrUQ5Cux8YTx/8gAvHpXnKcsIYozleJB5ask8I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.0pg18smc20.dll",
        "hash": "sha256-PJ1fSWvOPxXsRLrkepFe07LhHMIaOXLjktKcncqlpCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.ycchetu9i2.dll",
        "hash": "sha256-0tolM40AjA0fR816VzKI3hypNVDj/NplCFU81BL36iw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.kokb72iwiq.dll",
        "hash": "sha256-jPO9/dEapu7Ct9mZV1TL7KGuuEWwmVxUoAUwXhhzT0o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.cu5v24da57.dll",
        "hash": "sha256-VFHnSVjiVItQiLzZXJdCbiKwlGOWnlr+H0lIEhpyBU8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.jn7n31y0ft.dll",
        "hash": "sha256-fy0b7UTikvFmPerKaCL16X3NA1gB7zAeGJBVAhzfRBE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.k0l8bwceaq.dll",
        "hash": "sha256-nDitvw4iqWXRY920Bn0ONbRm/39IdVafJwIUzey0rug=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.7txa4zcfla.dll",
        "hash": "sha256-qzm64Ra2tWt/uP1hXjXb0w2G0UhQpbXwbcqiZ8Shb/w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.u47lf0zlyt.dll",
        "hash": "sha256-XvYv9Yh3Wi12sLe9JqsWauBJ9VF3vXO/MVgH1mJDC98=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.f8jpyt9cx9.dll",
        "hash": "sha256-n7MV0N+zjp4GYzz++7e37bcABR6GsP1MqZCO2PGZeD0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.axfd0qmimb.dll",
        "hash": "sha256-IuaDYfu/pfzdOIpPRLRZJT51SGIv6lmbDPyRBaxGHQA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.v689ekok7h.dll",
        "hash": "sha256-t6/TV/uODg0snm/Hq+Lncg2bcWE9AxCK3JSdI4nybSU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.3ljk73oxj9.dll",
        "hash": "sha256-J7O4bw7FWN9y4JkK9cduobhpJaw+VPKpFlJmJoZ5Z4w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.9wk5wc3ygg.dll",
        "hash": "sha256-94b2N4GZGLuk0EbunwKaFhHIOpCH3nDHL2cDb0/zMpw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.ad8qk2jheg.dll",
        "hash": "sha256-3vi2U3vKowFnuF51Ku5IEQPk/2eA9rHYfscOe+UtKq4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.b0lcabjdq7.dll",
        "hash": "sha256-pUTUPDbcW9nKSQq9WtnqVWP/R0YZYypeXu6jtx5ivRo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.f5v3ho599l.dll",
        "hash": "sha256-jZ7R5688UJ6+QjaCjjloYMZIM64sErUbFGTCK8aJxbM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.0vgmne08mc.dll",
        "hash": "sha256-JJLle377+qnbyYzFjqFBDGUY6S0GdSex3il/CoQoV0M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.cypqfajj78.dll",
        "hash": "sha256-5MwRrtm/NY5tbuV7ramzXCVlV9OLsM9d8F30pcxbelA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.3tz0x86puy.dll",
        "hash": "sha256-RzbYXLLHLe4mgoxphQsAT5XKJGADtikwNKuQTaX6eE4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.0vncczluea.dll",
        "hash": "sha256-NDShandAhKefiKaCleTIGqsD3gmUevLhx+97+YysoSU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.cd8d8vuzve.dll",
        "hash": "sha256-oO8tA8W+RgI/UZqM6FMTwJIah6QYVZHWmPR9BggLWio=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.at827nglvp.dll",
        "hash": "sha256-HvyoWeoPQrYMJRSp3fZTzr+bZAp8fGhtntuqFIz7/nY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.1s7f2r3xuv.dll",
        "hash": "sha256-3yy1ylKwTr3fA6hxXNOLmkGzGiEMs5Bm38cZSBIyjac=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.zvqi8eiikn.dll",
        "hash": "sha256-YQdRH63R3y3D4LqdLsRhKeIcf38LKkibmuykyDJ3V0I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.xc872uv6gz.dll",
        "hash": "sha256-7++zxhsts/3KP+VDd9FMjuTQ9A8PtWUzj6JvKk1qZR0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.qnav1590zi.dll",
        "hash": "sha256-tqyHNNOGOyUH2sNfHJJq6CN1N966gJ1wEWsLFrl0wZQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.8mxx30za9q.dll",
        "hash": "sha256-kETsSRVZas/Y7msdOhchP4OzVIp7FS7lENa9tzdiTjU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.t7bsiq8ire.dll",
        "hash": "sha256-ySECQNM/faEetMfBX5OOEsWoOFzKyGe/0T1IWegUH1g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.k38wvdh6ma.dll",
        "hash": "sha256-AFTfO34VQ2svrneIri0FHMFlLISqPM3y/b+e9c84NwE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.ti18c2s4i4.dll",
        "hash": "sha256-S7IwM/MPvSX2fTqsDSwi4zfkp/wQPWSchCzwQ24RaQk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.b6t1c8btom.dll",
        "hash": "sha256-8+W8dGFATT1b+Oj+a64J2pib+Aiv9I9CpV9d/wNSG8Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.47kfebxb59.dll",
        "hash": "sha256-AL59rQhLiQMErfYByLxGwqQwhXBevjrBgwZlBPxgdB0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.2gu9rmkx4k.dll",
        "hash": "sha256-YpXsoWQ/4SR9gtAoZRgqf7WRI4z+rWtlN38qboAbxI4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.0xr2xnycp9.dll",
        "hash": "sha256-LGlD/DehIIb5cTmh7x67m3Fgs8sqPNmhIU9sjFuPB68=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.80x090wpzp.dll",
        "hash": "sha256-GJD0iDUXIEloQiEWoFeP+PuyYB1aNB4I9VTk5ssA67A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.8mo2r2stf2.dll",
        "hash": "sha256-ICyl0gTgHlgGCv+4KG8tCeicDXQxsGfRBK+f3wOgb/Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.qyk3lol3kp.dll",
        "hash": "sha256-4jHbwSxBD1tIn4Vo+Itrr70j/dqlOupDNNEN2u4P2EE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.xq16nuyt8x.dll",
        "hash": "sha256-WV1am0hcw+UR8Otshv5vALUGMEBFsRYYJheG/Bugw38=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.w9rkfs3hd9.dll",
        "hash": "sha256-FJY5XGz51JkOKBea2sjW9/KSa28mGwGDb+mS7ctTD40=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.xdh695dooe.dll",
        "hash": "sha256-hUra5NN2wbsSWS124PK8aoDhpvqmXp7pE53vuFF7MKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.20k3l8xnxx.dll",
        "hash": "sha256-Aq1Pr4vj9mQfO73cnOPHtH3yJw6Xtq+grMlmK/W1syk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.8r7flkwmoq.dll",
        "hash": "sha256-/KWa+4yoVn7i6oX+JA3vzJA0Aco1aw7Z4Y3hKB2EWmg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.puw3ycuw5y.dll",
        "hash": "sha256-EbtS1UO+GL995B3GmRPYI+Y7YWdEQAxBhHZJGWgS62Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.8p2ilt9eir.dll",
        "hash": "sha256-1EinoTpjo6bpYZC8PqC0r8R9D4PEFIczE0g+0rSxlaY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.l5af3ivvq0.dll",
        "hash": "sha256-KfxN9hwtBMEFJMeFfxWdH+9cW/R//AIZFY8G0Gqn3i8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.9zkpof93xe.dll",
        "hash": "sha256-i8VLRPblevruxO8f0gzSmNiR3JHDmSFTyFKmz28f94c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.uto6adkfn6.dll",
        "hash": "sha256-MmGRT6SPEoEY/shuU9ISsiBkqrjk1RJIBwot1n69tQA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.vw92xa663e.dll",
        "hash": "sha256-r6c0ax6YSlkoLiZWmVcWq7tqJa+A3C0eoEZZxDy+mFA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.gzhxfa9yu5.dll",
        "hash": "sha256-tD9PGQfaE4HPWSMcUXgsN4nIGH2ABmcUiK5ampGIpPI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.9klvh55xpr.dll",
        "hash": "sha256-Fwyq6CEFAWyJC8NQmY9qvaQbrejWJkwGi/fxpAkVB2I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.hqnzwtgs9k.dll",
        "hash": "sha256-F+lkVmoiMgzSXe49AZp9hk5A1AHIZ9u1eexZN1V4Lwg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.9kw04o26pj.dll",
        "hash": "sha256-J9cQQ2A66jfBVuKsb16wdvIYU5OJxJ9qnaeo3ZwhyA4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.991g3s2c1n.dll",
        "hash": "sha256-o6IX0NFC/qyUiVtyVB9LWPhxqHwscfN6AI/ZACcuy00=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.12nmoxa0xm.dll",
        "hash": "sha256-xwVa8ShyldvRDibFc6l6G8Z9MyK264RU83pf1mZDkxU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.7kc1s0vhm3.dll",
        "hash": "sha256-18F1oRuFmDJ7bUu8SfrlUlQ+Nbf0fKb7o6A0qbvgBdM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.6kjw5e6jip.dll",
        "hash": "sha256-+pdUr3Xt/RWZPGKCZSwC5Xz5HnVIoCbHgyYgho5WfOk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.vu8x07bmu5.dll",
        "hash": "sha256-6ahcwm4KrYyn20H+/jdE74870/zOXSVZ6QtTFmFJPck=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.9nikyuyeop.dll",
        "hash": "sha256-ZdWIRoQeUPMqPkDZnsj2FGYVPS6DaRmhPqaVHJMLyAc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.9s2y7m0yfn.dll",
        "hash": "sha256-Z75KB5JNCc6/2nqyA6xgGPt4vRE6nAYdZh/2ftC4qNU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.ndf1rmws2p.dll",
        "hash": "sha256-5egJU6SGDMnhoR1d0vfIqgOsTCStGY+KKS/cgdeqVvc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.6pa6gai87g.dll",
        "hash": "sha256-Vuz+WzKBe2SNYejhtqkbrwKmf/sClR64UI8N/RN2IB8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.gxx5ylg18l.dll",
        "hash": "sha256-/K7Zk5dKJkS+2WRrWBfcDBk7HucfDqFKFUXdIiwjNCs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.akhumnvell.dll",
        "hash": "sha256-lkkuD9Mqx+yHjh4u1YhP72Bl80NkX/thVVol+aIsRa8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.wsexiti2h2.dll",
        "hash": "sha256-ME9OhJBS9IBRIspQzodNHaCyrbKfGk2ea4qHh3xwYyY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.xdw88goq4z.dll",
        "hash": "sha256-C2J2BhdLZYiZh888gnoNnsbE4Dy62n8gwqxivGxs0bk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.rzkgkgqxca.dll",
        "hash": "sha256-R4LIoimEkRtSkIYmZOZvsh8/7VU5CJubRq6h4tOM4aU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.xp8xyoidya.dll",
        "hash": "sha256-ZcyQYCZOjd8lcuo/+9Wqrkx1fHMH6gIw246tSeJdGOk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.dihohsxexi.dll",
        "hash": "sha256-W2CvIrL2F8q8QpYS2cWrOJ9mkLD519UwLTQ4rbJ1aYs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.p7oakpospl.dll",
        "hash": "sha256-FbHHwxJdRNUlcWy40EzPkN1twt/MWzJgfFLDOkoF1n0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.vd608fqzqn.dll",
        "hash": "sha256-UyTt/t6r1bt9A9hyaZIKUycsRreW9dtBjVv+K0shSVE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.f8pa51nnxd.dll",
        "hash": "sha256-P5c5/icmCPYOPy4ZLzuJJYumeaovrJNubBvQulKt9ds=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.ska70vjnqw.dll",
        "hash": "sha256-tALBtzEOgZe2IjFtdlTEchBGzVZ8k00kqBxDUw7EB/s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.fqn4rbr6eh.dll",
        "hash": "sha256-J4ganxGkgz4lL68t6hI86NyNgGGA7YGef4sem7ZQeOQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.ig534bubw6.dll",
        "hash": "sha256-npFJbuMFBvrseYYnixEOJ3NjUbV3VqAvYshZ/bJ7gaA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.i05k9yy3nr.dll",
        "hash": "sha256-YqeM8z8SOwMx1HIcmnzw/u6m0lJoGwZMz1IFrpwYQfA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.n97ijnkh3q.dll",
        "hash": "sha256-SyTzC3lK/jBn921YucBrKGbiMHB0vtUxpcRGwKKOlvs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.k644xh6m2n.dll",
        "hash": "sha256-1Iz4AsvxmLaJjml54kobdUt0xqRIq99Z+0k44EJDWoQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.0rc4w75b26.dll",
        "hash": "sha256-jMVzbqvsOEtw3SuDrn4IwHrM0U7w/CLsFWPyJUAQ/N4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.nys9ol7pxw.dll",
        "hash": "sha256-IckTiy7kaUGracbGCc0IsJqNHlMOoQ0G1y8fzQY3Ch8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.z30pu8x6tx.dll",
        "hash": "sha256-MaWQ1WtbipbNBvPgPl39GsKspyq44CVN1s/L84L8P7Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.iwqefijuve.dll",
        "hash": "sha256-sibrsIx356Im//NPE0mt5bYW43Jc4BJEY3Zs7zyCESU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.vbfnh27vty.dll",
        "hash": "sha256-pSmOlLNRo1z5jJK6aXw1+5zzc+SRqBJbFYtigAukJSI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.7gxh6z4kxi.dll",
        "hash": "sha256-acqC6djWMYPrv+nMM+kZZXJgnPX866hsXd5zzzPwTco=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.83jw0wmple.dll",
        "hash": "sha256-pEh4QLwCmG54iH3aRCK2FShyfUDzj3wMhq81z8neQfI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.1z5867npgn.dll",
        "hash": "sha256-PcIkr0dQO+dgMl5Bj0k9Te1uechYabFwLk4+64prwS8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.olsd8evsvt.dll",
        "hash": "sha256-DMIg9TViERR8yOj02genjff/1178s2DQmY5OzDoJtNg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.wlxvqrwrgb.dll",
        "hash": "sha256-5CE/9vW9+61lmL7nRzSTY8VkVpGsGhdW1+S2J6mqrJs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.uxog6zejau.dll",
        "hash": "sha256-QrS93CRU7o0o04HjUbArNzbT/+/BNwz/CBVwtmo4BWU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.8h2nh9vlfr.dll",
        "hash": "sha256-tO4CLw8om0fuZ5Etou2WOCny7GtShD4IDgf7IHk5eT8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.wfme1wtgp7.dll",
        "hash": "sha256-5KWJSDaIqpjKTa/tM6jB8y86SWI8/rZ6wGB/Wb+KEH0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.qzhr87z1ph.dll",
        "hash": "sha256-KngaXcfQxfes0x2m2cP8ikQFZVR1EJmvKLFzP5l9nqY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.e816brv2hy.dll",
        "hash": "sha256-vvK1ZpLq9KtArnsuSdHeXsd0icWB680dsJRxRGvtLYk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.kqvzlshb27.dll",
        "hash": "sha256-bIC4eJy0MsxmGQ3N5zfdzFELa03VgvalifioOO6sw80=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.cyihgohtjw.dll",
        "hash": "sha256-NDqGAHfYu3JHxBesNM2vSvFI49QPZPdT2afvxIMcbrs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.4tmccj5ndk.dll",
        "hash": "sha256-iDlp1KM6iunjAz2xe1l6pnbYpLkTZ5Gof9Qh7tOV7oY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.x90slo89p1.dll",
        "hash": "sha256-ZUWjmlpcocEzxs8WncaBjyPo0GOhUlA8BG5a+w3/L7U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.ypd18o4ffx.dll",
        "hash": "sha256-tmMyKYolejlnicQvk2dI6z71b5xkhCRmYrWmJFeghnE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.d2ixzuxefk.dll",
        "hash": "sha256-taSfqu0FrAR/uTCGOE0TSc/uBHjvja335V1U2yIRzi4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.nhlcrsk59u.dll",
        "hash": "sha256-NZ2TGUtlh3OalGzRjlmqxyby51vIoKSctKIj85g0R+c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.ond7wvpea2.dll",
        "hash": "sha256-HLOKdG5XBXGGRxqVgjLQkwLFxbMYd1E/P2ROdpvAEUk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.167sh8bgq9.dll",
        "hash": "sha256-t2tb66jUXG6bo1Sh6dgmnRJpuqptmRfRtQyZ77Z2qr0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.4dftt9b58h.dll",
        "hash": "sha256-COTksCx7JB8wg8cHvfgFNz/QTPmgxll790M+dcTsuBQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.0jx5hv7mhk.dll",
        "hash": "sha256-/LV12lXCB9oJiCi1JKZ5F0ArzkeDKPpLQa1FthEO0Ao=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.0u3wq97rxx.dll",
        "hash": "sha256-aCmACaG8k6ddbcnPt3j2sGOQoRM+ySrslaUaYc/prCA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.238w59ed39.dll",
        "hash": "sha256-7vlZp8RpWk1UBISs3e+UgbhYRgxF1HWJUYSOHW+QThw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.19bbztyl7g.dll",
        "hash": "sha256-S/vPOwI5hdCUNUcN9L4UusBChjcXpAZeU+lDPIxuCjY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.0xu7exzooz.dll",
        "hash": "sha256-vEUr/2kHGFmp4/xkigvSNdR+88PH5pCKD0AAUtIDVv8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.i8l85e61xx.dll",
        "hash": "sha256-fiWXzVJnaUqBz5Ex+qlPlezHxCZvNHmu/hSzMTE8/eY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.rdrvb4mn8v.dll",
        "hash": "sha256-XzeS8NI4vRFv2SGt0D39mbNwBR48fgbIBoKLWbHqyqQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.43sgzp8svl.dll",
        "hash": "sha256-MHlxI1RsPNVxO0eG5FyW5684IpAEpX3C/B/XlgtfZUA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.m9fpnvaihu.dll",
        "hash": "sha256-iowpTfoxeiFITiFV8B0gho6jytMLBAkHkgWFdGse9oA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.kkztp856u2.dll",
        "hash": "sha256-VAISfjhBGTgOyQzzvPuzx1RZxi/6RxAtB2BgAVgVE54=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.3jou3sj0ww.dll",
        "hash": "sha256-r9pKdyALg3cJijW1YXhVRP8knUx/fXilUHqDKg/rNY0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.402xa5piqr.dll",
        "hash": "sha256-nOnjeRkkIqTGWaVBBrhurFN/2ajMbLko+cdxIND/BHQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.igowdi7vic.dll",
        "hash": "sha256-0ihJi/UJfvJQQ+VYfZ9wA2bQUEG9AgVumyBG0C2KS5A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.o75jbbnq7i.dll",
        "hash": "sha256-JIh4sXy29udKjmrGXuLfaw6YviiGA18MwmrdjtxeCxM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.6qeebsy09c.dll",
        "hash": "sha256-Dj0HtYQfPGAexuVFSJoqsGLNJApuQhH25dNkIW5TjyI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.2634ednu7c.dll",
        "hash": "sha256-CvuAgHlcUQwWA1dJqBpJ4W1F4Q6tM6G6rbMiXjpHNdA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.6eo76mazre.dll",
        "hash": "sha256-PrX1QZg7f49YTs81/2JnwW/fsCtqq9vRIwOo0EfkDXY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.toliss2l0c.dll",
        "hash": "sha256-TSoOylv+UmhvnX89HzlKX+suZOgEcmRA279f6hF3bkc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.bwxhiiwdo2.dll",
        "hash": "sha256-JSArQ+OsEBzZ+2FU/UdJ9t46uw+ZRYuZtZIJhBJYZpg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.66gz6xnhcf.dll",
        "hash": "sha256-ntZWg8C5QKRdHNElsfTbjkkHrLTNFcXuzfCbeA+3PL0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.14549t1v6h.dll",
        "hash": "sha256-4f8gWYtzw3gTQNf09bZwIrh35lrxmgvujXBzApUt+E8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.k3laezanip.dll",
        "hash": "sha256-UCMXEmT8Vkcwxql6uOe8kVKesEqgVsJloVVm6sBaB38=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.nyifnfvgwp.dll",
        "hash": "sha256-vxBzuY6nHXUt70hTBGa8vx0U8hOE6xl8GprdmLDOZfg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.xspb1xsfo9.dll",
        "hash": "sha256-n2OXZXTf04fwn4SZSjFZSaOT6yA2e5uHy4NHjE0eGAE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.n074skj46j.dll",
        "hash": "sha256-h5ieTP9AcX4t5N+MVJLbU1zwSGcqUA26uUXRwRmhxPA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.6q3op5fu3p.dll",
        "hash": "sha256-3oXL/mPg6MZtMUUeFUCN1zN2iwvBc+RD7CY1atWPmAw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.opteccac3u.dll",
        "hash": "sha256-FJYVgY/e1Hq5G6jsxpvJfOx6F/NrQ3BdqGu9TsQASlo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.b42428tjvd.dll",
        "hash": "sha256-RSpO4Jplj9GqwR8WdETbA5hGq6R5ImI8PKGB+Z5ev4o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.siazhec19s.dll",
        "hash": "sha256-/DaydWPRX4Tit5ipmVfqcTvvVHXnl7okl1imoNpcisw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.tzlf3twsn8.dll",
        "hash": "sha256-GZQ0S+l0US9HZapfoNNVPRQ3TwmSlbCo4AZXtGZTOiE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.ahr2dln4na.dll",
        "hash": "sha256-Yvee+bvRnJ/cjtEY+5IK4Tb0SFaPgU30CymziAhwOLc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.td37cl1yb5.dll",
        "hash": "sha256-H2NVVWlQqHeOV+z11ERuaNfd0Z31yaWn5cOfUcZ6qdU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.DotNet.HotReload.WebAssembly.Browser.dll",
        "name": "Microsoft.DotNet.HotReload.WebAssembly.Browser.uzqmz51p1r.dll",
        "hash": "sha256-1kbZwYtb7aaQGusZQO3hfioQCKWzKe7mH5ShjeAkEHc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MicroBenchmarks.dll",
        "name": "MicroBenchmarks.rkko107826.dll",
        "hash": "sha256-1XCPvxj05tnQSnYtKK+0VUZzCbJXUAewLdBmPed/Occ=",
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
