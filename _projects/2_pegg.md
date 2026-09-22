---
layout: page
title: PEGG
description: prime editing guide generator
img: assets/img/projects/pegg.png
importance: 2
category: Research
---

**PEGG (Prime Editing Guide Generator)** is an open-source Python package that designs prime editing guide RNAs (pegRNAs) and base editing guide RNAs (gRNAs) for precision genome editing.

Web-based design tools handle one guide at a time, which is fine for a single edit but impractical for a screen. PEGG is built for scale: give it a list of mutations and it returns a ready-to-order oligo library, making whole-library design tractable rather than a manual, per-variant chore.

### What it does

- **Guide generation** — builds pegRNAs or gRNAs from a mutation list, accepting either genomic coordinates or raw sequences.
- **Ranking and filtering** — scores candidate guides on properties such as on-target Azimuth scores.
- **Oligo synthesis** — automated oligo generation, with optional synthetic sensor regions for high-throughput readout.
- **Library design** — includes safe-targeting, non-targeting, and silent-substitution controls.
- **Silent bystander mutations** — adds synonymous edits alongside the intended edit to raise editing efficiency.
- **Visualization** — tools for inspecting pegRNA and gRNA designs.

### Modules

`pegg.prime` for pegRNA design, `pegg.base` for base editing, `pegg.bystander` for silent-mutation logic, and `pegg.library` for library assembly.

### Try it

- Install: `pip install pegg` (requires Python 3.9 or 3.10)
- Docs: [pegg30.readthedocs.io](https://pegg30.readthedocs.io/en/latest/)
- Code: [github.com/kexindon/PEGG3.0](https://github.com/kexindon/PEGG3.0)
