---
sidebar_position: 4
sidebar_label: 'vFIR Warszawa Airspace'
slug: /airspace
---
# vFIR Warszawa Airspace

## Airspace structure
### Controlled airspace
- CTA from FL95 to FL660 — class C airspace,
- TMA, CTR — below FL95 — class C or D — see AIP ENR 2.1.1 or AD2,
- MTMA, MCTR — class D — see AIP ENR 2.1.1 or AD2,
- airspaces delegated to other FIRs — see AIP ENR 2.1.2.
  
### Uncontrolled airspace
Class G — includes airspace from GND to FL95, outside of controlled airspace.

### Military airspace
Currently, only MCTR Dęblin, MCTR Krzesiny and MTMA Dęblin are simulated on VATSIM network.
In the absence of vATC responsible for given military airspace, these airspaces are downgraded to class G airspace.
The remaining military airspaces are not currently simulated and have been classified as class G airspace.

### Reduced Vertical Separation Minimum (RVSM) in vFIR Warszawa

vFIR Warszawa between FL290 and FL410 inclusive is an RVSM airspace.
In this airspace, the minimum vertical separation is:
- **1000 ft** between aircraft authorized for RVSM operations;
- **2000 ft** between:
  - aircraft authorized for RVSM operations and aircraft without such authorization,
  - aircraft not authorized for RVSM operations,
  - formation of aircraft and other aircraft.

### Transition level
If the QNH at one of the controlled airports in the vFIR Warszawa is below **995 hPa**, the transition level in the Warsaw FIR is set at **FL 90**.
If the QNH at all controlled airports in the vFIR Warszawa is equal to or greater than **995 hPa**, the transition level in the vFIR Warszawa is set at **FL 80**.

## Provided services
Within vFIR Warszawa the following Air Traffic Services are provided:
### Air Traffic Control (ATC) Service

Air Traffic Control service is provided for the purpose of:
- preventing collisions,
- expediting and maintaining an orderly flow of traffic.

ATC Service may be exercised by surveillance or procedural control.

### Flight Information Service (FIS)
Flight Information Service is provided for the purpose of giving advice and information useful for safe and efficient conduct of flights.
FIS provides:
- meteorological information, SIGMET and AIRMET,
- information about known air traffic,
- coordinated information regarding clearances to enter controlled airspace, in consultation with appropriate ATC units.

### Alerting Service (ALRS)
Alerting service is provided to notify appropriate organizations regarding aircraft in need of search and rescue aid, and assist such organizations as required.
Due to the specificity of VATSIM, the alert service in vFIR Warszawa is de facto not conducted, except for the INCERFA phase, where in the event of lack of communication with the aircraft within a specified period of time, the unit providing ATS should initiate an attempt to contact the pilot, either via VHF or by text message. 
The individual phases of alert service, as well as principles of providing FIS are described in the Flight Information Service chapter.

## Squawk Code Assignment Rules
Virtual ATC of FIR Warszawa is provided with a pool of transponder codes based on real-life CCAMS (Centralized Code Assignment & Management System). It uses available flight plan data to assign Secondary Surveillance Radar (SSR) codes to flights at the time they are actually required, checking availability of the code.
System automatically selects and sends a code to the controller requesting assignment of the code, based on the available information of flight route and aircraft equipment. It monitors code use to ensure safe and efficient operation, ensures a code conflict-free trajectory for the flight, allowing the code to be retained during the flight.

### VFR
The default code for VFR flights is 7000. An aircraft flying with this code may be identified by radar by the controller in controlled airspace and provided with FIS/AFIS in Class G airspace using radar surveillance, but only if the controller has a reasonable certainty regarding SP
identification (no other traffic with the same transponder code within 20 NM). If there is no such certainty, the controller may assign a transponder code from the pool of FIS units 7401 - 7477, or use other methods of identification. The individually assigned unique transponder code should not be changed regardless of the aircraft's future route. 

For flights with HEMS status controllers should use code 0001, for LPR IFR training flights codes from the pool are used and for VFR training flights code 7000 or from the FIS pool.