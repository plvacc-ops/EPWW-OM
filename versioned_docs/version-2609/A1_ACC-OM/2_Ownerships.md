---
sidebar_position: 2
sidebar_label: 'Sector ownerships and top-down rules'
slug: /ownerships
---

# ACC Positions

|Sector|Frequency (MHz)|Sector|Frequency (MHz)|
|-|-|-|-|
|ALLFIR LM   (EPWW_ALL_CTR)|125.450|G L   (EPWW_G_CTR)|129.075|
|ALLFIR H    (EPWW_ALH_CTR)|132.700|JL   (EPWW_J_CTR)|124.625|
|C L   (EPWW_C_CTR)|133.475|JR LM   (EPWW_JR_CTR)|130.875|
|D L   (EPWW_D_CTR)|134.225|NE LMH   (EPWW_NE_CTR)|127.450|
|DB+T LM   (EPWW_DBT_CTR)|127.025|T LM   (EPWW_TM_CTR)|130.625|
|DBF+G LM   (EPWW_DBF_CTR)|133.180|TC+J LM   (EPWW_TCJ_CTR)|134.875|
|DT LM   (EPWW_DT_CTR)|128.765|EFIR   (EPWW_E_CTR)|120.950|
|DTC LMH   (EPWW_DTC_CTR)|125.340|NFIR   (EPWW_N_CTR)|130.675|
|F L   (EPWW_F_CTR)|124.275|SFIR   (EPWW_S_CTR)|123.625|
|FG LM   (EPWW_FG_CTR)|124.925|||

Each position AoR is briefly described below and more detabiled ownership can be found [here](https://plvacc.pl/acc-sectors/)

## EPWW_ALL_CTR

![ALM](/assets/ALM.jpg)

**Frequency:** 125.450 MHz

**Description:** ALL FIR sector, covers whole FIR Warszawa airspace in LOW and MID level, when
EPWW_ALH_CTR offline also covers HIGH part of the airspace.

## EPWW_ALH_CTR

![ALH](/assets/ALH.jpg)

**Frequency:** 132.700 MHz

**Description:** ALL FIR sector, covers whole FIR Warszawa airspace in HIGH level, when EPWW_ALL_CTR offline, also top-downs LOW and MID level.

## EPWW_C_CTR

![C](/assets/C.jpg)

**Frequency:** 133.475 MHz

**Description:** C LOW sector, by default covers LOW part of C sector, but when no other station
online (EPWW_TCJ_CTR, EPWW_DTC_CTR, EPWW_E_CTR, EPWW_N_CTR, EPWW_S_CTR,
EPWW_ALH_CTR) also covers MID and HIGH part of C sector airspace. When online together
with EPWW_ALL CTR, still covers three levels of C sector.

:::caution
In HIGH part sector C has different horizontal borders than in LOW and MID part.
:::

## EPWW_D_CTR

![D](/assets/D.jpg)

**Frequency:** 134.225 MHz

**Description:** D LOW sector, by default covers LOW part of D sector, but when no other station
online (EPWW_DBT_CTR, EPWW_DBF_CTR, EPWW_DT_CTR, EPWW_DTC_CTR,
EPWW_N_CTR, EPWW_ALH_CTR) also covers MID and HIGH part of D sector airspace. When
online together with EPWW_ALL CTR, still covers three levels of D sector.

## EPWW_DBT_CTR

![DBT](/assets/DBT.jpg)

**Frequency:** 127.025 MHz

**Description:** Covers DB+T sectors in LOW and MID parts. When no other station online (EPWW_
N_CTR, EPWW_N_CTR, EPWW_S_CTR, EPWW_ALH_CTR) also covers HIGH part of these
sectors. EPWW_DBT_CTR is not superior position in T sector.

## EPWW_DBF_CTR

![DBF](/assets/DBF.jpg)

**Frequency:** 133.180 MHz

**Description:** Covers DBF+G sectors in LOW and MID parts. When no other station online
(EPWW_N_CTR, EPWW_ALH_CTR) also cover HIGH part of these sectors. EPWW_DBF_CTR is
not superior position in G sector.

## EPWW_DT_CTR

![DT](/assets/DT.jpg)

**Frequency:** 128.765 MHz

**Description:** Covers DT sectors in LOW and MID parts. When no other station online
(EPWW_DTC_CTR, EPWW_N_CTR, EPWW_S_CTR, EPWW_ALH_CTR) also covers HIGH part of
these sectors.

## EPWW_DTC_CTR

![DTC](/assets/DTC.jpg)

**Frequency:** 125.340 MHz

**Description:** Covers DTC sectors in all three parts: LOW, MID and HIGH.

## EPWW_F_CTR

![F](/assets/F.jpg)

**Frequency:** 124.275 MHz

**Description:** F LOW sector, by default covers LOW part of F sector, but when no other station
online (EPWW_FG_CTR, EPWW_DBF_CTR, EPWW_N_CTR, EPWW_ALH_CTR) also covers MID
and HIGH part of F sector airspace. When online together with EPWW_ALL CTR, still covers
three levels of F sector.

## EPWW_G_CTR

![G](/assets/G.jpg)

**Frequency:** 129.075 MHz

**Description:** G LOW sector, by default covers LOW part of G sector, but when no other station
online (EPWW_FG_CTR, EPWW_DBF_CTR, EPWW_N_CTR, EPWW_ALH_CTR) also covers MID
and HIGH part of G sector airspace. When online together with EPWW_ALL CTR, still covers
three levels of G sector.

## EPWW_FG_CTR

![FG](/assets/FG.jpg)

**Frequency:** 124.925 MHz

**Description:** Covers F and G sectors in LOW and MID parts. When no other
station online (EPWW_DBF_CTR, EPWW_N_CTR, EPWW_ALH_CTR) also covers HIGH part.
When online together with EPWW_ALL CTR, still covers three levels of F and G sectors.

## EPWW_J_CTR

![J](/assets/J.jpg)

**Frequency:** 124.625 MHz

**Description:** J LOW sector, by default covers LOW part of J sector, but when no other station
online (EPWW_JR_CTR, EPWW_TCJ_CTR, EPWW_S_CTR, EPWW_E_CTR, EPWW_ALH_CTR)
also covers MID and HIGH part of J sector airspace. When online together with EPWW_ALL
CTR, still covers three levels of J sector.

## EPWW_JR_CTR

![JR](/assets/JR.jpg)

**Frequency:** 130.875 MHz

**Description:** Covers J and R sectors in LOW and MID parts. When no other station online
(EPWW_S_CTR, EPWW_E_CTR, EPWW_ALH_CTR) also covers HIGH part. When online
together with EPWW_ALL CTR, still covers three levels of J and R sectors.

## EPWW_NE_CTR

![NE](/assets/NE.jpg)

**Frequency:** 127.450 MHz

**Description:** Covers NE sectors in all three parts: LOW, MID and HIGH.

## EPWW_TM_CTR

![TM](/assets/TM.jpg)

**Frequency:** 130.625 MHz

**Description:** Covers T sector in LOW and MID part. When no other station online
(EPWW_TCJ_CTR, EPWW_DTC_CTR, EPWW_DT_CTR, EPWW_S_CTR, EPWW_ALH_CTR) also
covers HIGH part. When online together with EPWW_ALL CTR, still covers three levels of T
sector.

## EPWW_TCJ_CTR

![TCJ](/assets/TCJ.jpg)

**Frequency:** 134.875 MHz

**Description:** Covers TC+J sectors in LOW and MID parts. When no other station online
(EPWW_DTC_CTR, EPWW_DT_CTR, EPWW_S_CTR, EPWW_ALH_CTR) also cover HIGH part of
these sectors. EPWW_TCJ_CTR is not superior position in J sector.

## EPWW_E_CTR

![E](/assets/E.jpg)

**Frequency:** 120.950 MHz

**Description:** Covers NER+J+C sectors in all three levels: LOW, MID, HIGH.

## EPWW_N_CTR

![N](/assets/N.jpg)

**Frequency:** 130.675 MHz

**Description:** Covers BDFGNE+C sectors in all three levels: LOW, MID, HIGH.

## EPWW_S_CTR

![S](/assets/S.jpg)

**Frequency:** 123.625 MHz

**Description:** Covers TCJRE sectors in all three levels: LOW, MID, HIGH.

:::note
Detailed sector ownerships should be based on below stated precedence rules and [here](https://plvacc.pl/acc-sectors/).
:::

# Sector ownership precendence rule

## SECTOR LOW

|No.|ACC B LOW|ACC C LOW| ACC D LOW|ACC E LOW|ACC F LOW|
|-|-|-|-|-|-|
|1|EPWW_DBT_CTR|EPWW_C_CTR|EPWW_D_CTR|EPWW_NE_CTR|EPWW_F_CTR|
|2|EPWW_DBF_CTR|EPWW_TCJ_CTR|EPWW_DBT_CTR|EPWW_E_CTR|EPWW_FG_CTR|
|3|EPWW_N_CTR|EPWW_DTC_CTR|EPWW_DT_CTR|EPWW_S_CTR|EPWW_DBF_CTR|
|4|EPWW_ALL_CTR|EPWW_S_CTR|EPWW_DTC_CTR|EPWW_N_CTR|EPWW_N_CTR|
|5|EPWW_ALH_CTR|EPWW_E_CTR|EPWW_DBF_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|
|6||EPWW_N_CTR|EPWW_N_CTR|EPWW_ALH_CTR|EPWW_ALH_CTR|
|7||EPWW_ALL_CTR|EPWW_ALL_CTR|-|-|
|8||EPWW_ALH_CTR|EPWW_ALH_CTR|-|-|

|No.|ACC G LOW|ACC J LOW|ACC N LOW|ACC R LOW|ACC T LOW|
|-|-|-|-|-|-|
|1|EPWW_G_CTR|EPWW_J_CTR|EPWW_NE_CTR|EPWW_JR_CTR|EPWW_TM_CTR|
|2|EPWW_FG_CTR|EPWW_JR_CTR|EPWW_N_CTR|EPWW_E_CTR|EPWW_DT_CTR|
|3|EPWW_N_cTR|EPWW_S_CTR|EPWW_E_CTR|EPWW_S_CTR|EPWW_TCJ_CTR|
|4|EPWW_DBF_CTR|EPWW_TCJ_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|EPWW_DTC_CTR|
|5|EPWW_ALL_CTR|EPWW_E_CTR|EPWW_ALH_CTR|EPWW_ALH_CTR|EPWW_DBT_CTR|
|6|EPWW_ALH_CTR|EPWW_ALL_CTR|-|-|EPWW_S_CTR|
|7||EPWW_ALH_CTR|-|-|EPWW_ALL_CTR|
|8|-|-|-|-|EPWW_ALH_CTR|

## SECTOR MID

|No.|ACC B MID|ACC C MID|ACC D MID|ACC E MID|ACC F MID|
|-|-|-|-|-|-|
|1|EPWW_DBT_CTR|EPWW_TCJ_CTR|EPWW_DBT_CTR|EPWW_NE_CTR|EPWW_FG_CTR|
|2|EPWW_DBF_CTR|EPWW_DTC_CTR|EPWW_DT_CTR|EPWW_E_CTR|EPWW_DBF_CTR|
|3|EPWW_N_CTR|EPWW_S_CTR|EPWW_DTC_CTR|EPWW_S_CTR|EPWW_N_CTR|
|4|EPWW_ALH_CTR|EPWW_E_CTR|EPWW_DBF_CTR|EPWW_N_CTR|EPWW_ALH_CTR|
|5|EPWW_ALL_CTR|EPWW_N_CTR|EPWW_N_CTR|EPWW_ALH_CTR|EPWW_F_CTR|
|6|-|EPWW_ALH_CTR|EPWW_ALH_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|
|7|-|EPWW_C_CTR|EPWW_D_CTR|-|-|
|8||EPWW_ALL_CTR|EPWW_ALL_CTR|-|-|

|No.|ACC G MID|ACC J MID|ACC N MID|ACC R MID|ACC T MID|
|-|-|-|-|-|-|
|1|EPWW_FG_CTR|EPWW_JR_CTR|EPWW_NE_CTR|EPWW_JR_CTR|EPWW_TM_CTR|
|2|EPWW_N_CTR|EPWW_S_CTR|EPWW_N_CTR|EPWW_E_CTR|EPWW_DT_CTR|
|3|EPWW_DBF_CTR|EPWW_TCJ_CTR|EPWW_E_CTR|EPWW_S_CTR|EPWW_TCJ_CTR|
|4|EPWW_ALH_CTR|EPWW_E_FIR|EPWW_ALH_CTR|EPWW_ALH_CTR|EPWW_DTC_CTR|
|5|EPWW_G_CTR|EPWW_ALH_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|EPWW_DBT_CTR|
|6|EPWW_ALL_CTR|EPWW_J_CTR|-|-|EPWW_S_CTR|
|7|-|EPWW_ALL_CTR|-|-|EPWW_ALL_CTR|

## SECTOR HIGH

|No.|ACC B HIGH|ACC C HIGH|ACC D HIGH|ACC E HIGH|ACC F HIGH|
|-|-|-|-|-|-|
|1|EPWW_DBT_CTR|EPWW_TCJ_CTR|EPWW_DBT_CTR|EPWW_NE_CTR|EPWW_N_CTR|
|2|EPWW_DBF_CTR|EPWW_DTC_CTR|EPWW_DT_CTR|EPWW_E_CTR|EPWW_ALH_CTR|
|3|EPWW_N_CTR|EPWW_S_CTR|EPWW_DTC_CTR|EPWW_S_CTR|EPWW_FG_CTR|
|4|EPWW_ALH_CTR|EPWW_E_CTR|EPWW_DBF_CTR|EPWW_N_CTR|EPWW_DBF_CTR|
|5|EPWW_ALL_CTR|EPWW_N_CTR|EPWW_N_CTR|EPWW_ALH_CTR|EPWW_F_CTR|
|6|-|EPWW_ALH_CTR|EPWW_ALH_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|
|7|-|EPWW_C_CTR|EPWW_D_CTR|-|-|
|8|-|EPWW_ALL_CTR|EPWW_ALL_CTR|-|-|

|No.|ACC G HIGH|ACC J HIGH|ACC N HIGH|ACC R HIGH|ACC T HIGH|
|-|-|-|-|-|-|
|1|EPWW_N_CTR|EPWW_S_CTR|EPWW_NE_CTR|EPWW_E_CTR|EPWW_DTC_CTR|
|2|EPWW_ALH_CTR|EPWW_E_CTR|EPWW_N_CTR|EPWW_S_CTR|EPWW_S_CTR|
|3|EPWW_FG_CTR|EPWW_ALH_CTR|EPWW_E_CTR|EPWW_ALH_CTR|EPWW_ALH_CTR|
|4|EPWW_DBF_CTR|EPWW_JR_CTR|EPWW_ALH_CTR|EPWW_JR_CTR|EPWW_TCJ_CTR|
|5|EPWW_G_CTR|EPWW_TCJ_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|EPWW_DT_CTR|
|6|EPWW_ALL_CTR|EPWW_J_CTR|-|-|EPWW_TM_CTR|
|7|-|EPWW_ALL_CTR|-|-|EPWW_DBT_CTR|
|8|-|-|-|-|EPWW_ALL_CTR|

## TMA topdown rules

|No.|TMA Warszawa|TMA Gdańsk|TMA Poznań N|TMA Poznań S|
|-|-|-|-|-|
|1|EPWW_C_CTR|EPWW_G_CTR|EPWW_D_CTR|EPWW_TM_CTR|
|2|EPWW_NE_CTR|EPWW_FG_CTR|EPWW_DBT_CTR|EPWW_DT_CTR|
|3|EPWW_TCJ_CTR|EPWW_N_CTR|EPWW_DT_CTR|EPWW_TCJ_CTR|
|4|EPWW_DTC_CTR|EPWW_DBF_CTR|EPWW_DTC_CTR|EPWW_DTC_CTR|
|5|EPWW_S_CTR|EPWW_ALL_CTR|EPWW_DBF_CTR|EPWW_DBT_CTR|
|6|EPWW_E_CTR|EPWW_ALH_CTR|EPWW_ALL_CTR|EPWW_S_CTR|
|7|EPWW_N_CTR|-|EPWW_N_CTR|EPWW_ALL_CTR|
|8|EPWW_ALL_CTR|-|EPWW_ALH_CTR|EPWW_ALH_CTR|
|9|EPWW_ALH_CTR|-|-|-|

|No.|TMA Kraków|TMA Szczecin|TMA Mazury|TMA Lublin|
|-|-|-|-|-|
|1|EPWW_J_CTR|EPWW_DBT_CTR|EPWW_NE_CTR|EPWW_JR_CTR|
|2|EPWW_JR_CTR|EPWW_DBF_CTR|EPWW_N_CTR|EPWW_E_CTR|
|3|EPWW_S_CTR|EPWW_N_CTR|EPWW_E_CTR|EPWW_S_CTR|
|4|EPWW_TCJ_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|EPWW_ALL_CTR|
|5|EPWW_E_CTR|EPWW_ALH_CTR|EPWW_ALH_CTR|EPWW_ALH_CTR|
|6|EPWW_ALL_CTR|-|-|-|
|7|EPWW_ALH_CTR|-|-|-|

|No.|TMA Rzeszów|
|-|-|
|1|EPWW_JR_CTR|
|2|EPWW_E_CTR|
|3|EPWW_S_CTR|
|4|EPWW_ALL_CTR|
|5|EPWW_ALH_CTR|