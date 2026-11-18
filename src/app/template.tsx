// A template re-mounts on every navigation, so each page animates in and always starts at the top.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
