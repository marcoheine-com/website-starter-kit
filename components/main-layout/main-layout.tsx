interface Props {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <main className="main-layout padding-x">{children}</main>
}
