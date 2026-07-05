---
sidebar_position: 7
sidebar_label: 'Area Control Service'
slug: /acc
---
# Area Control Service

## ACC Sectors

![ACC Sectors](/assets/ACC_sectors.jpg)

**ACC positions and frequencies**

|Sector|Callsign|Frequency [MHz]|Sector|Callsign|Frequency [MHz]|
|-|-|-|-|-|-|
|ALLFIR LM|EPWW_ALL_CTR|125.450|G L|EPWW_G_CTR|129.075|
|ALLFIR H|EPWW_ALH_CTR|132.700|J L|EPWW_J_CTR|124.625|
|C L|EPWW_C_CTR|133.475|JR LM|EPWW_JR_CTR|130.875|
|D L|EPWW_D_CTR|134.225|NE LMH|EPWW_NE_CTR|127.450|
|DB+T LM|EPWW_DBT_CTR|127.025|T LM|EPWW_TM_CTR|130.625|
|DBF+G LM|EPWW_DBF_CTR|133.180|TC+J LM|EPWW_TCJ_CTR|134.875|
|DT LM|EPWW_DT_CTR|128.765|EFIR (NER+J+C)|EPWW_E_CTR|120.950|
|DTC LMH|EPWW_DTC_CTR|125.340|NFIR (BDFGNE+C)|EPWW_N_CTR|130.675|
|F L|EPWW_F_CTR|124.275|SFIR (TCJRE)|EPWW_S_CTR|123.625|
|FG LM|EPWW_FG_CTR|124.925||||

**Sector ownership and topdown coverage**

Detailed sectors ownerships and topdown coverage available at (https://plvacc.pl/acc-sectors), or in [appendix](/category/appendix-1-acc-operations-manual) to this manual.

**CPDLC**

ACC controllers may utilise CPDLC at their discretion. The recommended way of using CPDLC is via the TopSky plugin.

CPDLC may be used in the Area Control Service for aircraft above FL 95 (excluding TMAs).

|Sector|Callsign|LOGON|Sector|Callsign|LOGON|
|-|-|-|-|-|-|
|ALLFIR LM|EPWW_ALL_CTR|EPWW|G L|EPWW_G_CTR|EPWG|
|ALLFIR H|EPWW_ALH_CTR|EPWH|J L|EPWW_J_CTR|EPWJ|
|C L|EPWW_C_CTR|EPWC|JR LM|EPWW_JR_CTR|EPJ1|
|D L|EPWW_D_CTR|EPWD|NE LMH|EPWW_NE_CTR|EPN1|
|DB+T LM|EPWW_DBT_CTR|EPD1|T LM|EPWW_TM_CTR|EPT1|
|DBF+G LM|EPWW_DBF_CTR|EPD2|TC+J LM|EPWW_TCJ_CTR|EPT2|
|DT LM|EPWW_DT_CTR|EPD3|EFIR (NER+J+C)|EPWW_E_CTR|EPWE|
|DTC LMH|EPWW_DTC_CTR|EPD4|NFIR (BDFGNE+C)|EPWW_N_CTR|EPWN|
|F L|EPWW_F_CTR|EPWF|SFIR (TCJRE)|EPWW_S_CTR|EPWS|
|FG LM|EPWW_FG_CTR|EPF1||||

Controllers providing CPDLC put the following information in their controller’s text ATIS: “CPDLC/DCL FL95+ [LOGON]”, where [LOGON] is replaced by the LOGON code from the table above.

## Coordination with APP

Unless otherwise agreed, ACC controllers initiate the initial descent of aircraft approaching the TMA in accordance with the guidelines of Letters of Agreement to ensure coordinated entry levels into the TMA and facilitate the work of APP controllers in providing an appropriate descent profile (depending on the STAR procedure).

**Arrival information**

ACC Warszawa issues a STAR clearance when one of the following conditions is met:
- aircraft’s arrival routes via TMA Warszawa (destination aerodrome: EPWA, EPMO, EPRA, EPLL),
- next controller requested direct flight to a point on a STAR,
- next controller requested to relay STAR clearance.

## Airspace delagation

**CTA 01 and CTA02 to APP Warszawa**

![CTA01, CTA02](/assets/ACC_CTA01.jpg)

Airspaces CTA01 (FL95/FL245) and CTA02 (FL225/FL245) are delegated to APP Warszawa, excluding active TMA Łódź.

ACC Warszawa unit may take over the provision of ATS after prior notification, which must happen 5 minutes earlier.

**CTA05 to APP Poznań**

![CTA05](/assets/ACC_CTA05.jpg)

In order to reduce the number of coordinations between ACC Warszawa and APP Poznań, and to reduce air traffic complexity in sector “T”, CTA05 has been established, in which responsibility of provision of ATS is delegated from ACC Warszawa to APP Poznań.

ACC Warszawa unit may take over the provision of ATS after prior notification, which must happen 5 minutes earlier.

**CTA08 to APP Warszawa**

![CTA08](/assets/ACC_CTA08.jpg)

In order to reduce the number of coordinations between APP Warszawa and TWR Radom, CTA08 has been established, in which responsibility of provision of ATS is delegated from TWR Radom to APP Warszawa.

**CTA09 to APP Kraków**

![CTA09](assets/ACC_CTA09.jpg)

In order to improve the quality of ATC services through the possibility of the provision of radar approach control service, a separate CTA09 area has been established within which the responsibility for the provision of ATS is delegated from TWR Rzeszów to APP Kraków. CTA 09 limits are coincident with those of RZESZÓW TMA.

**CTR Heringsdorf to FIR EDWW**

![Heringsdorf](assets/ACC_Heringsdorf.jpg)

In order to provide efficient ATS in CTR Heringsdorf, this sector (designated as TMA Szczecin Sector Heringsdorf) is delegated to TWR Heringsdorf.

**ACC Midsea to FIR ESMM**

![Midsea](/assets/ACC_Midsea.jpg)

In order to reduce the number of coordinations for air traffic in AWYs M865, N133 and M607, a separate area over the high seas of the Baltic Sea has been established within FIR Warszawa. This designated airspace, named MIDSEA, is delegated to ATCC Malmö, in which case ATCC Malmö will be the authority responsible for air traffic control and the provision of flight information services in this area.

**Part of ACC B to FIR ESMM**

![Ronne](/assets/ACC_Ronne.jpg)

In order to reduce the number of coordinations for air traffic in AWYs, a separate area over the high seas of the Baltic Sea has been established within FIR Warszawa. This designated airspace, named RÖNNE SOUTH, is delegated to ATCC Malmö, in which case ATCC Malmö will be the authority responsible for air traffic control and the provision of flight information services in this area.

**W of OKX to FIR LKAA**

![OKX](/assets/ACC_OKX.jpg)

In order to reduce the number of coordinations for air traffic in AWY P96, a separate area has been established within FIR Warszawa. This designated airspace is delegated to ACC Praha, in which case ACC Praha will be the authority responsible for air traffic control and the provision of flight information services in this area.

**S of KLODZKO to FI LKAA**

![Klodzko](/assets/ACC_Klodzko.jpg)

In order to reduce the number of coordinations for air traffic in AWYs, a separate area has been established within FIR Warszawa. This designated airspace is delegated to ACC Praha, in which case ACC Praha will be the authority responsible for air traffic control and the provision of flight information services in this area.