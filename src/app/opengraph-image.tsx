import { ImageResponse } from 'next/og'

// Image metadata
export const runtime = 'edge'
export const alt = 'AI Front Desk - Automatizari AI & Software pentru Afaceri'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Dynamic OG Image generation - 2026 standard
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
          position: 'relative',
        }}
      >
        {/* Background grid effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(114, 76, 232, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(114, 76, 232, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 245, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Logo and title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Robot icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8" y2="16" />
              <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
          </div>

          <div style={{ display: 'flex', fontSize: '56px', fontWeight: 'bold' }}>
            <span style={{ color: 'white' }}>AI</span>
            <span
              style={{
                background: 'linear-gradient(90deg, #22d3ee, #a855f7, #f472b6)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              FrontDesk
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            marginBottom: '40px',
          }}
        >
          Automatizari AI • Chatbots 24/7 • Software Custom
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
          }}
        >
          {['Website-uri Moderne', 'Chatbots AI', 'Automatizari', 'Software Custom'].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: '1px solid rgba(168, 85, 247, 0.5)',
                  background: 'rgba(168, 85, 247, 0.1)',
                  color: '#c4b5fd',
                  fontSize: '18px',
                }}
              >
                {feature}
              </div>
            )
          )}
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#71717a',
          }}
        >
          aifrontdesk.ro • ROI Garantat in 90 de Zile
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
