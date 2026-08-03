---
name: morning-brief
description: "Morgonbrief - daglig sammanfattning inför dagens lektioner baserat på schemat. Triggas av: 'morgonbrief', 'morgon', 'brief', 'vad har jag idag', 'dagens lektioner', 'förbered mig för idag', 'sammanfattning inför dagen', eller när användaren vill ha en översikt av sin undervisningsdag. Kör detta PROAKTIVT på morgonen om det finns en scheduled task. Även användbart när användaren nämner att de vill förbereda sig inför en specifik dag."
---

# Morgonbrief

Skapa en strukturerad morgonrapport som hjälper läraren att starta dagen förberedd. Rapporten utgår från dagens schema och samlar relevanta insikter, reflektioner och debriefs per grupp.

## Steg-för-steg

### 1. Läs schemat

Schemafilen är en bild som ligger i vaultroten:

```
/home/anders/Second brain/Schema.pdf
```

Läs PDF:en med Read-verktyget. Identifiera vilken veckodag det är idag och vilka lektioner som finns. Extrahera för varje lektion:
- **Tid** (start-slut)
- **Kurs/ämne** (t.ex. Samhällskunskap 1a1, Historia 1b)
- **Grupp/klass** (t.ex. SASAM01a1S3, EK1)
- **Sal** (om synligt)

Om det är helg eller det inte finns lektioner idag, meddela detta och erbjud att visa nästa arbetsdag istället.

### 2. Samla insikter per grupp

För varje kurs/grupp i dagens schema, sök i vaultet efter relevant information. Använd Local Brain Search wrapper-skripten:

```bash
# Sök efter reflektioner och debriefs för gruppen/kursen
./resources/local-brain-search/run_search.sh "reflektion [gruppnamn]" --limit 5 --json
./resources/local-brain-search/run_search.sh "[kursnamn] [ämnesområde]" --limit 5 --json
```

Sök också med Grep och Glob efter:
- **Lektionsreflektioner** - senaste reflektionerna kopplade till gruppen
- **Debriefs** - korta anteckningar efter lektioner (30-sekunders-debriefs i Inbox)
- **Lektionsplaneringar** - pågående eller kommande planeringar
- **Relevanta permanenta notes** - insikter om pedagogik, ämnesinnehåll, elevgrupper

Prioritera det mest aktuella (senaste 2 veckorna).

### 3. Skriv morgonbriefen

Skapa filen i Inbox:

```
raw/inbox/YYYY-MM-DD Morgonbrief.md
```

Använd detta format:

```markdown
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
created_by: [model-name]
updated_by: [model-name]
agent_version: 04.26
tags:
  - morgonbrief
---

# Morgonbrief [veckodag] [datum]

## Dagens schema

| Tid | Kurs | Grupp | Sal |
|-----|------|-------|-----|
| 08:00-09:30 | Samhällskunskap 1a1 | SASAM01a1S3 | B204 |
| ... | ... | ... | ... |

---

## [Kursnamn] - [Grupp] (kl XX:XX)

### Senaste reflektioner
- [Sammanfattning av senaste reflektioner/debriefs]

### Att tänka på
- [Insikter som är relevanta för just denna grupp och lektion]
- [Eventuella mönster från tidigare lektioner]

### Pågående
- [Var i undervisningen befinner sig gruppen]
- [Planerad aktivitet om det finns]

---

## [Nästa kurs] - [Grupp] (kl XX:XX)
[Samma struktur upprepas]

---

## Sammanfattning

**Fokus idag:** [1-2 meningar om vad som är viktigast att tänka på]
```

### 4. Anpassa djupet

- Om det finns mycket material (reflektioner, debriefs) - ge en rikare brief
- Om det är lite material - håll det kort och fokusera på schemat och eventuella relevanta permanenta notes
- Var ärlig om det saknas underlag: "Inga reflektioner hittades för denna grupp ännu"

### 5. Leverera

Berätta var filen sparades och ge en kort muntlig sammanfattning av de viktigaste punkterna - det läraren behöver veta just nu, utan att behöva öppna filen.
