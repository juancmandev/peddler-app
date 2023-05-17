import Link from 'next/link';

interface NextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NextLink = ({ href, children, className }: NextLinkProps) => (
  <Link
    className={`font-medium text-lg hover:underline px-2 py-1 ${className}`}
    href={href}>
    {children}
  </Link>
);

export default NextLink;
