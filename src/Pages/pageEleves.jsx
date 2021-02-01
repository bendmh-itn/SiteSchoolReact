import React, { useEffect, useState } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Table from '../Components/Tables';

const dataFoot = [
  {
    "Nom": "Aerts",
    "Prénom": "Arno",
    "site web": "https://sites.google.com/site.asty-moulin.be/arno/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Beka",
    "Prénom": "Alexandre",
    "site web": "",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Boxus",
    "Prénom": "Louise",
    "site web": "https://sites.google.com/site.asty-moulin.be/louise/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Colot",
    "Prénom": "Florian",
    "site web": "https://sites.google.com/site.asty-moulin.be/floriancolot/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Dethier",
    "Prénom": "Louka",
    "site web": "",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Di Francesco",
    "Prénom": "Orazio",
    "site web": "https://sites.google.com/site.asty-moulin.be/di-francesco-orazio/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Persoon",
    "Prénom": "Romain",
    "site web": "https://sites.google.com/site.asty-moulin.be/persoon-romain/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Pierard",
    "Prénom": "Erwan",
    "site web": "https://sites.google.com/view/erwan-pierard/accueil",
    "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/6006cec6636f643249000001"
  },
  {
    "Nom": "Robert",
    "Prénom": "Roman",
    "site web": "https://sites.google.com/site.asty-moulin.be/roman/accueil",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Vanderlinden",
    "Prénom": "Mathieu",
    "site web": "",
    "jeux code 'n slash": ""
  },
  {
    "Nom": "Vanhorick",
    "Prénom": "Elise",
    "site web": "",
    "jeux code 'n slash": ""
  }
 ]

const dataSciences = [
  {
      "Nom": "Cildir",
      "Prénom": "Hasan",
      "site web": "https://sites.google.com/site.asty-moulin.be/hasan/accueil",
      "jeux code 'n slash": ""
    },
    {
      "Nom": "Defrère",
      "Prénom": "Morgane",
      "site web": "https://sites.google.com/site.asty-moulin.be/morgane/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/60112616636f644055000014"
    },
    {
      "Nom": "Fauchet",
      "Prénom": "Lionel",
      "site web": "https://sites.google.com/site.asty-moulin.be/lionel/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/601121f0636f644055000009"
    },
    {
      "Nom": "Fossépré",
      "Prénom": "Tania",
      "site web": "",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/6011243d636f64405500000e"
    },
    {
      "Nom": "François",
      "Prénom": "Lisa",
      "site web": "",
      "jeux code 'n slash": ""
    },
    {
      "Nom": "Gomez",
      "Prénom": "Amaury",
      "site web": "",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/6011210a636f644055000005"
    },
    {
      "Nom": "Limet",
      "Prénom": "Maxence",
      "site web": "https://sites.google.com/site.asty-moulin.be/maxence/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/60112147636f644055000007"
    },
    {
      "Nom": "Luc",
      "Prénom": "Augustin",
      "site web": "https://sites.google.com/site.asty-moulin.be/augustinluc/accueil",
      "jeux code 'n slash": ""
    },
    {
      "Nom": "Mot",
      "Prénom": "John",
      "site web": "https://sites.google.com/site.asty-moulin.be/john-mot/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/6011259a636f644055000013"
    },
    {
      "Nom": "Soumillon",
      "Prénom": "Alecia",
      "site web": "",
      "jeux code 'n slash": ""
    },
    {
      "Nom": "Tasnier",
      "Prénom": "Marcel",
      "site web": "https://sites.google.com/site.asty-moulin.be/tasniermarcel/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/5ff573ff636f64212a000009"
    },
    {
      "Nom": "Voermantrouw",
      "Prénom": "Lola",
      "site web": "",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/6011217c636f644055000008"
    },
    {
      "Nom": "Wery",
      "Prénom": "Mila",
      "site web": "https://sites.google.com/site.asty-moulin.be/werymila/accueil",
      "jeux code 'n slash": "http://gamejam.toxicode.fr/groups/2019-03-10/rooms/60112573636f644055000010"
    },
 ]

 const dataScience2 = [
  {
    "Nom": "Malburny",
    "Prénom": "Aaron",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Aaron Malburny - index.html"
  },
  {
    "Nom": "Robat",
    "Prénom": "Alexandre",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Alexandre Robat - index.html"
  },
  {
    "Nom": "Byloos",
    "Prénom": "Gabriel",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Gabriel Byloos - index.html"
  },
  {
    "Nom": "Vanesse",
    "Prénom": "Hugo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Hugo Vanesse - index.html"
  },
  {
    "Nom": "Muno",
    "Prénom": "Julien",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Julien Muno - index.html"
  },
  {
    "Nom": "Vanderlinden",
    "Prénom": "Kimberly",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Kimberly Vanderlinden - index.html"
  },
  {
    "Nom": "Lambeau",
    "Prénom": "Lyze",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Lyze Lambeau - index.html"
  },
  {
    "Nom": "Van Nuffel",
    "Prénom": "Nicolas",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nicolas Van Nuffel - index.html"
  },
  {
    "Nom": "Hardij",
    "Prénom": "Noah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noah Hardij - index.html"
  },
  {
    "Nom": "Alhelali",
    "Prénom": "Razan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Razan Alhelali - index.html"
  },
  {
    "Nom": "Hustin",
    "Prénom": "Romain",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Romain Hustin - index.html"
  },
  {
    "Nom": "Hody",
    "Prénom": "Véréna",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Véréna Hody - index.html"
  },
  {
    "Nom": "Davister",
    "Prénom": "Zora",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Zora Davister - index.html"
  }
 ]

 const dataEco2 = [
  {
    "Nom": "Acosta Perez",
    "Prénom": "Harold",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Harold Acosta Perez - index.html"
  },
  {
    "Nom": "Aibekova",
    "Prénom": "Tinatin",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Tinatin Aibekova - index.html"
  },
  {
    "Nom": "Ajdini",
    "Prénom": "Lorik",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Lorik Ajdini - index.html"
  },
  {
    "Nom": "Aktas",
    "Prénom": "Ibrahim",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Ibrahim Aktas - index.html"
  },
  {
    "Nom": "Boulanger",
    "Prénom": "Amandine",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amandine Boulanger - index.html"
  },
  {
    "Nom": "Cheval",
    "Prénom": "Chloé",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chloé Cheval - index.html"
  },
  {
    "Nom": "Dedobbeleer",
    "Prénom": "Sarah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Sarah Dedobbeleer - index.html"
  },
  {
    "Nom": "Dernivoy",
    "Prénom": "Chloé",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chloé Dernivoy - index.html"
  },
  {
    "Nom": "Gil Y Rodriguez",
    "Prénom": "Noah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noah Gil Y Rodriguez - index.html"
  },
  {
    "Nom": "Golard",
    "Prénom": "Wyatt",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Wyatt Golard - index.html"
  },
  {
    "Nom": "Huart",
    "Prénom": "Chelsea",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chelsea Huart - index.html"
  },
  {
    "Nom": "Izere",
    "Prénom": "Esther",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Esther Izere - index.html"
  },
  {
    "Nom": "Leonard",
    "Prénom": "Nathan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nathan Leonard - index.html"
  },
  {
    "Nom": "Morre",
    "Prénom": "Hugo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Hugo Morre - index.html"
  },
  {
    "Nom": "Murtezi",
    "Prénom": "Artan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Artan Murtezi - index.html"
  },
  {
    "Nom": "Renier",
    "Prénom": "Louka",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Louka Renier - index.html"
  },
  {
    "Nom": "Restieau",
    "Prénom": "Alicia",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Alicia Restieau - index.html"
  },
  {
    "Nom": "Sabani",
    "Prénom": "Amir",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amir Sabani - index.html"
  },
  {
    "Nom": "Sarikaya",
    "Prénom": "Asim",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Asim Sarikaya - index.html"
  },
  {
    "Nom": "Thuin",
    "Prénom": "Amélie",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amélie Thuin - index.html"
  },
  {
    "Nom": "Vanderuse",
    "Prénom": "Angélique",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Angélique Vanderuse - index.html"
  },
  {
    "Nom": "Yasar",
    "Prénom": "Yasin",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Yasin Yasar - index.html"
  }
 ]

 const dataFoot2 = [
  {
    "Nom": "Amgad Samy",
    "Prénom": "Ramadan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Ramadan Amgad Samy - index.html"
  },
  {
    "Nom": "André",
    "Prénom": "Noa",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noa André - index.html"
  },
  {
    "Nom": "Bailly",
    "Prénom": "Nicolas",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nicolas Bailly - index.html"
  },
  {
    "Nom": "Beaudot",
    "Prénom": "Eliott",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Eliott Beaudot - index.html"
  },
  {
    "Nom": "Delfosse",
    "Prénom": "Noah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noah Delfosse - index.html"
  },
  {
    "Nom": "Dethier",
    "Prénom": "Nathan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nathan Dethier - index.html"
  },
  {
    "Nom": "Dupont",
    "Prénom": "Nathanaël",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nathanaël Dupont - index.html"
  },
  {
    "Nom": "François",
    "Prénom": "Ludovic",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Ludovic François - index.html"
  },
  {
    "Nom": "Garcia",
    "Prénom": "Antoine",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Antoine Garcia - index.html"
  },
  {
    "Nom": "Guillaume",
    "Prénom": "Romain",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Romain Guillaume - index.html"
  },
  {
    "Nom": "Hallin",
    "Prénom": "Florian",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Florian Hallin - index.html"
  },
  {
    "Nom": "Huberty",
    "Prénom": "Timothé",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Timothé Huberty - index.html"
  },
  {
    "Nom": "Janssens",
    "Prénom": "Yanis",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Yanis Janssens - index.html"
  },
  {
    "Nom": "Lejonc",
    "Prénom": "Orion",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Orion Lejonc - index.html"
  },
  {
    "Nom": "Marchese",
    "Prénom": "Mattéo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Mattéo Marchese - index.html"
  },
  {
    "Nom": "Matravolgyi",
    "Prénom": "Elias",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Elias Matravolgyi - index.html"
  },
  {
    "Nom": "Metzmacher",
    "Prénom": "Hugo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Hugo Metzmacher - index.html"
  },
  {
    "Nom": "Naciri",
    "Prénom": "Khanzada",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Khanzada Naciri - index.html"
  },
  {
    "Nom": "Pierre",
    "Prénom": "Rafael",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Rafael Pierre - index.html"
  },
  {
    "Nom": "Schneider",
    "Prénom": "Mathéo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Mathéo Schneider - index.html"
  },
  {
    "Nom": "Tournay",
    "Prénom": "Theo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Theo Tournay - index.html"
  },
  {
    "Nom": "Vandendaele",
    "Prénom": "Alexy",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Alexy Vandendaele - index.html"
  },
  {
    "Nom": "Vanderlinden",
    "Prénom": "Fabio",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Fabio Vanderlinden - index.html"
  },
  {
    "Nom": "Vanhufel",
    "Prénom": "Nicolas",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nicolas Vanhufel - index.html"
  },
  {
    "Nom": "Vranken",
    "Prénom": "Brayan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Brayan Vranken - index.html"
  }
 ]

const PremiereAnnee = ({match}) => {

    const [data, setData] =  useState([]);
    const [key, setKey] = useState([]);
    const [textH1, setTextH1] =  useState("");

    useEffect(() => {
      if (match.params.id === "1Foot") {
        setKey(Object.keys(dataFoot[0]))
        setData(dataFoot);
        setTextH1("Les travaux des 1ère foot");
      }else if (match.params.id === "1Sciences") {
        setKey(Object.keys(dataSciences[0]))
        setData(dataSciences);
        setTextH1("Les travaux des 1ère sciences");
      }else if (match.params.id === "2Sciences") {
        setKey(Object.keys(dataScience2[0]))
        setData(dataScience2);
        setTextH1("Les travaux des 2ème sciences");
      }else if (match.params.id === "2Economie") {
        setKey(Object.keys(dataEco2[0]))
        setData(dataEco2);
        setTextH1("Les travaux des 2ème économie");
      }else {
        setKey(Object.keys(dataFoot2[0]))
        setData(dataFoot2);
        setTextH1("Les travaux des 2ème foot");
      }
    }, [match.params.id]);
    return ( 
        <>
            <Jumbotron 
                text={textH1}
            />
            <div  className="container">
              <Table
                  data={data}
                  tabKey={key}
              />
            </div>
        </>
     );
}
 
export default PremiereAnnee;