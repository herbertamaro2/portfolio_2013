import {useState, useEffect} from 'react';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import { Parallax, Background } from 'react-parallax';

export default function PortfolioDiv() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
    
    
    
  useEffect(() => {
            fetch('/api/portfolio')
            .then((res) => res.json())
            .then((res) => {
           setLoading(false);                  
            setInfo(res);
            console.log(setInfo);
            
            }).catch(err => {
                console.log('Error 🙁');
            });        
    }, []);


        
    
       
    return(
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
        ))}
        </div>
        )
  }
