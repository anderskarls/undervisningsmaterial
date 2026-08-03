---
name: refresh-index
description: Rebuild the Local Brain Search FAISS index to reflect vault changes
automation: autonomous
schedule: "0 5 * * *"
allowed-tools: Bash
---

# Refresh Index

Rebuild the Local Brain Search vector index to ensure semantic search reflects current vault state.

## Purpose

The FAISS index is not auto-updated. This playbook rebuilds it so semantic search stays accurate.

## State Dependencies

| Source | Location | Read | Write | Description |
|--------|----------|------|-------|-------------|
| Wiki-sidor | `wiki/**/*.md` | ✓ | | Source content to index |
| Index script | `resources/local-brain-search/run_index.sh` | ✓ | | Indexer |
| FAISS index | `resources/local-brain-search/data/brain.faiss` | | ✓ | Vektorindex |
| Grafdata | `resources/local-brain-search/data/brain_graph.pkl` | | ✓ | Kopplingsgraf för spreading activation |
| Metadata | `resources/local-brain-search/data/brain_metadata.pkl` | | ✓ | Sidmetadata |

## Prerequisites

- Local Brain Search installed at `resources/local-brain-search/`
- Python environment with FAISS dependencies

## Process

### Step 1: Verify Prerequisites

Check indexer exists:
```bash
test -f resources/local-brain-search/run_index.sh && echo "OK" || echo "MISSING"
```

If missing, abort.

### Step 2: Run Indexer

```bash
resources/local-brain-search/run_index.sh
```

### Step 3: Verify Index

Confirm index works:
```bash
resources/local-brain-search/run_connections.sh --stats --json
```

Should return valid JSON with note count > 0.

## Outputs

- Ombyggt FAISS-index i `resources/local-brain-search/data/` (`brain.faiss`, `brain_graph.pkl`, `brain_metadata.pkl`)
- Stats output confirming note count

## Error Handling

| Error | Recovery |
|-------|----------|
| Script missing | Abort - check Local Brain Search installation |
| Index fails | Check Python env, disk space |
| Stats return 0 notes | Re-run indexer, check wiki path |

## Completion Checklist

- [ ] Indexer script exists
- [ ] Index rebuilt without errors
- [ ] Stats query returns valid JSON
- [ ] Note count > 0
