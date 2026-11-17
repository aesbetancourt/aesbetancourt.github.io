/** Section heading in drawing style: "02 / EXPERIENCE ——|". */
export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="eyebrow reveal">
      <span className="num">{n}</span>
      <span>/ {label}</span>
      <span className="ln" />
    </div>
  )
}
