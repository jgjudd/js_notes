/*
    useQueue gives you an easy way to manage a queue type data structure. 
    A queue follows the FIFO (first in, first out) principle. 
    This means that the first element added to the queue is the first element that should be removed.
*/

import * as React from "react";

export default function useQueue(initialValue = []) {
  const [queue, setQueue] = React.useState(initialValue);

  const add = React.useCallback((element) => {
    setQueue((prev) => [...prev, element]);
  }, []);

  const remove = React.useCallback(() => {
    let removedElement;

    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  }, []);

  const clear = React.useCallback(() => setQueue([]), []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
}
