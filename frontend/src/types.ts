export interface Rigor {
  date: string;
  minutesFocused: number;
}

export interface UserState {
  username: string;
  id: string;
  rigor: Rigor[];
  token: string;
}

export interface NotificationState {
  message: string;
  status: string;
}
