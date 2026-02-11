import fs from 'fs';
import path from 'path';
import WhitepaperClient from './WhitepaperClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Technical Whitepaper | ELEV8",
    description: "Download the ELEV8 Technical Whitepaper - Deep dive into AI Vision Core, $ELEV8 token economy, and the decentralized motion gaming protocol.",
};

export default function WhitepaperPage() {
    const filePath = path.join(process.cwd(), 'public', 'Elev8_Whitepaper_v1.pdf');
    let pdfSize = '0 MB';

    try {
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            pdfSize = (stats.size / (1024 * 1024)).toFixed(1) + ' MB';
        } else {
            console.warn('PDF file not found at:', filePath);
        }
    } catch (error) {
        console.error('Error reading PDF size:', error);
    }

    return <WhitepaperClient pdfSize={pdfSize} />;
}
