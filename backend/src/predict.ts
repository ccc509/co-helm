const exampleResponse = {
  evidence: [
    {
      criteria: "Patient has not undergone colonoscopy in the past 10 years",
      score: 9,
      met: true,
      evidence: "Pa@ent never had a colonoscopy.",
      reasoning:
        "The HPI section of the medical record states that the patient has never had a colonoscopy. This is a positive finding for the criteria.",
      page: 3,
    },
    {
      criteria: "Patient has family history of colon cancer",
      score: 9,
      met: true,
      evidence:
        "Pa@ent has family history of colon cancer (grandfather on his eigh@es).",
      reasoning:
        "The Assesment/Plan section of the medical record states that the patient's grandfather had colon cancer. This is a positive finding for the criteria.",
      page: 3,
    },
    {
      criteria: "Patient has blood in stool",
      score: -1,
      met: false,
      evidence: "Pa@ent denies blood in stool.",
      reasoning:
        "The HPI section of the medical record states that the denies the presence of blood in stool. The doctor has not provided evidence of this claim.",
      page: 3,
    },
    {
      criteria: "Patient is over 45 years old",
      score: -1,
      met: false,
      evidence: "DOB: 06/16/1982",
      reasoning: "Patient was born in 1982 making them 41 years old.",
      page: 1,
    },
  ],
};

type EvidenceItem = {
  criteria: string;
  score: number;
  met: boolean;
  evidence: string;
  reasoning: string;
  page: number;
};

export type Prediction = {
  evidence: EvidenceItem[];
};

export default async function predict({
  guidelinesText,
}: {
  guidelinesText: string;
}): Promise<Prediction> {
  if (!guidelinesText) throw new Error("Missing required parameters");

  return new Promise((resolve) =>
    setTimeout(() => resolve(exampleResponse), 1000)
  );
}
