package BEBuildWeek2.Epic_Energy_Services_CRM.controllers;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import BEBuildWeek2.Epic_Energy_Services_CRM.entities.Fattura;
import BEBuildWeek2.Epic_Energy_Services_CRM.payloads.FatturaPayload;
import BEBuildWeek2.Epic_Energy_Services_CRM.payloads.UserRegistrationPayload;
import BEBuildWeek2.Epic_Energy_Services_CRM.services.FatturaService;
import BEBuildWeek2.Epic_Energy_Services_CRM.utils.StatoFattura;

@RestController
@RequestMapping("/fatture")
public class FatturaController {
	private final FatturaService fatturaService;

	@Autowired
	public FatturaController(FatturaService fatturaService) {
		this.fatturaService = fatturaService;
	}

	@GetMapping
	public Page<Fattura> getAllFatture(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idFattura") String sortBy) {
		return fatturaService.getAllFatture(page, size, sortBy);
	}

	@GetMapping("/{fatturaId}")
	public Fattura getFatturaById(@PathVariable UUID fatturaId) {
		return fatturaService.getFatturaById(fatturaId);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Fattura createFattura(@RequestBody @Validated FatturaPayload body) {
		return fatturaService.createFattura(body);
	}

	@PutMapping("/{fatturaId}")
	public Fattura updateFattura(@PathVariable UUID fatturaId, @RequestBody Fattura fattura) {
		int numeroFattura = fattura.getNumeroFattura();
		int anno = fattura.getAnno();
		Date data = fattura.getData();
		BigDecimal importo = fattura.getImporto();
		StatoFattura stato = fattura.getState();

		return fatturaService.updateFattura(fatturaId, numeroFattura, anno, data, importo, stato);
	}

	@DeleteMapping("/{fatturaId}")
	public void deleteFattura(@PathVariable UUID fatturaId) {
		fatturaService.deleteFattura(fatturaId);
	}

	@GetMapping("/cliente/{clienteId}")
	public Page<Fattura> getFattureByCliente(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idFattura") String sortBy, @PathVariable UUID clienteId) {
		return fatturaService.findFatturaByCliente(page, size, sortBy, clienteId);
	}

	@GetMapping("/state/{stato}")
	public Page<Fattura> getFattureByStato(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idFattura") String sortBy, @PathVariable StatoFattura stato) {
		return fatturaService.findFatturaByStato(page, size, sortBy,stato);
	}

	@GetMapping("/data/{data}")
	public Page<Fattura> getFattureByData(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "data") String sortBy, @PathVariable String data) throws ParseException {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date convertedData = dateFormat.parse(data);
		return fatturaService.findFatturaByData(page, size, sortBy, convertedData);
	}

	@GetMapping("/anno/{anno}")
	public Page<Fattura> getFattureByAnno(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idFattura") String sortBy,@PathVariable int anno) {
		return fatturaService.findFatturaByAnno(page, size, sortBy,anno);
	}

	@GetMapping("/importo/{minImporto}/{maxImporto}")
	public Page<Fattura> getFattureByRangeImporto(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idFattura") String sortBy,@PathVariable BigDecimal minImporto,
			@PathVariable BigDecimal maxImporto) {
		return fatturaService.findFatturaByRangeImporto(page, size, sortBy,minImporto, maxImporto);
	}

}
