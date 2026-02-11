import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tokenomics & Utility | ELEV8",
    description: "Explore the $ELEV8 token economy - Total supply, utility, staking rewards, governance, and the Motion Engine powering decentralized motion gaming.",
};

export default function TokenomicsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
