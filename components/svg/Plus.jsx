export default function Search({ color = 'white', width, height }) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}>
      <path
        // fill-rule="evenodd"
        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
      />
    </svg>
  );
}
