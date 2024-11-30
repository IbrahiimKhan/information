export interface Player {
  name: string;
  nickname: string;
  nationality: string;
  photo: string;
}

export interface Team {
  players: Player[];
}

export interface News {
  title: string;
  score?: string[];
  time: string;
  comments?: number;
  cardType: 'list' | 'score' | 'system';
  newsImage?: string;
  team?: Team[];
}
