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
    NOTES = 8
    URL = 9


_lo_indices = [Row.LO1, Row.LO2, Row.LO3, Row.LO4]


def parse_csv(inp):
    x = []
    rdr = csv.reader(inp, delimiter="\t")
    header = False
    for row in rdr:
        if not header:
            assert row == [
                "course_number",
                "course_title",
                "timing",
                "lo1_understanding_eeb",
                "lo2_research_and_ethics_in_eeb",
                "lo3_do_indep_res_in_eeb",
                "lo4_disseminate_research",
                "foci",
                "notes",
                "url",
            ]
            header = True
            continue

        lo_vec = [int(row[idx]) for idx in _lo_indices]
        foci_list = row[Row.FOCI].split(",")
        foci_list = [i.strip() for i in foci_list]
        foci_list.sort()
        foci = ",".join(foci_list)
        for o in lo_vec:
            assert 0 <= o <= 3
        number_el = row[Row.NUMBER]
        title = row[Row.TITLE].strip()
        topics_pref = "topics in:"
        if title.lower().startswith(topics_pref):
            title = title[len(topics_pref):]
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
        if foci:
            obj["foci"] = foci
        notes = row[Row.NOTES].strip()
        if notes:
            obj["notes"] = notes
        url = row[Row.URL].strip()
        if url:
            obj["urls"] = url
        x.append(obj)
    return x


def main(fp):
    with open(fp, "r", encoding="utf-8") as inp:
        x = parse_csv(inp)
    data = json.dumps(x, sort_keys=True, indent=2)
    print(f"""////////////////////////////////////////////////////////////////////////
// Data to be read from upload, at some point...
var all_events = {data}
""")


if __name__ == "__main__":
    main(sys.argv[1])
