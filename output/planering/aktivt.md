---
type: aktivt-moment
updated: 2026-08-01
lasar: 2026/2027
---

# Aktivt just nu

Vad som körs i varje grupp den här veckan. Läses av `/hamta-dn-artikel` när den ska leta artiklar som passar undervisningen, och är avsiktligt kort så att den går att uppdatera på trettio sekunder.

**Uppdatera när du byter moment.** Står det fel här letar skillen efter fel saker.

| Kurs | Grupp | Moment | Sedan |
|---|---|---|---|
| Historia 1b | MSA26A | | |
| Historia 1b | MSA26B | | |
| Samhällskunskap 1b | MSA26A | | |
| Samhällskunskap 1b | MSA26B | | |
| Samhällskunskap 1b | MEK26B | | |
| Internationella relationer | MSA24 | | |

## Så fyller du i

- **Moment** ska matcha en mappnamn under `output/lessons/`, till exempel `Antiken - framsteg för vem` eller `Ungas ekonomi`. Kör `python3 .claude/skills/hamta-dn-artikel/momentindex.py --lista` för att se alla.
- Kör du något som inte har någon momentplan, skriv ändå vad det handlar om i klartext. Skillen läser fältet som fritext om den inte hittar en matchande mapp.
- **Sedan** är veckonummer eller datum. Används bara för att bedöma om raden är färsk.
- Tom rad betyder att gruppen inte har något aktivt moment. Skillen hoppar över den.

## Status

HT26 har inte börjat (ifyllt 2026-08-01). Raderna fylls när terminen drar igång.

Grupperna är hämtade ur läget för HT26: MSA26A och MSA26B läser både Sh1b och Hi1b, MEK26B läser Sh1b, MSA24 läser Internationella relationer. Stämmer det inte, ändra tabellen - den här filen är sanningskällan, inte minnet.
