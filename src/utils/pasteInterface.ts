export interface IPaste {
  user_id: number;
  paste_id: number;
  title: string | undefined | null;
  paste_body: string;
  date: string;
}
