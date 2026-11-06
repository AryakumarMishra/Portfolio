import { ImageResponse } from "next/og";

export const alt =
  "Aryakumar Mishra | AI/ML Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F4EF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.2em",
              color: "#777872",
              fontFamily: "monospace",
            }}
          >
            AI / ML ENGINEERING · FULL-STACK DEVELOPMENT · INDIA
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#C8F169",
              border: "2px solid #171816",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1.05,
              color: "#171816",
              letterSpacing: "-0.02em",
            }}
          >
            Building intelligent systems.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1.05,
              color: "#171816",
              letterSpacing: "-0.02em",
            }}
          >
            Engineering useful products.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ display: "flex", fontSize: 40, color: "#171816" }}>
            Aryakumar Mishra
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#777872",
              fontFamily: "monospace",
            }}
          >
            ARYAKUMAR.DEV — FIELD NOTES
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
