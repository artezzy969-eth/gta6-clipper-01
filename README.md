# gta6-clipper-01 — GTA 6 Getaway Goes Wrong

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"** ($500 pot).
Account: @alfin-mulyadi. The entry is the YouTube Short itself; this repository
only names it and carries the program the grader runs.

## The video

**Title:** GTA 6 Getaway Goes Wrong

The clip opens cold on the most arresting stretch of Rockstar's
**Grand Theft Auto VI Trailer 2** — one chase falling apart, in three shots,
about five seconds of pure GTA chaos:

1. A car erupts in a fireball between two police cruisers, seen over Lucia's
   shoulder from inside the getaway car.
2. Lucia grappling with a man on the open back of a moving vehicle, high up,
   city below.
3. A pickup truck roaring away down a dark street at night, trailing sparks.

Then, on screen over a dimmed freeze of the explosion frame, the pitch:

- *Make clips like this with AI*
- *and earn money on make.fun*
- *make.fun/bounty/gta6-clipper-01*
- *Go make yours*

No title card, no intro — frame one is the fireball, because on Shorts the
first second decides everything.

## Clip facts

- **Source:** Rockstar Games' official Grand Theft Auto VI Trailer 2
  (https://www.youtube.com/watch?v=VQRLujxTm3c), all footage captured on PS5.
- **Clip window:** source timestamps **117.8–122.9 s** (explosion 117.8–118.6 s,
  vehicle fight 120.0–120.9 s, getaway 121.0–122.9 s).
- **Format:** vertical **1080x1920 (9:16)**, **17.10 s** total, under 60 s — a
  YouTube Short. Original trailer audio kept ("Hot Together" by The Pointer
  Sisters).
- **Upload:** the user uploads `clip.mp4` to YouTube as a public Short with
  the exact title, description and tags in `DESCRIPTION.md`. The video is not
  yet published; `VIDEO.json` holds a placeholder until the real URL is known.

## How to run the program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root into the output directory, where the grader reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits non-zero if the copy fails. It makes
no network calls, reads no clock, and touches no files outside the repository
and the output directory. Running it twice writes byte-identical output.

## Bounty

- Bounty page: https://make.fun/bounty/gta6-clipper-01
- Play code: `makefun-seal-gazebo-topaz`
- Referral code: `06fzb26q`
- Entries close Mon 2026-11-23 08:00 WIB. Places go by YouTube views; top 20
  share $500.

## License

MIT — see [LICENSE](LICENSE). © 2026 artezzy969.
