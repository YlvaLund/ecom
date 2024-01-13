import './layout.scss';
type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: Props) {
  return <main className="ecom">{children}</main>;
}
