# Hackathon-Backend
NOUS CONTACTER : 
    POST http://localhost:4000/div/contacter
    Content-Type: application/json

    {
        "nom":"MM",
        "prenom":"Ntsoa",
        "email":"ntsoa.s118@gmail.com",
        "telephone":"0346664788",
        "message":"Ici le message",
        "objet":"Ici l'objet"
    }


SEARCH SUR TOUT 
    GET http://localhost:4000/div/search/mg
    Content-Type: application/json
    {
      "query":"tropicaux"
    }

    Donnée retournée :
    {
      "plantes": [
        {
          "nom_mg": "Vary",
          "id_plante": 1,
          "nom_scientifique": "Oryza Sativa",
          "regne": "Plantea",
          "path_image": null
        }
      ],
      "regions": [],
      "techniques": [
        {
          "id_technique": 3,
          "nom_mg": "Famb Vary",
          "info_mg": "Riz 30 t",
          "couverture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myclimate.org%2Ffr%2Fsinformer%2Fprojets-de-protection-climatique%2Fdetail-des-projets-de-protection-du-climat%2Fthailande-efficience-energetique-7930-004%2F&psig=AOvVaw1iIVizyXTeflgXDkLw9Q2Q&ust=1632601616616000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCr9JC5mPMCFQAAAAAdAAAAABAI"
        },
        {
          "id_technique": 2,
          "nom_mg": "Voly vary",
          "info_mg": "Riz 10t",
          "couverture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FSyst%25C3%25A8me_de_riziculture_intensive&psig=AOvVaw1iIVizyXTeflgXDkLw9Q2Q&ust=1632601616616000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCr9JC5mPMCFQAAAAAdAAAAABAD"
        }
      ],
      "climats": []
    } 
   
LIST TEHNIQUE (nom_mg, resultat_mg, couverture)
    GET/POST http://localhost:4000/technique/list
    Content-Type: application/json
    
    Facultatif
    S'il n'y a pas de nbr_list, on retourne tout les techniques dans la base de données
    {
        "nbr_list":5,
        "langage":"mg"
    }

SEARCH TECHNIQUE 
    GET http://localhost:4000/technique/search/mg
    Content-Type: application/json
    {
      "query":"tropicaux"
    }

    Donnée retournée :
    [
      {
        "id_technique": 1,
        "nom_fr": "Ombrage intéllignente",
        "info_fr": "Vanille  600kg : Hécta",
        "couverture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FSyst%25C3%25A8me_de_riziculture_intensive&psig=AOvVaw1iIVizyXTeflgXDkLw9Q2Q&ust=1632601616616000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCr9JC5mPMCFQAAAAAdAAAAABAD"
      }
    ]

DETAILS TECHNIQUE
    GET http://localhost:4000/technique/getDetails avec id_technique et langage (facultatif langage)
    Content-Type: application/json
    
    Données retournée
{
  "techique": [
    {
      "id_technique": 2,
      "nom_mg": "Voly vary",
      "description_mg": "",
      "info_mg": "Riz 10t",
      "avantage_mg": null,
      "materiel_mg": null,
      "source": null,
      "couverture": "https://images.pexels.com/photos/5935585/pexels-photo-5935585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ],
  "etapes": [],
  "climats": [],
  "plantes": [],
  "regions": []
}

LIST CLIMAT
    GET http://localhost:4000/climat/list avec langage
    Content-Type: application/json

    Données retournée
    [
      {
        "id_climat": 1,
        "nom_fr": "Climat tropicaux humide",
        "temperature": "30°C",
        "image": null,
        "precipitation": "210mm",
        "vent": "5km/h - Nord EST"
      }
    ]

SEARCH CLIMAT 
    GET http://localhost:4000/climat/search/mg
    Content-Type: application/json
    {
      "query":"tropicaux",
    }

    Donnée retournée :
    [
      {
        "id_climat": 1,
        "nom_mg": "Climat tropicaux humide",
        "image": null,
        "temperature": "30°C"
      }
    ]

DETAILS CLIMAT
    GET http://localhost:4000/climat/getDetails avec id_climat et langage (facultatif langage)
    Content-Type: application/json

    Données retournée
    {
      "climat": {
        "id_climat": 1,
        "nom_fr": "Climat tropicaux humide",
        "temperature": "30°C",
        "image": null,
        "precipitation": "210mm",
        "vent": "5km/h - Nord EST",
        "nebulosite": "2/7",
        "lumiere": "8h45min"
      },
      "regions": [
        {
          "id_region": 1,
          "nom": "DIANA",
          "type_sol_fr": "Sol férallitique"
        }
      ],
      "techniques": [
        {
          "id_technique": 1,
          "nom_fr": "Ombrage intéllignente",
          "info_fr": "Vanille  600kg : Hécta",
          "couverture": null
        }
      ]
    }

LIST REGION
    GET http://localhost:4000/region/list/mg/nbr_list avec langage et nbr_list (nbr_list facultatif)
    Content-Type: application/json

    Données retournée
    [
      {
        "id_region": 1,
        "nom": "DIANA",
        "type_sol_fr": "Sol férallitique",
        "path":"M781.5 671.2l-3.4 15.6 0 12.6-8.6 21.5 3.4 23.4-6.8 16.2 8.9 10.4-7.2 18.4-12 9 3.4 7.2 13.7 7.2 3.5 12.6-5.2 14.4-17.1 0-8.6 3.7 8.6 10.8 12 14.4 1.7 14.5-17.2 10.8-17.2 3.6-5.1 19.9 0 .."
      }
    ]
SEARCH REGION 
    GET http://localhost:4000/region/search/mg
    Content-Type: application/json
    {
      "query":"diana",
    }

    Donnée retournée :
    [
      {
        "id_region": 1,
        "nom": "DIANA",
        "type_sol_mg": "Tany feralite"
      }
    ]

DETAILS REGION
    GET http://localhost:4000/region/getDetails avec id_region et langage (facultatif langage)
    Content-Type: application/json

    Données retournée 
    {
      "region": {
        "id_region": 1,
        "nom": "DIANA",
        "description_fr": "La région de Diana dans le nord-ouest Madagascar est l'une des régions les plus importantes du pays en termes de biodiversité marine et terrestre, qui comprend les mangroves, les récifs coralliens, les petites îles, les forêts sèches et humides et de la végétation de transition.",
        "type_sol_fr": "Sol férallitique",
        "structure_sol_fr": "Grumuleuse",
        "texture_sol_fr": "Grumuleuse"
      },
      "climats": [
        {
          "id_climat": 1,
          "groupe": "GROUPE A",
          "nom_fr": "Climat tropicaux humide"
        }
      ],
      "plantes": [
        {
          "id_plante": 1,
          "nom_fr": "Riz",
          "nom_scientifique": "Oryza Sativa"
        }
      ],
      "techniques": [
        {
          "id_technique": 1,
          "nom_fr": "Ombrage intéllignente",
          "info_fr": "Vanille  600kg : Hécta",
          "couverture": null
        }
      ]
    }

LIST PLANTE
    GET http://localhost:4000/plante/list avec nbr_list et langage (les 2 sont facultatif)
    Content-Type: application/json

    Données retournée
    [
      {
        "nom_mg": "Vary",
        "nom_scientifique": "Oryza Sativa",
        "regne": "Plantea",
        "path_image": null
      }
    ]

SEARCH PLANTE 
    GET http://localhost:4000/plante/search/mg
    Content-Type: application/json
    {
      "query":"riz",
    }

    Donnée retournée :
    [
      {
        "nom_mg": "Vary",
        "id_plante": 1,
        "nom_scientifique": "Oryza Sativa",
        "regne": "Plantea",
        "path_image": null
      }
    ]

DETAILS PLANTE
    GET http://localhost:4000/plante/getDetails avec id_plante et langage (langage facultatif)
    Content-Type: application/json

    Données retournée
{
  "plante": {
        "nom_scientifique": "Oryza sativa",
        "nom_mg": "Vary",
        "description_mg": "Ny vary dia foto-tsakafon'ny olona malagasy izay mihinana eo ho eo amin'ny 200kg isan-kapita isan-taona. Ny fambolena vary dia tanterahina manerana ny nosy afa-tsy ny atsimo, izay tsy avelan'ny tany maina sy ny toetr'andro tena kely. Eto Madagasikara, ny vary dia vokatra ara-toekarena, sosialy ary politika.",
        "regne": "Plantae",
        "embranchement": "Magnoliophyta",
        "classe": "Liliopsida",
        "ordre": "Cyperales",
        "famille": "Poaceae",
        "genre": "Oryza",
        "espece": "Sativa",
        "lumiere": "Caryopse",
        "humidite": "Bouquet",
        "floraison": "Fasciculées",
        "temperature": "En épillets uniflores"
      },
      "images": [
        {
          "path": "public/image/riz_image_01.jpg",
          "description_mg": "Fambolena vary"
        },
        {
          "path": "public/image/riz_image_02.jpeg",
          "description_mg": "Vary"
        },
        {
          "path": "public/image/riz_image_03.jpg",
          "description_mg": "Voam-bary"
        }
      ],
      "pathologie": [],
      "technique": [],
      "region": []
    }

LIST TECHNIQUE NON PUBLIER:
    GET http://localhost:4000/technique/list/fr/5/false
    Content-Type: application/json

    Donnée retournée :
    [
      {
        "id_technique": 3,
        "nom_fr": "Riziculture",
        "info_fr": "Riz 30t",
        "couverture": "https://images.pexels.com/photos/8056308/pexels-photo-8056308.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id_technique": 4,
        "nom_fr": "Ombrage",
        "info_fr": "Vary 30t",
        "couverture": "https://images.pexels.com/photos/5935585/pexels-photo-5935585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]

MODIFICATION STATUS PUBLICATION
    POST http://localhost:4000/technique/update_publier
    Content-Type: application/json

    Données à envoyer
    {
        "id_technique":"1",
        "new_status_publier":"1"
    }

    Données retournée: "Succée mise à jour"

INSERTION DONNEES:

Insertion Image:
    POST http://localhost:4000/plante/insertionImage Content-Type: application/json

    {
        "image":"image.png", <= type file
        "description_mg":"Ravina tsara maintso",
        "description_fr":"Plante verte magnifique",
        "id_plante":1
    }

Insertion region:
    POST http://localhost:4000/region/insertion
    Content-Type: application/json
    
    {
        "couverture":"couverture.png",
        "nom":"Analamanga",
        "description_fr":"Capital de M/ar",
        "description_mg":"Renivohitr'i M/ar",
        "type_sol_fr":"Type sol ici",
        "type_sol_mg":"type tany mg",
        "structure_sol_mg":"struct sol ici",
        "structure_sol_fr":"struct tany mg",
        "texture_sol_mg":"text tany mg",
        "texture_sol_fr":"text sol fr",
        "id_climat":null
    }

Insertion climat:
    POST http://localhost:4000/climat/insertion
    Content-Type: application/json

    {
        "groupe":"Groupe climat",
        "nom_mg":"nom_mg",
        "nom_fr":"nom_fr",
        "precipitation":"precipitation",
        "vent":"vent",
        "nebulosite":"nebulosite",
        "lumiere":"lumiere",
        "temperature":"temperature",
        "image":"https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }

Insertion technique:
    POST http://localhost:4000/technique/insertionTechnique
    Content-Type: application/json

    {
        "nom_mg":"nom mg", 
        "nom_fr":"nom fr", 
        "description_mg":"desc mg", 
        "description_fr":"desc fr", 
        "info_mg":"info mg", 
        "info_fr":"info fr", 
        "productivite_fr":"productivite fr",
        "productivite_mg":"productivite mg", 
        "adaptation_mg":"adaptation mg",
        "adaptation_fr":"adaptation fr",
        "mitigation_fr":"mitigation fr",
        "mitigation_mg":"mitigation mg",  
        "materiel_mg":"mat mg", 
        "materiel_fr":"mat fr", 
        "source":"source",
        "couverture":"couverture.png" <= type file
    }

Insertion Etape technique:
    POST http://localhost:4000/technique/insertionEtape
    Content-Type: application/json
    {
        "nom_mg":"nom mg", 
        "nom_fr":"nom fr", 
        "description_mg":"desc mg", 
        "description_fr":"desc fr", 
        "numero":1,
        "id_technique":1,
        "image":"image.png" <= type file
    }

Insertion relation Technique_Plante:
    POST http://localhost:4000/technique/insertionrelation_plante_technique
    Content-Type: application/json

    {
        "id_technique":"1",
        "id_plante":"2"
    }

Insertion relation region et plante:
    POST http://localhost:4000/region/insertionRelation_plante_region
    Content-Type: application/json

    {
        "id_plante":"7",
        "id_region":"MDG5882"
    }

Insertion relation climat et technique:
    POST http://localhost:4000/technique/insertionRelation_climat_technique
    Content-Type: application/json

    {
        "id_technique":"1",
        "id_climat":"4"
    }

Insertion technique et region:
    POST http://localhost:4000/technique/insertionRelation_region_technique
    Content-Type: application/json

    {
        "id_region":"MDG5860",
        "id_technique":"1"
    }

CREATION COMPTE REGISTER:
    POST http://localhost:4000/user/signup
    Content-Type: application/json

    {
        "email":"ntsoa.s118@gmail.com",
        "password":"password",
        "new_password":"password",
        "nom":"MIHAINGO",
        "prenom":"Manambintsoa",
        "appelation":"Ntsoa",
        "droit":"Vulgarisateur"
    }

    Données retourné:
    {
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJudHNvYS5zMTE4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjgyNzg3MywiZXhwIjoxNjMzMDAwNjczfQ.ucSgZ2NgZ2O4nq6innPIi-6w3KYhxgtTosIlKXfdEtU",
      "nom": "MIHAINGO",
      "prenom": "Manambintsoa",
      "appelation": "Ntsoa"
    }

LOGIN:
    POST http://localhost:4000/user/login
    Content-Type: application/json

    {
        "email":"ntsoa.s118@gmail.com",
        "password":"password"
    }

    Données retourné:
    {
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJudHNvYS5zMTE4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjgyODA2OSwiZXhwIjoxNjMzMDAwODY5fQ.Q2p4YPl7RiHaR1MrTljLaWKi0TxAyivKymZfw7XYcU4",
      "nom": "MIHAINGO",
      "prenom": "Manambintsoa",
      "appelation": "Ntsoa"
    }

AFFICHER UN USER:
    GET https://api.tanimboly.org/user/show/1 


## Version 2

LISTE DE TOUS LES TECHNIQUE
    GET /technique/list/fr/100/0/1/0
    100 : nbr_list
    0: start
    1: publier
    0: non publier
