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
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Aaron Malburny - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/19OQDWzeR-5Xx6wjkwunb1xbCX6OAE_ZE/view?usp=sharing"
  },
  {
    "Nom": "Robat",
    "Prénom": "Alexandre",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Alexandre Robat - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1t0eQz-7PfByj8vZIzSaJ8aSH7xTaGmEc/view?usp=sharing"
  },
  {
    "Nom": "Byloos",
    "Prénom": "Gabriel",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Gabriel Byloos - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1pECqVQIHY-Sclwz5yTHD5vugb343C2lt/view?usp=sharing"
  },
  {
    "Nom": "Vanesse",
    "Prénom": "Hugo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Hugo Vanesse - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1ZTC2dQn4aIjtwEfDYNdl3p2bRqcVJgjU/view?usp=sharing"
  },
  {
    "Nom": "Muno",
    "Prénom": "Julien",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Julien Muno - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Vanderlinden",
    "Prénom": "Kimberly",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Kimberly Vanderlinden - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Lambeau",
    "Prénom": "Lyze",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Lyze Lambeau - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Van Nuffel",
    "Prénom": "Nicolas",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nicolas Van Nuffel - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Hardij",
    "Prénom": "Noah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noah Hardij - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Alhelali",
    "Prénom": "Razan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Razan Alhelali - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1doFkaoQFr_xaaHX1vSPz7Ya0OS_I5DBa/view?usp=sharing"
  },
  {
    "Nom": "Hustin",
    "Prénom": "Romain",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Romain Hustin - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Hody",
    "Prénom": "Véréna",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Véréna Hody - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Davister",
    "Prénom": "Zora",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Zora Davister - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1_b7HuUbA5HgBZaU7riWBLQ7JqCwi6a0K/view?usp=sharing"
  }
 ]

 const dataEco2 = [
  {
    "Nom": "Restieau",
    "Prénom": "Alicia",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Alicia Restieau - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Boulanger",
    "Prénom": "Amandine",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amandine Boulanger - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1EZOVgm3qGpMeEgC7IwFsQgqzOURU3JDw/view?usp=sharing"
  },
  {
    "Nom": "Sabani",
    "Prénom": "Amir",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amir Sabani - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Thuin",
    "Prénom": "Amélie",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Amélie Thuin - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Vanderuse",
    "Prénom": "Angélique",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Angélique Vanderuse - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Murtezi",
    "Prénom": "Artan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Artan Murtezi - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/11QcgtFPjOPsALex7KJ0IwkPHghKlzc_u/view?usp=sharing"
  },
  {
    "Nom": "Sarikaya",
    "Prénom": "Asim",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Asim Sarikaya - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1z7pMSRN6pZ77k2RqVTnyanFGkytgiJWS/view?usp=sharing"
  },
  {
    "Nom": "Huart",
    "Prénom": "Chelsea",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chelsea Huart - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Cheval",
    "Prénom": "Chloé",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chloé Cheval - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Dernivoy",
    "Prénom": "Chloé",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Chloé Dernivoy - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Izere",
    "Prénom": "Esther",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Esther Izere - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Acosta Perez",
    "Prénom": "Harold",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Harold Acosta Perez - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Morre",
    "Prénom": "Hugo",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Hugo Morre - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1DLX71AT__OavPwrZZNyHDQZ-qANMphv_/view?usp=sharing"
  },
  {
    "Nom": "Aktas",
    "Prénom": "Ibrahim",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Ibrahim Aktas - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1doFkaoQFr_xaaHX1vSPz7Ya0OS_I5DBa/view?usp=sharing"
  },
  {
    "Nom": "Ajdini",
    "Prénom": "Lorik",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Lorik Ajdini - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1UkJfaMNkEbYwnp0gzHahBOSeWTdzkfXf/view?usp=sharing"
  },
  {
    "Nom": "Renier",
    "Prénom": "Louka",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Louka Renier - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Leonard",
    "Prénom": "Nathan",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Nathan Leonard - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1s9liaX0HK_dmBFmro1vgtloej-re5l7X/view?usp=sharing"
  },
  {
    "Nom": "Gil Y Rodriguez",
    "Prénom": "Noah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Noah Gil Y Rodriguez - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1VZfre1N0CNnOYt_Uajl4w_yG8SN6OUf6/view?usp=sharing"
  },
  {
    "Nom": "Dedobbeleer",
    "Prénom": "Sarah",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Sarah Dedobbeleer - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Aibekova",
    "Prénom": "Tinatin",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Tinatin Aibekova - index.html",
    "StoryBoard 1": ""
  },
  {
    "Nom": "Golard",
    "Prénom": "Wyatt",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Wyatt Golard - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/108TOvH8f8ECJFW8G6ESOJ5c-iAAFQamd/view?usp=sharing"
  },
  {
    "Nom": "Yasar",
    "Prénom": "Yasin",
    "Site web": "https://bendmh-itn.github.io/siteschool/site2eme/Yasin Yasar - index.html",
    "StoryBoard 1": "https://drive.google.com/file/d/1ug81emQy9Y1g9MdZJ5P5kNp6qDoXQXN4/view?usp=sharing"
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