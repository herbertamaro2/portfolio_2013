import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Footer(){
    const { locale, locales, asPath } = useRouter(); 
    return (
        <footer>
            <div className="footer">
            <div className="container d-flex">
                <div className="logo-footer">
                    <Link href="/">
                        <Image  src="/logo.gif" width={300} height={60} alt="Herbert o seu programador" />
                    </Link>
                </div>
                <ul className="l-footer">
                    <li>❤️️ {(locale === 'pt') ?('Desenvolvido em Next.js') :('Created by Next.js')}</li>
                    
                 </ul>         
            </div>
            <div className="whatsapp">
                <a href="https://whatsapp" target="_blank" rel="noreferrer">
                    <Image src="/whatsapp.png" width={29} height={30} alt="Whatsapp" />
                </a>
            </div>
            </div>
        </footer>
    )

}