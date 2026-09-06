---
sidebar_position: 10
sidebar_label: 'Flight Information Service'
slug: /fis
---
# Flight Information Service

## Sectorization

![FIS Sectors](/assets/FIS_sectors.jpg)

|Position|Callsign|Frequency [MHz]|
|-|-|-|
|EPWW_I_CTR|Warszawa Information|128.325|
|EPWW_IE_CTR|Warszawa Information|127.660|
|EPWA_I_APP|Warszawa Information|123.975|
|EPSY_I_APP|Warszawa Information|118.775|
|EPWA_IW_APP|Warszawa Information|128.575|
|EPWA_IE_APP|Warszawa Information|119.450|
|EPKK_I_APP|Krakow Information|119.275|
|EPKK_IE_APP|Krakow Information|119.950|
|EPGD_I_APP|Gdańsk Information|125.275|
|EPGD_IE_APP|Gdańsk Information|127.150|
|EPPO_I_APP|Poznań Information|126.300|
|EPPO_IS_APP|Poznań Information|127.250|

**EPWA_I_APP** covers southern part of Warszawa Information sectors (EPWA_I_APP, EPWA_IE_APP, EPWA_IW_APP).
**EPWW_IE_CTR** covers all Warszawa Information sectors (EPSY_I_APP, EPWA_I_APP, EPWA_IE_APP, EPWA_IW_APP).

## Provided services

**Flight Information Service**

The Flight Information Service provides the following information:
- meteorological information, SIGMET, and AIRMET,
- information on known air traffic – within the scope of duties related to providing information in Class G airspace,
- coordinated information regarding access and permissions for entry into
controlled airspace, in consultation with the relevant ATC controllers,
- information on pre-eruption volcanic activity, volcanic eruptions, and volcanic ash clouds,
- information on changes affecting the availability of radio navigation services,
- ground conditions when covered with snow, ice, or a significant layer of water, and other information that may affect safety.

**Alerting service**

When a pilot submits a flight plan to ATS services, the FIS officer is obligated to provide an alerting service for both VFR and IFR flights throughout the entire flight.

The alerting service consists of three phases:
- uncertainty phase (INCERFA),
- alert phase (ALERFA),
- distress phase (DETRESFA).

Due to the specific nature of VATSIM (logouts, simulator crashes, errors, etc.), the simulation of the alerting service is not practical and is therefore not simulated in the VATSIM network.

**Radar service**

The Flight Information Service (FIS) officer provides Radar Information Service (RIS) for aircraft that have been properly identified using the methods described in ICAO Doc 4444: PANS-ATM, Chapter 8, Sections 8.6.2 and 8.6.3.

In uncontrolled airspace, the FIS officer cannot provide air traffic control and does not ensure separation between aircraft.

The FIS officer, within their capabilities and based on available traffic information, provides traffic information. Upon request from the aircraft crew, the FIS officer may also offer advisory information to help avoid collisions.

Radar service provided by the FIS officer is terminated when:
- the aircraft leaves the FIS sector, and there is no further logged ATS unit available to continue the service,
- the aircraft leaves the FIR Warszawa into uncontrolled airspace,
- radar contact with the aircraft is lost.

## Uncontrolled airspace structure

**Radio Communication Mandatory Zone (RMZ)**

In the vFIR Warszawa 12 Radio Communication Mandatory Zones (RMZ) have been
established:
- RMZ Bydgoszcz (EPBY),
- RMZ Gdańsk (EPGD),
- RMZ Kraków (EPKK) / Katowice (EPKT),
- RMZ Lublin (EPLB),
- RMZ Łódź (EPLL),
- RMZ Poznań (EPPO),
- RMZ Rzeszów (EPRZ),
   RMZ Szczecin (EPSC),
- RMZ Olsztyn-Mazury (EPSY),
- RMZ Warszawa (EPWA/EPMO),
-  RMZ Wrocław (EPWR),
- RMZ Zielona Góra (EPZG),
- RMZ DORSZ*.

Except for RMZ Warszawa and RMZ DORSZ, all other RMZs coincide with controlled airspace boundaries and therefore do not apply in vFIR Warszawa, as top-down air traffic control service is provided.

:::note

On VATSIM, under the “top-down” service model, if the FIS officer is offline, responsibility for RMZ Warszawa communication falls to Warszawa Approach or Warszawa Radar.

:::

RMZ Warszawa:

![RMZ Warszawa](/assets/FIS_RMZ_Warszawa.jpg)

RMZ DORSZ:

![RMZ DORSZ](/assets/FIS_RMZ_DORSZ.jpg)
  
\* DORSZ - Dowództwo Operacyjne Rodzajów Sił Zbrojnych

All RMZ:

![RMZ](/assets/FIS_RMZ_all.jpg)

**Transponder Mandatory Zone [TMZ]**

In vFIR Warszawa 4 Transponder Mandatory Zones have been established:
- TMZ Gdańsk (EPGD),
- TMZ Poznań North (EPPO),
- TMZ Poznań South (EPWR),
- TMZ Warszawa,
- TMZ DORSZ*.

TMZs coincide with controlled airspace boundaries and therefore do not apply in vFIR Warszawa, as top-down air traffic control service is provided.

\* DORSZ - Dowództwo Operacyjne Rodzajów Sił Zbrojnych

![TMZ](/assets/FIS_TMZ_all.jpg)

**Flight Plan Mandatory Areas (FPL)**

In vFIR Warszawa 5 Flight Plan Mandatory Zones have been established:
- FPL Gdańsk (CTR/TMA Gdańsk),
- FPL Kraków (CTR/TMA Kraków and CTR Katowice),
- FPL Poznań (CTR Poznań and TMA Poznań North),
- FPL Wrocław (CTR Wrocław and TMA Poznań North),
- FPL Warszawa (CTR Okęcie, CTR Modlin and TMA Warszawa),
- FPL DORSZ*.

\* DORSZ - Dowództwo Operacyjne Rodzajów Sił Zbrojnych

![FPL](/assets/FIS_FPL_all.jpg)

## Aerodrome Flight Information Service (AFIS)

In vFIR Warszawa, the Aerodrome Flight Information Service (AFIS) is provided at Warszawa-Babice (EPBC) and Mielec (EPML) within the boundaries of their Aerodrome Traffic Zones(ATZ).

Within AFIS, both the Flight Information Service and the Alerting Service are provided. As a result, the AFIS officer (AFISO) cannot issue clearances or instructions. The primary tool of an AFISO is traffic information.

### EPBC - Warszawa - Babice

|Position|Frequency [MHz]|Callsign|
|-|-|-|
|EPBC_I_TWR|119.980|Babice Information|

Air traffic in the ATZ Babice operates using an aerodrome traffic pattern, with the northern circuit being the standard pattern.

At Warszawa-Babice (EPBC), non-standard traffic patterns are in effect:
- northern circuit at 1,800 ft AMSL,
- southern circuit at 1,200 ft AMSL.

When runway 15 at EPWA is in use for arrivals:
-the southern circuit is unavailable,
- the northern circuit altitude is limited to 1,500 ft AMSL,
- the maximum flight altitude in ATZ Babice A is restricted to 1,300 ft AMSL.

During glider operations, the grass runway is unavailable for aircraft other than those participating in glider flights.

### EPML - Mielec

|Position|Frequency [MHz]|Callsign|
|-|-|-|
|EPML_I_TWR|119.105|Mielec Information|

## Air traffic management in ATZ

On the VATSIM network, the following frequencies have been designated for
managing flights at uncontrolled aerodromes and their ATZs:
- Bielsko Radio (EPBA_R_TWR, 118.330 MHz),
- Białystok Radio (EPBK_R_TWR, 123.205 MHz),
- Gliwice Radio (EPGL_R_TWR, 118.260 MHz),
- Grądy Radio (EPGY_R_TWR, 126.855 MHz)
- Jastarnia Radio (EPJA_R_TWR, 122.830 MHz),
- Katowice Radio (EPKM_R_TWR, 120.080 MHz),
- Kikity Radio (EPKI_R_TWR, 119.405 MHz),
- Krosno Radio (EPKR_R_TWR, 119.555) MHz),
- Masłów Radio (EPKA_R_TWR, 118.080 MHz),
- Nowy Targ Radio (EPNT_R_TWR, 122.305 MHz),
- Pobiednik Radio (EPKP_R_TWR, 118.605 MHz),
- Przylep Radio (EPZP_R_TWR, 130.780 MHz),
- Radawiec Radio (EPLR_R_TWR, 121.390 MHz),
- Żar Radio (EPZR_R_TWR, 122.805 MHz).

Director of flights does not provide any air traffic services (ATS). However, the purpose of the director of flights is to ensure the safe flow of air traffic within the aerodrome's ATZ.

Due to the lack of an AUP, the ATZ of the above aerodromes is considered active only whenthe corresponding director of flights is logged in.