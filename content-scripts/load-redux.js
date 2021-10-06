/* global console */

function injectRedux() {
  window.__scratchAddonsRedux = {};
  const { store } = document.getElementById('app')._reactRootContainer._internalRoot.current.child.pendingProps;
  let prevState = store.getState();

  window.__scratchAddonsRedux = {
    get state() {
      return store.getState();
    },
    dispatch(evt) {
      return store.dispatch(evt);
    },
    target: new EventTarget,
  };

  const reducer = function (state = prevState, action) {
    const evt = new CustomEvent('statechanged', {
      detail: {
        next: state,
        prev: prevState,
        action,
      },
    });
    scratchAddonsRedux.target.dispatchEvent(evt);
    return state;
  }

  store.replaceReducer(reducer);
}

if (!(document.documentElement instanceof SVGElement)) {
  const injectReduxScript = document.createElement("script");
  injectReduxScript.append(document.createTextNode("(" + injectRedux + ")()"));
  (document.head || document.documentElement).appendChild(injectReduxScript);
}
