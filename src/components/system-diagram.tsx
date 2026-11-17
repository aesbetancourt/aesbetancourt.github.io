import { useTranslation } from "react-i18next"

type Box = { x: number; y: number; w: number; label: string; sub: string; hl?: boolean; db?: boolean }

// Box names are technical terms and stay in English in every locale.
const boxes: Box[] = [
  { x: 200, y: 20, w: 120, label: "CLIENTS", sub: "" },
  { x: 190, y: 104, w: 140, label: "API GATEWAY", sub: "Fastify · Node.js" },
  { x: 30, y: 104, w: 130, label: "AUTH", sub: "OIDC · passkeys" },
  { x: 200, y: 190, w: 120, label: "SERVICES", sub: "× 12 · AWS / GCP" },
  { x: 70, y: 276, w: 120, label: "STT ENGINE", sub: "Transcribe | Chirp" },
  { x: 200, y: 276, w: 120, label: "EVENT BUS", sub: "async workflows" },
  { x: 340, y: 276, w: 120, label: "LLM AGENTS", sub: "Bedrock · Vertex", hl: true },
  { x: 200, y: 380, w: 120, label: "POSTGRES", sub: "Prisma", db: true },
]

/** Hero drawing: a simplified version of the systems I build, with callouts. */
export function SystemDiagram() {
  const { t } = useTranslation()
  return (
    <svg className="diagram" viewBox="0 0 520 450" role="img" aria-label={t("diagram.figure")}>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path className="arrowhead" d="M0,1 L9,5 L0,9" />
        </marker>
      </defs>

      <g className="wires">
        <path d="M260 62 V104" markerEnd="url(#arrow)" />
        <path d="M260 150 V190" markerEnd="url(#arrow)" />
        <path d="M190 127 H160" markerEnd="url(#arrow)" />
        <path d="M260 236 V276" markerEnd="url(#arrow)" />
        <path d="M200 213 H130 V276" markerEnd="url(#arrow)" />
        <path d="M320 213 H400 V276" markerEnd="url(#arrow)" />
        <path d="M260 322 V380" markerEnd="url(#arrow)" />
      </g>
      <path className="flow" d="M260 62 V104 M260 150 V190 M320 213 H400 V276" />

      {boxes.map((b) => {
        const cx = b.x + b.w / 2
        const h = b.label === "CLIENTS" ? 42 : 46
        return (
          <g key={b.label} className={b.hl ? "box hl" : "box"}>
            <rect x={b.x} y={b.y} width={b.w} height={h} />
            {b.db && <rect className="inner" x={b.x + 4} y={b.y + 4} width={b.w - 8} height={h - 8} />}
            <text className="lbl" x={cx} y={b.sub ? b.y + 20 : b.y + 25} textAnchor="middle">
              {b.label}
            </text>
            {b.sub && (
              <text className="lbl sm" x={cx} y={b.y + 36} textAnchor="middle">
                {b.sub}
              </text>
            )}
          </g>
        )
      })}

      <g className="callouts">
        <line x1="400" y1="322" x2="384" y2="344" />
        <circle cx="376" cy="354" r="12" />
        <text className="con" x="376" y="358" textAnchor="middle">1</text>
        <text className="note" x="396" y="352">{t("diagram.docs")}</text>
        <text className="note" x="396" y="367">{t("diagram.review")}</text>

        <line x1="80" y1="322" x2="56" y2="368" />
        <circle cx="50" cy="380" r="12" />
        <text className="con" x="50" y="384" textAnchor="middle">2</text>
        <text className="note" x="70" y="396">{t("diagram.agnostic")}</text>
        <text className="note" x="70" y="411">{t("diagram.noChanges")}</text>

        <line x1="320" y1="200" x2="350" y2="160" />
        <circle cx="358" cy="150" r="12" />
        <text className="con" x="358" y="154" textAnchor="middle">3</text>
        <text className="note" x="376" y="146">{t("diagram.uptime")}</text>
        <text className="note" x="376" y="161">{t("diagram.events")}</text>
      </g>
    </svg>
  )
}
