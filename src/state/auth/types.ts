export type AuthState = {
  id: number;
  username: string;
  name: string;
  email: string;
};

export type initialStateType = {
  auth: AuthState;
  health?: HealthType;
};

export type HealthType = {
  createdAt: string;
  percent: number;
  updateAt: string;
  id: string;
};
