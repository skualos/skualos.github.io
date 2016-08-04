---
layout: post
title: Racial Dot Map Brazil - Part 1
published: false
---

I really liked the way that the [Racial Dot Map](http://www.coopercenter.org/demographics/Racial-Dot-Map){:target="_blank"}, created by [Dustin Cable](https://twitter.com/cableondemandmade){:target="_blank"} at the  [Weldon Cooper Center for Public Service](http://www.coopercenter.org/){:target="_blank"} (Univeristy of Virginia) alows to spatially visualize population density and etnic distribution over the territory.

So I decided to do a similar map for Brazil and will be documenting the process on this blog. As Dustin provided the [code for his project](https://github.com/unorthodox123/RacialDotMap){:target="_blank"} on GitHub, it will be possible to adapt it for the data provided by the [IBGE](http://www.ibge.gov.br/){:target="_blank"} (the Brazilian Institute of Geography and Statistics), responsible of the population census in Brazil.

The first step is obviously to go after the data. Census tracts agregates are the most discretisized available information in Brazil, so this is what we're going after. After some digging in the IBGE website, I found that census tracts data 
from the latest population census (2010) lives in this [FTP server folder](ftp://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/Resultados_do_Universo/Agregados_por_Setores_Censitarios){:target="_blank"}.

The first file contains metadata, and all the others correspond each one to a Brazilian state (except for the state of São Paulo, which due it's population size has been divided in two files: São Paulo city and the remaining of São Paulo state).

State files contain several tables for diferent demographic themes, in both CSV and XLS formats. To find out which one has population by etnicity, we report to the PDF inside the metadata zip file.

By reading this document we can find out that the file we need is the one named Pessoas_03 (Color or race, age and gender), and most specifically the fields:

* Cod_setor: code of the census tract

* V001:	Total population

* V002:	White population

* V003:	Black population

* V004:	Yellow population (asiatics)

* V005:	"Parda" population (mixed race)

Those are the official classifications for etnic racews in Brazil, and asignement is made by the own person, by declaring to the interviewer to which etnic group they identify most with.