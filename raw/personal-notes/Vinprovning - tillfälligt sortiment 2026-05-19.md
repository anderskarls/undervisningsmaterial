---
created: 2026-05-19
updated: 2026-05-19
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 04.26
type: reflection
tags: [vin, ostprovning, systembolaget, planering]
---

# Vinprovning - tillfälligt sortiment, max 300 kr

Genererat 2026-05-19 via systembolaget-CLI. Krav: tillfälligt sortiment, max 300 kr, MSK ≥14, i Göteborgs lager. Fyra viner som täcker bredden i en ost-provning (inga bubblor).

## Vinerna

| # | Vin | Pris | MSK | Roll | Butiker |
|---|-----|------|-----|------|---------|
| 1 | **Eva Fricke Rheingau Riesling 2024** (Tyskland, Rheingau) | 299 kr | 15 | Aromvitt — torrt, lime, sten, hög syra | 1 / 12 |
| 2 | **Albariño de Fefiñanes 2024** (Spanien, Rías Baixas) | 219 kr | 15 | Mineralvitt — salt, citrus, dämpat | 4 / 12 |
| 3 | **Fleurie Lieu-dit "Champagne" 2024** (Frankrike, Beaujolais) | 249 kr | 15 | Lätt rödvin — gamay, körsbär | 1 / 12 |
| 4 | **Château Cantemerle 2023** (Frankrike, Haut-Médoc) | 275 kr | 15 | Kraftigt rödvin — Bordeaux Cru Classé, cabernet/merlot | 3 / 12 |

**Totalt: 1 042 kr.** Progression: vitt aromrikt → vitt mineraliskt → lätt rött → kraftigt rött. Två vita som demonstrerar att "vitt vin" inte är en enhetlig kategori — Riesling och Albariño är nästan varandras motsatser i stilen.

## Var finns de? (Göteborg, snapshot 2026-05-19)

**Eva Fricke Rheingau Riesling — 299 kr**
- Gårda, Åvägen 42 ⭐ *enda butiken*

**Albariño de Fefiñanes — 219 kr**
- Olskroken, Kobbarnas väg 1
- Gårda, Åvägen 42
- Backaplan, Swedenborgsgatan 5
- Gamlestaden, Hornsgatan 1

**Fleurie "Champagne" — 249 kr**
- Gårda, Åvägen 42 ⭐ *enda butiken*

**Château Cantemerle — 275 kr**
- Torpavallsgatan 4
- Nordstan, Lilla Klädpressaregatan 8
- Gårda, Åvägen 42

> **Strategi:** Åk till **Gårda (Åvägen 42)** — enda butiken där alla fyra finns samtidigt. Ring innan om provningen är längre fram än några dagar — TS-flaskor säljs slut snabbt.

## Ostparningar

### 1. Eva Fricke Riesling → Mild blåost (Fourme d'Ambert) eller Munster
Rieslingens skarpa syra och fruktiga not är en av få vinstilar som klarar blåost utan att kollapsa. Fourme d'Ambert är mildare än Roquefort och briljerar mot torr Riesling. Munster är den klassiska Alsace-Rhein-pairingen — fet tvättkroppsost mot citrusig syra.

### 2. Albariño de Fefiñanes → Manchego semi-curado (6 mån) eller Idiazábal
Halvlagrad Manchego ger fårostfetma som syran skär igenom. Idiazábal (rökt baskisk fårost) lägger till rökighet som matchar vinets sälta. Geografiskt koherent — bra anekdotmaterial under provningen.

### 3. Fleurie → Reblochon eller Tomme de Savoie
Lätt gamay med låga tanniner är ett av få viner som verkligen klarar krämiga tvättkroppsmögelostar. Reblochons mjölkiga fett möter vinets jordighet utan att överrumpla. Tomme de Savoie är ett enklare alternativ.

### 4. Château Cantemerle → Comté 24 mån + Mimolette Vieille
Bordeaux behöver lagrade hårdostar med umami. Comté ger nötighet mot tanninerna, Mimolette en karamelliserad ton som spelar mot fattoner. Visuell kontrast på brädan när orange Mimolette ligger bredvid blekt gul Comté.

## Servering

- 1+2 (vita): 8–10°C
- 3 (Fleurie): 14°C
- 4 (Cantemerle): 16–18°C, gärna 30 min karaff
- Eva Fricke kan vinna på 30 min i karaff trots att det är vitt — testa.
- Bröd, neutrala kex, vindruvor som palettrensare mellan vinerna.
- 45–60 g ost per person per vin — ca 700 g totalt för 8 pers.

## Alternativ till position #1 (om Riesling inte passar)

- **P Nivole Moscato d'Asti 2024** (219 kr, MSK 14, 2 btk) — sött, lätt mousserande. Dessert-pairing med Roquefort som finale.
- **Tyler Santa Barbara County Chardonnay 2023** (299 kr, MSK 15.5, 2 btk) — fylligt, eklagrat kaliforniskt chardonnay. Mer "internationell" kontrast.

## Reproducerbar sökning

```bash
cd ~/kodprojekt/systembolaget-cli
COLUMNS=300 uv run systembolaget search \
  --stad göteborg \
  --sortiment tillfalligt \
  --pris-max 300 \
  --pris-min 80 \
  --limit 100 \
  --sortera price --riktning asc \
  --munskankarna
```

**Notering:** Patchade en bugg i CLI:n under sökningen — `priceFrom`/`priceTo` ändrades till `price.min`/`price.max` i Systembolagets API. Pris-filter fungerar nu. Kvarvarande issue: `--stad` + `--riktning desc` släpper igenom dyra viner — använd `asc`.
