import { useEffect, useRef } from 'react'

interface Props {
  dark: boolean
}

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Proprietária · Café & Padaria Bella',
    location: 'Curitiba, PR',
    avatar: 'MC',
    rating: 5,
    text: 'O Carlos me atendeu de forma diferente de tudo que já tinha visto. Explicou cada detalhe das soluções, me ajudou a escolher a Moderninha certa e configurou tudo. O suporte pelo WhatsApp é rápido e direto — sem fila de espera.',
  },
  {
    name: 'Roberto Almeida',
    role: 'Diretor Comercial · Almeida Distribuidora',
    location: 'Florianópolis, SC',
    avatar: 'RA',
    rating: 5,
    text: 'Precisava de solução para alto volume de vendas. O Carlos entendeu o cenário e trouxe uma proposta com a Moderninha Pro 2 e Antecipação de Vendas. A conta PJ gratuita foi um bônus excelente para a gestão financeira.',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Dentista Autônoma',
    location: 'Porto Alegre, RS',
    avatar: 'JF',
    rating: 5,
    text: 'Precisava de algo simples e confiável. A Minizinha que o Carlos me indicou é perfeita: leve, bateria dura o dia todo e aceita todas as bandeiras e Pix. O Link de Pagamento também facilitou muito o recebimento online.',
  },
  {
    name: 'Felipe Oliveira',
    role: 'Sócio · FO Construções',
    location: 'Maringá, PR',
    avatar: 'FO',
    rating: 5,
    text: 'Nossa empresa tinha volume alto e precisávamos de maquininhas robustas com Split de Pagamentos. O Carlos negociou condições especiais e implantou tudo em menos de uma semana. Atendimento via WhatsApp muito ágil.',
  },
  {
    name: 'Ana Beatriz Santos',
    role: 'Proprietária · Studio AB Estética',
    location: 'Joinville, SC',
    avatar: 'AB',
    rating: 5,
    text: 'Mudei para o PagBank com o Carlos e foi a melhor decisão. A Antecipação de Vendas resolveu meu fluxo de caixa. A conta PJ gratuita organiza tudo em um só lugar. Atendimento impecável do início ao fim.',
  },
  {
    name: 'Gustavo Mendes',
    role: 'Chef & Proprietário · Restaurante Mendes',
    location: 'Blumenau, SC',
    avatar: 'GM',
    rating: 5,
    text: 'O Carlos foi transparente sobre tudo: taxas, funcionalidades e limitações. Sem letras miúdas. Implantamos as Moderninhas em todos os caixas em menos de 3 dias. O app de gestão de vendas é excelente.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }} aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#00C86F">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ dark }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.test-card').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 70)
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
      style={{ padding: '100px 0', overflow: 'hidden' }}
      aria-label="Depoimentos de clientes"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
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
            Quem já confia
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
            Empresários do Sul que já
            <br />
            transformaram seus pagamentos
          </h2>
          {/* Rating bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 14 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="#00C86F">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: dark ? '#FAFAFA' : '#09090B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>4.9</span>
            <span style={{ fontSize: 14, color: dark ? '#71717A' : '#71717A' }}>· mais de 500 clientes satisfeitos</span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}
          className="test-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="test-card"
              style={{
                borderRadius: 20,
                padding: '26px 22px',
                background: dark ? 'rgba(24,24,27,0.8)' : 'rgba(255,255,255,0.9)',
                border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.05)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = dark ? '0 12px 40px rgba(0,0,0,0.4)' : '0 12px 40px rgba(0,0,0,0.09)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = dark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.05)'
              }}
            >
              <Stars count={t.rating} />
              <p
                style={{
                  fontSize: 14,
                  color: dark ? '#A1A1AA' : '#52525B',
                  lineHeight: 1.72,
                  flex: 1,
                  margin: '16px 0 20px',
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00C86F, #008C52)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: dark ? '#FAFAFA' : '#09090B', letterSpacing: '-0.01em' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: dark ? '#71717A' : '#A1A1AA', marginTop: 1 }}>{t.role}</div>
                  <div style={{ fontSize: 11, color: '#00C86F', fontWeight: 500, marginTop: 2 }}>📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .test-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px) { .test-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
