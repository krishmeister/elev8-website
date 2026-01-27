import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mission Timeline | ELEV8",
    description: "ELEV8 Roadmap - From breakout gaming launch to global decentralized motion network. Track our journey through phases of innovation.",
};

export default function RoadmapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
