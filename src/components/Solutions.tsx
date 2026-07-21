import { useEffect, useRef } from 'react'

const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20interesse%20nas%20soluções%20PagBank!'

interface Props {
  dark: boolean
}

const solutions = [
  {
    id: 'smart2',
    name: 'Moderninha Smart 2',
    tag: 'Mais vendida',
    tagline: 'A máquina de fazer dinheiro',
    description: 'Chip, Wi-Fi e Bluetooth. Impressora térmica integrada, NFC para pagamentos por aproximação e acesso ao catálogo de aplicativos PagBank.',
    features: ['Chip + Wi-Fi + Bluetooth', 'NFC — Aproximação', 'Impressora térmica', 'Catálogo de apps', 'Bateria de longa duração'],
    highlight: true,
    color: '#00C86F',
  },
  {
    id: 'pro2',
    name: 'Moderninha Pro 2',
    tag: 'Mais completa',
    tagline: 'A solução completa pra você vender muito',
    description: 'Touchscreen de alta resolução com Android nativo, Wi-Fi 4G, NFC e desempenho robusto para altos volumes de venda.',
    features: ['Touchscreen alta resolução', 'Android nativo', 'Wi-Fi + 4G', 'NFC — Aproximação', 'Antivírus integrado'],
    highlight: false,
    color: '#008C52',
  },
  {
    id: 'plus2',
    name: 'Moderninha Plus 2',
    tag: 'Mais rápida',
    tagline: 'Mais rápida, mais bonita, mais moderninha',
    description: 'Design compacto e resistente com maior velocidade de processamento. Ideal para quem precisa de agilidade no atendimento.',
    features: ['Bluetooth + Wi-Fi', 'Processamento rápido', 'NFC — Aproximação', 'Impressora integrada', 'Design premium'],
    highlight: false,
    color: '#00A85E',
  },
  {
    id: 'minizinha',
    name: 'Minizinha Chip 3',
    tag: 'Melhor custo-benefício',
    tagline: 'Pequena no tamanho, gigante nas vendas',
    description: 'Compacta com chip e Wi-Fi integrados. Leve, resistente e ideal para profissionais autônomos e pequenos negócios.',
    features: ['Chip 4G integrado', 'Wi-Fi', 'NFC — Aproximação', 'Ultra compacta', 'Bateria duradoura'],
    highlight: false,
    color: '#00B862',
  },
  {
    id: 'mininfc',
    name: 'Minizinha NFC 2',
    tag: 'Mobilidade máxima',
    tagline: 'Pequena no preço, gigante nas vendas',
    description: 'A maquininha mais portátil do PagBank. Perfeita para quem vende na rua, eventos e feiras, sem abrir mão da tecnologia NFC.',
    features: ['NFC — Aproximação', 'Ultra portátil', 'Bluetooth', 'Fácil de usar', 'Leve e resistente'],
    highlight: false,
    color: '#00C86F',
  },
  {
    id: 'tap',
    name: 'Tap On Phone',
    tag: 'Inovação',
    tagline: 'Seu celular vira maquininha',
    description: 'Transforme seu smartphone em ponto de venda. Aceite cartões por aproximação diretamente no celular, sem nenhum hardware extra.',
    features: ['Sem hardware adicional', 'NFC no celular', 'Download gratuito', 'Todas as bandeiras', 'Pix integrado'],
    highlight: false,
    color: '#008C52',
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
              }, i * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="solucoes"
      style={{ padding: '100px 0' }}
      aria-label="Soluções e Maquininhas PagBank"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '5px 14px',
              borderRadius: 99,
              background: dark ? 'rgba(0,200,111,0.08)' : 'rgba(0,200,111,0.07)',
              border: '1px solid rgba(0,200,111,0.2)',
              marginBottom: 20,
              fontSize: 12.5,
              fontWeight: 600,
              color: '#00C86F',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Portfólio completo PagBank
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
          <p style={{ fontSize: 17, color: dark ? '#71717A' : '#71717A', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            Do autônomo à empresa de médio porte — Carlos apresenta a solução ideal
            e cuida de todo o processo até você vender no mesmo dia.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}
          className="sol-grid"
        >
          {solutions.map(sol => (
            <div
              key={sol.id}
              className="sol-card"
              style={{
                borderRadius: 20,
                padding: '26px 24px',
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
                  : dark ? 'rgba(24,24,27,0.8)' : 'rgba(255,255,255,0.9)',
                border: sol.highlight
                  ? '1px solid rgba(0,200,111,0.28)'
                  : dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                boxShadow: sol.highlight
                  ? dark ? '0 8px 40px rgba(0,200,111,0.15)' : '0 8px 40px rgba(0,200,111,0.1)'
                  : dark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = sol.highlight
                  ? '0 16px 60px rgba(0,200,111,0.22)'
                  : dark ? '0 12px 40px rgba(0,0,0,0.4)' : '0 12px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = sol.highlight
                  ? dark ? '0 8px 40px rgba(0,200,111,0.15)' : '0 8px 40px rgba(0,200,111,0.1)'
                  : dark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              {/* Bg glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 100, height: 100, borderRadius: '50%',
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
                  border: `1px solid ${sol.color}35`,
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: sol.color,
                  marginBottom: 16,
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
                  fontSize: 17,
                  color: dark ? '#FAFAFA' : '#09090B',
                  letterSpacing: '-0.02em',
                  marginBottom: 4,
                }}
              >
                {sol.name}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontSize: 12.5,
                  color: sol.color,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  marginBottom: 12,
                }}
              >
                "{sol.tagline}"
              </p>

              {/* Description */}
              <p style={{ fontSize: 13.5, color: dark ? '#71717A' : '#71717A', lineHeight: 1.6, marginBottom: 20 }}>
                {sol.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 22 }}>
                {sol.features.map(f => (
                  <li
                    key={f}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: 13, color: dark ? '#A1A1AA' : '#52525B', fontWeight: 500,
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={sol.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

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
                    : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  border: sol.highlight
                    ? 'none'
                    : dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                  color: sol.highlight ? '#fff' : dark ? '#E4E4E7' : '#27272A',
                  fontWeight: 600,
                  fontSize: 13.5,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: sol.highlight ? '0 4px 16px rgba(0,200,111,0.28)' : 'none',
                }}
              >
                Quero essa maquininha
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Digital solutions strip */}
        <div
          style={{
            marginTop: 40,
            padding: '28px 32px',
            borderRadius: 20,
            background: dark
              ? 'linear-gradient(135deg, rgba(0,200,111,0.07), rgba(0,140,82,0.04))'
              : 'linear-gradient(135deg, rgba(0,200,111,0.06), rgba(0,140,82,0.03))',
            border: dark ? '1px solid rgba(0,200,111,0.15)' : '1px solid rgba(0,200,111,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: dark ? '#FAFAFA' : '#09090B', marginBottom: 6 }}>
              Soluções digitais para vender online
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['Link de Pagamento', 'Pix', 'Checkout PagBank', 'Pagamento Recorrente', 'Gestão de Cobrança'].map(s => (
                <span
                  key={s}
                  style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    color: dark ? '#71717A' : '#52525B',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <span style={{ color: '#00C86F', fontWeight: 700 }}>·</span> {s}
                </span>
              ))}
            </div>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 22px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #00C86F, #00A85E)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,200,111,0.3)',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,200,111,0.4)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,200,111,0.3)'
            }}
          >
            Conhecer soluções digitais
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .sol-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .sol-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
