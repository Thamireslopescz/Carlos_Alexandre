import { useEffect, useRef } from 'react'
import consultorPhoto from '../imports/image.png'

const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20interesse%20nas%20soluções%20PagBank!'

interface Props {
  dark: boolean
}

export default function Hero({ dark }: Props) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.hero-animate').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  const meshGradient = dark
    ? `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,200,111,0.12) 0%, transparent 60%),
       radial-gradient(ellipse 50% 40% at 90% 50%, rgba(0,140,82,0.08) 0%, transparent 50%)`
    : `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,200,111,0.13) 0%, transparent 60%),
       radial-gradient(ellipse 50% 40% at 90% 50%, rgba(0,140,82,0.07) 0%, transparent 50%)`

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Apresentação"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 128,
        paddingBottom: 96,
        background: meshGradient,
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: dark
            ? `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,111,0.1), transparent 70%)',
          top: -120,
          right: -80,
          animation: 'float 7s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div
            className="hero-animate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px 6px 8px',
              borderRadius: 99,
              background: dark ? 'rgba(0,200,111,0.1)' : 'rgba(0,200,111,0.08)',
              border: '1px solid rgba(0,200,111,0.22)',
              marginBottom: 28,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00C86F, #008C52)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: '#00C86F', letterSpacing: '0.01em' }}>
              O banco completo para o empreendedor
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-animate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: '-0.03em',
              color: dark ? '#FAFAFA' : '#09090B',
              marginBottom: 22,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Aceite pagamentos e{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00C86F 0%, #008C52 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              venda muito mais
            </span>{' '}
            com o PagBank
          </h1>

          {/* Subheadline */}
          <p
            className="hero-animate"
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.7,
              color: dark ? '#A1A1AA' : '#52525B',
              marginBottom: 40,
              maxWidth: 500,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Carlos Alexandre é consultor certificado PagBank, especializado em atendimento a
            empresas da Região Sul. Maquininhas, conta PJ, antecipação de recebíveis e muito
            mais — com suporte direto e sem burocracia.
          </p>

          {/* CTAs */}
          <div
            className="hero-animate"
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, #00C86F 0%, #00A85E 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15.5,
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(0, 200, 111, 0.38), 0 1px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                letterSpacing: '-0.01em',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.01)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0, 200, 111, 0.5)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0) scale(1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(0, 200, 111, 0.38), 0 1px 4px rgba(0,0,0,0.1)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.523 5.826L.057 23.5l5.832-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.664-.493-5.2-1.356l-.372-.22-3.463.908.924-3.375-.242-.387A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar com Carlos agora
            </a>

            <a
              href="#solucoes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 14,
                background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                color: dark ? '#E4E4E7' : '#3F3F46',
                fontWeight: 600,
                fontSize: 15.5,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.background = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              }}
            >
              Ver maquininhas
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-animate"
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 48,
              paddingTop: 32,
              borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '+500', label: 'Clientes ativos' },
              { value: '8 anos', label: 'De experiência' },
              { value: 'PR · SC · RS', label: 'Região Sul' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 24, color: '#00C86F', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: dark ? '#71717A' : '#71717A', marginTop: 4, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: consultant photo card */}
        <div
          className="hero-animate hero-photo-wrap"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <HeroPhotoCard dark={dark} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function HeroPhotoCard({ dark }: { dark: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Photo frame */}
      <div
        style={{
          borderRadius: 28,
          overflow: 'hidden',
          aspectRatio: '4/5',
          position: 'relative',
          boxShadow: dark
            ? '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)'
            : '0 32px 80px rgba(0,200,111,0.14), 0 0 0 1px rgba(0,0,0,0.05)',
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <img
          src={consultorPhoto}
          alt="Carlos Alexandre — Consultor PagBank"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Bottom overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Name tag */}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: -20,
          borderRadius: 16,
          padding: '14px 18px',
          background: dark ? 'rgba(18,18,22,0.96)' : 'rgba(255,255,255,0.97)',
          border: dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          backdropFilter: 'blur(20px)',
          animation: 'float 8s ease-in-out infinite reverse',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #00C86F, #008C52)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,200,111,0.3)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: dark ? '#FAFAFA' : '#09090B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Consultor Certificado
          </div>
          <div style={{ fontSize: 11.5, color: '#00C86F', fontWeight: 500 }}>PagBank Oficial</div>
        </div>
      </div>

      {/* Floating stats card */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: -24,
          borderRadius: 14,
          padding: '14px 18px',
          background: dark ? 'rgba(18,18,22,0.96)' : 'rgba(255,255,255,0.97)',
          border: dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          backdropFilter: 'blur(20px)',
          animation: 'float 9s ease-in-out infinite',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(0,200,111,0.1)',
            border: '1px solid rgba(0,200,111,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: dark ? '#FAFAFA' : '#09090B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            +500 empresas
          </div>
          <div style={{ fontSize: 11.5, color: dark ? '#71717A' : '#71717A' }}>Já confiam no Carlos</div>
        </div>
      </div>
    </div>
  )
}
