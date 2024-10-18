"use client";

export default function XML() {
  async function parse(aiResponse: string) {
    const response = await fetch("/api/parser/xml", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: aiResponse }),
    });
  }

  const handleButtonClick = async () => {
    const sampleText = `
<thinking>
Let me analyze these results step by step:

PHQ-9 Analysis:


Highest score (3/3) on lack of interest/pleasure (anhedonia) - a key depression indicator
Moderate scores (2/3) on several neurovegetative symptoms (sleep, energy, appetite)
Low scores on suicidal ideation and psychomotor symptoms
Pattern suggests possible major depressive disorder with prominent anhedonia


GAD-7 Analysis:


Moderate scores (2/3) on excessive worry and trouble relaxing
Lower scores (1/3) on most anxiety symptoms
Pattern suggests mild-moderate anxiety, but not severe


Key Areas to Explore:


The severe anhedonia needs context and timeline
Impact on daily functioning and relationships
Previous history and triggers
Potential comorbidity between depression and anxiety


Question Strategy:


Focus on anhedonia as primary concern
Explore functional impact
Investigate historical context
</thinking>


<answer>
<question>You indicated having no interest or pleasure in activities nearly every day. Can you tell me about activities you used to enjoy, when you noticed this change, and if there are any activities that still bring you some enjoyment?</question>
<question>How have these symptoms affected your relationships and ability to fulfill your responsibilities at work/school/home? Are you finding it harder to maintain these commitments compared to a few months ago?</question>
<question>Have you experienced similar periods of low mood or loss of interest in the past? If so, can you tell me about what was happening in your life during those times and what helped you recover?</question>
</answer>`;
    await parse(sampleText);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Hey there!</button>
    </div>
  );
}
