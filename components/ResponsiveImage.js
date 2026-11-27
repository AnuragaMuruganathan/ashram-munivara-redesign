export default function ResponsiveImage({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  priority = false,
  className = "",
}) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
