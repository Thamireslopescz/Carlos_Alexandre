interface Props {
  dark: boolean
}

export default function TrustBar({ dark }: Props) {
  const metrics = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Empresa regulada pelo Banco Central',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Aprovação em até 24 horas',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
        </svg>
      ),
      label: 'Suporte 7 dias por semana',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" />
        </svg>
      ),
      label: 'Sem taxa de adesão ou mensalidade',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C86F" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        </svg>
      ),
      label: 'Gestão completa pelo app',
    },
  ]

  return (
    <section
      style={{
        borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        background: dark
          ? 'rgba(0,200,111,0.03)'
          : 'rgba(0,200,111,0.02)',
        padding: '20px 0',
      }}
      aria-label="Diferenciais"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 0',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: dark ? 'rgba(0,200,111,0.08)' : 'rgba(0,200,111,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {m.icon}
            </div>
            <span
              style={{
                fontSize: 13.5,
                fontWeight: 500,
                color: dark ? '#A1A1AA' : '#52525B',
                whiteSpace: 'nowrap',
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
