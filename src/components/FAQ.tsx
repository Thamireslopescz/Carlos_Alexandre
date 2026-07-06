import { useState, useRef, useEffect } from 'react'

interface Props {
  dark: boolean
}

const faqs = [
  {
    q: 'Preciso pagar alguma mensalidade ou taxa de adesão?',
    a: 'Não. O PagBank não cobra mensalidade, taxa de adesão ou aluguel de maquininha. Você paga apenas a taxa sobre cada transação realizada. Nada mais.',
  },
  {
    q: 'Em quanto tempo recebo o dinheiro das vendas?',
    a: 'Para débito e Pix, o valor cai na conta em até 1 dia útil. Para crédito à vista, também em 1 dia útil com antecipação automática. Parcelado você recebe conforme as parcelas caem — ou pode antecipar tudo com taxas especiais.',
  },
  {
    q: 'Quais bandeiras e meios de pagamento são aceitos?',
    a: 'Todas as principais bandeiras: Visa, Mastercard, Elo, American Express, Hipercard, Diners, JCB. Além de carteiras digitais como Apple Pay, Google Pay e Samsung Pay. E claro, Pix.',
  },
  {
    q: 'Quanto tempo leva para ter a maquininha em mãos?',
    a: 'Após a aprovação cadastral (que geralmente leva 24h), a entrega acontece em até 5 dias úteis. Para algumas regiões do Paraná, Santa Catarina e Rio Grande do Sul, a entrega pode ser ainda mais rápida.',
  },
  {
    q: 'Posso ter mais de uma maquininha?',
    a: 'Sim! Muitos clientes têm múltiplas máquinas em pontos diferentes — lojas, caixas, vendedores externos. Carlos vai ajudá-lo a estruturar o melhor setup para a sua operação.',
  },
  {
    q: 'E se eu tiver problemas técnicos com a maquininha?',
    a: 'O PagBank tem suporte técnico disponível 7 dias por semana. Além disso, Carlos acompanha diretamente seus clientes e facilita qualquer resolução necessária — é só chamar no WhatsApp.',
  },
  {
    q: 'A conta PJ do PagBank é realmente gratuita?',
    a: 'Sim. A conta digital PJ do PagBank é 100% gratuita, sem mensalidade. Inclui cartão de crédito e débito, transferências via TED/PIX, e o saldo rende automaticamente ao CDI.',
  },
]

function FaqItem({ q, a, dark }: { q: string; a: string; dark: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderRadius: 14,
        background: open
          ? dark ? 'rgba(0,200,111,0.06)' : 'rgba(0,200,111,0.04)'
          : dark ? 'rgba(24,24,27,0.6)' : 'rgba(255,255,255,0.8)',
        border: open
          ? '1px solid rgba(0,200,111,0.2)'
          : dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        marginBottom: 10,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%',
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: 15.5,
            color: open ? '#00C86F' : dark ? '#E4E4E7' : '#18181B',
            lineHeight: 1.4,
            transition: 'color 0.2s ease',
          }}
        >
          {q}
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: open ? 'rgba(0,200,111,0.12)' : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: open ? '#00C86F' : dark ? '#71717A' : '#71717A',
            transition: 'all 0.2s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      {open && (
        <div
          style={{
            padding: '0 22px 20px',
            fontSize: 14.5,
            color: dark ? '#A1A1AA' : '#52525B',
            lineHeight: 1.7,
          }}
        >
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ({ dark }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.faq-animate').forEach((el, i) => {
              setTimeout(() => {
                ;(el as HTMLElement).style.opacity = '1'
                ;(el as HTMLElement).style.transform = 'translateY(0)'
              }, i * 60)
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
      style={{
        padding: '100px 0',
        background: dark
          ? 'linear-gradient(180deg, transparent 0%, rgba(0,200,111,0.02) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(0,200,111,0.02) 100%)',
      }}
      aria-label="Perguntas frequentes"
    >
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          className="faq-animate"
          style={{
            textAlign: 'center',
            marginBottom: 52,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
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
            Tire suas dúvidas
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 42px)',
              letterSpacing: '-0.03em',
              color: dark ? '#FAFAFA' : '#09090B',
              lineHeight: 1.1,
            }}
          >
            Perguntas frequentes
          </h2>
        </div>

        {/* FAQ list */}
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-animate"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <FaqItem q={faq.q} a={faq.a} dark={dark} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="faq-animate"
          style={{
            textAlign: 'center',
            marginTop: 40,
            opacity: 0,
            transform: 'translateY(16px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <p style={{ fontSize: 15, color: dark ? '#71717A' : '#71717A', lineHeight: 1.6 }}>
            Ainda tem dúvidas?{' '}
            <a
              href="https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20uma%20dúvida!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00C86F',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,200,111,0.3)',
                paddingBottom: 1,
                transition: 'border-color 0.2s',
              }}
            >
              Fale diretamente com Carlos no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
