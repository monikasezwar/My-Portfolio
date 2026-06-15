/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  company: string;
  description: string;
  technologies: string[];
  playStoreUrl: string;
  industry: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100 score for visuals
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  highlights: string[];
  technologies: string[];
}

export interface BlogArticle {
  title: string;
  link: string;
  description: string;
  coverImage: string;
  pubDate: string;
  readingTime: string;
  category: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  topics: string[];
}

export interface GitHubStats {
  profile: {
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    followers: number;
    following: number;
    publicRepos: number;
    starsCount: number;
    contributionsCount: number;
    location: string;
  };
  repos: GitHubRepo[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}
