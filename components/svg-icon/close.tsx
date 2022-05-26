interface Props {
  className?: string
  size?: string
  viewBox?: string
  fill?: string
}
export const Close: React.FC<Props> = ({
  className = '',
  size = '24',
  viewBox = '0 0 24 24',
  fill = 'black',
}): JSX.Element => (
  <svg
    className={className}
    viewBox={viewBox}
    width={size}
    height={size}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </svg>
)
