/**
 * Small rounded label for statuses, asset codes or categories.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'default'|'success'|'warning'|'danger'|'accent'} [props.tone]
 */
export default function Tag({ children, tone = 'default' }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}
