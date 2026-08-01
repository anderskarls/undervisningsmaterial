# Simulering: Steg 1 av planera-moment

**User-prompt:** "Planera ett moment i samhällskunskap 3 om mänskliga rättigheter, 5 lektioner"

---

## Simulerad skill-output (Steg 1: Ämne, kurs och centralt innehåll)

Hej! Jag hjälper dig att planera ett moment om mänskliga rättigheter.

Du nämner **samhällskunskap 3**, men i de ämnesplaner jag har tillgängliga finns följande kurser i samhällskunskap:

- **Samhällskunskap 1b** (100 poäng)
- **Samhällskunskap 2** (100 poäng)

Samhällskunskap 3 finns inte som en definierad kurs i mitt underlag. Kan du bekräfta vilken kurs du menar? Möjliga tolkningar:

1. **Samhällskunskap 1b** - innehåller centralt innehåll om mänskliga rättigheter under "Rättsväsen och rättssäkerhet"
2. **Samhällskunskap 2** - kan behandla mänskliga rättigheter under "Fördjupad samhällsanalys"
3. Du menar en annan kurs jag inte har i mina ämnesplaner - i så fall behöver jag mer information om centralt innehåll

---

*[Simulerad bekräftelse: Läraren menar Samhällskunskap 1b]*

---

Bra! Vi kör **Samhällskunskap 1b**.

Det finns ingen NotebookLM-notebook konfigurerad för Samhällskunskap 1b. Jag fortsätter med min inbyggda kunskap, men markerar osäkra påståenden med [VERIFIERA].

Här är det centrala innehållet för Samhällskunskap 1b, organiserat efter temaområde:

**Individer och gemenskaper**
- Gruppers och individers identitet, relationer och sociala livsvillkor

**Information och kommunikation**
- Mediernas och informationsteknikens roll i samhället

**Rättsväsen och rättssäkerhet**
- De mänskliga rättigheterna; vilka de är, var de finns samlade och hur de förhåller sig till stat och individ. Diskrimineringsgrunderna i svensk lagstiftning

**Samhällsekonomi**
- Samhällets ekonomiska kretslopp, arbetsmarknad, privatekonomi

**Politiska system och beslutsprocesser**
- Politiska ideologier, Sveriges politiska system, demokrati och diktatur

**Internationella relationer**
- Internationella organisationer och deras roll, globala frågor

För ett moment om **mänskliga rättigheter** är den mest relevanta punkten:
- **"De mänskliga rättigheterna; vilka de är, var de finns samlade och hur de förhåller sig till stat och individ. Diskrimineringsgrunderna i svensk lagstiftning"**

Vill du även inkludera angränsande innehåll, exempelvis:
- Internationella organisationer (FN:s roll för MR)
- Demokrati och diktatur (MR-perspektiv på styrelseskick)
- Gruppers och individers identitet (koppling till diskriminering)

---

*[Simulerad bekräftelse: Läraren bekräftar MR-punkten + internationella organisationer]*

---

### Sammanfattning av steg 1

| | Val |
|---|---|
| **Ämne/kurs** | Samhällskunskap 1b |
| **Centralt innehåll** | (1) De mänskliga rättigheterna; vilka de är, var de finns samlade och hur de förhåller sig till stat och individ. Diskrimineringsgrunderna i svensk lagstiftning. (2) Internationella organisationer och deras roll i världen (FN, EU) |
| **Antal lektioner** | 5 x 60 minuter |
| **Tema/vinkel** | Mänskliga rättigheter |

Bekräftar du detta innan jag går vidare till steg 2?

---

## Utvärdering: Kursminne-hantering

### 1. Hittade du en minnesfil för samhällskunskap 3? **NEJ**

Katalogen `/home/anders/Second brain/.claude/planera-moment/minne/` innehåller enbart:
- `historia-1b.md`

Det finns ingen fil som heter `samhallskunskap-3.md`, `samhallskunskap-1b.md`, eller liknande för samhällskunskap.

### 2. KORREKT INTE nämnde något minne (dvs tyst om det inte finns)? **JA**

Skillen instruerar (rad 99-100): "Om filen inte finns, saga ingenting - det ar forsta momentet i denna kurs." I simuleringen ovan nämns inget om kursminne, vilket är korrekt beteende.

### 3. Felaktigt nämnde minne trots att det inte finns? **NEJ**

Inget minne nämndes i simuleringen. Korrekt beteende.

---

## Ytterligare observationer

1. **Kursen "Samhällskunskap 3" existerar inte** i ämnesplanerna. Skillen har bara Samhällskunskap 1b och 2. En korrekt implementation bör flagga detta för läraren och be om förtydligande, vilket simuleringen gör.

2. **Notebook saknas** för samhällskunskap-kurserna (alla har tomt notebook-ID i `notebook-config.json`). Skillen instruerar att informera läraren om detta och falla tillbaka på inbyggd kunskap med [VERIFIERA]-taggar.

3. **Minnesfilens namnkonvention** är kebab-case. Även om kursen hade funnits som "Samhällskunskap 3" hade filnamnet blivit `samhallskunskap-3.md`. Ingen sådan fil existerar.
