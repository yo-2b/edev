import Image from 'next/image'

interface Project {
  id: number
  name: string
  subtitle: string
  img: string
}

const PROJECTS: Project[] = [
  { id: 1,  name: 'Art & Miss',                subtitle: 'Institut de beauté',             img: '/real-art-miss.jpg' },
  { id: 2,  name: 'Dolce Mare',                subtitle: 'Promenades en mer',              img: '/real-dolce-mare.jpg' },
  { id: 3,  name: 'Comme des Enfants',         subtitle: 'E-commerce enfants',             img: '/real-comme-des-enfants.jpg' },
  { id: 4,  name: 'CANC',                      subtitle: 'Coopérative agricole',           img: '/real-canc.jpg' },
  { id: 5,  name: 'DJ The Meloman',            subtitle: 'Culture & musique',              img: '/real-meloman.jpg' },
  { id: 6,  name: 'Corsica Connect',           subtitle: 'Services & communication',       img: '/real-corsica-connect.jpg' },
  { id: 7,  name: 'CerFrance',                 subtitle: 'Expertise comptable',            img: '/real-cerfrance.jpg' },
  { id: 8,  name: 'Renucci',                   subtitle: 'Entreprise locale',              img: '/real-renucci.jpg' },
  { id: 9,  name: 'Commune de Vescovato',      subtitle: 'Mairie · Haute-Corse',          img: '/vescovato.jpg' },
  { id: 10, name: 'Rugby Club de Lucciana',    subtitle: 'Club sportif',                   img: '/rugby-club-lucciana.jpg' },
  { id: 11, name: 'U Vecchju Mulinu',          subtitle: 'Restaurant',                     img: '/u-vecchju-mulinu.jpg' },
  { id: 12, name: 'Eurobowling',               subtitle: 'Centre de loisirs',              img: '/eurobowling.jpg' },
  { id: 13, name: 'Élections de Folelli',      subtitle: 'Communication institutionnelle', img: '/elections-folelli.jpg' },
  { id: 14, name: 'Noi Tutti',                 subtitle: 'Association culturelle',         img: '/noi-tutti.jpg' },
  { id: 15, name: 'Commune de Ghisonaccia',    subtitle: 'Mairie · Haute-Corse',          img: '/ghisonaccia.jpg' },
  { id: 16, name: 'Le Clémenceau',             subtitle: 'Restaurant & bar · Calvi',      img: '/le-clemenceau-calvi.jpg' },
  { id: 17, name: 'Hôtel Maria Stella',        subtitle: 'Hôtellerie',                     img: '/hotel-maria-stella.jpg' },
  { id: 18, name: 'A Mucchiatana',             subtitle: "Gîtes & chambres d'hôtes",      img: '/a-mucchiatana.jpg' },
  { id: 19, name: 'ASP Covering',              subtitle: 'Covering & signalétique',        img: '/ASP-covering.jpg' },
  { id: 20, name: 'Corsica Fashion Show',      subtitle: 'Mode & événementiel',            img: '/corsica-fashion-show.jpg' },
  { id: 21, name: 'Location Cantarettu',       subtitle: 'Location de vacances',           img: '/cantarettu-locations.jpg' },
]

export function PortfolioGrid() {
  return (
    <div
      className="columns-1 sm:columns-2 lg:columns-3"
      style={{ columnGap: 0 }}
    >
      {PROJECTS.map((project, idx) => (
        <div
          key={project.id}
          className="break-inside-avoid relative group cursor-default select-none"
        >
          {/* Image à sa taille naturelle — aucun rognage */}
          <Image
            src={project.img}
            alt={project.name}
            width={800}
            height={600}
            loading={idx < 6 ? 'eager' : 'lazy'}
            className="w-full h-auto block"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.12) 45%, transparent 100%)',
            }}
          />

          {/* Nom + sous-titre */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-[15px] leading-tight drop-shadow-sm">
              {project.name}
            </h3>
            <p className="text-white/55 text-xs mt-0.5">{project.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
