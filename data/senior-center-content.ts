export type Announcement = {
  id: string;
  title: string;
  body: string;
  category: string;
};

export type ClassSession = {
  id: string;
  title: string;
  time: string;
  location: string;
  note: string;
};

export type EventItem = {
  id: string;
  title: string;
  schedule: string;
  details: string;
};

export type ScheduleEntry = {
  id: string;
  time: string;
  title: string;
  note?: string;
};

export type ScheduleDay = {
  id: string;
  day: string;
  hours: string;
  items: ScheduleEntry[];
};

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  contact: string;
};

export type QuickLink = {
  id: string;
  label: string;
  href: string;
};

export const centerProfile = {
  name: 'Prunedale Senior Center',
  tagline: 'Stay active, stay connected, and enjoy your community.',
  address: '8300 A Prunedale North Road, Prunedale, CA 93907',
  phone: '(831) 261-2684',
  email: 'prunedalesenior@att.net',
  website: 'https://www.prunedaleseniorcenter.com',
  facebook: 'https://www.facebook.com/prunedaleseniorcenter',
  hours: [
    'Monday and Thursday: 9:00 AM to 3:00 PM',
    'Tuesday, Wednesday, and Friday: 9:00 AM to 12:00 PM',
    'Lunch is served every weekday at 11:30 AM.',
  ],
};

export const announcements: Announcement[] = [
  {
    id: 'lunch',
    title: 'Senior lunch is served every weekday',
    body: 'Lunch starts at 11:30 AM. Please call one day ahead to reserve.',
    category: 'Lunch',
  },
  {
    id: 'food',
    title: 'Weekly food programs are available',
    body:
      'Food Bank is on Wednesdays from 8:30 AM to 10:30 AM. Grey Bears pickup is on Thursdays from 8:45 AM to 1:00 PM.',
    category: 'Food',
  },
  {
    id: 'music',
    title: 'Jam Sessions and line dancing are part of the weekly schedule',
    body:
      'Jam Sessions are on Tuesdays, and Line Dancing is on Thursdays at the American Legion Hall Post 593.',
    category: 'Activities',
  },
];

export const todaysClasses: ClassSession[] = [
  {
    id: 'lunch',
    title: 'Senior Lunch',
    time: 'Monday to Friday, 11:30 AM',
    location: 'Prunedale Senior Center',
    note: 'Please call one day ahead to reserve your lunch.',
  },
  {
    id: 'jam-session',
    title: 'Jam Sessions',
    time: 'Tuesday, 10:30 AM to 11:30 AM',
    location: 'Prunedale Senior Center',
    note: 'Bring your instruments and your voice.',
  },
  {
    id: 'line-dancing',
    title: 'Line Dancing',
    time: 'Thursday, 10:00 AM to 11:15 AM',
    location: 'American Legion Hall Post 593',
    note: 'A regular weekly activity on the posted center schedule.',
  },
];

export const recurringEvents: EventItem[] = [
  {
    id: 'jam-session',
    title: 'Jam Session',
    schedule: 'Tuesday, 10:30 AM to 11:30 AM',
    details: 'Bring your instrument and your voice.',
  },
  {
    id: 'bunco',
    title: 'Bunco',
    schedule: 'First Wednesday of the month, 12:15 PM',
    details: 'Held after lunch. Call for more information.',
  },
  {
    id: 'line-dancing',
    title: 'Line Dancing',
    schedule: 'Thursday, 10:00 AM to 11:15 AM',
    details: 'Held at the American Legion Hall Post 593.',
  },
  {
    id: 'cooking-with-scott',
    title: 'Cooking with Scott',
    schedule: 'Third Thursday',
    details: 'Call the center to sign up.',
  },
];

export const weeklySchedule: ScheduleDay[] = [
  {
    id: 'monday',
    day: 'Monday',
    hours: '9:00 AM to 3:00 PM',
    items: [
      { id: 'mon-bingo', time: '9:30 - 11:30', title: 'Bingo' },
      { id: 'mon-lunch', time: '11:30', title: 'Senior Lunch' },
      { id: 'mon-art', time: '12:30 - 3:00', title: 'Art' },
    ],
  },
  {
    id: 'tuesday',
    day: 'Tuesday',
    hours: '9:00 AM to 12:00 PM',
    items: [
      { id: 'tue-tai-chi', time: '9:30 - 10:30', title: 'Tai Chi' },
      {
        id: 'tue-jam',
        time: '10:30 - 11:30',
        title: 'Jam Sessions',
        note: 'Bring your instruments and your voice.',
      },
      { id: 'tue-lunch', time: '11:30', title: 'Senior Lunch' },
    ],
  },
  {
    id: 'wednesday',
    day: 'Wednesday',
    hours: '9:00 AM to 12:00 PM',
    items: [
      { id: 'wed-bingo', time: '9:30 - 11:30', title: 'Bingo' },
      { id: 'wed-lunch', time: '11:30', title: 'Senior Lunch' },
      {
        id: 'wed-bunco',
        time: '12:15',
        title: 'Bunco',
        note: 'First Wednesday of the month.',
      },
    ],
  },
  {
    id: 'thursday',
    day: 'Thursday',
    hours: '9:00 AM to 3:00 PM',
    items: [
      { id: 'thu-tai-chi', time: '9:30 - 10:30', title: 'Tai Chi' },
      {
        id: 'thu-line-dancing',
        time: '10:00 - 11:15',
        title: 'Line Dancing',
        note: 'American Legion Hall Post 593.',
      },
      {
        id: 'thu-cooking',
        time: 'Third Thursday',
        title: 'Cooking with Scott',
        note: 'Call to sign up.',
      },
      { id: 'thu-lunch', time: '11:30', title: 'Senior Lunch' },
      {
        id: 'thu-computer',
        time: '12:15 - 3:00',
        title: 'Computer Support',
      },
      { id: 'thu-art', time: '12:30 - 3:00', title: 'Art' },
    ],
  },
  {
    id: 'friday',
    day: 'Friday',
    hours: '9:00 AM to 12:00 PM',
    items: [
      { id: 'fri-bingo', time: '9:30 - 11:30', title: 'Bingo' },
      { id: 'fri-lunch', time: '11:30', title: 'Senior Lunch' },
    ],
  },
];

export const supportResources: ResourceItem[] = [
  {
    id: 'alliance-on-aging',
    title: 'Alliance on Aging',
    description:
      'Help with Medicare questions, counseling, and local senior service referrals.',
    contact: '(831) 655-1334 or (831) 758-4011',
  },
  {
    id: 'mst',
    title: 'Transportation Support',
    description:
      'Transportation assistance and mobility support for members who need help getting to programs or appointments.',
    contact: '(831) 373-1393 or (831) 264-5869',
  },
  {
    id: 'equipment-support',
    title: 'Equipment Support',
    description:
      'The center may be able to help members find wheelchairs, walkers, crutches, potty chairs, and bath stools.',
    contact: 'Call Bob at the center: (831) 261-2684',
  },
];

export const foodPrograms = [
  {
    id: 'lunch',
    title: 'Senior Lunch',
    details:
      'Served Monday to Friday at 11:30 AM. Please call one day ahead to reserve.',
  },
  {
    id: 'food-bank',
    title: 'Wednesday Food Bank',
    details: 'Food Bank boxes are listed from 8:30 AM to 10:30 AM.',
  },
  {
    id: 'grey-bears',
    title: 'Thursday Grey Bears',
    details:
      'Grey Bears vegetable bags are listed from 8:45 AM to 1:00 PM. Sign up online at Greybears.org.',
  },
];

export const quickContacts = [
  {
    id: 'phone',
    label: 'Main phone',
    value: centerProfile.phone,
  },
  {
    id: 'email',
    label: 'Email',
    value: centerProfile.email,
  },
  {
    id: 'address',
    label: 'Address',
    value: centerProfile.address,
  },
];

export const quickLinks: QuickLink[] = [
  {
    id: 'website',
    label: 'Visit the website',
    href: centerProfile.website,
  },
  {
    id: 'facebook',
    label: 'Open Facebook page',
    href: centerProfile.facebook,
  },
];
