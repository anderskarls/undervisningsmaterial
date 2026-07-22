# CONTEXT.md — Ubiquitous language

Domänglossar för vaultet och dess verktyg. Endast termer och betydelser — inga implementationsdetaljer.

## Elevlägesbild

Den samlade, aktuella bilden av var en elev står: pedagogisk utveckling (var är eleven, vad behöver hen härnäst) och tidiga varningssignaler (mönster som föregår problem). Bedömningsunderlag och administrativt läge (rester, inlämningar) är stödjande delar, inte kärnan.

## Elevakt

Den ackumulerande sidan per Elev-ID där alla signaler, observationer och synteser om en elev samlas under läsåret. Lagringslager och uppslagsverk (inför utvecklingssamtal, föräldrakontakt) - inte det dagliga gränssnittet. Omfattas av gallring.

## Undantagssyntes

Det primära gränssnittet mot elevlägesbilden: en veckovis, bedömande rapport (en samlad körning, sektionerad per kursinstans) som endast lyfter avvikelser - elever vars mönster kräver uppmärksamhet (åt båda hållen: varningar och lyft) - med förslag på nästa steg. Elever utan avvikelse nämns inte.

## Avvikelse

Ett mönster hos en enskild elev som motiverar lärarens uppmärksamhet i undantagssyntesen. Tre typer: **varning** (negativt mönster), **lyft** (positiv vändning värd att bekräfta) och **osynlig elev**. En avvikelse måste alltid citera sina belägg - specifika signaler med datum. Bedömningen är kontextuell (mönster över signalkällor), inte regelstyrd, men sker inom en explicit kriterierubrik och med ett tak per kursinstans som tvingar urvalet att vara skarpt.

## Osynlig elev

En elev som inte förekommit i någon signalkälla under en längre period (riktvärde: tre veckor). Frånvaron av signaler är själv en avvikelse - eleven är inte "okej", den är obelyst. Denna avvikelsetyp finns för att fånga de tysta elever som glider igenom system som bara reagerar på negativa signaler.

## Gallring

Principen att elevdata har en begränsad livscykel: vid läsårsslut arkiveras eller raderas den. Elevdata ackumuleras inte som kunskap - det skiljer den från wikins innehåll, som är permanent.

## Undervisningsgrupp

En grupp elever med gemensam klasskod (t.ex. MSA26A). En undervisningsgrupp kan läsa flera kurser hos samma lärare.

## Åtgärd

En lärarhandling som svar på en avvikelse (samtal, anpassning, mentorkontakt), loggad kort i elevakten samma väg som en observation. Åtgärder gör att undantagssyntesen kan skilja en ny varning från en känd varning under åtgärd, och flagga när en åtgärd inte gett förändring. Det finns ingen ärendestatus och inga påminnelser - uppföljningen sker i bedömningen, inte i byråkrati.

## Elev-ID

Ett stabilt pseudonym som representerar en elev i all elevdata (t.ex. `MSA26A-07`). Klarnamn förekommer aldrig i systemet - kopplingen namn↔Elev-ID finns endast i nyckelfilen. Samma Elev-ID gäller i alla signalkällor och alla kursinstanser eleven ingår i.

## Nyckelfil

Den lokala, osyncade fil som mappar elevers klarnamn till Elev-ID. Läses aldrig av LLM. Enda platsen där identifiering är möjlig.

## Signalkälla

Ett system eller flöde som producerar data om elever till elevlägesbilden. V1 har fyra: förmågeträningen, classroom-tool, survey-plattformen samt lärarens egna observationer. Frånvaro (Skola24) är en känd men ännu ej ansluten signalkälla.

## Observation

En kort, lärarfångad notering om något som synts i klassrummet kring en specifik elev (engagemang, passivitet, genombrott, oro). Fångas inte alls i något system idag - i domänen är observationer den signalkälla som antas väga tyngst för tidig varning.

## Kursinstans

En undervisningsgrupp × en kurs (t.ex. "MSA26A — Historia 1b"). Läsåret HT26 finns 6 kursinstanser. En elev kan förekomma i flera kursinstanser hos samma lärare — elevlägesbilden per *elev* är därför inte samma sak som bilden per *kursinstans*.
