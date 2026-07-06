import { useEffect, useRef } from 'react'

const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20gostaria%20de%20conhecer%20melhor%20suas%20soluções!'

interface Props {
  dark: boolean
}

export default function About({ dark }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about-animate').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const certs = [
    { label: 'Consultor certificado', value: 'PagBank Oficial' },
    { label: 'Anos de experiência', value: '8 anos' },
    { label: 'Clientes na carteira', value: '+500' },
    { label: 'Estados atendidos', value: 'PR · SC · RS' },
  ]

  return (
    <section
      ref={ref}
      id="sobre"
      style={{ padding: '100px 0' }}
      aria-label="Sobre Carlos Alexandre"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Left: visual */}
        <div
          className="about-animate"
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Main photo container */}
            <div
              style={{
                borderRadius: 28,
                overflow: 'hidden',
                background: dark
                  ? 'linear-gradient(145deg, #1a2e20, #0d1a10)'
                  : 'linear-gradient(145deg, #e8f5ee, #d0edda)',
                aspectRatio: '4/5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: dark ? '1px solid rgba(0,200,111,0.15)' : '1px solid rgba(0,200,111,0.12)',
                boxShadow: dark
                  ? '0 24px 80px rgba(0,0,0,0.5)'
                  : '0 24px 80px rgba(0,200,111,0.12)',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&auto=format"
                alt="Carlos Alexandre — Consultor PagBank"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                }}
              />
              {/* Name tag over photo */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div
                  style={{
                    borderRadius: 16,
                    padding: '14px 18px',
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: '#FAFAFA',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Carlos Alexandre
                  </div>
                  <div style={{ fontSize: 13, color: '#00C86F', fontWeight: 500, marginTop: 2 }}>
                    Consultor Comercial · PagBank
                  </div>
                </div>
              </div>
            </div>

            {/* Floating credential card */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                right: -24,
                borderRadius: 16,
                padding: '16px 20px',
                background: dark ? 'rgba(24,24,27,0.95)' : 'rgba(255,255,255,0.97)',
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                backdropFilter: 'blur(20px)',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'linear-gradient(135deg, #00C86F, #008C52)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                  <div style={{ fontSize: 11.5, color: '#00C86F', fontWeight: 500 }}>PagBank Oficial 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <div
            className="about-animate"
            style={{
              display: 'inline-flex',
              padding: '5px 14px',
              borderRadius: 99,
              background: dark ? 'rgba(0,200,111,0.08)' : 'rgba(0,200,111,0.07)',
              border: '1px solid rgba(0,200,111,0.18)',
              marginBottom: 20,
              fontSize: 12.5,
              fontWeight: 600,
              color: '#00C86F',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Quem é Carlos Alexandre
          </div>

          <h2
            className="about-animate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              letterSpacing: '-0.03em',
              color: dark ? '#FAFAFA' : '#09090B',
              lineHeight: 1.1,
              marginBottom: 20,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Um especialista no
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00C86F, #008C52)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              seu lado
            </span>
          </h2>

          <p
            className="about-animate"
            style={{
              fontSize: 16,
              color: dark ? '#A1A1AA' : '#52525B',
              lineHeight: 1.75,
              marginBottom: 16,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Com mais de 8 anos de experiência no mercado de meios de pagamento, Carlos Alexandre atua
            como consultor comercial sênior do PagBank, especializado em atendimento a empresas de
            todos os portes na Região Sul do Brasil.
          </p>
          <p
            className="about-animate"
            style={{
              fontSize: 16,
              color: dark ? '#A1A1AA' : '#52525B',
              lineHeight: 1.75,
              marginBottom: 32,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Sua abordagem é diferente: sem scripts engessados ou propostas genéricas.
            Carlos analisa cada negócio individualmente e apresenta a solução que realmente
            faz sentido — com transparência, agilidade e suporte contínuo.
          </p>

          {/* Credentials grid */}
          <div
            className="about-animate"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
              marginBottom: 36,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            {certs.map(c => (
              <div
                key={c.label}
                style={{
                  padding: '16px 18px',
                  borderRadius: 14,
                  background: dark ? 'rgba(24,24,27,0.8)' : 'rgba(255,255,255,0.9)',
                  border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                  boxShadow: dark ? '0 2px 12px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 18,
                    color: '#00C86F',
                    letterSpacing: '-0.02em',
                    marginBottom: 4,
                  }}
                >
                  {c.value}
                </div>
                <div style={{ fontSize: 12.5, color: dark ? '#71717A' : '#71717A', fontWeight: 500 }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="about-animate"
            style={{
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
                padding: '13px 26px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, #00C86F, #00A85E)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(0,200,111,0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0,200,111,0.48)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(0,200,111,0.35)'
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.523 5.826L.057 23.5l5.832-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.664-.493-5.2-1.356l-.372-.22-3.463.908.924-3.375-.242-.387A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Agendar uma conversa
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
