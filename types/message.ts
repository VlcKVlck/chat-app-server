export interface Message {
  authorId: number;
  id: number;
  body: string;
  timestamp: number ;
  authorName?: string;
  likes: number[];
  status?: 'pending' | 'ok' | 'error';
}