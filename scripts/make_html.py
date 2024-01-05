#!/usr/bin/env python3
import os
from chameleon import PageTemplateLoader




def regen():
    scripts_path = os.path.dirname(__file__)
    par, sc = os.path.split(scripts_path)
    realpar = os.path.realpath(par)
    templates_dir = os.path.join(realpar, "templates")
    if not os.path.isdir(templates_dir):
        raise RuntimeError(f"{templates_dir} is not an existing directory")
    templates = PageTemplateLoader(templates_dir)


if __name__ == '__main__':
    regen()