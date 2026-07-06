import { useEffect, useRef } from 'react'

const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20interesse%20nas%20soluções%20PagBank!'

interface Props {
  dark: boolean
}

const solutions = [
  {
    id: 'smart',
    name: 'Moderninha Smart 2',
    tag: 'Mais vendida',
    description: 'Maquininha completa com chip, Wi-Fi e Bluetooth. Impressora térmica integrada, bateria de longa duração e acesso ao catálogo de apps.',
    features: ['Chip + Wi-Fi + Bluetooth', 'Impressora térmica', 'Bateria 8h', 'NFC (Aproximação)', 'Catálogo de apps'],
    taxas: 'A partir de 0,99% débito',
    color: '#00C86F',
    highlight: true,
  },
  {
    id: 'pro',
    name: 'Moderninha Pro 2',
    tag: 'Mais completa',
    description: 'A máquina mais poderosa do PagBank. Touchscreen 5.5", Android, Wi-Fi, chip e bateria de longa duração para volumes altos de vendas.',
    features: ['Touchscreen 5.5"', 'Android nativo', 'Wi-Fi + 4G', 'NFC (Aproximação)', 'Antivírus integrado'],
    taxas: 'A partir de 1,09% débito',
    color: '#008C52',
    highlight: false,
  },
  {
    id: 'plus',
    name: 'Moderninha Plus',
    tag: 'Ótimo custo-benefício',
    description: 'Compacta, leve e resistente. Perfeita para pequenos negócios e profissionais autônomos que precisam de mobilidade e praticidade.',
    features: ['Bluetooth + Wi-Fi', 'Impressora integrada', 'Bateria 10h', 'NFC (Aproximação)', 'Resistente a quedas'],
    taxas: 'A partir de 1,19% débito',
    color: '#00A85E',
    highlight: false,
  },
  {
    id: 'tap',
    name: 'Tap on Phone',
    tag: 'Inovação',
    description: 'Transforme seu smartphone em maquininha. Aceite pagamentos por aproximação direto no celular — sem hardware adicional.',
    features: ['Sem hardware extra', 'NFC no celular', 'Gratuito para instalar', 'Atualização automática', 'Aceita todas bandeiras'],
    taxas: 'A partir de 1,39% débito',
    color: '#00C86F',
    highlight: false,
  },
]

export default function Solutions({ dark }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.sol-card').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="solucoes"
      style={{ padding: '100px 0' }}
      aria-label="Soluções PagBank"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
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
            }}
          >
            Portfólio completo
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 46px)',
              letterSpacing: '-0.03em',
              color: dark ? '#FAFAFA' : '#09090B',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Maquininha certa para
            <br />
            cada tipo de negócio
          </h2>
          <p
            style={{
              fontSize: 17,
              color: dark ? '#71717A' : '#71717A',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Do autônomo à empresa de médio porte, temos a solução ideal para maximizar suas vendas.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {solutions.map(sol => (
            <div
              key={sol.id}
              className="sol-card"
              style={{
                borderRadius: 20,
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: 0,
                transform: 'translateY(24px)',
                background: sol.highlight
                  ? dark
                    ? 'linear-gradient(145deg, rgba(0,200,111,0.1), rgba(0,140,82,0.06))'
                    : 'linear-gradient(145deg, rgba(0,200,111,0.07), rgba(0,140,82,0.04))'
                  : dark
                    ? 'rgba(24,24,27,0.8)'
                    : 'rgba(255,255,255,0.9)',
                border: sol.highlight
                  ? '1px solid rgba(0,200,111,0.25)'
                  : dark
                    ? '1px solid rgba(255,255,255,0.07)'
                    : '1px solid rgba(0,0,0,0.07)',
                boxShadow: sol.highlight
                  ? dark
                    ? '0 8px 40px rgba(0,200,111,0.15)'
                    : '0 8px 40px rgba(0,200,111,0.1)'
                  : dark
                    ? '0 4px 24px rgba(0,0,0,0.3)'
                    : '0 4px 24px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = sol.highlight
                  ? '0 16px 60px rgba(0,200,111,0.22)'
                  : dark
                    ? '0 12px 40px rgba(0,0,0,0.4)'
                    : '0 12px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = sol.highlight
                  ? dark
                    ? '0 8px 40px rgba(0,200,111,0.15)'
                    : '0 8px 40px rgba(0,200,111,0.1)'
                  : dark
                    ? '0 4px 24px rgba(0,0,0,0.3)'
                    : '0 4px 24px rgba(0,0,0,0.05)'
              }}
            >
              {/* Background decoration */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${sol.color}18, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: 99,
                  background: dark ? `${sol.color}15` : `${sol.color}10`,
                  border: `1px solid ${sol.color}30`,
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: sol.color,
                  marginBottom: 20,
                  letterSpacing: '0.01em',
                }}
              >
                {sol.tag}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: dark ? '#FAFAFA' : '#09090B',
                  letterSpacing: '-0.02em',
                  marginBottom: 10,
                }}
              >
                {sol.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: dark ? '#71717A' : '#71717A',
                  lineHeight: 1.6,
                  marginBottom: 22,
                }}
              >
                {sol.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {sol.features.map(f => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13.5,
                      color: dark ? '#A1A1AA' : '#52525B',
                      fontWeight: 500,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={sol.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Taxa */}
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  background: dark ? 'rgba(0,200,111,0.06)' : 'rgba(0,200,111,0.05)',
                  border: '1px solid rgba(0,200,111,0.12)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#00C86F',
                  marginBottom: 20,
                }}
              >
                {sol.taxas}
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '11px',
                  borderRadius: 12,
                  background: sol.highlight
                    ? 'linear-gradient(135deg, #00C86F, #00A85E)'
                    : dark
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.04)',
                  border: sol.highlight
                    ? 'none'
                    : dark
                      ? '1px solid rgba(255,255,255,0.1)'
                      : '1px solid rgba(0,0,0,0.08)',
                  color: sol.highlight ? '#fff' : dark ? '#E4E4E7' : '#27272A',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: sol.highlight ? '0 4px 16px rgba(0,200,111,0.25)' : 'none',
                }}
                onMouseEnter={e => {
                  if (!sol.highlight) {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = dark
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(0,0,0,0.07)'
                  }
                }}
                onMouseLeave={e => {
                  if (!sol.highlight) {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = dark
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.04)'
                  }
                }}
              >
                Quero essa maquininha
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
