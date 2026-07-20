import React from 'react';

/**
 * Placeholder component displayed when a chart has no data.
 * Allows optional custom icon, title, message and an action (e.g., a button).
 */
interface ChartEmptyStateProps {
  /** Icon to display, can be an emoji or any icon component. */
  icon?: React.ReactNode;
  /** Title of the empty state, e.g., "No data available" */
  title: string;
  /** Optional description message. */
  message?: string;
  /** Optional actionable element, such as a button. */
  action?: React.ReactNode;
}

export default function ChartEmptyState({
  icon = '📊',
  title,
  message,
  action,
}: ChartEmptyStateProps) {
  return (
    <div className="chart-empty-state">
      <div className="chart-empty-icon">{icon}</div>
      <h3 className="chart-empty-title">{title}</h3>
      {message && <p className="chart-empty-message">{message}</p>}
      {action && <div className="chart-empty-action">{action}</div>}
    </div>
  );
}
