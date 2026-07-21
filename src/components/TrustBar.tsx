interface Props {
  dark: boolean
}

export default function TrustBar({ dark }: Props) {
  const items = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Regulado pelo Banco Central',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Aprovação cadastral ágil',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <path d="M2 10h20" strokeLinecap="round" />
        </svg>
      ),
      label: 'Conta PJ gratuita',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
      ),
      label: 'Suporte 7 dias por semana',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Ecossistema completo PagBank',
    },
  ]

  return (
    <section
      style={{
        borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        background: dark ? 'rgba(0,200,111,0.025)' : 'rgba(0,200,111,0.02)',
        padding: '18px 0',
      }}
      aria-label="Diferenciais rápidos"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: dark ? 'rgba(0,200,111,0.08)' : 'rgba(0,200,111,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: dark ? '#A1A1AA' : '#52525B',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
