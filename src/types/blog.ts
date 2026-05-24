export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  author?: string;
  category?: string;
  likes?: number;
}

export interface CreateBlogInput extends Omit<Blog, "id"> {}

export interface User {
  id: string;
  name: string;
  following: boolean;
  avatar?: string;
}

export interface Trend {
  id: string;
  title: string;
  author: string;
}

export interface Topic {
  id: string;
  name: string;
}
