import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jelita Frizyllia Adrieni — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f5f1e8 0%, #e8e0d0 50%, #f5f1e8 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(31, 78, 216, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255, 213, 79, 0.15)",
          }}
        />

        {/* Golden accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #ffd54f, #ffb300, #ffd54f)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: "0 60px",
          }}
        >
          {/* Avatar circle placeholder */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1f4ed8, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "white",
              fontWeight: 700,
              border: "4px solid #ffd54f",
            }}
          >
            JA
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
              letterSpacing: "-1px",
            }}
          >
            Jelita Frizyllia Adrieni
          </h1>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "#ffd54f",
              borderRadius: 2,
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 22,
              color: "#1f4ed8",
              margin: 0,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Mechanical Engineering Student · Content Creator
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["Duta Maritim Indonesia 2025", "Juara 2 Duta GenRe", "8.600+ Followers"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 20,
                    background: "rgba(31, 78, 216, 0.08)",
                    color: "#1f4ed8",
                    fontSize: 16,
                    fontWeight: 500,
                    border: "1px solid rgba(31, 78, 216, 0.15)",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #ffd54f, #ffb300, #ffd54f)",
          }}
        />

        {/* URL corner */}
        <p
          style={{
            position: "absolute",
            bottom: 20,
            right: 40,
            fontSize: 14,
            color: "#999",
            margin: 0,
          }}
        >
          jelitafrizyllia.vercel.app
        </p>
      </div>
    ),
    { ...size }
  );
}
