---
created: 2026-07-27
updated: 2026-07-27
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: concept
tags: [meta]
---

# Om wiki/concepts/

Atomiska begreppssidor - en idé per sida, i användarens egna ord, fristående begripliga och liberalt korslänkade. Det här är wikins permanenta lager: sidor som överlevt flera källor och blivit egna begrepp, till skillnad från `wiki/sources/` där extraktionerna från enskilda ingest-batcher bor.

**Skrivregler och frontmatter:** se `CLAUDE.md` i vaultroten. Mallar ligger i `wiki/_templates/`.

## Vad som hör hemma här

- Begrepp som återkommer över flera källor och domäner
- Ramverk och modeller användaren faktiskt använder i undervisningen
- Läslistor och syntesunderlag som är ämnade att växa

## Vad som inte hör hemma här

- Extraktioner från en enskild källa - de hör till `wiki/sources/[sessionsmapp]/`
- Domänöversikter och navigation - de hör till `wiki/topics/` som `MOC - [Namn].md`
- Utkast och infångning - de hör till `raw/inbox/`

## Historik

Den här filen var till 2026-07-27 en 175-raders engelsk mallboilerplate med rubriken "02-Permanent - Your Knowledge Atoms". Den instruerade agenten att skriva till `01-Sources/`, `00-Inbox/`, `03-MOCs/` och `AI Extracted Notes/` - mappar som aldrig funnits i det här vaultet. Eftersom en agent som listar `wiki/concepts/` träffar `README.md` före någon riktig begreppssida låg felaktiga skrivvägar först i ledet. Ersatt i OS-audit Batch B; se `audits/os-audit-2026-07-26.md`, Check 2.
