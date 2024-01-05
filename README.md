curriculummap
=============

Installing tools:
    python3 -mvenv env
    source env/bin/activate
    pip install Chameleon


Whenver you change an html template in `templates` run:

    make

or:

    ./scripts/make_html.py

to regenerate the `data.js` file:

    mkdir -f cruft

copy the tab-separated course info spreadsheet to:

`cruft/EEB-course-data-for-map.csv`

    ./scripts/excel_to_json.py cruft/EEB-course-data-for-map.csv > cruft/data.js \
      && mv cruft/data.js data.js

using the `&&` to only move on successful completion

