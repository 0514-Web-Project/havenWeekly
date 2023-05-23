export interface QuestType {
  name: string;
  difficulty: number;
}

export interface CallbackType {
  onSuccess: (res: any) => void;
  onFail: (err: Error) => void;
}
