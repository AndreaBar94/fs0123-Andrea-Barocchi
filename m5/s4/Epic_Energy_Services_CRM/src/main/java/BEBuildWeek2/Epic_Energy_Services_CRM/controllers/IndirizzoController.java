package BEBuildWeek2.Epic_Energy_Services_CRM.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import BEBuildWeek2.Epic_Energy_Services_CRM.entities.Indirizzo;
import BEBuildWeek2.Epic_Energy_Services_CRM.payloads.IndirizzoPayload;
import BEBuildWeek2.Epic_Energy_Services_CRM.services.IndirizzoService;

@RestController
@RequestMapping("/indirizzi")
public class IndirizzoController {
	@Autowired
	private final IndirizzoService indirizzoService;

	public IndirizzoController(IndirizzoService indirizzoService) {
		this.indirizzoService = indirizzoService;
	}

	@GetMapping
	public Page<Indirizzo> getAllIndirizzi(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idIndirizzo") String sortBy) {
		return indirizzoService.getAllIndirizzi(page, size, sortBy);
	}

	@GetMapping("/{indirizzoId}")
	public Indirizzo getIndirizzoById(@PathVariable UUID indirizzoId) {
		return indirizzoService.getIndirizzoById(indirizzoId);
	}

	@PostMapping
	public Indirizzo createIndirizzo(@RequestBody IndirizzoPayload indirizzo) {
		return indirizzoService.createIndirizzo(indirizzo);
	}

	@PutMapping("/{indirizzoId}")
	public Indirizzo updateIndirizzo(@PathVariable UUID indirizzoId, @RequestBody IndirizzoPayload indirizzo) {
		return indirizzoService.findIndirizzoByIdAndUpdate(indirizzoId, indirizzo);
	}

	@DeleteMapping("/{indirizzoId}")
	public void deleteIndirizzo(@PathVariable UUID indirizzoId) {
		indirizzoService.deleteIndirizzo(indirizzoId);
	}
}
