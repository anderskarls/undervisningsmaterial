---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [ai, promptbibliotek, kollegialt-delande, uppgiftsdesign, bedömning, digitala-plattformar, professionsutveckling]
source: AI-i-lararabetet-Natverk-Research-Report-2026-07-28.md
citation: "microsoft/prompts-for-edu (GitHub); promptbank.guru; Control Alt Achieve (Eric Curts), lista över lärarskapade promptbibliotek."
---

# Promptbibliotek är fältets svagaste led - det som saknas är delade bedömningsdesigner

## Kärninsikt
Delade promptbibliotek är den vanligaste formen av kollegialt delande kring AI: Microsofts öppna repo prompts-for-edu, promptbank.guru som tar emot inskickade lärarprompts, Eric Curts kuraterade lista över lärarskapade bibliotek, skolspecifika samlingar och OpenAI:s eget nyhetsbrev "The Edu Prompt" [Belagt att de finns]. Rapportens bedömning är hård: **de åldras snabbt, är sällan versionerade, och de flesta är listor över uppgifter läraren redan kunde göra**. Det som faktiskt saknas är delade **bedömningsdesigner** och **uppgiftsomskrivningar**, inte fler prompts [Bedömning].

## Mekanism
En prompt är bunden till en modellgeneration och till ett arbetsflöde. När modellen byts fungerar den sämre eller behöver inte längre vara så detaljerad, och det finns ingen mekanism för att märka att den blivit inaktuell - biblioteken saknar versionering och utgångsdatum. Värdet är också asymmetriskt: en prompt sparar minuter, en uppgiftsdesign som håller när eleverna har AI sparar en termins bedömningsproblem.

Ett besläktat fynd rör var lärare faktiskt samlas. Facebook dominerar i medlemsantal med grupper på 100 000-nivån; Discord är i praktiken frånvarande på lärarsidan - en "AI For Teachers"-server hade 99 medlemmar, att jämföra med generella AI-servrar som Learn AI Together med 38 000+; WhatsApp används av Teach For Alls AI Learning Community, organiserad efter intresse, region och språk; LinkedIn är huvudytan för lärarutbildarnätverket TEAN och för de individdrivna profilerna [Belagt]. Rapporten framhåller att avsaknaden av en Discord- eller Slack-institution för lärare och AI är **ett reellt fynd, inte en sökbrist** [Bedömning]. Lärare organiserar sig inte på utvecklarnas plattformar.

## Empiri
- **microsoft/prompts-for-edu**, öppet GitHub-repo för K-12 och högre utbildning. https://github.com/microsoft/prompts-for-edu
- **promptbank.guru**, gratis, tar emot inskickade prompts från lärare. https://www.promptbank.guru/
- **Control Alt Achieve** (Eric Curts), kuraterad lista över lärarskapade promptbibliotek, från 2024. https://www.controlaltachieve.com/2024/03/ai-prompt-libraries-for-educators.html
- **OpenAI, "The Edu Prompt"** - leverantörens eget nyhetsbrev i samma genre. https://edunewsletter.openai.com/
- **Plattformsfördelningen:** Facebook 100 000-nivån, Discord 99 medlemmar i lärar-AI-servern, WhatsApp hos Teach For All, LinkedIn för TEAN (400+ medlemmar). [Belagt]
- **[Belagt att data saknas]:** ingen källa säger något om hur aktiva de stora grupperna är. En grupp med 100 000 medlemmar kan ha 50 aktiva.
- **AI champions-modellen** som alternativ delningsform: interna AI-champions i brittiska skolor och multi-academy trusts driver ämnesvisa sessioner med exempel ur den egna kursplaneringen. Uttalat UK-mål: minst 60 % av skolorna ska ha minst en skolledare och en klasslärare certifierade i "Safe and Effective Use of AI" till Q4 2026. [Belagt]

## Implikation för klassrummet
- **Sluta samla prompts, börja samla uppgifter.** Om Anders ska bygga något delbart för SO-kollegiet är formatet inte "prompts för historielärare" utan "uppgifter i Hi 1b som fungerar när eleven har ChatGPT, med utfall efter första körningen". Det är det som saknas globalt.
- **Versionera det som sparas.** En prompt eller uppgift utan datum och modellangivelse är obrukbar om ett år. Vaultets frontmatter gör detta gratis - `created`, `updated` och en rad om vilken modell och vilken klass den prövats med.
- **Bedömningsdesign åldras långsammare än prompts.** En uppgift som bygger på processredovisning, muntlig försvarbarhet eller lokalt källmaterial förlorar inte värde när nästa modell släpps. Det är rätt sak att lägga tid på.
- **Leta inte efter en Discord- eller Slack-community för svenska SO-lärare och AI.** Den finns inte, och rapporten menar att det inte beror på sökbrist. Tiden är bättre spenderad på fyra kollegor och en återkommande tid - se [[co-lab-modellen-roterande-kollegialt-ai-labb]].
- **AI champions-rollen är värd att känna till** om den egna skolan börjar tala om att utse någon. Modellen fungerar bäst när den som utses arbetar med exempel ur den egna kursplaneringen, inte med generella verktygsdemonstrationer.

## Spänningar
- **Kritiken mot promptbibliotek är rapportförfattarens bedömning**, inte ett mätresultat. Ingen källa har utvärderat om promptbibliotek faktiskt sparar tid eller inte.
- **Prompts har ett värde som inte ska underskattas för nybörjare.** För en lärare som aldrig använt ett språkmodellsgränssnitt är ett fungerande exempel den lägsta möjliga tröskeln. Kritiken gäller vad fältet borde *utveckla*, inte vad varje enskild lärare borde undvika.
- **Vem har intresse i saken:** att OpenAI driver ett eget promptnyhetsbrev och Microsoft ett repo säger något om vilken form av kollegialt delande som gynnar leverantören. Prompts skapar användning; uppgiftsomskrivningar kan lika gärna leda till minskad användning.
- **Plattformsfyndet är begränsat till engelskspråkig sökning.** Att Discord saknas på lärarsidan globalt utesluter inte lokala eller svenska sammanhang, och rapporten flaggar själv språkbias.
- **Discord-siffran (99 medlemmar) kommer från ett sökresultat**, inte från en verifierad serverstatistik.

## Kopplingar
- [[co-lab-modellen-roterande-kollegialt-ai-labb]] - formatet som skulle kunna dela rätt sak
- [[corbin-strukturella-vs-diskursiva-bedomningsandringar]] - varför uppgiftsdesign slår instruktioner
- [[amnesforeningarna-levererar-natverken-saknas]] - luckan på delade bedömningsuppgifter i SO och humaniora
- [[leverantorsdrivna-pseudo-communities-och-ambassadorsprogram]] - vem som driver promptgenren
- [[skolor-som-skriver-egna-ai-regler-trafikljusmodellen]] - det som faktiskt bör stå i uppgiftsinstruktionen
- [[lararfortbildning-digitalt-sarbarhetsgap]] - kompetensbehovet bakom promptefterfrågan
- [[MOC - Bedömning och betygssättning]]

## Källa
Research-rapport "Lärarledda nätverk och gräsrotsorganisering kring AI i lärararbetet", 2026-07-28, del 2d-2e. Primärkällor: https://github.com/microsoft/prompts-for-edu , https://www.promptbank.guru/ , https://www.controlaltachieve.com/2024/03/ai-prompt-libraries-for-educators.html
