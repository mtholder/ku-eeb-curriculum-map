#!/usr/bin/env python3
import csv
import sys
import json
from enum import IntEnum


class Row(IntEnum):
    NUMBER = 0
    TITLE = 1
    TIMING = 2
    LO1 = 3
    LO2 = 4
    LO3 = 5
    LO4 = 6
    FOCI = 7
    LEVEL = 8
    NOTES = 9
    URL = 10


_lo_indices = [Row.LO1, Row.LO2, Row.LO3, Row.LO4]


def parse_csv(inp):
    in_all_levels = []
    in_ma_nonthesis = []
    in_ma_thesis = []
    in_phd = []
    rdr = csv.reader(inp, delimiter="\t")
    header = False

    expected_header = (
        "course_number",
        "course_title",
        "timing",
        "lo1_understanding_eeb",
        "lo2_research_and_ethics_in_eeb",
        "lo3_do_indep_res_in_eeb",
        "lo4_disseminate_research",
        "foci",
        "level",
        "notes",
        "url",
    )
    for row in rdr:
        if not header:
            for ind, el in enumerate(expected_header):
                try:
                    assert row[ind] == el
                except:
                    sys.stderr.write(f"Error row={row}\n")
                    raise
            header = True
            continue

        lo_vec = [int(row[idx]) for idx in _lo_indices]
        foci_list = row[Row.FOCI].split(",")
        foci_list = [i.strip() for i in foci_list]
        foci_list.sort()
        foci = ",".join(foci_list)
        for o in lo_vec:
            assert 0 <= o <= 3
        level = row[Row.LEVEL].strip()
        number_el = row[Row.NUMBER]
        title = row[Row.TITLE].strip()
        topics_pref = "topics in:"
        if title.lower().startswith(topics_pref):
            title = title[len(topics_pref) :]
            title = title.strip()
        if number_el.lower() == "event":
            obj = {"type": "event"}
        else:
            title = f"{number_el} {title}"
            obj = {"type": "class"}
        obj["title"] = title
        timing = row[Row.TIMING].strip()
        if timing:
            obj["timing"] = timing
        obj["outcomes"] = lo_vec
        if level:
            ll = level.lower()
            if ll == "mant":
                x = in_ma_nonthesis
            elif ll == "mat":
                x = in_ma_thesis
            elif ll == "phd":
                x = in_phd
            else:
                raise RuntimeError(f"level value '{level}' not recognized.")
            # sys.stderr.write(f"level=\'{level}\'\n")
            obj["level"] = ll
        else:
            x = in_all_levels
        if foci:
            obj["foci"] = foci
        notes = row[Row.NOTES].strip()
        if notes:
            obj["notes"] = notes
        url = row[Row.URL].strip()
        if url:
            obj["urls"] = url
        x.append(obj)
    return in_all_levels, in_ma_nonthesis, in_ma_thesis, in_phd


def main(fp):
    with open(fp, "r", encoding="utf-8") as inp:
        all_l, mant, mat, phd = parse_csv(inp)
    all_l = json.dumps(all_l, sort_keys=True, indent=2)
    mant = json.dumps(mant, sort_keys=True, indent=2)
    mat = json.dumps(mat, sort_keys=True, indent=2)
    phd = json.dumps(phd, sort_keys=True, indent=2)
    print(
        f"""////////////////////////////////////////////////////////////////////////
// Data to be read from upload, at some point...
var in_all_levels = {all_l} ;
var in_ma_nonthesis = {mant} ;
var in_ma_thesis = {mat} ;
var in_phd = {phd} ;
"""
    )


if __name__ == "__main__":
    main(sys.argv[1])
