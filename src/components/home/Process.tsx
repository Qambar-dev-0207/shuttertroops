const Process = () => {
  return (
    <section className="bg-black grainy">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-num">04 / THE PROCESS</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'white', lineHeight: 0.9 }}>Smarter. Faster. <br /><span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Unforgettable.</span></h2>
        </div>
        
        <div className="grid-3">
          <div className="grainy" style={{ border: '1px solid #333', padding: '3rem', background: '#080808' }}>
            <h3 className="serif" style={{ color: 'var(--red)', fontSize: '3rem', marginBottom: '1.5rem' }}>01</h3>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Discovery</h4>
            <p style={{ color: '#888', lineHeight: 1.6 }}>Deep dive into your brand DNA, target audience, and market positioning to find the unique "hook".</p>
          </div>
          <div className="grainy" style={{ border: '1px solid #333', padding: '3rem', background: '#080808' }}>
            <h3 className="serif" style={{ color: 'var(--red)', fontSize: '3rem', marginBottom: '1.5rem' }}>02</h3>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Crafting</h4>
            <p style={{ color: '#888', lineHeight: 1.6 }}>Cinematic production using state-of-the-art equipment and post-production techniques that ensure perfection.</p>
          </div>
          <div className="grainy" style={{ border: '1px solid #333', padding: '3rem', background: '#080808' }}>
            <h3 className="serif" style={{ color: 'var(--red)', fontSize: '3rem', marginBottom: '1.5rem' }}>03</h3>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Delivery</h4>
            <p style={{ color: '#888', lineHeight: 1.6 }}>Omni-channel assets optimized for every platform, ensuring your message lands with maximum impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
