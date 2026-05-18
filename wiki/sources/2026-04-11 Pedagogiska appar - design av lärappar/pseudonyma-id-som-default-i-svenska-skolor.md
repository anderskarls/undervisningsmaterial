---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, GDPR, pseudonymisering, sverige]
source: Pedagogiska appar design research report 2026-04-11
---

# Pseudonyma elev-ID:n ska vara default, inte en valbar feature

Det mest konkreta svenska efterlevnadsdraget från rapporten: **bygg appen så att den fungerar med pseudonyma elev-ID:n (t.ex. "Elev 1-30" som läraren tilldelar) som default**. Inte som opt-in, inte som premium-feature - som den normala användningen.

Logiken:
1. **Artikel 5 GDPR (dataminimering)** kräver att man bara behandlar de personuppgifter som är *nödvändiga* för syftet. Om syftet är "läraren ska se hur klassen svarar", behövs inte elevens riktiga namn eller mejladress - läraren vet vem "Elev 1" är via sin egen mappning offline.
2. **Skellefteå-fallet** visar att Datainspektionen (IMY) inte tvekar att böta skolor för övertramp. Pseudonymisering är det starkaste försvaret.
3. **Tidö-svängen och Skolverkets nya riskmandat** betyder att kommuner aktivt letar efter verktyg de kan peka på som compliant. Pseudonymt default är ett konkret säljargument.
4. **Teknisk enkelhet**: appen behöver ingen authentication-stack, ingen e-postinsamling, inga passwordresetflöden. Läraren skapar en klass, appen genererar 30 anonyma ID, läraren skriver ut dem och delar ut på papper.

Det finns ett trade-off: pseudonyma ID betyder att eleven inte kan "logga in hemifrån" med personlig konto. Men det är just det som gör det compliant. Om hemma-kontinuitet behövs, kan läraren dela en länk med eleven som bär ID:n i URL:en - ingen konto behöver skapas.

## Implikationer för design
- Lärarkonto: vanligt autentiserat (SSO via Skolverket eller liknande).
- Elevåtkomst: inga konton alls - en URL eller kod räcker.
- Sessions kopplas till tilldelade ID, inte till människor.
- Data raderas efter 30 dagar som default.
- Appen kan köras på skolans interna nätverk eller EU-hostad utan någon US-processor alls.
- Integritetspolicy: "vi behandlar inga personuppgifter om elever".

## Koppling till survey-platform
Detta kan vara det enskilt viktigaste tekniska beslutet för din plattform. Skippa all eleautentisering. Skippa e-post. Lärare skapar klass, appen ger ut koder, elever använder koden. Du undviker 80% av compliance-bördan och eliminerar en hel klass av säkerhetsrisker (stulna elev-lösenord, kontooavervning).

## Källa
- GDPR Article 5 (Data minimisation).
- IAPP (2024). "How to interpret Sweden's first GDPR fine on facial recognition in school." https://iapp.org/news/a/how-to-interpret-swedens-first-gdpr-fine-on-facial-recognition-in-school
- Swedish Edtech Industry compliance guidance.
