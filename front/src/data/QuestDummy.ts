export const QuestDummy: QuestType[] = [
  { name: "헤이븐 : 물건 수집 1", difficulty: 3 },
  { name: "헤이븐 : 물건 수집 2", difficulty: 2 },
  { name: "헤이븐 : 물건 수집 3", difficulty: 3 },
  { name: "헤이븐 : 물건 수집 4", difficulty: 4 },
  { name: "기계무덤 : 적 로봇 처치 1", difficulty: 2 },
  { name: "스카이라인 : 적 로봇 처치 1", difficulty: 5 },
];

export interface QuestType {
  name: string;
  difficulty: number;
}
