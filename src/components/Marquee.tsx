

const Marquee = () => {
  const items = ["Cinematic Excellence", "Strategic Impact", "Digital Evolution", "Bespoke Design"];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item}
            <div className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
