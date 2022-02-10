import { Book } from "./book"; 

export const BOOKS: Book[] = [
  { id: "1", 
    ownerId: '2',
    title: 'Fata din tren' ,
    description: 'Fata din tren urmareste un cuplu, iar cand afla ca fata pe care o urmarea a fost omorata l-a suspectat si urmarit pe baiat, dar a aflat intr-un final ca vecinul era criminalul.',
    authorName:'Paula Hawkins' ,
    publishedDate: new Date(2015, 1, 6)
  },
  { id: "2", 
    ownerId: '1',
    title: 'Sora pierduta' ,
    description: 'Si-a gasit sora omorata in propria casa si a luat initiativa cazului pentru ca politia a crezut ca este un accident.',
    authorName:'Flynn Berry' ,
    publishedDate: new Date(2010, 6, 30)
  },
  { id: "3", 
    ownerId: '4',
    title: 'Eu sunt malala' ,
    description: 'Povestea reala a unei fete pakistaneze',
    authorName:'Malala Yousafzai' ,
    publishedDate: new Date(2013, 10, 3)
  },
  { id: "4", 
    ownerId: '3',
    title: 'Zece negri mititei' ,
    description: 'Unul din 10 oameni este criminalul, dar toti se suspecteaza intre ei. Oare vor afla?',
    authorName:'Agatha Christie' ,
    publishedDate: new Date(1939, 11, 6)
  }
];