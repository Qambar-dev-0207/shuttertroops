import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import Counter from '../Counter';

const chartData = [
  { name: 'EXP',   label: 'Experience',    value: 10,  full: 12,   display: '10+ Yrs', counter: { to: 10,  prefix: '',  suffix: '+ Yrs', decimals: 0 } },
  { name: 'CUTS',  label: 'Edits Shipped', value: 850, full: 1000, display: '850+',    counter: { to: 850, prefix: '',  suffix: '+',     decimals: 0 } },
  { name: 'REACH', label: 'Countries',     value: 18,  full: 20,   display: '18+',     counter: { to: 18,  prefix: '',  suffix: '+',     decimals: 0 } },
  { name: 'RET',   label: 'Retention',     value: 92,  full: 100,  display: '92%',     counter: { to: 92,  prefix: '',  suffix: '%',     decimals: 0 } },
];

interface TooltipPayload { payload: { label: string; display: string } }

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'var(--ink)',
          padding: '0.85rem 1.25rem',
          borderRadius: 20,
          color: 'var(--canvas)',
          fontSize: 13,
          letterSpacing: 0.4,
        }}
      >
        <p style={{ margin: 0, textTransform: 'uppercase', fontWeight: 700 }}>{payload[0].payload.label}</p>
        <p style={{ margin: '0.4rem 0 0', fontSize: '1.6rem', color: 'var(--signal-light)', lineHeight: 1, fontWeight: 500 }}>
          {payload[0].payload.display}
        </p>
      </div>
    );
  }
  return null;
};

const Impact = () => {
  return (
    <section className="surface-canvas">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <span className="eyebrow">Studio impact</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Numbers that<br /><span style={{ color: 'var(--signal)' }}>cut through.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            A decade of timelines, color sessions and final masters — pulled from our delivery log.
          </p>
        </div>

        <div
          style={{
            height: 460,
            width: '100%',
            padding: '2.5rem',
            background: 'var(--lifted)',
            borderRadius: 40,
            border: '1px solid rgba(20,20,19,0.06)',
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--ink)', fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}
                dy={15}
              />
              <YAxis hide domain={[0, 'dataMax + 2']} />
              <Tooltip cursor={{ fill: 'rgba(20,20,19,0.04)' }} content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[40, 40, 8, 8]} animationDuration={2000} animationEasing="ease-out">
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--ink)' : 'var(--signal-light)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {chartData.map((item, idx) => (
            <div key={idx} className="stat-tile">
              <div className="stat-num">
                <Counter
                  to={item.counter.to}
                  prefix={item.counter.prefix}
                  suffix={item.counter.suffix}
                  decimals={item.counter.decimals}
                />
              </div>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
