import { ImageResponse } from "next/og";

export const alt = "Mohammed Boungab — Portfolio Data, IA et Objets Connectés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #020617 0%, #0f172a 58%, #134e4a 100%)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 84px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
        <div style={{ color: "#5eead4", display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "0.08em" }}>
          MOHAMMED BOUNGAB
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Data, Intelligence Artificielle et Objets Connectés
        </div>
        <div style={{ color: "#cbd5e1", display: "flex", fontSize: 28 }}>
          Portfolio · Alternance à partir de septembre 2026
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          border: "3px solid #2dd4bf",
          borderRadius: 40,
          color: "#5eead4",
          display: "flex",
          fontSize: 64,
          fontWeight: 900,
          height: 150,
          justifyContent: "center",
          width: 150,
        }}
      >
        MB.
      </div>
    </div>,
    size,
  );
}
