---
layout: page
title: Early leukemia evolution
description: how founder mutations shape what comes next
importance: 3
category: Research
---

Cancer evolves by the stepwise acquisition of mutations under clonal selection. In blood, this process is unusually visible: a hematopoietic stem cell can pick up a mutation that boosts its self-renewal and expand into a detectable pre-malignant clone, a phenomenon known as **clonal hematopoiesis (CH)**.

A single CH mutation is rarely enough to cause leukemia. Transformation to acute myeloid leukemia (AML) typically requires a later cooperating mutation. What is striking is that these pairings are not random — particular founder mutations co-occur with particular later drivers far more often than chance would predict, and the same founder can carry a very different prognosis depending on which mutation follows it.

**Why that happens is largely unknown.** My hypothesis is that founder mutations exert gene- and allele-specific epistatic effects on which subsequent drivers are advantageous, and that these effects shape the evolutionary trajectory of a pre-leukemic clone.

### Approach

Clinical sequencing captures real patient histories but is observational: a recurrently co-mutated genotype cannot by itself be attributed to a fitness advantage. Mouse models allow causal inference but are too low-throughput to survey the combinatorial space of founder–progressor pairs.

I am combining long-term stem cell culture, prime editing, and mouse models to measure these interactions directly. Founder mutations are installed one at a time as a fixed background, then a pooled library of candidate progressor mutations is introduced on top, so that the fitness effect of every pair can be read out at once. Epistasis is then quantified directly as the departure from additivity, ε = s<sub>AB</sub> − s<sub>A</sub> − s<sub>B</sub>, both in self-renewing stem cells and, after transplantation, across mature blood lineages. Single-cell multimodal profiling links the strongest interactions to the cell states that underlie them.

This work builds on tools I have developed or use throughout — [H2M](/projects/1_h2m/) to convert human variants into their mouse equivalents, and [PEGG](/projects/2_pegg/) together with prime editing sensors to design and validate the libraries.

### Why it matters

Mapping which founder–progressor combinations are genuinely cooperative, rather than merely co-observed, would help explain how pre-malignant clones become leukemia, and could point to genotype-specific vulnerabilities for intercepting the disease before it is established.
