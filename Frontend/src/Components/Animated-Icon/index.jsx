export default function AnimatedIcon({ svg, centered = false, left, top, angle, index, gsap_class }) {
  const transformValues = []
  if (centered) {
    transformValues.push("translate(-50%, -50%)")
  }
  if (angle !== undefined) {
    transformValues.push(`rotate(${angle}deg)`)
  }
  return (
    <>
      <div
        style={{
          transform: transformValues.length > 0 ? transformValues.join(" ") : undefined,
          left: `${left}`,
          top: `${top}`,
          zIndex: ` ${index}`,
          position: "absolute"
        }}
        
        className={`${gsap_class}`}
      >
        {svg}
      </div>
    </>
  )
}