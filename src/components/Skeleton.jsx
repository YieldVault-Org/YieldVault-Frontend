/**
 * Animated placeholder block shown while content is loading. Useful for
 * card/list layouts where a spinner would cause layout shift.
 * @param {object} props
 * @param {string} [props.width]
 * @param {string} [props.height]
 * @param {number} [props.count] - number of stacked blocks to render
 */
export default function Skeleton({ width = '100%', height = '1rem', count = 1 }) {
  return (
    <div className="skeleton-group" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="skeleton" style={{ width, height }} />
      ))}
    </div>
  );
}
