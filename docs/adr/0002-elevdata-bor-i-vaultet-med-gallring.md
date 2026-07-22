# Elevdata bor i vaultet, i egen toppnivåmapp, med gallring per läsårsslut

Elevlägesbilden kunde ha bott i survey-plattformen (där elevmodellen finns) eller i ett eget repo (ren separation). Beslut: den bor i vaultet, i en egen toppnivåmapp utanför `wiki/` och `raw/`, eftersom systemets kärnvärde är att varningssignaler och lägesbilder möter vaultets pedagogiska kunskap - en varning är bara konstruktiv om nästa steg informeras av vad läraren vet om undervisning. Livscykelproblemet (elevdata är operativ och känsligare än kunskapsdata) hanteras med en uttalad gallringsregel i stället för reposeparation: elevdata arkiveras eller raderas vid läsårsslut, den följer inte med i kunskapsbasens ackumulering.

## Consequences

- Vaultets tre lager (raw/wiki/schema) får ett fjärde syskon med egen livscykel - elevdata ackumuleras INTE som wiki-kunskap gör.
- Survey-plattformen förblir elevvänd; lärarens observationer och synteser når aldrig den.
- All elevdata i mappen är pseudonymiserad enligt ADR 0001.
