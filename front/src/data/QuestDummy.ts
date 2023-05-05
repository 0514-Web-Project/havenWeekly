export const QuestDummy: QuestType[] = [
  { name: "블랙헤븐 내부 : 합금 제네로이드 B 처치", difficulty: 3 },
  { name: "블랙헤븐 내부 : 고철 제네로이드 A 처치", difficulty: 5 },
];

export interface QuestType {
  name: string;
  difficulty: number;
}
