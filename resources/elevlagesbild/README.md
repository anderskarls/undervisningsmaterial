# elevlagesbild — pseudonymiseringsbryggan

Lokal kod för Elevlägesbilden (ADR 0001/0003): hämtar färsk signaldata från
källsystemen, byter alla källidentiteter mot Elev-ID via nyckelfilen och
skriver pseudonymiserad JSON som är det ENDA en LLM får läsa.

## Skript

| Skript | Körs av | Gör |
|---|---|---|
| `run_brygga.sh` | LLM (via `/undantagssyntes`) eller användaren | Hämtar alla signalkällor → `out/signaler-YYYY-MM-DD.json` |
| `koppla_classroom.py` | **ENDAST användaren** (vägrar i LLM-session) | Fyller `google_userid` i nyckelfilen genom att matcha Classroom-roster mot klarnamn |
| `uppslagslista.py` | **ENDAST användaren** (vägrar i LLM-session) | Skriver utskrivbara uppslagskort (namn ↔ Elev-ID) till `.secrets/elevnyckel/` |

## Identitetsrymder (kartlagt 2026-07-22)

Källsystemen delar ingen identitetsrymd - bryggan äger mappningen:

| System | Identitet i utdata | Nyckelfilskolumn |
|---|---|---|
| classroom-tool | `Elev N` per kurs (bakom: Google userId i `aliases.json`) | `google_userid` |
| survey-plattformen | `username` = `kurskod-nummer` (t.ex. `msa26a-7`); namnfri by design | `survey_username` |
| förmågeträningen | `username` (delar identitet med survey-plattformen) | `survey_username` |

## Skyddslager

1. Hämtarna (`fetchers.py`) byter identiteter strukturellt per källa; omappade identiteter blir `OMAPPAD-N` + varning (syntesen ska då stanna).
2. classroom-tool hämtas ENDAST via `summary` (metadata) - aldrig `read`/`dump`, vars elevfritext kan innehålla identifierande uppgifter.
3. Läckagekontrollen i `brygga.py` skannar slututdatat mot alla klarnamnsfragment ur nyckelfilen + e-postmönster och avbryter utan att skriva någon fil vid träff.

## Kända luckor (v1)

- **Skola24 (frånvaro)** är utanför v1 per beslut.

(Förmågeträningen anslöts 2026-07-22: progress-endpointen i survey-platform
returnerar nu `practice`-aggregat per elev - totalAttempts, lastAttemptAt,
bySubskill, byWeek - aldrig svarstexter. Commit `8d10919` i survey-platform.)

## Setup-ordning (första gången)

1. Fyll `nyckelfil.csv` (se `.secrets/elevnyckel/README.md`)
2. Skapa eleverna i survey-plattformen med nummer som matchar Elev-ID (`courses students create`), fyll `survey_username`
3. När HT26-kurserna finns i Classroom: kör `./run.sh list` i `resources/classroom-tool`, skriv in `classroom_course_id` i `config.json`, kör `python3 koppla_classroom.py <course_id> ...`
4. Testa: `./run_brygga.sh`
