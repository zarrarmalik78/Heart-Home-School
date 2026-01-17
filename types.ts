
export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  color: string;
  accentColor: string;
}

export interface Teacher {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Testimony {
  parent: string;
  text: string;
  image: string;
}
