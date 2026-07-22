#!/bin/sh
# Kör pseudonymiseringsbryggan. LLM läser endast resultatet i out/.
cd "$(dirname "$0")" && exec python3 brygga.py "$@"
