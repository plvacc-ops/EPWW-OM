---
sidebar_position: 1
sidebar_label: 'TMA Warszawa, Radom and Łódź'
slug: /warszawa
---

# TMA Warszawa, Radom and Łódź

## Airspace characteristics

The TMA Warszawa is Class C airspace, extending up to FL225 (with permanently delegated CTA, the upper limit is raised to FL245). TMA Warszawa provides radar control for arriving and departing aircraft at the following airports:
- Warszawa/Chopin [EPWA],
- Warszawa/Modlin [EPMO].

Additionally, it provides radar control:
- down to 6000 ft in TMA Łódź (within CTA03),
- down to FL095 in TMA Radom (within CTA08),

Within its VATSIM Area of Responsibility, procedural control is provided in TMA Łódź and TMA Radom, as well as Aerodrome Flight Information Service (AFIS) in ATZ Babice. MCTR/MTMA Mińsk Mazowiecki and MCTR/MTMA Łask are not simulated in the VATSIM network and remain Class G airspace, where only traffic information is provided, and no military air traffic control is performed.

![TMA CTA](/assets/TMA_Warszawa_CTA.jpg)

## Positions

|Position|Frequency|Callsign|ID|
|-|-|-|-|
|EPWA_APP|128.805 MHz|Warszawa Approach|AWA|
|EPWA_N_APP|125.055 MHz|Warszawa Approach|ANWA|
|EPWA_S_APP|135.930 MHz|Warszawa Approach|ASWA|
|EPWA_F_APP|129.380 MHz|Warszawa Approach|FWA|

## Areas of Responsibility

### AWA Sector

Vertical boundaries: lower boundary of TMA - FL125

Horizontal boundaries:

![AWA horizontal](/assets/TMA_Warszawa_APP.jpg)

Scope of resposibility:

The AWA controller is responsible for the initial control of departures and their identification in accordance with surveillance identification procedures.

TWR controller transfers control and communication AWA controller immediately after departure.

The AWA controller manages the initial climb of departing aircraft up to FL120. The transfer of control of a climbing aircraft to the mentioned levels includes release for further climb.

The AWA controller provides the aerodrome flight information service (AFIS) in the ATZ Babice [EPBC] when EPBC_I_TWR is not logged in.

The AWA controller provides air traffic control service in the CTR Okęcie [EPWA] when EPWA_TWR is not logged in.

### ANWA and ASWA Sectors

Vertical boundaries: lower boundary of TMA - FL225 (excluding AWA and FWA sectors)

Horizontal boundaries:

![ANWA_ASWA horizontal](/assets/TMA_Warszawa_APP_N_S.jpg)

Scope of responsibility:

The ANWA controller is responsible for air traffic control of arrivals and departures at Warszawa/Modlin Airport [EPMO].

The ASWA controller is responsible for air traffic control of arrivals and departures at Łódź [EPLL] and Radom [EPRA] airports.

### FWA Sectors

Vertical boundaries: lower boundary of TMA - FL125

Horizontal boundaries:

![FWA horizontal](/assets/TMA_Warszawa_DIR.jpg)

Scope of responsibility:

The FWA controller is responsible for vectoring aircraft to the final approach and deciding on the flow of the arrival queue to EPWA airport.

## Sectors configuration

Allowed sector configurations:
- four-sector: AWA, ANWA, ASWA, FWA;
- three-sector: AWA, ANWA, ASWA;
- three-sector: AWA, ANWA, FWA;
- two-sector: AWA, ANWA;
- two-sector: AWA, FWA;
- single-sector: AWA.

The sector where vectoring to the final approach is conducted is referred to as the parent sector. The parent sector determines the flow of the arrival queue to EPWA airport and issues instructions to other controllers (e.g., speed and altitude control) to ensure an efficient and safe arrival sequence in the final phase of the approach to landing. By default, the parent sector is the FWA sector. 

Clearance for further climb may be issued by the AWA controller if the aircraft is at least 2.5 NM from the horizontal boundaries of FWA (but no higher than the levels established within the APP-ACC level coordination). Further climb within the FWA sector boundaries may be issued only after prior clearance from the FWA controller.

### Available configurations

#### four sector: AWA, ANWA, ASWA, FWA;
- arrivals RWY 11

    ![4SEC 11](/assets/TMA_Warszawa_config11.jpg)

- arrivals RWY 15

    ![4SEC 15](/assets/TMA_Warszawa_config15.jpg)

- arrivals RWY 29

    ![4SEC 15](/assets/TMA_Warszawa_config29.jpg)

- arrivals RWY 33

    ![4SEC 15](/assets/TMA_Warszawa_config33.jpg)

The ANWA and ASWA controller descends arriving aircraft to EPWA to FL130. The transfer of control of an aircraft from the ANWA/ASWA controller to the AWA controller includes release for further descent.

AWA controller may shorten the arrival routes of aircraft using RNAV waypoints. The maximum shortcuts - waypoints to which controllers can allow direct flight without coordination with the next controller are:

|ARR RWY|ASWA -> ANWA|ANWA -> AWA|AWA -> FWA|
|-|-|-|-|
|11|ENZAM, FOLFA|KEWLU|NIMIS, SOSIN|
|15|ENZAM, FOLFA|KEWLU|REBSO, KINFU|
|29|ENZAM, FOLFA|HALFI|NAHPA, DINVA|
|33|ENZAM, FOLFA|MENCI|SOFUZ, VEKPE|

AWA controller is required to manage traffic in such a way that the FWA controller has no more than 8 aircraft arriving at EPWA in his sector at any given time. As a standard procedure, AWA controller descends arriving aircraft to EPWA to **6000 ft**. The initiation of the HAND OFF function and the transfer of communication for aircraft directly entering the FWA sector between the AWA and FWA controllers should occur no earlier than 10 NM before the FWA sector boundary, or no later than at its boundary. In practice, when traffic follows STAR, the transfer to the FWA controller should occur before the aircraft reaches the “downwind” position. Upon a justified request from the DIR controller, the AWA/ANWA/ASWA controller will place aircraft in holding patterns located within the TMA Warszawa.

Aircraft arriving at EPWA should be transfered to the FWA controller at a speed of **220 IAS**. This value may be adjusted upon a valid and clear instruction from the FWA controller.

The FWA sector controller, where possible, should apply the following speed control technique:
- no less than 200 kt/MCS (“Minimum Clean Speed”) up to 15 NM from the runway threshold in use;
- no less than 150 kt up to 4 NM from the runway threshold in use.

Conditions for the transfer of control between AWA and FWA controllers are established through current coordination

#### three-sector: AWA, ANWA, FWA:

![3AWA NWA FWA](/assets/TMA_Warszawa_config_APP_N_DIR.jpg)

The responsibilities of the ASWA position are taken over by the ANWA position.

:::tip
This sectorization is most recommended with 3 controllers available.
:::

#### two-sector: AWA, ANWA:

![2AWA NWA](/assets/TMA_Warszawa_config_APP_N.jpg)

:::tip
This configuration is recommended during high traffic at EPMO.
:::

The responsibilities of the ASWA position are taken over by the ANWA position.

The responsibilities of the FWA position are taken over by the AWA position.

#### two-sector: AWA, FWA:

![2 AWA FWA](/assets/TMA_Warszawa_config_APP_DIR.jpg)

:::tip
This configuration is recommended during high traffic at EPWA.
:::

The responsibilities of the ASWA position and ANWA position are taken over by the AWA position.

#### single-sector: AWA

![1AWA](/assets/TMA_Warszawa_config_APP.jpg)

All responsibilities are taken over by the AWA position.

### Sectors capacity

|Online Sectors|EPWA BOTH RWY (operations/hour)|
|-|-|
|ANWA + ASWA + AWA + FWA|30|
|ANWA + AWA + FWA|28|
|AWA + FWA|25|
|ANWA + AWA|24|
|AWA|16|

All operation limits are for EPWA and EPMO arrivals (summed up)

When EPWA SINGLE RWY is in use, below sectors capacity are estabilished for all configurations according to runway in use:
- RWY 11 - 23 op/h
- RWY 15 - 21 op/h
- RWY 29 - 22 op/h
- RWY 33 - 25 op/h

## Standard Operating Procedures

The controllers of the ASWA, ANWA, AWA, and FWA sectors are responsible for managing the flow of arriving aircraft in such a way that the final approach does not extend beyond 25 NM from the runway threshold. As a standard, the final approach should be approximately 11 NM from the runway threshold.

Whenever possible, considering the current traffic and weather conditions, APP will manage and plan traffic to allow for the execution of the Continuous Descent Approach (CDA) technique.

APP and DIR controllers may use points:
- GOSIT (ILS/RNP 11),
- OSNUT (RNP 15) / XERTU (VOR 15),
- TEBRU (RNP 29) / VIBAT (VOR 29),
- ERLEG (ILS/RNP 33),

in order to execute shorter approaches than the standard and published ones (FAP/FAF 3000 ft). This is only possible with the consent or request of the aircraft crew.

The initial climb for all SID departures from EPWA is 6000 ft.

The initial climb for all SID departures from EPMO is 4000 ft.

Due to the intersection of the arrival route from the AGAVA point and the departure route to the EVINA point in the TMA Warszawa, aircraft departing via EVINA point should be instructed to climb to FL160 initially. Further climb should occur after ensuring complete separation from the arrivals from the AGAVA point.

If the SID procedure cannot be performed (e.g., procedure suspension, weather conditions) or for departures not covered by the SID procedure (e.g., alternative routes), the following Nonstandard Departure Procedure applies:
- departure on the runway heading,
- initial climb to 6000 ft (for EPWA) or 4000 ft (for EPMO).

Unless otherwise instructed by ATC, aircraft entering the TMA Warszawa via entry points should maintain a speed of 280 kts IAS, then reduce speed according to the STAR procedures, sequentially to 250 kts and 220 kts IAS.

Aircraft performing an ILS or LOC approach (runways 11 or 33) and stabilized on the final approach course should maintain a speed of 160 kts IAS until 4 NM DME.

Aircraft performing a VOR approach should maintain a speed of 160 kts IAS until 8 NM DME relative to OKC.

The APP/DIR controller manages the traffic in such a way that the distance between arriving aircraft is no less than:
- 4 NM for non-precision approaches and Category I approaches,
- 6 NM for Category II/III approaches with RVR ≥ 400 m,
- 7 NM for Category II/III approaches with RVR < 400 m.

The APP/DIR controller is responsible for maintaining speed and separation between aircraft on approach.

## Coordination with other ATC units

### TWR Okęcie

The appropriate controllers responsible for arrivals to EPWA remain in constant coordination with TWR Okęcie controller.

TWR Okęcie controller designate active runways for the respective airports based on the runway selection methods outlined in the [Aerodrome Traffic Control Chapter of this instruction](./aerodrome).

It is stipulated that a change of active runways should occur no earlier than 30 minutes after notifying the APP controller of the need for a change. The APP controller will then begin adjusting the arrival sequence for the new runway.

Information regarding the runway in use must always be shared among all APP controllers.

Departures from EPWA do not require an APP controller's clearance (“departure release”).

At the request of the TWR controller, the appropriate APP controller provides information on the distance in miles or time in minutes to the threshold for arriving traffic, to improve runway efficiency.

### TWR Modlin

APP Warszawa provides TWR Modlin with information about the current sector configuration and the applicable frequency after takeoff:
- single-sector configuration - to the AWA sector, frequency 128.805 MHz,
- other configurations - to the ANWA sector, frequency 125.055 MHz.

TWR Modlin controller designate active runways for the respective airports based on the runway selection methods outlined in the [Aerodrome Traffic Control Chapter of this instruction](./aerodrome).

It is stipulated that a change of active runways should occur no earlier than 30 minutes after notifying the APP controller of the need for a change. The APP controller will then begin adjusting the arrival sequence for the new runway.

Information regarding the runway in use must always be shared among all APP controllers.

Before granting takeoff clearance, TWR Modlin will coordinate with APP Warszawa for “departure release”. If, due to traffic conditions, the departure procedure cannot be executed, APP will provide a modified clearance, which TWR will pass on to the aircraft crew.

In exceptional cases and after direct agreement between the APP Warszawa controllers and TWR Modlin controllers, landing on a different direction than the runway in use may be allowed.

APP Warszawa transfers control and communication of the aircraft to TWR Modlin at a distance of no less than 4 NM from the runway threshold. This transfer will only occur after the crew reports stabilization on the approach course or after reporting visual contact with the airport and declaring readiness for the visual approach.

### TWR Łódź

The TWR Łódź controller coordinates with the APP Warszawa controller the departure conditions for an aircraft entering TMA Warszawa.

Clearances for aircraft departing from Łódź (EPLL) airport towards the TMA Warszawa include a climb to a maximum of FL090.

At the request of TWR Łódź, APP Warszawa can provide air traffic control services for aircraft departing from and arriving at EPLL in the delegated airspace segment (CTA 03).

:::info 
CTA03 is a temporary delegation, meaning that it is up to TWR Łódź to decide whether this airspace is delegated to APP Warszawa or not.
:::

The transfer of control should occur at the TMA boundary, both from TWR Łódź to APP Warszawa and from APP Warszawa to TWR Łódź.

### TWR Radom

The Radom TWR controller coordinates with the APP Warszawa controller the departure conditions for an aircraft entering TMA Warszawa. TWR Radom may take over the provision of ATS services in CTA08 upon acceptance by APP Warszawa.

Upon the transfer of control to TWR Radom, radar control is terminated.

### APP Kraków

In cases where both APP Kraków and APP Warszawa controllers are logged in and there is no logged ACC Warszawa, the following routes are managed as part of the “bridge” procedure:
- EPWA <-> EPKK,
- EPWA <-> EPKT,
- EPMO <-> EPKK,
- EPMO <-> EPKT.

Aircraft remain in communication with the selected APP controller and are then directly handed over to the next APP controller halfway between the sectors of the TMA.

Conditions for “Bridge” are:
- aircraft operating on the listed routes are at or below FL240,
- prior coordination and mutual agreement between controllers,
- low traffic in both TMA sectors,
- no significant traffic outside of the TMA sectors on the flight route of the selected aircraft.

During “bridging,” shortcuts are not allowed beyond the boundaries of the respective TMA, even when agreement has been made with the receiving controller.