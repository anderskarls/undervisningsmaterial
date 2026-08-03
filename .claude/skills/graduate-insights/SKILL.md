---
name: graduate-insights
description: Review and graduate notes to permanent status using Zettelkasten principles. Consolidates AI extractions and document insights into curated permanent notes.
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep, AskUserQuestion, Task]
user-invocable: true
---

# Graduate Insights

Review candidate notes from holding areas and promote valuable ones to permanent note status following Zettelkasten principles.

## Purpose

Insikter ackumuleras på två ställen innan de är permanenta:

- **`wiki/sources/[session]/`** - extraktioner per ingest-batch, både ur externa källor och ur användarens eget material. Det stora flertalet noter i wikin bor här.
- **`raw/inbox/`** - snabbfångad text som ännu inte behandlats.

Graduering flyttar en not till `wiki/concepts/`, som är wikins permanenta lager: atomära begreppssidor som är sanna oberoende av vilken session som råkade producera dem. En not i en sessionsmapp är knuten till sin källa; en begreppssida står på egna ben.

Kör `ls wiki/concepts | wc -l` och `ls -d wiki/sources/*/ | wc -l` för aktuella siffror i stället för att lita på någon uppräkning här.

Utan periodisk graduering blir sessionsmapparna ett arkiv i stället för ett arbetslager. Denna skill:

1. Lyfter fram starka kandidater utifrån hur ofta de hämtats och hur gamla de är
2. Lägger fram varje kandidat för mänskligt omdöme - det avgörande steget
3. Graduerar värdiga noter till `wiki/concepts/` med korrekt frontmatter
4. Håller kunskapsgrafen hel genom att länkarna följer med

## State Dependencies

| Source | Location | Read | Write |
|--------|----------|------|-------|
| Q-values | `resources/local-brain-search/data/q_values.json` | Yes | No |
| Sessionsnoter | `wiki/sources/*/` | Yes | Move |
| Inbox | `raw/inbox/` | Yes | Move |
| Begreppssidor | `wiki/concepts/` | No | Yes |
| Innehållskatalog | `index.md` | Yes | Yes |
| Changelog | `CHANGELOG.md` | Yes | Yes |
| Operationslogg | `log.md` | Yes | Yes |

## Process

### Step 1: Load State and Find Candidates

```bash
# Get Q-values for retrieval frequency signals
cat resources/local-brain-search/data/q_values.json
```

Find candidate notes prioritized by:
1. **Q-value > 0** - Notes that have been retrieved and used
2. **Age > 14 days** - Notes that have had time to prove value
3. **Has connections** - Notes with wiki-links to permanent notes

Collect up to **5 candidates** per session from:
- `wiki/sources/*/*.md` (uteslut `CHANGELOG*` - sessionsbokföring graduerar aldrig)
- `raw/inbox/*.md`

### Step 2: For Each Candidate

Present the following information:

```
## Candidate [N/5]: [Note Title]

**Source:** wiki/sources/[Sessionsnamn] | raw/inbox
**Created:** [date from frontmatter or file mtime]
**Age:** [X days]
**Q-Value:** [value or "not tracked"]

### Content Preview
[First 500 characters of note content]

### Existing Connections
[List wiki-links found in the note, indicate which link to permanent notes]

### Semantic Neighbors (if available)
[Run quick search to show 3 most similar permanent notes]
```

Ask user:

**Decision for "[Note Title]":**
1. **Promote** - Graduate to permanent notes
2. **Skip** - Review again later (note stays in place)
3. **Delete** - Remove entirely (rare, for duplicates/errors)

### Step 3: Handle Promotion

When user chooses **Promote**:

1. **Check for duplicates** in `wiki/concepts/`:
   ```bash
   # Search for similar titles
   grep -r "similar keywords" wiki/concepts/
   ```

2. **Prepare note for graduation**:
   - Ensure frontmatter includes:
     ```yaml
     ---
     created: [original date]
     updated: [today]
     created_by: [original model if present]
     updated_by: [current model]
     agent_version: 04.26
     type: concept
     tags: []
     graduated_from: [original path]
     graduated_date: [today]
     ---
     ```
   - Verify atomic insight format (single clear idea)
   - Ensure wiki-links use `[[Note Title]]` format
   - Remove source-specific metadata (session info, extraction date)

3. **Optionally refine**:
   Ask user: "Refine title/content before promoting? (or press Enter to keep as-is)"

4. **Move to permanent**:
   - Filnamn i kebab-case enligt CLAUDE.md: `wiki/concepts/retrieval-practice-som-formativt-verktyg.md`, inte `Retrieval Practice.md`
   - `git mv` (inte kopiera - bevarar historiken)
   - Kontrollera att inkommande länkar fortfarande träffar. Obsidian löser `[[basnamn]]`, så ett ändrat filnamn bryter varje länk som pekade på det gamla:
     ```bash
     grep -rl "\[\[gammalt-basnamn\]\]" wiki output raw
     ```
   - Uppdatera `index.md` med den nya begreppssidan i rätt domänsektion

### Step 4: Handle Skip

Note remains in original location. No action needed.

### Step 5: Handle Delete

Confirm before deleting:
```
Are you sure you want to DELETE "[Note Title]"?
This cannot be undone. Type 'yes' to confirm.
```

If confirmed, remove file.

### Step 6: Session Summary

After processing all candidates:

```
## Graduation Session Complete

**Reviewed:** 5 notes
**Promoted:** X notes
**Skipped:** Y notes
**Deleted:** Z notes

### Promoted Notes:
- [[ny-begreppssida-1]] (från wiki/sources/[Sessionsnamn])
- [[ny-begreppssida-2]] (från raw/inbox)

### Remaining Candidates
- wiki/sources: [count] noter
- raw/inbox: [count] noter

Run `/graduate-insights` again to continue review.
```

### Step 7: Update Changelog

Append to `CHANGELOG.md`:

```markdown
## [DATE] - Insight Graduation Session

**Promoted to Permanent:**
- [[not-1]] - graduerad från wiki/sources/[Session]
- [[not-2]] - graduerad från raw/inbox

**Session Stats:** Reviewed 5, Promoted X, Skipped Y
```

Lägg också en rad i `log.md` när sessionen graduerat något: `## [YYYY-MM-DD] graduering | [vad som flyttades och varför just det]`.

## Zettelkasten Graduation Criteria

When reviewing candidates, consider these principles:

### Promote If:
- **Atomic** - Contains ONE clear idea (not a list or summary)
- **Evergreen** - Will remain true/relevant over time
- **Connected** - Links meaningfully to existing permanent notes
- **Original** - Adds unique perspective not already captured
- **Actionable** - Can inform thinking or decisions

### Skip If:
- **Ephemeral** - Time-sensitive or will become outdated
- **Compound** - Contains multiple ideas (may need splitting)
- **Duplicate** - Similar insight exists in permanent notes
- **Unripe** - Not yet clear how it connects or matters

### Delete If:
- **Exact duplicate** - Same content exists elsewhere
- **Error** - Extraction mistake or corrupted content
- **Obsolete** - Information proven wrong or superseded

## Outputs

1. Promoted notes in `wiki/concepts/` with graduation metadata
2. Updated `CHANGELOG.md` with session record
3. Session summary showing graduation statistics

## Notes

- **Human judgment is essential** - This skill surfaces candidates, humans decide
- **No automated promotion** - Every graduation requires explicit approval
- **Batch size is 5** - Keeps sessions focused and completable
- **Priority by Q-value** - Notes that have been retrieved rank higher
- **Recommend weekly cadence** - Prevents backlog accumulation

## Self-Improvement

After completing this skill's primary task, consider tactical improvements:

- [ ] **Review execution**: Were there friction points, unclear steps, or inefficiencies?
- [ ] **Identify improvements**: Could error handling, step ordering, or instructions be clearer?
- [ ] **Scope check**: Only tactical/execution changes - NOT changes to core purpose or goals
- [ ] **Apply improvement** (if identified):
  - [ ] Edit this SKILL.md with the specific improvement
  - [ ] Keep changes minimal and focused
- [ ] **Version control** (if in a git repository):
  - [ ] Stage: `git add .claude/skills/graduate-insights/SKILL.md`
  - [ ] Commit: `git commit -m "refactor(graduate-insights): <brief improvement description>"`
