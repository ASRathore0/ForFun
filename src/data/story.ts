export interface StoryChapter {
  id: number;
  title: string;
  text: string;
  icon?: string;
  theme?: 'light' | 'dark' | 'gold';
  alignment: 'left' | 'right';
  date?: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

export const storyChapters: StoryChapter[] = [
  {
    id: 1,
    title: "The Girl Who Changed Everything",
    text: "We were in 10th class tuition. She was the most beautiful and intelligent girl in class. And I was just an ordinary boy… not good looking, weak in studies, and full of insecurities. But somewhere between books and classes… I fell in love.",
    theme: 'light',
    alignment: 'left',
    icon: 'book'
  },
  {
    id: 2,
    title: "Falling in Love Made Me Stronger",
    text: "I didn’t have the courage to tell her how I felt. So I did the only thing I could… I started studying harder. Day and night. And slowly… I became the topper of our class. Not just for marks… but to become worthy of her.",
    theme: 'light',
    alignment: 'right',
    icon: 'trending-up'
  },
  {
    id: 3,
    title: "The Letter in Her Notebook",
    text: "One day, I gathered all my courage. I wrote a letter. And quietly placed it inside her notebook. 10th class ended. School was over. But my heart was still waiting…",
    theme: 'gold',
    alignment: 'left',
    icon: 'mail'
  },
  {
    id: 4,
    title: "The Longest 3 Months",
    text: "I waited. One week… one month… three months. Every unknown number made my heart race. And then one day… She called.",
    theme: 'light',
    alignment: 'right',
    icon: 'phone'
  },
  {
    id: 5,
    title: "Friends… But With Hidden Feelings",
    text: "We started talking. But only as friends. For three years, we shared laughs, dreams, and moments… But my feelings never faded.",
    theme: 'light',
    alignment: 'left',
    icon: 'users'
  },
  {
    id: 6,
    title: "The Two Years Without You",
    text: "For some reasons, we fought. And we stopped talking. Two long years. But not a single day passed when I didn’t miss her.",
    theme: 'dark',
    alignment: 'right',
    icon: 'moon'
  },
  {
    id: 7,
    title: "The Call That Brought Me Back to Life",
    text: "After two years… she called. And that moment, I promised myself — I will never let her go again. This time, I confessed again. And this time… she said yes.",
    theme: 'gold',
    alignment: 'left',
    icon: 'heart'
  },
  {
    id: 8,
    title: "Our Beginning Together",
    text: "Our first date was a movie. Our second date was a temple. Love, laughter, blessings.",
    theme: 'light',
    alignment: 'right',
    icon: 'film'
  },
  {
    id: 9,
    title: "Village and City, But One Heart",
    text: "She lives in a village. I live in a city. But I never feel she is far away. Sometimes I miss her. But love makes every distance small.",
    theme: 'light',
    alignment: 'left',
    icon: 'map-pin'
  }
];
