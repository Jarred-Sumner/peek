(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true})), module);
  };

  // ../../node_modules/.pnpm/webextension-polyfill@0.7.0/node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS((exports, module) => {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define("webextension-polyfill", ["module"], factory);
      } else if (typeof exports !== "undefined") {
        factory(module);
      } else {
        var mod = {
          exports: {}
        };
        factory(mod);
        global.browser = mod.exports;
      }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
      "use strict";
      if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
        const wrapAPIs = (extensionAPIs) => {
          const apiMetadata = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: false
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: true
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(apiMetadata).length === 0) {
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          }
          class DefaultWeakMap extends WeakMap {
            constructor(createItem, items = void 0) {
              super(items);
              this.createItem = createItem;
            }
            get(key) {
              if (!this.has(key)) {
                this.set(key, this.createItem(key));
              }
              return super.get(key);
            }
          }
          const isThenable = (value) => {
            return value && typeof value === "object" && typeof value.then === "function";
          };
          const makeCallback = (promise, metadata) => {
            return (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(extensionAPIs.runtime.lastError);
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
          };
          const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
          const wrapAsyncFunction = (name, metadata) => {
            return function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                    target[name](...args);
                    metadata.fallbackToNoCallback = false;
                    metadata.noCallback = true;
                    resolve();
                  }
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                }
              });
            };
          };
          const wrapMethod = (target, method, wrapper) => {
            return new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
          };
          let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
          const wrapObject = (target, wrappers = {}, metadata = {}) => {
            let cache = Object.create(null);
            let handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache) {
                  return cache[prop];
                }
                if (!(prop in target)) {
                  return void 0;
                }
                let value = target[prop];
                if (typeof value === "function") {
                  if (typeof wrappers[prop] === "function") {
                    value = wrapMethod(target, target[prop], wrappers[prop]);
                  } else if (hasOwnProperty(metadata, prop)) {
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else {
                    value = value.bind(target);
                  }
                } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                  value = wrapObject(value, wrappers[prop], metadata[prop]);
                } else if (hasOwnProperty(metadata, "*")) {
                  value = wrapObject(value, wrappers[prop], metadata["*"]);
                } else {
                  Object.defineProperty(cache, prop, {
                    configurable: true,
                    enumerable: true,
                    get() {
                      return target[prop];
                    },
                    set(value2) {
                      target[prop] = value2;
                    }
                  });
                  return value;
                }
                cache[prop] = value;
                return value;
              },
              set(proxyTarget2, prop, value, receiver) {
                if (prop in cache) {
                  cache[prop] = value;
                } else {
                  target[prop] = value;
                }
                return true;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache, prop);
              }
            };
            let proxyTarget = Object.create(target);
            return new Proxy(proxyTarget, handlers);
          };
          const wrapEvent = (wrapperMap) => ({
            addListener(target, listener, ...args) {
              target.addListener(wrapperMap.get(listener), ...args);
            },
            hasListener(target, listener) {
              return target.hasListener(wrapperMap.get(listener));
            },
            removeListener(target, listener) {
              target.removeListener(wrapperMap.get(listener));
            }
          });
          let loggedSendResponseDeprecationWarning = false;
          const onMessageWrappers = new DefaultWeakMap((listener) => {
            if (typeof listener !== "function") {
              return listener;
            }
            return function onMessage(message, sender, sendResponse) {
              let didCallSendResponse = false;
              let wrappedSendResponse;
              let sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  if (!loggedSendResponseDeprecationWarning) {
                    console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                    loggedSendResponseDeprecationWarning = true;
                  }
                  didCallSendResponse = true;
                  resolve(response);
                };
              });
              let result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              const isResultThenable = result !== true && isThenable(result);
              if (result !== true && !isResultThenable && !didCallSendResponse) {
                return false;
              }
              const sendPromisedResult = (promise) => {
                promise.then((msg) => {
                  sendResponse(msg);
                }, (error) => {
                  let message2;
                  if (error && (error instanceof Error || typeof error.message === "string")) {
                    message2 = error.message;
                  } else {
                    message2 = "An unexpected error occurred";
                  }
                  sendResponse({
                    __mozWebExtensionPolyfillReject__: true,
                    message: message2
                  });
                }).catch((err) => {
                  console.error("Failed to send onMessage rejected reply", err);
                });
              };
              if (isResultThenable) {
                sendPromisedResult(result);
              } else {
                sendPromisedResult(sendResponsePromise);
              }
              return true;
            };
          });
          const wrappedSendMessageCallback = ({
            reject,
            resolve
          }, reply) => {
            if (extensionAPIs.runtime.lastError) {
              if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                resolve();
              } else {
                reject(extensionAPIs.runtime.lastError);
              }
            } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
              reject(new Error(reply.message));
            } else {
              resolve(reply);
            }
          };
          const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              const wrappedCb = wrappedSendMessageCallback.bind(null, {
                resolve,
                reject
              });
              args.push(wrappedCb);
              apiNamespaceObj.sendMessage(...args);
            });
          };
          const staticWrappers = {
            runtime: {
              onMessage: wrapEvent(onMessageWrappers),
              onMessageExternal: wrapEvent(onMessageWrappers),
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          };
          const settingMetadata = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          apiMetadata.privacy = {
            network: {
              "*": settingMetadata
            },
            services: {
              "*": settingMetadata
            },
            websites: {
              "*": settingMetadata
            }
          };
          return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        module2.exports = wrapAPIs(chrome);
      } else {
        module2.exports = browser;
      }
    });
  });

  // ../node_modules/.pnpm/@arr/every@1.0.1/node_modules/@arr/every/module.js
  function module_default(arr, cb) {
    var i = 0, len = arr.length;
    for (; i < len; i++) {
      if (!cb(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }

  // ../node_modules/.pnpm/matchit@1.1.0/node_modules/matchit/lib/matchit.mjs
  "use strict";
  var SEP = "/";
  var STYPE = 0;
  var PTYPE = 1;
  var ATYPE = 2;
  var OTYPE = 3;
  var SLASH = 47;
  var COLON = 58;
  var ASTER = 42;
  var QMARK = 63;
  function strip(str) {
    if (str === SEP)
      return str;
    str.charCodeAt(0) === SLASH && (str = str.substring(1));
    var len = str.length - 1;
    return str.charCodeAt(len) === SLASH ? str.substring(0, len) : str;
  }
  function split(str) {
    return (str = strip(str)) === SEP ? [SEP] : str.split(SEP);
  }
  function isMatch(arr, obj, idx) {
    idx = arr[idx];
    return obj.val === idx && obj.type === STYPE || (idx === SEP ? obj.type > PTYPE : obj.type !== STYPE && (idx || "").endsWith(obj.end));
  }
  function match(str, all) {
    var i = 0, tmp, segs = split(str), len = segs.length, l;
    var fn = isMatch.bind(isMatch, segs);
    for (; i < all.length; i++) {
      tmp = all[i];
      if ((l = tmp.length) === len || l < len && tmp[l - 1].type === ATYPE || l > len && tmp[l - 1].type === OTYPE) {
        if (module_default(tmp, fn))
          return tmp;
      }
    }
    return [];
  }
  function parse(str) {
    if (str === SEP) {
      return [{old: str, type: STYPE, val: str, end: ""}];
    }
    var c, x, t, sfx, nxt = strip(str), i = -1, j = 0, len = nxt.length, out = [];
    while (++i < len) {
      c = nxt.charCodeAt(i);
      if (c === COLON) {
        j = i + 1;
        t = PTYPE;
        x = 0;
        sfx = "";
        while (i < len && nxt.charCodeAt(i) !== SLASH) {
          c = nxt.charCodeAt(i);
          if (c === QMARK) {
            x = i;
            t = OTYPE;
          } else if (c === 46 && sfx.length === 0) {
            sfx = nxt.substring(x = i);
          }
          i++;
        }
        out.push({
          old: str,
          type: t,
          val: nxt.substring(j, x || i),
          end: sfx
        });
        nxt = nxt.substring(i);
        len -= i;
        i = 0;
        continue;
      } else if (c === ASTER) {
        out.push({
          old: str,
          type: ATYPE,
          val: nxt.substring(i),
          end: ""
        });
        continue;
      } else {
        j = i;
        while (i < len && nxt.charCodeAt(i) !== SLASH) {
          ++i;
        }
        out.push({
          old: str,
          type: STYPE,
          val: nxt.substring(j, i),
          end: ""
        });
        nxt = nxt.substring(i);
        len -= i;
        i = j = 0;
      }
    }
    return out;
  }
  function exec(str, arr) {
    var i = 0, x, y, segs = split(str), out = {};
    for (; i < arr.length; i++) {
      x = segs[i];
      y = arr[i];
      if (x === SEP)
        continue;
      if (x !== void 0 && y.type | OTYPE === 2) {
        out[y.val] = x.replace(y.end, "");
      }
    }
    return out;
  }

  // src/inject/inject.ts
  var import_webextension_polyfill = __toModule(require_browser_polyfill());
  var RouteType;
  (function(RouteType2) {
    RouteType2[RouteType2["root"] = 0] = "root";
    RouteType2[RouteType2["rootFile"] = 1] = "rootFile";
    RouteType2[RouteType2["rootTree"] = 2] = "rootTree";
    RouteType2[RouteType2["folder"] = 3] = "folder";
    RouteType2[RouteType2["file"] = 4] = "file";
    RouteType2[RouteType2["pullRequestFiles"] = 5] = "pullRequestFiles";
  })(RouteType || (RouteType = {}));
  var PRIVATE_REPO_INSTRUCTIONS_KEY = "popups/private-repo-instructions";
  function isPrivateRepo() {
    return !!document.querySelector("h1 > .octicon-lock");
  }
  async function shouldShowPrivateRepoMessage() {
    return !!await import_webextension_polyfill.default.storage.sync.get(PRIVATE_REPO_INSTRUCTIONS_KEY);
  }
  async function setShowedPrivateRepoMessage() {
    return await import_webextension_polyfill.default.storage.sync.set({
      [PRIVATE_REPO_INSTRUCTIONS_KEY]: true
    });
  }
  var svg = `
<svg
  aria-hidden="true"
  focusable="false"
  height=18
  width=12
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 384 512"
  class="icon-peek"
>
  <path
    fill="currentColor"
    d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09zM128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
    class=""
  ></path>
</svg>`;
  var addedHooks = new WeakMap();
  async function addHooks(btn) {
    btn.innerHTML = `
    ${svg}
    <span class="btn-peek-title">${BUTTON_TITLE}</span>
  `;
    if (!isPrivateRepo())
      return;
    let href = btn.getAttribute("href");
    if (!href.includes("?")) {
      href += "?noCDN";
      btn.setAttribute("href", href);
    } else if (!href.includes("noCDN")) {
      href += "&noCDN";
      btn.setAttribute("href", href);
    }
    if (addedHooks.has(btn) || didShowPrivateRepoMessage) {
      return;
    }
    addedHooks.set(btn, true);
    btn.addEventListener("click", onClickPrivateRepo, {
      once: true,
      passive: true
    });
  }
  function load() {
    const rootRepoRoute = parse("/:owner/:repo");
    const treeBaseRoute = parse("/:owner/:repo/tree/:ref");
    const fileRoute = parse("/:owner/:repo/tree/:ref/*");
    const rootFileRoute = parse("/:owner/:repo/blob/:ref/:filename");
    const blobFileRoute = parse("/:owner/:repo/blob/:ref/*");
    const pullRequestCodeRoute = parse("/:owner/:repo/pull/:pullRequestID/files");
    const routes = [
      rootRepoRoute,
      treeBaseRoute,
      fileRoute,
      pullRequestCodeRoute,
      rootFileRoute,
      blobFileRoute
    ];
    const matcher = match(location.pathname, routes);
    let routeType;
    switch (matcher) {
      case rootRepoRoute: {
        routeType = 0;
        break;
      }
      case treeBaseRoute: {
        routeType = 2;
        break;
      }
      case blobFileRoute:
      case fileRoute: {
        routeType = 4;
        if (document.querySelector("#files")) {
          routeType = 3;
        }
        break;
      }
      case rootFileRoute: {
        routeType = 1;
        if (document.querySelector("#files")) {
          routeType = 3;
        }
        break;
      }
      case pullRequestCodeRoute: {
        routeType = 5;
        break;
      }
    }
    const params = exec(location.pathname, matcher);
    params["path"] = params["*"];
    delete params["*"];
    addButtons(routeType, params);
  }
  var BUTTON_TITLE = "Peek";
  var didShowPrivateRepoMessage = false;
  var PRIVATE_REPO_LINK = "https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/PRIVATE-REPOSITORIES.md#L1";
  async function onClickPrivateRepo() {
    if (!isPrivateRepo() || didShowPrivateRepoMessage)
      return;
    if (await shouldShowPrivateRepoMessage()) {
      window.open(PRIVATE_REPO_LINK, "_blank");
      await setShowedPrivateRepoMessage();
      didShowPrivateRepoMessage = true;
    }
    didShowPrivateRepoMessage = true;
  }
  function addButtons(route, params) {
    switch (route) {
      case 2:
      case 0: {
        if (route === 0) {
          const branchText = document.querySelector("#branch-select-menu .btn .css-truncate-target");
          if (branchText) {
            params.ref = branchText.textContent;
          }
        }
        const repoOpenButton = document.querySelector(".file-navigation get-repo");
        if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
          var btn = document.createElement("a");
          btn.className = "btn DEDUPE_git-peek-repo btn-peek btn-peek--spaced";
          if (params.ref) {
            btn.href = "git-peek://" + location.origin + `/${params.owner}/${params.repo}/tree/${params.ref}`;
          } else {
            btn.href = "git-peek://" + location.origin + location.pathname;
          }
          addHooks(btn);
          repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
        }
        break;
      }
      case 3: {
        const repoOpenButton = document.querySelector('.btn[data-hotkey="t"]');
        if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
          var btn = document.createElement("a");
          btn.className = "btn DEDUPE_git-peek-repo btn-peek";
          if (params.ref) {
            btn.href = "git-peek://" + location.origin + `/${params.owner}/${params.repo}/tree/${params.ref}`;
          } else {
            btn.href = "git-peek://" + location.origin + location.pathname;
          }
          btn.style["marginRight"] = "8px";
          addHooks(btn);
          repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
        }
        break;
      }
      case 1:
      case 4: {
        const fileButton = document.querySelector(".BtnGroup");
        if (fileButton && !document.querySelector(".DEDUPE_git-peek-file")) {
          var container = document.createElement("div");
          container.className = "BtnGroup";
          var btn = document.createElement("a");
          btn.className = "btn btn-sm DEDUPE_git-peek-file btn-peek";
          btn.href = "git-peek://" + window.location.href;
          btn.style.marginRight = "8px";
          container.appendChild(btn);
          addHooks(btn);
          fileButton.parentElement.prepend(container);
        }
        break;
      }
      case 5: {
        for (let fileHeaderNode of document.querySelectorAll(".file-header")) {
          let fileActions;
          if (fileHeaderNode.querySelector(".octicon.octicon-file")) {
            fileActions = fileHeaderNode.querySelector(".octicon.octicon-file").closest(".BtnGroup");
          } else {
            fileActions = fileHeaderNode.querySelector(".js-toggle-user-reviewed-file-form");
          }
          let url = fileHeaderNode.querySelector(`*[data-ga-click="View file, click, location:files_changed_dropdown"]`)?.getAttribute("href");
          if (fileActions && url && !fileHeaderNode.querySelector(".DEDUPE_git-peek-fileaction")) {
            var container = document.createElement("div");
            container.className = "BtnGroup";
            var btn = document.createElement("a");
            btn.className = "btn btn-sm DEDUPE_git-peek-fileaction btn-peek";
            if (url.startsWith("/")) {
              url = location.origin + url;
            }
            btn.href = "git-peek://" + url;
            btn.style.marginRight = "8px";
            container.appendChild(btn);
            addHooks(btn);
            fileActions.parentElement.prepend(container);
          }
        }
        break;
      }
    }
  }
  window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(load));
  window.addEventListener("popstate", () => requestAnimationFrame(load));
  window.addEventListener("replaceState", () => requestAnimationFrame(load));
  requestAnimationFrame(load);
  import_webextension_polyfill.default.runtime.onMessage.addListener(() => {
    requestAnimationFrame(load);
  });
})();
