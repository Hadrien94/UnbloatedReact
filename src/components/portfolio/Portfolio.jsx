import React from 'react';
import IMG1 from '../../assets/1/1.webp';
import IMG2 from '../../assets/2/2.webp';
import IMG3 from '../../assets/3/3.webp';
import IMG4 from '../../assets/4/4.webp';
import IMG5 from '../../assets/5/5.webp';
import IMG6 from '../../assets/6/6.webp';
import IMG7 from '../../assets/7/7.webp';
import IMG8 from '../../assets/8/8.webp';
import IMG9 from '../../assets/9/9.webp';
import IMG10 from '../../assets/10/10.webp';
import IMG11 from '../../assets/11/11.webp';
import IMG12 from '../../assets/12/12.webp';
import IMG13 from '../../assets/13/13.webp';
import IMG14 from '../../assets/14/14.webp';
import IMG15 from '../../assets/15/15.webp';
import IMG16 from '../../assets/16/16.webp';
import IMG17 from '../../assets/17/17.webp';
import IMG18 from '../../assets/18/18.webp';
import IMG19 from '../../assets/19/19.webp';
import IMG20 from '../../assets/20/20.webp';
import IMG21 from '../../assets/21/21.webp';
import IMG22 from '../../assets/22/22.webp';
import IMG23 from '../../assets/23/23.webp';
import IMG24 from '../../assets/24/24.webp';
import IMG25 from '../../assets/25/25.webp';
import IMG26 from '../../assets/26/26.webp';
import IMG27 from '../../assets/27/27.webp';
import IMG28 from '../../assets/28/28.webp';
import IMG29 from '../../assets/29/29.webp';
import IMG30 from '../../assets/30/30.webp';
import IMG31 from '../../assets/31/31.webp';
import IMG32 from '../../assets/32/32.webp';
import IMG33 from '../../assets/33/33.webp';
import IMG34 from '../../assets/34/34.webp';
import IMG35 from '../../assets/35/35.webp';
import IMG36 from '../../assets/36/36.webp';
import IMG37 from '../../assets/37/37.webp';
import IMG38 from '../../assets/38/38.webp';
import IMG39 from '../../assets/39/39.webp';
import IMG40 from '../../assets/40/40.webp';
import IMG41 from '../../assets/41/41.webp';
import IMG42 from '../../assets/42/42.webp';



import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [


    {
      id: 1,
      title: 'Orange',
      img: IMG1,
      description: 'Dans le cadre du lancement de son offre promotionnelle, Orange propose ?? ses users de gagner un ou plusieurs lots, jeu Instant Gagnant r??serv?? aux abonn??s Orange. Le jeu se r??alise rapidement via un tirage au sort. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/1/1.html',
 
    },
    {
      id: 2,
      title: 'Nestl??',
      img: IMG2,
      description: 'Dans le cadre du lancement de son offre promotionnelle, Nestl?? propose ?? ses users de gagner un voyage en pleine nature. Le jeu se r??alise rapidement via un tirage au sort. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/2/2.html',

    },
    {
      id: 3,
      title: 'MacDonald',
      img: IMG3,
      description: 'Macdonald, jeu tirage au sort Tombola fid??lit??. MacDonald propose de participer ?? son jeu Golden ticket gagnant. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/3/3.html',

    },
    {
      id: 4,
      title: 'Vinci',
      img: IMG4,
      description:'Dans le cadre du lancement de son offre promotionnelle, Ulys et les p??ages Vinci autoroutes proposent de gagner 12 mois de t??l??p??ages gratuits. Le jeu se r??alise en proposant aux utilisateurs de remplir un formulaire et gagner des avantages / ch??ques vacances. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/4/4.html',

    },
    {
      id: 5,
      title: 'Auchan',
      description: 'Dans le cadre du lancement de son offre promotionnelle, Auchan propose ?? ses adh??rents de gagner un voyage en Italie ou 50 ??? de carte cadeaux offerts. Le user rentre ses informations pour ??tre tir?? au sort et gagner le premier ou le deuxi??me lot. Propri??t?? agence Keemia Digital',
      img: IMG5,
      link: 'https://allprojects.netlify.app/5/5.html',

    },
    {
      id: 6,
      title: 'Boulanger',
      img: IMG6,
      description: 'Boulanger propose un jeu roue de la fortune permettant de gagner au moins un ou plusieurs lots en magasin Boulanger. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/6/6.html',
   
    },
    {
      id: 7,
      title: 'Casino',
      img: IMG7,
      description:'Casino propose un jeu Instant Gagnant pour permettre ?? ses clients de gagner des points de fid??lit?? sur les cartes Casino Max ou de gagner des cartes cadeaux de 50 ???. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/7/7.html',
    
    },
    {
      id: 8,
      title: 'Fran??aise des jeux',
      img: IMG8,
      description:'Dans le cadre du lancement de son offre promotionnelle, la FDJ propose ?? ses users de gagner 500 ??? pour le 1er prix. Le jeu se r??alise via un morpion digital dans le cadre de la modernisation des bornes FDJ. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/8/8.html',

    },
    {
      id: 9,
      title: 'MMA assurances',
      img: IMG9,
      description:'MMA assurances propose de gagner un macbook air ?? ses adh??rents, via un quizz de s??curit?? routi??re, les gagnants sont s??lectionn??s pour le tirage au sort du macbook. Propri??t?? agence Keemia Digital',
      link: 'https://allprojects.netlify.app/9/9.html',
    
    },
    {
      id: 10,
      title: 'Kr??nov',
      img: IMG10,
      description:'Kr??nov est une entreprise de r??novation et d??coration en int??rieur : www.krenov.fr. Propri??t?? agence Redcat Studio',
           link: 'https://allprojects.netlify.app/10/10.html',
     
    },
    {
      id: 11,
      title: 'BHD',
      img: IMG11,
      description: 'BHD b??timent est un site de BTP gros-oeuvre/second-oeuvre : www.bhd-batiment.com. Propri??t?? agence Redcat Studio',
           link: 'https://allprojects.netlify.app/11/11.html',
     
    },
    {
      id: 12,
      title: 'Instants de Reine',
      img: IMG12,
      description: 'Instants de Reine, esth??ticienne & bien-??tre, r??alisation du site. Propri??t?? agence Redcat Studio',
      link: 'https://allprojects.netlify.app/12/12.html',

    },
    {
      id: 13,
      title: 'Tour des Dom-Tom',
      img: IMG13,
      description: 'Campagne marketing pour RemplaFrance, jeu-concours pour positionner des m??decins dans les DOM-TOM. Propri??t?? de RemplaFrance',
      link: 'https://allprojects.netlify.app/13/13.html',

    },
    {
      id: 14,
      title: 'Affiches ??v??nements',
      img: IMG14,
      description:
      'Affiches en s??rie pour le CHU de Toulouse, la m??decine hyperbare et le congr??s anesth??sie r??animation',
      link: 'https://allprojects.netlify.app/14/14.html',
     
    },
    {
      id: 15,
      title: 'Click & Paint',
      description: 'Click & Paint est une application de commande de peinture au L/par m2. Site e-commerce : www.colibripeinture.com/click-and-paint/. Propri??t?? de Colibri Peinture',
      img: IMG15,
      link: 'https://allprojects.netlify.app/15/15.html',

          },
    {
      id: 16,
      title: 'Everblue',
      description: 'Everblue est un pisciniste ayant eu recours ?? des services de signal??tique en agence int??rieur et retail sp??cialis??e. Propri??t?? de Brio Retail',
      img: IMG16,
      link: 'https://allprojects.netlify.app/16/16.html',

          },
    {
      id: 17,
      title: 'Paris Saclay',
      img: IMG17,
      description: 'Affiche et campagne de lancement ouverture Campus Paris Saclay. Propri??t?? de Compos Juliot',
      link: 'https://allprojects.netlify.app/17/17.html',

          },

    {
      id: 18,
      title: 'Plus-que-parfait',
      img: IMG18,
      description:'Plus-que-parfait est une entreprise de propret?? bas??e ?? Seine-Saint Denis : www.plus-que-parfait.fr. Propri??t?? agence Redcat Studio',
      link: 'https://allprojects.netlify.app/18/18.html',

          },
    {
      id: 19,
      title: 'RemplaFrance',
      img: IMG19,
      description:'Remplafrance est une start-up m??dicale qui permet de trouver des remplacants pour les practiciens et organismes m??dicaux dans toute la France : www.remplafrance.fr. Propri??t?? de RemplaFrance',
      link: 'https://allprojects.netlify.app/19/19.html',

    },
    {
      id: 20,
      title: 'A l\'eau gaz',
      img: IMG20,
      description:'Plombier chauffagiste : www.aleaugaz.fr. Propri??t?? Redcat Studio',
      link: 'https://allprojects.netlify.app/20/20.html',

          },

    {
      id: 21,
      title: 'Carole Franck',
      img: IMG21,
      description: 'Carole Franck, illustration et packshot 3D. Propri??t?? de Compos Juliot',
      link: 'https://allprojects.netlify.app/21/21.html',

    },
    {
      id: 22,
      title: 'Instant Pause',
      img: IMG22,
      description: 'R??alisation du packaging instant pause, marque de biscuits',
      link: 'https://allprojects.netlify.app/22/22.html',

    },
    {
      id: 23,
      title: 'Projet 10',
      img: IMG23,
      description: 'R??alisation et ??dition de livret de survivalisme intitul?? projet 10 : les 10 r??gles de survies en milieux d??grad??s',
      link: 'https://allprojects.netlify.app/23/23.html',

    },
    {
      id: 24,
      title: 'Divers UX',
      img: IMG24,
      description: 'UX, travaux ??tudiants',
      link: 'https://allprojects.netlify.app/24/24.html',

    },
    {
      id: 25,
      title: 'Showreel',
      img: IMG25,
      description:'Showreel Pro, motion design',
      link: 'https://allprojects.netlify.app/25/25.html',

    },
    {
      id: 26,
      title: 'Beaphar',
      img: IMG26,
      description: 'R??alisation de packaging pour la marque de shampooing Beaphar. Propri??t?? Agence Gosselin',
      link: 'https://allprojects.netlify.app/26/26.html',

    },

    {
      id: 27,
      title: 'Mon voyage compagnon',
      img: IMG27,
      description:'Mon voyage compagnon est un site de maroquinerie / baggagerie de luxe promouvant le savoir-faire artisanal fran??ais',
      link: 'https://allprojects.netlify.app/27/27.html',

    },
    {
      id: 28,
      title: 'Art et r??alisations plastiques',
      img: IMG28,
      description: 'Artisan relieur ?? Montreuil, site web vitrine : www.arp-plastique.fr Propri??t?? agence Redcat Studio',
      link: 'https://allprojects.netlify.app/28/28.html',

    },
    {
      id: 29,
      title: 'Bijouterie Forms',
      img: IMG29,
      description: 'Bijouterie Forms, dessin, packaging, typographie de la nouvelle collection. Propri??t?? agence Compos Juliot',
      link: 'https://allprojects.netlify.app/29/29.html',

    },
    {
      id: 30,
      title: 'LOGO COLLECTION',
      img: IMG30,
      description:'Logos tablette graphique, travaux personnels',
      link: 'https://allprojects.netlify.app/30/30.html',

    },

    {
      id: 31,
      title: 'P??tisserie et boulangerie Durenart',
      img: IMG31,
      description: 'Collection de logos r??alis??s sur Illustrator',
      link: 'https://allprojects.netlify.app/31/31.html',

    },
    {
      id: 32,
      title: 'Packshot',
      img: IMG32,
      description: 'Packshot Cinema 4D. Propri??t?? Compos Juliot',
      link: 'https://allprojects.netlify.app/32/32.html',

    },
    {
      id: 33,
      title: 'Packshot Carole Franck',
      img: IMG33,
      description: 'Pckackshot Cinema 4D. Propri??t?? Compos Juliot',
      link: 'https://allprojects.netlify.app/33/33.html',

    },
 
    {
      id: 34,
      title: 'Selective Line',
      img: IMG34,
      description: 'Concours Verallia Selective Line, le verre en ville',
      link: 'https://allprojects.netlify.app/34/34.html',

    },
    {
      id: 35,
      title: 'Colibri Peinture',
      img: IMG35,
      description: 'Colibri Peinture est une marque engag??e dans la fabrication de peinture saine et ??cologique. site e-commerce : www.colibripeinture.com. Propri??t?? de la marque Colibri Peinture',
      link: 'https://allprojects.netlify.app/35/35.html',

    },
    {
      id: 36,
      title: 'Granatis',
      img: IMG36,
      description:
        'R??alisation identit?? de marque. Propri??t?? de la marque Granatis',
      link: 'https://allprojects.netlify.app/36/36.html',

      },
    {
      id: 37,
      title: 'Signal??tique',
      img: IMG37,
      description:
        'Signal??tique diverses. Propri??t?? agence Compos Juliot',
      link: 'https://allprojects.netlify.app/37/37.html',

      },
    {
      id: 38,
      title: 'Thomas FCL',
      img: IMG38,
      description:
        'R??alisation de maquette pour l\'artisan en r??novation Thomas FCL. Propri??t?? agence Redcat Studio',
      link: 'https://allprojects.netlify.app/38/38.html',

      },
    {
      id: 39,
      title: 'Cornet Smooth',
      img: IMG39,
      description:
        'Cornet Smooth, travaux personnnels',
      link: 'https://allprojects.netlify.app/39/39.html',

      },
    {
      id: 40,
      title: 'Van Eyck',
      img: IMG40,
      description:
        'Packaging Van Eyck. Propri??t?? agence Compos Juliot',
      link: 'https://allprojects.netlify.app/40/40.html',

      },

    {
      id: 41,
      title: 'Alison Ka',
      img: IMG41,
      description: 'Alisonka est le site de marque esth??ticienne Alison Ka : www.alisonka.fr. Propri??t?? marque Alison Ka',
      link: 'https://allprojects.netlify.app/41/41.html',

    },
    {
      id: 42,
      title: 'Atelier Fabrique',
      img: IMG42,
      description:'Atelier Fabrique est le site de la plateforme de r??servation de studio photo : www.atelierfabrique.fr. Propri??t?? agence Redcat Studio',
      link: 'https://allprojects.netlify.app/42/42.html',

    },

 
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
           
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Voir le projet
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
