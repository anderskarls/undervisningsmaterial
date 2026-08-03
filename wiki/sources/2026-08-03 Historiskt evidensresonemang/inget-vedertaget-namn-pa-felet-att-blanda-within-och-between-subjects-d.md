---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-sonnet-5
updated_by: claude-sonnet-5
agent_version: 04.26
type: document-insight
source: historiskt-evidensresonemang-VERIFIERING-2026-08-03.md
tags: [effektstorlek, morris-deshon, metodologi, terminologi, evidensresonemang]
evidence-level: high
---

# Det finns inget vedertaget namn på felet att blanda within-subjects-d med between-groups-tröskelvärden

## Kärninsikt

Metodlitteraturen beskriver problemet tydligt: within-subjects och between-groups Cohen's d skattar samma underliggande effekt men på olika metriker, och kräver transformation innan de jämförs - within-subjects-d standardiseras mot en standardavvikelse som är √(2(1-r)) mindre, vilket i sig gör within-subjects-d systematiskt större vid samma "sanna" effekt. **Men det finns inget vedertaget egennamn på detta specifika fel**, i stil med "file drawer effect" eller "regression to the mean". En av lensrapporterna i denna session kallade det "ett erkänt fel" utan att kunna namnge det - korrekt i sak, men det överdriver hur etablerat begreppet är som ett namngivet, citerbart fenomen.

## Mekanism

Den matematiska källan till skillnaden är korrelationen mellan pre- och postmätning: den ingår i nämnaren för within-subjects-d men inte för between-groups-d, vilket gör within-subjects-d större även när den "sanna" underliggande effekten är identisk.

## Empiri

Morris, S.B. & DeShon, R.P. (2002). Combining effect size estimates in meta-analysis with repeated measures and independent-groups designs. *Psychological Methods* 7(1), 105-125. Verifierat (D7, 2026-08-03): rätt referens för fenomenet, men explicit avsaknad av ett vedertaget namn i litteraturen.

## Implikation

Beskriv fenomenet i klartext när det förekommer ("detta är en within-subjects-effekt och kan inte jämföras direkt mot between-groups-riktvärden utan omräkning") snarare än att låtsas att det finns ett etablerat facktermbegrepp att peka på. Att uppfinna ett namn här vore att begå precis den typ av precisionsfel denna session i övrigt försöker rätta till.

## Kopplingar

- [[krafts-riktvarde-galler-en-specifik-studieklass-inte-within-subjects-labbstudier]]
- [[kraft-2020-varnar-for-exakt-den-effektstorlek-som-abaropas-som-stod]]
