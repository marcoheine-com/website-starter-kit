interface Props {
  className?: string
  size?: string
  viewBox?: string
  fill?: string
}
export const Menu: React.FC<Props> = ({
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
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
  </svg>
)
