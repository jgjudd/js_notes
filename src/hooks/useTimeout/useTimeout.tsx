/**
 * useTimeout provides a convenient way to create and manage timeouts in React.
 * Using window.setTimeout under the hood, useTimeout invokes a provided callback function
 * after ms milliseconds and automatically clears the timeout when the component using useTimeout
 * is removed from the DOM.
 */

import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useTimeout(cb, ms) {
  const id = React.useRef(null);
  const onTimeout = React.useEffectEvent(cb);

  const handleClearTimeout = React.useCallback(() => {
    window.clearTimeout(id.current);
  }, []);

  React.useEffect(() => {
    id.current = window.setTimeout(onTimeout, ms);

    return handleClearTimeout;
  }, [ms, handleClearTimeout]);

  return handleClearTimeout;
}
