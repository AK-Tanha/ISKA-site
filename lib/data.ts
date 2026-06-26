export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Leadership', 
    href: '#',
    submenu: [
      { name: 'Executive Board', href: '/board' },
      { name: 'Regional Directors', href: '/directors' },
    ]
  },
  { 
    name: 'Sports', 
    href: '#',
    submenu: [
      { name: 'Programs', href: '/programs' },
      { name: 'Rankings', href: '/rankings' },
      { name: 'Events', href: '/events' },
    ]
  },
  { 
    name: 'Media', 
    href: '#',
    submenu: [
      { name: 'News', href: '/news' },
      { name: 'Gallery', href: '/gallery' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/iskabangladesh/',
  facebook: 'https://www.facebook.com/profile.php?id=61560488980784',
  linkedin: 'https://www.linkedin.com/company/iska-bangladesh/',
  iskaAsia: 'https://www.iskaworldhq.com/directors-of-asia/',
};

export const CONTACT_INFO = {
  email: 'iskabangladesh@gmail.com',
  phone: '01804277235',
  address: 'Dhaka, Bangladesh',
};

export const STATS = [
  { label: 'Established', value: '2026' },
  { label: 'Global Network', value: 'ISKA' },
  { label: 'Recognition', value: 'International' },
  { label: 'Governing Body', value: 'National' },
];

export const EXECUTIVE_BOARD = [
  {
    name: 'Mehedi Hassan Polok',
    image: 'Joint Secretary Mehedi Hassan Polok.png',
    slug: 'mehedi-hassan-polok',
    role: 'National Director',
    bio: 'Founder and National Director of ISKA Bangladesh, officially appointed by the President of ISKA to lead and represent the organization in Bangladesh.',
  },
  {
    name: 'Ishtiak Ahmed Chowdhury',
    image: 'GENERAL Secretary Ishtiak Ahmed Chowdhury.jpg',
    slug: 'ishtiak-ahmed-chowdhury',
    role: 'Officiating Director',
    bio: 'Oversees officiating standards, referee and judge certification across all ISKA sanctioned events in Bangladesh.',
  },
  {
    name: 'Atiqur Rahman Sazib',
    image: 'Treasurer Atiqur Rahman Sajib.png',
    slug: 'atiqur-rahman-sazib',
    role: 'Ranking & National Team Development Director',
    bio: 'Focuses on maintaining national rankings and developing elite athletes for international competition pathways.',
  },
  {
    name: 'Zawad Syam',
    image: 'Zawad sYAM.png',
    slug: 'zawad-syam',
    role: 'Athlete Management Director',
    bio: 'Responsible for athlete welfare, career guidance, and managing professional relationships within the combat sports community.',
  },
  {
    name: 'Alik Bhowmick',
    image: 'Alik Bhowmick.png',
    slug: 'alik-bhowmick',
    role: 'Strategic Partnerships Director',
    bio: 'Develops relationships with national and international partners, sponsors, and governing bodies.',
  },
  {
    name: 'Tanver Ahamead Emon',
    image: 'Tanver Ahamead Emon.png',
    slug: 'tanver-ahamead-emon',
    role: 'Creative Marketing Director',
    bio: 'Leads the visual identity, digital presence, and marketing strategies for ISKA Bangladesh.',
  },
];

export const REGIONS = [
  { name: 'Dhaka', status: 'Coming Soon' },
  { name: 'Chittagong', status: 'Coming Soon' },
  { name: 'Rajshahi', status: 'Coming Soon' },
  { name: 'Sylhet', status: 'Coming Soon' },
  { name: 'Khulna', status: 'Coming Soon' },
];

export const PROGRAMS = [
  { title: 'Athlete Development', icon: 'UserPlus', description: 'Comprehensive pathways for amateur and professional athletes.' },
  { title: 'Coach Education', icon: 'GraduationCap', description: 'Official ISKA coaching certifications and workshops.' },
  { title: 'Referee Certification', icon: 'Scale', description: 'International standards for ring officiating and safety.' },
  { title: 'Judge Certification', icon: 'ClipboardCheck', description: 'Scoring excellence and technical evaluation training.' },
  { title: 'Event Sanctioning', icon: 'ShieldCheck', description: 'Ensuring safety and professionalism in combat sports events.' },
  { title: 'National Rankings', icon: 'TrendingUp', description: 'The official leaderboard for combat sports in Bangladesh.' },
  { title: 'Championship Opportunities', icon: 'Trophy', description: 'Pathways to regional and world title fights.' },
  { title: 'International Pathways', icon: 'Globe', description: 'Connecting Bangladeshi talent to the global ISKA network.' },
  { title: 'Club Registration', icon: 'Home', description: 'Official affiliation for combat sports gyms and clubs.' },
  { title: 'Official Membership', icon: 'UserCheck', description: 'Join the national governing body for combat sports.' },
];

export const RANKINGS_CATEGORIES = ['Kickboxing', 'Muay Thai', 'MMA', 'Boxing'];

export const MOCK_RANKINGS = [
  { rank: 1, name: 'S. Ahmed', weight: '65kg', record: '12-2-0', category: 'Kickboxing', status: 'Champion' },
  { rank: 2, name: 'M. Rahman', weight: '65kg', record: '10-3-1', category: 'Kickboxing', status: 'Contender' },
  { rank: 3, name: 'K. Islam', weight: '70kg', record: '8-1-0', category: 'Kickboxing', status: 'Contender' },
  { rank: 1, name: 'R. Hossain', weight: 'Heavyweight', record: '15-0-0', category: 'MMA', status: 'Champion' },
];

export const MOCK_EVENTS = [
  {
    id: 1,
    title: 'ISKA National Championship 2026',
    date: '2026-10-15',
    location: 'Mirpur Indoor Stadium, Dhaka',
    status: 'Upcoming',
    image: 'https://picsum.photos/seed/iska1/800/600',
  },
  {
    id: 2,
    title: 'Regional Qualifier: Chittagong',
    date: '2026-08-20',
    location: 'MA Aziz Stadium, Chittagong',
    status: 'Upcoming',
    image: 'https://picsum.photos/seed/iska2/800/600',
  },
];

export const MOCK_NEWS = [
  {
    id: 1,
    title: 'ISKA Bangladesh Officially Recognized',
    date: '2026-04-29',
    excerpt: 'Bangladesh joins the global ISKA network as the newest South Asian member nation.',
    category: 'Official',
  },
  {
    id: 2,
    title: 'Mehedi Hassan Polok Appointed as National Director',
    date: '2026-05-05',
    excerpt: 'The ISKA World Headquarters confirms the appointment of the national leadership team.',
    category: 'Leadership',
  },
];
