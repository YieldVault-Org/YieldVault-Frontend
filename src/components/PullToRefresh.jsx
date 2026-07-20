import React from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';

/**
 * Simple wrapper around `react-pull-to-refresh` that forwards the `onRefresh`
 * callback and renders its children. The component is deliberately minimal –
 * styling is handled via CSS in the consuming page.
 */
export default function PullToRefreshWrapper({ onRefresh, children }) {
  const handleRefresh = async () => {
    const result = onRefresh();
    return result instanceof Promise ? result : Promise.resolve(result);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} style={{ minHeight: '100%' }}>
      {children}
    </PullToRefresh>
  );
}
