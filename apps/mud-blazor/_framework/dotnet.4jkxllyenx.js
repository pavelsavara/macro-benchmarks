//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

const e=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),n=Symbol.for("wasm promise_control");function r(e,o){let t=null;const r=new Promise(function(n,r){t={isDone:!1,promise:null,resolve:o=>{t.isDone||(t.isDone=!0,n(o),e&&e())},reject:e=>{t.isDone||(t.isDone=!0,r(e),o&&o())}}});t.promise=r;const i=r;return i[n]=t,{promise:i,promise_control:t}}function i(e){return e[n]}function s(e){e&&function(e){return void 0!==e[n]}(e)||Be(!1,"Promise is not controllable")}const a="__mono_message__",l=["debug","log","trace","warn","info","error"],c="MONO_WASM: ";let d,u,f,m,g,p;function h(e){m=e}function b(e){if(Pe.diagnosticTracing){const o="function"==typeof e?e():e;console.debug(c+o)}}function w(e,...o){console.info(c+e,...o)}function y(e,...o){console.info(e,...o)}function v(e,...o){console.warn(c+e,...o)}function _(e,...o){if(o&&o.length>0&&o[0]&&"object"==typeof o[0]){if(o[0].silent)return;if(o[0].toString)return void console.error(c+e,o[0].toString())}console.error(c+e,...o)}function E(e,o,t){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}o(t?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){f.error(`proxyConsole failed: ${e}`)}}}function R(e,o,t){u=o,m=e,f={...o};const n=`${t}/console`.replace("https://","wss://").replace("http://","ws://");d=new WebSocket(n),d.addEventListener("error",x),d.addEventListener("close",A),function(){for(const e of l)u[e]=E(`console.${e}`,T,!0)}()}function j(e){let o=30;const t=()=>{d?0==d.bufferedAmount||0==o?(e&&y(e),function(){for(const e of l)u[e]=E(`console.${e}`,f.log,!1)}(),d.removeEventListener("error",x),d.removeEventListener("close",A),d.close(1e3,e),d=void 0):(o--,globalThis.setTimeout(t,100)):e&&f&&f.log(e)};t()}function T(e){d&&d.readyState===WebSocket.OPEN?d.send(e):f.log(e)}function x(e){f.error(`[${m}] proxy console websocket error: ${e}`,e)}function A(e){f.debug(`[${m}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=S(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const o="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t=Pe.config.environmentVariables;if(void 0===t[o]&&e&&(t[o]="1"),void 0===t.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(t.TZ=e)}catch(e){w("failed to detect timezone, will fallback to UTC")}}function S(e){var o;if((null===(o=e.resources)||void 0===o?void 0:o.icu)&&"invariant"!=e.globalizationMode){const o=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);e.applicationCulture||(e.applicationCulture=o);const t=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(t.length>=1)return t[0].name}else o&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const o=e.split("-")[0];return"en"===o||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(o)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(o)):n="icudt.dat";if(n)for(let e=0;e<t.length;e++){const o=t[e];if(o.virtualPath===n)return o.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const M=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,o){try{const t="function"==typeof globalThis.fetch;if(Ae){const n=e.startsWith("file://");if(!n&&t)return globalThis.fetch(e,o||{credentials:"same-origin"});g||(p=await import(/*! webpackIgnore: true */"url"),g=await import(/*! webpackIgnore: true */"fs")),n&&(e=p.fileURLToPath(e));const r=await g.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(t)return globalThis.fetch(e,o||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(o){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o},text:()=>{throw o}}}throw new Error("No fetch implementation available")}function C(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!P(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const I=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,O=/[a-zA-Z]:[\\/]/;function P(e){return Ae||Ce?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||O.test(e):I.test(e)}let U,L=0;const N=[],$=[],z=new Map,W={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},F={...W,"js-module-library-initializer":!0},B={...W,dotnetwasm:!0,heap:!0,manifest:!0},V={...F,manifest:!0},H={...F,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},q={...F,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function Z(e,o,t){null!=o||(o=[]),Be(1==o.length,`Expect to have one ${t} asset in resources`);const n=o[0];return n.behavior=t,K(n),e.push(n),n}function K(e){B[e.behavior]&&z.set(e.behavior,e)}function X(e){Be(B[e],`Unknown single asset behavior ${e}`);const o=z.get(e);if(o&&!o.resolvedUrl)if(o.resolvedUrl=Pe.locateFile(o.name),W[o.behavior]){const e=me(o);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),o.resolvedUrl=e):o.resolvedUrl=le(o.resolvedUrl,o.behavior)}else if("dotnetwasm"!==o.behavior)throw new Error(`Unknown single asset behavior ${e}`);return o}function Y(e){const o=X(e);return Be(o,`Single asset for ${e} not found`),o}let ee=!1;async function oe(){if(!ee){ee=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],o=[],t=(e,o)=>{!q[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,o.push(ie(e)))};for(const o of N)t(o,e);for(const e of $)t(e,o);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...o]).then(()=>{Pe.allDownloadsFinished.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const o=await e;if(o.buffer){if(!q[o.behavior]){o.buffer&&"object"==typeof o.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof o.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=o.resolvedUrl,t=await o.buffer,n=new Uint8Array(t);ge(o),await Oe.beforeOnRuntimeInitialized.promise,await Oe.afterInstantiateWasm.promise,Oe.instantiate_asset(o,e,n)}}else J[o.behavior]?("symbols"===o.behavior&&(await Oe.instantiate_symbols_asset(o),ge(o)),J[o.behavior]&&++Pe.actual_downloaded_assets_count):(o.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[o.behavior]&&G(o)&&Pe.expected_downloaded_assets_count--,!q[o.behavior]&&G(o)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const o of e)r.push(n(o));for(const e of o)i.push(n(e));Promise.all(r).then(()=>{Me||Oe.coreAssetsInMemory.promise_control.resolve()}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}),Promise.all(i).then(async()=>{Me||(await Oe.coreAssetsInMemory.promise,Oe.allAssetsInMemory.promise_control.resolve())}).catch(e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let te=!1;function ne(){if(te)return;te=!0;const e=Pe.config,o=[];if(e.assets)for(const o of e.assets)"object"!=typeof o&&Be(!1,`asset must be object, it was ${typeof o} : ${o}`),"string"!=typeof o.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof o.name&&Be(!1,"asset name must be string"),o.resolvedUrl&&"string"!=typeof o.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),o.hash&&"string"!=typeof o.hash&&Be(!1,"asset resolvedUrl could be string"),o.pendingDownload&&"object"!=typeof o.pendingDownload&&Be(!1,"asset pendingDownload could be object"),o.isCore?N.push(o):$.push(o),K(o);else if(e.resources){const t=e.resources;t.wasmNative||Be(!1,"resources.wasmNative must be defined"),t.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),t.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),Z($,t.wasmNative,"dotnetwasm"),Z(o,t.jsModuleNative,"js-module-native"),Z(o,t.jsModuleRuntime,"js-module-runtime"),t.jsModuleDiagnostics&&Z(o,t.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,o,t)=>{const n=e;n.behavior=o,t?(n.isCore=!0,N.push(n)):$.push(n)};if(t.coreAssembly)for(let e=0;e<t.coreAssembly.length;e++)n(t.coreAssembly[e],"assembly",!0);if(t.assembly)for(let e=0;e<t.assembly.length;e++)n(t.assembly[e],"assembly",!t.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(t.corePdb)for(let e=0;e<t.corePdb.length;e++)n(t.corePdb[e],"pdb",!0);if(t.pdb)for(let e=0;e<t.pdb.length;e++)n(t.pdb[e],"pdb",!t.corePdb)}if(e.loadAllSatelliteResources&&t.satelliteResources)for(const e in t.satelliteResources)for(let o=0;o<t.satelliteResources[e].length;o++){const r=t.satelliteResources[e][o];r.culture=e,n(r,"resource",!t.coreAssembly)}if(t.coreVfs)for(let e=0;e<t.coreVfs.length;e++)n(t.coreVfs[e],"vfs",!0);if(t.vfs)for(let e=0;e<t.vfs.length;e++)n(t.vfs[e],"vfs",!t.coreVfs);const r=S(e);if(r&&t.icu)for(let e=0;e<t.icu.length;e++){const o=t.icu[e];o.name===r&&n(o,"icu",!1)}if(t.wasmSymbols)for(let e=0;e<t.wasmSymbols.length;e++)n(t.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let o=0;o<e.appsettings.length;o++){const t=e.appsettings[o],n=pe(t);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||$.push({name:t,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...N,...$,...o]}async function re(e){const o=await ie(e);return await o.pendingDownloadInternal.response,o.buffer}async function ie(e){try{return await se(e)}catch(o){if(!Pe.enableDownloadRetry)throw o;if(Ce||Ae)throw o;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw o;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw o;if(o&&404==o.status)throw o;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await se(e)}catch(o){return e.pendingDownloadInternal=void 0,await new Promise(e=>globalThis.setTimeout(e,100)),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await se(e)}}}async function se(e){for(;U;)await U.promise;try{++L,L==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),U=r());const o=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const o=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>o,json:()=>JSON.parse(new TextDecoder("utf-8").decode(o)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const o=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let t;for(let n of o){n=n.trim(),"./"===n&&(n="");const o=ae(e,n);e.name===o?Pe.diagnosticTracing&&b(`Attempting to download '${o}'`):Pe.diagnosticTracing&&b(`Attempting to download '${o}' for ${e.name}`);try{e.resolvedUrl=o;const n=ue(e);if(e.pendingDownloadInternal=n,t=await n.response,!t||!t.ok)continue;return t}catch(e){t||(t={ok:!1,url:o,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(t||Be(!1,`Response undefined ${e.name}`),!n){const o=new Error(`download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`);throw o.status=t.status,o}w(`optional download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`)}(e);return o?(J[e.behavior]||(e.buffer=await o.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--L,U&&L==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=U;U=void 0,e.promise_control.resolve()}}}function ae(e,o){let t;return null==o&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?t=e.resolvedUrl:(t=""===o?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:o+e.name,t=le(Pe.locateFile(t),e.behavior)),t&&"string"==typeof t||Be(!1,"attemptUrl need to be path or url string"),t}function le(e,o){return Pe.modulesUniqueQuery&&V[o]&&(e+=Pe.modulesUniqueQuery),e}let ce=0;const de=new Set;function ue(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const o=function(e){let o=e.resolvedUrl;if(Pe.loadBootResource){const t=me(e);if(t instanceof Promise)return t;"string"==typeof t&&(o=t)}const t={};return e.cache?t.cache=e.cache:Pe.config.disableNoCacheFetch||(t.cache="no-cache"),e.useCredentials?t.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(t.integrity=e.hash),Pe.fetch_like(o,t)}(e),t={name:e.name,url:e.resolvedUrl,response:o};return de.add(e.name),t.response.then(()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),ce++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(ce,de.size)}),t}catch(o){const t={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(t)}}}const fe={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function me(e){var o;if(Pe.loadBootResource){const t=null!==(o=e.hash)&&void 0!==o?o:"",n=e.resolvedUrl,r=fe[e.behavior];if(r){const o=Pe.loadBootResource(r,e.name,n,t,e.behavior);return"string"==typeof o?C(o):o}}}function ge(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function pe(e){let o=e.lastIndexOf("/");return o>=0&&o++,e.substring(o)}async function he(e){e&&await Promise.all((null!=e?e:[]).map(e=>async function(e){try{const o=e.name;if(!e.moduleExports){const t=le(Pe.locateFile(o),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${t}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */t)}Pe.libraryInitializers.push({scriptName:o,exports:e.moduleExports})}catch(o){v(`Failed to import library initializer '${e}': ${o}`)}}(e)))}async function be(e,o){if(!Pe.libraryInitializers)return;const t=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&t.push(we(r.scriptName,e,()=>r.exports[e](...o)))}await Promise.all(t)}async function we(e,o,t){try{await t()}catch(t){throw v(`Failed to invoke '${o}' on library initializer '${e}': ${t}`),Xe(1,t),t}}function ye(e,o){if(e===o)return e;const t={...o};return void 0!==t.assets&&t.assets!==e.assets&&(t.assets=[...e.assets||[],...t.assets||[]]),void 0!==t.resources&&(t.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},t.resources)),void 0!==t.environmentVariables&&(t.environmentVariables={...e.environmentVariables||{},...t.environmentVariables||{}}),void 0!==t.runtimeOptions&&t.runtimeOptions!==e.runtimeOptions&&(t.runtimeOptions=[...e.runtimeOptions||[],...t.runtimeOptions||[]]),Object.assign(e,t)}function ve(e,o){if(e===o)return e;const t={...o};return t.config&&(e.config||(e.config={}),t.config=ye(e.config,t.config)),Object.assign(e,t)}function _e(e,o){if(e===o)return e;const t={...o};return void 0!==t.coreAssembly&&(t.coreAssembly=[...e.coreAssembly||[],...t.coreAssembly||[]]),void 0!==t.assembly&&(t.assembly=[...e.assembly||[],...t.assembly||[]]),void 0!==t.lazyAssembly&&(t.lazyAssembly=[...e.lazyAssembly||[],...t.lazyAssembly||[]]),void 0!==t.corePdb&&(t.corePdb=[...e.corePdb||[],...t.corePdb||[]]),void 0!==t.pdb&&(t.pdb=[...e.pdb||[],...t.pdb||[]]),void 0!==t.jsModuleWorker&&(t.jsModuleWorker=[...e.jsModuleWorker||[],...t.jsModuleWorker||[]]),void 0!==t.jsModuleNative&&(t.jsModuleNative=[...e.jsModuleNative||[],...t.jsModuleNative||[]]),void 0!==t.jsModuleDiagnostics&&(t.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...t.jsModuleDiagnostics||[]]),void 0!==t.jsModuleRuntime&&(t.jsModuleRuntime=[...e.jsModuleRuntime||[],...t.jsModuleRuntime||[]]),void 0!==t.wasmSymbols&&(t.wasmSymbols=[...e.wasmSymbols||[],...t.wasmSymbols||[]]),void 0!==t.wasmNative&&(t.wasmNative=[...e.wasmNative||[],...t.wasmNative||[]]),void 0!==t.icu&&(t.icu=[...e.icu||[],...t.icu||[]]),void 0!==t.satelliteResources&&(t.satelliteResources=function(e,o){if(e===o)return e;for(const t in o)e[t]=[...e[t]||[],...o[t]||[]];return e}(e.satelliteResources||{},t.satelliteResources||{})),void 0!==t.modulesAfterConfigLoaded&&(t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...t.modulesAfterConfigLoaded||[]]),void 0!==t.modulesAfterRuntimeReady&&(t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...t.modulesAfterRuntimeReady||[]]),void 0!==t.extensions&&(t.extensions={...e.extensions||{},...t.extensions||{}}),void 0!==t.vfs&&(t.vfs=[...e.vfs||[],...t.vfs||[]]),Object.assign(e,t)}function Ee(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const o of e.assets){const t={};switch(o.behavior){case"assembly":t.assembly=[o];break;case"pdb":t.pdb=[o];break;case"resource":t.satelliteResources={},t.satelliteResources[o.culture]=[o];break;case"icu":t.icu=[o];break;case"symbols":t.wasmSymbols=[o];break;case"vfs":t.vfs=[o];break;case"dotnetwasm":t.wasmNative=[o];break;case"js-module-threads":t.jsModuleWorker=[o];break;case"js-module-runtime":t.jsModuleRuntime=[o];break;case"js-module-native":t.jsModuleNative=[o];break;case"js-module-diagnostics":t.jsModuleDiagnostics=[o];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${o.behavior} of asset ${o.name}`)}_e(e.resources,t)}}e.debugLevel,void 0===e.virtualWorkingDirectory&&(e.virtualWorkingDirectory=Ie),e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Oe.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Oe.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let Re=!1;async function je(e){var o;if(Re)return void await Pe.afterConfigLoaded.promise;let t;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),t=e.configSrc,Re=!0,t&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const o=e.configSrc,t=Pe.locateFile(o);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",o,t,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(C(n)),r=await xe(i)):r=(await import(C(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await xe(i)):r=e.config}else t.includes(".json")?(i=await s(le(t,"manifest")),r=await xe(i)):r=(await import(le(t,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ye(Pe.config,r)}(e)),Ee(),await he(null===(o=Pe.config.resources)||void 0===o?void 0:o.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),Ee()}catch(e){throw _("onConfigLoaded() failed",e),e}Ee(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(o){const n=`Failed to load config file ${t} ${o} ${null==o?void 0:o.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:o,isError:!0}),Xe(1,new Error(n)),o}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function xe(e){const o=Pe.config,t=await e.json();o.applicationEnvironment||t.applicationEnvironment||(t.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),t.environmentVariables||(t.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(t.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(t.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),t}"function"==typeof importScripts&&(globalThis.dotnetSidecar=!0);const Ae="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Se=De&&"undefined"!=typeof dotnetSidecar,Me=De&&!Se,ke="object"==typeof window||De&&!Ae,Ce=!ke&&!Ae,Ie="/";let Oe={},Pe={},Ue={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Oe,diagnosticHelpers:Ue,api:Le};function Be(e,o){if(e)return;const t="Assert failed: "+("function"==typeof o?o():o),n=new Error(t);_(t,n),Oe.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function He(){return Oe.runtimeReady&&!Ve()}function Je(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use dotnet.runMain() which doesn't exit the runtime.`),Oe.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function qe(){ke&&(globalThis.addEventListener("unhandledrejection",eo),globalThis.addEventListener("error",oo))}let Qe,Ge;function Ze(e){Ge&&Ge(e),Xe(e,Pe.exitReason)}function Ke(e){Qe&&Qe(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(e,o){var t;const n=o&&"object"==typeof o;e=n&&"number"==typeof o.status?o.status:void 0===e?-1:e;const r=n&&"string"==typeof o.message?o.message:""+o;(o=n?o:Oe.ExitStatus?function(e,o){const t=new Oe.ExitStatus(e);return t.message=o,t.toString=()=>o,t}(e,r):new Error("Exit with code "+e+" "+r)).status=e,o.message||(o.message=r);const i=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>i})}catch(e){}const s=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Qe),We.onExit==Ze&&(We.onExit=Ge),ke&&(globalThis.removeEventListener("unhandledrejection",eo),globalThis.removeEventListener("error",oo)),Oe.runtimeReady?(Oe.jiterpreter_dump_stats&&Oe.jiterpreter_dump_stats(!1),0===e&&(null===(t=Pe.config)||void 0===t?void 0:t.interopCleanupOnExit)&&Oe.forceDisposeProxies(!0,!0)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Oe.dotnetReady&&(Oe.dotnetReady.promise_control.reject(e),Oe.afterInstantiateWasm.promise_control.reject(e),Oe.afterPreRun.promise_control.reject(e),Oe.beforeOnRuntimeInitialized.promise_control.reject(e),Oe.afterOnRuntimeInitialized.promise_control.reject(e),Oe.afterPostRun.promise_control.reject(e))}(o))}catch(e){v("mono_exit A failed",e)}try{s||(function(e,o){if(0!==e&&o){const e=Oe.ExitStatus&&o instanceof Oe.ExitStatus?b:_;"string"==typeof o?e(o):(void 0===o.stack&&(o.stack=(new Error).stack+""),o.message?e(Oe.stringify_as_error_with_stack?Oe.stringify_as_error_with_stack(o.message+"\n"+o.stack):o.message+"\n"+o.stack):e(JSON.stringify(o)))}!Me&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsole?j("WASM EXIT "+e):y("WASM EXIT "+e):Pe.config.forwardConsole&&j())}(e,o),function(e){if(ke&&!Me&&Pe.config&&Pe.config.appendElementOnExit&&document){const o=document.createElement("label");o.id="tests_done",0!==e&&(o.style.background="red"),o.innerHTML=""+e,document.body.appendChild(o)}}(e))}catch(e){v("mono_exit B failed",e)}Pe.exitCode=e,Pe.exitReason||(Pe.exitReason=o),!Me&&Oe.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),o=e=>new Promise((o,t)=>{e.on("error",t),e.end("","utf8",o)}),t=o(e.stderr),n=o(e.stdout);let r;const i=new Promise(e=>{r=setTimeout(()=>e("timeout"),1e3)});await Promise.race([Promise.all([n,t]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(e,o)}})(),o;Ye(e,o)}function Ye(e,o){if(Oe.runtimeReady&&Oe.nativeExit)try{Oe.nativeExit(e)}catch(e){!Oe.ExitStatus||e instanceof Oe.ExitStatus||v("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Ae?process.exit(e):Oe.quit&&Oe.quit(e,o),o}function eo(e){to(e,e.reason,"rejection")}function oo(e){to(e,e.error,"error")}function to(e,o,t){e.preventDefault();try{o||(o=new Error("Unhandled "+t)),void 0===o.stack&&(o.stack=(new Error).stack),o.stack=o.stack+"",o.silent||(_("Unhandled error:",o),Xe(1,o))}catch(e){}}!function(n){if($e)throw new Error("Loader module already loaded");$e=!0,Oe=n.runtimeHelpers,Pe=n.loaderHelpers,Ue=n.diagnosticHelpers,Le=n.api,Ne=n.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(n.module,{config:ye(ze,{environmentVariables:{}})});const a={mono_wasm_bindings_is_ready:!1,config:n.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"e921c3d511279a7ed37f83dbd346019c5b3ffc0e",config:n.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:r(),allDownloadsQueued:r(),allDownloadsFinished:r(),wasmCompilePromise:r(),runtimeModuleLoaded:r(),loadingWorkers:r(),is_exited:Ve,is_runtime_running:He,assert_runtime_running:Je,mono_exit:Xe,createPromiseController:r,getPromiseController:i,assertIsControllablePromise:s,mono_download_assets:oe,resolve_single_asset_path:Y,setup_proxy_console:R,set_thread_prefix:h,installUnhandledErrorHandler:qe,retrieve_asset_download:re,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:e,simd:t,relaxedSimd:o};Object.assign(Oe,a),Object.assign(Pe,l)}(Fe);let no,ro,io,so=!1,ao=!1;async function lo(e){if(!ao){if(ao=!0,ke&&Pe.config.forwardConsole&&void 0!==globalThis.WebSocket&&R("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const o=e(Fe.api);if(o.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,o),ve(We,o)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");ve(We,e)}await async function(e){if(Ae){const e=await import(/*! webpackIgnore: true */"process"),o=14;if(e.versions.node.split(".")[0]<o)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${o}.`)}const o=/*! webpackIgnore: true */import.meta.url,t=o.indexOf("?");var n;if(t>0&&(Pe.modulesUniqueQuery=o.substring(t)),Pe.scriptUrl=o.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==M?new URL(e,Pe.scriptDirectory).toString():P(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,o=e.userAgentData&&e.userAgentData.brands;o&&o.length>0?Pe.isChromium=o.some(e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}void 0===globalThis.URL&&(globalThis.URL=M)}(We)}}async function co(e){return await lo(e),Pe.config.exitOnUnhandledError&&qe(),Qe=We.onAbort,Ge=We.onExit,We.onAbort=Ke,We.onExit=Ze,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,o=e.port1,t=e.port2;o.addEventListener("message",e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),so?Pe.diagnosticTracing&&b("mono config already received"):(ye(Pe.config,n),Oe.monoThreadInfo=r,Ee(),Pe.diagnosticTracing&&b("mono config received"),so=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsole&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),o.close(),t.close()},{once:!0}),o.start(),self.postMessage({[a]:{monoCmd:"preload",port:t}},[t])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const o of e.assets)K(o),Q[o.behavior]&&$.push(o)}(),setTimeout(async()=>{try{await oe()}catch(e){Xe(1,e)}},0);const e=uo(),o=await Promise.all(e);return await fo(o),We}():async function(){var e;await je(We),ne();const o=uo();(async function(){try{const e=Y("dotnetwasm");await ie(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const o=await e.pendingDownloadInternal.response,t=o.headers&&o.headers.get?o.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===t)n=await WebAssembly.compileStreaming(o);else{ke&&"application/wasm"!==t&&v('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await o.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ce?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout(async()=>{try{D(),await oe()}catch(e){Xe(1,e)}},0);const t=await Promise.all(o);return await fo(t),await Oe.dotnetReady.promise,await he(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function uo(){const e=Y("js-module-runtime"),o=Y("js-module-native");if(no&&ro)return[no,ro,io];"object"==typeof e.moduleExports?no=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),no=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof o.moduleExports?ro=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),ro=import(/*! webpackIgnore: true */o.resolvedUrl));const t=X("js-module-diagnostics");return t&&("object"==typeof t.moduleExports?io=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),io=import(/*! webpackIgnore: true */t.resolvedUrl))),[no,ro,io]}async function fo(e){const{initializeExports:o,initializeReplacements:t,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),o(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l(()=>(Object.assign(We,{__dotnet_runtime:{initializeReplacements:t,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We)).catch(e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize.");throw e})}const mo=new class{withModuleConfig(e){try{return ve(We,e),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,o){try{return ye(ze,{interpreterPgo:e,interpreterPgoSaveDelay:o}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ye(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),ve(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ye(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,o){try{const t={};return t[e]=o,ye(ze,{environmentVariables:t}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ye(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ye(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ye(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ye(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ye(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ye(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ye(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lo(We),await je(We),ne(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await co(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}run(){return this.runMainAndExit()}async runMainAndExit(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}async runMain(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMain()}catch(e){throw Xe(1,e),e}}},go=Xe,po=co;Ce||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version."),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),globalThis.performance&&"function"==typeof globalThis.performance.now||Be(!1,"This browser/engine doesn't support performance.now. Please use a modern version."),Ce||globalThis.crypto&&"object"==typeof globalThis.crypto.subtle||Be(!1,"This engine doesn't support crypto.subtle. Please use a modern version."),Ce||globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues||Be(!1,"This engine doesn't support crypto.getRandomValues. Please use a modern version."),Ae&&"function"!=typeof process.exit&&Be(!1,"This engine doesn't support process.exit. Please use a modern version."),mo.withConfig(/*json-start*/{
  "mainAssemblyName": "MudBlazor.Docs",
  "resources": {
    "hash": "sha256-qt4S20JhhC+yIra7YJSZNGCDHS4oLy28+JGk1ZP5+cc=",
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
    "icu": [
      {
        "virtualPath": "icudt.dat",
        "name": "icudt.g3en5r9teb.dat",
        "hash": "sha256-5BfhzgOGQRjWj996AOsK8ZD97vgGxXD5Ucoy9h+kBH8=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.wasm",
        "name": "System.Runtime.InteropServices.JavaScript.ftqonsonu0.wasm",
        "hash": "sha256-w0TY5ud/kU00FDmogs6U5D2awfJZiGamo4yA/hkXK3k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.wasm",
        "name": "System.Private.CoreLib.9m2tzp7u4r.wasm",
        "hash": "sha256-f1Yb/nPVBuy8kiB5L3M4mRPW88A3XJDxreZibjMgt/4=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Blazor-Analytics.wasm",
        "name": "Blazor-Analytics.t7fbmpcpt9.wasm",
        "hash": "sha256-NwQw9KDydquLYv64on80IgWlTiiSdVhowk0+t3oRIlY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Blazored.LocalStorage.wasm",
        "name": "Blazored.LocalStorage.e6jo5xh325.wasm",
        "hash": "sha256-FpAhVpaw9UJbej/kZuE9tEhHu6MMEafaUZ/Hv8zf8nk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "BytexDigital.Blazor.Components.CC.wasm",
        "name": "BytexDigital.Blazor.Components.CC.niv4rd9asz.wasm",
        "hash": "sha256-j9efHXSbrfdMQ3Ovhoj9OXKj1KQ8PWMJALN3+LMUVY8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "FluentValidation.wasm",
        "name": "FluentValidation.l84ekshtqi.wasm",
        "hash": "sha256-Cx+8u5fM6JHr1hDyK89IPXMbirV313E2E2OyvtB+zT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "FuzzySharp.wasm",
        "name": "FuzzySharp.nio22agnfq.wasm",
        "hash": "sha256-Ya2gfOWeHBS9md7HTKkgg3DCVWDyq/DN27Iq65wSaMk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Markdig.wasm",
        "name": "Markdig.o7jx9tahhr.wasm",
        "hash": "sha256-fAN32nu97jjI4ILWtgcGnk08O4JcF35FQCT7NcT8gBo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.wasm",
        "name": "Microsoft.AspNetCore.Components.alasnv005c.wasm",
        "hash": "sha256-YohfJVevYICT6wKc+tMWsJjZ6L/1haZvugNPVA9Z6YM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.wasm",
        "name": "Microsoft.AspNetCore.Components.Forms.oi711g06iu.wasm",
        "hash": "sha256-sMILrpGRid3cnyN4FxnvxbvvPbtTe5l1UgNL2u4nDAk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.wasm",
        "name": "Microsoft.AspNetCore.Components.Web.6b3veyk685.wasm",
        "hash": "sha256-gng1mQwIwCcHQ5Ns/gyEj+HjGkKbpvWZlddOxzG/C3Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.wasm",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.ovmo9qma79.wasm",
        "hash": "sha256-1Lohhps6qKkEp4wZz2DmQDPVMIh7EkaS3sMKOTNUU6M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.WebUtilities.wasm",
        "name": "Microsoft.AspNetCore.WebUtilities.gk7ovtyile.wasm",
        "hash": "sha256-UO+9mgmrWtQ5MA8w1OCvXE1gC4U/ZWHUkOldWjg7dEA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.wasm",
        "name": "Microsoft.Extensions.Configuration.odfppeikem.wasm",
        "hash": "sha256-5BTWf72Uh6GZ08CYYrGKA/U5euSridfXKHbLU4Ra8dM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.wasm",
        "name": "Microsoft.Extensions.Configuration.Abstractions.cu65dqjize.wasm",
        "hash": "sha256-HMmgmKFCdSD4p1EW+L0LD6utDNFJQmU9k8do98lUHGQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.wasm",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.7r739628ba.wasm",
        "hash": "sha256-/RTElYC6+pG/A0kz05CsIjwvOUPFr/rDGBOcvFfnqvI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.wasm",
        "name": "Microsoft.Extensions.Configuration.Json.g15ozpfdsu.wasm",
        "hash": "sha256-fJm0NSjQi2K4E9YMoADJxIvvar6Ab3CZnJ8qKqZmAxA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.v64dwd68so.wasm",
        "hash": "sha256-dyqQSgHmmH97PuRKHq3onX9ZHUxpGvG5jcsr1/kixL8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.la3123wtzi.wasm",
        "hash": "sha256-E8vBgvptpB+HKU+WmPbHpOmOc4Iuj7A4jRXSVtkzRsI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.wasm",
        "name": "Microsoft.Extensions.Diagnostics.07bfe32qbe.wasm",
        "hash": "sha256-lL9qYS/dYmXqunf49xRIbQ693s5yeCdyTDEgDDFyrFE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.wasm",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.s4t7g2j9um.wasm",
        "hash": "sha256-xKg23J1ROpLqCS17LA7wxY3bk8LGulSg0tGimT5aIFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.wasm",
        "name": "Microsoft.Extensions.Hosting.Abstractions.84cusck1xq.wasm",
        "hash": "sha256-2GT3JLn4UhRixQUaOYqUl0c3iLX3Y9PG6h6iMjFRj0I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.wasm",
        "name": "Microsoft.Extensions.Localization.encwtjc3mu.wasm",
        "hash": "sha256-CvF1oB4KajAMDT6w3eb+WD2UzweG0XvzW/HahCfLjTw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.Abstractions.wasm",
        "name": "Microsoft.Extensions.Localization.Abstractions.oi42tqheya.wasm",
        "hash": "sha256-YPiOk95toZNC753ivIo6H9ftgQvYUL4V/Sp0eH5k/kc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.wasm",
        "name": "Microsoft.Extensions.Logging.ig96bxe3io.wasm",
        "hash": "sha256-ntuyj+G3etqLRr4URHQbXygRRnMpedYiUeSijIFiSzU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.wasm",
        "name": "Microsoft.Extensions.Logging.Abstractions.3jvwk1wege.wasm",
        "hash": "sha256-YeB7KhNEGBHR7GuvaD/cyDRjCGdSSVm3RooraIUrrxg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.wasm",
        "name": "Microsoft.Extensions.Options.jmsp1arcnh.wasm",
        "hash": "sha256-KxbDSQ4o1DsYWN3klkQ9CopRvVBN3Ret13TR/Tyd760=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.wasm",
        "name": "Microsoft.Extensions.Primitives.2m74ykvh56.wasm",
        "hash": "sha256-dp6ex6+TDnapvJ/saSJeT5tTTPrPV1EWoHaqum7hMjI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Validation.wasm",
        "name": "Microsoft.Extensions.Validation.mt4lgbyogp.wasm",
        "hash": "sha256-VrjH1nhbRPeKsjUrsAXljN9TAUF4eUhiaZ+XcMZI8Z8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.wasm",
        "name": "Microsoft.JSInterop.r1zxih5xr9.wasm",
        "hash": "sha256-r/XajtXau7FO3yUaHVZFuLQxHBgKIBMJHSnj30sKZUo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.wasm",
        "name": "Microsoft.JSInterop.WebAssembly.krrn70v2gc.wasm",
        "hash": "sha256-UMPTxbR1AHVgJQ4pZBZgaBZXoDv3KU9JI2WOaGs7Jkg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MudBlazor.wasm",
        "name": "MudBlazor.gkp74k34gh.wasm",
        "hash": "sha256-0P7Ez7gREHvNAuiOOVWibTz5bfV/ClHwgieN9LEak7A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.wasm",
        "name": "System.Collections.Concurrent.b4bj8wc9fu.wasm",
        "hash": "sha256-C0eLR7b6Lxgs6JF3V419Tu3veCjmPjg3PjlydxeYUVs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.wasm",
        "name": "System.Collections.Immutable.ajtlptckue.wasm",
        "hash": "sha256-Omrzs2omZv7e1XbgV+Ec2LUd+9OOsGeTbVLOR8Ra5L8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.wasm",
        "name": "System.Collections.NonGeneric.egfqz144h1.wasm",
        "hash": "sha256-QkhHwXiz5v3zCr74uOxS0xaT9PD8LtXO+4T2XN8/a1k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.wasm",
        "name": "System.Collections.Specialized.ahfpujnha4.wasm",
        "hash": "sha256-Yiu8SsOy0lyY6EO2OvrhKNhIN5CaAxKihMuh/p88M8g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.wasm",
        "name": "System.Collections.i6f8hnusty.wasm",
        "hash": "sha256-2kt29YoVVhQDGqIuIkSKfHbF925aFKV1Kktnq56x4vg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.wasm",
        "name": "System.ComponentModel.Annotations.bikdlsjg8d.wasm",
        "hash": "sha256-E/5LZWoROysYBPCwmRShcl2suaunIXOjFO6M3Sq7SZU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.wasm",
        "name": "System.ComponentModel.Primitives.0n7d8i125x.wasm",
        "hash": "sha256-FHiFLxi5pCaYDBZZvspe1FOsxm/aLIEfKpVJpjpI+Ok=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.wasm",
        "name": "System.ComponentModel.TypeConverter.n12flarws2.wasm",
        "hash": "sha256-GwXSExn/pvM25M3MrFQpEXqRWbqCtdaatcyCZSjdgp8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.wasm",
        "name": "System.ComponentModel.385rpy9i7i.wasm",
        "hash": "sha256-M+SE+6iZlKgkfP3ovrRE+fvkLmsW+/pQpoXFwtAMoPE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.wasm",
        "name": "System.Console.673w5cemml.wasm",
        "hash": "sha256-Mg1NyVNnXUopEwIxyKhu/RK+IuS5gG7DHfDFHwrlMyc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.wasm",
        "name": "System.Diagnostics.Debug.1dphvyufkv.wasm",
        "hash": "sha256-W37VHkWYdqqliPPANfQFszXN/nVKDBfnwt80tbuudQU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.wasm",
        "name": "System.Diagnostics.DiagnosticSource.kfe7s3000x.wasm",
        "hash": "sha256-MDP52UketDqAh95ffsYTP95CuFV5sfxSFfKxsrKzMTU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.wasm",
        "name": "System.Drawing.Primitives.f35yq53zlg.wasm",
        "hash": "sha256-S8zsp/G3y7gT/hZWrjhb9ZHHtQ5HpzG4MWNIy10oWxM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.wasm",
        "name": "System.Drawing.vm37ukod46.wasm",
        "hash": "sha256-J3yZ/efxwkgsLmI4s6Pb/1NITk2y9LwAvXbbPItttEs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.wasm",
        "name": "System.IO.Compression.o8p7ureg1o.wasm",
        "hash": "sha256-iIVdJOQQb2lCrSkyi6xGDKO4ZjkNXkbgeAZOmF5qWSo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.wasm",
        "name": "System.IO.Pipelines.rxmxbce8d2.wasm",
        "hash": "sha256-X217MOPY4BsRB/WvOGT3KtBFcJh78jPjWPeZrdUtZA8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.wasm",
        "name": "System.Linq.Expressions.wt9gf2iur1.wasm",
        "hash": "sha256-PBNFNH59Gta+AzMiESty+oejCtXgfXBHWvVJ/DpNEG8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.wasm",
        "name": "System.Linq.Queryable.pm4mvif4bk.wasm",
        "hash": "sha256-8bePrNKfOYsjSsUAktmzwmMthp/TzsuXBrQOSswX9eM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.wasm",
        "name": "System.Linq.37u3w3cyxl.wasm",
        "hash": "sha256-nwflSbfj8hsC3ZpSFmBCK0nu8NCak4/MQ1x20eNiPco=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.wasm",
        "name": "System.Memory.xgmiewcwrd.wasm",
        "hash": "sha256-v6/bVfnVvuTvkIsHfy2guGpL4bLTsTPRsuL7pGZooKA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.wasm",
        "name": "System.Net.Http.Json.kd3eef4o1s.wasm",
        "hash": "sha256-aE1M2M34PL3/p5QAuTIFi6m0NvjfSGMZwtVXvNnJkSg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.wasm",
        "name": "System.Net.Http.y5orzqckan.wasm",
        "hash": "sha256-6uHOE9U6/L7iJBXH/baZtRvK1DA2DQg/Zj9jKyxDWCo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.wasm",
        "name": "System.Net.Primitives.ojwbqjdqod.wasm",
        "hash": "sha256-hE/P4gJGohsrBOtORYIriPWNSyBBdWYk+WXD7V8UZAQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.wasm",
        "name": "System.ObjectModel.v4ld9q3k0y.wasm",
        "hash": "sha256-wdIIYpAu3iy1CRG4B8srbHC3gpjy9zJBSipC3cjwiiY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.wasm",
        "name": "System.Private.Uri.42jwseigje.wasm",
        "hash": "sha256-hCMoLk8acxP5Tvrb25YSvwEPvoDsntnbY5grRvAvmoA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.wasm",
        "name": "System.Private.Xml.Linq.l1wsd58qam.wasm",
        "hash": "sha256-xw18GoSjeAygZMcK+fZLcyFkaJCSLK4VE38ABqFw2TU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.wasm",
        "name": "System.Private.Xml.19ut2aio30.wasm",
        "hash": "sha256-ZQhLhd38VSJY2+kit69G6jUzRH7pREXRWaCLwzlWcDg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.wasm",
        "name": "System.Runtime.Extensions.n13sanvqy1.wasm",
        "hash": "sha256-lYurjbnx5Ru7AgnI5V86hMF4yTaWjn7pkBpFrVWfb7k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.wasm",
        "name": "System.Runtime.InteropServices.9pxrlmg9ez.wasm",
        "hash": "sha256-o49cggjZvpe57eLHzNKh4VRcKcidIzgEX74DQMDqgvg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.wasm",
        "name": "System.Runtime.Numerics.7iaowjfmo5.wasm",
        "hash": "sha256-0fgoD7z5cWuazKzUGQsIZunK2b7zfGlwufmjbdxuMWM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.wasm",
        "name": "System.Runtime.0cq8kt3r3t.wasm",
        "hash": "sha256-UE9AlvVTr0sD19fwPQnHgDe7x/WqxJ2XZKfPBqSuWFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.wasm",
        "name": "System.Security.Cryptography.5mqbsuo873.wasm",
        "hash": "sha256-fa9TsN8nMqNUoHgxjSDYPgRD8n4xJKDxXlroegFbpN0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.wasm",
        "name": "System.Text.Encodings.Web.l1xcmlg89l.wasm",
        "hash": "sha256-SXzMl8jOtjZvgGov1WQokbt6eas89O+wptR31Xy5DiQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.wasm",
        "name": "System.Text.Json.u48oof3h06.wasm",
        "hash": "sha256-0pwg8Bbj33HgCHyhdPYs4uZnvZCGMtys5PNvHcwLhIE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.wasm",
        "name": "System.Text.RegularExpressions.th8xojr3zo.wasm",
        "hash": "sha256-v6KSkDE0MS3WfBum9NPljVebQWYOwzceNyhvNFgIo+g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.wasm",
        "name": "System.Threading.Tasks.Extensions.6j9poftkqp.wasm",
        "hash": "sha256-fn93M0mOMFCZoR6/jHdDLCZ4Ef6KlvIWNaeEhH+MjDs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.wasm",
        "name": "System.Threading.uff718t4w4.wasm",
        "hash": "sha256-FiWepKEmT73U3CUQ5AhKWehEyGEyZ2akhpCPD1BiAcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.wasm",
        "name": "System.Web.HttpUtility.h6rpoczl6t.wasm",
        "hash": "sha256-2Y2dik2rE45ZJIuYGJoslEp+tVambCq30T9RNBV4deQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.wasm",
        "name": "System.Xml.Linq.apiumca7eo.wasm",
        "hash": "sha256-0l9OFaoPu6PqpSv11hvjeKyHHERsOopLiuUmSv2VkKw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.wasm",
        "name": "System.Xml.ReaderWriter.9murhxzwyx.wasm",
        "hash": "sha256-wdhz0yZdZycY5nASnoxIAGg4NP757JYL3QFg7EAG9xM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.wasm",
        "name": "System.Xml.XDocument.8vv2j9zeov.wasm",
        "hash": "sha256-1HTjU9BD6kIf2oyTRhL6t4kVy3QZfp915O6K0Ia8mts=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.wasm",
        "name": "System.5huvzppm4a.wasm",
        "hash": "sha256-9zyQPclIX0X3seJcfS9SAO9EtKWgHnCvSmLGPZhIxQU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.wasm",
        "name": "netstandard.ue5iemtxfr.wasm",
        "hash": "sha256-Gh4sxWVCKHi7A/sJVPXqGp/WmUd97thLsFVtPQju+Lo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MudBlazor.Docs.wasm",
        "name": "MudBlazor.Docs.8d3smfwqt5.wasm",
        "hash": "sha256-DPJ8S8YJXNgkglNyWTuEiz8sMYJp8SBJt8vB6RrEX90=",
        "cache": "force-cache"
      }
    ]
  },
  "debugLevel": 0,
  "globalizationMode": "all",
  "extensions": {
    "blazor": {}
  },
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.AspNetCore.Components.Routing.RegexConstraintSupport": false,
        "Microsoft.Extensions.DependencyInjection.VerifyOpenGenericServiceTrimmability": true,
        "System.ComponentModel.DefaultValueAttribute.IsSupported": false,
        "System.ComponentModel.Design.IDesignerHost.IsSupported": false,
        "System.ComponentModel.TypeConverter.EnableUnsafeBinaryFormatterInDesigntimeLicenseContextSerialization": false,
        "System.ComponentModel.TypeDescriptor.IsComObjectDescriptorSupported": false,
        "System.Data.DataSet.XmlSerializationIsSupported": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": false,
        "System.Diagnostics.Tracing.EventSource.IsSupported": false,
        "System.GC.Server": true,
        "System.Globalization.Invariant": false,
        "System.TimeZoneInfo.Invariant": false,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.ResourceManager.AllowCustomResourceTypes": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.CompilerServices.RuntimeFeature.IsDynamicCodeSupported": true,
        "System.Runtime.InteropServices.BuiltInComInterop.IsSupported": false,
        "System.Runtime.InteropServices.EnableConsumingManagedCodeFromNativeHosting": false,
        "System.Runtime.InteropServices.EnableCppCLIHostActivation": false,
        "System.Runtime.InteropServices.Marshalling.EnableGeneratedComInterfaceComImportInterop": false,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.StartupHookProvider.IsSupported": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": true,
        "System.Threading.Thread.EnableAutoreleasePool": false,
        "Microsoft.AspNetCore.Components.Endpoints.NavigationManager.DisableThrowNavigationException": false,
        "System.Diagnostics.StackTrace.IsLineNumberSupported": false,
        "System.Runtime.CompilerServices.RuntimeFeature.IsMultithreadingSupported": false
      }
    }
  }
}/*json-end*/);export{po as default,mo as dotnet,go as exit};
