export default function ProjectPreview({ src, alt, className = "" }) {
  return (
    <div className={`project-preview-3d ${className}`}>
      <div className="preview-glow" />
      <div className="preview-device">
        <div className="preview-device-bar">
          <span />
          <span />
          <span />
        </div>

        <img src={src} alt={alt} loading="lazy" />

        <div className="preview-reflection" />
      </div>

      <div className="preview-floor" />
    </div>
  );
}