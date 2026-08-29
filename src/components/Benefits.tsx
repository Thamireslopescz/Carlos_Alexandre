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
    title: 'Sem mensalidade nem aluguel',
    desc: 'Nenhuma taxa fixa, nenhuma surpresa no fim do mês. Você paga apenas sobre o que efetivamente vende.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Antecipação de Vendas',
    desc: 'Acesse antecipadamente os valores das suas vendas no crédito. Mais fluxo de caixa quando você precisar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
    title: 'Conta PJ gratuita',
    desc: 'Conta digital empresarial sem mensalidade — com cartão, Pix ilimitado, TED e rendimento automático.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.73a16 16 0 006.29 6.29l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Atendimento direto com o Especialista',
    desc: 'Fale diretamente pelo WhatsApp. Sem call center, sem fila de espera. Resposta ágil e suporte contínuo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Gestão completa no app',
    desc: 'Acompanhe cada venda em tempo real, gere relatórios e gerencie toda a operação pelo app ou desktop.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" strokeLinecap="round" />
      </svg>
    ),
    title: 'Todas as bandeiras e carteiras',
    desc: 'Visa, Mastercard, Elo, Amex, Hipercard, Pix e carteiras digitais. Nenhuma venda perdida.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Soluções enterprise',
    desc: 'PlugPag, TEF, PagTotem, Split de Pagamentos e Conciliação Financeira para operações de maior porte.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Link de Pagamento gratuito',
    desc: 'Venda pelo WhatsApp, Instagram e Facebook. Crie links de pagamento sem custo e receba de qualquer lugar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Aprovação ágil',
    desc: 'Cadastro simples, suporte em cada etapa e aprovação rapida, sem burocracia!',
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
              }, i * 60)
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
      id="beneficios"
      style={{
        padding: '100px 0',
        background: dark
          ? 'linear-gradient(180deg, rgba(0,200,111,0.025) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(0,200,111,0.025) 0%, transparent 100%)',
      }}
      aria-label="Benefícios"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}
          className="benefits-header"
        >
          <div>
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
              Por que escolher Carlos
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
              Tudo para o seu negócio{' '}
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
          <p style={{ fontSize: 16.5, color: dark ? '#71717A' : '#71717A', lineHeight: 1.75 }}>
            O PagBank é o banco completo para o empreendedor. Com Carlos como seu consultor,
            você tem acesso a todo o ecossistema PagBank com atendimento personalizado,
            agilidade na aprovação e suporte direto.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          className="benefits-grid"
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="ben-item"
              style={{
                padding: '24px 22px',
                borderRadius: 18,
                background: dark ? 'rgba(24,24,27,0.7)' : 'rgba(255,255,255,0.85)',
                border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: dark ? '0 4px 20px rgba(0,0,0,0.25)' : '0 4px 20px rgba(0,0,0,0.04)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-3px)'
                el.style.borderColor = 'rgba(0,200,111,0.2)'
                el.style.boxShadow = dark
                  ? '0 8px 36px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,200,111,0.07)'
                  : '0 8px 36px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,200,111,0.07)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.borderColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                el.style.boxShadow = dark ? '0 4px 20px rgba(0,0,0,0.25)' : '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: dark ? 'rgba(0,200,111,0.1)' : 'rgba(0,200,111,0.08)',
                  border: '1px solid rgba(0,200,111,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00C86F',
                  marginBottom: 16,
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15.5,
                  color: dark ? '#FAFAFA' : '#09090B',
                  letterSpacing: '-0.02em',
                  marginBottom: 8,
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: 13.5, color: dark ? '#71717A' : '#71717A', lineHeight: 1.65 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-header { grid-template-columns: 1fr !important; gap: 20px !important; }
          .benefits-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
