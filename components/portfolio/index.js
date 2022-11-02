import {useState, useEffect} from 'react';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import { Parallax, Background } from 'react-parallax';

export default function PortfolioDiv() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
    
  const PortfolioChange = (e) => {
    e.preventDefault;
       getProdutos(e);
  };

  
  function getProdutos(e){
    e.preventDefault;
    fetch('/api/portfolio')
    .then((res) => res.json())
    .then((res) => {
   const result = res.filter(categoria => categoria.categoria === e)
   setInfo(result)
   console.log(result);                
    
    //console.log(info);
   
    
    }).catch(err => {
        console.log('Error 🙁');
    });
  }
    
  useEffect(() => {

    fetch('/api/portfolio')
    .then((res) => res.json())
    .then((res) => {
   setLoading(false);
   const result = res.filter(categoria => categoria.categoria === 'website')
   setInfo(result)     
    
    }).catch(err => {
        console.log('Error 🙁');
    });
          
    }, []);

    
    return(

      <section id="work">
        <div className="titulo2">
          <div className="container">
            <h1>Work</h1>

            <div className="sub-menu">
            <ul>
              <li><button onClick={() => PortfolioChange('website')}>Websites</button></li>
              <li><button onClick={() => PortfolioChange('apps')}>Aplicativos</button></li>
              <li><button onClick={() => PortfolioChange('sistema')}>Sistemas</button></li>
              <li><button onClick={() => PortfolioChange('loja-virtual')}>Lojas Virtuais</button></li>
              <li><button onClick={() => PortfolioChange('ebook')}>Ebooks</button></li>
              <li><button onClick={() => PortfolioChange('identidade-visual')}>Identidade Visual</button></li>              
            </ul>
          </div>
          </div>
        </div>
        <div className="work">          
        {info?.map((info, chave) => (
            <Parallax
            blur={{ min: -35, max: 35 }}
            bgImageAlt="the dog"
            strength={-200}
            key={chave}
            >
            <Background className="custom-bg">
                <Image src={info.image} alt={info.nome} width={1980} height={1080} />
            </Background>
            <div className="container content-parallax">
              <h1>{info.nome}</h1>
              <h3>{info.categoria}</h3>
              <p>{info.descricao}</p>
              <Button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <a href={info.link}><span className="button-text" >GO TO LINK</span></a>
              </Button>
            </div>
            <div style={{ height: '100px' }} />
            </Parallax>
        )
        )
        }
        </div>
        </section>
        )
  }
