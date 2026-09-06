---
sidebar_position: 2
sidebar_label: 'TMA Kraków and Rzeszów'
slug: /krakow
---

# TMA Kraków and Rzeszów

## Airspace characteristics

The Kraków TMA is a Class C airspace extending up to FL285. APP Kraków provides radar air traffic control for aircraft arriving and departing from the following airports: Kraków/Balice [EPKK] and Katowice/Pyrzowice [EPKT].

TMA is divided into Upper and Lower sectors. UTMA Krakow is divided into three sectors: Sector A [FL95-FL245], Sector B [FL245-FL285] and Sector C [FL145-FL285].

![KKTMA](/assets/TMA_Krakow_sectors.jpg)

Due to VFR traffic in the CTR of Kraków and Katowice at 2000 ft, the movement of aircraft in sectors 4 (MVA 2800 ft) and 6 (MVA 2900 ft) should occur no lower than 3000 ft AMSL. Vectoring of aircraft near the CTR at 2800 ft requires coordination with the relevant TWR authority to maintain separation between IFR aircraft in Class C airspace and VFR aircraft in the adjacent Class D airspace.

## Positions

|Position|Frequency|Callsign|ID|
|-|-|-|-|
|EPKK_APP|121.075 MHz|Kraków Approach|AKK|
|EPKK_E_APP|126.975 MHz|Kraków Approach|AKKE|
|EPKK_KK_APP|126.530 MHz|Kraków Approach|AKKK|
|EPKK_KT_APP|135.405 MHz|Kraków Approach|AKKT|
|EPKK_RZ_APP|133.030 MHz|Kraków Approach|AKRZ|

![KKTMA ALL POS](/assets/TMA_Krakow_positions.jpg)

## Sectors configuration

Allowed sector configurations:
- four-sector: AKK, AKKE, AKKK, AKKT;
- three-sector: AKK, AKKK, AKKT;
- three-sector: AKK, AKKE, AKKK;
- three-sector: AKK, AKKE, AKKT;
- two-sector: AKK, AKKE;
- two-sector: AKK, AKKT;
- two-sector: AKK, AKKK;
- single-sector: AKK.

In each of above stated configuration **AKRZ** position can be opened.

### Four-sector configuration: AKK, AKKE, AKKK, AKKT

**Kraków Approach Sector [EPKK_APP; callsign “Kraków Approach”]**, marked as AKK, covers the airspace in the TMA and UTMA of Kraków up to FL285. In a four-sector configuration, Kraków Approach is responsible for the initial descent of aircraft arriving at the airports in Katowice and Kraków, as well as providing initial separation for departures from Kraków airport (using RWY 25) and Katowice (using RWY 26).

**Kraków Approach East Sector [EPKK_E_APP; callsign “Kraków Approach”]**, marked as AKKE, covers the airspace in the TMA and UTMA of Kraków up to FL285. In a four-sector configuration, Kraków Approach handles the initial descent for aircraft arriving at the airports in Katowice and Kraków, and is responsible for initial separation for departures from Kraków airport (using RWY 07) and Katowice (using RWY 08).

**Kraków Director Sector [EPKK_KK_APP; callsign “Kraków Approach”]**, marked as AKKK, is responsible for final approach to Kraków airport.

**Katowice Director Sector [EPKK_KT_APP; callsign “Kraków Approach”]**, marked as AKKT, is responsible for final approach to Katowice airport. Aircraft arriving at EPKK or EPKT should be handed over to the controller of the DIR KK or DIR KT sector with a speed of **220 IAS**. This value may be changed on the reasonable and explicit instruction of the relevant sector controller. Regardless of the runway in use, the APP KRK controller hands over aircraft to the DIR controller in the downwind position, descending to 5000 ft AMSL, while other aircraft descend to FL100.

**Collaboration between APP and APP E for departures:**
- aircraft departing from EPKT or EPKK (or performing a missed approach procedure) are handed over to the controller responsible for departures according to the boundaries of responsibility.
- aircraft departing from EPKK RWY 07 to the OMFOL or LUMVE points are initially climbed to FL200.
- aircraft departing from EPKT RWY 26 to the REGTO or LUXAR points are initially climbed to FL200.
- other departing aircraft are climbed to FL100.

**Collaboration between APP and APP E for arrivals:**
- aircraft arriving at EPKT or EPKK and crossing the boundary of responsibility between the APP and APP E sectors will be descended to 5000 ft AMSL in the downwind position of the respective airport and then handed over to the DIR controller for the appropriate airport.
- aircraft arriving to EPWR and EPRZ are cleared to descent to FL250
- other aircraft are cleared to descend to FL150 and handed over to the collaborating controller (APP E → APP or APP → APP E).

|EPKK DEP RWY|SID|Initial Climb|Sector order|
|-|-|-|-|
|07|OMFOL, LUDVE|FL200|AKKE -> AKK|
|07|BABKO, ADADO, TUSIN|FL100|AKKE|
|07|REGTO, LUXAR, POBOK, NAVUR|---|AKKE|
|25|TUSIN, ADADO, BABKO, OMFOL, LUDVE|---|AKK|
|25|REGTO, LUXAR, POBOK, NAVUR|FL100|AKK -> AKKE|

|EPKT DEP RWY|SID|Initial Climb|Sector order|
|-|-|-|-|
|08|REGTO, LUXAR, KURON, NAVUR|---|AKKE|
|08|TUSIN, ADADO, BABKO, OMFOL, LUMVE|FL100|AKKE -> AKK|
|26|REGTO, LUXAR|FL200|AKK -> AKKE|
|26|NAVUR, KURON|FL100|AKK -> AKKE|
|26|LUMVE, OMFOL, ADADO, TUSIN, BABKO|---|AKK|

The furthest points to which the APP Krakow controller can allow direct flight without coordination with the AKKT/AKKK controller in the case of arrivals are:

|ARR RWY|AKK -> AKKK/AKKT|AKKE -> AKKK/AKKT|
|-|-|-|
|EPKK 07|FESCU, EFLUW|KK601, KK589|
|EPKK 25|KK538|KK651, UXBAF, UMJUZ|
|EPKT 08|FUMCA, CUZAC, TAHEF|KT723, KT781|
|EPKT 26|KT501, KT493|KT489, ATSEW|

### Three-sector configuration: AKK, AKKK, AKKT

The tasks of AKKE are taken over by AKK controller. Cooperation between AKK and AKKK/AKKT remains the same as in the case of a four-sector configuration.

### Three-sector configuration: AKK, AKKE, AKKK/AKKT

The missing AKKK/AKKT tasks are taken over by AKK controller.

### Two-sector: AKK, AKKE

The tasks of AKKK/AKKT controllers are taken over according to runway in use. For RWY 25 and 26, AKKK/AKKT tasks are taken over by AKKE controller. For RWY 07 and 08, AKKK/AKKT tasks are taken over by AKK controller.

### Two-sector configuration: AKK, AKKK/AKKT

The tasks of AKKE and missing AKKK/AKKT are taken over by AKK controller. Cooperation between AKK and AKKK/AKKT remains the same as in the case of a four-sector configuration.

### Single-sector configuration: AKK
In a single-sector configuration, the responsibility for arrivals to airports: EPKK, EPKT and EPRZ is transferred to the controller AKK.

### CTA09

**Kraków Approach Sector Rzeszów [EPKK_RZ_APP; callsign “Kraków Approach”]**, marked as
AKRZ, covers the CTA09 airspace and is responsible for providing radar service for traffic arriving and departing from Rzeszów Airport.

If APP RZ is offline, its tasks are taken over by APP E controller.

If APP E is offline, APP RZ tasks are taken over by APP.

## Standard Operating Procedures

The controllers of AKK, AKKE, AKKK, and AKKT sectors are required to manage arriving air traffic in such a way that the final approach does not exceed **25 NM** from the runway threshold.

Whenever possible, considering the current traffic and meteorological situation, APP will manage and plan traffic to enable the application of the CDA technique.

The standard initial climb after departure from SID EPKT and SID EPKK is set at **6000 ft AMSL** and is communicated in the flight clearance by GND EPKT and DEL EPKK controllers.

An aircraft may be vectored only within controlled airspace and above the MRVA in a given TMA sector, while avoiding prohibited and restricted areas.

## Coordination with other ATC units

### TWR Kraków/TWR Katowice

The appropriate controllers responsible for arrivals to EPKT and EPKK remain in constant coordination with TWR controllers.

TWR controllers designate active runways for the respective airports based on the runway selection methods outlined in the [Aerodrome Traffic Control Chapter of this instruction](./aerodrome).

It is stipulated that a change of active runways should occur no earlier than 30 minutes after notifying the APP controller of the need for a change. The APP controller will then begin adjusting the arrival sequence for the new runway.

Information regarding the runway in use must always be shared among all APP controllers.

Departures from EPKT and EPKK do not require an APP controller's clearance (“departure release”).

At the request of the TWR controller, the appropriate APP controller provides information on the distance in miles or time in minutes to the threshold for arriving traffic, to improve runway efficiency.

### APP Poznań

Due to the proximity of Wrocław/Strachowice Airport [EPWR] and the upper boundary of UTMA Kraków, arrivals from the east to EPWR cross the UTMA Kraków airspace.

ACC Warszawa will descend aircraft to an initial descent level of no lower than FL290 for arrivals via LUMVE and EPOPA.

APP Kraków controller may also authorize descent directly through ACC Warszawa and specify whether they wish to receive control and communication transfer. Cases of descent by ACC Warszawa within TMA Kraków should be considered individually for each arrival from the east to EPWR.

### TWR Rzeszów

Kraków APP controller provides radar service in CTA09 (TMA Rzeszów) to improve the quality of ATC services for traffic departing and arriving from/to EPRZ.

Departure instructions should be coordinated with APP controller by TWR Rzeszów controller, and departing traffic should be transferred to APP controller immediately after departure. Arriving traffic are transfered to TWR controller once established on final approach.

### APP Warszawa

In cases where both APP Kraków and APP Warszawa controllers are logged in and there is no logged ACC Warszawa, the following routes are managed as part of the “bridge” procedure:
- EPWA ⬌ EPKK,
- EPWA ⬌ EPKT,
- EPMO ⬌ EPKK,
- EPMO ⬌ EPKT.

Aircraft remain in communication with the selected APP controller and are then directly handed over to the next APP controller halfway between the sectors of the TMA.

Conditions for “Bridge” are:
- aircraft operating on the listed routes are at or below FL240,
- prior coordination and mutual agreement between controllers,
- low traffic in both TMA sectors,
- no significant traffic outside of the TMA sectors on the flight route of the selected aircraft.

During “bridging,” shortcuts are not allowed beyond the boundaries of the respective TMA, even when agreement has been made with the receiving controller.