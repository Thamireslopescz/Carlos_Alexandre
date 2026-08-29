import { useState, useRef, useEffect } from 'react'

interface Props {
  dark: boolean
}

const faqs = [
  {
    q: 'Preciso pagar mensalidade ou taxa de adesão para usar a maquininha?',
    a: 'Não. O PagBank não cobra mensalidade, taxa de adesão nem aluguel de maquininha. Você paga apenas a taxa sobre cada transação realizada. Sem letras miúdas, sem surpresas.',
  },
  {
    q: 'Quais são as formas de pagamento aceitas pela maquininha?',
    a: 'As maquininhas PagBank aceitam crédito, débito, voucher, carteiras digitais (Apple Pay, Google Pay, Samsung Pay) e Pix. As principais bandeiras são: Visa, Mastercard, Elo, American Express, Hipercard, Diners Club e JCB.',
  },
  {
    q: 'O que é a Antecipação de Vendas e como funciona?',
    a: 'A Antecipação de Vendas permite que você acesse antecipadamente os valores das suas vendas no crédito parcelado. Em vez de aguardar o prazo de cada parcela, o dinheiro fica disponível na sua conta PagBank com mais agilidade. É possível antecipar tudo de uma vez ou conforme sua necessidade.',
  },
  {
    q: 'Como funciona o Link de Pagamento?',
    a: 'O Link de Pagamento permite que você cobre clientes pelas redes sociais, WhatsApp ou qualquer canal digital. Você cria o link gratuitamente no app PagBank e envia para o cliente pagar — sem precisar de maquininha física.',
  },
  {
    q: 'Qual a diferença entre as maquininhas PagBank?',
    a: 'Cada modelo tem um perfil de uso: a Moderninha Smart 2 é a mais versátil com Android e catálogo de apps; a Pro 2 é a mais potente para alto volume; a Plus 2 é mais rápida e compacta; a Minizinha Chip 3 é ideal para mobilidade com chip 4G; a Minizinha NFC 2 é a mais portátil; e o Tap On Phone transforma o celular em maquininha.',
  },
  {
    q: 'O que é a Conta PJ do PagBank?',
    a: 'A Conta PJ do PagBank é uma conta digital empresarial gratuita, sem mensalidade. Inclui cartão de crédito e débito, Pix ilimitado, TED, boleto, e o saldo fica rendendo automaticamente. Toda a gestão é feita pelo app ou internet banking.',
  },
  {
    q: 'O PagBank oferece soluções para empresas maiores?',
    a: 'Sim. Além das maquininhas, o PagBank oferece soluções enterprise como PlugPag, TEF (Transferência Eletrônica de Fundos), PagTotem (autoatendimento), Split de Pagamentos, Pagamento Recorrente e Conciliação Financeira.',
  },
  {
    q: 'Como entro em contato para obter uma proposta?',
    a: 'Fale diretamente com Carlos Alexandre pelo WhatsApp. Ele realiza uma análise gratuita do perfil do seu negócio e apresenta a proposta mais adequada — sem compromisso e com total transparência.',
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
          ? '1px solid rgba(0,200,111,0.22)'
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
            fontSize: 15,
            color: open ? '#00C86F' : dark ? '#E4E4E7' : '#18181B',
            lineHeight: 1.45,
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
            lineHeight: 1.75,
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
              }, i * 50)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{ padding: '100px 0' }}
      aria-label="Perguntas frequentes"
    >
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
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
              border: '1px solid rgba(0,200,111,0.2)',
              marginBottom: 20,
              fontSize: 12.5,
              fontWeight: 600,
              color: '#00C86F',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Dúvidas frequentes
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
            Tudo que você precisa saber
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-animate"
              style={{
                opacity: 0,
                transform: 'translateY(14px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <FaqItem q={faq.q} a={faq.a} dark={dark} />
            </div>
          ))}
        </div>

        <div
          className="faq-animate"
          style={{
            textAlign: 'center',
            marginTop: 40,
            opacity: 0,
            transform: 'translateY(14px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <p style={{ fontSize: 15, color: dark ? '#71717A' : '#71717A', lineHeight: 1.6 }}>
            Não encontrou sua resposta?{' '}
            <a
              href="https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20uma%20dúvida!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00C86F',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,200,111,0.35)',
                paddingBottom: 1,
                transition: 'border-color 0.2s',
              }}
            >
              Pergunte direto no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
