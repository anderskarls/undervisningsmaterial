# Elevdata hanteras alltid pseudonymiserat — klarnamn når aldrig LLM eller synk

Elevlägesbilden kräver data på individnivå om identifierbara minderåriga, men vaultet läses av moln-LLM (Anthropic API) och syncas mellan maskiner via git/Obsidian Sync. Beslut: varje elev representeras av ett stabilt pseudonym-ID; mappningen namn↔ID ligger i en lokal, gitignorad nyckelfil som LLM aldrig läser. Detta följer skolans AI-policy och samma mönster som classroom-tool redan använder.

## Considered Options

- **Klarnamn överallt** — minst friktion, men oförsvarbart enligt GDPR och skolans AI-policy. Avvisad.
- **Endast aggregat per kursinstans** — inga personuppgifter alls, men omöjliggör tidig varning per elev, vilket är systemets kärnsyfte. Avvisad.
- **Pseudonymer med lokal nyckel** — vald. Friktionen (lärarens uppslag i nyckelfilen) accepteras som pris för att systemet ska vara både användbart och försvarbart.

## Consequences

- Alla signalkällor (förmågeträning, classroom-tool, survey-plattform, observationer) måste mappa till samma pseudonym-ID per elev.
- Observationer måste skrivas med pseudonym redan vid infångning — inte "städas" i efterhand.
