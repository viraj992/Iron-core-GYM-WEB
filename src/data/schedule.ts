export const schedule = [
  {
    time: '6:00 AM',
    monday: { class: 'HIIT Blast', trainer: 'Sarah K.', spots: 8 },
    tuesday: { class: 'Yoga Flow', trainer: 'Lisa C.', spots: 12 },
    wednesday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
    thursday: { class: 'Strength', trainer: 'Marcus S.', spots: 10 },
    friday: { class: 'Cardio Burn', trainer: 'David C.', spots: 8 },
  },
  {
    time: '9:00 AM',
    monday: { class: 'Yoga & Flex', trainer: 'Lisa C.', spots: 15 },
    tuesday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
    wednesday: { class: 'Bodybuilding', trainer: 'David C.', spots: 8 },
    thursday: { class: 'HIIT Blast', trainer: 'Sarah K.', spots: 8 },
    friday: { class: 'Yoga Flow', trainer: 'Lisa C.', spots: 12 },
  },
  {
    time: '12:00 PM',
    monday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
    tuesday: { class: 'Strength', trainer: 'Marcus S.', spots: 10 },
    wednesday: { class: 'Cardio HIIT', trainer: 'Sarah K.', spots: 8 },
    thursday: { class: 'Yoga Flow', trainer: 'Lisa C.', spots: 12 },
    friday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
  },
  {
    time: '4:00 PM',
    monday: { class: 'Strength', trainer: 'Marcus S.', spots: 10 },
    tuesday: { class: 'HIIT Blast', trainer: 'Sarah K.', spots: 8 },
    wednesday: { class: 'Yoga Flow', trainer: 'Lisa C.', spots: 12 },
    thursday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
    friday: { class: 'Bodybuilding', trainer: 'David C.', spots: 8 },
  },
  {
    time: '6:00 PM',
    monday: { class: 'Cardio Burn', trainer: 'David C.', spots: 8 },
    tuesday: { class: 'Bodybuilding', trainer: 'David C.', spots: 8 },
    wednesday: { class: 'Strength', trainer: 'Marcus S.', spots: 10 },
    thursday: { class: 'Cardio HIIT', trainer: 'Sarah K.', spots: 8 },
    friday: { class: 'HIIT Blast', trainer: 'Sarah K.', spots: 8 },
  },
  {
    time: '8:00 PM',
    monday: { class: 'Yoga Flow', trainer: 'Lisa C.', spots: 12 },
    tuesday: { class: 'CrossFit', trainer: 'Sarah K.', spots: 6 },
    wednesday: { class: 'HIIT Blast', trainer: 'Sarah K.', spots: 8 },
    thursday: { class: 'Bodybuilding', trainer: 'David C.', spots: 8 },
    friday: { class: 'Yoga & Flex', trainer: 'Lisa C.', spots: 15 },
  },
];

export type ClassType = 'All' | 'HIIT' | 'Yoga' | 'CrossFit' | 'Strength' | 'Cardio' | 'Bodybuilding';
export const classTypes: ClassType[] = ['All', 'HIIT', 'Yoga', 'CrossFit', 'Strength', 'Cardio', 'Bodybuilding'];
