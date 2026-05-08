import { Head } from '@inertiajs/react';
import { Body } from '@/components/Body';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
    return (
        <div>
            <Head title="Software Engineer" />
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
