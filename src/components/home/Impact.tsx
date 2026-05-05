import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const chartData = [
  { name: "EXP", label: "Experience", value: 10, full: 12, display: "10+ Yrs" },
  { name: "ROI", label: "Avg. ROI", value: 8.5, full: 10, display: "8.5x" },
  { name: "REACH", label: "Countries", value: 18, full: 20, display: "18+" },
  { name: "RET", label: "Retention", value: 92, full: 100, display: "92%" },
];

interface TooltipPayload {
  payload: {
    label: string;
    display: string;
  };
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        background: 'var(--black)', 
        padding: '1rem 1.5rem', 
        border: '1px solid var(--red)',
        color: 'white',
        fontFamily: 'var(--serif)',
        fontSize: '0.8rem'
      }}>
        <p style={{ margin: 0, letterSpacing: '0.1rem' }}>{payload[0].payload.label.toUpperCase()}</p>
        <p style={{ margin: '0.5rem 0 0', fontSize: '2rem', color: 'var(--red)', lineHeight: 1 }}>{payload[0].payload.display}</p>
      </div>
    );
  }
  return null;
};

const Impact = () => {
  return (
    <section className="bg-white" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-num">05 / MARKET IMPACT</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9 }}>Measured by <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Performance.</span></h2>
        </div>
        
        <div style={{ height: '500px', width: '100%', padding: '2rem', background: 'var(--grey-light)', border: '1px solid var(--grey-mid)' }} className="grainy">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--black)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1rem' }}
                dy={15}
              />
              <YAxis hide domain={[0, 'dataMax + 2']} />
              <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                radius={[2, 2, 0, 0]} 
                animationDuration={2500}
                animationEasing="ease-out"
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--black)' : 'var(--red)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid-4" style={{ marginTop: '6rem', textAlign: 'center' }}>
          {chartData.map((item, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '4rem', fontFamily: 'var(--serif)', marginBottom: '0rem', lineHeight: 0.8 }}>{item.display}</h4>
              <p className="section-num" style={{ fontSize: '0.8rem', margin: '1rem 0 0', letterSpacing: '0.2rem' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
