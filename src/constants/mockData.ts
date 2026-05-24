import type { User, Trend, Topic } from "../types";

export const MOCK_PEOPLE_TO_FOLLOW: User[] = [
  { id: "1", name: "Alena Gouse", following: false },
  { id: "2", name: "Ruben Bator", following: true },
  { id: "3", name: "Aspen Stanton", following: false },
  { id: "4", name: "Madelyn George", following: false },
];

export const MOCK_TRENDS: Trend[] = [
  {
    id: "1",
    title: "Be the Person You Are on Vacation",
    author: "Maren Torff",
  },
  {
    id: "2",
    title: "Hate NFTs? I have some bad news...",
    author: "Zain Levin",
  },
  {
    id: "3",
    title: "The real impact of dark UX patterns",
    author: "Lindsey Curtis",
  },
];

export const MOCK_TOPICS: Topic[] = [
  { id: "1", name: "Technology" },
  { id: "2", name: "Design Thinking" },
  { id: "3", name: "Crypto" },
  { id: "4", name: "NFT" },
  { id: "5", name: "Personal Growth" },
  { id: "6", name: "Reading" },
];
