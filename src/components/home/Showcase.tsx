import VideoCard from '../VideoCard';

const showcaseVideos = [
  { title: "Midnight City", category: "BRAND FILM", url: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-from-above-4444-large.mp4" },
  { title: "Oceanic Bliss", category: "COMMERCIAL", url: "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-shore-line-at-a-beach-4462-large.mp4" },
  { title: "Mountain Peak", category: "DOCUMENTARY", url: "https://assets.mixkit.co/videos/preview/mixkit-thick-forest-under-a-clear-sky-4547-large.mp4" },
  { title: "Urban Pulse", category: "DIGITAL AD", url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" },
];

const Showcase = () => {
  return (
    <section className="bg-white grainy" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-num">02 / FEATURED WORK</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9 }}>Weapons of <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Attention.</span></h2>
          <p style={{ color: '#666', marginTop: '1rem', fontSize: '1.1rem' }}>Hover over the cards to enter focus mode.</p>
        </div>
        
        <div className="video-card-grid">
          {showcaseVideos.map((video, idx) => (
            <VideoCard 
              key={idx}
              title={video.title}
              category={video.category}
              videoUrl={video.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
