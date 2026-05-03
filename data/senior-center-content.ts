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
  location: string;
  description: string;
  tag: string;
};

export type ActivityItem = {
  id: string;
  title: string;
  schedule: string;
  attendance: string;
  details: string;
};

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  contact: string;
};

export const centerProfile = {
  name: 'Prunedale Senior Center',
  tagline:
    'A friendly place to stay active, share updates, and build camaraderie.',
  address: '8300 A Prunedale North Road, Prunedale, CA 93907',
  phone: '(831) 663-5023',
  email: 'prunedalesenior@sbcglobal.net',
  hours: [
    'Monday and Thursday: 9:00 AM to 3:00 PM',
    'Tuesday, Wednesday, and Friday: 9:00 AM to 12:00 PM',
    'Lunch is served daily at 11:30 AM with a one-day-ahead reservation.',
  ],
};

export const announcements: Announcement[] = [
  {
    id: 'hours',
    title: 'Center hours and daily lunch',
    body:
      'The center is open Monday through Friday. Lunch is served each day at 11:30 AM, and members are encouraged to call one day ahead to reserve a meal.',
    category: 'Center update',
  },
  {
    id: 'jam-session',
    title: 'Jam session is part of the weekly lineup',
    body:
      'Tuesday mornings are reserved for music, conversation, and community. Members can bring an instrument, sing along, or simply listen.',
    category: 'Weekly event',
  },
  {
    id: 'sign-in',
    title: 'Digital sign-in pilot',
    body:
      'This app preview includes attendance reminders so members can sign in for classes, events, and lunch with less paperwork.',
    category: 'App feature',
  },
];

export const todaysClasses: ClassSession[] = [
  {
    id: 'tai-chi',
    title: 'Tai Chi for Balance',
    time: '10:00 AM to 10:45 AM',
    location: 'Main activity room',
    note: 'Please sign in by 9:55 AM so staff can track attendance.',
  },
  {
    id: 'art-class',
    title: 'Art Class and Creative Time',
    time: '1:00 PM to 2:30 PM',
    location: 'Craft table',
    note: 'Supplies are provided, and first-time guests can join at any skill level.',
  },
  {
    id: 'tech-help',
    title: 'Phone and Tablet Help Desk',
    time: '2:45 PM to 3:30 PM',
    location: 'Front lobby table',
    note: 'Bring your device and any passwords you already know so volunteers can help faster.',
  },
];

export const recurringEvents: EventItem[] = [
  {
    id: 'jam-session',
    title: 'Jam Session',
    schedule: 'Every Tuesday at 10:30 AM',
    location: 'Community room',
    description:
      'An easygoing weekly music circle for singers, listeners, and musicians who want to spend time together.',
    tag: 'Recurring',
  },
  {
    id: 'food-bank',
    title: 'Food Bank Deliveries',
    schedule: 'Every Wednesday at 9:00 AM until supplies run out',
    location: 'Front entrance',
    description:
      'Produce boxes are distributed to families while supplies last. Volunteers help greet members and manage pickup.',
    tag: 'Weekly support',
  },
  {
    id: 'grey-bears',
    title: 'Grey Bears Delivery Pickup',
    schedule: 'Every Thursday at 9:00 AM',
    location: 'Center driveway',
    description:
      'Members enrolled with Grey Bears can receive weekly groceries and bread through the center pickup window.',
    tag: 'Nutrition',
  },
];

export const specialEvents: EventItem[] = [
  {
    id: 'healthy-aging',
    title: 'Healthy Aging Resource Table',
    schedule: 'Friday, May 2 from 10:00 AM to 12:00 PM',
    location: 'Lobby',
    description:
      'Staff and volunteers share printed materials, transportation options, and wellness resources for older adults.',
    tag: 'Special event',
  },
  {
    id: 'community-lunch',
    title: 'Community Lunch and Welcome Table',
    schedule: 'Thursday, May 8 at 11:30 AM',
    location: 'Dining area',
    description:
      'A relaxed lunch designed to welcome new members, answer app questions, and help people get signed up.',
    tag: 'New members',
  },
];

export const upcomingEvents: EventItem[] = [
  recurringEvents[0],
  specialEvents[0],
  specialEvents[1],
];

export const activities: ActivityItem[] = [
  {
    id: 'tai-chi',
    title: 'Tai Chi for Balance',
    schedule: 'Morning wellness session',
    attendance: 'Sign in at the front desk tablet before class starts.',
    details:
      'A gentle movement class focused on balance, confidence, and safe mobility.',
  },
  {
    id: 'art-class',
    title: 'Art Class',
    schedule: 'Afternoon creative session',
    attendance: 'Materials are counted from the attendance list each week.',
    details:
      'Members can paint, sketch, and enjoy a calm social space without needing prior art experience.',
  },
  {
    id: 'coffee-chat',
    title: 'Coffee and Conversation',
    schedule: 'Drop in during open hours',
    attendance: 'Front desk check-in helps the center plan seating and snacks.',
    details:
      'A simple way to keep people connected, share updates, and build daily camaraderie.',
  },
];

export const attendanceSteps = [
  'Check in when you arrive for a class, event, or lunch.',
  'Choose the program you are attending so staff can track interest and room use.',
  'Ask a volunteer for help if this is your first visit or if you prefer a paper backup.',
];

export const supportResources: ResourceItem[] = [
  {
    id: 'alliance-on-aging',
    title: 'Alliance on Aging',
    description:
      'Support with Medicare questions, long-term care resources, counseling, and local senior service referrals.',
    contact: '(831) 655-1334 or (831) 758-4011',
  },
  {
    id: 'mst',
    title: 'Monterey-Salinas Transit Mobility Services',
    description:
      'Transportation assistance and mobility support for members who need help getting to appointments or programs.',
    contact: 'mobility@mst.org, (831) 373-1393, or (831) 264-5869',
  },
  {
    id: 'meals-on-wheels',
    title: 'Meals on Wheels Salinas',
    description:
      'Home-delivered meal support for older adults who may need nutrition help outside the center.',
    contact: 'Referral available through the resource desk',
  },
  {
    id: 'equipment-support',
    title: 'Equipment Support at the Center',
    description:
      'The center may be able to help members find wheelchairs, walkers, crutches, potty chairs, and bath stools.',
    contact: 'Call the center director at (831) 663-5023',
  },
];

export const foodPrograms = [
  {
    id: 'lunch',
    title: 'Daily lunch reservations',
    details:
      'Lunch is served at 11:30 AM each weekday. Members should call one day ahead to reserve a meal. Suggested donation: $3.00.',
  },
  {
    id: 'food-bank',
    title: 'Food Bank deliveries',
    details:
      'Every Wednesday, produce boxes are available beginning at 9:00 AM while supplies last, with one box per family.',
  },
  {
    id: 'grey-bears',
    title: 'Grey Bears weekly bags',
    details:
      'Grey Bears pickups take place every Thursday at 9:00 AM for enrolled members.',
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

export const notificationPreview = [
  'Event reminders can be sent by text message for members who opt in.',
  'Announcements can stay pinned on the home screen for easy reading.',
  'Staff can note support follow-up requests only when a member gives consent.',
];
