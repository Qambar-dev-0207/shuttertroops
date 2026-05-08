const Marquee = () => {
  const items = ['Brand films', 'Color & sound', 'Social cutdowns', 'Documentary', 'Title design', 'Reels & TVCs'];

  return (
    <div style={{ background: 'var(--canvas)', padding: '0 0 4rem' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items, ...items].map((item, idx) => (
            <div key={idx} className="marquee-item">
              {item}
              <div className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
