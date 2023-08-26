export interface QuestType {
  id: number;
  name: string;
  difficulty: number;
}

export interface CallbackType {
  onSuccess: (res: any) => void;
  onFail: (err: Error) => void;
}
