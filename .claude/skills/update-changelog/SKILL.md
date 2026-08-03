---
name: update-changelog
description: Update Knowledge Graph Changelog
---

# Update Knowledge Graph Changelog

You are updating vaultets changelog to track recent modifications to the knowledge graph.

## Your Task

1. **Identify Recent Changes** - Review the session history to identify:
   - New notes created
   - New connections/links added between existing notes
   - Significant edits to note content
   - Focus only on changes made during THIS session

2. **Read Existing Changelog** - Read `$VAULT_BASE_PATH/CHANGELOG.md` to see the current state

3. **Append New Entry** - Add a new dated entry at the TOP of the changelog with:
   - Date and session identifier
   - List of changes in format: `- [ACTION] Note Title: Brief description (→ Connected to: [[Other Note]])`
   - Keep each entry to 1-2 sentences maximum
   - Use action verbs: CREATED, CONNECTED, UPDATED, LINKED

## Format Example

```markdown
## 2026-08-01 - Session [kort beskrivning]

- CREATED [[lix-stiger-nar-texten-blir-begripligare]]: LIX belönar det som gör texten obegriplig - måttet och målet drar åt motsatta håll.
- CONNECTED [[reverse-cohesion-och-expertise-reversal-samma-mekanism]] ↔ [[llm-forenkling-har-en-tyst-felmod]]: Kohesion är scaffolding inbyggd i texten och ska fadas som all annan stöttning.
- UPDATED [[primarkallans-sprak-ar-studieobjektet]]: Preciserad efter Reichenberg - gränsen går vid primärkälla, inte vid all text.
```

## Important Guidelines

- Only document changes from THIS session
- Be concise - max 2 sentences per change
- Use bidirectional arrows (↔) for mutual connections, directional (→) for one-way
- Group related changes together
- Focus on WHAT was connected and WHY it matters (the insight)
- If no changelog exists, create it with a header explaining its purpose

## Output

After updating, show the user:
1. Number of changes logged
2. The new entry you added
3. Confirmation that CHANGELOG.md was updated

## State Dependencies

| Source | Location | Read | Write | Description |
|--------|----------|------|-------|-------------|
| Master changelog | `CHANGELOG.md` | X | X | Main change log to update |
| Session history | Current conversation | X | | Changes made this session |

## Completion Checklist

- [ ] Session changes identified (notes created, connections made, edits)
- [ ] Existing CHANGELOG.md read
- [ ] New dated entry added at TOP of changelog
- [ ] Action verbs used (CREATED, CONNECTED, UPDATED, LINKED)
- [ ] Entries concise (max 2 sentences each)
- [ ] Arrow notation correct (→ for one-way, ↔ for bidirectional)
- [ ] Number of changes reported to user
- [ ] Confirmation provided that CHANGELOG.md was updated
