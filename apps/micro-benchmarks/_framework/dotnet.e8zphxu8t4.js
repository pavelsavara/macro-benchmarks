//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

const e=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),n=Symbol.for("wasm promise_control");function r(e,o){let t=null;const r=new Promise(function(n,r){t={isDone:!1,promise:null,resolve:o=>{t.isDone||(t.isDone=!0,n(o),e&&e())},reject:e=>{t.isDone||(t.isDone=!0,r(e),o&&o())}}});t.promise=r;const i=r;return i[n]=t,{promise:i,promise_control:t}}function i(e){return e[n]}function s(e){e&&function(e){return void 0!==e[n]}(e)||Be(!1,"Promise is not controllable")}const a="__mono_message__",l=["debug","log","trace","warn","info","error"],c="MONO_WASM: ";let d,u,f,m,g,p;function h(e){m=e}function b(e){if(Pe.diagnosticTracing){const o="function"==typeof e?e():e;console.debug(c+o)}}function w(e,...o){console.info(c+e,...o)}function y(e,...o){console.info(e,...o)}function v(e,...o){console.warn(c+e,...o)}function _(e,...o){if(o&&o.length>0&&o[0]&&"object"==typeof o[0]){if(o[0].silent)return;if(o[0].toString)return void console.error(c+e,o[0].toString())}console.error(c+e,...o)}function E(e,o,t){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}o(t?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){f.error(`proxyConsole failed: ${e}`)}}}function R(e,o,t){u=o,m=e,f={...o};const n=`${t}/console`.replace("https://","wss://").replace("http://","ws://");d=new WebSocket(n),d.addEventListener("error",x),d.addEventListener("close",A),function(){for(const e of l)u[e]=E(`console.${e}`,T,!0)}()}function j(e){let o=30;const t=()=>{d?0==d.bufferedAmount||0==o?(e&&y(e),function(){for(const e of l)u[e]=E(`console.${e}`,f.log,!1)}(),d.removeEventListener("error",x),d.removeEventListener("close",A),d.close(1e3,e),d=void 0):(o--,globalThis.setTimeout(t,100)):e&&f&&f.log(e)};t()}function T(e){d&&d.readyState===WebSocket.OPEN?d.send(e):f.log(e)}function x(e){f.error(`[${m}] proxy console websocket error: ${e}`,e)}function A(e){f.debug(`[${m}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=S(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const o="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t=Pe.config.environmentVariables;if(void 0===t[o]&&e&&(t[o]="1"),void 0===t.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(t.TZ=e)}catch(e){w("failed to detect timezone, will fallback to UTC")}}function S(e){var o;if((null===(o=e.resources)||void 0===o?void 0:o.icu)&&"invariant"!=e.globalizationMode){const o=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);e.applicationCulture||(e.applicationCulture=o);const t=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(t.length>=1)return t[0].name}else o&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const o=e.split("-")[0];return"en"===o||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(o)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(o)):n="icudt.dat";if(n)for(let e=0;e<t.length;e++){const o=t[e];if(o.virtualPath===n)return o.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const M=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,o){try{const t="function"==typeof globalThis.fetch;if(Ae){const n=e.startsWith("file://");if(!n&&t)return globalThis.fetch(e,o||{credentials:"same-origin"});g||(p=await import(/*! webpackIgnore: true */"url"),g=await import(/*! webpackIgnore: true */"fs")),n&&(e=p.fileURLToPath(e));const r=await g.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(t)return globalThis.fetch(e,o||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(o){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o},text:()=>{throw o}}}throw new Error("No fetch implementation available")}function C(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!P(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const I=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,O=/[a-zA-Z]:[\\/]/;function P(e){return Ae||Ce?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||O.test(e):I.test(e)}let U,L=0;const N=[],$=[],z=new Map,W={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},F={...W,"js-module-library-initializer":!0},B={...W,dotnetwasm:!0,heap:!0,manifest:!0},V={...F,manifest:!0},H={...F,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},q={...F,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function Z(e,o,t){null!=o||(o=[]),Be(1==o.length,`Expect to have one ${t} asset in resources`);const n=o[0];return n.behavior=t,K(n),e.push(n),n}function K(e){B[e.behavior]&&z.set(e.behavior,e)}function X(e){Be(B[e],`Unknown single asset behavior ${e}`);const o=z.get(e);if(o&&!o.resolvedUrl)if(o.resolvedUrl=Pe.locateFile(o.name),W[o.behavior]){const e=me(o);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),o.resolvedUrl=e):o.resolvedUrl=le(o.resolvedUrl,o.behavior)}else if("dotnetwasm"!==o.behavior)throw new Error(`Unknown single asset behavior ${e}`);return o}function Y(e){const o=X(e);return Be(o,`Single asset for ${e} not found`),o}let ee=!1;async function oe(){if(!ee){ee=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],o=[],t=(e,o)=>{!q[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,o.push(ie(e)))};for(const o of N)t(o,e);for(const e of $)t(e,o);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...o]).then(()=>{Pe.allDownloadsFinished.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const o=await e;if(o.buffer){if(!q[o.behavior]){o.buffer&&"object"==typeof o.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof o.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=o.resolvedUrl,t=await o.buffer,n=new Uint8Array(t);ge(o),await Oe.beforeOnRuntimeInitialized.promise,await Oe.afterInstantiateWasm.promise,Oe.instantiate_asset(o,e,n)}}else J[o.behavior]?("symbols"===o.behavior&&(await Oe.instantiate_symbols_asset(o),ge(o)),J[o.behavior]&&++Pe.actual_downloaded_assets_count):(o.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[o.behavior]&&G(o)&&Pe.expected_downloaded_assets_count--,!q[o.behavior]&&G(o)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const o of e)r.push(n(o));for(const e of o)i.push(n(e));Promise.all(r).then(()=>{Me||Oe.coreAssetsInMemory.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),Promise.all(i).then(async()=>{Me||(await Oe.coreAssetsInMemory.promise,Oe.allAssetsInMemory.promise_control.resolve())}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let te=!1;function ne(){if(te)return;te=!0;const e=Pe.config,o=[];if(e.assets)for(const o of e.assets)"object"!=typeof o&&Be(!1,`asset must be object, it was ${typeof o} : ${o}`),"string"!=typeof o.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof o.name&&Be(!1,"asset name must be string"),o.resolvedUrl&&"string"!=typeof o.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),o.hash&&"string"!=typeof o.hash&&Be(!1,"asset resolvedUrl could be string"),o.pendingDownload&&"object"!=typeof o.pendingDownload&&Be(!1,"asset pendingDownload could be object"),o.isCore?N.push(o):$.push(o),K(o);else if(e.resources){const t=e.resources;t.wasmNative||Be(!1,"resources.wasmNative must be defined"),t.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),t.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),Z($,t.wasmNative,"dotnetwasm"),Z(o,t.jsModuleNative,"js-module-native"),Z(o,t.jsModuleRuntime,"js-module-runtime"),t.jsModuleDiagnostics&&Z(o,t.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,o,t)=>{const n=e;n.behavior=o,t?(n.isCore=!0,N.push(n)):$.push(n)};if(t.coreAssembly)for(let e=0;e<t.coreAssembly.length;e++)n(t.coreAssembly[e],"assembly",!0);if(t.assembly)for(let e=0;e<t.assembly.length;e++)n(t.assembly[e],"assembly",!t.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(t.corePdb)for(let e=0;e<t.corePdb.length;e++)n(t.corePdb[e],"pdb",!0);if(t.pdb)for(let e=0;e<t.pdb.length;e++)n(t.pdb[e],"pdb",!t.corePdb)}if(e.loadAllSatelliteResources&&t.satelliteResources)for(const e in t.satelliteResources)for(let o=0;o<t.satelliteResources[e].length;o++){const r=t.satelliteResources[e][o];r.culture=e,n(r,"resource",!t.coreAssembly)}if(t.coreVfs)for(let e=0;e<t.coreVfs.length;e++)n(t.coreVfs[e],"vfs",!0);if(t.vfs)for(let e=0;e<t.vfs.length;e++)n(t.vfs[e],"vfs",!t.coreVfs);const r=S(e);if(r&&t.icu)for(let e=0;e<t.icu.length;e++){const o=t.icu[e];o.name===r&&n(o,"icu",!1)}if(t.wasmSymbols)for(let e=0;e<t.wasmSymbols.length;e++)n(t.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let o=0;o<e.appsettings.length;o++){const t=e.appsettings[o],n=pe(t);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||$.push({name:t,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...N,...$,...o]}async function re(e){const o=await ie(e);return await o.pendingDownloadInternal.response,o.buffer}async function ie(e){try{return await se(e)}catch(o){if(!Pe.enableDownloadRetry)throw o;if(Ce||Ae)throw o;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw o;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw o;if(o&&404==o.status)throw o;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await se(e)}catch(o){return e.pendingDownloadInternal=void 0,await new Promise(e=>globalThis.setTimeout(e,100)),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await se(e)}}}async function se(e){for(;U;)await U.promise;try{++L,L==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),U=r());const o=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const o=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>o,json:()=>JSON.parse(new TextDecoder("utf-8").decode(o)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const o=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let t;for(let n of o){n=n.trim(),"./"===n&&(n="");const o=ae(e,n);e.name===o?Pe.diagnosticTracing&&b(`Attempting to download '${o}'`):Pe.diagnosticTracing&&b(`Attempting to download '${o}' for ${e.name}`);try{e.resolvedUrl=o;const n=ue(e);if(e.pendingDownloadInternal=n,t=await n.response,!t||!t.ok)continue;return t}catch(e){t||(t={ok:!1,url:o,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(t||Be(!1,`Response undefined ${e.name}`),!n){const o=new Error(`download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`);throw o.status=t.status,o}w(`optional download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`)}(e);return o?(J[e.behavior]||(e.buffer=await o.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--L,U&&L==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=U;U=void 0,e.promise_control.resolve()}}}function ae(e,o){let t;return null==o&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?t=e.resolvedUrl:(t=""===o?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:o+e.name,t=le(Pe.locateFile(t),e.behavior)),t&&"string"==typeof t||Be(!1,"attemptUrl need to be path or url string"),t}function le(e,o){return Pe.modulesUniqueQuery&&V[o]&&(e+=Pe.modulesUniqueQuery),e}let ce=0;const de=new Set;function ue(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const o=function(e){let o=e.resolvedUrl;if(Pe.loadBootResource){const t=me(e);if(t instanceof Promise)return t;"string"==typeof t&&(o=t)}const t={};return e.cache?t.cache=e.cache:Pe.config.disableNoCacheFetch||(t.cache="no-cache"),e.useCredentials?t.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(t.integrity=e.hash),Pe.fetch_like(o,t)}(e),t={name:e.name,url:e.resolvedUrl,response:o};return de.add(e.name),t.response.then(()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),ce++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(ce,de.size)}),t}catch(o){const t={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(t)}}}const fe={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function me(e){var o;if(Pe.loadBootResource){const t=null!==(o=e.hash)&&void 0!==o?o:"",n=e.resolvedUrl,r=fe[e.behavior];if(r){const o=Pe.loadBootResource(r,e.name,n,t,e.behavior);return"string"==typeof o?C(o):o}}}function ge(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function pe(e){let o=e.lastIndexOf("/");return o>=0&&o++,e.substring(o)}async function he(e){e&&await Promise.all((null!=e?e:[]).map(e=>async function(e){try{const o=e.name;if(!e.moduleExports){const t=le(Pe.locateFile(o),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${t}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */t)}Pe.libraryInitializers.push({scriptName:o,exports:e.moduleExports})}catch(o){v(`Failed to import library initializer '${e}': ${o}`)}}(e)))}async function be(e,o){if(!Pe.libraryInitializers)return;const t=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&t.push(we(r.scriptName,e,()=>r.exports[e](...o)))}await Promise.all(t)}async function we(e,o,t){try{await t()}catch(t){throw v(`Failed to invoke '${o}' on library initializer '${e}': ${t}`),Xe(1,t),t}}function ye(e,o){if(e===o)return e;const t={...o};return void 0!==t.assets&&t.assets!==e.assets&&(t.assets=[...e.assets||[],...t.assets||[]]),void 0!==t.resources&&(t.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},t.resources)),void 0!==t.environmentVariables&&(t.environmentVariables={...e.environmentVariables||{},...t.environmentVariables||{}}),void 0!==t.runtimeOptions&&t.runtimeOptions!==e.runtimeOptions&&(t.runtimeOptions=[...e.runtimeOptions||[],...t.runtimeOptions||[]]),Object.assign(e,t)}function ve(e,o){if(e===o)return e;const t={...o};return t.config&&(e.config||(e.config={}),t.config=ye(e.config,t.config)),Object.assign(e,t)}function _e(e,o){if(e===o)return e;const t={...o};return void 0!==t.coreAssembly&&(t.coreAssembly=[...e.coreAssembly||[],...t.coreAssembly||[]]),void 0!==t.assembly&&(t.assembly=[...e.assembly||[],...t.assembly||[]]),void 0!==t.lazyAssembly&&(t.lazyAssembly=[...e.lazyAssembly||[],...t.lazyAssembly||[]]),void 0!==t.corePdb&&(t.corePdb=[...e.corePdb||[],...t.corePdb||[]]),void 0!==t.pdb&&(t.pdb=[...e.pdb||[],...t.pdb||[]]),void 0!==t.jsModuleWorker&&(t.jsModuleWorker=[...e.jsModuleWorker||[],...t.jsModuleWorker||[]]),void 0!==t.jsModuleNative&&(t.jsModuleNative=[...e.jsModuleNative||[],...t.jsModuleNative||[]]),void 0!==t.jsModuleDiagnostics&&(t.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...t.jsModuleDiagnostics||[]]),void 0!==t.jsModuleRuntime&&(t.jsModuleRuntime=[...e.jsModuleRuntime||[],...t.jsModuleRuntime||[]]),void 0!==t.wasmSymbols&&(t.wasmSymbols=[...e.wasmSymbols||[],...t.wasmSymbols||[]]),void 0!==t.wasmNative&&(t.wasmNative=[...e.wasmNative||[],...t.wasmNative||[]]),void 0!==t.icu&&(t.icu=[...e.icu||[],...t.icu||[]]),void 0!==t.satelliteResources&&(t.satelliteResources=function(e,o){if(e===o)return e;for(const t in o)e[t]=[...e[t]||[],...o[t]||[]];return e}(e.satelliteResources||{},t.satelliteResources||{})),void 0!==t.modulesAfterConfigLoaded&&(t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...t.modulesAfterConfigLoaded||[]]),void 0!==t.modulesAfterRuntimeReady&&(t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...t.modulesAfterRuntimeReady||[]]),void 0!==t.extensions&&(t.extensions={...e.extensions||{},...t.extensions||{}}),void 0!==t.vfs&&(t.vfs=[...e.vfs||[],...t.vfs||[]]),Object.assign(e,t)}function Ee(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const o of e.assets){const t={};switch(o.behavior){case"assembly":t.assembly=[o];break;case"pdb":t.pdb=[o];break;case"resource":t.satelliteResources={},t.satelliteResources[o.culture]=[o];break;case"icu":t.icu=[o];break;case"symbols":t.wasmSymbols=[o];break;case"vfs":t.vfs=[o];break;case"dotnetwasm":t.wasmNative=[o];break;case"js-module-threads":t.jsModuleWorker=[o];break;case"js-module-runtime":t.jsModuleRuntime=[o];break;case"js-module-native":t.jsModuleNative=[o];break;case"js-module-diagnostics":t.jsModuleDiagnostics=[o];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${o.behavior} of asset ${o.name}`)}_e(e.resources,t)}}e.debugLevel,void 0===e.virtualWorkingDirectory&&(e.virtualWorkingDirectory=Ie),e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Oe.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Oe.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let Re=!1;async function je(e){var o;if(Re)return void await Pe.afterConfigLoaded.promise;let t;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),t=e.configSrc,Re=!0,t&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const o=e.configSrc,t=Pe.locateFile(o);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",o,t,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(C(n)),r=await xe(i)):r=(await import(C(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await xe(i)):r=e.config}else t.includes(".json")?(i=await s(le(t,"manifest")),r=await xe(i)):r=(await import(le(t,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ye(Pe.config,r)}(e)),Ee(),await he(null===(o=Pe.config.resources)||void 0===o?void 0:o.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),Ee()}catch(e){throw _("onConfigLoaded() failed",e),e}Ee(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(o){const n=`Failed to load config file ${t} ${o} ${null==o?void 0:o.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:o,isError:!0}),Xe(1,new Error(n)),o}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function xe(e){const o=Pe.config,t=await e.json();o.applicationEnvironment||t.applicationEnvironment||(t.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),t.environmentVariables||(t.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(t.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(t.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),t}"function"==typeof importScripts&&(globalThis.dotnetSidecar=!0);const Ae="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Se=De&&"undefined"!=typeof dotnetSidecar,Me=De&&!Se,ke="object"==typeof window||De&&!Ae,Ce=!ke&&!Ae,Ie="/";let Oe={},Pe={},Ue={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Oe,diagnosticHelpers:Ue,api:Le};function Be(e,o){if(e)return;const t="Assert failed: "+("function"==typeof o?o():o),n=new Error(t);_(t,n),Oe.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function He(){return Oe.runtimeReady&&!Ve()}function Je(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use dotnet.runMain() which doesn't exit the runtime.`),Oe.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function qe(){ke&&(globalThis.addEventListener("unhandledrejection",eo),globalThis.addEventListener("error",oo))}let Qe,Ge;function Ze(e){Ge&&Ge(e),Xe(e,Pe.exitReason)}function Ke(e){Qe&&Qe(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(e,o){var t;const n=o&&"object"==typeof o;e=n&&"number"==typeof o.status?o.status:void 0===e?-1:e;const r=n&&"string"==typeof o.message?o.message:""+o;(o=n?o:Oe.ExitStatus?function(e,o){const t=new Oe.ExitStatus(e);return t.message=o,t.toString=()=>o,t}(e,r):new Error("Exit with code "+e+" "+r)).status=e,o.message||(o.message=r);const i=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>i})}catch(e){}const s=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Qe),We.onExit==Ze&&(We.onExit=Ge),ke&&(globalThis.removeEventListener("unhandledrejection",eo),globalThis.removeEventListener("error",oo)),Oe.runtimeReady?(Oe.jiterpreter_dump_stats&&Oe.jiterpreter_dump_stats(!1),0===e&&(null===(t=Pe.config)||void 0===t?void 0:t.interopCleanupOnExit)&&Oe.forceDisposeProxies(!0,!0)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Oe.dotnetReady&&(Oe.dotnetReady.promise_control.reject(e),Oe.afterInstantiateWasm.promise_control.reject(e),Oe.afterPreRun.promise_control.reject(e),Oe.beforeOnRuntimeInitialized.promise_control.reject(e),Oe.afterOnRuntimeInitialized.promise_control.reject(e),Oe.afterPostRun.promise_control.reject(e))}(o))}catch(e){v("mono_exit A failed",e)}try{s||(function(e,o){if(0!==e&&o){const e=Oe.ExitStatus&&o instanceof Oe.ExitStatus?b:_;"string"==typeof o?e(o):(void 0===o.stack&&(o.stack=(new Error).stack+""),o.message?e(Oe.stringify_as_error_with_stack?Oe.stringify_as_error_with_stack(o.message+"\n"+o.stack):o.message+"\n"+o.stack):e(JSON.stringify(o)))}!Me&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsole?j("WASM EXIT "+e):y("WASM EXIT "+e):Pe.config.forwardConsole&&j())}(e,o),function(e){if(ke&&!Me&&Pe.config&&Pe.config.appendElementOnExit&&document){const o=document.createElement("label");o.id="tests_done",0!==e&&(o.style.background="red"),o.innerHTML=""+e,document.body.appendChild(o)}}(e))}catch(e){v("mono_exit B failed",e)}Pe.exitCode=e,Pe.exitReason||(Pe.exitReason=o),!Me&&Oe.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),o=e=>new Promise((o,t)=>{e.on("error",t),e.end("","utf8",o)}),t=o(e.stderr),n=o(e.stdout);let r;const i=new Promise(e=>{r=setTimeout(()=>e("timeout"),1e3)});await Promise.race([Promise.all([n,t]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(e,o)}})(),o;Ye(e,o)}function Ye(e,o){if(Oe.runtimeReady&&Oe.nativeExit)try{Oe.nativeExit(e)}catch(e){!Oe.ExitStatus||e instanceof Oe.ExitStatus||v("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Ae?process.exit(e):Oe.quit&&Oe.quit(e,o),o}function eo(e){to(e,e.reason,"rejection")}function oo(e){to(e,e.error,"error")}function to(e,o,t){e.preventDefault();try{o||(o=new Error("Unhandled "+t)),void 0===o.stack&&(o.stack=(new Error).stack),o.stack=o.stack+"",o.silent||(_("Unhandled error:",o),Xe(1,o))}catch(e){}}!function(n){if($e)throw new Error("Loader module already loaded");$e=!0,Oe=n.runtimeHelpers,Pe=n.loaderHelpers,Ue=n.diagnosticHelpers,Le=n.api,Ne=n.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(n.module,{config:ye(ze,{environmentVariables:{}})});const a={mono_wasm_bindings_is_ready:!1,config:n.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"a6a5ddf95840f305b42bd43a8d30b062f9b67d1f",config:n.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:r(),allDownloadsQueued:r(),allDownloadsFinished:r(),wasmCompilePromise:r(),runtimeModuleLoaded:r(),loadingWorkers:r(),is_exited:Ve,is_runtime_running:He,assert_runtime_running:Je,mono_exit:Xe,createPromiseController:r,getPromiseController:i,assertIsControllablePromise:s,mono_download_assets:oe,resolve_single_asset_path:Y,setup_proxy_console:R,set_thread_prefix:h,installUnhandledErrorHandler:qe,retrieve_asset_download:re,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:e,simd:t,relaxedSimd:o};Object.assign(Oe,a),Object.assign(Pe,l)}(Fe);let no,ro,io,so=!1,ao=!1;async function lo(e){if(!ao){if(ao=!0,ke&&Pe.config.forwardConsole&&void 0!==globalThis.WebSocket&&R("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const o=e(Fe.api);if(o.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,o),ve(We,o)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");ve(We,e)}await async function(e){if(Ae){const e=await import(/*! webpackIgnore: true */"process"),o=14;if(e.versions.node.split(".")[0]<o)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${o}.`)}const o=/*! webpackIgnore: true */import.meta.url,t=o.indexOf("?");var n;if(t>0&&(Pe.modulesUniqueQuery=o.substring(t)),Pe.scriptUrl=o.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==M?new URL(e,Pe.scriptDirectory).toString():P(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,o=e.userAgentData&&e.userAgentData.brands;o&&o.length>0?Pe.isChromium=o.some(e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}void 0===globalThis.URL&&(globalThis.URL=M)}(We)}}async function co(e){return await lo(e),Pe.config.exitOnUnhandledError&&qe(),Qe=We.onAbort,Ge=We.onExit,We.onAbort=Ke,We.onExit=Ze,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,o=e.port1,t=e.port2;o.addEventListener("message",e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),so?Pe.diagnosticTracing&&b("mono config already received"):(ye(Pe.config,n),Oe.monoThreadInfo=r,Ee(),Pe.diagnosticTracing&&b("mono config received"),so=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsole&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),o.close(),t.close()},{once:!0}),o.start(),self.postMessage({[a]:{monoCmd:"preload",port:t}},[t])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const o of e.assets)K(o),Q[o.behavior]&&$.push(o)}(),setTimeout(async()=>{try{await oe()}catch(e){Xe(1,e)}},0);const e=uo(),o=await Promise.all(e);return await fo(o),We}():async function(){var e;await je(We),ne();const o=uo();(async function(){try{const e=Y("dotnetwasm");await ie(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const o=await e.pendingDownloadInternal.response,t=o.headers&&o.headers.get?o.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===t)n=await WebAssembly.compileStreaming(o);else{ke&&"application/wasm"!==t&&v('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await o.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ce?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout(async()=>{try{D(),await oe()}catch(e){Xe(1,e)}},0);const t=await Promise.all(o);return await fo(t),await Oe.dotnetReady.promise,await he(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function uo(){const e=Y("js-module-runtime"),o=Y("js-module-native");if(no&&ro)return[no,ro,io];"object"==typeof e.moduleExports?no=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),no=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof o.moduleExports?ro=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),ro=import(/*! webpackIgnore: true */o.resolvedUrl));const t=X("js-module-diagnostics");return t&&("object"==typeof t.moduleExports?io=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),io=import(/*! webpackIgnore: true */t.resolvedUrl))),[no,ro,io]}async function fo(e){const{initializeExports:o,initializeReplacements:t,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),o(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l(()=>(Object.assign(We,{__dotnet_runtime:{initializeReplacements:t,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We)).catch(e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize.");throw e})}const mo=new class{withModuleConfig(e){try{return ve(We,e),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,o){try{return ye(ze,{interpreterPgo:e,interpreterPgoSaveDelay:o}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ye(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),ve(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ye(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,o){try{const t={};return t[e]=o,ye(ze,{environmentVariables:t}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ye(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ye(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ye(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ye(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ye(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ye(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ye(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lo(We),await je(We),ne(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await co(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}run(){return this.runMainAndExit()}async runMainAndExit(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}async runMain(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMain()}catch(e){throw Xe(1,e),e}}},go=Xe,po=co;Ce||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version."),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),globalThis.performance&&"function"==typeof globalThis.performance.now||Be(!1,"This browser/engine doesn't support performance.now. Please use a modern version."),Ce||globalThis.crypto&&"object"==typeof globalThis.crypto.subtle||Be(!1,"This engine doesn't support crypto.subtle. Please use a modern version."),Ce||globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues||Be(!1,"This engine doesn't support crypto.getRandomValues. Please use a modern version."),Ae&&"function"!=typeof process.exit&&Be(!1,"This engine doesn't support process.exit. Please use a modern version."),mo.withConfig(/*json-start*/{
  "mainAssemblyName": "MicroBenchmarks",
  "resources": {
    "hash": "sha256-v2vkG1sbm6iaICj0Lk9LZfSuXwkTnOYMNfHSKIRlGJ8=",
    "jsModuleDiagnostics": [
      {
        "name": "dotnet.diagnostics.s31gs2yia6.js"
      }
    ],
    "jsModuleNative": [
      {
        "name": "dotnet.native.4lzi1kr5x9.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.znium3fnsa.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.4cfvl096er.wasm",
        "hash": "sha256-nFu4AXpTFnKRV1i4h8AUFqXT3M0tgzOasoUrAAffbiE=",
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
        "name": "System.Runtime.InteropServices.JavaScript.rbgoaygcmo.dll",
        "hash": "sha256-p3qdwSezxzUrXF3toHJqoH6vcagoiVOeIVgvbBeYXBc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.0d4qss9w0t.dll",
        "hash": "sha256-bEvCsaGJaEmdto9Z9J7GW5ivtkEvXHjKXWuG8kbY54Q=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.z5dehqoeag.dll",
        "hash": "sha256-2WwCWWqL9WGUSyPTeiVKxTjH0cjsGFugaIg2GZZ9RT8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.guge9l5uf5.dll",
        "hash": "sha256-OMZ1lzX7gjGudSdCjzbiSWp8jYmjuVp8MvqbuVxMX2w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.3s1xr1glko.dll",
        "hash": "sha256-vZl5L6TAcVKGy5PrrmT/CPvMJxbakunvKnufTkPjby0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.0698qqmlvd.dll",
        "hash": "sha256-aIK+bBVj5o5xcjkxtTfsDlknffczWQLDr4cnwJvjMtA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.uqgtpmg3ha.dll",
        "hash": "sha256-BovUp4BhpUNs+PxFklBoYs/iHKYULO4UwivAZqjq+pA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.x4ngree5wo.dll",
        "hash": "sha256-3xPxZ/qEHEvckMhN8OVlie73xryQeEOfdejL96YO9b8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.qi81wcywxv.dll",
        "hash": "sha256-ni6GYkvWp3OoeZ+nI6Sy6/NmQnn9go5mADJISAmzGvk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.ne4nc8849w.dll",
        "hash": "sha256-D6ITtrV1Es5Wjs1WJLBAlKSD6dMh3m1+cgoK5MxhaqU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.eixb70yx7r.dll",
        "hash": "sha256-ZkV15Dyp5xcR4364v4urPP0pNnMIUbI54D8ps4o61+s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.pe1dc01mu7.dll",
        "hash": "sha256-n5uQC58hMoXRZVy6rCUa5PTXoqbNSPgzQFgF0Ql9CGk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.g48epsrimz.dll",
        "hash": "sha256-YAYCHOC5LjyCOkQqG6lB0eA7JkSjSgbomtbAJmGNd1w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.tkqiknpi95.dll",
        "hash": "sha256-80j3RP7Afjmou73lfhI4gAFq51OJi43l4KnhhfeWLq0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.gdr24q2w7j.dll",
        "hash": "sha256-7LyZavVLldfWB+mVl9XziU68AmSHmLPbu1odBeKksTo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.jw1gbxsa05.dll",
        "hash": "sha256-XUNzxSMU9d/uk45vbtV8fsvFkOWJuNl5PP/rHR+aNPY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.pgat8h1ehl.dll",
        "hash": "sha256-OVaiHQr78RtKymsvKG32fq//9AD1HkBQONpd8h7fl7s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.g2ycg72p6f.dll",
        "hash": "sha256-eCPyRJdvszwxtkO0ZftWlpodqEy1Hsp0st20NdRGtFo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.e3m0swneug.dll",
        "hash": "sha256-JoRdHXwalUjpuS1VSiIX4zhJNj6mVw5LmPcg5EIX4Co=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.n11ouyci86.dll",
        "hash": "sha256-SwHB11UaHftsZOwIB0hmdcwpX5xoAXMFWZQBZtMAzvs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.dqwakp70sd.dll",
        "hash": "sha256-Ncwbi/EgMZJ5pshMZbecHtpUNv8z1mlSg2GlTYCzBlA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.nqf9p7llkf.dll",
        "hash": "sha256-EYOm83OVGd+gRvydgAC8Um1LJ8eJ9LdXtFzLiHvXNRg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.tbb98nbzug.dll",
        "hash": "sha256-ZypxZavHh4PnmZoRR8pIIMLvTyaS7PWLG1JjZCdc1Ms=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.lgzt8ojbhl.dll",
        "hash": "sha256-xbCB2E2/ApxcEsEGuKnrmfQje/bLpIbDZGPd4Mgj+Ec=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.imuk0mf7pl.dll",
        "hash": "sha256-CqAbeKFp/bUPd2K4bIb82utMh2qZ1kDtnooQ449WXq8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.b2q14l92bp.dll",
        "hash": "sha256-M0KKjAQj7ZpBgikhYd4o7vcuo2F4MaejDLoe++z8iNI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.9poyxfa0dm.dll",
        "hash": "sha256-ja4hG6tHrqIlyl/RSimmGXtN8mMkFwnN4/aY1nLOXAU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.5l7bnymspv.dll",
        "hash": "sha256-KZru0KUXyU9ypKm+0FwnmGKNZP7rxR5nB0qFxO8sgDA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.9zne4i3qnf.dll",
        "hash": "sha256-5SzjJrq0Kj0uLqpSLwvFVf99WKly4k6bFLFIfzleM74=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.0ax3szocyd.dll",
        "hash": "sha256-OFN/Ii+brBtk4WbT4rtFvOpAPQ+KKRs4ptPKl6ckdGA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.gtpbffy49o.dll",
        "hash": "sha256-jH3FWjIu1cG2r9nLgP90JNr1P5+4B7vze/muFV4dWzU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.zfr26jpbwo.dll",
        "hash": "sha256-bznLx5zBnucUmrz/6zpyZ0Bb+NN/03BWCcMf06xFJMU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.686inzbol6.dll",
        "hash": "sha256-BoMHMo8jYCN2gNsx2EHttWEe+x2rhPkFtEXDXN7Y34w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.2e7cdf1wmn.dll",
        "hash": "sha256-lnZhN0/og/HqVqkz9dVJl6OVDkAOsuDRDdM1BxSH1FQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.ifmqzaqolp.dll",
        "hash": "sha256-Dv9k0oHvZkg9+fgtoHp4XR1T6gYyJ7NnCzO1lWmc0CI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.8m74gxss67.dll",
        "hash": "sha256-cAwtoUOV0gjhKi7nldmB9DeYs+Nr925X+K/jyWJeb/Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.dd4d5zpyuu.dll",
        "hash": "sha256-nwef+0LYfCGkugqxgBfHe1AI5ukti7qkePRpROYU49U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.y2kj6fjib3.dll",
        "hash": "sha256-av5swHYG4uU3GXG7Bm5AHoK5xptgs/k+RRJxX1XFiyY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.e4ri630h3l.dll",
        "hash": "sha256-MrRvJQzdPuL8dZI01RnclB7tGui/1sjDMxks0faeLVk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.g12svwc4ww.dll",
        "hash": "sha256-rEdP+XhKYMSMNcaNmrhgHHai4y4TGNUFU/LsQvHmjy8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.w7cs39qava.dll",
        "hash": "sha256-JAzC6JiOLP7Q4ojYvVEnfRBCfg7QidLsF/4BWvWCvP8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.8sq13yqvhs.dll",
        "hash": "sha256-2Eg6tzGx+b8QwA58C6il3Ejr8CWkzuddow0E3jGbrOM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.6g0lhotqzu.dll",
        "hash": "sha256-hlYkJASmmakL+/paVr1IW+ztP5u7qaFJJ8LdnMxYG9w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.nzv7z6vojy.dll",
        "hash": "sha256-s2iKP/jQb1N6p1NT6pumepQfkULm2McinrR90uqEOzg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.83s1ig4btr.dll",
        "hash": "sha256-jCmVsEbkvEqaLaslM3mh5KAfPNFPh4d5veAYnxYr4sA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.10r0x9wger.dll",
        "hash": "sha256-sQ2+y6pjKbwqB1fCRJg/2qQMVwOjz5V1OBqFF1s8waU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.qf0misdjxd.dll",
        "hash": "sha256-tn2+AokcpiNhy6eZxcSjtUlR190ncWth6NqJXdrVE8U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.5mfsp1moc0.dll",
        "hash": "sha256-8wQTbhC70Jj+kHHqJhFy45LXq5iU/ZWsSmpcXNvLQm0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.gc4yvfs8zg.dll",
        "hash": "sha256-gNoyebBhd3PU3oYXw9IGnJdJ7hT/FcS1idXNbvEtia8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.lb2ajfv9qt.dll",
        "hash": "sha256-vxYx06AZBOa9JPJKxcBVfJROQhkl2Fij/YTtDgxNOYA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.47jkchdyed.dll",
        "hash": "sha256-MF5RbyeXBI9r+KsuxC6yRrU/gwv+PA8Rg2sScaLCm8E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.ima2jdjfx3.dll",
        "hash": "sha256-Stnz/peN3IYVNcT2Hs4BYPbsnK4KfG+m53PddayJiBk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.a1v9kyt6hh.dll",
        "hash": "sha256-XrHwDgoDyWh8EtP8El7WQjTOPr+bCe323LzWFCdGCUU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.r1ampvckku.dll",
        "hash": "sha256-XzFIghKwokApVIVNPDhPw4l/Yoe7kx4SXHVsnwBzA5A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.w7hflhvwnl.dll",
        "hash": "sha256-FPLvirMAOXykuPpEOOaa9UBUzSkx+VPjGbbSJmjjGzo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.4pmxthnklx.dll",
        "hash": "sha256-2H1LsTfMc4WUncSitIOtGcqz5Z6mo7mZXoGN5J0pgMo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.ru3649mdtx.dll",
        "hash": "sha256-A0HwE/65pswEAq1YsWW3sFnavtoisYk3j4yXyy05Qck=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.3llbdb7u17.dll",
        "hash": "sha256-B2u8faXswQdq3VaDvMIYlvd91COH6WFSOVxwprYs8Js=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.j20142nqng.dll",
        "hash": "sha256-ZY2/cjRnBtT9kwGTBm0pNABpMwIvq/UuIIS1YZ9Dd2Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.xzrawv23kd.dll",
        "hash": "sha256-w3c5YGsCYMSQn7TQJYxlcb5jagTh1by8qpZQU96RoBk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.0s8vnab8of.dll",
        "hash": "sha256-0DIWgpSjh7yUbotTUVm7bCZC/v7MGRQ7B6FqeS8g22g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.6oxy83lstz.dll",
        "hash": "sha256-Ct3lI1HlcPOSZGJm1Ytmcaoo8snjnEy+CPRWZfxWSO4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.goeee0t0ul.dll",
        "hash": "sha256-MCD4MzdzFFCSOqJCBOeE3KvQKOQaXJQhYlrObJM0/Ag=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.2o07gp0vup.dll",
        "hash": "sha256-3iyrYx00LhGE8HU5mDtMUF2P0yfQQSRtP9l0V8xYD+0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.kd5bml8kx3.dll",
        "hash": "sha256-CEYC1umpVsKjGbvYGiXoTS26yO4lEk4gx/o42P58QtY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.vjxmdq3m7s.dll",
        "hash": "sha256-pSegTmhfKkaQ9pI7dtSheom5k7AKxiw3zfpjS31uHDc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.42ia0h478s.dll",
        "hash": "sha256-FKJraMCNnSDYYkn1ywY6N3NxCrO0B1Qsn+GAZpGnkeg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.9u29o19oh7.dll",
        "hash": "sha256-ocISAVRSdxRcNdZpDRHFErhnwlLZrIr0FISpIshFSSg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.jef42ydt9g.dll",
        "hash": "sha256-Bb+lUAAqlvvfpouIbQDcNhdV+QDwXI4dkTizgGSFetE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.4z82ltb5y2.dll",
        "hash": "sha256-8FL37U5fbm0YltseTQp0WVb+CmlYyTZdUJEYBHojqfk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.jakr8t7smd.dll",
        "hash": "sha256-hVT4l6caFHbTbLM8afygNrlVynfovRXmhuYePL8Kx34=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.m0823quhak.dll",
        "hash": "sha256-6r9MbnXMYLj/my/PU6+/EhrVFXpDhBXm6E10qr93Ow0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.npsmfeeen9.dll",
        "hash": "sha256-Jf7k9IT3MLLCe8viADOGPdONUo26c0+bt2ThYvQpOUY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.ye499dt2na.dll",
        "hash": "sha256-ZjRo2RnrgQTmDWJsAHd+kHT5P/PfeFSNSBSCXtCiKqk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.qiag2bsiqs.dll",
        "hash": "sha256-vtjLByd/7Wqe8pdzHvSTGPUe16OOwi/e42TkqrKtbic=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.id0pp7kxv3.dll",
        "hash": "sha256-JoPbOkDgQ91YCDscZaUNOgc124oG0wEPQlR6SwiQOOc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.lb0q1jr2gi.dll",
        "hash": "sha256-334uY4cuaYmnY310xyVCRmr1cV9F+3zIsXE+KjbW6Fw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.0o8ednwckx.dll",
        "hash": "sha256-oPOudP/dBrOoAT5nX9H8hPLSqE0INlM3mU32IIQ5+bk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.wqtg9pfm4b.dll",
        "hash": "sha256-mBfoVcgBSFxjkAY2/W3+OCOMmWNGDWVWiwayyGAjc4A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.hrobgxz4hu.dll",
        "hash": "sha256-40mdfw2gHCHJzgVy8u+Qk4S6p+mSEOq8NvV5BeedcqY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.k4xnhg5bqu.dll",
        "hash": "sha256-jPcWFkHEl9CXbb4CyHusGaImCOohBimLh3pBiOdUMJ8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.c9vvo3gruw.dll",
        "hash": "sha256-AHT9X5Y6GAJekEYaBHum+B75aY159KivfsTCvqh+AgM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.jzcbr24e26.dll",
        "hash": "sha256-geZggmpZNce6dB3k8iBlIw6YSDVUgUZfwzyWvZRJ0XU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.1wrz2nm86q.dll",
        "hash": "sha256-DypjwgcgsNaXJt+q8IlIzqM+KjHOnNi+xFr631UXHoI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.b73msjlsap.dll",
        "hash": "sha256-SS6fyvmo5N32eDGou5A4t5Sgyq9PKErdla7YOoZAI+w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.p4v57e923e.dll",
        "hash": "sha256-J2Tk/RdvDxuDGmYsJq4n5b8NZJmFMq4tXamn0ihNJMc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.vwvgk30n0s.dll",
        "hash": "sha256-j0VkPJb2/Sd1syGPcWPZ497k0ERxecHhrEXmigNyjrk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.gcalceovlr.dll",
        "hash": "sha256-oOsrvGd1qX15TxdWSZyUnYy9jf+PXk5MSyoINASEpXY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.0ce4ueb8hf.dll",
        "hash": "sha256-cFhyOBaX8KCE75G4wn7qvlJCKAyI/Sj61I7FLR9D9Mg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.zsfzzy6icd.dll",
        "hash": "sha256-w+UuS3iN7UllMg6SuDCS29icxGYIcAeaZ59yDYTizho=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.4g78ek0ec4.dll",
        "hash": "sha256-tPWUd8HA5CN93wdeNIviUM8tCwL2lM0sumrIgI5F/Mo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.6bv369l8tv.dll",
        "hash": "sha256-vmQ8cgvPywLFTHBPNqwZ+oeA1L2t+u8R7jhXSEI+tds=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.nfz6h3dlnl.dll",
        "hash": "sha256-46XCqjRVqAQmOIHcY28EWERafQFUotHmzEAvnsaV8Ms=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.j7y7pyboxi.dll",
        "hash": "sha256-79lEtpBF3SFDMeVEyoOPGsDOnM5aCo9MdiH7IO3OUrc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.6zt1es4rz0.dll",
        "hash": "sha256-AgxC0UYKUi9grlX6LargeA+UfkDTrqkTIR39+GTH/1o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.urzjxkih78.dll",
        "hash": "sha256-JtPGCPXQ85XqLrgOWnN889AFvhUVD7N75iiMJaUwlNE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.ttmv6d1cvp.dll",
        "hash": "sha256-Ua8XN5PRqRl7oq9Xc7i1mHxEIx1yZlBJobV3WcY3SBI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.xe8w0tvgio.dll",
        "hash": "sha256-Z4k7iiXK1bDx5/G1mwWGa2InXmnu/5yGL9Xe0c5pNxY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.j4yad7q9oi.dll",
        "hash": "sha256-Q1QX4DIzUlZvBoVtcY+D32Fnwirusbh5EPvxqmPifEY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.uweq395n88.dll",
        "hash": "sha256-/oRqIpGrNrNimdiuDQgAtUBV5Iu8FbKuicH9NfF3Zpo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.robjluu12d.dll",
        "hash": "sha256-FbHAd63dWQrWywhw4KO9+nlVPJGmdztiR3+dkGPSvpA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.lswst6hh9m.dll",
        "hash": "sha256-BfquNvenk/sTUELMmVijQINZoBA6ob0s8UhlXNqlhgs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.so7wyezo1e.dll",
        "hash": "sha256-FIcOXw825yzW8CBVhAk+Ln2NZuVpImNlMFUBxm+NrGI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.1iorxeha2i.dll",
        "hash": "sha256-NwIBnMn5bMv5ExxB9gCWoVisxnxnb01kFXh7EPqtX/U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.8j0bux189r.dll",
        "hash": "sha256-dOktcluOwbJUVG1mLW9b+IRkBwiykE/m96HHFJlK3PA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.v5gibkp27o.dll",
        "hash": "sha256-U+3Ha0leaSVTGaPedN2FC80GTtaBM4nsfSP+iPRzqCk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.wxljkbkb13.dll",
        "hash": "sha256-1JWqOOzOkTQSZE4FZeuGbjW3Dw8VyRf7wxqKfrLN9RQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.665rs1w60o.dll",
        "hash": "sha256-Eu3MPDMzfdeQ50dhmKY9RTBb+olugZhYVTPoSz6fv/k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.pdnm6xur7u.dll",
        "hash": "sha256-3anMrNowVJpdCqjMIjvcQF2A7s97a7DFjHkimSo1Yzs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.22jsmjfqmb.dll",
        "hash": "sha256-hj4XJu3Rln7HUmap0IvKP6AlDIlZHq7iNYutuPcE5pE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.8mnzg7jk13.dll",
        "hash": "sha256-sOGpXUSCgbmZeR7vB7vHtyBDWVTbh4Tt6fwzxsNUsgY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.aacfbeze3h.dll",
        "hash": "sha256-DoF45TCa/rGB8cQ+yRBafrYj/pTfa/2XaAUn1eQeJWU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.oj41m06k9v.dll",
        "hash": "sha256-vPzuvLW8SRv0wuhIPjy+7lp0BkG/3VX2tu3JLYI33+4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.c9ucptl6kl.dll",
        "hash": "sha256-0L7XKMVwZCufrEBLzdi4Uywh37PjtLYkU0TueOqQpjY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.iebincgwss.dll",
        "hash": "sha256-xs6AQDR/kc2RnEXTRr3e1FiUslmlXQ1u/gmfvlhpyBE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.6d4878r7m2.dll",
        "hash": "sha256-Gr/WHPTZ9D5Y6BlBTvyOFccCCgjYGjQicVKItD2HTtc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.70b1i4siaa.dll",
        "hash": "sha256-CfC+UVfd4AyCoZdkC9INvWtswXbcqcqAfv6eZKBaa1g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.ns8iehlvp3.dll",
        "hash": "sha256-B78TXOdNwod/R60AalN7WRrJxN+g3/pJrglkxCjo6SA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.fcmxsshpfs.dll",
        "hash": "sha256-oTStFTPU29ngh7pcEArf9MmEmKBhON3aLlbAbWxTc7w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.xldtv37q85.dll",
        "hash": "sha256-27q4tXOek6/3zeSUM6Tj2hncAnFv0rdO7SsZlptJGrs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.1p8e1ct02q.dll",
        "hash": "sha256-e7u9rFA4l4rU9M/3LzmtFrMDCcGY1Z59iHPG14smkP8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.sglq5wksxb.dll",
        "hash": "sha256-1Csf004CEoq8ANv5A6/ps0MN8o8z/YjnUmcYOYhR7Fg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.pb3d1enehw.dll",
        "hash": "sha256-6yR1yZK91KyH5AvYf13zByOaavZd55NcOnUDlPIfrEI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.hppcc8k345.dll",
        "hash": "sha256-20bubT1t98bOi2k18T+bRteyBYQxe8B9TWpRk/tOnCM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.kvweu0bdvy.dll",
        "hash": "sha256-EJTOROE+1nnZCsddmMJ4fckfvCRdRHELqKTygk1YuGs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.jcm5408jqv.dll",
        "hash": "sha256-nTuYkwDz5XepeRK1YsSrIKgBtXB7sLC+0L68+TPJ7pI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.yxg29a5pdn.dll",
        "hash": "sha256-RmOLfGd6n3NFhoPXo055X3rtVTWRGaUgBt1Jf6CdOdM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.aqiru6jvna.dll",
        "hash": "sha256-bsKk4jrjLAL9N8uAKhIvU5K2FpAIkVja1lU5BeB8zGY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.ltf5dcfkbe.dll",
        "hash": "sha256-p1PNHTDmsNPlYbHXb7vbV9HINQn7T1N4PhFZOY3vC2c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.2jr3vhp6i5.dll",
        "hash": "sha256-4t7Z/I58c2isqi4wd3RMUshIH+zaKd3y692Tl0BC2EM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.8ddg79pfe3.dll",
        "hash": "sha256-rCL3iL2ejYVSFzaIsKMVHtgHAq/YILsjxK01sJnzM18=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.o56exb0zzv.dll",
        "hash": "sha256-VFwBIORAIBmU5KDvjY/GwxamZ69yvBaLfZ+DvP95+eo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.wx3igj7731.dll",
        "hash": "sha256-dFCVqwGROs9cvy6DN/gF7R9CVRk34RKJz0auv5AXhd4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.mre5a7rg3e.dll",
        "hash": "sha256-/q9bli3S9EvEIEYsBp1HTA6FheHjSDIabuF4kfUXmDk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.4zhauz2cwk.dll",
        "hash": "sha256-gONFExZk6UlF6OMOst+gx25UP3SZ2yBZ4KWO0WanXOc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.ioz5ki0vql.dll",
        "hash": "sha256-HuADVJqNi6f0Jz0/A5/ui9tBgk1LYkL7qfeZNz9EcPU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.19luuz2big.dll",
        "hash": "sha256-6w7o49n+9cbiSiKWu8IPJLSixmFJUCH2SKCCrRrKniM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.61zzu1931y.dll",
        "hash": "sha256-5pGfbQa25SfMXTFxyaeFtGv7soYHDLdG1JLq+xsjlR8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.7ftclif5tm.dll",
        "hash": "sha256-DfNuo82P/Eb0esAP0dUwP/xnZeg+3EukC/TtgAIiIbc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.536lxoo4fb.dll",
        "hash": "sha256-EbOppkJ+hysloBODBhGfPY6w4qg9F9fiZ1Y4Wr4nU+0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.a257s1mpkp.dll",
        "hash": "sha256-YvVEuGKSXPE4AfCkWfqiNZcVx4soPSVqLPV9gmfNOIY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.seyzgpomcv.dll",
        "hash": "sha256-DFOHBF62NbbpLlwDBYs6TzY04t57w6Ri1GuwsDsf+LY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.g5lqe7r3wc.dll",
        "hash": "sha256-lKdleEj0ofs2LGzpuBC8opkx0V7+89at3c1eX5DdbKI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.jjeby555pr.dll",
        "hash": "sha256-X0Q817btelotDloMCb1k1Sk5UzGbIkemIuJHDTFcx38=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.epkq55lcgt.dll",
        "hash": "sha256-UpRT20GrkNF1zvjH0H3AkMtqa8cLrK8ZmDW66ayKap8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.nd8hjfdpsd.dll",
        "hash": "sha256-VRx1UIkJZq6YVlqSpOHLol2KXKsYmGrLRjD8II9gnqM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.6awrzoukcg.dll",
        "hash": "sha256-Lh9B9oU6dEVM0nmmHtmsCrGoy9aux9xEyDrUWyCOZ38=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.jjaew40i3v.dll",
        "hash": "sha256-IaPXJgZrrsy2IEqbYjKdl6CCQzPLzW2SQSJ1rotSjso=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.o5l0c12gih.dll",
        "hash": "sha256-5ER5emcScN3Qo8I2ZCud8gM4xtzScgeyMoIiLIEYzGg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.ifucyecjw4.dll",
        "hash": "sha256-8gAHX1DUEoejGlyOs9DXo4YltIqrJdsef198iAQB0L8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.hx50mcfa10.dll",
        "hash": "sha256-++uat3VW7pP3GnVOwKu8ge+Tt4Gtc53KTO3j9+mQS78=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.e9b4supd9m.dll",
        "hash": "sha256-/kn9HkDhbuTQ9n9Et5npHq0eok6fTMrLYJ9lKTogJjI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.79f1v44uzg.dll",
        "hash": "sha256-hS0/7mxkgaeIowvhqsZGEGvA2hYxuIvrx8oldgBhqQ8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.ixd6js6hu2.dll",
        "hash": "sha256-+vCXC3fLLFDHGk27s5G/S7oJB71G2OuzRCmurF0fcNM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.m5e84d74sa.dll",
        "hash": "sha256-Vr4SkCke6FeN36pCrpe2b69hNO7L6MQ2W4//Y6YQQhk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.yghgjtry6t.dll",
        "hash": "sha256-joyTV0p7Gi+HHxpevjvF8LcfcLvt2V5VTBqOvT5oVsg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.c2cat4eefy.dll",
        "hash": "sha256-bHeFzGCkrK7T/jMXjY2l1ll3+RLaNqXIWvO8zBztRgk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.zkf5mi7gu1.dll",
        "hash": "sha256-I6zmMh8Cb+wLepzOhwOQCxZhNiDjH13Ie5OWs8yihLE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.fs0j5uhsor.dll",
        "hash": "sha256-QQjAS1Pt0iuTm8FgfBzv//n33LiCQQ/NhkszCA6kW7U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.ywz65kuv2x.dll",
        "hash": "sha256-rm9illTOBeXvqj75BN9RAAbUEsvVOu9PO12Oz94NhgQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.xzszg3e3fs.dll",
        "hash": "sha256-jRkQMh+EGQduppb4WKDhALL1HT//nHSSTP3r+t4CnWA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.udexinxlly.dll",
        "hash": "sha256-EiUzhRLJUfkQNEwRYeG8f48Y1Kv4SMN8LkND/1s0/Mc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.it532qjmt8.dll",
        "hash": "sha256-NtqeRzyEyMFIFZTUWxAZ9hVzhetmt2LDQSg5oD8qjCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.gbw97fipkg.dll",
        "hash": "sha256-3G6h6PfsPwQwO4xCY1He+pCPBCVjxDeANip6o607NIo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.jd779rgzsf.dll",
        "hash": "sha256-F9bWiX+QWqEBAIwGgnPpivn/QnPTBU3UH+zahkwvUoA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.adxen0r8lo.dll",
        "hash": "sha256-bsc1Hph+ML9Mf9uiuKQRxE0ZsVFCDrVMkVKn6RRd0hc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.yvq7i6s7j6.dll",
        "hash": "sha256-3i23k4Kb/GMoFoHao5qGBPN36qhTro9GGSFs9ihM53M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.yqmjmjf9gc.dll",
        "hash": "sha256-FtTxGr+Ukwe5TY3GfDJJRqOOgR3YKUoVdiTBESVMygU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.k1np8y2pvy.dll",
        "hash": "sha256-GI9tRlO4ZLyFzNvhH1qn+ctpQkgv0ZvCYkQqGfqNfPE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.ei9i9a16a9.dll",
        "hash": "sha256-Wl7vVsHrkxCKjMBDmAXFU46QH96dFjYacvuib68NQdw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.la7wp9y3u5.dll",
        "hash": "sha256-E7ab1s0IdJ36UMeTksvABQUeoJ1fKXy+nJ1sJmm36WA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.1hm4pliala.dll",
        "hash": "sha256-O+gBbZ98S5CZuSTzpR0CBab8xzc+LjSTbpsOQrnOWJM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.DotNet.HotReload.WebAssembly.Browser.dll",
        "name": "Microsoft.DotNet.HotReload.WebAssembly.Browser.bht6m7a3tm.dll",
        "hash": "sha256-v4wJi4jTcDcpYjeeck56VnJNJ1NHPhtxY+0XxkbtOG4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MicroBenchmarks.dll",
        "name": "MicroBenchmarks.fugf5qrmcw.dll",
        "hash": "sha256-BwBsIEBUMUcU5UFihRFvy+lb1yzinDrAIubZjE3o4UE=",
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
