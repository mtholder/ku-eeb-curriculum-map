#!/usr/bin/env python3
import sys
from chameleon import PageTemplateLoader
import os


def regen():
    scripts_path = os.path.dirname(__file__)
    par, sc = os.path.split(scripts_path)
    realpar = os.path.realpath(par)
    templates_dir = os.path.join(realpar, "templates")
    if not os.path.isdir(templates_dir):
        raise RuntimeError(f"{templates_dir} is not an existing directory")
    templates = PageTemplateLoader(templates_dir)
    grad_template = templates["grad.pt"]
    vals = [
        {
            "degree_tag": "phd",
            "degree_name": "Ph.D.",
            "filename": "phd.html",
        },
        {
            "degree_tag": "mat",
            "degree_name": "Thesis Master's",
            "filename": "ma_thesis.html",
        },
        {
            "degree_tag": "mant",
            "degree_name": "Nonthesis Master's",
            "filename": "ma_nonthesis.html",
        },
    ]
    for d in vals:
        fn = d["filename"]
        with open(fn, "w") as outp:
            sys.stderr.write(f"... writing {fn} ...\n")
            outp.write(grad_template(**d))
            outp.write("\n")


if __name__ == "__main__":
    regen()
