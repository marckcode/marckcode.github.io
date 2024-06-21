---
layout: post
title:  "Load Ramp Analysis (Brazilian Case)"
date:   2024-06-20 13:30:00 +0530
categories: Load Ramp Analysis
---

The main reasons to analyze the magnitude of load ramps, specially net load ramps (NL) in the brazilian system, are listed as follows:

<ol>
    <li>Integration of large shares of inverter-based sources (IBS) in the national grid.</li>
    <li>Increase power system “Flexibility” requirements.</li>
    <li>Net Load Ramp quantification.</li>
    <li>Avoid “Cycling” damage in thermal power plants.</li>
</ol>

It is important to note that this work was inspired in the analysis that GridStatus made on the CAISO and ERCOT power grid systems.
To read more about it, refer to <a href="https://blog.gridstatus.io/net-load-ramps/" target="_blank">GridStatus/Net-Load-Ramps</a>

This article related to the ENGIE Brazil project called "Methodologies for Identification of Operational Constraints in Energy Systems with High
Penetration of Variable Renewable Energy Sources" (FERV, in portuguese), outlines the relevance of the Net Load Ramp analysis and its repercusion 
on the brazilian power grid of the future.

<center><img src="/assets/post2/load_evolve_2.png"></center>

The approach taken to calculate the ramp magnitudes is as follows:

\begin{align}
	\Delta_h P(t) = P(t) - P(t-h) \label{eq:test1}
\end{align}

This ramp value will provide insights into the magnitude, frequency, and duration of perturbations in the system.
The value of $h$ will depend on the Case analyzed, currently for the Brazilian Power System, the values of $1$, $3$, $5$, $7$ and $12$ are considered.

Following this, the Net Load will allow us to identify situations where the operator curtails the production of a renewable park due to overproduction.

\begin{align}
	NL = Load - P_{solar} - P_{wind} \label{eq:test2}
\end{align}


This approach can be easily explained by doing a shift in the hourly historical dataset, as can be seen in the following plots for $\Delta_t = 1$ and $\Delta_t = 12$:

<center><img src="/assets/post2/rampt1.png"></center>
<center><img src="/assets/post2/rampt12.png"></center>