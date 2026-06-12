import { clamp } from '../utils/format.js';

/**
 * Simple previous/next pager with a "page X of N" indicator. Buttons disable
 * at the bounds and the reported page is clamped to a valid range.
 * @param {object} props
 * @param {number} props.page - current 1-based page
 * @param {number} props.totalPages
 * @param {(page: number) => void} props.onChange
 */
export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const go = (next) => onChange(clamp(next, 1, totalPages));

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => go(page - 1)}
        disabled={page <= 1}
      >
        ← Prev
      </button>
      <span className="pagination-status" aria-live="polite">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => go(page + 1)}
        disabled={page >= totalPages}
      >
        Next →
      </button>
    </nav>
  );
}
