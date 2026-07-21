const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20interesse%20nas%20soluções%20PagBank!'

interface Props {
  dark: boolean
}

export default function Footer({ dark }: Props) {
  const links = [
    { label: 'Maquininhas', href: '#solucoes' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Sobre Carlos', href: '#sobre' },
    { label: 'Dúvidas', href: '#contato' },
  ]

  const solutions = [
    'Moderninha Smart 2',
    'Moderninha Pro 2',
    'Moderninha Plus 2',
    'Minizinha Chip 3',
    'Minizinha NFC 2',
    'Tap On Phone',
  ]

  const digital = [
    'Conta PJ gratuita',
    'Link de Pagamento',
    'Antecipação de Vendas',
    'Pix',
    'Gestão de Cobrança',
    'Pagamento Recorrente',
  ]

  return (
    <footer
      style={{
        borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        padding: '60px 24px 32px',
        background: dark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.01)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 52 }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'linear-gradient(135deg, #00C86F, #008C52)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 12px rgba(0, 200, 111, 0.3)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L17 6V10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10V6L10 2Z" fill="white" opacity="0.9" />
                  <path d="M7 10L9.5 12.5L13.5 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: dark ? '#FAFAFA' : '#09090B', letterSpacing: '-0.02em' }}>
                  Carlos Alexandre
                </div>
                <div style={{ fontSize: 11, color: '#00C86F', fontWeight: 500 }}>Consultor PagBank · Sul do Brasil</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: dark ? '#71717A' : '#71717A', lineHeight: 1.7, maxWidth: 280 }}>
              Consultor comercial certificado PagBank, especializado em soluções financeiras e meios de pagamento para empresas do Paraná, Santa Catarina e Rio Grande do Sul.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginTop: 20, padding: '10px 20px', borderRadius: 10,
                background: 'linear-gradient(135deg, #00C86F, #00A85E)',
                color: '#fff', fontWeight: 600, fontSize: 13.5,
                textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,200,111,0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,200,111,0.4)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 10px rgba(0,200,111,0.3)'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.523 5.826L.057 23.5l5.832-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.664-.493-5.2-1.356l-.372-.22-3.463.908.924-3.375-.242-.387A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Maquininhas */}
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, color: dark ? '#FAFAFA' : '#09090B', marginBottom: 16, letterSpacing: '-0.01em' }}>
              Maquininhas
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {solutions.map(s => (
                <li key={s}>
                  <a
                    href="#solucoes"
                    style={{ fontSize: 13, color: dark ? '#71717A' : '#71717A', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s ease' }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#00C86F')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = dark ? '#71717A' : '#71717A')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções digitais */}
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, color: dark ? '#FAFAFA' : '#09090B', marginBottom: 16, letterSpacing: '-0.01em' }}>
              Soluções digitais
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {digital.map(d => (
                <li key={d}>
                  <a
                    href="#solucoes"
                    style={{ fontSize: 13, color: dark ? '#71717A' : '#71717A', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s ease' }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#00C86F')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = dark ? '#71717A' : '#71717A')}
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, color: dark ? '#FAFAFA' : '#09090B', marginBottom: 16, letterSpacing: '-0.01em' }}>
              Navegação
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ fontSize: 13, color: dark ? '#71717A' : '#71717A', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s ease' }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#00C86F')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = dark ? '#71717A' : '#71717A')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* PagBank support note */}
            <div
              style={{
                marginTop: 24,
                padding: '12px 14px',
                borderRadius: 12,
                background: dark ? 'rgba(0,200,111,0.06)' : 'rgba(0,200,111,0.05)',
                border: '1px solid rgba(0,200,111,0.12)',
              }}
            >
              <div style={{ fontSize: 11.5, fontWeight: 600, color: '#00C86F', marginBottom: 4 }}>Suporte PagBank</div>
              <div style={{ fontSize: 11.5, color: dark ? '#71717A' : '#71717A', lineHeight: 1.6 }}>
                Capitais: 4003-1775<br />
                Demais: 0800-728-2174<br />
                Fraudes 24h: 3004-4770
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12.5, color: dark ? '#52525B' : '#A1A1AA' }}>
            © {new Date().getFullYear()} Carlos Alexandre · Consultor PagBank — Região Sul do Brasil
          </p>
          <p style={{ fontSize: 12, color: dark ? '#3F3F46' : '#D4D4D8', maxWidth: 500, textAlign: 'right', lineHeight: 1.5 }}>
            Esta é uma página de prospecção de um consultor comercial independente do PagBank. Não é uma página oficial do PagBank S.A. Para canais oficiais, acesse pagbank.com.br.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
