# Elevakten lagrar slutsatser, inte rådata — källsystemen förblir sanningskälla

Veckosyntesen hämtar färsk signaldata från källsystemen (förmågeträningen, classroom-tool, survey-plattformen) vid varje körning, via en lokal pseudonymiseringsbrygga som mappar källidentiteter till Elev-ID innan LLM läser något. Elevakten lagrar endast observationer, åtgärder och syntesens veckobedömningar med beläggscitat - aldrig kopior av källsystemens rådata. Skäl: dubbellagring driftar isär, elevakter ska vara läsbara dokument snarare än datadumpar, och gallringen blir trivial när elevdatamappen är den enda platsen att radera.

## Consequences

- Beläggskravet uppfylls genom citat (datapunkt + datum) i bedömningen, inte genom arkiverad rådata - historisk rådata som källsystemen gallrar är borta, och det accepteras.
- Bryggan är lokal kod: LLM ser aldrig källsystemens klarnamn/konton (ADR 0001).
- Antagande att verifiera vid bygget: alla tre källsystem exponerar identiteter som nyckelfilen kan mappa till Elev-ID.
