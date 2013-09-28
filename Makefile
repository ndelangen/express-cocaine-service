BIN = ./node_modules/.bin
MOCHA = $(BIN)/mocha
ISTANBUL = $(BIN)/istanbul

.PHONY: test
test:
	$(MOCHA) --reporter list

.PHONY: clean-coverage
clean-coverage:
	-rm -rf lib-cov
	-rm -rf html-report

.PHONY: lib-cov
lib-cov: clean-coverage
	$(ISTANBUL) instrument --output lib-cov --no-compact --variable global.__coverage__ lib

.PHONY: coverage
coverage: lib-cov
	EXPRESS_MIDDLEWARE_COV=1 $(MOCHA) --reporter mocha-istanbul
	@echo
	@echo Open html-report/index.html file in your browser
