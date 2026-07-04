---
sidebar_position: 6
sidebar_label: 'Approach Control Service'
slug: /approach
---
# Approach Control Service

## Available ATC Positions

**APPROACH [APP]**

Approach’s responsibilities include providing service within the TMA and control of flight during climb and descent.

**FINAL DIRECTOR [F_APP]**

Final director position is responsible for control of flight in their final phase: direct approach to the airport.

**PROCEDURAL TOWER [TWR]**

In TMAs where control takes place under procedural control rules, the TWR is responsible to provide ATC service.

## Approach Procedural Control procedures

Procedural control is provided in airspace, where using radar service is not possible and it takes place based on position reports from flight crew.

In procedural airspace, flight can only be performed according to published procedures. It is prohibited to use vectoring in procedural airspace. This does not preclude using directs and other navigation methods (i.e. radials) for ATC.

**Procedural separation**

**Vertical separation:** 1000 ft

**Lateral - longitudinal separation:** 
- based on time:
  - between two aircraft on the same track, over the same navigational points aid, must take at least 10 minutes,
  - when preceding aircraft is at least 20 kts faster, separation can be reduced to 5 minutes,
  - if speed difference is greater than 40 kts, separation is reduced to 3 minutes.
- based on DME distance:
  - difference between DME distances (reported by pilots) between aircraft and VOR/DME located “on track” must be at least 20 NM
  - separation can be reduced to 10 NM when preceding aircraft is at least 20 kts faster.

**Separation on approach:**
The approach clearance for proceeding traffic can be given, when:
- preceding traffic is seen by controller from TWR and there is reasonable certainty that a normal landing can be made, or
- approaches occur after each other and the preceding traffic has passed a specified point towards the airport and there is reasonable assurance that a normal landing can be made.

## Approach Surveillance Control procedures

The radar service is based on the use of surveillance system imaging with
identified aircraft in order to ensure:
- aircraft separation,
- air traffic monitoring, in order to inform about route deviations,
- radar vectoring to avoid traffic or shorten the route,
- assistance for aircraft in distress,
- coordination of different types of air traffic, additionally, in case of radar service in approach control service:
- radar vectoring to a position, from which final instrument approach can be conducted,
- radar vectoring to a position, from which visual approach can be conducted,
- monitoring instrument approach procedures and visual approaches.

**Separation in surveillance control**
Horizontal separation: 5 NM
Vertical separation:
- below FL280: 1000 ft
- above FL280: 2000 ft*
  
\* except for RVSM airspace, mentioned in [this section](./airspace).

Separation in wake turbulence conditions

|Preceding|Suceeding|Separation|
|-|-|-|
|SUPER (J)|HEAVY (H)|5 NM|
|HEAVY (H)|HEAVY (H)|4 NM|
|SUPER (J)|MEDIUM (M)|7 NM|
|HEAVY (H)|MEDIUM (M)|5 NM|
|SUPER (J)|LIGHT (L)|8 NM|
|HEAVY (H)|LIGHT (L)|6 NM|
|MEDIUM (M)|LIGHT (L)|5 NM|

**APPs with surveillance systems**

In FIR Warszawa surveillance systems are available at the following positions:
- APP Warszawa,
- APP Kraków,
- APP Gdańsk,
- APP Poznań.

**Lateral separation reduction**

Lateral separation may be reduced to 3 NM when aircraft is:
- within TMA Warszawa airspace, or
- within 16 NM (30 km) from radar antenna (for VATSIM purposes, from aerodrome) in TMA Gdańsk.

## Silent coordination

Transfer of control shall take place at point and altitude, established for individual coordination points between sectors.

If traffic is transfered according to standard operating procedures, there is no need for extra coordination. Otherwise it should be coordinated with every controller that may be affected with that traffic.

**Transfer of traffic**

Transfer may take place no sooner than 5 minutes before reaching the Area of Responsibility (AoR) boundary (including vertical boundaries). Transfer shall take place at least 1 minute before the aircraft enters AoR of the next controller.

Transfer procedure:

1. Issuing frequency change instruction while using the “HAND OFF” function.

    It is interpreted as:
   - transfer of radar identification,
   - declaration of immediate transfer of control to the receiving controller,
   - confirmation that the aircraft is released under the conditions set in the ATC release.
  
2. Aircraft remains “in suspension” until it establishes two-way radio
communication with the next controller,

3. After establishing communications the receiving controller accepts the transfer by pressing “ACCEPT”. 

    It is interpreted as:
   - confirmation of establishing two-way communication at the designated frequency.

Use of “REFUSE” function shall make controllers to contact with each other to explain reason for initiating this function.

## Traffic release in vFIR Warszawa

Traffic release allows controller to change current flight path of an aircraft before it gets into their airspace. 

Controller issuing an release will determine, in which aspects the release is valid. 

The traffic can be released for:
- climb,
- descent,
- turns (no more than 45 degrees),
- speed control.
  
Transfer from APP to ACC and between ACC sectors is equivalent with release for:
- climb and descent,
- turns,
- speed control.
  
::: note
Given releases are only applicable within FIR Warszawa. Any other defined standard releases between units outside FIR Warszawa will be included in relevant Letter of Agreement.

:::