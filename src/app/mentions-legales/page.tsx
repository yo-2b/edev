import type { Metadata } from 'next'
import Link from 'next/link'

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Mentions légales — E-Dev Multimedia',
  description:
    'Mentions légales du site edev-multimedia.com : éditeur, hébergeur, conditions d\'utilisation, propriété intellectuelle et gestion des données personnelles.',
  alternates: {
    canonical: 'https://www.edev-multimedia.com/mentions-legales/',
  },
  robots: { index: false, follow: false },
}

/* ─── Données récap ───────────────────────────────────────────────────────── */
const RECAP = [
  {
    label: 'Propriétaire',
    value: 'EI E-Dev Multimedia',
    detail: 'Plaine de Vescovato, Route de Torra — 20215 VESCOVATO',
  },
  {
    label: 'Responsable de publication',
    value: 'THOMAS Yoann',
    detail: 'direction.edev@gmail.com',
  },
  {
    label: 'Hébergeur',
    value: 'OVH',
    detail: '2 rue Kellermann — 59100 Roubaix',
  },
  {
    label: 'Délégué à la protection des données',
    value: 'THOMAS Yoann',
    detail: 'direction.edev@gmail.com',
  },
]

/* ─── Sections légales ────────────────────────────────────────────────────── */
const SECTIONS = [
  {
    num: '1',
    title: 'Présentation du site internet',
    content: (
      <>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l&apos;économie numérique, il est précisé aux utilisateurs du site internet{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {[
            ['Propriétaire', 'EI E-Dev Multimedia — Plaine de Vescovato, Route de Torra 20215 VESCOVATO'],
            ['Responsable publication', 'THOMAS Yoann — direction.edev@gmail.com'],
            ['Webmaster', 'THOMAS Yoann — direction.edev@gmail.com'],
            ['Hébergeur', 'OVH — 2 rue Kellermann 59100 Roubaix'],
            ['DPO', 'THOMAS Yoann — direction.edev@gmail.com'],
          ].map(([k, v]) => (
            <li key={k} className="flex flex-wrap gap-x-2">
              <span className="font-semibold text-gray-900 min-w-[180px]">{k} :</span>
              <span className="text-gray-600">{v}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: '2',
    title: 'Conditions générales d\'utilisation du site et des services proposés',
    content: (
      <>
        <p>
          Le site constitue une œuvre de l&apos;esprit protégée par les dispositions du Code de la Propriété
          Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune
          manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou
          travaux du Site.
        </p>
        <p className="mt-4">
          L&apos;utilisation du site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation
          ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées
          ou complétées à tout moment, sans préavis ; les utilisateurs du site sont donc invités à
          les consulter de manière régulière.
        </p>
        <p className="mt-4">
          Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption
          pour raison de maintenance technique peut être toutefois décidée par{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          , qui s&apos;efforcera alors de communiquer préalablement aux utilisateurs les dates et
          heures de l&apos;intervention. Le site web{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est mis à jour régulièrement par{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment :
          elles s&apos;imposent néanmoins à l&apos;utilisateur qui est invité à s&apos;y référer
          le plus souvent possible afin d&apos;en prendre connaissance.
        </p>
      </>
    ),
  },
  {
    num: '3',
    title: 'Description des services fournis',
    content: (
      <>
        <p>
          Le site internet{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          a pour objet de fournir une information concernant l&apos;ensemble des activités de la société.{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois,
          il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise
          à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent
          ces informations.
        </p>
        <p className="mt-4">
          Toutes les informations indiquées sur le site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les
          renseignements figurant sur le site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées
          depuis leur mise en ligne.
        </p>
      </>
    ),
  },
  {
    num: '4',
    title: 'Limitations contractuelles sur les données techniques',
    content: (
      <>
        <p>
          Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable
          de dommages matériels liés à l&apos;utilisation du site. De plus, l&apos;utilisateur du site
          s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus
          et avec un navigateur de dernière génération mis à jour.
        </p>
        <p className="mt-4">
          Le site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est hébergé chez un prestataire sur le territoire de l&apos;Union Européenne conformément
          aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
        </p>
        <p className="mt-4">
          L&apos;objectif est d&apos;apporter une prestation qui assure le meilleur taux
          d&apos;accessibilité. L&apos;hébergeur assure la continuité de son service 24 heures sur 24,
          tous les jours de l&apos;année. Il se réserve néanmoins la possibilité d&apos;interrompre
          le service d&apos;hébergement pour les durées les plus courtes possibles notamment à des
          fins de maintenance, d&apos;amélioration de ses infrastructures, de défaillance de ses
          infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.
        </p>
        <p className="mt-4">
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          et l&apos;hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau
          internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié à
          l&apos;encombrement du réseau empêchant l&apos;accès au serveur.
        </p>
      </>
    ),
  },
  {
    num: '5',
    title: 'Propriété intellectuelle et contrefaçons',
    content: (
      <>
        <p>
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est propriétaire des droits de propriété intellectuelle et détient les droits d&apos;usage
          sur tous les éléments accessibles sur le site internet, notamment les textes, images,
          graphismes, logos, vidéos, icônes et sons.
        </p>
        <p className="mt-4">
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
          des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
          autorisation écrite préalable de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          .
        </p>
        <p className="mt-4">
          Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments
          qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie
          conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété
          Intellectuelle.
        </p>
      </>
    ),
  },
  {
    num: '6',
    title: 'Limitations de responsabilité',
    content: (
      <>
        <p>
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          agit en tant qu&apos;éditeur du site. Il est responsable de la qualité et de la véracité
          du Contenu qu&apos;il publie.
        </p>
        <p className="mt-4">
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          ne pourra être tenu responsable des dommages directs et indirects causés au matériel de
          l&apos;utilisateur lors de l&apos;accès au site internet{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          , et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux
          spécifications indiquées au point 4, soit de l&apos;apparition d&apos;un bug ou
          d&apos;une incompatibilité.
        </p>
        <p className="mt-4">
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          ne pourra également être tenu responsable des dommages indirects (tels par exemple
          qu&apos;une perte de marché ou perte d&apos;une chance) consécutifs à l&apos;utilisation
          du site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          . Des espaces interactifs (possibilité de poser des questions dans l&apos;espace contact)
          sont à la disposition des utilisateurs.{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé
          dans cet espace qui contreviendrait à la législation applicable en France, en particulier
          aux dispositions relatives à la protection des données. Le cas échéant,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          se réserve également la possibilité de mettre en cause la responsabilité civile et/ou
          pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux,
          diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
        </p>
      </>
    ),
  },
  {
    num: '7',
    title: 'Gestion des données personnelles',
    content: (
      <>
        <p>
          Le Client est informé des réglementations concernant la communication marketing, la loi du
          21 Juin 2014 pour la confiance dans l&apos;Economie Numérique, la Loi Informatique et Liberté
          du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          7.1 Responsables de la collecte des données personnelles
        </h3>
        <p>
          Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de
          l&apos;Utilisateur et de sa navigation sur le Site,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est le responsable du traitement des Données Personnelles. En tant que responsable du
          traitement des données qu&apos;il collecte,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          s&apos;engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient
          notamment au Client d&apos;établir les finalités de ses traitements de données, de fournir
          à ses prospects et clients, à partir de la collecte de leurs consentements, une information
          complète sur le traitement de leurs données personnelles et de maintenir un registre des
          traitements conforme à la réalité. Chaque fois que{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          traite des Données Personnelles,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          prend toutes les mesures raisonnables pour s&apos;assurer de l&apos;exactitude et de la
          pertinence des Données Personnelles au regard des finalités pour lesquelles{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          les traite.
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          7.2 Finalité des données collectées
        </h3>
        <p>
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est susceptible de traiter tout ou partie des données :
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-gray-600">
          <li>
            pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations
            et services commandés par l&apos;utilisateur : données de connexion et d&apos;utilisation
            du Site, facturation, historique des commandes, etc.
          </li>
          <li>
            pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel
            informatique utilisé pour la navigation, l&apos;adresse IP, le mot de passe (hashé)
          </li>
          <li>
            pour améliorer la navigation sur le Site : données de connexion et d&apos;utilisation
          </li>
          <li>
            pour mener des enquêtes de satisfaction facultatives sur{' '}
            <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
              https://www.edev-multimedia.com/
            </Link>{' '}
            : adresse email
          </li>
          <li>
            pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email
          </li>
        </ul>
        <p className="mt-4">
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par
          nécessité ou à des fins statistiques et d&apos;analyses.
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          7.3 Droit d&apos;accès, de rectification et d&apos;opposition
        </h3>
        <p>
          Conformément à la réglementation européenne en vigueur, les Utilisateurs de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          disposent des droits suivants :
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-gray-600">
          <li>
            droit d&apos;accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à
            jour, de complétude des données des Utilisateurs ;
          </li>
          <li>
            droit de verrouillage ou d&apos;effacement des données des Utilisateurs à caractère
            personnel (article 17 du RGPD), lorsqu&apos;elles sont inexactes, incomplètes, équivoques,
            périmées, ou dont la collecte, l&apos;utilisation, la communication ou la conservation est
            interdite ;
          </li>
          <li>
            droit de retirer à tout moment un consentement (article 13-2c du RGPD) ;
          </li>
          <li>
            droit à la limitation du traitement des données des Utilisateurs (article 18 du RGPD) ;
          </li>
          <li>
            droit d&apos;opposition au traitement des données des Utilisateurs (article 21 du RGPD) ;
          </li>
          <li>
            droit à la portabilité des données que les Utilisateurs ont fournies, lorsque ces données
            font l&apos;objet de traitements automatisés fondés sur leur consentement ou sur un contrat
            (article 20 du RGPD) ;
          </li>
          <li>
            droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui{' '}
            <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
              https://www.edev-multimedia.com/
            </Link>{' '}
            devra communiquer (ou non) ses données à un tiers qu&apos;ils aura préalablement désigné.
          </li>
        </ul>
        <p className="mt-4">
          Dès que{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          a connaissance du décès d&apos;un Utilisateur et à défaut d&apos;instructions de sa part,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          s&apos;engage à détruire ses données, sauf si leur conservation s&apos;avère nécessaire à
          des fins probatoires ou pour répondre à une obligation légale.
        </p>
        <p className="mt-4">
          Si l&apos;Utilisateur souhaite savoir comment{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          utilise ses Données Personnelles, demander à les rectifier ou s&apos;oppose à leur
          traitement, l&apos;Utilisateur peut contacter{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          par écrit à l&apos;adresse suivante :{' '}
          <a href="mailto:direction.edev@gmail.com" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            direction.edev@gmail.com
          </a>
          .
        </p>
        <p className="mt-4">
          Dans ce cas, l&apos;Utilisateur doit indiquer les Données Personnelles qu&apos;il
          souhaiterait que{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          corrige, mette à jour ou supprime, en s&apos;identifiant précisément avec une copie
          d&apos;une pièce d&apos;identité (carte d&apos;identité ou passeport).
        </p>
        <p className="mt-4">
          Les demandes de suppression de Données Personnelles seront soumises aux obligations qui
          sont imposées à{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          par la loi, notamment en matière de conservation ou d&apos;archivage des documents.
          Enfin, les Utilisateurs de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL
          (https://www.cnil.fr/fr/plaintes).
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          7.4 Non-communication des données personnelles
        </h3>
        <p>
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          s&apos;interdit de traiter, héberger ou transférer les Informations collectées sur ses
          Clients vers un pays situé en dehors de l&apos;Union européenne ou reconnu comme
          « non adéquat » par la Commission européenne sans en informer préalablement le client.
          Pour autant,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          reste libre du choix de ses sous-traitants techniques et commerciaux à la condition
          qu&apos;ils présentent les garanties suffisantes au regard des exigences du Règlement
          Général sur la Protection des Données (RGPD : n° 2016-679).
        </p>
        <p className="mt-4">
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          s&apos;engage à prendre toutes les précautions nécessaires afin de préserver la sécurité
          des Informations et notamment qu&apos;elles ne soient pas communiquées à des personnes
          non autorisées. Cependant, si un incident impactant l&apos;intégrité ou la confidentialité
          des Informations du Client est portée à la connaissance de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          ,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          devra dans les meilleurs délais informer le Client et lui communiquer les mesures
          correctives prises. Par ailleurs{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          ne collecte aucune « données sensibles ».
        </p>
        <p className="mt-4">
          Les Données Personnelles de l&apos;Utilisateur peuvent être traitées par des filiales de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          et des sous-traitants (prestataires de services), exclusivement afin de réaliser les
          finalités de la présente politique.
        </p>
        <p className="mt-4">
          Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus,
          les principales personnes susceptibles d&apos;avoir accès aux données des Utilisateurs de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          sont principalement les agents de notre service client.
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          7.5 Types de données collectées
        </h3>
        <p>
          Concernant les utilisateurs d&apos;un Site de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          , nous collectons les données suivantes qui sont indispensables au fonctionnement du
          service, et qui seront conservées pendant une période maximale de 5 ans après la fin
          de la relation contractuelle, et les données relatives aux opérations de paiement
          conservées pendant 13 mois.
        </p>
      </>
    ),
  },
  {
    num: '8',
    title: 'Notification d\'incident',
    content: (
      <>
        <p>
          Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune
          méthode de stockage électronique n&apos;est complètement sûre. Nous ne pouvons en conséquence
          pas garantir une sécurité absolue. Si nous prenions connaissance d&apos;une brèche de la
          sécurité, nous avertirions les utilisateurs concernés afin qu&apos;ils puissent prendre les
          mesures appropriées. Nos procédures de notification d&apos;incident tiennent compte de nos
          obligations légales, qu&apos;elles se situent au niveau national ou européen. Nous nous
          engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité
          de leur compte et à leur fournir toutes les informations nécessaires pour les aider à
          respecter leurs propres obligations réglementaires en matière de reporting.
        </p>
        <p className="mt-4">
          Aucune information personnelle de l&apos;utilisateur du site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, cédée ou
          vendue sur un support quelconque à des tiers. Seule l&apos;hypothèse du rachat de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          et de ses droits permettrait la transmission des dites informations à l&apos;éventuel
          acquéreur qui serait à son tour tenu de la même obligation de conservation et de
          modification des données vis à vis de l&apos;utilisateur du site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          .
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">Sécurité</h3>
        <p>
          Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données
          Personnelles de Santé,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la
          pseudonymisation, l&apos;encryption et mot de passe (hashé).
        </p>
        <p className="mt-4">
          Lors du traitement des Données Personnelles,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation
          détournée, accès non autorisé, divulgation, altération ou destruction.
        </p>
      </>
    ),
  },
  {
    num: '9',
    title: 'Liens hypertextes, « cookies » et balises internet',
    content: (
      <>
        <h3 className="mb-3 text-base font-bold text-gray-900">9.1 Liens hypertextes</h3>
        <p>
          Le site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          contient un certain nombre de liens hypertextes vers d&apos;autres sites, mis en place
          avec l&apos;autorisation de{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>
          . Cependant,{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités, et
          n&apos;assumera en conséquence aucune responsabilité de ce fait.
        </p>

        <h3 className="mt-6 mb-3 text-base font-bold text-gray-900">
          9.2 Cookies et balises internet
        </h3>
        <p>
          Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les
          utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir
          des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant
          que cela peut réduire ou empêcher l&apos;accessibilité à tout ou partie des Services
          proposés par le site.
        </p>
        <p className="mt-4 font-semibold text-gray-800">
          Ce que vous pouvez faire avec les cookies :
        </p>
        <p className="mt-2">
          Si vous désirez, vous avez la possibilité de configurer votre logiciel de navigation de
          manière à ce que des cookies soient enregistrés dans votre terminal ou, au contraire,
          qu&apos;ils soient rejetés, soit systématiquement, soit selon leur émetteur. Vous pouvez
          également configurer votre logiciel de navigation de manière à ce que l&apos;acceptation
          ou le refus des cookies vous soit proposé ponctuellement, avant qu&apos;un cookie soit
          susceptible d&apos;être enregistré dans votre terminal.
        </p>
        <p className="mt-4">
          Pour plus d&apos;informations concernant la gestion des cookies, consultez la page dédiée
          de la CNIL :{' '}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            https://www.cnil.fr/fr/cookies-et-autres-traceurs
          </a>
          .
        </p>
      </>
    ),
  },
  {
    num: '10',
    title: 'Droit applicable et attribution de juridiction',
    content: (
      <>
        <p>
          Tout litige en relation avec l&apos;utilisation du site{' '}
          <Link href="https://www.edev-multimedia.com/" className="text-edev underline underline-offset-2 hover:opacity-75 transition-opacity">
            https://www.edev-multimedia.com/
          </Link>{' '}
          est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait
          attribution exclusive de juridiction aux tribunaux compétents de{' '}
          <strong>Bastia</strong>.
        </p>
      </>
    ),
  },
]

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MentionsLegalesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
            Informations légales
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Mentions légales
          </h1>
          <p className="text-sm text-white/45">
            Dernière mise à jour : <time dateTime="2024-01-01">1er janvier 2024</time>
          </p>
        </div>
      </section>

      {/* ── CORPS ─────────────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16">

          {/* Boîte récap */}
          <div className="mb-14 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">
              Récapitulatif
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {RECAP.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                  <span className="text-sm text-gray-500">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Définitions */}
          <div className="mb-12 rounded-2xl border border-gray-200 bg-gray-50/50 p-6 md:p-8">
            <h2 className="mb-5 text-xl font-extrabold tracking-tight text-gray-900">
              Définitions
            </h2>
            <dl className="flex flex-col gap-4 text-sm leading-relaxed text-gray-600">
              {[
                {
                  term: 'Client',
                  def: 'Tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.',
                },
                {
                  term: 'Prestations et Services',
                  def: 'https://www.edev-multimedia.com/ met à disposition des Clients l\'ensemble de ses services de création web, référencement, communication digitale et graphisme.',
                },
                {
                  term: 'Contenu',
                  def: 'Ensemble des éléments constituant l\'information présente sur le Site, notamment textes, images et vidéos.',
                },
                {
                  term: 'Informations clients',
                  def: 'Ensemble des données personnelles susceptibles d\'être détenues par https://www.edev-multimedia.com/ pour la gestion de votre compte, de la relation client et à des fins d\'analyses et de statistiques.',
                },
                {
                  term: 'Utilisateur',
                  def: 'Internaute se connectant et utilisant le site susmentionné.',
                },
                {
                  term: 'Informations personnelles',
                  def: '« Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l\'identification des personnes physiques auxquelles elles s\'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978). Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679).',
                },
              ].map(({ term, def }) => (
                <div key={term} className="flex flex-col gap-0.5">
                  <dt className="font-semibold text-gray-900">{term}</dt>
                  <dd>{def}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sections numérotées */}
          <div className="flex flex-col gap-10 divide-y divide-gray-100">
            {SECTIONS.map((section) => (
              <article key={section.num} className="pt-10 first:pt-0">
                <h2 className="mb-5 flex items-baseline gap-3 text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
                  <span className="shrink-0 text-2xl font-black text-edev md:text-3xl" aria-hidden="true">
                    {section.num}.
                  </span>
                  {section.title}
                </h2>
                <div className="text-sm leading-relaxed text-gray-600 [&_p]:mb-0 [&_p+p]:mt-4">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          {/* Pied de page légal */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-center text-xs text-gray-400">
            Page conforme à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 (LCEN) &nbsp;·&nbsp;{' '}
            <Link href="/plan-du-site" className="hover:text-edev transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
