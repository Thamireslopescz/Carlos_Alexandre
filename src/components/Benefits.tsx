import { useEffect, useRef } from 'react'

interface Props {
  dark: boolean
}

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Zero mensalidade',
    desc: 'Sem taxa de adesão, sem aluguel, sem surpresas na fatura. Você paga apenas sobre o que vende.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Receba em 1 dia útil',
    desc: 'Antecipação de recebíveis com as menores taxas do mercado. Fluxo de caixa saudável sempre.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
    title: 'Conta PJ completa',
    desc: 'Conta digital empresarial gratuita com cartão, transferências ilimitadas e rendimento automático.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Atendimento humanizado',
    desc: 'Fale diretamente com Carlos por WhatsApp. Sem call center, sem robôs, sem esperas infinitas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Dashboard completo',
    desc: 'Acompanhe vendas em tempo real, relatórios detalhados e gestão do negócio pelo app ou desktop.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" strokeLinecap="round" />
      </svg>
    ),
    title: 'Aceite todas as bandeiras',
    desc: 'Visa, Mastercard, Elo, Amex, Hipercard e carteiras digitais. Nenhuma venda perdida por falta de aceitação.',
  },
]

export default function Benefits({ dark }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ben-item').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 80)
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
      id="beneficios"
      style={{
        padding: '100px 0',
        background: dark
          ? 'linear-gradient(180deg, rgba(0,200,111,0.03) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(0,200,111,0.03) 0%, transparent 100%)',
      }}
      aria-label="Benefícios"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
            marginBottom: 64,
          }}
          className="benefits-header"
        >
          <div>
            <div
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
              }}
            >
              Por que escolher
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 46px)',
                letterSpacing: '-0.03em',
                color: dark ? '#FAFAFA' : '#09090B',
                lineHeight: 1.1,
              }}
            >
              Tudo que seu negócio precisa{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00C86F, #008C52)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                em um só lugar
              </span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              color: dark ? '#71717A' : '#71717A',
              lineHeight: 1.7,
            }}
          >
            Trabalhar com Carlos Alexandre é ter um especialista ao seu lado —
            alguém que conhece as necessidades reais do seu negócio e entrega soluções
            que realmente funcionam, sem enrolação.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="benefits-grid"
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="ben-item"
              style={{
                padding: '28px 24px',
                borderRadius: 18,
                background: dark ? 'rgba(24,24,27,0.7)' : 'rgba(255,255,255,0.85)',
                border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.04)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-3px)'
                el.style.borderColor = 'rgba(0,200,111,0.2)'
                el.style.boxShadow = dark
                  ? '0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,200,111,0.08)'
                  : '0 8px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,200,111,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.borderColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                el.style.boxShadow = dark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.04)'
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: dark ? 'rgba(0,200,111,0.1)' : 'rgba(0,200,111,0.08)',
                  border: '1px solid rgba(0,200,111,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00C86F',
                  marginBottom: 18,
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 16.5,
                  color: dark ? '#FAFAFA' : '#09090B',
                  letterSpacing: '-0.02em',
                  marginBottom: 10,
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: 14, color: dark ? '#71717A' : '#71717A', lineHeight: 1.65 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .benefits-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
