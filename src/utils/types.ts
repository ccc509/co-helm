type EvidenceItem = {
  criteria: string;
  score: number;
  met: boolean;
  evidence: string;
  reasoning: string;
  page: number;
};

export type Prediction = {
  id: string;
  evidence: EvidenceItem[];
};
