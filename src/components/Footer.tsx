const WHATSAPP = 'https://wa.me/5541999999999?text=Olá%20Carlos%2C%20tenho%20interesse%20nas%20soluções%20PagBank!'

interface Props {
  dark: boolean
}

export default function Footer({ dark }: Props) {
  const links = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Perguntas frequentes', href: '#contato' },
  ]

  return (
    <footer
      style={{
        borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        padding: '48px 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 40,
          }}
        >
          {/* Logo */}
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
                boxShadow: '0 2px 12px rgba(0, 200, 111, 0.3)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L17 6V10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10V6L10 2Z" fill="white" opacity="0.9" />
                <path d="M7 10L9.5 12.5L13.5 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: dark ? '#FAFAFA' : '#09090B',
                  letterSpacing: '-0.02em',
                }}
              >
                Carlos Alexandre
              </div>
              <div style={{ fontSize: 11, color: '#00C86F', fontWeight: 500 }}>Consultor PagBank</div>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Links do rodapé" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  color: dark ? '#71717A' : '#71717A',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#00C86F')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = dark ? '#71717A' : '#71717A')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 18px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, #00C86F, #00A85E)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(0,200,111,0.3)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 18px rgba(0,200,111,0.42)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 10px rgba(0,200,111,0.3)'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.523 5.826L.057 23.5l5.832-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.664-.493-5.2-1.356l-.372-.22-3.463.908.924-3.375-.242-.387A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: dark ? '#52525B' : '#A1A1AA' }}>
            © {new Date().getFullYear()} Carlos Alexandre · Consultor PagBank — Região Sul do Brasil
          </p>
          <p style={{ fontSize: 12.5, color: dark ? '#3F3F46' : '#D4D4D8' }}>
            Este site não é uma página oficial do PagBank. É uma página de prospecção comercial de um consultor independente.
          </p>
        </div>
      </div>
    </footer>
  )
}
