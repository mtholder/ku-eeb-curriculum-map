*.html: templates/grad.pt
	./scripts/make_html.py

all: phd.html ma_nonthesis.html ma_thesis.html



clean:
	rm -f phd.html ma_nonthesis.html ma_thesis.html