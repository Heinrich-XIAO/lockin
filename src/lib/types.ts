export enum CompletionStatus {
  Unregistered,
  Done,
  Frozen
}

export type Streak = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  dates: [Date, CompletionStatus][];
};
