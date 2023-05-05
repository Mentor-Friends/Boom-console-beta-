"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["polyfills"],{

/***/ 8314:
/*!**********************************!*\
  !*** ./angular/src/polyfills.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4946);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge on the desktop, and iOS and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/***/ }),

/***/ 4946:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {



/**
 * @license Angular v15.1.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global) {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }
  class Zone {
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  // tslint:disable-next-line:require-internal-with-underscore
  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        // clang-format off
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        // clang-format on
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  const creationTrace = '__creationTrace__';
  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__('state');
  const symbolValue = __symbol__('value');
  const symbolFinally = __symbol__('finally');
  const symbolParentPromiseValue = __symbol__('parentPromiseValue');
  const symbolParentPromiseState = __symbol__('parentPromiseState');
  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
      // Do not return value or you will break the Promise spec.
    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = 'Promise resolved with itself';
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
  // Promise Resolution
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;
      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      // if (value instanceof ZoneAwarePromise) {
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace
        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }
        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    }
    // Resolving an already resolved promise is a noop.
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        // should not pass value to finally callback
        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
  const noop = function () {};
  const AggregateError = global.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      // Start at 2 to prevent prematurely resolving if .then is called immediately.
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      // Make the unresolvedCount zero-based again.
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return 'Promise';
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      var _a;
      // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      var _a;
      // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.
  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__('thenPatched');
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }
    const originalThen = proto.then;
    // Keep a reference to the original method.
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  }
  // This is not part of public API, but it is useful for tests, so we expose it.
  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');
  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  // patch Object.prototype.toString to let them look like native
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';
  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // do not create a new object as task.data to pass those things
        // just use the global shared one
        taskData.options = options;
        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed
              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_a) {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.
  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const handle = task.data.handleId;
      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      }
      // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === 'number' || handle) {
        return handle;
      }
      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol];
      // other environments.
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});
Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api);
  // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];
    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      // remove existing event listener
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];
                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      const data = task.data;
      // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }
      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);
      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      }
      // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.
    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(8314));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2pCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO0lBQ2pDVSxJQUFJLENBQUM2TSxVQUFVLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxHQUNoRHFXLDJCQUEyQixDQUFDLG9CQUFvQixDQUFDO0lBQ3JEbGpCLElBQUksQ0FBQzZNLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQ3ZDcVcsMkJBQTJCLENBQUMsa0JBQWtCLENBQUM7RUFDdkQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZmVzbTIwMTUvem9uZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cbiAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG4gKlxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxuICogICAxLiBCcm93c2VyIHBvbHlmaWxscy4gVGhlc2UgYXJlIGFwcGxpZWQgYmVmb3JlIGxvYWRpbmcgWm9uZUpTIGFuZCBhcmUgc29ydGVkIGJ5IGJyb3dzZXJzLlxuICogICAyLiBBcHBsaWNhdGlvbiBpbXBvcnRzLiBGaWxlcyBpbXBvcnRlZCBhZnRlciBab25lSlMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZSB5b3VyIG1haW5cbiAqICAgICAgZmlsZS5cbiAqXG4gKiBUaGUgY3VycmVudCBzZXR1cCBpcyBmb3Igc28tY2FsbGVkIFwiZXZlcmdyZWVuXCIgYnJvd3NlcnM7IHRoZSBsYXN0IHZlcnNpb25zIG9mIGJyb3dzZXJzIHRoYXRcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgcmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSwgQ2hyb21lIChpbmNsdWRpbmdcbiAqIE9wZXJhKSwgRWRnZSBvbiB0aGUgZGVza3RvcCwgYW5kIGlPUyBhbmQgQ2hyb21lIG9uIG1vYmlsZS5cbiAqXG4gKiBMZWFybiBtb3JlIGluIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9icm93c2VyLXN1cHBvcnRcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xuICovXG5cbi8qKlxuICogQnkgZGVmYXVsdCwgem9uZS5qcyB3aWxsIHBhdGNoIGFsbCBwb3NzaWJsZSBtYWNyb1Rhc2sgYW5kIERvbUV2ZW50c1xuICogdXNlciBjYW4gZGlzYWJsZSBwYXJ0cyBvZiBtYWNyb1Rhc2svRG9tRXZlbnRzIHBhdGNoIGJ5IHNldHRpbmcgZm9sbG93aW5nIGZsYWdzXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xuICogd2lsbCBwdXQgaW1wb3J0IGluIHRoZSB0b3Agb2YgYnVuZGxlLCBzbyB1c2VyIG5lZWQgdG8gY3JlYXRlIGEgc2VwYXJhdGUgZmlsZVxuICogaW4gdGhpcyBkaXJlY3RvcnkgKGZvciBleGFtcGxlOiB6b25lLWZsYWdzLnRzKSwgYW5kIHB1dCB0aGUgZm9sbG93aW5nIGZsYWdzXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXG4gKiBpbXBvcnQgJy4vem9uZS1mbGFncyc7XG4gKlxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXG4gKlxuICogVGhlIGZvbGxvd2luZyBmbGFncyB3aWxsIHdvcmsgZm9yIGFsbCBicm93c2Vycy5cbiAqXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9vbl9wcm9wZXJ0eSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggb25Qcm9wZXJ0eSBzdWNoIGFzIG9uY2xpY2tcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcbiAqXG4gKiAgaW4gSUUvRWRnZSBkZXZlbG9wZXIgdG9vbHMsIHRoZSBhZGRFdmVudExpc3RlbmVyIHdpbGwgYWxzbyBiZSB3cmFwcGVkIGJ5IHpvbmUuanNcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXG4gKlxuICogICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2sgPSB0cnVlO1xuICpcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IGRlZmF1bHQgZm9yIEFuZ3VsYXIgaXRzZWxmLlxuICovXG4gaW1wb3J0ICd6b25lLmpzJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG5cblxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgKiBBUFBMSUNBVElPTiBJTVBPUlRTXG4gICovXG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjE1LjEuMC1uZXh0LjBcbiAqIChjKSAyMDEwLTIwMjIgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuKChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgY29uc3QgcGVyZm9ybWFuY2UgPSBnbG9iYWxbJ3BlcmZvcm1hbmNlJ107XG4gICAgZnVuY3Rpb24gbWFyayhuYW1lKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlWydtYXJrJ10gJiYgcGVyZm9ybWFuY2VbJ21hcmsnXShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGVyZm9ybWFuY2VNZWFzdXJlKG5hbWUsIGxhYmVsKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlWydtZWFzdXJlJ10gJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXShuYW1lLCBsYWJlbCk7XG4gICAgfVxuICAgIG1hcmsoJ1pvbmUnKTtcbiAgICAvLyBJbml0aWFsaXplIGJlZm9yZSBpdCdzIGFjY2Vzc2VkIGJlbG93LlxuICAgIC8vIF9fWm9uZV9zeW1ib2xfcHJlZml4IGdsb2JhbCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB6b25lXG4gICAgLy8gc3ltYm9sIHByZWZpeCB3aXRoIGEgY3VzdG9tIG9uZSBpZiBuZWVkZWQuXG4gICAgY29uc3Qgc3ltYm9sUHJlZml4ID0gZ2xvYmFsWydfX1pvbmVfc3ltYm9sX3ByZWZpeCddIHx8ICdfX3pvbmVfc3ltYm9sX18nO1xuICAgIGZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICAgICAgICByZXR1cm4gc3ltYm9sUHJlZml4ICsgbmFtZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tEdXBsaWNhdGUgPSBnbG9iYWxbX19zeW1ib2xfXygnZm9yY2VEdXBsaWNhdGVab25lQ2hlY2snKV0gPT09IHRydWU7XG4gICAgaWYgKGdsb2JhbFsnWm9uZSddKSB7XG4gICAgICAgIC8vIGlmIGdsb2JhbFsnWm9uZSddIGFscmVhZHkgZXhpc3RzIChtYXliZSB6b25lLmpzIHdhcyBhbHJlYWR5IGxvYWRlZCBvclxuICAgICAgICAvLyBzb21lIG90aGVyIGxpYiBhbHNvIHJlZ2lzdGVyZWQgYSBnbG9iYWwgb2JqZWN0IG5hbWVkIFpvbmUpLCB3ZSBtYXkgbmVlZFxuICAgICAgICAvLyB0byB0aHJvdyBhbiBlcnJvciwgYnV0IHNvbWV0aW1lcyB1c2VyIG1heSBub3Qgd2FudCB0aGlzIGVycm9yLlxuICAgICAgICAvLyBGb3IgZXhhbXBsZSxcbiAgICAgICAgLy8gd2UgaGF2ZSB0d28gd2ViIHBhZ2VzLCBwYWdlMSBpbmNsdWRlcyB6b25lLmpzLCBwYWdlMiBkb2Vzbid0LlxuICAgICAgICAvLyBhbmQgdGhlIDFzdCB0aW1lIHVzZXIgbG9hZCBwYWdlMSBhbmQgcGFnZTIsIGV2ZXJ5dGhpbmcgd29yayBmaW5lLFxuICAgICAgICAvLyBidXQgd2hlbiB1c2VyIGxvYWQgcGFnZTIgYWdhaW4sIGVycm9yIG9jY3VycyBiZWNhdXNlIGdsb2JhbFsnWm9uZSddIGFscmVhZHkgZXhpc3RzLlxuICAgICAgICAvLyBzbyB3ZSBhZGQgYSBmbGFnIHRvIGxldCB1c2VyIGNob29zZSB3aGV0aGVyIHRvIHRocm93IHRoaXMgZXJyb3Igb3Igbm90LlxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBpZiBleGlzdGluZyBab25lIGlzIGZyb20gem9uZS5qcywgd2Ugd2lsbCBub3QgdGhyb3cgdGhlIGVycm9yLlxuICAgICAgICBpZiAoY2hlY2tEdXBsaWNhdGUgfHwgdHlwZW9mIGdsb2JhbFsnWm9uZSddLl9fc3ltYm9sX18gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBhbHJlYWR5IGxvYWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxbJ1pvbmUnXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGFzcyBab25lIHtcbiAgICAgICAgY29uc3RydWN0b3IocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICBuZXcgX1pvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgYXNzZXJ0Wm9uZVBhdGNoZWQoKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGdldCByb290KCkge1xuICAgICAgICAgICAgbGV0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICB3aGlsZSAoem9uZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gem9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUYXNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgc3RhdGljIF9fbG9hZF9wYXRjaChuYW1lLCBmbiwgaWdub3JlRHVwbGljYXRlID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChwYXRjaGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gYGNoZWNrRHVwbGljYXRlYCBvcHRpb24gaXMgZGVmaW5lZCBmcm9tIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICAvLyBgaWdub3JlRHVwbGljYXRlYCBjYW4gd29yayBmb3IgdGhlIHNwZWNpZmllZCBtb2R1bGVcbiAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUR1cGxpY2F0ZSAmJiBjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJmTmFtZSA9ICdab25lOicgKyBuYW1lO1xuICAgICAgICAgICAgICAgIG1hcmsocGVyZk5hbWUpO1xuICAgICAgICAgICAgICAgIHBhdGNoZXNbbmFtZV0gPSBmbihnbG9iYWwsIFpvbmUsIF9hcGkpO1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlTWVhc3VyZShwZXJmTmFtZSwgcGVyZk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgICAgY29uc3Qgem9uZSA9IHRoaXMuZ2V0Wm9uZVdpdGgoa2V5KTtcbiAgICAgICAgICAgIGlmICh6b25lKVxuICAgICAgICAgICAgICAgIHJldHVybiB6b25lLl9wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Wm9uZVdpdGgoa2V5KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Ll9wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Ll9wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3JrKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICBpZiAoIXpvbmVTcGVjKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXAoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IF9jYWxsYmFjayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnRlcmNlcHQodGhpcywgY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcnVuKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBydW5HdWFyZGVkKGNhbGxiYWNrLCBhcHBseVRoaXMgPSBudWxsLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcnVuVGFzayh0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRhc2sgY2FuIG9ubHkgYmUgcnVuIGluIHRoZSB6b25lIG9mIGNyZWF0aW9uISAoQ3JlYXRpb246ICcgK1xuICAgICAgICAgICAgICAgICAgICAodGFzay56b25lIHx8IE5PX1pPTkUpLm5hbWUgKyAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNzc4LCBzb21ldGltZXMgZXZlbnRUYXNrXG4gICAgICAgICAgICAvLyB3aWxsIHJ1biBpbiBub3RTY2hlZHVsZWQoY2FuY2VsZWQpIHN0YXRlLCB3ZSBzaG91bGQgbm90IHRyeSB0b1xuICAgICAgICAgICAgLy8gcnVuIHN1Y2gga2luZCBvZiB0YXNrIGJ1dCBqdXN0IHJldHVyblxuICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgPT09IG5vdFNjaGVkdWxlZCAmJiAodGFzay50eXBlID09PSBldmVudFRhc2sgfHwgdGFzay50eXBlID09PSBtYWNyb1Rhc2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVFbnRyeUd1YXJkID0gdGFzay5zdGF0ZSAhPSBydW5uaW5nO1xuICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhydW5uaW5nLCBzY2hlZHVsZWQpO1xuICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gdGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gbWFjcm9UYXNrICYmIHRhc2suZGF0YSAmJiAhdGFzay5kYXRhLmlzUGVyaW9kaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYW5jZWxGbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YXNrJ3Mgc3RhdGUgaXMgbm90U2NoZWR1bGVkIG9yIHVua25vd24sIHRoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gbm90U2NoZWR1bGVkICYmIHRhc2suc3RhdGUgIT09IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBldmVudFRhc2sgfHwgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgICAgICBpZiAodGFzay56b25lICYmIHRhc2suem9uZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB0YXNrIHdhcyByZXNjaGVkdWxlZCwgdGhlIG5ld1pvbmVcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIHRoZSBjaGlsZHJlbiBvZiB0aGUgb3JpZ2luYWwgem9uZVxuICAgICAgICAgICAgICAgIGxldCBuZXdab25lID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3Wm9uZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Wm9uZSA9PT0gdGFzay56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgY2FuIG5vdCByZXNjaGVkdWxlIHRhc2sgdG8gJHt0aGlzLm5hbWV9IHdoaWNoIGlzIGRlc2NlbmRhbnRzIG9mIHRoZSBvcmlnaW5hbCB6b25lICR7dGFzay56b25lLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3Wm9uZSA9IG5ld1pvbmUucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgY29uc3Qgem9uZURlbGVnYXRlcyA9IFtdO1xuICAgICAgICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IHpvbmVEZWxlZ2F0ZXM7XG4gICAgICAgICAgICB0YXNrLl96b25lID0gdGhpcztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIHNldCB0YXNrJ3Mgc3RhdGUgdG8gdW5rbm93biB3aGVuIHNjaGVkdWxlVGFzayB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIGVyciBtYXkgZnJvbSByZXNjaGVkdWxlLCBzbyB0aGUgZnJvbVN0YXRlIG1heWJlIG5vdFNjaGVkdWxlZFxuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHNob3VsZCB3ZSBjaGVjayB0aGUgcmVzdWx0IGZyb20gaGFuZGxlRXJyb3I/XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2suX3pvbmVEZWxlZ2F0ZXMgPT09IHpvbmVEZWxlZ2F0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIGNoZWNrIGJlY2F1c2UgaW50ZXJuYWxseSB0aGUgZGVsZWdhdGUgY2FuIHJlc2NoZWR1bGUgdGhlIHRhc2suXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgPT0gc2NoZWR1bGluZykge1xuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWljcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgdW5kZWZpbmVkKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtYWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKGV2ZW50VGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbFRhc2sodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSBzY2hlZHVsZWQgJiYgdGFzay5zdGF0ZSAhPT0gcnVubmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3Qgem9uZURlbGVnYXRlcyA9IHRhc2suX3pvbmVEZWxlZ2F0ZXM7XG4gICAgICAgICAgICBpZiAoY291bnQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgem9uZURlbGVnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHpvbmVEZWxlZ2F0ZXNbaV0uX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIGNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICBab25lLl9fc3ltYm9sX18gPSBfX3N5bWJvbF9fO1xuICAgIGNvbnN0IERFTEVHQVRFX1pTID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgb25IYXNUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgaGFzVGFza1N0YXRlKSA9PiBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKSxcbiAgICAgICAgb25TY2hlZHVsZVRhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSA9PiBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKSxcbiAgICAgICAgb25JbnZva2VUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpID0+IGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyksXG4gICAgICAgIG9uQ2FuY2VsVGFzazogKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spID0+IGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKVxuICAgIH07XG4gICAgY2xhc3MgX1pvbmVEZWxlZ2F0ZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdFpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdERsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZURsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZURsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yWlMpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckN1cnJab25lKTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiZcbiAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0RsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCB6b25lU3BlY0hhc1Rhc2sgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5vbkhhc1Rhc2s7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRIYXNUYXNrID0gcGFyZW50RGVsZWdhdGUgJiYgcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUztcbiAgICAgICAgICAgIGlmICh6b25lU3BlY0hhc1Rhc2sgfHwgcGFyZW50SGFzVGFzaykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAvLyBhIGNhc2UgYWxsIHRhc2sgcmVsYXRlZCBpbnRlcmNlcHRvcnMgbXVzdCBnbyB0aHJvdWdoIHRoaXMgWkQuIFdlIGNhbid0IHNob3J0IGNpcmN1aXQgaXQuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWNIYXNUYXNrID8gem9uZVNwZWMgOiBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JrKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOlxuICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgfVxuICAgICAgICBpbnRlcmNlcHQodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUy5vbkludGVyY2VwdCh0aGlzLl9pbnRlcmNlcHREbGd0LCB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGludm9rZSh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID8gdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy5faW52b2tlQ3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3JaUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUy5vbkhhbmRsZUVycm9yKHRoaXMuX2hhbmRsZUVycm9yRGxndCwgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDpcbiAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlVGFzayh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICBsZXQgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2suX3pvbmVEZWxlZ2F0ZXMucHVzaCh0aGlzLl9oYXNUYXNrRGxndE93bmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICAgICAgICAgICAgICAgIHJldHVyblRhc2sgPSB0aGlzLl9zY2hlZHVsZVRhc2taUy5vblNjaGVkdWxlVGFzayh0aGlzLl9zY2hlZHVsZVRhc2tEbGd0LCB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9uXG4gICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5UYXNrKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnNjaGVkdWxlRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT0gbWljcm9UYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VUYXNrKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlVGFza1pTID8gdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy5faW52b2tlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgOlxuICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGFzay5jYW5jZWxGbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaGFzVGFzayh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAgICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLl9oYXNUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgX3VwZGF0ZVRhc2tDb3VudCh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBjb3VudHNbdHlwZV07XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRW1wdHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzWydtaWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzWydtYWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzazogY291bnRzWydldmVudFRhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3MgWm9uZVRhc2sge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICB0aGlzLl96b25lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnbm90U2NoZWR1bGVkJztcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBpbnZva2VUYXNrKHRhc2ssIHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgdGFzayA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzKys7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay56b25lLnJ1blRhc2sodGFzaywgdGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHpvbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsU2NoZWR1bGVSZXF1ZXN0KCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgIF90cmFuc2l0aW9uVG8odG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50eXBlfSAnJHt0aGlzLnNvdXJjZX0nOiBjYW4gbm90IHRyYW5zaXRpb24gdG8gJyR7dG9TdGF0ZX0nLCBleHBlY3Rpbmcgc3RhdGUgJyR7ZnJvbVN0YXRlMX0nJHtmcm9tU3RhdGUyID8gJyBvciBcXCcnICsgZnJvbVN0YXRlMiArICdcXCcnIDogJyd9LCB3YXMgJyR7dGhpcy5fc3RhdGV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAgICAgLy8gY2FsbCBKU09OLnN0cmluZ2lmeSh6b25lVGFzaylcbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUubmFtZSxcbiAgICAgICAgICAgICAgICBydW5Db3VudDogdGhpcy5ydW5Db3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8gIE1JQ1JPVEFTSyBRVUVVRVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gICAgY29uc3Qgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICBjb25zdCBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgIGxldCBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICBsZXQgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgIGxldCBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2U7XG4gICAgZnVuY3Rpb24gbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZnVuYykge1xuICAgICAgICBpZiAoIW5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgICAgICAgIGxldCBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlW3N5bWJvbFRoZW5dO1xuICAgICAgICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gbmF0aXZlIFByb21pc2UgaXMgbm90IHBhdGNoYWJsZSwgd2UgbmVlZCB0byB1c2UgYHRoZW5gIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgLy8gaXNzdWUgMTA3OFxuICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdGl2ZVRoZW4uY2FsbChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UsIGZ1bmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGZ1bmMsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5vdCBydW5uaW5nIGluIGFueSB0YXNrLCBhbmQgdGhlcmUgaGFzIG5vdCBiZWVuIGFueXRoaW5nIHNjaGVkdWxlZFxuICAgICAgICAvLyB3ZSBtdXN0IGJvb3RzdHJhcCB0aGUgaW5pdGlhbCB0YXNrIGNyZWF0aW9uIGJ5IG1hbnVhbGx5IHNjaGVkdWxpbmcgdGhlIGRyYWluXG4gICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09PSAwICYmIF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG4gICAgICAgICAgICAgICAgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcGkub25VbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYXBpLm1pY3JvdGFza0RyYWluRG9uZSgpO1xuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgQk9PVFNUUkFQXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgY29uc3Qgbm90U2NoZWR1bGVkID0gJ25vdFNjaGVkdWxlZCcsIHNjaGVkdWxpbmcgPSAnc2NoZWR1bGluZycsIHNjaGVkdWxlZCA9ICdzY2hlZHVsZWQnLCBydW5uaW5nID0gJ3J1bm5pbmcnLCBjYW5jZWxpbmcgPSAnY2FuY2VsaW5nJywgdW5rbm93biA9ICd1bmtub3duJztcbiAgICBjb25zdCBtaWNyb1Rhc2sgPSAnbWljcm9UYXNrJywgbWFjcm9UYXNrID0gJ21hY3JvVGFzaycsIGV2ZW50VGFzayA9ICdldmVudFRhc2snO1xuICAgIGNvbnN0IHBhdGNoZXMgPSB7fTtcbiAgICBjb25zdCBfYXBpID0ge1xuICAgICAgICBzeW1ib2w6IF9fc3ltYm9sX18sXG4gICAgICAgIGN1cnJlbnRab25lRnJhbWU6ICgpID0+IF9jdXJyZW50Wm9uZUZyYW1lLFxuICAgICAgICBvblVuaGFuZGxlZEVycm9yOiBub29wLFxuICAgICAgICBtaWNyb3Rhc2tEcmFpbkRvbmU6IG5vb3AsXG4gICAgICAgIHNjaGVkdWxlTWljcm9UYXNrOiBzY2hlZHVsZU1pY3JvVGFzayxcbiAgICAgICAgc2hvd1VuY2F1Z2h0RXJyb3I6ICgpID0+ICFab25lW19fc3ltYm9sX18oJ2lnbm9yZUNvbnNvbGVFcnJvclVuY2F1Z2h0RXJyb3InKV0sXG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXQ6ICgpID0+IFtdLFxuICAgICAgICBwYXRjaE9uUHJvcGVydGllczogbm9vcCxcbiAgICAgICAgcGF0Y2hNZXRob2Q6ICgpID0+IG5vb3AsXG4gICAgICAgIGJpbmRBcmd1bWVudHM6ICgpID0+IFtdLFxuICAgICAgICBwYXRjaFRoZW46ICgpID0+IG5vb3AsXG4gICAgICAgIHBhdGNoTWFjcm9UYXNrOiAoKSA9PiBub29wLFxuICAgICAgICBwYXRjaEV2ZW50UHJvdG90eXBlOiAoKSA9PiBub29wLFxuICAgICAgICBpc0lFT3JFZGdlOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgZ2V0R2xvYmFsT2JqZWN0czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eTogKCkgPT4gbm9vcCxcbiAgICAgICAgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIE9iamVjdENyZWF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBBcnJheVNsaWNlOiAoKSA9PiBbXSxcbiAgICAgICAgcGF0Y2hDbGFzczogKCkgPT4gbm9vcCxcbiAgICAgICAgd3JhcFdpdGhDdXJyZW50Wm9uZTogKCkgPT4gbm9vcCxcbiAgICAgICAgZmlsdGVyUHJvcGVydGllczogKCkgPT4gW10sXG4gICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZDogKCkgPT4gbm9vcCxcbiAgICAgICAgX3JlZGVmaW5lUHJvcGVydHk6ICgpID0+IG5vb3AsXG4gICAgICAgIHBhdGNoQ2FsbGJhY2tzOiAoKSA9PiBub29wLFxuICAgICAgICBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzazogbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2tcbiAgICB9O1xuICAgIGxldCBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBudWxsLCB6b25lOiBuZXcgWm9uZShudWxsLCBudWxsKSB9O1xuICAgIGxldCBfY3VycmVudFRhc2sgPSBudWxsO1xuICAgIGxldCBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID0gMDtcbiAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xufSkpKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiB8fCBnbG9iYWwpO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogU3VwcHJlc3MgY2xvc3VyZSBjb21waWxlciBlcnJvcnMgYWJvdXQgdW5rbm93biAnWm9uZScgdmFyaWFibGVcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFycyxnbG9iYWxUaGlzLG1pc3NpbmdSZXF1aXJlfVxuICovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIi8+XG4vLyBpc3N1ZSAjOTg5LCB0byByZWR1Y2UgYnVuZGxlIHNpemUsIHVzZSBzaG9ydCBuYW1lXG4vKiogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAqL1xuY29uc3QgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbi8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbmNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLyoqIE9iamVjdC5nZXRQcm90b3R5cGVPZiAqL1xuY29uc3QgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4vKiogT2JqZWN0LmNyZWF0ZSAqL1xuY29uc3QgT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbi8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbmNvbnN0IEFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4vKiogYWRkRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG4vKiogcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4vKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG5jb25zdCBaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIgPSBab25lLl9fc3ltYm9sX18oQUREX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4vKiogem9uZVN5bWJvbCByZW1vdmVFdmVudExpc3RlbmVyICovXG5jb25zdCBaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIgPSBab25lLl9fc3ltYm9sX18oUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4vKiogdHJ1ZSBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IFRSVUVfU1RSID0gJ3RydWUnO1xuLyoqIGZhbHNlIHN0cmluZyBjb25zdCAqL1xuY29uc3QgRkFMU0VfU1RSID0gJ2ZhbHNlJztcbi8qKiBab25lIHN5bWJvbCBwcmVmaXggc3RyaW5nIGNvbnN0LiAqL1xuY29uc3QgWk9ORV9TWU1CT0xfUFJFRklYID0gWm9uZS5fX3N5bWJvbF9fKCcnKTtcbmZ1bmN0aW9uIHdyYXBXaXRoQ3VycmVudFpvbmUoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgIHJldHVybiBab25lLmN1cnJlbnQud3JhcChjYWxsYmFjaywgc291cmNlKTtcbn1cbmZ1bmN0aW9uIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICByZXR1cm4gWm9uZS5jdXJyZW50LnNjaGVkdWxlTWFjcm9UYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpO1xufVxuY29uc3Qgem9uZVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXztcbmNvbnN0IGlzV2luZG93RXhpc3RzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBpbnRlcm5hbFdpbmRvdyA9IGlzV2luZG93RXhpc3RzID8gd2luZG93IDogdW5kZWZpbmVkO1xuY29uc3QgX2dsb2JhbCA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbmNvbnN0IFJFTU9WRV9BVFRSSUJVVEUgPSAncmVtb3ZlQXR0cmlidXRlJztcbmZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gd3JhcFdpdGhDdXJyZW50Wm9uZShhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn1cbmZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuICAgIGNvbnN0IHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gZm5OYW1lc1tpXTtcbiAgICAgICAgY29uc3QgZGVsZWdhdGUgPSBwcm90b3R5cGVbbmFtZV07XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKCFpc1Byb3BlcnR5V3JpdGFibGUocHJvdG90eXBlRGVzYykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXSA9ICgoZGVsZWdhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGNoZWQ7XG4gICAgICAgICAgICB9KShkZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gICAgaWYgKCFwcm9wZXJ0eURlc2MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eURlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICEodHlwZW9mIHByb3BlcnR5RGVzYy5nZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHByb3BlcnR5RGVzYy5zZXQgPT09ICd1bmRlZmluZWQnKTtcbn1cbmNvbnN0IGlzV2ViV29ya2VyID0gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKTtcbi8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGFsbHkgYnJvd3NlcmlmeVxuLy8gdGhpcyBjb2RlLlxuY29uc3QgaXNOb2RlID0gKCEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbmNvbnN0IGlzQnJvd3NlciA9ICFpc05vZGUgJiYgIWlzV2ViV29ya2VyICYmICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbi8vIHdlIGFyZSBpbiBlbGVjdHJvbiBvZiBudywgc28gd2UgYXJlIGJvdGggYnJvd3NlciBhbmQgbm9kZWpzXG4vLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRhbGx5IGJyb3dzZXJpZnlcbi8vIHRoaXMgY29kZS5cbmNvbnN0IGlzTWl4ID0gdHlwZW9mIF9nbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB7fS50b1N0cmluZy5jYWxsKF9nbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyAmJiAhaXNXZWJXb3JrZXIgJiZcbiAgICAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG5jb25zdCB6b25lU3ltYm9sRXZlbnROYW1lcyQxID0ge307XG5jb25zdCB3cmFwRm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXTtcbiAgICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdID0gem9uZVN5bWJvbCgnT05fUFJPUEVSVFknICsgZXZlbnQudHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGFyZ2V0ID09PSBpbnRlcm5hbFdpbmRvdyAmJiBldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25hdHVyZVxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yI3dpbmRvdy5vbmVycm9yXG4gICAgICAgIC8vIGFuZCBvbmVycm9yIGNhbGxiYWNrIHdpbGwgcHJldmVudCBkZWZhdWx0IHdoZW4gY2FsbGJhY2sgcmV0dXJuIHRydWVcbiAgICAgICAgY29uc3QgZXJyb3JFdmVudCA9IGV2ZW50O1xuICAgICAgICByZXN1bHQgPSBsaXN0ZW5lciAmJlxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBlcnJvckV2ZW50Lm1lc3NhZ2UsIGVycm9yRXZlbnQuZmlsZW5hbWUsIGVycm9yRXZlbnQubGluZW5vLCBlcnJvckV2ZW50LmNvbG5vLCBlcnJvckV2ZW50LmVycm9yKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiYgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQgJiYgIXJlc3VsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmZ1bmN0aW9uIHBhdGNoUHJvcGVydHkob2JqLCBwcm9wLCBwcm90b3R5cGUpIHtcbiAgICBsZXQgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgIGlmICghZGVzYyAmJiBwcm90b3R5cGUpIHtcbiAgICAgICAgLy8gd2hlbiBwYXRjaCB3aW5kb3cgb2JqZWN0LCB1c2UgcHJvdG90eXBlIHRvIGNoZWNrIHByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZURlc2MpIHtcbiAgICAgICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZSBkZXNjcmlwdG9yIG5vdCBleGlzdHMgb3IgaXMgbm90IGNvbmZpZ3VyYWJsZVxuICAgIC8vIGp1c3QgcmV0dXJuXG4gICAgaWYgKCFkZXNjIHx8ICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9uUHJvcFBhdGNoZWRTeW1ib2wgPSB6b25lU3ltYm9sKCdvbicgKyBwcm9wICsgJ3BhdGNoZWQnKTtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgY29uc3Qgb3JpZ2luYWxEZXNjR2V0ID0gZGVzYy5nZXQ7XG4gICAgY29uc3Qgb3JpZ2luYWxEZXNjU2V0ID0gZGVzYy5zZXQ7XG4gICAgLy8gc2xpY2UoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wLnNsaWNlKDIpO1xuICAgIGxldCBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdID0gem9uZVN5bWJvbCgnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICB9XG4gICAgZGVzYy5zZXQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpc3N1ZSAjOTc4LCB3aGVuIG9ubG9hZCBoYW5kbGVyIHdhcyBhZGRlZCBiZWZvcmUgbG9hZGluZyB6b25lLmpzXG4gICAgICAgIC8vIHdlIHNob3VsZCByZW1vdmUgaXQgd2l0aCBvcmlnaW5hbERlc2NTZXRcbiAgICAgICAgb3JpZ2luYWxEZXNjU2V0ICYmIG9yaWdpbmFsRGVzY1NldC5jYWxsKHRhcmdldCwgbnVsbCk7XG4gICAgICAgIHRhcmdldFtldmVudE5hbWVTeW1ib2xdID0gbmV3VmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9yaWdpbmFsRGVzY0dldCkge1xuICAgICAgICAgICAgLy8gcmVzdWx0IHdpbGwgYmUgbnVsbCB3aGVuIHVzZSBpbmxpbmUgZXZlbnQgYXR0cmlidXRlLFxuICAgICAgICAgICAgLy8gc3VjaCBhcyA8YnV0dG9uIG9uY2xpY2s9XCJmdW5jKCk7XCI+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIG9uY2xpY2sgZnVuY3Rpb24gaXMgaW50ZXJuYWwgcmF3IHVuY29tcGlsZWQgaGFuZGxlclxuICAgICAgICAgICAgLy8gdGhlIG9uY2xpY2sgd2lsbCBiZSBldmFsdWF0ZWQgd2hlbiBmaXJzdCB0aW1lIGV2ZW50IHdhcyB0cmlnZ2VyZWQgb3JcbiAgICAgICAgICAgIC8vIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZCwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNTI1XG4gICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgdXNlIG9yaWdpbmFsIG5hdGl2ZSBnZXQgdG8gcmV0cmlldmUgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsRGVzY0dldC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbUkVNT1ZFX0FUVFJJQlVURV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICBvYmpbb25Qcm9wUGF0Y2hlZFN5bWJvbF0gPSB0cnVlO1xufVxuZnVuY3Rpb24gcGF0Y2hPblByb3BlcnRpZXMob2JqLCBwcm9wZXJ0aWVzLCBwcm90b3R5cGUpIHtcbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCAnb24nICsgcHJvcGVydGllc1tpXSwgcHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChwcm9wLnNsaWNlKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgICAgICAgICBvblByb3BlcnRpZXMucHVzaChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9uUHJvcGVydGllcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIG9uUHJvcGVydGllc1tqXSwgcHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBPcmlnaW5hbENsYXNzID0gX2dsb2JhbFtjbGFzc05hbWVdO1xuICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGtlZXAgb3JpZ2luYWwgY2xhc3MgaW4gZ2xvYmFsXG4gICAgX2dsb2JhbFt6b25lU3ltYm9sKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcbiAgICBfZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgY2xhc3NOYW1lKTtcbiAgICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmcgbGlzdCB0b28gbG9uZy4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gYXR0YWNoIG9yaWdpbmFsIGRlbGVnYXRlIHRvIHBhdGNoZWQgZnVuY3Rpb25cbiAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQoX2dsb2JhbFtjbGFzc05hbWVdLCBPcmlnaW5hbENsYXNzKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgbGV0IHByb3A7XG4gICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gd3JhcFdpdGhDdXJyZW50Wm9uZShmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBjYWxsYmFjayBpbiB3cmFwcGVkIGZ1bmN0aW9uIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0sIGZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KHByb3ApKTtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnICYmIE9yaWdpbmFsQ2xhc3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICBsZXQgcHJvdG8gPSB0YXJnZXQ7XG4gICAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICB9XG4gICAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICBwcm90byA9IHRhcmdldDtcbiAgICB9XG4gICAgY29uc3QgZGVsZWdhdGVOYW1lID0gem9uZVN5bWJvbChuYW1lKTtcbiAgICBsZXQgZGVsZWdhdGUgPSBudWxsO1xuICAgIGlmIChwcm90byAmJiAoIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eShkZWxlZ2F0ZU5hbWUpKSkge1xuICAgICAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBwcm90b1tuYW1lXSBpcyB3cml0YWJsZVxuICAgICAgICAvLyBzb21lIHByb3BlcnR5IGlzIHJlYWRvbmx5IGluIHNhZmFyaSwgc3VjaCBhcyBIdG1sQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iXG4gICAgICAgIGNvbnN0IGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgICBpZiAoaXNQcm9wZXJ0eVdyaXRhYmxlKGRlc2MpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRjaERlbGVnYXRlID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcbiAgICAgICAgICAgIHByb3RvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW25hbWVdLCBkZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbGVnYXRlO1xufVxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBhdGNoTWFjcm9UYXNrKG9iaiwgZnVuY05hbWUsIG1ldGFDcmVhdG9yKSB7XG4gICAgbGV0IHNldE5hdGl2ZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS5hcmdzW2RhdGEuY2JJZHhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgc2V0TmF0aXZlID0gcGF0Y2hNZXRob2Qob2JqLCBmdW5jTmFtZSwgKGRlbGVnYXRlKSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICBjb25zdCBtZXRhID0gbWV0YUNyZWF0b3Ioc2VsZiwgYXJncyk7XG4gICAgICAgIGlmIChtZXRhLmNiSWR4ID49IDAgJiYgdHlwZW9mIGFyZ3NbbWV0YS5jYklkeF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShtZXRhLm5hbWUsIGFyZ3NbbWV0YS5jYklkeF0sIG1ldGEsIHNjaGVkdWxlVGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgb3JpZ2luYWwpIHtcbiAgICBwYXRjaGVkW3pvbmVTeW1ib2woJ09yaWdpbmFsRGVsZWdhdGUnKV0gPSBvcmlnaW5hbDtcbn1cbmxldCBpc0RldGVjdGVkSUVPckVkZ2UgPSBmYWxzZTtcbmxldCBpZU9yRWRnZSA9IGZhbHNlO1xuZnVuY3Rpb24gaXNJRSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIGlmICh1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSUVPckVkZ2UoKSB7XG4gICAgaWYgKGlzRGV0ZWN0ZWRJRU9yRWRnZSkge1xuICAgICAgICByZXR1cm4gaWVPckVkZ2U7XG4gICAgfVxuICAgIGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignRWRnZS8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGllT3JFZGdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gICAgcmV0dXJuIGllT3JFZGdlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdab25lQXdhcmVQcm9taXNlJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgY29uc3QgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBjb25zdCBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICBmdW5jdGlvbiByZWFkYWJsZU9iamVjdFRvU3RyaW5nKG9iaikge1xuICAgICAgICBpZiAob2JqICYmIG9iai50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqID8gb2JqLnRvU3RyaW5nKCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICB9XG4gICAgY29uc3QgX19zeW1ib2xfXyA9IGFwaS5zeW1ib2w7XG4gICAgY29uc3QgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uID0gZ2xvYmFsW19fc3ltYm9sX18oJ0RJU0FCTEVfV1JBUFBJTkdfVU5DQVVHSFRfUFJPTUlTRV9SRUpFQ1RJT04nKV0gPT09IHRydWU7XG4gICAgY29uc3Qgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICBjb25zdCBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgIGNvbnN0IGNyZWF0aW9uVHJhY2UgPSAnX19jcmVhdGlvblRyYWNlX18nO1xuICAgIGFwaS5vblVuaGFuZGxlZEVycm9yID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGFwaS5zaG93VW5jYXVnaHRFcnJvcigpKSB7XG4gICAgICAgICAgICBjb25zdCByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNoaWZ0KCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wgPSBfX3N5bWJvbF9fKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IFpvbmVbVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG4gICAgY29uc3Qgc3ltYm9sU3RhdGUgPSBfX3N5bWJvbF9fKCdzdGF0ZScpO1xuICAgIGNvbnN0IHN5bWJvbFZhbHVlID0gX19zeW1ib2xfXygndmFsdWUnKTtcbiAgICBjb25zdCBzeW1ib2xGaW5hbGx5ID0gX19zeW1ib2xfXygnZmluYWxseScpO1xuICAgIGNvbnN0IHN5bWJvbFBhcmVudFByb21pc2VWYWx1ZSA9IF9fc3ltYm9sX18oJ3BhcmVudFByb21pc2VWYWx1ZScpO1xuICAgIGNvbnN0IHN5bWJvbFBhcmVudFByb21pc2VTdGF0ZSA9IF9fc3ltYm9sX18oJ3BhcmVudFByb21pc2VTdGF0ZScpO1xuICAgIGNvbnN0IHNvdXJjZSA9ICdQcm9taXNlLnRoZW4nO1xuICAgIGNvbnN0IFVOUkVTT0xWRUQgPSBudWxsO1xuICAgIGNvbnN0IFJFU09MVkVEID0gdHJ1ZTtcbiAgICBjb25zdCBSRUpFQ1RFRCA9IGZhbHNlO1xuICAgIGNvbnN0IFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICh2KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgb25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdhc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcih3cmFwcGVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhc0NhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhc0NhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd3JhcHBlZEZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgVFlQRV9FUlJPUiA9ICdQcm9taXNlIHJlc29sdmVkIHdpdGggaXRzZWxmJztcbiAgICBjb25zdCBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MID0gX19zeW1ib2xfXygnY3VycmVudFRhc2tUcmFjZScpO1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvblxuICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBvbmNlV3JhcHBlciA9IG9uY2UoKTtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFRZUEVfRVJST1IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgLy8gc2hvdWxkIG9ubHkgZ2V0IHZhbHVlLnRoZW4gb25jZSBiYXNlZCBvbiBwcm9taXNlIHNwZWMuXG4gICAgICAgICAgICBsZXQgdGhlbiA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGVuID0gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgb25jZVdyYXBwZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xTdGF0ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sVmFsdWUpICYmXG4gICAgICAgICAgICAgICAgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSksIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBmYWxzZSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgYnkgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXNlIHBhcmVudCBwcm9taXNlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0YXNrIGluZm9ybWF0aW9uIGluIHZhbHVlIHdoZW4gZXJyb3Igb2NjdXJzLCBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAvLyBkbyBzb21lIGFkZGl0aW9uYWwgd29yayBzdWNoIGFzIHJlbmRlciBsb25nU3RhY2tUcmFjZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjZSA9IFpvbmUuY3VycmVudFRhc2sgJiYgWm9uZS5jdXJyZW50VGFzay5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBab25lLmN1cnJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBrZWVwIHRoZSBsb25nIHN0YWNrIHRyYWNlIGludG8gZXJyb3Igd2hlbiBpbiBsb25nU3RhY2tUcmFjZVpvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHZhbHVlLCBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdHJhY2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRF9OT19DQVRDSDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIZXJlIHdlIHRocm93cyBhIG5ldyBFcnJvciB0byBwcmludCBtb3JlIHJlYWRhYmxlIGVycm9yIGxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGlmIHRoZSB2YWx1ZSBpcyBub3QgYW4gZXJyb3IsIHpvbmUuanMgYnVpbGRzIGFuIGBFcnJvcmBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBoZXJlIHRvIGF0dGFjaCB0aGUgc3RhY2sgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IChpbiBwcm9taXNlKTogJyArIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcodmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgJiYgdmFsdWUuc3RhY2sgPyAnXFxuJyArIHZhbHVlLnN0YWNrIDogJycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGRpc2FibGUgd3JhcHBpbmcgdW5jYXVnaHQgcHJvbWlzZSByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW5zdGVhZCBvZiB3cmFwcGluZyBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRocm93T3JpZ2luYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG4gICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMucHVzaCh1bmNhdWdodFByb21pc2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGFwaS5zY2hlZHVsZU1pY3JvVGFzaygpOyAvLyB0byBtYWtlIHN1cmUgdGhhdCBpdCBpcyBydW5uaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUiA9IF9fc3ltYm9sX18oJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyk7XG4gICAgZnVuY3Rpb24gY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSkge1xuICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCBubyBjYXRjaCBzdGF0dXNcbiAgICAgICAgICAgIC8vIGFuZCBxdWV1ZS5sZW5ndGggPiAwLCBtZWFucyB0aGVyZSBpcyBhIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIGhlcmUgdG8gaGFuZGxlIHRoZSByZWplY3RlZCBwcm9taXNlLCB3ZSBzaG91bGQgdHJpZ2dlclxuICAgICAgICAgICAgLy8gd2luZG93cy5yZWplY3Rpb25oYW5kbGVkIGV2ZW50SGFuZGxlciBvciBub2RlanMgcmVqZWN0aW9uSGFuZGxlZFxuICAgICAgICAgICAgLy8gZXZlbnRIYW5kbGVyXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBab25lW1JFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVJdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7IHJlamVjdGlvbjogcHJvbWlzZVtzeW1ib2xWYWx1ZV0sIHByb21pc2U6IHByb21pc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlID09PSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzW2ldLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgIGNvbnN0IHByb21pc2VTdGF0ZSA9IHByb21pc2Vbc3ltYm9sU3RhdGVdO1xuICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHByb21pc2VTdGF0ZSA/XG4gICAgICAgICAgICAodHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nKSA/IG9uRnVsZmlsbGVkIDogZm9yd2FyZFJlc29sdXRpb24gOlxuICAgICAgICAgICAgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSA/IG9uUmVqZWN0ZWQgOlxuICAgICAgICAgICAgICAgIGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFByb21pc2VWYWx1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRmluYWxseVByb21pc2UgPSAhIWNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV07XG4gICAgICAgICAgICAgICAgaWYgKGlzRmluYWxseVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdID0gcGFyZW50UHJvbWlzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXSA9IHByb21pc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHpvbmUucnVuKGRlbGVnYXRlLCB1bmRlZmluZWQsIGlzRmluYWxseVByb21pc2UgJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZWplY3Rpb24gJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZXNvbHV0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgW10gOlxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50UHJvbWlzZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMsIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoaXMgZXJyb3JcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShjaGFpblByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNoYWluUHJvbWlzZSk7XG4gICAgfVxuICAgIGNvbnN0IFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkcgPSAnZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZSgpIHsgW25hdGl2ZSBjb2RlXSB9JztcbiAgICBjb25zdCBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIGNvbnN0IEFnZ3JlZ2F0ZUVycm9yID0gZ2xvYmFsLkFnZ3JlZ2F0ZUVycm9yO1xuICAgIGNsYXNzIFpvbmVBd2FyZVByb21pc2Uge1xuICAgICAgICBzdGF0aWMgdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORztcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyByZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVKRUNURUQsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgYW55KHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZXMgfHwgdHlwZW9mIHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlKHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgWm9uZUF3YXJlUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlc1tpXS50aGVuKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoZXJyb3JzLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgc3RhdGljIHJhY2UodmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgICAgIGxldCByZWplY3Q7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyB0aGlzKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICAgICAgcmVqZWN0ID0gcmVqO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGFsbCh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBhbGxTZXR0bGVkKHZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgUCA9IHRoaXMgJiYgdGhpcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlID8gdGhpcyA6IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICByZXR1cm4gUC5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgdGhlbkNhbGxiYWNrOiAodmFsdWUpID0+ICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIHZhbHVlIH0pLFxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IChlcnIpID0+ICh7IHN0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlcnIgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBhbGxXaXRoQ2FsbGJhY2sodmFsdWVzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgbGV0IHJlc29sdmU7XG4gICAgICAgICAgICBsZXQgcmVqZWN0O1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgdGhpcygocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RhcnQgYXQgMiB0byBwcmV2ZW50IHByZW1hdHVyZWx5IHJlc29sdmluZyBpZiAudGhlbiBpcyBjYWxsZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICBsZXQgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgICAgIGxldCB2YWx1ZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkVmFsdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY3VyVmFsdWVJbmRleCA9IHZhbHVlSW5kZXg7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2N1clZhbHVlSW5kZXhdID0gY2FsbGJhY2sgPyBjYWxsYmFjay50aGVuQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSBjYWxsYmFjay5lcnJvckNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAodGhlbkVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhlbkVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgIHZhbHVlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHVucmVzb2x2ZWRDb3VudCB6ZXJvLWJhc2VkIGFnYWluLlxuICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50IC09IDI7XG4gICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBbXTsgLy8gcXVldWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmXG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dG9yKG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCkpLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVKRUNURUQpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgICAgIHJldHVybiAnUHJvbWlzZSc7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAvLyBXZSBtdXN0IHJlYWQgYFN5bWJvbC5zcGVjaWVzYCBzYWZlbHkgYmVjYXVzZSBgdGhpc2AgbWF5IGJlIGFueXRoaW5nLiBGb3IgaW5zdGFuY2UsIGB0aGlzYFxuICAgICAgICAgICAgLy8gbWF5IGJlIGFuIG9iamVjdCB3aXRob3V0IGEgcHJvdG90eXBlIChjcmVhdGVkIHRocm91Z2ggYE9iamVjdC5jcmVhdGUobnVsbClgKTsgdGh1c1xuICAgICAgICAgICAgLy8gYHRoaXMuY29uc3RydWN0b3JgIHdpbGwgYmUgdW5kZWZpbmVkLiBPbmUgb2YgdGhlIHVzZSBjYXNlcyBpcyBTeXN0ZW1KUyBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gcHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAobW9kdWxlcykgdmlhIGBPYmplY3QuY3JlYXRlKG51bGwpYC4gVGhlIFN5c3RlbUpTIGNyZWF0ZXMgYW4gZW1wdHlcbiAgICAgICAgICAgIC8vIG9iamVjdCBhbmQgY29waWVzIHByb21pc2UgcHJvcGVydGllcyBpbnRvIHRoYXQgb2JqZWN0ICh3aXRoaW4gdGhlIGBnZXRPckNyZWF0ZUxvYWRgXG4gICAgICAgICAgICAvLyBmdW5jdGlvbikuIFRoZSB6b25lLmpzIHRoZW4gY2hlY2tzIGlmIHRoZSByZXNvbHZlZCB2YWx1ZSBoYXMgdGhlIGB0aGVuYCBtZXRob2QgYW5kIGludm9rZXNcbiAgICAgICAgICAgIC8vIGl0IHdpdGggdGhlIGB2YWx1ZWAgY29udGV4dC4gT3RoZXJ3aXNlLCB0aGlzIHdpbGwgdGhyb3cgYW4gZXJyb3I6IGBUeXBlRXJyb3I6IENhbm5vdCByZWFkXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAnU3ltYm9sKFN5bWJvbC5zcGVjaWVzKScpYC5cbiAgICAgICAgICAgIGxldCBDID0gKF9hID0gdGhpcy5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW1N5bWJvbC5zcGVjaWVzXTtcbiAgICAgICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIEMgPSB0aGlzLmNvbnN0cnVjdG9yIHx8IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgb24gdGhlIGNhbGwgdG8gYHRoZW5gIGFib3V0IHdoeSB0aGVlIGBTeW1ib2wuc3BlY2llc2AgaXMgc2FmZWx5IGFjY2Vzc2VkLlxuICAgICAgICAgICAgbGV0IEMgPSAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICAgICAgaWYgKCFDIHx8IHR5cGVvZiBDICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgQyA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9IHN5bWJvbEZpbmFsbHk7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKHRoaXNbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzW3N5bWJvbFZhbHVlXS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhaW5Qcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByb3RlY3QgYWdhaW5zdCBhZ2dyZXNzaXZlIG9wdGltaXplcnMgZHJvcHBpbmcgc2VlbWluZ2x5IHVudXNlZCBwcm9wZXJ0aWVzLlxuICAgIC8vIEUuZy4gQ2xvc3VyZSBDb21waWxlciBpbiBhZHZhbmNlZCBtb2RlLlxuICAgIFpvbmVBd2FyZVByb21pc2VbJ3Jlc29sdmUnXSA9IFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZTtcbiAgICBab25lQXdhcmVQcm9taXNlWydyZWplY3QnXSA9IFpvbmVBd2FyZVByb21pc2UucmVqZWN0O1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JhY2UnXSA9IFpvbmVBd2FyZVByb21pc2UucmFjZTtcbiAgICBab25lQXdhcmVQcm9taXNlWydhbGwnXSA9IFpvbmVBd2FyZVByb21pc2UuYWxsO1xuICAgIGNvbnN0IE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0gPSBnbG9iYWxbJ1Byb21pc2UnXTtcbiAgICBnbG9iYWxbJ1Byb21pc2UnXSA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgY29uc3Qgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihDdG9yKSB7XG4gICAgICAgIGNvbnN0IHByb3RvID0gQ3Rvci5wcm90b3R5cGU7XG4gICAgICAgIGNvbnN0IHByb3AgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sICd0aGVuJyk7XG4gICAgICAgIGlmIChwcm9wICYmIChwcm9wLndyaXRhYmxlID09PSBmYWxzZSB8fCAhcHJvcC5jb25maWd1cmFibGUpKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBDdG9yLnByb3RvdHlwZS50aGVuIHByb3BlcnR5RGVzY3JpcHRvciBpcyB3cml0YWJsZSBvciBub3RcbiAgICAgICAgICAgIC8vIGluIG1ldGVvciBlbnYsIHdyaXRhYmxlIGlzIGZhbHNlLCB3ZSBzaG91bGQgaWdub3JlIHN1Y2ggY2FzZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlZCA9IG5ldyBab25lQXdhcmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRoZW4uY2FsbCh0aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlZC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgfVxuICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgZnVuY3Rpb24gem9uZWlmeShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0UHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdG9yID0gcmVzdWx0UHJvbWlzZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmICghY3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRoZW4oY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsICdmZXRjaCcsIGRlbGVnYXRlID0+IHpvbmVpZnkoZGVsZWdhdGUpKTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBub3QgcGFydCBvZiBwdWJsaWMgQVBJLCBidXQgaXQgaXMgdXNlZnVsIGZvciB0ZXN0cywgc28gd2UgZXhwb3NlIGl0LlxuICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xufSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gb3ZlcnJpZGUgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIG1ha2Ugem9uZS5qcyBwYXRjaGVkIGZ1bmN0aW9uXG4vLyBsb29rIGxpa2UgbmF0aXZlIGZ1bmN0aW9uXG5ab25lLl9fbG9hZF9wYXRjaCgndG9TdHJpbmcnLCAoZ2xvYmFsKSA9PiB7XG4gICAgLy8gcGF0Y2ggRnVuYy5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgIGNvbnN0IG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICBjb25zdCBPUklHSU5BTF9ERUxFR0FURV9TWU1CT0wgPSB6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyk7XG4gICAgY29uc3QgUFJPTUlTRV9TWU1CT0wgPSB6b25lU3ltYm9sKCdQcm9taXNlJyk7XG4gICAgY29uc3QgRVJST1JfU1lNQk9MID0gem9uZVN5bWJvbCgnRXJyb3InKTtcbiAgICBjb25zdCBuZXdGdW5jdGlvblRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxEZWxlZ2F0ZSA9IHRoaXNbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbERlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbERlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXRpdmVQcm9taXNlID0gZ2xvYmFsW1BST01JU0VfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF0aXZlRXJyb3IgPSBnbG9iYWxbRVJST1JfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG5hdGl2ZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgbmV3RnVuY3Rpb25Ub1N0cmluZ1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdID0gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nO1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG4gICAgLy8gcGF0Y2ggT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgY29uc3Qgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgY29uc3QgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RUb1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5sZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vdGU6IFdlIHBhc3MgdGhlIGBvcHRpb25zYCBvYmplY3QgYXMgdGhlIGV2ZW50IGhhbmRsZXIgdG9vLiBUaGlzIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlXG4gICAgICAgIC8vIHNpZ25hdHVyZSBvZiBgYWRkRXZlbnRMaXN0ZW5lcmAgb3IgYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGJ1dCBlbmFibGVzIHVzIHRvIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgICAgICAvLyB3aXRob3V0IGFuIGFjdHVhbCBoYW5kbGVyLlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG4vLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxuY29uc3QgT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBID0ge1xuICAgIHVzZUc6IHRydWVcbn07XG5jb25zdCB6b25lU3ltYm9sRXZlbnROYW1lcyA9IHt9O1xuY29uc3QgZ2xvYmFsU291cmNlcyA9IHt9O1xuY29uc3QgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IG5ldyBSZWdFeHAoJ14nICsgWk9ORV9TWU1CT0xfUFJFRklYICsgJyhcXFxcdyspKHRydWV8ZmFsc2UpJCcpO1xuY29uc3QgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9IHpvbmVTeW1ib2woJ3Byb3BhZ2F0aW9uU3RvcHBlZCcpO1xuZnVuY3Rpb24gcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZykge1xuICAgIGNvbnN0IGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gICAgY29uc3QgdHJ1ZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgVFJVRV9TVFI7XG4gICAgY29uc3Qgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgY29uc3Qgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgYXBpcywgcGF0Y2hPcHRpb25zKSB7XG4gICAgY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuYWRkKSB8fCBBRERfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIGNvbnN0IFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIGNvbnN0IExJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmxpc3RlbmVycykgfHwgJ2V2ZW50TGlzdGVuZXJzJztcbiAgICBjb25zdCBSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtQWxsKSB8fCAncmVtb3ZlQWxsTGlzdGVuZXJzJztcbiAgICBjb25zdCB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICBjb25zdCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgQUREX0VWRU5UX0xJU1RFTkVSICsgJzonO1xuICAgIGNvbnN0IFBSRVBFTkRfRVZFTlRfTElTVEVORVIgPSAncHJlcGVuZExpc3RlbmVyJztcbiAgICBjb25zdCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgY29uc3QgaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGV2ZW50KSB7XG4gICAgICAgIC8vIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsIGNoZWNrIGlzUmVtb3ZlZCB3aGljaCBpcyBzZXRcbiAgICAgICAgLy8gYnkgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICBpZiAodGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdvYmplY3QnICYmIGRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGJpbmQgdmVyc2lvbiBvZiBoYW5kbGVFdmVudCB3aGVuIGludm9rZVxuICAgICAgICAgICAgdGFzay5jYWxsYmFjayA9IChldmVudCkgPT4gZGVsZWdhdGUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW52b2tlIHN0YXRpYyB0YXNrLmludm9rZVxuICAgICAgICAvLyBuZWVkIHRvIHRyeS9jYXRjaCBlcnJvciBoZXJlLCBvdGhlcndpc2UsIHRoZSBlcnJvciBpbiBvbmUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gd2lsbCBicmVhayB0aGUgZXhlY3V0aW9ucyBvZiB0aGUgb3RoZXIgZXZlbnQgbGlzdGVuZXJzLiBBbHNvIGVycm9yIHdpbGxcbiAgICAgICAgLy8gbm90IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiBgb25jZWAgb3B0aW9ucyBpcyB0cnVlLlxuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXNrLmludm9rZSh0YXNrLCB0YXJnZXQsIFtldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0YXNrLm9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLm9uY2UpIHtcbiAgICAgICAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgICAgICAgLy8gb25seSBicm93c2VyIG5lZWQgdG8gZG8gdGhpcywgbm9kZWpzIGV2ZW50RW1pdHRlciB3aWxsIGNhbCByZW1vdmVMaXN0ZW5lclxuICAgICAgICAgICAgLy8gaW5zaWRlIEV2ZW50RW1pdHRlci5vbmNlXG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICB0YXJnZXRbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRhcmdldCwgZXZlbnQudHlwZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdsb2JhbENhbGxiYWNrKGNvbnRleHQsIGV2ZW50LCBpc0NhcHR1cmUpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNvbnRleHQgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdW2lzQ2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXV07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAgICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgICAgICAgICAvLyBjb3B5IHRoZSB0YXNrcyBhcnJheSBiZWZvcmUgaW52b2tlLCB0byBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3B5VGFza3MgPSB0YXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudFtJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gaW52b2tlVGFzayhjb3B5VGFza3NbaV0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcnIgJiYgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGVyZSBpcyBvbmx5IG9uZSBlcnJvciwgd2UgZG9uJ3QgbmVlZCB0byBzY2hlZHVsZSBtaWNyb1Rhc2tcbiAgICAgICAgICAgIC8vIHRvIHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICBhcGkubmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IGZhbHNlXG4gICAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbENhbGxiYWNrKHRoaXMsIGV2ZW50LCBmYWxzZSk7XG4gICAgfTtcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gdHJ1ZVxuICAgIGNvbnN0IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIHRydWUpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXNlR2xvYmFsQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy51c2VHICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVzZUdsb2JhbENhbGxiYWNrID0gcGF0Y2hPcHRpb25zLnVzZUc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgbGV0IGNoZWNrRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvdG8gPSBvYmo7XG4gICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90byAmJiBvYmpbQUREX0VWRU5UX0xJU1RFTkVSXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudE5hbWVUb1N0cmluZyA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZXZlbnROYW1lVG9TdHJpbmc7XG4gICAgICAgIC8vIGEgc2hhcmVkIGdsb2JhbCB0YXNrRGF0YSB0byBwYXNzIGRhdGEgZm9yIHNjaGVkdWxlRXZlbnRUYXNrXG4gICAgICAgIC8vIHNvIHdlIGRvIG5vdCBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QganVzdCBmb3IgcGFzcyBzb21lIGRhdGFcbiAgICAgICAgY29uc3QgdGFza0RhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sKFJFTU9WRV9FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGNvbnN0IG5hdGl2ZUxpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2woTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgY29uc3QgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgbGV0IG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHV0aWwgZnVuY3Rpb24gd2lsbCBidWlsZCBhbiBvcHRpb24gb2JqZWN0IHdpdGggcGFzc2l2ZSBvcHRpb25cbiAgICAgICAgICogdG8gaGFuZGxlIGFsbCBwb3NzaWJsZSBpbnB1dCBmcm9tIHRoZSB1c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhvcHRpb25zLCBwYXNzaXZlKSB7XG4gICAgICAgICAgICBpZiAoIXBhc3NpdmVTdXBwb3J0ZWQgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkb2Vzbid0IHN1cHBvcnQgcGFzc2l2ZSBidXQgdXNlciB3YW50IHRvIHBhc3MgYW4gb2JqZWN0IGFzIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG5vdCB3b3JrIG9uIHNvbWUgb2xkIGJyb3dzZXIsIHNvIHdlIGp1c3QgcGFzcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAvLyBhcyB1c2VDYXB0dXJlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIHJldHVybiAhIW9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCB8fCAhcGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjYXB0dXJlOiBvcHRpb25zLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMucGFzc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VzdG9tU2NoZWR1bGVHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlLFxuICAgICAgICAgICAgLy8ganVzdCByZXR1cm4sIGJlY2F1c2Ugd2UgdXNlIHRoZSBzaGFyZWQgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgaGVyZS5cbiAgICAgICAgICAgIGlmICh0YXNrRGF0YS5pc0V4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFza0RhdGEuY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgICAgICAgLy8gZnJvbSBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSB0YXNrXG4gICAgICAgICAgICAvLyBmcm9tIHRhc2tzTGlzdCBvZiB0YXJnZXQgZmlyc3RcbiAgICAgICAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbdGFzay5ldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBzeW1ib2xFdmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBzeW1ib2xFdmVudE5hbWUgJiYgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFzayA9IGV4aXN0aW5nVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgLy8gd2Ugd2lsbCByZWFsbHkgcmVtb3ZlIHRoZSBnbG9iYWwgZXZlbnQgY2FsbGJhY2ssXG4gICAgICAgICAgICAvLyBpZiBub3QsIHJldHVyblxuICAgICAgICAgICAgaWYgKCF0YXNrLmFsbFJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2sub3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1c3RvbUNhbmNlbE5vbkdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21TY2hlZHVsZUdsb2JhbCA6IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsO1xuICAgICAgICBjb25zdCBjdXN0b21DYW5jZWwgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbUNhbmNlbEdsb2JhbCA6IGN1c3RvbUNhbmNlbE5vbkdsb2JhbDtcbiAgICAgICAgY29uc3QgY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGUgPSBmdW5jdGlvbiAodGFzaywgZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVPZkRlbGVnYXRlID0gdHlwZW9mIGRlbGVnYXRlO1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSkgfHxcbiAgICAgICAgICAgICAgICAodHlwZU9mRGVsZWdhdGUgPT09ICdvYmplY3QnICYmIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9PT0gZGVsZWdhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wYXJlID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZikgPyBwYXRjaE9wdGlvbnMuZGlmZiA6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlO1xuICAgICAgICBjb25zdCB1bnBhdGNoZWRFdmVudHMgPSBab25lW3pvbmVTeW1ib2woJ1VOUEFUQ0hFRF9FVkVOVFMnKV07XG4gICAgICAgIGNvbnN0IHBhc3NpdmVFdmVudHMgPSBfZ2xvYmFsW3pvbmVTeW1ib2woJ1BBU1NJVkVfRVZFTlRTJyldO1xuICAgICAgICBjb25zdCBtYWtlQWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAobmF0aXZlTGlzdGVuZXIsIGFkZFNvdXJjZSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4sIHJldHVyblRhcmdldCA9IGZhbHNlLCBwcmVwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNOb2RlICYmIGV2ZW50TmFtZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBwYXRjaCB1bmNhdWdodEV4Y2VwdGlvbiBvZiBub2RlanMgdG8gcHJldmVudCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSBmdW5jdGlvbiBmb3IgaGFuZGxlRXZlbnRcbiAgICAgICAgICAgICAgICAvLyBjYXNlIGhlcmUgdG8gaW1wcm92ZSBhZGRFdmVudExpc3RlbmVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgd2hlbiBpbnZva2VcbiAgICAgICAgICAgICAgICBsZXQgaXNIYW5kbGVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUhhbmRsZXIgJiYgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3NpdmUgPSBwYXNzaXZlU3VwcG9ydGVkICYmICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMoYXJndW1lbnRzWzJdLCBwYXNzaXZlKTtcbiAgICAgICAgICAgICAgICBpZiAodW5wYXRjaGVkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHVucGF0Y2hlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5wYXRjaGVkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSB1bnBhdGNoZWRFdmVudHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25jZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5vbmNlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICBsZXQgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSwgZXZlbnROYW1lVG9TdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgbGV0IGlzRXhpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGFzayByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgICAgIGlzRXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFza3NbaV0sIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYW1lIGNhbGxiYWNrLCBzYW1lIGNhcHR1cmUsIHNhbWUgZXZlbnQgbmFtZSwganVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzb3VyY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ107XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGNvbnN0cnVjdG9yTmFtZSArIGFkZFNvdXJjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSBhIG5ldyBvYmplY3QgYXMgdGFzay5kYXRhIHRvIHBhc3MgdGhvc2UgdGhpbmdzXG4gICAgICAgICAgICAgICAgLy8ganVzdCB1c2UgdGhlIGdsb2JhbCBzaGFyZWQgb25lXG4gICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIG9uY2Ugb3B0aW9ucywgd2UgZG9uJ3QgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciwgaW5zdGVhZCB3ZSBrZWVwIHRoZSBvbmNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGhhbmRsZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlzRXhpc3RpbmcgPSBpc0V4aXN0aW5nO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1c2VHbG9iYWxDYWxsYmFjayA/IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRhc2tEYXRhIGludG8gZGF0YSB0byBhbGxvdyBvblNjaGVkdWxlRXZlbnRUYXNrIHRvIGFjY2VzcyB0aGUgdGFzayBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSB0YXNrRGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4pO1xuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBjbGVhciB0YXNrRGF0YS50YXJnZXQgdG8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgICAgICAgICAgICAgICAvLyBpc3N1ZSwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA0NDJcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gY2xlYXIgdXAgdGFza0RhdGEgYmVjYXVzZSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0byBzYXZlIHRob3NlIGluZm9ybWF0aW9uIHRvIHRhc2sgaW4gY2FzZVxuICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2YgdGFzay5vcHRpb25zID09PSAnYm9vbGVhbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBzdXBwb3J0IHBhc3NpdmUsIGFuZCB3ZSBwYXNzIGFuIG9wdGlvbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWRkRXZlbnRMaXN0ZW5lciwgd2Ugc2hvdWxkIHNhdmUgdGhlIG9wdGlvbnMgdG8gdGFza1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB0YXNrLmNhcHR1cmUgPSBjYXB0dXJlO1xuICAgICAgICAgICAgICAgIHRhc2suZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgb3JpZ2luYWwgZGVsZWdhdGUgZm9yIGNvbXBhcmUgdG8gY2hlY2sgZHVwbGljYXRlXG4gICAgICAgICAgICAgICAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXByZXBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSA9IG1ha2VBZGRMaXN0ZW5lcihuYXRpdmVBZGRFdmVudExpc3RlbmVyLCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQpO1xuICAgICAgICBpZiAobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHByb3RvW1BSRVBFTkRfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSwgY3VzdG9tU2NoZWR1bGVQcmVwZW5kLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIGlmICghZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJlxuICAgICAgICAgICAgICAgICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZTtcbiAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFzayA9IGV4aXN0aW5nVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFzaywgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSB0YXJnZXQsIHdlIGhhdmUgYW4gZXZlbnQgbGlzdGVuZXIgd2hpY2ggaXMgYWRkZWQgYnkgb25fcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNoIGFzIHRhcmdldC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7fSwgc28gd2UgbmVlZCB0byBjbGVhciB0aGlzIGludGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG9vIGlmIGFsbCBkZWxlZ2F0ZXMgYWxsIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25Qcm9wZXJ0eVN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArICdPTl9QUk9QRVJUWScgKyBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtvblByb3BlcnR5U3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLnpvbmUuY2FuY2VsVGFzayhleGlzdGluZ1Rhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpc3N1ZSA5MzAsIGRpZG4ndCBmaW5kIHRoZSBldmVudCBuYW1lIG9yIGNhbGxiYWNrXG4gICAgICAgICAgICAvLyBmcm9tIHpvbmUga2VwdCBleGlzdGluZ1Rhc2tzLCB0aGUgY2FsbGJhY2sgbWF5YmVcbiAgICAgICAgICAgIC8vIGFkZGVkIG91dHNpZGUgb2Ygem9uZSwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAvLyB0byB0cnkgdG8gcmVtb3ZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgICB9O1xuICAgICAgICBwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBub2RlanMgRXZlbnRFbWl0dGVyLCByZW1vdmVMaXN0ZW5lciBldmVudCBpc1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2VkIGZvciBtb25pdG9yaW5nIHRoZSByZW1vdmVMaXN0ZW5lciBjYWxsLFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBqdXN0IGtlZXAgcmVtb3ZlTGlzdGVuZXIgZXZlbnRMaXN0ZW5lciB1bnRpbFxuICAgICAgICAgICAgICAgICAgICAvLyBhbGwgb3RoZXIgZXZlbnRMaXN0ZW5lcnMgYXJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dE5hbWUgJiYgZXZ0TmFtZSAhPT0gJ3JlbW92ZUxpc3RlbmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgcmVtb3ZlTGlzdGVuZXIgbGlzdGVuZXIgZmluYWxseVxuICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xDYXB0dXJlRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tUUlVFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVUYXNrcyA9IHRhcmdldFtzeW1ib2xDYXB0dXJlRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZVRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IGNhcHR1cmVUYXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUxpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhhcGlzW2ldLCBwYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmZ1bmN0aW9uIGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3QgZm91bmRUYXNrcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICBsZXQgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgaWYgKGV2dE5hbWUgJiYgKCFldmVudE5hbWUgfHwgZXZ0TmFtZSA9PT0gZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFRhc2tzLnB1c2godGFza3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFRhc2tzO1xuICAgIH1cbiAgICBsZXQgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZSkge1xuICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUpO1xuICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgIH1cbiAgICBjb25zdCBjYXB0dXJlRmFsc2VUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbRkFMU0VfU1RSXV07XG4gICAgY29uc3QgY2FwdHVyZVRydWVUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbVFJVRV9TVFJdXTtcbiAgICBpZiAoIWNhcHR1cmVGYWxzZVRhc2tzKSB7XG4gICAgICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZVRydWVUYXNrcy5zbGljZSgpIDogW107XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVGYWxzZVRhc2tzLmNvbmNhdChjYXB0dXJlVHJ1ZVRhc2tzKSA6XG4gICAgICAgICAgICBjYXB0dXJlRmFsc2VUYXNrcy5zbGljZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpIHtcbiAgICBjb25zdCBFdmVudCA9IGdsb2JhbFsnRXZlbnQnXTtcbiAgICBpZiAoRXZlbnQgJiYgRXZlbnQucHJvdG90eXBlKSB7XG4gICAgICAgIGFwaS5wYXRjaE1ldGhvZChFdmVudC5wcm90b3R5cGUsICdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nLCAoZGVsZWdhdGUpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBzZWxmW0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2FsbCB0aGUgbmF0aXZlIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxuICAgICAgICAgICAgLy8gaW4gY2FzZSBpbiBzb21lIGh5YnJpZCBhcHBsaWNhdGlvbiwgc29tZSBwYXJ0IG9mXG4gICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiB3aWxsIGJlIGNvbnRyb2xsZWQgYnkgem9uZSwgc29tZSBhcmUgbm90XG4gICAgICAgICAgICBkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICAgIGNvbnN0IHN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXyhtZXRob2QpO1xuICAgIGlmICh0YXJnZXRbc3ltYm9sXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5hdGl2ZURlbGVnYXRlID0gdGFyZ2V0W3N5bWJvbF0gPSB0YXJnZXRbbWV0aG9kXTtcbiAgICB0YXJnZXRbbWV0aG9kXSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBgJHt0YXJnZXROYW1lfS4ke21ldGhvZH06OmAgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBvcHRzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGUgYHBhdGNoQ2FsbGJhY2tzYCBpcyB1c2VkIGZvciBwYXRjaGluZyB0aGUgYGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudGAgYW5kXG4gICAgICAgICAgICAgICAgLy8gYGN1c3RvbUVsZW1lbnRzLmRlZmluZWAuIFdlIGV4cGxpY2l0bHkgd3JhcCB0aGUgcGF0Y2hpbmcgY29kZSBpbnRvIHRyeS1jYXRjaCBzaW5jZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrcyBtYXkgYmUgYWxyZWFkeSBwYXRjaGVkIGJ5IG90aGVyIHdlYiBjb21wb25lbnRzIGZyYW1ld29ya3MgKGUuZy4gTFdDKSwgYW5kIHRoZXlcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRob3NlIHByb3BlcnRpZXMgbm9uLXdyaXRhYmxlLiBUaGlzIG1lYW5zIHRoYXQgcGF0Y2hpbmcgY2FsbGJhY2sgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIGBjYW5ub3QgYXNzaWduIHRvIHJlYWQtb25seSBwcm9wZXJ0eWAuIFNlZSB0aGlzIGNvZGUgYXMgYW4gZXhhbXBsZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2FsZXNmb3JjZS9sd2MvYmxvYi9tYXN0ZXIvcGFja2FnZXMvQGx3Yy9lbmdpbmUtY29yZS9zcmMvZnJhbWV3b3JrL2Jhc2UtYnJpZGdlLWVsZW1lbnQudHMjTDE4MC1MMTg2XG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdG9wIHRoZSBhcHBsaWNhdGlvbiByZW5kZXJpbmcgaWYgd2UgY291bGRuJ3QgcGF0Y2ggc29tZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrLCBlLmcuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogd2UgbGVhdmUgdGhlIGNhdGNoIGJsb2NrIGVtcHR5IHNpbmNlIHRoZXJlJ3Mgbm8gd2F5IHRvIGhhbmRsZSB0aGUgZXJyb3IgcmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBub24td3JpdGFibGUgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGVnYXRlLmNhbGwodGFyZ2V0LCBuYW1lLCBvcHRzLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGFyZ2V0W21ldGhvZF0sIG5hdGl2ZURlbGVnYXRlKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzIHx8IGlnbm9yZVByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIGNvbnN0IHRpcCA9IGlnbm9yZVByb3BlcnRpZXMuZmlsdGVyKGlwID0+IGlwLnRhcmdldCA9PT0gdGFyZ2V0KTtcbiAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElnbm9yZVByb3BlcnRpZXMgPSB0aXBbMF0uaWdub3JlUHJvcGVydGllcztcbiAgICByZXR1cm4gb25Qcm9wZXJ0aWVzLmZpbHRlcihvcCA9PiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYXZhaWxhYmxlLCBzb21ldGltZXMgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZFByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICBwYXRjaE9uUHJvcGVydGllcyh0YXJnZXQsIGZpbHRlcmVkUHJvcGVydGllcywgcHJvdG90eXBlKTtcbn1cbi8qKlxuICogR2V0IGFsbCBldmVudCBuYW1lIHByb3BlcnRpZXMgd2hpY2ggdGhlIGV2ZW50IG5hbWUgc3RhcnRzV2l0aCBgb25gXG4gKiBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IGl0c2VsZiwgaW5oZXJpdGVkIHByb3BlcnRpZXMgYXJlIG5vdCBjb25zaWRlcmVkLlxuICovXG5mdW5jdGlvbiBnZXRPbkV2ZW50TmFtZXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgICAgLmZpbHRlcihuYW1lID0+IG5hbWUuc3RhcnRzV2l0aCgnb24nKSAmJiBuYW1lLmxlbmd0aCA+IDIpXG4gICAgICAgIC5tYXAobmFtZSA9PiBuYW1lLnN1YnN0cmluZygyKSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgICAgIC8vIGV2ZW50cyBhcmUgYWxyZWFkeSBiZWVuIHBhdGNoZWQgYnkgbGVnYWN5IHBhdGNoLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlnbm9yZVByb3BlcnRpZXMgPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG4gICAgbGV0IHBhdGNoVGFyZ2V0cyA9IFtdO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxXaW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHBhdGNoVGFyZ2V0cyA9IHBhdGNoVGFyZ2V0cy5jb25jYXQoW1xuICAgICAgICAgICAgJ0RvY3VtZW50JywgJ1NWR0VsZW1lbnQnLCAnRWxlbWVudCcsICdIVE1MRWxlbWVudCcsICdIVE1MQm9keUVsZW1lbnQnLCAnSFRNTE1lZGlhRWxlbWVudCcsXG4gICAgICAgICAgICAnSFRNTEZyYW1lU2V0RWxlbWVudCcsICdIVE1MRnJhbWVFbGVtZW50JywgJ0hUTUxJRnJhbWVFbGVtZW50JywgJ0hUTUxNYXJxdWVlRWxlbWVudCcsICdXb3JrZXInXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBpZ25vcmVFcnJvclByb3BlcnRpZXMgPSBpc0lFKCkgPyBbeyB0YXJnZXQ6IGludGVybmFsV2luZG93LCBpZ25vcmVQcm9wZXJ0aWVzOiBbJ2Vycm9yJ10gfV0gOiBbXTtcbiAgICAgICAgLy8gaW4gSUUvRWRnZSwgb25Qcm9wIG5vdCBleGlzdCBpbiB3aW5kb3cgb2JqZWN0LCBidXQgaW4gV2luZG93UHJvdG90eXBlXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcGFzcyBXaW5kb3dQcm90b3R5cGUgdG8gY2hlY2sgb25Qcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvdywgZ2V0T25FdmVudE5hbWVzKGludGVybmFsV2luZG93KSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvdykpO1xuICAgIH1cbiAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFtcbiAgICAgICAgJ1hNTEh0dHBSZXF1ZXN0JywgJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnLCAnSURCSW5kZXgnLCAnSURCUmVxdWVzdCcsICdJREJPcGVuREJSZXF1ZXN0JyxcbiAgICAgICAgJ0lEQkRhdGFiYXNlJywgJ0lEQlRyYW5zYWN0aW9uJywgJ0lEQkN1cnNvcicsICdXZWJTb2NrZXQnXG4gICAgXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRjaFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gX2dsb2JhbFtwYXRjaFRhcmdldHNbaV1dO1xuICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXModGFyZ2V0LnByb3RvdHlwZSwgZ2V0T25FdmVudE5hbWVzKHRhcmdldC5wcm90b3R5cGUpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3V0aWwnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICAvLyBDb2xsZWN0IG5hdGl2ZSBldmVudCBuYW1lcyBieSBsb29raW5nIGF0IHByb3BlcnRpZXNcbiAgICAvLyBvbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZSwgZS5nLiAnb25jbGljaycuXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IGdldE9uRXZlbnROYW1lcyhnbG9iYWwpO1xuICAgIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICAgIGFwaS5wYXRjaE1ldGhvZCA9IHBhdGNoTWV0aG9kO1xuICAgIGFwaS5iaW5kQXJndW1lbnRzID0gYmluZEFyZ3VtZW50cztcbiAgICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgICAvLyBJbiBlYXJsaWVyIHZlcnNpb24gb2Ygem9uZS5qcyAoPDAuOS4wKSwgd2UgdXNlIGVudiBuYW1lIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCB0b1xuICAgIC8vIGRlZmluZSB3aGljaCBldmVudHMgd2lsbCBub3QgYmUgcGF0Y2hlZCBieSBgWm9uZS5qc2AuXG4gICAgLy8gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlIGNoYW5nZSB0aGUgZW52IG5hbWUgdG8gYF9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFNgIHRvIGtlZXBcbiAgICAvLyB0aGUgbmFtZSBjb25zaXN0ZW50IHdpdGggYW5ndWxhciByZXBvLlxuICAgIC8vIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZSBzdXBwb3J0ZWQgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgY29uc3QgU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ0JMQUNLX0xJU1RFRF9FVkVOVFMnKTtcbiAgICBjb25zdCBTWU1CT0xfVU5QQVRDSEVEX0VWRU5UUyA9IFpvbmUuX19zeW1ib2xfXygnVU5QQVRDSEVEX0VWRU5UUycpO1xuICAgIGlmIChnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdKSB7XG4gICAgICAgIGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdO1xuICAgIH1cbiAgICBpZiAoZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSkge1xuICAgICAgICBab25lW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IFpvbmVbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdID1cbiAgICAgICAgICAgIGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU107XG4gICAgfVxuICAgIGFwaS5wYXRjaEV2ZW50UHJvdG90eXBlID0gcGF0Y2hFdmVudFByb3RvdHlwZTtcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldCA9IHBhdGNoRXZlbnRUYXJnZXQ7XG4gICAgYXBpLmlzSUVPckVkZ2UgPSBpc0lFT3JFZGdlO1xuICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdERlZmluZVByb3BlcnR5O1xuICAgIGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgYXBpLk9iamVjdENyZWF0ZSA9IE9iamVjdENyZWF0ZTtcbiAgICBhcGkuQXJyYXlTbGljZSA9IEFycmF5U2xpY2U7XG4gICAgYXBpLnBhdGNoQ2xhc3MgPSBwYXRjaENsYXNzO1xuICAgIGFwaS53cmFwV2l0aEN1cnJlbnRab25lID0gd3JhcFdpdGhDdXJyZW50Wm9uZTtcbiAgICBhcGkuZmlsdGVyUHJvcGVydGllcyA9IGZpbHRlclByb3BlcnRpZXM7XG4gICAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCA9IGF0dGFjaE9yaWdpblRvUGF0Y2hlZDtcbiAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzID0gcGF0Y2hDYWxsYmFja3M7XG4gICAgYXBpLmdldEdsb2JhbE9iamVjdHMgPSAoKSA9PiAoe1xuICAgICAgICBnbG9iYWxTb3VyY2VzLFxuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lcyxcbiAgICAgICAgZXZlbnROYW1lcyxcbiAgICAgICAgaXNCcm93c2VyLFxuICAgICAgICBpc01peCxcbiAgICAgICAgaXNOb2RlLFxuICAgICAgICBUUlVFX1NUUixcbiAgICAgICAgRkFMU0VfU1RSLFxuICAgICAgICBaT05FX1NZTUJPTF9QUkVGSVgsXG4gICAgICAgIEFERF9FVkVOVF9MSVNURU5FUl9TVFIsXG4gICAgICAgIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJcbiAgICB9KTtcbn0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmNvbnN0IHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sKCd6b25lVGFzaycpO1xuZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICBsZXQgc2V0TmF0aXZlID0gbnVsbDtcbiAgICBsZXQgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgY29uc3QgdGFza3NCeUhhbmRsZUlkID0ge307XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmNhbGwod2luZG93LCB0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgIH1cbiAgICBzZXROYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIChkZWxlZ2F0ZSkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUtOTM0LCB0YXNrIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBldmVuIGl0IGlzIGEgcGVyaW9kaWMgdGFzayBzdWNoIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNDAzODdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFudXAgdGFza3NCeUhhbmRsZUlkIHNob3VsZCBiZSBoYW5kbGVkIGJlZm9yZSBzY2hlZHVsZVRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHNvbWUgem9uZVNwZWMgbWF5IGludGVyY2VwdCBhbmQgZG9lc24ndCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZUZuKHNjaGVkdWxlVGFzaykgcHJvdmlkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlSWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG5vbi1ub2RlanMgZW52LCB3ZSByZW1vdmUgdGltZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbb3B0aW9ucy5oYW5kbGVJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuaGFuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9kZSByZXR1cm5zIGNvbXBsZXggb2JqZWN0cyBhcyBoYW5kbGVJZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRhc2sgcmVmZXJlbmNlIGZyb20gdGltZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9uIG5vZGVqcyBlbnYsIHdlIHNhdmUgaGFuZGxlSWQ6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInIHx8IGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCAoZGVsZWdhdGUpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGFyZ3NbMF07XG4gICAgICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uIG5vZGVqcyBlbnYuXG4gICAgICAgICAgICAgICAgdGFzayA9IHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgIHRhc2sgPSBpZCAmJiBpZFt0YXNrU3ltYm9sXTtcbiAgICAgICAgICAgICAgICAvLyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSBpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSAnbm90U2NoZWR1bGVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAodGFzay5jYW5jZWxGbiAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYyB8fCB0YXNrLnJ1bkNvdW50ID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gcGF0Y2hDdXN0b21FbGVtZW50cyhfZ2xvYmFsLCBhcGkpIHtcbiAgICBjb25zdCB7IGlzQnJvd3NlciwgaXNNaXggfSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCk7XG4gICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgIV9nbG9iYWxbJ2N1c3RvbUVsZW1lbnRzJ10gfHwgISgnY3VzdG9tRWxlbWVudHMnIGluIF9nbG9iYWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2tzID0gWydjb25uZWN0ZWRDYWxsYmFjaycsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycsICdhZG9wdGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gZXZlbnRUYXJnZXRQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICBpZiAoWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldKSB7XG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IGlzIGFscmVhZHkgcGF0Y2hlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGV2ZW50TmFtZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzLCBUUlVFX1NUUiwgRkFMU0VfU1RSLCBaT05FX1NZTUJPTF9QUkVGSVggfSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCk7XG4gICAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgY29uc3QgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgIGNvbnN0IHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgICAgIGNvbnN0IHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgIH1cbiAgICBjb25zdCBFVkVOVF9UQVJHRVQgPSBfZ2xvYmFsWydFdmVudFRhcmdldCddO1xuICAgIGlmICghRVZFTlRfVEFSR0VUIHx8ICFFVkVOVF9UQVJHRVQucHJvdG90eXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBbRVZFTlRfVEFSR0VUICYmIEVWRU5UX1RBUkdFVC5wcm90b3R5cGVdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpIHtcbiAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ2xlZ2FjeScsIChnbG9iYWwpID0+IHtcbiAgICBjb25zdCBsZWdhY3lQYXRjaCA9IGdsb2JhbFtab25lLl9fc3ltYm9sX18oJ2xlZ2FjeVBhdGNoJyldO1xuICAgIGlmIChsZWdhY3lQYXRjaCkge1xuICAgICAgICBsZWdhY3lQYXRjaCgpO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3F1ZXVlTWljcm90YXNrJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgYXBpLnBhdGNoTWV0aG9kKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJywgZGVsZWdhdGUgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIFpvbmUuY3VycmVudC5zY2hlZHVsZU1pY3JvVGFzaygncXVldWVNaWNyb3Rhc2snLCBhcmdzWzBdKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3RpbWVycycsIChnbG9iYWwpID0+IHtcbiAgICBjb25zdCBzZXQgPSAnc2V0JztcbiAgICBjb25zdCBjbGVhciA9ICdjbGVhcic7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdUaW1lb3V0Jyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbnRlcnZhbCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCAoZ2xvYmFsKSA9PiB7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnbW96UmVxdWVzdCcsICdtb3pDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3dlYmtpdFJlcXVlc3QnLCAnd2Via2l0Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdibG9ja2luZycsIChnbG9iYWwsIFpvbmUpID0+IHtcbiAgICBjb25zdCBibG9ja2luZ01ldGhvZHMgPSBbJ2FsZXJ0JywgJ3Byb21wdCcsICdjb25maXJtJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja2luZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGJsb2NraW5nTWV0aG9kc1tpXTtcbiAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lLCAoZGVsZWdhdGUsIHN5bWJvbCwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5ydW4oZGVsZWdhdGUsIGdsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdFdmVudFRhcmdldCcsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpO1xuICAgIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQoZ2xvYmFsLCBhcGksIFtYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZV0pO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ011dGF0aW9uT2JzZXJ2ZXInLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgcGF0Y2hDbGFzcygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaENsYXNzKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnRmlsZVJlYWRlcicsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoQ2xhc3MoJ0ZpbGVSZWFkZXInKTtcbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ29uX3Byb3BlcnR5JywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBnbG9iYWwpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnY3VzdG9tRWxlbWVudHMnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaEN1c3RvbUVsZW1lbnRzKGdsb2JhbCwgYXBpKTtcbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ1hIUicsIChnbG9iYWwsIFpvbmUpID0+IHtcbiAgICAvLyBUcmVhdCBYTUxIdHRwUmVxdWVzdCBhcyBhIG1hY3JvdGFzay5cbiAgICBwYXRjaFhIUihnbG9iYWwpO1xuICAgIGNvbnN0IFhIUl9UQVNLID0gem9uZVN5bWJvbCgneGhyVGFzaycpO1xuICAgIGNvbnN0IFhIUl9TWU5DID0gem9uZVN5bWJvbCgneGhyU3luYycpO1xuICAgIGNvbnN0IFhIUl9MSVNURU5FUiA9IHpvbmVTeW1ib2woJ3hockxpc3RlbmVyJyk7XG4gICAgY29uc3QgWEhSX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2woJ3hoclNjaGVkdWxlZCcpO1xuICAgIGNvbnN0IFhIUl9VUkwgPSB6b25lU3ltYm9sKCd4aHJVUkwnKTtcbiAgICBjb25zdCBYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2woJ3hockVycm9yQmVmb3JlU2NoZWR1bGVkJyk7XG4gICAgZnVuY3Rpb24gcGF0Y2hYSFIod2luZG93KSB7XG4gICAgICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gd2luZG93WydYTUxIdHRwUmVxdWVzdCddO1xuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRQZW5kaW5nVGFzayh0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbWEhSX1RBU0tdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGxldCBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGlmICghb3JpQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFJFQURZX1NUQVRFX0NIQU5HRSA9ICdyZWFkeXN0YXRlY2hhbmdlJztcbiAgICAgICAgY29uc3QgU0NIRURVTEVEID0gJ3NjaGVkdWxlZCc7XG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIGlmICghb3JpQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlBZGRMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQucmVhZHlTdGF0ZSA9PT0gdGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhhdCBpcyB0aGUgY2FzZSwgdGhlIHRhc2sgc2hvdWxkIGludm9rZSBhZnRlciBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubG9hZCBsaXN0ZW5lcnMgZmluaXNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgcmVxdWVzdCBmYWlsZWQgd2l0aG91dCByZXNwb25zZSAoc3RhdHVzID0gMCksIHRoZSBsb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IGJlIHRyaWdnZXJlZCwgaW4gdGhhdCBjYXNlLCB3ZSBzaG91bGQgYWxzbyBpbnZva2UgdGhlIHBsYWNlaG9sZGVyIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBjbG9zZSB0aGUgWE1MSHR0cFJlcXVlc3Q6OnNlbmQgbWFjcm9UYXNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzg3OTVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuc3RhdHVzICE9PSAwICYmIGxvYWRUYXNrcyAmJiBsb2FkVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaUludm9rZSA9IHRhc2suaW52b2tlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGxvYWQgdGhlIHRhc2tzIGFnYWluLCBiZWNhdXNlIGluIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgbGlzdGVuZXIsIHRoZXkgbWF5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2FkVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpSW52b2tlLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIG9jY3VycyB3aGVuIHhoci5zZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFRhc2sgPSB0YXJnZXRbWEhSX1RBU0tdO1xuICAgICAgICAgICAgaWYgKCFzdG9yZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9UQVNLXSA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KHRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwbGFjZWhvbGRlckNhbGxiYWNrKCkgeyB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgLy8gTm90ZSAtIGlkZWFsbHksIHdlIHdvdWxkIGNhbGwgZGF0YS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciBoZXJlLCBidXQgaXQncyB0b28gbGF0ZVxuICAgICAgICAgICAgLy8gdG8gcHJldmVudCBpdCBmcm9tIGZpcmluZy4gU28gaW5zdGVhZCwgd2Ugc3RvcmUgaW5mbyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgICAgZGF0YS5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdvcGVuJywgKCkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBYTUxIVFRQUkVRVUVTVF9TT1VSQ0UgPSAnWE1MSHR0cFJlcXVlc3Quc2VuZCc7XG4gICAgICAgIGNvbnN0IGZldGNoVGFza0Fib3J0aW5nID0gem9uZVN5bWJvbCgnZmV0Y2hUYXNrQWJvcnRpbmcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgICAgY29uc3Qgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnc2VuZCcsICgpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza1NjaGVkdWxpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gYSBmZXRjaCBpcyBzY2hlZHVsaW5nLCBzbyB3ZSBhcmUgdXNpbmcgeGhyIHRvIHBvbHlmaWxsIGZldGNoXG4gICAgICAgICAgICAgICAgLy8gYW5kIGJlY2F1c2Ugd2UgYWxyZWFkeSBzY2hlZHVsZSBtYWNyb1Rhc2sgZm9yIGZldGNoLCB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBub3Qgc2NoZWR1bGUgYSBtYWNyb1Rhc2sgZm9yIHhociBhZ2FpblxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHRhcmdldDogc2VsZiwgdXJsOiBzZWxmW1hIUl9VUkxdLCBpc1BlcmlvZGljOiBmYWxzZSwgYXJnczogYXJncywgYWJvcnRlZDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoWE1MSFRUUFJFUVVFU1RfU09VUkNFLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8geGhyIHJlcXVlc3QgdGhyb3cgZXJyb3Igd2hlbiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpbnZva2UgdGFzayBpbnN0ZWFkIG9mIGxlYXZpbmcgYSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVuZGluZyBtYWNyb1Rhc2tcbiAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhYm9ydE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnYWJvcnQnLCAoKSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGZpbmRQZW5kaW5nVGFzayhzZWxmKTtcbiAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGJlZW4gYWJvcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICAvLyBGaXggIzU2OSwgY2FsbCBhYm9ydCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgZG9uZSB3aWxsIGNhdXNlXG4gICAgICAgICAgICAgICAgLy8gbWFjcm9UYXNrIHRhc2sgY291bnQgYmUgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5hYm9ydGVkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza0Fib3J0aW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBhYm9ydCBpcyBjYWxsZWQgZnJvbSBmZXRjaCBwb2x5ZmlsbCwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSBhYm9ydCBvZiBYSFIuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdHJ5aW5nIHRvIGFib3J0IGFuIFhIUiB3aGljaCBoYXMgbm90IHlldCBiZWVuIHNlbnQsIHNvIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAvLyB0YXNrXG4gICAgICAgICAgICAvLyB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ2dlb2xvY2F0aW9uJywgKGdsb2JhbCkgPT4ge1xuICAgIC8vLyBHRU9fTE9DQVRJT05cbiAgICBpZiAoZ2xvYmFsWyduYXZpZ2F0b3InXSAmJiBnbG9iYWxbJ25hdmlnYXRvciddLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIHBhdGNoUHJvdG90eXBlKGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24sIFsnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ3dhdGNoUG9zaXRpb24nXSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnUHJvbWlzZVJlamVjdGlvbkV2ZW50JywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIC8vIGhhbmRsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICBmdW5jdGlvbiBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoZXZ0TmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFza3MgPSBmaW5kRXZlbnRUYXNrcyhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGV2ZW50VGFzayA9PiB7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93cyBoYXMgYWRkZWQgdW5oYW5kbGVkcmVqZWN0aW9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IFByb21pc2VSZWplY3Rpb25FdmVudChldnROYW1lLCB7IHByb21pc2U6IGUucHJvbWlzZSwgcmVhc29uOiBlLnJlamVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXNrLmludm9rZShldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXSkge1xuICAgICAgICBab25lW3pvbmVTeW1ib2woJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyldID1cbiAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigndW5oYW5kbGVkcmVqZWN0aW9uJyk7XG4gICAgICAgIFpvbmVbem9uZVN5bWJvbCgncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKV0gPVxuICAgICAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCdyZWplY3Rpb25oYW5kbGVkJyk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwibmFtZSIsInBlcmZvcm1hbmNlTWVhc3VyZSIsImxhYmVsIiwic3ltYm9sUHJlZml4IiwiX19zeW1ib2xfXyIsImNoZWNrRHVwbGljYXRlIiwiRXJyb3IiLCJab25lIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJ6b25lU3BlYyIsIl9wYXJlbnQiLCJfbmFtZSIsIl9wcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIl96b25lRGVsZWdhdGUiLCJfWm9uZURlbGVnYXRlIiwiYXNzZXJ0Wm9uZVBhdGNoZWQiLCJwYXRjaGVzIiwicm9vdCIsInpvbmUiLCJjdXJyZW50IiwiX2N1cnJlbnRab25lRnJhbWUiLCJjdXJyZW50VGFzayIsIl9jdXJyZW50VGFzayIsIl9fbG9hZF9wYXRjaCIsImZuIiwiaWdub3JlRHVwbGljYXRlIiwiaGFzT3duUHJvcGVydHkiLCJwZXJmTmFtZSIsIl9hcGkiLCJnZXQiLCJrZXkiLCJnZXRab25lV2l0aCIsImZvcmsiLCJ3cmFwIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJfY2FsbGJhY2siLCJpbnRlcmNlcHQiLCJydW5HdWFyZGVkIiwiYXJndW1lbnRzIiwicnVuIiwiYXBwbHlUaGlzIiwiYXBwbHlBcmdzIiwiaW52b2tlIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsInJ1blRhc2siLCJ0YXNrIiwiTk9fWk9ORSIsInN0YXRlIiwibm90U2NoZWR1bGVkIiwidHlwZSIsImV2ZW50VGFzayIsIm1hY3JvVGFzayIsInJlRW50cnlHdWFyZCIsInJ1bm5pbmciLCJfdHJhbnNpdGlvblRvIiwic2NoZWR1bGVkIiwicnVuQ291bnQiLCJwcmV2aW91c1Rhc2siLCJkYXRhIiwiaXNQZXJpb2RpYyIsImNhbmNlbEZuIiwidW5kZWZpbmVkIiwiaW52b2tlVGFzayIsInVua25vd24iLCJfdXBkYXRlVGFza0NvdW50Iiwic2NoZWR1bGVUYXNrIiwibmV3Wm9uZSIsInNjaGVkdWxpbmciLCJ6b25lRGVsZWdhdGVzIiwiX3pvbmVEZWxlZ2F0ZXMiLCJfem9uZSIsImVyciIsInNjaGVkdWxlTWljcm9UYXNrIiwiY3VzdG9tU2NoZWR1bGUiLCJab25lVGFzayIsIm1pY3JvVGFzayIsInNjaGVkdWxlTWFjcm9UYXNrIiwiY3VzdG9tQ2FuY2VsIiwic2NoZWR1bGVFdmVudFRhc2siLCJjYW5jZWxUYXNrIiwiY2FuY2VsaW5nIiwiY291bnQiLCJpIiwibGVuZ3RoIiwiREVMRUdBVEVfWlMiLCJvbkhhc1Rhc2siLCJkZWxlZ2F0ZSIsIl8iLCJ0YXJnZXQiLCJoYXNUYXNrU3RhdGUiLCJoYXNUYXNrIiwib25TY2hlZHVsZVRhc2siLCJvbkludm9rZVRhc2siLCJvbkNhbmNlbFRhc2siLCJwYXJlbnREZWxlZ2F0ZSIsIl90YXNrQ291bnRzIiwiX3BhcmVudERlbGVnYXRlIiwiX2ZvcmtaUyIsIm9uRm9yayIsIl9mb3JrRGxndCIsIl9mb3JrQ3VyclpvbmUiLCJfaW50ZXJjZXB0WlMiLCJvbkludGVyY2VwdCIsIl9pbnRlcmNlcHREbGd0IiwiX2ludGVyY2VwdEN1cnJab25lIiwiX2ludm9rZVpTIiwib25JbnZva2UiLCJfaW52b2tlRGxndCIsIl9pbnZva2VDdXJyWm9uZSIsIl9oYW5kbGVFcnJvclpTIiwib25IYW5kbGVFcnJvciIsIl9oYW5kbGVFcnJvckRsZ3QiLCJfaGFuZGxlRXJyb3JDdXJyWm9uZSIsIl9zY2hlZHVsZVRhc2taUyIsIl9zY2hlZHVsZVRhc2tEbGd0IiwiX3NjaGVkdWxlVGFza0N1cnJab25lIiwiX2ludm9rZVRhc2taUyIsIl9pbnZva2VUYXNrRGxndCIsIl9pbnZva2VUYXNrQ3VyclpvbmUiLCJfY2FuY2VsVGFza1pTIiwiX2NhbmNlbFRhc2tEbGd0IiwiX2NhbmNlbFRhc2tDdXJyWm9uZSIsIl9oYXNUYXNrWlMiLCJfaGFzVGFza0RsZ3QiLCJfaGFzVGFza0RsZ3RPd25lciIsIl9oYXNUYXNrQ3VyclpvbmUiLCJ6b25lU3BlY0hhc1Rhc2siLCJwYXJlbnRIYXNUYXNrIiwidGFyZ2V0Wm9uZSIsImFwcGx5IiwicmV0dXJuVGFzayIsInB1c2giLCJzY2hlZHVsZUZuIiwidmFsdWUiLCJpc0VtcHR5IiwiY291bnRzIiwicHJldiIsIm5leHQiLCJjaGFuZ2UiLCJvcHRpb25zIiwiX3N0YXRlIiwic2VsZiIsInVzZUciLCJjYWxsIiwiYXJncyIsIl9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMiLCJkcmFpbk1pY3JvVGFza1F1ZXVlIiwiY2FuY2VsU2NoZWR1bGVSZXF1ZXN0IiwidG9TdGF0ZSIsImZyb21TdGF0ZTEiLCJmcm9tU3RhdGUyIiwidG9TdHJpbmciLCJoYW5kbGVJZCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvSlNPTiIsInN5bWJvbFNldFRpbWVvdXQiLCJzeW1ib2xQcm9taXNlIiwic3ltYm9sVGhlbiIsIl9taWNyb1Rhc2tRdWV1ZSIsIl9pc0RyYWluaW5nTWljcm90YXNrUXVldWUiLCJuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UiLCJuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayIsImZ1bmMiLCJyZXNvbHZlIiwibmF0aXZlVGhlbiIsInF1ZXVlIiwib25VbmhhbmRsZWRFcnJvciIsIm1pY3JvdGFza0RyYWluRG9uZSIsInN5bWJvbCIsImN1cnJlbnRab25lRnJhbWUiLCJub29wIiwic2hvd1VuY2F1Z2h0RXJyb3IiLCJwYXRjaEV2ZW50VGFyZ2V0IiwicGF0Y2hPblByb3BlcnRpZXMiLCJwYXRjaE1ldGhvZCIsImJpbmRBcmd1bWVudHMiLCJwYXRjaFRoZW4iLCJwYXRjaE1hY3JvVGFzayIsInBhdGNoRXZlbnRQcm90b3R5cGUiLCJpc0lFT3JFZGdlIiwiZ2V0R2xvYmFsT2JqZWN0cyIsIk9iamVjdERlZmluZVByb3BlcnR5IiwiT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0Q3JlYXRlIiwiQXJyYXlTbGljZSIsInBhdGNoQ2xhc3MiLCJ3cmFwV2l0aEN1cnJlbnRab25lIiwiZmlsdGVyUHJvcGVydGllcyIsImF0dGFjaE9yaWdpblRvUGF0Y2hlZCIsIl9yZWRlZmluZVByb3BlcnR5IiwicGF0Y2hDYWxsYmFja3MiLCJ3aW5kb3ciLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdEdldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJjcmVhdGUiLCJBcnJheSIsInNsaWNlIiwiQUREX0VWRU5UX0xJU1RFTkVSX1NUUiIsIlJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIiLCJaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIiLCJaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIiLCJUUlVFX1NUUiIsIkZBTFNFX1NUUiIsIlpPTkVfU1lNQk9MX1BSRUZJWCIsInNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lIiwiem9uZVN5bWJvbCIsImlzV2luZG93RXhpc3RzIiwiaW50ZXJuYWxXaW5kb3ciLCJfZ2xvYmFsIiwiUkVNT1ZFX0FUVFJJQlVURSIsInBhdGNoUHJvdG90eXBlIiwiZm5OYW1lcyIsInByb3RvdHlwZURlc2MiLCJpc1Byb3BlcnR5V3JpdGFibGUiLCJwYXRjaGVkIiwicHJvcGVydHlEZXNjIiwid3JpdGFibGUiLCJzZXQiLCJpc1dlYldvcmtlciIsIldvcmtlckdsb2JhbFNjb3BlIiwiaXNOb2RlIiwicHJvY2VzcyIsImlzQnJvd3NlciIsImlzTWl4Iiwiem9uZVN5bWJvbEV2ZW50TmFtZXMkMSIsIndyYXBGbiIsImV2ZW50IiwiZXZlbnROYW1lU3ltYm9sIiwibGlzdGVuZXIiLCJyZXN1bHQiLCJlcnJvckV2ZW50IiwibWVzc2FnZSIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJwcmV2ZW50RGVmYXVsdCIsInBhdGNoUHJvcGVydHkiLCJvYmoiLCJwcm9wIiwiZGVzYyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJvblByb3BQYXRjaGVkU3ltYm9sIiwib3JpZ2luYWxEZXNjR2V0Iiwib3JpZ2luYWxEZXNjU2V0IiwiZXZlbnROYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvblByb3BlcnRpZXMiLCJqIiwib3JpZ2luYWxJbnN0YW5jZUtleSIsImNsYXNzTmFtZSIsIk9yaWdpbmFsQ2xhc3MiLCJhIiwiaW5zdGFuY2UiLCJwYXRjaEZuIiwicHJvdG8iLCJkZWxlZ2F0ZU5hbWUiLCJwYXRjaERlbGVnYXRlIiwiZnVuY05hbWUiLCJtZXRhQ3JlYXRvciIsInNldE5hdGl2ZSIsImNiSWR4IiwibWV0YSIsIm9yaWdpbmFsIiwiaXNEZXRlY3RlZElFT3JFZGdlIiwiaWVPckVkZ2UiLCJpc0lFIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiYXBpIiwicmVhZGFibGVPYmplY3RUb1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfdW5jYXVnaHRQcm9taXNlRXJyb3JzIiwiaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24iLCJjcmVhdGlvblRyYWNlIiwiZSIsInJlamVjdGlvbiIsImNvbnNvbGUiLCJzdGFjayIsInVuY2F1Z2h0UHJvbWlzZUVycm9yIiwic2hpZnQiLCJ0aHJvd09yaWdpbmFsIiwiaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uIiwiVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MIiwiaGFuZGxlciIsImlzVGhlbmFibGUiLCJ0aGVuIiwiZm9yd2FyZFJlc29sdXRpb24iLCJmb3J3YXJkUmVqZWN0aW9uIiwiWm9uZUF3YXJlUHJvbWlzZSIsInJlamVjdCIsInN5bWJvbFN0YXRlIiwic3ltYm9sVmFsdWUiLCJzeW1ib2xGaW5hbGx5Iiwic3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlIiwic3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlIiwiVU5SRVNPTFZFRCIsIlJFU09MVkVEIiwiUkVKRUNURUQiLCJSRUpFQ1RFRF9OT19DQVRDSCIsIm1ha2VSZXNvbHZlciIsInByb21pc2UiLCJ2IiwicmVzb2x2ZVByb21pc2UiLCJvbmNlIiwid2FzQ2FsbGVkIiwid3JhcHBlciIsIndyYXBwZWRGdW5jdGlvbiIsIlRZUEVfRVJST1IiLCJDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MIiwib25jZVdyYXBwZXIiLCJUeXBlRXJyb3IiLCJjbGVhclJlamVjdGVkTm9DYXRjaCIsInRyYWNlIiwic2NoZWR1bGVSZXNvbHZlT3JSZWplY3QiLCJSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSIiwic3BsaWNlIiwiY2hhaW5Qcm9taXNlIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZVN0YXRlIiwicGFyZW50UHJvbWlzZVZhbHVlIiwiaXNGaW5hbGx5UHJvbWlzZSIsIlpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkciLCJBZ2dyZWdhdGVFcnJvciIsImFueSIsInZhbHVlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiUHJvbWlzZSIsInByb21pc2VzIiwiZmluaXNoZWQiLCJlcnJvcnMiLCJyYWNlIiwicmVzIiwicmVqIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJhbGwiLCJhbGxXaXRoQ2FsbGJhY2siLCJhbGxTZXR0bGVkIiwiUCIsInRoZW5DYWxsYmFjayIsInN0YXR1cyIsImVycm9yQ2FsbGJhY2siLCJyZWFzb24iLCJ1bnJlc29sdmVkQ291bnQiLCJ2YWx1ZUluZGV4IiwicmVzb2x2ZWRWYWx1ZXMiLCJjdXJWYWx1ZUluZGV4IiwidGhlbkVyciIsImV4ZWN1dG9yIiwidG9TdHJpbmdUYWciLCJzcGVjaWVzIiwiX2EiLCJDIiwiY2F0Y2giLCJmaW5hbGx5Iiwib25GaW5hbGx5IiwiTmF0aXZlUHJvbWlzZSIsInN5bWJvbFRoZW5QYXRjaGVkIiwiQ3RvciIsIm9yaWdpbmFsVGhlbiIsIndyYXBwZWQiLCJ6b25laWZ5IiwicmVzdWx0UHJvbWlzZSIsImN0b3IiLCJvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmciLCJGdW5jdGlvbiIsIk9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCIsIlBST01JU0VfU1lNQk9MIiwiRVJST1JfU1lNQk9MIiwibmV3RnVuY3Rpb25Ub1N0cmluZyIsIm9yaWdpbmFsRGVsZWdhdGUiLCJuYXRpdmVQcm9taXNlIiwibmF0aXZlRXJyb3IiLCJvcmlnaW5hbE9iamVjdFRvU3RyaW5nIiwiUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HIiwicGFzc2l2ZVN1cHBvcnRlZCIsIk9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSIsInpvbmVTeW1ib2xFdmVudE5hbWVzIiwiZ2xvYmFsU291cmNlcyIsIkVWRU5UX05BTUVfU1lNQk9MX1JFR1giLCJSZWdFeHAiLCJJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MIiwicHJlcGFyZUV2ZW50TmFtZXMiLCJldmVudE5hbWVUb1N0cmluZyIsImZhbHNlRXZlbnROYW1lIiwidHJ1ZUV2ZW50TmFtZSIsInN5bWJvbENhcHR1cmUiLCJhcGlzIiwicGF0Y2hPcHRpb25zIiwiQUREX0VWRU5UX0xJU1RFTkVSIiwiYWRkIiwiUkVNT1ZFX0VWRU5UX0xJU1RFTkVSIiwicm0iLCJMSVNURU5FUlNfRVZFTlRfTElTVEVORVIiLCJsaXN0ZW5lcnMiLCJSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiIsInJtQWxsIiwiem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXIiLCJBRERfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiUFJFUEVORF9FVkVOVF9MSVNURU5FUiIsIlBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiaXNSZW1vdmVkIiwiaGFuZGxlRXZlbnQiLCJnbG9iYWxDYWxsYmFjayIsImNvbnRleHQiLCJpc0NhcHR1cmUiLCJ0YXNrcyIsImNvcHlUYXNrcyIsImdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIiwiZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIiwicGF0Y2hFdmVudFRhcmdldE1ldGhvZHMiLCJ1c2VHbG9iYWxDYWxsYmFjayIsInZhbGlkYXRlSGFuZGxlciIsInZoIiwiY2hrRHVwIiwicmV0dXJuVGFyZ2V0IiwicnQiLCJ0YXNrRGF0YSIsIm5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIiLCJuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXJzIiwibmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzIiwibmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIiLCJwcmVwZW5kIiwiYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyIsInBhc3NpdmUiLCJjYXB0dXJlIiwiYXNzaWduIiwiY3VzdG9tU2NoZWR1bGVHbG9iYWwiLCJpc0V4aXN0aW5nIiwiY3VzdG9tQ2FuY2VsR2xvYmFsIiwic3ltYm9sRXZlbnROYW1lcyIsInN5bWJvbEV2ZW50TmFtZSIsImV4aXN0aW5nVGFza3MiLCJleGlzdGluZ1Rhc2siLCJhbGxSZW1vdmVkIiwiY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwiLCJjdXN0b21TY2hlZHVsZVByZXBlbmQiLCJjdXN0b21DYW5jZWxOb25HbG9iYWwiLCJjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSIsInR5cGVPZkRlbGVnYXRlIiwiY29tcGFyZSIsImRpZmYiLCJ1bnBhdGNoZWRFdmVudHMiLCJwYXNzaXZlRXZlbnRzIiwibWFrZUFkZExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXIiLCJhZGRTb3VyY2UiLCJjdXN0b21TY2hlZHVsZUZuIiwiY3VzdG9tQ2FuY2VsRm4iLCJ0cmFuc2ZlckV2ZW50TmFtZSIsImlzSGFuZGxlRXZlbnQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJ0YXJnZXRTb3VyY2UiLCJ1bnNoaWZ0Iiwib25Qcm9wZXJ0eVN5bWJvbCIsImZpbmRFdmVudFRhc2tzIiwia2V5cyIsIm1hdGNoIiwiZXhlYyIsImV2dE5hbWUiLCJzeW1ib2xDYXB0dXJlRXZlbnROYW1lIiwiY2FwdHVyZVRhc2tzIiwicmVtb3ZlVGFza3MiLCJyZXN1bHRzIiwiZm91bmRUYXNrcyIsImNhcHR1cmVGYWxzZVRhc2tzIiwiY2FwdHVyZVRydWVUYXNrcyIsImNvbmNhdCIsIkV2ZW50IiwidGFyZ2V0TmFtZSIsIm1ldGhvZCIsImNhbGxiYWNrcyIsIm5hdGl2ZURlbGVnYXRlIiwib3B0cyIsImZvckVhY2giLCJkZXNjcmlwdG9yIiwiaWdub3JlUHJvcGVydGllcyIsInRpcCIsImZpbHRlciIsImlwIiwidGFyZ2V0SWdub3JlUHJvcGVydGllcyIsIm9wIiwicGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMiLCJmaWx0ZXJlZFByb3BlcnRpZXMiLCJnZXRPbkV2ZW50TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwic3RhcnRzV2l0aCIsIm1hcCIsInN1YnN0cmluZyIsInByb3BlcnR5RGVzY3JpcHRvclBhdGNoIiwicGF0Y2hUYXJnZXRzIiwiaWdub3JlRXJyb3JQcm9wZXJ0aWVzIiwiZXZlbnROYW1lcyIsIlNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTIiwiU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFMiLCJ0YXNrU3ltYm9sIiwicGF0Y2hUaW1lciIsInNldE5hbWUiLCJjYW5jZWxOYW1lIiwibmFtZVN1ZmZpeCIsImNsZWFyTmF0aXZlIiwidGFza3NCeUhhbmRsZUlkIiwiY2xlYXJUYXNrIiwiZGVsYXkiLCJ0aW1lciIsImhhbmRsZSIsInJlZiIsInVucmVmIiwiYmluZCIsImlkIiwicGF0Y2hDdXN0b21FbGVtZW50cyIsImN1c3RvbUVsZW1lbnRzIiwiZXZlbnRUYXJnZXRQYXRjaCIsIkVWRU5UX1RBUkdFVCIsInBhdGNoRXZlbnQiLCJsZWdhY3lQYXRjaCIsImNsZWFyIiwiYmxvY2tpbmdNZXRob2RzIiwicyIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQiLCJwYXRjaFhIUiIsIlhIUl9UQVNLIiwiWEhSX1NZTkMiLCJYSFJfTElTVEVORVIiLCJYSFJfU0NIRURVTEVEIiwiWEhSX1VSTCIsIlhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEIiwiWE1MSHR0cFJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSIsImZpbmRQZW5kaW5nVGFzayIsIm9yaUFkZExpc3RlbmVyIiwib3JpUmVtb3ZlTGlzdGVuZXIiLCJYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlIiwiUkVBRFlfU1RBVEVfQ0hBTkdFIiwiU0NIRURVTEVEIiwibmV3TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwiRE9ORSIsImFib3J0ZWQiLCJsb2FkVGFza3MiLCJvcmlJbnZva2UiLCJzdG9yZWRUYXNrIiwic2VuZE5hdGl2ZSIsInBsYWNlaG9sZGVyQ2FsbGJhY2siLCJhYm9ydE5hdGl2ZSIsIm9wZW5OYXRpdmUiLCJYTUxIVFRQUkVRVUVTVF9TT1VSQ0UiLCJmZXRjaFRhc2tBYm9ydGluZyIsImZldGNoVGFza1NjaGVkdWxpbmciLCJ1cmwiLCJnZW9sb2NhdGlvbiIsImZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlciIsImV2ZW50VGFza3MiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJldnQiXSwic291cmNlUm9vdCI6IiJ9