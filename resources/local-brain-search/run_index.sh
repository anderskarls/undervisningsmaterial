#!/bin/bash
# Wrapper script for re-indexing the Brain
# Usage: ./run_index.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CUDA_VISIBLE_DEVICES="" "$SCRIPT_DIR/venv/bin/python" "$SCRIPT_DIR/index_brain.py" "$@"
