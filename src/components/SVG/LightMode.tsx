const LightModeIcon = (props: any) => (
  <svg
    width={30}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-50 hover:opacity-100 cursor-pointer"
    onClick={props.onClick}
  >
    <title />
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" transform="scale(1.2)" />
    <title>{'Layer 1'}</title>
    <circle r={5} fill="#fff" cy={12} cx={12} transform="scale(1.2)" />
    <path
      fill="#fff"
      d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM17.66 7.34a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM12 22a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zM18.36 19.36a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
      transform="scale(1.2)"
    />
  </svg>
)

export default LightModeIcon
